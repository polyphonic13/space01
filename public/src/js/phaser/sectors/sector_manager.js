Polyworks.SectorManager = (function() {
	Utils.inherits(SectorManager, Polyworks.Collection);
	
	function SectorManager(params) {
		// trace('SectorManager['+params.name+']/constructor, params = ');
		// trace(params);
		SectorManager._super.constructor.call(this, params);
		// this.setActiveSector(0);
	}

	SectorManager.prototype.setState = function(state) {
		this.model.set({ state: state });
	};
	
	SectorManager.prototype.setActiveSector = function(idx) {
		this.deactivateAll();
		this.activeSectorId = idx;
		this.model.collection[idx].setActive(true);

		var state = this.model.get('state');
		state.activeSector = this.model.collection[idx];
	};
	
	SectorManager.prototype.getActiveSector = function() {
		return this.model.collection[this.activeSectorId];
	};
	
	SectorManager.prototype.checkTerrainCollision = function(terrain) {
		this.model.collection[this.activeSectorId].checkTerrainCollision(terrain);
		/*
		Utils.each(this.model.collection,
			function(c) {
				c.checkTerrainCollision(terrain);
			},
			this
		);
		*/
	};
	
	SectorManager.prototype.pwUpdate = function(params) {
		this.checkTerrainCollision(params.terrain);
		this.findActiveSector(params.position);
		this.model.collection[this.activeSectorId].pwUpdate(params);
	};
	
	SectorManager.prototype.findActiveSector = function(position) {
		// trace('SectorManager/findActiveSector, this = ');
		// trace(this);
		var bounds;
		// reset all sectors to off
		this.deactivateAll();

		var c = this.model.collection;
		var length = c.length;

		for(var i = 0; i < length; i++) {
			bounds = c[i].model.bounds;
			if(position.x > bounds.start && position.x < bounds.end) {
				if(this.activeSectorId !== i) {
					trace('new sector id = ' + i + ', name = ' + c[i].model.name);
					this.setActiveSector(i);
					break;
				}
			}
		}
	};
	
	SectorManager.prototype.deactivateAll = function() {
		Utils.each(this.model.collection,
			function(c) {
				c.setActive(false);
			},
			this
		);
	};
	
	SectorManager.prototype.destroy = function() {
		Utils.each(this.model.collection,
			function(c) {
				c.destroy();
			},
			this
		);
	};
	
	return SectorManager;
})();