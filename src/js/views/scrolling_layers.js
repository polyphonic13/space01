var ScrollingLayers = (function() {
	var _collection = [];
	
	function ScrollingLayers(params) {

		for(var i = 0; i < params.length; i++) {
			_collection.push(new ScrollingLayer(params[i]));
		}
	}
	
	ScrollingLayers.prototype.move = function(velX, velY) {
		for(var i = 0; i < _collection.length; i++) {
			_collection[i].move(velX, velY);
		}
	};
	
	return ScrollingLayers;
})();