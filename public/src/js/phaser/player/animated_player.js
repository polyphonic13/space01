Polyworks.AnimatedPlayer = (function() {
	Utils.inherits(AnimatedPlayer, Polyworks.Player);
	
	function AnimatedPlayer(params) {
		// trace('AnimatedPlayer, params = ');
		// trace(params);
		AnimatedPlayer._super.constructor.call(this, params);
	}
	
	AnimatedPlayer.prototype.pwUpdate = function(params) {
		if(this.alive) {
			AnimatedPlayer._super.pwUpdate.call(this, params);
			this.updateAnimations();
		}
	};
	
	AnimatedPlayer.prototype.updateAnimations = function() {
		var attrs = this.model.attrs;
		if(this.justDamaged) {											// DAMAGED
			if(attrs.facingForward) {
				this.play('damagedR', 13, true);
				attrs.currentAnimation = 'damagedR';
			} else {
				this.play('damagedL', 13, true);
				attrs.currentAnimation = 'damagedL';
			}
		} else {
			if(this.velX === 0) {												// IDLE
				this.stop();
				if(this.facingForward) {
					this.frame = 0;
					attrs.currentAnimation = 'idleR';
				} else {
					this.frame = 1;
					attrs.currentAnimation = 'idleL';
				}
			} else {
				if(!attrs.jumping) {
					if(this.velX > 0) {
						if(attrs.currentAnimation !== 'runR') {			// MOVING RIGHT
					 		// trace('play run right');
							this.play('runR', 14, true);
							attrs.currentAnimation = 'runR';
						}
					} else if(this.velX < 0) {									// MOVING LEFT
						if(attrs.currentAnimation !== 'runL') {
					 		// trace('play run left');
							this.play('runL', 14, true);
							attrs.currentAnimation = 'runL';
						}
					}
				}
			}

			if(attrs.jumping) {										// JUMPING
				// trace('player jumping');
				if(this.facingForward) {
					// trace('playing jump r animation');
					this.stop();
					// this.frame = 9;
					this.play('jumpR', 13, true);
					attrs.currentAnimation = 'jumpR';
				} else {
					this.stop();
					// this.frame = 24;
					this.play('jumpL', 13, true);
					attrs.currentAnimation = 'jumpL';
				}
			}
		}
	};
	
	return AnimatedPlayer;
})();