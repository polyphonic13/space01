var Bonuses = (function() {
	Utils.inherits(Bonuses, GroupCollection);
	
	function Bonuses(params) {
		Bonuses._super.constructor.call(this, params, Bonus);
	}
	
	return Bonuses;
})();