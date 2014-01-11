Polyworks.AnimatedPlayer = (function() {
	Utils.inherits(AnimatedPlayer, Polyworks.Player);
	
	function AnimatedPlayer(params, id) {
		// trace('AnimatedPlayer, params = ');
		// trace(params);
		AnimatedPlayer._super.constructor.call(this, params, id);
		
	}
	
	AnimatedPlayer.prototype.update = function(params) {
		AnimatedPlayer._super.update.call(this, params);
		
		this.updateAnimations();
	};
	
	AnimatedPlayer.prototype.updateAnimations = function() {
		if(this.velX === 0) {
			this.view.stop();
			if(this.model.facingForward) {
				this.view.frame = 0;
				this.model.currentAnimation = 'idleR';
			} else {
				this.view.frame = 1;
				this.model.currentAnimation = 'idleL';
			}
		} else {
			if(this.velX > 0 && this.model.grounded) {
				if(this.model.currentAnimation !== 'runR') {
			 		// trace('play run right');
					this.view.play('runR', 13, true);
					this.model.currentAnimation = 'runR';
				}
			} else if(this.velX < 0 && this.model.grounded) {
				if(this.model.currentAnimation !== 'runL') {
			 		// trace('play run left');
					this.view.play('runL', 13, true);
					this.model.currentAnimation = 'runL';
				}
			}
		}
	};
	
	return AnimatedPlayer;
})();