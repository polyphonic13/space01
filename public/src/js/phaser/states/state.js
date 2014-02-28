Polyworks.State = (function() {
	Polyworks.Utils.inherits(State, Polyworks.Collection);
	// Polyworks.Utils.inherits(State, Phaser.State); 
	
	function State(params) {
		// trace('State['+params.name+']/constructor');
		State._super.constructor.call(this);

		this.model = new Polyworks.Model(params);
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
		// trace('State['+this.model.name+']/preLoad, loaded = ' + this.model.loaded);
		if(!this.model.loaded) {
			// trace('\tstate images = ');
			// trace(this.model.images);
			if(this.model.images.length > 0) {
				var images = PolyworksGame.get('images');
				Polyworks.Utils.each(this.model.images,
					function(img) {
						// trace('\t\timage['+img+'] loaded = ' + PolyworksGame.loadedImages[img]);
						if(!PolyworksGame.loadedImages[img]) {
							this.toLoad++;
							PolyworksGame.phaser.load.image(img, images[img]);
							PolyworksGame.loadedImages[img] = true;
						}
					},
					this
				);
			}
			if(this.model.sprites.length > 0) {
				var sprites = PolyworksGame.get('sprites');
				Polyworks.Utils.each(this.model.sprites,
					function(spr) {
						// trace('\t\tsprite['+spr+'] loaded = ' + PolyworksGame.loadedSprites[spr]);
						if(!PolyworksGame.loadedImages[spr]) {
							var sprite = sprites[spr];
							// trace('\t\t\tsprite = ', sprite);
							this.toLoad++;
							PolyworksGame.phaser.load.spritesheet(spr, sprite.url, sprite.width, sprite.height, sprite.frames);
							PolyworksGame.loadedImages[spr] = true;
						}
					},
					this
				);
			}
			this.model.loaded = true;
		}
	};
	
	// State.prototype.loadUpdate = function(event) {
	// 	this.loaded++;
	// 	trace('State['+this.model.name+']/loadUpate, loaded = ' + this.loaded + ', toLoad = ' + this.toLoad);
	// 	// trace(event);
	// };
	
	State.prototype.create = function() {
		trace('State['+this.model.name+']/create');
		PolyworksGame.removeLoadingDiv();
		if(PolyworksGame.isLandscape) {
			this.createState();
		} else {
			trace('WARNING: not in landscape orientation, can not create state');
		}
		this.model.set({ createCalled: true });
	};

	State.prototype.createState = function() {
		// trace('State['+this.model.name+']/createState');
		if(!this.model.get('created')) {
			this.gameOver = PolyworksGame.gameOver; 
			this.createWorld();

			if(this.model.pausable) {
				Polyworks.EventCenter.bind(Polyworks.Events.PAUSE_STATE, this.onPauseState, this);
				Polyworks.EventCenter.bind(Polyworks.Events.RESUME_STATE, this.onResumeState, this);
			}
			this.begin();
			this.model.set({ created: true });
		} else {
			trace('WARNING: state already created');
		}
	};
	
	State.prototype.onPauseState = function() {
		trace(this);
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
		// trace('State['+this.model.name+']/createWorld, world = ', world, Polyworks.Stage);
		PolyworksGame.phaser.world.setBounds(world.x, world.y, world.width, world.height);
	};

	State.prototype.update = function() {
		if(!this.paused) {
			// extend update implementation
		}
	};
	
	State.prototype.shutdown = function() {
		Polyworks.EventCenter.unbind(Polyworks.Events.PAUSE_STATE, this.onPauseState);
		Polyworks.EventCenter.unbind(Polyworks.Events.RESUME_STATE, this.onResumeState);

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