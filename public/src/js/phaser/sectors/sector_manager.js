Polyworks.SectorManager = (function() {
	Utils.inherits(SectorManager, Polyworks.Collection);
	
	function SectorManager(params) {
		trace('SectorManager['+params.name+']/constructor, params = ');
		trace(params);
		SectorManager._super.constructor.call(this, params);
		this.activeSectorId = 0;

		this.__defineGetter__('activeSector', function() {
			return this.model.collection[this.activeSectorId];
		});
		
		trace('end sector manager constructor');
		trace(this);
	}
	
	SectorManager.prototype.checkTerrainCollision = function(terrain) {
		var sectors = this.model.collection;
		for(var i = 0; i < sectors.length; i++) {
			sectors[i].checkTerrainCollision(terrain);
		}
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
		var sectors = this.model.collection;
		var bounds;
		// reset all sectors to off
		// find sector within bounds
		for(var i = 0; i < sectors.length; i++) {
			bounds = sectors[i].bounds;
			// trace('bounds['+i+'] start/end = ' + bounds.start + '/' + bounds.end + ', x = ' + position.x);
			if(position.x > bounds.start && position.x < bounds.end) {
				if(this.activeSectorId !== i) {
					trace('new sector id = ' + i + ', name = ' + sectors[i].model.name);
					this.activeSectorId = i;
					sectors[i].setActive(true);
				}
			}
		}
	};
	
	SectorManager.prototype.deactivateAll = function() {
		var sectors = this.model.collection;
		for(var i = 0; i < sectors.length; i++) {
			sectors[i].setActive(false);
		}
	};
	
	SectorManager.prototype.destroy = function() {
		var sectors = this.model.collection;
		for(var i = 0; i < sectors.length; i++) {
			sectors[i].destroy();
		}
	};
	
	return SectorManager;
})();