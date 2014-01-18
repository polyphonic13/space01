Polyworks.Sectors = (function() {
	Utils.inherits(Sectors, Polyworks.Collection);
	
	function Sectors(params) {
		trace('Sectors['+params.name+']/constructor, params = ');
		trace(params);
		Sectors._super.constructor.call(this, params);
		this.activeSectorId = 0;

		this.__defineGetter__('activeSector', function() {
			return this.model.collection[this.activeSectorId];
		})
	}
	
	Sectors.prototype.checkTerrainCollision = function(terrain) {
		var sectors = this.model.collection;
		for(var i = 0; i < sectors.length; i++) {
			sectors[i].checkTerrainCollision(terrain);
		}
	};
	
	Sectors.prototype.setActive = function(x) {
		// trace('Sectors/setActive, this = ');
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
				}
			}
		}
	};
	
	Sectors.prototype.destroy = function() {
		var sectors = this.model.collection;
		for(var i = 0; i < sectors.length; i++) {
			sectors[i].destroy();
		}
	};
	
	return Sectors;
})();