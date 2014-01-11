Polyworks.AnimatedPlayer = (function() {
	Utils.inherits(AnimatedPlayer, Polyworks.Player);
	
	function AnimatedPlayer(params, id) {
		trace('AnimatedPlayer, params = ');
		trace(params);
		AnimatedPlayer._super.constructor.call(this, params, id);
		
	}
	
	AnimatedPlayer.prototype.onControlButtonPressed = function(event) {
		AnimatedPlayer._super.onControlButtonPressed.call(this, event);
		this.updateAnimations(event);
	};
	
	AnimatedPlayer.prototype.onControlButtonReleased = function(event) {
		AnimatedPlayer._super.onControlButtonPressed.call(this, event);
		this.updateAnimation(event);
	};

	AnimatedPlayer.prototype.updateAnimations = function(event) {
		trace('AnimatedPlayer/updateAnimations, event = ');
		trace(event);
	};
	
	return AnimatedPlayer;
})();