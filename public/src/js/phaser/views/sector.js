var Sector = (function() {
	
	function Sector(params, game) {
		this.model = params;

		this.enemies = new GroupCollection(params.enemies);
		this.enemies.init(AnimatedGroupView);

		this.bonuses = new GroupCollection(params.bonuses);
		this.bonuses.init(GroupView);

		this.__defineGetter__('enemyGroup', function() {
			return this.enemies.group;
		});
		this.__defineGetter__('bonusGroup', function() {
			return this.bonuses.group;
		});
	}

	return Sector;
})();