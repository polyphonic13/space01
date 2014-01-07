var Sectors = (function() {
	Utils.inherits(Sectors, Collection);
	
	function Sectors(params) {
		// trace('Sectors/constructor, params = ');
		// trace(params);
		Sectors._super.constructor.call(this, params);
		this.init(Sector);
		this.activeSectorId = 0;

		this.__defineGetter__('activeSector', function() {
			return this.collection[this.activeSectorId];
		})
	}
	
	Sectors.prototype.getSectorProperty = function(name) {
		var sector = this.collection[this.activeSectorId];
		if(sector.hasOwnProperty(name)) {
			return sector[name];
		} else {
			return null;
		}
	};
	
	return Sectors;
})();