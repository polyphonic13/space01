var Sector = (function() {
	Utils.inherits(Sector, Base);
	
	function Sector(params, id) {
		// trace('Sector['+idx+']/constructor, params = ');
		// trace(params);
		Sector._super.constructor.call(this, params, id);

		this.enemies = new EnemyCollection(params.enemies);
		this.enemies.init(AnimatedEnemyView);

		this.bonuses = new GroupCollection(params.bonuses);
		this.bonuses.init(GroupView);

		this.__defineGetter__('enemyGroup', function() {
			return this.enemies.get('group');
		});
		this.__defineGetter__('bonusGroup', function() {
			return this.bonuses.get('group');
		});

		this.__defineGetter__('bounds', function() {
			return this.get('bounds');
		});

		this.created = true;
	}

	return Sector;
})();