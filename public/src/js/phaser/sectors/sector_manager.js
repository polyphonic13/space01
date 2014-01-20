Polyworks.SectorManager = (function() {
	Utils.inherits(SectorManager, Polyworks.Collection);
	
	function SectorManager(params) {
		trace('SectorManager['+params.name+']/constructor, params = ');
		trace(params);
		SectorManager._super.constructor.call(this, params);
		this.activeSectorId = 0;

		this.__defineGetter__('activeSector', function() {
			return this.model.collection[this.activeSectorId];
		})
	}
	
	SectorManager.prototype.checkTerrainCollision = function(terrain) {
		var sectors = this.model.collection;
		for(var i = 0; i < sectors.length; i++) {
			sectors[i].checkTerrainCollision(terrain);
		}
	};
	
	SectorManager.prototype.setActive = function(x) {
		// trace('SectorManager/setActive, this = ');
		// trace(this);
		var sectors = this.model.collection;
		var bounds;
		for(var i = 0; i < sectors.length; i++) {
			bounds = sectors[i].bounds;
			// trace('bounds['+i+'] start/end = ' + bounds.start + '/' + bounds.end + ', x = ' + x);
			if(x > bounds.start && x < bounds.end) {
				if(this.activeSectorId !== i) {
					trace('new sector id = ' + i + ', name = ' + sectors[i].model.name);
					this.activeSectorId = i;
				// 	sectors[i].setActive(true);
				// } else {
				// 	sectors[i].setActive(false);
				}
			}
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