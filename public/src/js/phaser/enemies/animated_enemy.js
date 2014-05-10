Polyworks.AnimatedEnemy = (function() {
	Polyworks.Utils.inherits(AnimatedEnemy, Polyworks.Enemy);
	
	var _this;
	function AnimatedEnemy(params) {
		// trace('AnimatedEnemy/constructor');
		AnimatedEnemy._super.constructor.call(this, params);
	}
	
	AnimatedEnemy.prototype.pwUpdate = function(params) {
		if(this.alive) {
			// trace('AnimatedEnemy['+this.model.name+']/pwUpdate');
			// trace(this);
			AnimatedEnemy._super.pwUpdate.call(this, params);

			if(this.isInView) {
				// trace('\tenemy['+this.name+'] in range');
				var animations = this.model.attrs.animations; 

				if(!this.body.touching.down && (this.model.attrs.movement.type === Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED)) {
					if(this.relationToPlayer == 'left') {
						if(this.currentAnimation !== AnimationTypes.FALLING_L) {
							this.play(AnimationTypes.FALLING_L, animations[AnimationTypes.FALLING_L].frameRate, animations[AnimationTypes.FALLING_L].loop);
						}
					} else {
						if(this.currentAnimation !== AnimationTypes.FALLING_R) {
							this.play(AnimationTypes.FALLING_R, animations[AnimationTypes.FALLING_R].frameRate, animations[AnimationTypes.FALLING_R].loop);
						}
					}
				} else {
					switch(this.relationToPlayer) {
						case 'near':
							if(this.currentAnimation !== AnimationTypes.IDLE) {
								this.play(AnimationTypes.IDLE, animations[AnimationTypes.IDLE].frameRate, animations[AnimationTypes.IDLE].loop);
							}
						break;

						case 'left': 
						case 'above':
							if(this.currentAnimation !== AnimationTypes.WALK_L) {
								this.play(AnimationTypes.WALK_L, animations[AnimationTypes.WALK_L].frameRate, animations[AnimationTypes.WALK_L].loop);
							}
						break;

						case 'right': 
						case 'below':
							if(this.currentAnimation !== AnimationTypes.WALK_R) {
								this.play(AnimationTypes.WALK_R, animations[AnimationTypes.WALK_R].frameRate, animations[AnimationTypes.WALK_R].loop);
							}
						break;

						default:
						break;
					}
				}
			}
		}
	};
	
	return AnimatedEnemy;
})();