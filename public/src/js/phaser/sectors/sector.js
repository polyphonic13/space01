Polyworks.Sector = (function() {
	
	function Sector(params) {
		trace('Sector['+params.name+']/constructor, params = ');
		trace(params);
		this.name = params.name;
		this.model = new Polyworks.Model(params.attrs);

		this.__defineGetter__('bounds', function() {
			trace('Sector['+this.name+']/get bounds, this = ');
			trace(this);
			return this.model['bounds'];
		});

	}
	
	Sector.prototype.begin = function() {
		trace('Sector/['+this.model.name+']/begin, this = ');
		trace(this);
		// var sectorId = 'Sector' + this.model.name;
		var enemies = this.model.enemies
		trace('\tenemies = ');
		trace(enemies);
		if(enemies && enemies.attrs && enemies.attrs.length > 0) {
			this.enemies = new Polyworks.Enemies(enemies);
			this.enemies.begin();
		}
		// this.enemies.begin('AnimatedEnemy');

		var bonuses = this.model.bonuses;
		trace('\tbonuses = ');
		trace(bonuses);
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