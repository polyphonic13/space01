Polyworks.Sectors = (function() {
	Utils.inherits(Sectors, Polyworks.Collection);
	
	function Sectors(params) {
		trace('Sectors['+params.name+']/constructor, params = ');
		trace(params);
		Sectors._super.constructor.call(this, params);
		this.activeSectorId = 0;

		this.__defineGetter__('activeSector', function() {
			return this.collection[this.activeSectorId];
		})
	}
	
	Sectors.prototype.checkTerrainCollision = function(ground) {
		for(var key in this.collection) {
			this.collection[key].checkTerrainCollision(ground);
		}
	};
	
	Sectors.prototype.setActive = function(x) {
		var sectors = this.collection;
		var bounds;
		for(var i = 0; i < sectors.length; i++) {
			bounds = sectors[i].bounds;
			// trace('bounds['+i+'] start/end = ' + bounds.start + '/' + bounds.end + ', x = ' + x);
			if(x > bounds.start && x < bounds.end) {
				if(this.activeSectorId !== i) {
					// trace('new sector id = ' + i);
					this.activeSectorId = i;
				}
			}
		}
	};
	
	return Sectors;
})();