PWG.Sector = (function() {
	PWG.Utils.inherits(Sector, PWG.Collection);
	
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

		} else if(!this.deactivated) {

			if(this.enemies) {
				PWG.EventCenter.trigger({ type: PWG.Events.REMOVE_ACTIVE_ENEMIES, enemies: this.enemies });
				this.enemies.deactivateGravity();
			} 
			this.deactivated = true;
		}
	};
	
	Sector.prototype.pwUpdate = function(params) {
		// this.checkTerrainCollision(params.terrain);
		if(this.enemies) {
			this.enemies.pwUpdate(params);
		}
		if(this.groupEnemies) {
			this.groupEnemies.pwUpdate(params);
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