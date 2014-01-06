var Enemies = (function() {
	Utils.inherits(Enemies, GroupCollection);
	
	function Enemies(params) {
		Enemies._super.constructor.call(this, params, Enemy);
	}
	
	return Enemies;
})();