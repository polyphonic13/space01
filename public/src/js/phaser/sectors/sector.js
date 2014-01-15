Polyworks.Sector = (function() {
	
	function Sector(params) {
		trace('Sector['+params.name+']/constructor, params = ');
		trace(params);
		this.model = new Polyworks.Model(params);

		this.__defineGetter__('bounds', function() {
			return this.get('bounds');
		});

	}
	
	Sector.prototype.begin = function() {
		trace('Sector/['+this.model.name+']/begin, this = ');
		trace(this);
		// var sectorId = 'Sector' + this.model.name;
		var enemies = this.model.attrs.enemies
		trace('\tenemies = ');
		trace(enemies);
		this.enemies = new Polyworks.Enemies(enemies);
		this.enemies.begin();
		// this.enemies.begin('AnimatedEnemy');

		var bonuses = this.model.attrs.bonuses;

		// this.bonuses = new Polyworks.PhysicalGroupCollection(bonuses);
		// this.bonuses.begin('Sprite');

		this.created = true;
	}

	Sector.prototype.checkTerrainCollision = function(ground) {
		// trace('Sector['+this.model.name+']/checkTerrainCollision');
		this.enemies.checkTerrainCollision(ground);
		this.bonuses.checkTerrainCollision(ground);
	};
	
	return Sector;
})();