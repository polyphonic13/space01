Polyworks.State = (function() {
	Utils.inherits(State, Polyworks.Collection);
	// Utils.inherits(State, Phaser.State); 
	
	function State(params) {
		trace('State['+params.name+']/constructor');
		
		State._super.constructor.call(this);

		this.model = new Polyworks.Model(params);
		this.model.set({
			loaded: false,
			created: false,
			active: false
		});
		// this.collection = new Polyworks.Collection(params);
		
		this.__defineGetter__('clearWorld', function() {
			return this.model.clearWorld;
		});

		this.__defineGetter__('clearCache', function() {
			return this.model.clearCache;
		});
	}
	
	State.prototype.start = function() {
		trace('Stage['+this.model.name+']/start');
	};
	
	State.prototype.preload = function() {
		trace('Stage['+this.model.name+']/preLoad, loaded = ' + this.model.loaded);
		if(!this.model.loaded) {
			trace('\tstate images = ');
			trace(this.model.images);
			if(this.model.images.length > 0) {
				var images = PolyworksGame.get('images');
				Utils.each(this.model.images,
					function(img) {
						trace('\t\timage['+img+'] loaded = ' + PolyworksGame.loadedImages[img]);
						if(!PolyworksGame.loadedImages[img]) {
							PolyworksGame.phaser.load.image(img, images[img]);
							PolyworksGame.loadedImages[img] = true;
						}
					},
					this
				);
			}
			if(this.model.sprites.length > 0) {
				var sprites = PolyworksGame.get('sprites');
				Utils.each(this.model.sprites,
					function(spr) {
						trace('\t\tsprite['+spr+'] loaded = ' + PolyworksGame.loadedSprites[spr]);
						if(!PolyworksGame.loadedImages[spr]) {
							var sprite = sprites[spr];
							trace('\t\tsprite = ');
							trace(sprite);
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
	
	State.prototype.loadUpdate = function(event) {
		// trace('State['+this.model.name+']/loadUpate, event = ');
		// trace(event);
	};
	
	State.prototype.create = function() {
		trace('Stage['+this.model.name+']/create, created = ' + this.model.created);
		PolyworksGame.hideLoadingDiv();
		// if(!this.model.created) {
			this.createState();
			this.model.created = true;
		// }
	};

	State.prototype.createState = function() {
		trace('State['+this.model.name+']/createState');
		this.gameOver = PolyworksGame.gameOver; 
		this.createWorld();

		if(this.model.pausable) {
			Polyworks.EventCenter.bind(Polyworks.Events.PAUSE_STATE, this.onPauseState, this);
			Polyworks.EventCenter.bind(Polyworks.Events.RESUME_STATE, this.onResumeState, this);
		}
		this.begin();
	};
	
	State.prototype.onPauseState = function() {
		trace(this);
		trace('State['+this.model.name+']/onPauseState');
		this.paused = true;
	};
	
	State.prototype.onResumeState = function() {
		trace('State['+this.model.name+']/onResuemState');
		this.paused = false;
	};
	
	State.prototype.createWorld = function() {
		var world = this.model.world;
		trace('Stage['+this.model.name+']/createWorld, world = ', world, PolyworksStage);
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

		this.model.created = false;
		this.destroy();
	};

	return State;
})();