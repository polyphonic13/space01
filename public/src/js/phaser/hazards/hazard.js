PWG.Hazard = (function() {
	PWG.Utils.inherits(Hazard, PWG.Sprite);
	
	function Hazard(params) {
		Hazard._super.constructor.call(this, params);
	}
	
	Hazard.prototype.begin = function() {
		Hazard._super.begin.call(this);
	};
	
	return Hazard;
})();