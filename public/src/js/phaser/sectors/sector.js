Polyworks.Sector = (function() {
	Utils.inherits(Sector, Polyworks.Collection);
	
	function Sector(params) {
		// trace('Sector['+params.name+']/constructor, params = ');
		// trace(params);
		Sector._super.constructor.call(this, params);

	}
	
	Sector.prototype.begin = function() {
		// trace('Sector/['+this.model.name+']/begin, this = ');
		// trace(this);
		Sector._super.begin.call(this);
		this.beginGetterSetters();
		trace('Sector['+this.model.name+']/begin (end)');
		trace(this);

		/*
		this.beginChildren('hazards');
		this.beginChildren('enemies');
		this.beginChildren('bonuses');
		this.created = true;
		this.active = false;
		this.activatedOnce = false;
		*/
	};

	Sector.prototype.beginGetterSetters = function() {
		this.__defineGetter__('bounds', function() {
			return this.model.bounds;
		});
		this.__defineGetter__('hazards', function() {
			return this.getChildByName('hazards');
		});
		this.__defineGetter__('enemies', function() {
			return this.getChildByName('enemies');
		});
		this.__defineGetter__('bonuses', function() {
			return this.getChildByName('bonuses');
		});
	};
	
	// Sector.prototype.beginChildren = function(type, cl) {
	// 	var children = this.model.attrs[type];
	// 	if(children) {
	// 		this[type] = new Polyworks[children.cl](children);
	// 		this[type].begin();
	// 	}
	// 	// this.addParticles();
	// };
	
	Sector.prototype.setActive = function(active) {
		this.active = active;
		if(active) {
			// trace('Sector['+this.model.name+']/setActive: active = ' + active + ', activatedOnce = ' + this.activatedOnce);
			if(!this.activatedOnce) {
				this.activateOnce = true;
				if(this.enemies) {
					this.enemies.activateGravity();
				}
				if(this.bonuses) {
					this.enemies.activateGravity();
				}
			}
		}
	};
	
	Sector.prototype.addParticles = function() {
		var game = PolyworksGame.phaser;
		// var world = this.model.attrs.world;
		// trace(game.world);
		var bounds = this.model.attrs.bounds;
	    this.emitter = game.add.emitter(bounds.start, game.world.bounds.y, 400);

		// this.emitter.width = stage.width;
		this.emitter.width = bounds.end;
	    this.emitter.makeParticles('particle');
		// SNOW
		this.emitter.maxParticleScale = 0.5;
		this.emitter.minParticleScale = 0.1;
		this.emitter.setYSpeed(50, 100);
		this.emitter.setXSpeed(-5, 5);
		this.emitter.gravity = 0;
		this.emitter.minRotation = 0;
		this.emitter.maxRotation = 0;
		this.emitter.start(false, 7000, 10, false);
/*

		// RANDOM
	    this.emitter.minParticleSpeed.setTo(-200, -300);
	    this.emitter.maxParticleSpeed.setTo(200, -400);
	    this.emitter.gravity = 8;
	    this.emitter.bounce.setTo(0.5, 0.5);
	    this.emitter.particleDrag.x = 10;
	    this.emitter.angularDrag = 30;
		// this.emitter.rotation = -0.5;
	    this.emitter.start(false, 1600, 400);
*/
		
	};
	
	Sector.prototype.pwUpdate = function(params) {
		// this.checkTerrainCollision(params.terrain);
		
		if(this.enemies) {
			this.enemies.pwUpdate(params);
		}
	};
	
	Sector.prototype.checkTerrainCollision = function(terrain) {
		// trace('Sector['+this.model.name+']/checkTerrainCollision, terrain = ');
		// trace(terrain);
		// trace('enemies = ');
		// trace(this.enemies);
		if(this.enemies) {
			this.enemies.checkTerrainCollision(terrain);
		}
		if(this.bonuses) {
			this.bonuses.checkTerrainCollision(terrain);
		}
	};
	
	Sector.prototype.destroy = function() {
		if(this.enemies) {
			this.enemies.destroy();
		}
		if(this.bonuses) {
			this.bonuses.destroy();
		}
	};
	
	return Sector;
})();