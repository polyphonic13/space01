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
		var phaser = PWGGame.phaser;
		var loaded = {
			images: {},
			sprites: {}
		};
		
		// trace('State['+this.model.name+']/preLoad, loaded = ' + this.model.loaded);
		if(!this.model.loaded) {
			// trace('\tstate images = ');
			// trace(this.model.images);
			if(this.model.images.length > 0) {
				var images = PWGGame.get('images');
				PWG.Utils.each(this.model.images,
					function(img) {
						// trace('\t\timage['+img+'] loaded = ' + PWGGame.loaded.images[img]);
						if(!PWGGame.loaded.images[img]) {
							this.toLoad++;
							phaser.load.image(img, images[img]);
							loaded.images[img] = true;
						}
					},
					this
				);
			}
			if(this.model.sprites.length > 0) {
				var sprites = PWGGame.get('sprites');
				PWG.Utils.each(this.model.sprites,
					function(spr) {
						// trace('\t\tsprite['+spr+'] loaded = ' + PWGGame.loaded.sprites[spr]);
						if(!PWGGame.loaded.sprites[spr]) {
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
			PWGGame.loaded = PWG.Utils.extend(PWGGame.loaded, loaded);
			this.model.loaded = true;
		}
	};
	
	State.prototype.create = function() {
		trace('State['+this.model.name+']/create');
		PWGGame.phaser.stage.backgroundColor = this.model.backgroundColor;
		PWGGame.removeLoadingDiv();
		if(PWGGame.isLandscape) {
			this.createState();
		} else {
			trace('WARNING: not in landscape orientation, can not create state');
		}
		this.model.set({ createCalled: true });
	};

	State.prototype.createState = function() {
		// trace('State['+this.model.name+']/createState, created = ' + (this.model.get('created')));
		if(!this.model.get('created')) {
			this.gameOver = PWGGame.gameOver; 
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
	
	State.prototype.onPauseState = function() {
		// trace('State['+this.model.name+']/onPauseState');
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
		PWGGame.phaser.world.setBounds(world.x, world.y, world.width, world.height);
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

		this.destroy();
	};

	return State;
})();