PWG.EnemyManager = function() {
	PWG.Utils.inherits(EnemyManager, PWG.PhysicalGroupCollection);
	
	function EnemyManager(params) {
		EnemyManager._super.constructor.call(this, params);
		this.sectors = {};
		this.activeEnemies = {};
	}
	
	EnemyManager.prototype.createSectors = function(sectorManager) {
		var sectorBounds = sectorManager.getSectorBounds();
		trace('bounds = ', sectorBounds);
		PWG.Utils.each(
			sectorBounds,
			function(bounds, idx) {
				var enemies = this.model.attrs[idx];
				trace('------ enemies = ', enemies);
				var sector = {
					enemies: new PWG.Enemies({
						name: 'sector' + idx + '-enemies',
						type: 'Enemies',
						attrs: enemies
					}),
					bounds: bounds
				}
				this.sectors.push(sector);
			},
			this
		);

		trace('EnemyManager/createSectors completed, sectors = ' + this.sectors);
	};
	
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