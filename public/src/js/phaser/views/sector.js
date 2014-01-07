var Sector = (function() {
	
	function Sector(params, idx) {
		trace('Sector['+idx+']/constructor, params = ');
		trace(params);
		this.model = params;
		this.idx = idx; 

		this.enemies = new EnemyCollection(params.enemies);
		this.enemies.init(AnimatedEnemyView);

		this.bonuses = new GroupCollection(params.bonuses);
		this.bonuses.init(GroupView);

		this.__defineGetter__('enemyGroup', function() {
			return this.enemies.group;
		});
		this.__defineGetter__('bonusGroup', function() {
			return this.bonuses.group;
		});

		this.__defineGetter__('bounds', function() {
			return this.model.bounds;
		});

		this.created = true;
	}

	return Sector;
})();