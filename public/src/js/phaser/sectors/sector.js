Polyworks.Sector = (function() {
	
	function Sector(params) {
		// trace('Sector['+params.name+']/constructor, params = ');
		// trace(params);
		this.model = new Polyworks.Model(params);

		this.__defineGetter__('bounds', function() {
			return this.get('bounds');
		});

	}
	
	Sector.prototype.init = function() {
		// trace('Sector/['+this.model.name+']/init, this = ');
		// trace(this);
		var sectorId = 'Sector' + this.model.name;
		this.enemies = new Polyworks.Enemies(this.model.enemies, sectorId);
		this.enemies.init('AnimatedEnemy');

		this.bonuses = new Polyworks.PhysicalGroupCollection(this.model.bonuses, sectorId);
		this.bonuses.init('Sprite');

		this.created = true;
	}

	Sector.prototype.checkTerrainCollision = function(ground) {
		// trace('Sector['+this.model.name+']/checkTerrainCollision');
		this.enemies.checkTerrainCollision(ground);
		this.bonuses.checkTerrainCollision(ground);
	};
	
	return Sector;
})();