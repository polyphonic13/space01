Polyworks.MapPages = (function() {
	Polyworks.Utils.inherits(MapPages, Polyworks.Collection);
	
	function MapPages(params) {
		MapPages._super.constructor.call(this, params);
	}
	
	MapPages.prototype.begin = function() {
		var totalLevels = PolyworksGames.totalLevels;
		this.levels = [];
		
		for(var i = 0; i < totalLevels; i++) {
			this
		}
	};
	
	return MapPages;
})();