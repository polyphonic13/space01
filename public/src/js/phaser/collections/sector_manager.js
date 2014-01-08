Polyworks.SectorManager = (function() {
	Utils.inherits(SectorManager, Polyworks.Collection);
	
	function SectorManager(params, id) {
		trace('SectorManager/constructor, params = ');
		trace(params);
		SectorManager._super.constructor.call(this, params, id);
		this.init(Polyworks.Sector);
		this.activeSectorId = 0;

		this.__defineGetter__('activeSector', function() {
			return this.collection[this.activeSectorId];
		})
	}
	
	SectorManager.prototype.checkTerrainCollision = function(ground) {
		for(var key in this.collection) {
			this.collection[key].checkTerrainCollision(ground);
		}
	};
	
	SectorManager.prototype.setActive = function(x) {
		var sectors = this.collection;
		var bounds;
		for(var i = 0; i < sectors.length; i++) {
			bounds = sectors[i].bounds;
			// trace('bounds['+i+'] start/end = ' + bounds.start + '/' + bounds.end + ', x = ' + x);
			if(x > bounds.start && x < bounds.end) {
				if(this.activeSectorId !== i) {
					trace('new sector id = ' + i);
					this.activeSectorId = i;
				}
			}
		}
	};
	
	return SectorManager;
})();