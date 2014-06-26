PWG.SectorManager = (function() {
	PWG.Utils.inherits(SectorManager, PWG.Collection);
	
	function SectorManager(params) {
		// trace('SectorManager['+params.name+']/constructor, params = ');
		// trace(params);
		SectorManager._super.constructor.call(this, params);
		// this.setActiveSector(0);
		this.positionAxis = (this.model.type === PWG.SectorTypes.HORIZONTAL) ? 'x' : 'y';
		this.activeEnemies = {};
		trace('SectorManager/constructor, positionAxis = ' + this.positionAxis);
		
	}

	SectorManager.prototype.addListeners = function() {
		PWG.EventCenter.bind( PWG.Events.ADD_ACTIVE_ENEMY, this.onAddActiveEnemy, this );
		PWG.EventCenter.bind( PWG.Events.ADD_ACTIVE_ENEMIES, this.onAddActiveEnemies, this );
		PWG.EventCenter.bind( PWG.Events.REMOVE_ACTIVE_ENEMY, this.onRemoveActiveEnemy, this );
		PWG.EventCenter.bind( PWG.Events.REMOVE_ACTIVE_ENEMIES, this.onRemoveActiveEnemies, this );
	};
	
	SectorManager.prototype.removeListeners = function() {
		PWG.EventCenter.unbind( PWG.Events.ADD_ACTIVE_ENEMY, this.onAddActiveEnemy, this );
		PWG.EventCenter.unbind( PWG.Events.ADD_ACTIVE_ENEMIES, this.onAddActiveEnemies, this );
		PWG.EventCenter.unbind( PWG.Events.REMOVE_ACTIVE_ENEMY, this.onRemoveActiveEnemy, this );
		PWG.EventCenter.unbind( PWG.Events.REMOVE_ACTIVE_ENEMIES, this.onRemoveActiveEnemies, this );
	};
	
	SectorManager.prototype.onAddActiveEnemy = function(event) {
		// trace('SectorManager/onAddActiveEnemy, event = ', event);
		this.addActiveEnemy(event.enemy);
	};
	
	SectorManager.prototype.onAddActiveEnemies = function(event) {
		// trace('SectorManager/onAddActiveEnemies, event = ', event, '\tthis = ', this);
		this.addActiveEnemies(event.enemies);
	};
	
	SectorManager.prototype.onRemoveActiveEnemy = function(event) {
		// trace('SectorManager/onRemoveActiveEnemy, event = ', event, '\tthis = ', this);
		this.removeActiveEnemy(event.enemy);
	};
	
	SectorManager.prototype.onRemoveActiveEnemies = function(event) {
		// trace('SectorManager/onRemoveActiveEnemies, event = ', event);
		this.removeActiveEnemies(event.enemies);
	};
	
	SectorManager.prototype.getActiveEnemies = function() {
		return this.activeEnemies;
	};
	
	SectorManager.prototype.setState = function(state) {
		this.model.set({ state: state });
	};
	
	SectorManager.prototype.setActiveSector = function(id) {
		// this.deactivateAll();
		if(this.activeSectorId) {
			this.model.collection[this.activeSectorId].setActive(false);
		}
		this.activeSectorId = id;
		this.model.collection[id].setActive(true);

		var state = this.model.get('state');
		state.activeSector = this.model.collection[id];
	};
	
	SectorManager.prototype.getActiveSector = function() {
		return this.model.collection[this.activeSectorId];
	};
	
	SectorManager.prototype.addActiveEnemy = function(enemy) {
		if(!this.activeEnemies.hasOwnProperty(enemy)) {
			enemy.getSector();
			this.activeEnemies[enemy.model.name] = enemy;
		}
	};
	
	SectorManager.prototype.addActiveEnemies = function(enemies) {
		// trace('SectorManager/addActiveEnemies, enemies = ', enemies);
		PWG.Utils.each(
			enemies.model.collection,
			function(enemy) {
				this.addActiveEnemy(enemy);
			},
			this
		);
	};
	
	SectorManager.prototype.removeActiveEnemy = function(enemy) {
		if(this.activeEnemies.hasOwnProperty(enemy)) {
			trace('\tremoving ' + enemy.model.name);
			delete this.activeEnemies[enemy.model.name];
		}
	};
	
	SectorManager.prototype.removeActiveEnemies = function(enemies) {
		trace('SectorManager/removeActiveEnemies, enemies = ', enemies, '\tactiveEnemies = ', this.activeEnemies);
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
	
	SectorManager.prototype.getActiveEnemies = function() {
		return this.activeEnemies;
	};
	
	SectorManager.prototype.checkTerrainCollision = function(terrain) {
		this.model.collection[this.activeSectorId].checkTerrainCollision(terrain);
		/*
		PWG.Utils.each(this.model.collection,
			function(c) {
				c.checkTerrainCollision(terrain);
			},
			this
		);
		*/
	};
	
	SectorManager.prototype.pwUpdate = function(params) {
		// trace('SectorManager/pwUpdate, activeEnemies = ', this.activeEnemies);
		this.checkTerrainCollision(params.terrain);
		this.findActiveSector(params.position);
		
		var activeSector = this.model.collection[this.activeSectorId];
		// activeSector.pwUpdate(params);
		
	};
	
	SectorManager.prototype.updateEnemyPhysics = function(enemy, terrain) {
		var enemySector = enemy.getSector();
		var activeSector = this.model.collection[this.activeSectorId];

		if(enemySector.dynamicTerrain) {
			enemy.checkTerrainCollision(enemySector.dynamicTerrain);
		}
		if(activeSector.dynamicTerrain) {
			enemy.checkTerrainCollision(activeSector.dynamicTerrain);
		}
		enemy.checkTerrainCollision(terrain);
	};
	
	SectorManager.prototype.findActiveSector = function(position) {
		// trace('SectorManager/findActiveSector, this = ');
		// trace(this);
		// reset all sectors to off
		// this.deactivateAll();

		var child = this.model.collection;
		var length = child.length;
		var bounds;
		var pos = position[this.positionAxis];
		// trace('pos = ' + pos);
		for(var i = 0; i < length; i++) {
			bounds = child[i].model.bounds;
			// trace('\tc['+i+'] start/end = ' + bounds.start + '/' + bounds.end);
			if(pos > bounds.start && pos < bounds.end) {
				if(this.activeSectorId !== i) {
					trace('new sector id = ' + i + ', name = ' + child[i].model.name + ', pos = ' + pos);
					this.setActiveSector(i);
					break;
				}
			}
		}
	};
	
	SectorManager.prototype.deactivateAll = function() {
		PWG.Utils.each(this.model.collection,
			function(child) {
				child.setActive(false);
			},
			this
		);
	};
	
	SectorManager.prototype.destroy = function() {
		PWG.Utils.each(this.model.collection,
			function(c) {
				c.destroy();
			},
			this
		);
	};
	
	return SectorManager;
})();