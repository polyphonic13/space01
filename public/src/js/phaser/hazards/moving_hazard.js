Polyworks.MovingHazard = (function() {
	Polyworks.Utils.inherits(MovingHazard, Polyworks.Hazard);
	
	function MovingHazard(params) {
		MovingHazard._super.constructor.call(this, params);
	}
	
	MovingHazard.prototype.begin = function() {
		MovingHazard._super.begin.call(this);
	};
	
	return MovingHazard;
})();