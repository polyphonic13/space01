Polyworks.AnimatedPlayer = (function() {
	Utils.inherits(AnimatedPlayer, Polyworks.Player);
	
	function AnimatedPlayer(params) {
		// trace('AnimatedPlayer, params = ');
		// trace(params);
		AnimatedPlayer._super.constructor.call(this, params);
	}
	
	AnimatedPlayer.prototype.updatePlayer = function(params) {
		AnimatedPlayer._super.updatePlayer.call(this, params);
		this.updateAnimations();
	};
	
	AnimatedPlayer.prototype.updateAnimations = function() {
		if(this.velX === 0) {												// IDLE
			this.stop();
			if(this.model.facingForward) {
				this.frame = 0;
				this.model.currentAnimation = 'idleR';
			} else {
				this.frame = 1;
				this.model.currentAnimation = 'idleL';
			}
		} else {
			if(!this.model.jumping) {
				if(this.velX > 0) {
					if(this.model.currentAnimation !== 'runR') {			// MOVING RIGHT
				 		// trace('play run right');
						this.play('runR', 13, true);
						this.model.currentAnimation = 'runR';
					}
				} else if(this.velX < 0) {									// MOVING LEFT
					if(this.model.currentAnimation !== 'runL') {
				 		// trace('play run left');
						this.play('runL', 13, true);
						this.model.currentAnimation = 'runL';
					}
				}
			}
		}

		if(this.model.jumping) {										// JUMPING
			// trace('player jumping');
			if(this.model.facingForward) {
				// trace('playing jump r animation');
				this.stop();
				this.frame = 9;
				this.model.currentAnimation = 'jumpR';
			} else {
				this.stop();
				this.frame = 24;
				this.model.currentAnimation = 'jumpL';
			}
		}
	};
	
	return AnimatedPlayer;
})();