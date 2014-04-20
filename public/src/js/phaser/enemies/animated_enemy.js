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
				var enemyX = this.body.screenX;
				var playerX = params.player.body.screenX;
				var animations = this.model.attrs.animations; 

				// var playerToLeft = true;
				// if(enemyX < (playerX - 10)) {
				// 	playerToLeft = false;
				// }

				var relationToPlayer = 'near';
				if(enemyX < (playerX - 25)) {
					relationToPlayer = 'right';
				} else if(enemyX > (playerX + 25)) {
					relationToPlayer = 'left';
				}
				// if(!this.body.touching.down) {
				// 	if(relationToPlayer == 'left') {
				// 		if(this.currentAnimation !== AnimationTypes.FALLING_L) {
				// 			this.play(AnimationTypes.FALLING_L, animations[AnimationTypes.FALLING_L].frameRate, animations[AnimationTypes.FALLING_L].loop)
				// 		}
				// 	} else {
				// 		if(this.currentAnimation !== AnimationTypes.FALLING_R) {
				// 			this.play(AnimationTypes.FALLING_R, animations[AnimationTypes.FALLING_R].frameRate, animations[AnimationTypes.FALLING_R].loop)
				// 		}
				// 	}
				// } else {
					switch(relationToPlayer) {
						case 'near':
						if(this.currentAnimation !== AnimationTypes.IDLE) {
							this.play(AnimationTypes.IDLE, animations[AnimationTypes.IDLE].frameRate, animations[AnimationTypes.IDLE].loop)
						}
						break;
						
						case 'left': 
							if(this.currentAnimation !== AnimationTypes.WALK_L) {
								this.play(AnimationTypes.WALK_L, animations[AnimationTypes.WALK_L].frameRate, animations[AnimationTypes.WALK_L].loop)
							}
							this.move({ direction: Polyworks.Directions.LEFT });
						break;
						
						case 'right': 
							if(this.currentAnimation !== AnimationTypes.WALK_R) {
								this.play(AnimationTypes.WALK_R, animations[AnimationTypes.WALK_R].frameRate, animations[AnimationTypes.WALK_R].loop)
							}
							this.move({ direction: Polyworks.Directions.RIGHT });
						break;
						
						default:
						break;
					}
					// if(playerToLeft) {
					// 	if(this.currentAnimation !== AnimationTypes.WALK_L) {
					// 		this.play(AnimationTypes.WALK_L, animations[AnimationTypes.WALK_L].frameRate, animations[AnimationTypes.WALK_L].loop)
					// 	}
					// 	this.move({ direction: Polyworks.Directions.LEFT });
					// } else {
					// 	if(this.currentAnimation !== AnimationTypes.WALK_R) {
					// 		this.play(AnimationTypes.WALK_R, animations[AnimationTypes.WALK_R].frameRate, animations[AnimationTypes.WALK_R].loop)
					// 	}
					// 	this.move({ direction: Polyworks.Directions.RIGHT });
					// }
				// }
			}
		}
	};
	
	return AnimatedEnemy;
})();