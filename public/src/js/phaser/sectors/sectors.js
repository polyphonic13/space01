var Sectors = (function() {
	
	function Sectors(params) {
		this.collection = [];
		this.activeSector = 0;
		var sector;
		for(var i = 0; i < params.length; i++) {
			sector = new Sector(params[i]);
			this.collection.push(sector);
		}
	}
	
	Sectors.prototype.getActiveSector = function() {
		return this.collection[this.activeSector];
	};

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