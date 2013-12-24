var ScrollingLayers = (function() {
	var _collection = [];
	
	function ScrollingLayers(params) {

		for(var i = 0; i < params.length; i++) {
			var layer = new ScrollingLayer(params[i]);
			trace('layer = ');
			trace(layer);
			_collection.push(layer);
		}
		trace('ScrollingLayers/constructor, post add, layers = ');
		trace(_collection);
	}
	
	ScrollingLayers.prototype.move = function(velX, velY) {
		for(var i = 0; i < _collection.length; i++) {
			_collection[i].move(velX, velY);
		}
	};
	
	return ScrollingLayers;
})();