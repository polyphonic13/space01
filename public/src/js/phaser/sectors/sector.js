Polyworks.Sector = (function() {
	Polyworks.Utils.inherits(Sector, Polyworks.Collection);
	
	function Sector(params) {
		// trace('Sector['+params.name+']/constructor, params = ');
		// trace(params);
		Sector._super.constructor.call(this, params);

	}
	
	Sector.prototype.begin = function() {
		Sector._super.begin.call(this);
		this.setChildrenExists(false);

		this.dynamicTerrain = this.getChildByName('dynamicTerrain');
		this.groupEnemies = this.getChildByName('groupEnemies');
		this.enemies = this.getChildByName('enemies');
		this.hazards = this.getChildByName('hazards');
		this.bonuses = this.getChildByName('bonuses');
	};

	Sector.prototype.setActive = function(active) {
		// trace('Sector['+this.model.name+']/setActive: active = ' + active + ', activatedOnce = ' + this.activatedOnce);
		if(this.active || active) {
			this.setChildrenExists(active);
		}

		this.active = active;
		if(active) {
			// trace('Sector['+this.model.name+']/setActive: active = ' + active + ', activatedOnce = ' + this.activatedOnce);
			// if(!this.activatedOnce) {
				this.activateOnce = true;
				if(this.enemies) {
					this.enemies.activateGravity();
				}
			// }
			this.deactivated = false;

		} else if(!this.deactivated){

			if(this.enemies) {
				this.enemies.deactivateGravity();
			} 
			this.deactivated = true;
		}
	};
	
	Sector.prototype.addParticles = function() {
		var game = PolyworksGame.phaser;
		// var world = this.model.attrs.world;
		// trace(game.world);
		var bounds = this.model.bounds;
	    this.emitter = game.add.emitter(bounds.start, game.world.bounds.y, 400);

		// this.emitter.width = Polyworks.Stage.width;
		this.emitter.width = bounds.end;
	    this.emitter.makeParticles('particle');
		// SNOW
		this.emitter.maxParticleScale = 0.5;
		this.emitter.minParticleScale = 0.1;
		this.emitter.setYSpeed(50, 100);
		this.emitter.setXSpeed(-100, -90);
		this.emitter.gravity = 0;
		this.emitter.minRotation = 0;
		this.emitter.maxRotation = 0;
		// this.emitter.start(false, 7000, 10, false);
		this.emitter.start(false, 8000, 10, false);

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