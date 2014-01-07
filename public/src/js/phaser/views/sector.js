var Sector = (function() {
	Utils.inherits(Sector, Base);
	
	function Sector(params, id) {
		// trace('Sector['+idx+']/constructor, params = ');
		// trace(params);
		Sector._super.constructor.call(this, params, id);

		this.__defineGetter__('enemyGroup', function() {
			return this.enemies.get('group');
		});
		this.__defineGetter__('bonusGroup', function() {
			return this.bonuses.get('group');
		});

		this.__defineGetter__('bounds', function() {
			return this.get('bounds');
		});

	}
	
	Sector.prototype.init = function() {
		// trace('Sector/init, this = ');
		// trace(this);
		// trace('_this = ');
		// trace(_this);
		this.enemies = new EnemyCollection(this.model.enemies);
		this.enemies.init(AnimatedEnemyView);

		this.bonuses = new GroupCollection(this.model.bonuses);
		this.bonuses.init(GroupView);

		this.created = true;
	}

	Sector.prototype.checkTerrainCollision = function(ground) {
		// trace('Sector['+this.id+']/checkTerrainCollision');
		this.enemies.checkTerrainCollision(ground);
		this.bonuses.checkTerrainCollision(ground);
	};
	
	return Sector;
})();