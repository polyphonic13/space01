Polyworks.AnimatedPlayer = (function() {
	Utils.inherits(AnimatedPlayer, Polyworks.Player);
	
	function AnimatedPlayer(params, id) {
		trace('AnimatedPlayer, params = ');
		trace(params);
		AnimatedPlayer._super.constructor.call(this, params, id);
		
	}
	
	return AnimatedPlayer;
})();