var Sectors = (function() {
	Utils.inherits(Sectors, Collection);
	
	function Sectors(params) {
		Sectors._super.constructor.call(this, params);
		this.init(Sector);
		this.activeSector = 0;

		this.__defineGetter__('currentSector', function() {
			return this.collection[this.activeSector];
		})
	}
	
	Sectors.prototype.getSectorProperty = function(name) {
		var sector = this.collection[this.activeSector];
		if(sector.hasOwnProperty(name)) {
			return sector[name];
		} else {
			return null;
		}
	};
	
	return Sectors;
})();