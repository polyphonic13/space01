Polyworks.Sector = (function() {
	Utils.inherits(Sector, Polyworks.Collection);
	
	function Sector(params) {
		// trace('Sector['+params.name+']/constructor, params = ');
		// trace(params);
		Sector._super.constructor.call(this, params);

	}
	
	Sector.prototype.begin = function() {
		Sector._super.begin.call(this);
		this.dynamicTerrain = this.getChildByName('dynamicTerrain');
		this.hazards = this.getChildByName('hazards');
		this.enemies = this.getChildByName('enemies');
		this.bonuses = this.getChildByName('bonuses');
	};

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
					this.bonuses.activateGravity();
				}
			}
			this.deactivated = false;
			
		} else if(!this.deactivated){
			
			if(this.enemies) {
				this.enemies.deactivateGravity();
			} 
			if(this.bonuses) {
				this.bonuses.deactivateGravity();
			}
			this.deactivated = true;
		}
	};
	
	Sector.prototype.addParticles = function() {
		var game = PolyworksGame.phaser;
		// var world = this.model.attrs.world;
		// trace(game.world);
		var bounds = this.model.attrs.bounds;
	    this.emitter = game.add.emitter(bounds.start, game.world.bounds.y, 400);

		// this.emitter.width = PolyworksStage.width;
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