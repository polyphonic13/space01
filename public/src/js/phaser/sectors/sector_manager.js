Polyworks.SectorManager = (function() {
	Utils.inherits(SectorManager, Polyworks.Collection);
	
	function SectorManager(params) {
		// trace('SectorManager['+params.name+']/constructor, params = ');
		// trace(params);
		SectorManager._super.constructor.call(this, params);
		this.activeSectorId = 0;

		this.__defineGetter__('activeSector', function() {
			return this.model.collection[this.activeSectorId];
		});
	}
	
	SectorManager.prototype.checkTerrainCollision = function(terrain) {
		Utils.each(this.model.collection,
			function(c) {
				c.checkTerrainCollision(terrain);
			},
			this
		);
	};
	
	SectorManager.prototype.pwUpdate = function(params) {
		this.checkTerrainCollision(params.terrain);
		this.findActiveSector(params.position);
		this.model.collection[this.activeSectorId].pwUpdate(params);
	};
	
	SectorManager.prototype.setActiveSector = function(idx) {
		this.deactivateAll();
		this.activeSectorId = idx;
		this.model.collection[idx].setActive(true);
	};
	
	SectorManager.prototype.findActiveSector = function(position) {
		// trace('SectorManager/findActiveSector, this = ');
		// trace(this);
		var bounds;
		// reset all sectors to off
		this.deactivateAll();

		// find sector within bounds
		Utils.each(this.model.collection, 
			function(c, i) {
				bounds = c.bounds;
				// trace('bounds['+i+'] start/end = ' + bounds.start + '/' + bounds.end + ', x = ' + position.x);
				if(position.x > bounds.start && position.x < bounds.end) {
					if(this.activeSectorId !== i) {
						// trace('new sector id = ' + i + ', name = ' + sectors[i].model.name);
						this.activeSectorId = i;
						c.setActive(true);
					}
				}
			},
			this
		);
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