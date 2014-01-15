Polyworks.Sector = (function() {
	
	function Sector(params) {
		// trace('Sector['+params.name+']/constructor, params = ');
		// trace(params);
		this.model = new Polyworks.Model(params);

		this.__defineGetter__('bounds', function() {
			return this.model.attrs.bounds;
		});

	}
	
	Sector.prototype.begin = function() {
		// trace('Sector/['+this.model.name+']/begin, this = ');
		// trace(this);
		var enemies = this.model.attrs.enemies
		if(enemies && enemies.attrs && enemies.attrs.length > 0) {
			this.enemies = new Polyworks.Enemies(enemies);
			this.enemies.begin();
		}
		var bonuses = this.model.attrs.bonuses;
		if(bonuses && bonuses.attrs && bonuses.attrs.length > 0) {
			this.bonuses = new Polyworks.PhysicalGroupCollection(bonuses);
			this.bonuses.begin();
		}

		this.created = true;
	}

	Sector.prototype.checkTerrainCollision = function(ground) {
		// trace('Sector['+this.model.name+']/checkTerrainCollision');
		if(this.enemies) {
			this.enemies.checkTerrainCollision(ground);
		}
		if(this.bonuses) {
			this.bonuses.checkTerrainCollision(ground);
		}
	};
	
	return Sector;
})();