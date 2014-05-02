Polyworks.BossPiece = (function() {
	Polyworks.Utils.inherits(BossPiece, Polyworks.Enemy); 
	
	function BossPiece(params) {
		BossPiece._super.constructor.call(this, params);
	}
	
	BossPiece.prototype.pwUpdate = function(params) {
		if(this.alive) {
			BossPiece._super.pwUpdate.call(this, params);
			if(this.isInView) {
				var animations = this.model.attrs.animations; 

				switch(this.relationToPlayer) {
					case 'near':
						if(this.currentAnimation !== AnimationTypes.ATTACK_L) {
							this.play(AnimationTypes.ATTACK_L, animations[AnimationTypes.ATTACK_L].frameRate, animations[AnimationTypes.ATTACK_L].loop);
						}
					break;

					case 'left': 
						if(this.currentAnimation !== AnimationTypes.ATTACK_L) {
							this.play(AnimationTypes.ATTACK_L, animations[AnimationTypes.ATTACK_L].frameRate, animations[AnimationTypes.ATTACK_L].loop);
						}
					break;

					case 'right': 
						if(this.currentAnimation !== AnimationTypes.ATTACK_L) {
							this.play(AnimationTypes.ATTACK_L, animations[AnimationTypes.ATTACK_L].frameRate, animations[AnimationTypes.ATTACK_L].loop);
						}
					break;

					default:
					break;
				}
			} else {
				if(this.currentAnimation !== AnimationTypes.IDLE) {
					this.play(AnimationTypes.IDLE, animations[AnimationTypes.IDLE].frameRate, animations[AnimationTypes.IDLE].loop);
				}
			}
		}
	};
	
	return BossPiece;
})();