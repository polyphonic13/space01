Polyworks.Hazard = (function() {
	Polyworks.Utils.inherits(Hazard, Polyworks.Sprite);
	
	function Hazard(params) {
		Hazard._super.constructor.call(this, params);
	}
	
	Hazard.prototype.begin = function() {
		Hazard._super.begin.call(this);
	};
	
	return Hazard;
})();