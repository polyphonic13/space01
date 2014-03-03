Polyworks.MapPages = (function() {
	Polyworks.Utils.inherits(MapPages, Polyworks.Collection);
	
	function MapPages(params) {
		MapPages._super.constructor.call(this, params);
	}
	
	MapPages.prototype.begin = function() {
		var levels = PolyworksGames.totalLevels;
		Polyworks.Utils.each(levels,
			function(l, idx) {
				trace('create page');
			},
			this
		);
	};
	
	return MapPages;
})();