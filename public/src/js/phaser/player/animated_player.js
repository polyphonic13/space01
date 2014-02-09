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
			this.previousY = this.body.y;
		}
	};
	
	AnimatedPlayer.prototype.updateAnimations = function() {
		var attrs = this.model.attrs;
		var animations = attrs.animations; 
		// trace('AnimatedPlayer/updateAnimations, justDamaged = ' + this.justDamaged);
		if(this.justDamaged) {											// DAMAGED
			if(attrs.facingForward) {
				// trace('Player/updateAnimations, AnimationTypes.DAMAGED_R = ' + AnimationTypes.DAMAGED_R + ', animations = ');
				// trace(animations);
				this.play(AnimationTypes.DAMAGED_R, animations[AnimationTypes.DAMAGED_R].frameRate, animations[AnimationTypes.DAMAGED_R].loop);
			} else {
				this.play(AnimationTypes.DAMAGED_L, animations[AnimationTypes.DAMAGED_L].frameRate, animations[AnimationTypes.DAMAGED_L].loop);
			}
		} else {
			if(attrs.jumping) {										// JUMPING
				// trace('player jumping');
				if(this.facingForward) {
					// trace('playing jump r animation');
					this.stop();
					// this.frame = 9;
					this.play(AnimationTypes.JUMP_R, animations[AnimationTypes.JUMP_R].frameRate, animations[AnimationTypes.JUMP_R].loop);
				} else {
					this.stop();
					// this.frame = 24;
					this.play(AnimationTypes.JUMP_L, animations[AnimationTypes.JUMP_L].frameRate, animations[AnimationTypes.JUMP_L].loop);
				}
			} else {
				// if(!attrs.grounded && (this.body.y != this.previousY)) {
				if(!attrs.grounded && !this.collided) {
					trace('player grounded = ' + attrs.grounded + ', collided = ' + this.collided);
					if(this.facingForward) {
						this.play(AnimationTypes.FALLING_R, animations[AnimationTypes.FALLING_R].frameRate, animations[AnimationTypes.FALLING_R].loop);
					} else {
						this.play(AnimationTypes.FALLING_L, animations[AnimationTypes.FALLING_L].frameRate, animations[AnimationTypes.FALLING_L].loop);
					}
				} else {
					if(this.velX === 0) {												// IDLE
						this.stop();
						if(this.facingForward) {
							this.play(AnimationTypes.IDLE_R, animations[AnimationTypes.IDLE_R].frameRate, animations[AnimationTypes.IDLE_R].loop);
						} else {
							this.play(AnimationTypes.IDLE_L, animations[AnimationTypes.IDLE_L].frameRate, animations[AnimationTypes.IDLE_L].loop);
						}
					} else {
						if(this.velX > 0) {
							if(this.currentAnimation !== 'runR') {			// MOVING RIGHT
						 		// trace('play run right');
								this.play(AnimationTypes.RUN_R, animations[AnimationTypes.RUN_R].frameRate, animations[AnimationTypes.RUN_R].loop);
							}
						} else if(this.velX < 0) {									// MOVING LEFT
							if(this.currentAnimation !== 'runL') {
						 		// trace('play run left');
								this.play(AnimationTypes.RUN_L, animations[AnimationTypes.RUN_L].frameRate, animations[AnimationTypes.RUN_L].loop);
							}
						}
					}
				}
			}

		}
	};
	
	return AnimatedPlayer;
})();