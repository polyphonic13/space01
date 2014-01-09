Polyworks.Sector = (function() {
	Polyworks.Utils.inherits(Sector, Polyworks.Base);
	
	function Sector(params, id) {
		// trace('Sector['+idx+']/constructor, params = ');
		// trace(params);
		Sector._super.constructor.call(this, params, id);

		this.__defineGetter__('bounds', function() {
			return this.get('bounds');
		});

	}
	
	Sector.prototype.init = function() {
		// trace('Sector/init, this = ');
		// trace(this);
		// trace('_this = ');
		// trace(_this);
		var sectorId = 'Sector' + this.id;
		this.enemies = new Polyworks.Enemies(this.model.enemies, sectorId);
		this.enemies.init('AnimatedEnemyView');

		this.bonuses = new Polyworks.Groups(this.model.bonuses, sectorId);
		this.bonuses.init('SpriteView');

		this.created = true;
	}

	Sector.prototype.checkTerrainCollision = function(ground) {
		// trace('Sector['+this.id+']/checkTerrainCollision');
		this.enemies.checkTerrainCollision(ground);
		this.bonuses.checkTerrainCollision(ground);
	};
	
	return Sector;
})();