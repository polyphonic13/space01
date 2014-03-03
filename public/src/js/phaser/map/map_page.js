Polyworks.MapPage = (function() {
	Polyworks.Utils.inherits(MapPage, Polyworks.Collection);
	
	function MapPage(params) {
		trace('MapPage['+this.model.name+']/constructor');
		this.model = new Polyworks.Model(params);
	}
	
	MapPage.prototype.begin = function() {
		MapPage._super.begin.call(this);
		this.model.set({
			locked: true,
			cleared: false
		});
	};
	
	return MapPage;
})();