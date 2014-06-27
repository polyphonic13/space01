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
		PWG.EventCenter.trigger({ type: PWG.Events.SECTOR_CHANGED, id: id });
	};
	
	SectorManager.prototype.getActiveSector = function() {
		return this.model.collection[this.activeSectorId];
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
	
	SectorManager.prototype.getSectorBounds = function() {
		var bounds = [];
		trace('SectorManager/getSectorBounds, collection = ', this.model.collection);
		PWG.Utils.each(
			this.model.collection,
			function(sector) {
				bounds.push({
					start: sector.model.bounds.start,
					end: sector.model.bounds.end
				});
			},
			this
		);
		return bounds;
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