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
		var phaser = PolyworksGame.phaser;
		var loaded = {
			images: {},
			sprites: {},
			tilemaps: {},
			tilesets: {}
		};
		
		// trace('State['+this.model.name+']/preLoad, loaded = ' + this.model.loaded);
		if(!this.model.loaded) {
			// trace('\tstate images = ');
			// trace(this.model.images);
			if(this.model.images.length > 0) {
				var images = PolyworksGame.get('images');
				Polyworks.Utils.each(this.model.images,
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
			if(this.model.sprites.length > 0) {
				var sprites = PolyworksGame.get('sprites');
				Polyworks.Utils.each(this.model.sprites,
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
			if(this.model.tilemaps.length > 0) {
				var tilemaps = PolyworksGame.get('tilemaps');
				Polyworks.Utils.each(this.model.tilemaps,
					function(map, key) {
						trace('\t\ttilemap['+map+'] loaded = ' + PolyworksGame.loaded.tilemaps[map]);
						if(!PolyworksGame.loaded.tilemaps[map]) {
							var tilemap = tilemaps[map];
							trace('\t\t\ttilemap = ', tilemap);
							this.toLoad++;
							phaser.load.tilemap(map, tilemap.url, null, Phaser.Tilemap.TILED_JSON);
							loaded.tilemaps[map] = true;
						}
					},
					this
				);
			}
			if(this.model.tilesets.length > 0) {
				var tilesets = PolyworksGame.get('tilesets');
				Polyworks.Utils.each(this.model.tilesets,
					function(tiles, key) {
						trace('\t\ttileset['+tiles+'] loaded = ' + PolyworksGame.loaded.tilesets[tiles]);
						if(!PolyworksGame.loaded.tilesets[tiles]) {
							var tileset = tilesets[tiles];
							trace('\t\t\ttileset = ', tileset);
							this.toLoad++;
							phaser.load.tileset(tiles, tileset.url, tileset.width, tileset.height, tileset.margin, tileset.spacing);
							loaded.tilesets[tiles] = true;
						}
					},
					this
				);
			}

			PolyworksGame.loaded = Polyworks.Utils.extend(PolyworksGame.loaded, loaded);
			this.model.loaded = true;
		}
	};
	
	State.prototype.create = function() {
		// trace('State['+this.model.name+']/create');
		PolyworksGame.phaser.stage.backgroundColor = this.model.backgroundColor;
		PolyworksGame.removeLoadingDiv();
		if(PolyworksGame.isLandscape) {
			this.createState();
		} else {
			trace('WARNING: not in landscape orientation, can not create state');
		}
		this.model.set({ createCalled: true });
	};

	State.prototype.createState = function() {
		trace('State['+this.model.name+']/createState, created = ' + (this.model.get('created')));
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
		trace('State['+this.model.name+']/createWorld, x = ' + world.x + ', world.y = ' + world.y + ', width = ' + world.width + ', height = ' + world.height);
		PolyworksGame.phaser.world.setBounds(world.x, world.y, world.width, world.height);
	};

	State.prototype.update = function() {
		if(!this.paused) {
			// extend update implementation
		}
	};
	
	State.prototype.shutdown = function() {
		// trace('State['+this.model.name+']/shutdown');
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