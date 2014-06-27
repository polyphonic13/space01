PWG.EnemyManager = function() {
	PWG.Utils.inherits(EnemyManager, PWG.PhysicalGroupCollection);
	
	function EnemyManager(params, sectorManager) {
		EnemyManager._super.constructor.call(this, params);
		this.sectors = [];
		this.activeEnemies = {};
		this.addListeners();
		this.sectorManager = sectorManager;
		this.sectorIdx = 0;
		this.createSectors(sectorManager);
	}
	
	EnemyManager.prototype.addListeners = function() {
		PWG.EventCenter.bind(PWG.Events.SECTOR_CHANGED, this.onSectorChanged, this);
		PWG.EventCenter.bind(PWG.Events.ADD_ACTIVE_ENEMY, this.onAddActiveEnemy, this);
		PWG.EventCenter.bind(PWG.Events.ADD_ACTIVE_ENEMIES, this.onAddActiveEnemies, this);
		PWG.EventCenter.bind(PWG.Events.REMOVE_ACTIVE_ENEMY, this.onRemoveActiveEnemy, this);
		PWG.EventCenter.bind(PWG.Events.REMOVE_ACTIVE_ENEMIES, this.onRemoveActiveEnemies, this);
	};
	
	EnemyManager.prototype.removeListeners = function() {
		PWG.EventCenter.unbind(PWG.Events.SECTOR_CHANGED, this.onSectorChanged, this);
		PWG.EventCenter.unbind(PWG.Events.ADD_ACTIVE_ENEMY, this.onAddActiveEnemy, this);
		PWG.EventCenter.unbind(PWG.Events.ADD_ACTIVE_ENEMIES, this.onAddActiveEnemies, this);
		PWG.EventCenter.unbind(PWG.Events.REMOVE_ACTIVE_ENEMY, this.onRemoveActiveEnemy, this);
		PWG.EventCenter.unbind(PWG.Events.REMOVE_ACTIVE_ENEMIES, this.onRemoveActiveEnemies, this);
	};
	
	EnemyManager.prototype.onSectorChanged = function(event) {
		trace('EnemyManager/onSectorChanged, event = ', event);
		this.removeActiveEnemies(this.sectors[this.sectorIdx].enemies);
		this.sectorIdx = event.idx;
		this.addActiveEnemies(this.sectors[this.sectorIdx].enemies);
	};
	
	EnemyManager.prototype.createSectors = function(sectorManager) {
		var sectorBounds = sectorManager.getSectorBounds();
		// trace('bounds = ', sectorBounds);
		PWG.Utils.each(
			sectorBounds,
			function(bounds, idx) {
				var enemies = new PWG.Enemies({
					name: 'sector' + idx + '-enemies',
					type: 'Enemies',
					sector: idx,
					attrs: this.model.attrs[idx]
				});
				enemies.begin();

				// trace('------ enemies = ', enemies);
				var sector = {
					enemies: enemies,
					bounds: bounds
				}
				this.sectors.push(sector);
				
				// first sector, add any enemies as active
				if(idx === 0) {
					this.addActiveEnemies(enemies)
				}
			},
			this
		);

		trace('EnemyManager/createSectors completed, sectors = ', this.sectors);
	};
	
	EnemyManager.prototype.onAddActiveEnemies = function(event) {
		// trace('EnemyManager/onAddActiveEnemies, event = ', event, '\tthis = ', this);
		this.addActiveEnemies(event.enemies);
	};
	
	EnemyManager.prototype.onAddActiveEnemy = function(event) {
		// trace('EnemyManager/onAddActiveEnemy, event = ', event);
		this.addActiveEnemy(event.enemy);
	};
	
	EnemyManager.prototype.onRemoveActiveEnemies = function(event) {
		// trace('EnemyManager/onRemoveActiveEnemies, event = ', event);
		this.removeActiveEnemies(event.enemies);
	};
	
	EnemyManager.prototype.onRemoveActiveEnemy = function(event) {
		trace('EnemyManager/onRemoveActiveEnemy, event = ', event, '\tthis = ', this);
		this.removeActiveEnemy(event.enemy);
	};
	
	EnemyManager.prototype.addActiveEnemies = function(enemies) {
		// trace('EnemyManager/addActiveEnemies, enemies = ', enemies);
		PWG.Utils.each(
			enemies.model.collection,
			function(enemy) {
				this.addActiveEnemy(enemy);
			},
			this
		);
	};
	
	EnemyManager.prototype.addActiveEnemy = function(enemy) {
		trace('EnemyManager/addActiveEnemy, enemy = ' + enemy.model.name);
		if(!this.activeEnemies.hasOwnProperty(enemy.model.name)) {
			trace('\tdoes not exist yet; adding');
			enemy.activateGravity();
			this.activeEnemies[enemy.model.name] = enemy;
		}
	};
	
	EnemyManager.prototype.removeActiveEnemies = function(enemies) {
		trace('EnemyManager/removeActiveEnemies, enemies = ', enemies, '\tactiveEnemies = ', this.activeEnemies);
		PWG.Utils.each(
			enemies.model.collection,
			function(enemy) {
				if(!enemy.isInView) {
					this.removeActiveEnemy(enemy);
				}
			},
			this
		);
	};
	
	EnemyManager.prototype.removeActiveEnemy = function(enemy) {
		trace('EnemyManager/removeActiveEnemy, enemy = ' + enemy.model.name);
		if(this.activeEnemies.hasOwnProperty(enemy.model.name)) {
			enemy.deactivateGravity();
			trace('\texists; removing');
			delete this.activeEnemies[enemy.model.name];
		}
	};
	
	EnemyManager.prototype.getActiveEnemies = function() {
		return this.activeEnemies;
	}
	
	EnemyManager.prototype.pwUpdate = function(params) {
		PWG.Utils.each(
			this.activeEnemies,
			function(enemy) {
				if(enemy.alive) {
					if(enemy.body.allowGravity) {
						this.updateEnemyPhysics(enemy, params);
					}
					enemy.pwUpdate(params);
				}
			},
			this
		);
	}

	EnemyManager.prototype.updateEnemyPhysics = function(enemy, params) {
		var enemySector = this.sectorManager.getSector(enemy.model.sector);
		if(enemySector.dynamicTerrain) {
			enemy.checkTerrainCollision(enemySector.dynamicTerrain);
		}
		if(params.dynamicTerrain) {
			enemy.checkTerrainCollision(params.dynamicTerrain);
		}
		enemy.checkTerrainCollision(params.terrain);
	};
	
	EnemyManager.prototype.pause = function() {
		PWG.Utils.each(
			this.activeEnemies,
			function(enemy) {
				enemy.deactivateGravity();
			},
			this
		);
	};
	
	EnemyManager.prototype.resume = function() {
		PWG.Utils.each(
			this.activeEnemies,
			function(enemy) {
				enemy.activateGravity(true);
			},
			this
		);
	};
	
	EnemyManager.prototype.destroy = function() {
		PWG.Utils.each(
			this.sectors,
			function(sector) {
				if(sector.enemies) {
					sector.enemies.destroy();
				}
			},
			this
		);
		this.removeListeners();
	};
	
	return EnemyManager;
}();