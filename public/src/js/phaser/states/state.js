PWG.State = (function() {
	PWG.Utils.inherits(State, PWG.Collection);
	// PWG.Utils.inherits(State, Phaser.State); 
	
	function State(params) {
		// trace('State['+params.name+']/constructor');
		State._super.constructor.call(this);

		this.model = new PWG.Model(params);
		this.model.set({
			isLandscape: true,
			loaded: false,
			createCalled: false,
			created: false,
			active: false
		});

		this.clearWorld = this.model.clearWorld;
		this.clearCache = this.model.clearCache;
	}
	
	State.prototype.start = function() {
		trace('State['+this.model.name+']/start');
	};
	
	State.prototype.orientationSet = function(isLandscape) {
		this.model.set({ isLandscape: isLandscape });
		if(isLandscape) {
			var created = this.model.get('created');
			var createCalled = this.model.get('createCalled'); 
			if(createCalled && !created) {
				// the state was read to build but device not in landscape orientation
				this.createState();
			}
		}
	};
	
	State.prototype.preload = function() {
		this.toLoad = 0;
		this.loaded = 0;
		var phaser = PolyworksGame.phaser;
		var loaded = {
			audio: {},
			images: {},
			sprites: {}
		};
		
		// trace('State['+this.model.name+']/preLoad, loaded = ' + this.model.loaded);
		if(!this.model.loaded) {
			trace('\tstate audio = ');
			trace(this.model.audio);
			if(this.model.audio && this.model.audio.length > 0) {
				var audio = PolyworksGame.get('audio');
				PWG.Utils.each(
					this.model.audio,
					function(a) {
						if(!PolyworksGame.loaded.audio[audio]) {
							trace('loading audio['+a+']: ', audio[a]);
							this.toLoad++;
							phaser.load.audio(a, audio[a]);
							loaded.audio[a] = true;
						}
					},
					this
				);
			}
			if(this.model.images && this.model.images.length > 0) {
				var images = PolyworksGame.get('images');
				PWG.Utils.each(this.model.images,
					function(img) {
						// trace('\t\timage['+img+'] loaded = ' + PolyworksGame.loaded.images[img]);
						if(!PolyworksGame.loaded.images[img]) {
							this.toLoad++;
							phaser.load.image(img, images[img]);
							loaded.images[img] = true;
						}
					},
					this
				);
			}
			if(this.model.sprites && this.model.sprites.length > 0) {
				var sprites = PolyworksGame.get('sprites');
				PWG.Utils.each(this.model.sprites,
					function(spr) {
						// trace('\t\tsprite['+spr+'] loaded = ' + PolyworksGame.loaded.sprites[spr]);
						if(!PolyworksGame.loaded.sprites[spr]) {
							var sprite = sprites[spr];
							// trace('\t\t\tsprite = ', sprite);
							this.toLoad++;
							phaser.load.spritesheet(spr, sprite.url, sprite.width, sprite.height, sprite.frames);
							loaded.sprites[spr] = true;
						}
					},
					this
				);
			}
			PolyworksGame.loaded = PWG.Utils.extend(PolyworksGame.loaded, loaded);
			this.model.loaded = true;
		}
	};
	
	State.prototype.create = function() {
		trace('State['+this.model.name+']/create');
		PolyworksGame.phaser.stage.backgroundColor = this.model.backgroundColor;
		PolyworksGame.removeLoadingDiv();
		if(PolyworksGame.isLandscape) {
			this.createState();
		} else {
			trace('WARNING: not in landscape orientation, can not create state');
		}
		this.model.set({ createCalled: true });
		this.createAudio();
	};
	
	State.prototype.createAudio = function() {
		if(this.model.audio && this.model.audio.length > 0) {
			trace('\tisMuted = ' + PolyworksGame.isMuted);
			if(!PolyworksGame.isMuted) {
				var audio = this.model.audio[0];
				if(PolyworksGame.currentAudioName !== audio) {
					if(PolyworksGame.currentAudio) {
						PolyworksGame.currentAudio.stop();
						PolyworksGame.currentAudio = null;
					}
					trace('audio = ', audio);
					// key, volume loop
					PolyworksGame.currentAudio = PolyworksGame.phaser.add.audio(audio, 1, true);
					// marker, position, volume, loop
					// PolyworksGame.currentAudio.play('', 0, 1, true);
					PolyworksGame.currentAudioName = audio;
				}
			}
		}
		
		if(this.model.name === 'menu') {
			var frame = 0;
			if(PolyworksGame.isMuted) {
				frame = 1;
			}
			this.model.collection[1].model.collection[1].frame = frame;
		} else if(this.model.name === 'gameOver' || this.model.name === 'completed') {
			if(PolyworksGame.currentAudio) {
				PolyworksGame.currentAudio.stop();
				PolyworksGame.currentAudio = null;
				PolyworksGame.currentAudioName = '';
			}
		}
	};

	State.prototype.createState = function() {
		// trace('State['+this.model.name+']/createState, created = ' + (this.model.get('created')));
		if(!this.model.get('created')) {
			this.gameOver = PolyworksGame.gameOver; 
			this.createWorld();

			if(this.model.pausable) {
				PWG.EventCenter.bind(PWG.Events.PAUSE_STATE, this.onPauseState, this);
				PWG.EventCenter.bind(PWG.Events.RESUME_STATE, this.onResumeState, this);
			}
			this.begin();
			this.model.set({ created: true });
		} else {
			trace('WARNING: state already created');
		}
	};

	State.prototype.createBlackBox = function() {
		var blackBg = PolyworksGame.phaser.add.sprite(0, 0, 'blackRect');
		blackBg.width = this.model.world.width;
		blackBg.height = this.model.world.height;
	    blackBg.anchor.setTo(0.5, 0.5);
	    blackBg.alpha = 1;
		
		this.blackBg = blackBg;
		
	    this.blackBoxTween = PolyworksGame.phaser.add.tween(blackBg)
		this.blackBoxTween.onComplete.add(function() {
			blackBg.destroy();
		});
	};
	
	State.prototype.tweenBlackBox = function() {
		this.blackBoxTween.to( { alpha: 0 }, 2000, Phaser.Easing.Exponential.In, true, 0, 0, false);
	};
	
	State.prototype.onPauseState = function() {
		trace('State['+this.model.name+']/onPauseState');
		if(this.paused) {
			this.paused = false;
		} else {
			this.paused = true;
		}
	};
	
	State.prototype.onResumeState = function() {
		// trace('State['+this.model.name+']/onResumeState');
		this.paused = false;
	};
	
	State.prototype.createWorld = function() {
		var world = this.model.world;
		// trace('State['+this.model.name+']/createWorld, x = ' + world.x + ', world.y = ' + world.y + ', width = ' + world.width + ', height = ' + world.height);
		PolyworksGame.phaser.world.setBounds(world.x, world.y, world.width, world.height);
	};

	State.prototype.update = function() {
		if(!this.paused) {
			// extend update implementation
		}
	};
	
	State.prototype.shutdown = function() {
		// trace('State['+this.model.name+']/shutdown');
		PWG.EventCenter.unbind(PWG.Events.PAUSE_STATE, this.onPauseState);
		PWG.EventCenter.unbind(PWG.Events.RESUME_STATE, this.onResumeState);

		this.paused = false;
		this.model.set({
			isLandscape: true,
			loaded: false,
			createCalled: false,
			created: false,
			active: false
		});

		if(PolyworksGame.currentAudio) {
			// PolyworksGame.currentAudio.stop();
			// PolyworksGame.currentAudio = null;
		}
		this.destroy();
	};

	return State;
})();