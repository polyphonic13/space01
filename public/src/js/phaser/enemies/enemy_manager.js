PWG.EnemyManager = function() {
	PWG.Utils.inherits(EnemyManager, PWG.PhysicalGroupCollection);
	
	function EnemyManager(params) {
		EnemyManager._super.constructor.call(this, params);

		this.activeEnemies = {};
	}
	
	EnemyManager.prototype.pwUpdate = function(params) {
		PWG.Utils.each(
			this.activeEnemies,
			function(enemy) {
				if(enemy.alive) {
					if(enemy.body.allowGravity) {
						this.updateEnemyPhysics(enemy, params.terrain);
					}
					enemy.pwUpdate(params);
				}
			},
			this
		);
	}

	return EnemyManager;
}();