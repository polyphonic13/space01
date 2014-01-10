Polyworks.Sector = (function() {
	Utils.inherits(Sector, Polyworks.Base);
	
	function Sector(params, id) {
		trace('Sector['+id+']/constructor, params = ');
		trace(params);
		Sector._super.constructor.call(this, params, id);

		this.__defineGetter__('bounds', function() {
			return this.get('bounds');
		});

	}
	
	Sector.prototype.init = function() {
		trace('Sector/['+this.id+']/init, this = ');
		trace(this);
		// trace('_this = ');
		// trace(_this);
		var sectorId = 'Sector' + this.id;
		this.enemies = new Polyworks.Enemies(this.model.enemies, sectorId);
		this.enemies.init('AnimatedEnemy');

		this.bonuses = new Polyworks.PhysicalGroupCollection(this.model.bonuses, sectorId);
		this.bonuses.init('Sprite');

		this.created = true;
	}

	Sector.prototype.checkTerrainCollision = function(ground) {
		// trace('Sector['+this.id+']/checkTerrainCollision');
		this.enemies.checkTerrainCollision(ground);
		this.bonuses.checkTerrainCollision(ground);
	};
	
	return Sector;
})();