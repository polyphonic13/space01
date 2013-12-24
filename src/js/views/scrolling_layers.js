Polyworks.views.ScrollingLayers = (function() {
	var _layers = [];
	
	function ScrollingLayers(params) {
		
		for(var i = 0; i < params.length; i++) {
			_layers.push(new ScrollingLayer(params[i]));
		}
	}
	
	ScrollingLayers.prototype.move = function(velX, velY) {
		for(var i = 0; i < _layers.length; i++) {
			_layers[i].move(velX, velY);
		}
	};
	
	return ScrollingLayers;
})();