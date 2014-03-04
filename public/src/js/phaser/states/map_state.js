Polyworks.MapState = (function() {
	Polyworks.Utils.inherits(MapState, Polyworks.MenuState); 
	
	function MapState(params) {
		MapState._super.constructor.call(this, params);
	}

	MapState.prototype.createState = function() {
		trace('MapState/createState, this = ', this);
		MapState._super.createState.call(this);
	};
	
	return MapState;
})();