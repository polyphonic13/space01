Polyworks.AnimatedEnemy = (function() {
	Utils.inherits(AnimatedEnemy, Polyworks.Enemy);
	
	var _this;
	function AnimatedEnemy(params, id) {
		// trace('AnimatedEnemy['+idx+']/constructor, params =');
		// trace(params);
		_this = this;
		AnimatedEnemy._super.constructor.call(this, params, id);

	}
	
	AnimatedEnemy.prototype.update = function(params) {
		if(this.active) {
			AnimatedEnemy._super.update.call(this, params);

			var enemyX = this.view.sprite.body.screenX;
			var playerX = params.player.body.screenX;
			// trace('AnimatedEnemy['+this.view.sprite.name+']/update\n\tenemyX = ' + enemyX + ', playerX = ' + playerX);

			if(this.isInView) {
				// trace('\tenemy['+this.view.sprite.name+'] in range');
				var animations = this.view.sprite.animations; 

				if(enemyX > (playerX + 10)) {
					if(this.currentAnimation !== 'walkL') {
						animations.play('walkL', animations.frameRate, true);
						this.currentAnimation = 'walkL';
					}
					this.view.move({ direction: Polyworks.Directions.LEFT });
				} else if(enemyX < (playerX - 10)){
					if(this.currentAnimation !== 'walkR') {
						animations.play('walkR', animations.frameRate, true);
						this.currentAnimation = 'walkR';
					}
					this.view.move({ direction: Polyworks.Directions.RIGHT });
				} else {
					animations.stop();
					this.view.sprite.frame = 0
					this.currentAnimation = '';
				}
			}
		}
	};
	
	return AnimatedEnemy;
})();