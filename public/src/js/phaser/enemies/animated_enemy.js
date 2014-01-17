Polyworks.AnimatedEnemy = (function() {
	Utils.inherits(AnimatedEnemy, Polyworks.Enemy);
	
	var _this;
	function AnimatedEnemy(params) {
		// trace('AnimatedEnemy/constructor');
		AnimatedEnemy._super.constructor.call(this, params);
	}
	
	AnimatedEnemy.prototype.pwUpdate = function(params) {
		if(this.active) {
			trace('AnimatedEnemy['+this.model.name+']/pwUpdate');
			trace(this);
			trace(AnimatedEnemy._super);
			AnimatedEnemy._super.pwUpdate.call(this, params);

			// trace('AnimatedEnemy['+this.name+']/update\n\tenemyX = ' + enemyX + ', playerX = ' + playerX);

			if(this.isInView) {
				// trace('\tenemy['+this.name+'] in range');
				var enemyX = this.body.screenX;
				var playerX = params.player.body.screenX;
				var animations = this.animations; 

				if(enemyX > (playerX + 10)) {
					if(this.currentAnimation !== 'walkL') {
						animations.play('walkL', animations.frameRate, true);
						this.currentAnimation = 'walkL';
					}
					this.move({ direction: Polyworks.Directions.LEFT });
				} else if(enemyX < (playerX - 10)){
					if(this.currentAnimation !== 'walkR') {
						animations.play('walkR', animations.frameRate, true);
						this.currentAnimation = 'walkR';
					}
					this.move({ direction: Polyworks.Directions.RIGHT });
				} else {
					animations.stop();
					this.frame = 0
					this.currentAnimation = '';
				}
			}
		}
	};
	
	return AnimatedEnemy;
})();