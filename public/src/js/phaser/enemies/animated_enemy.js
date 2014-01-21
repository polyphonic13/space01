Polyworks.AnimatedEnemy = (function() {
	Utils.inherits(AnimatedEnemy, Polyworks.Enemy);
	
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
				var animations = this.animations; 

				var playerToLeft = true;
				if(enemyX < (playerX - 10)) {
					playerToLeft = false;
				}
				
				if(!this.body.touching.down) {
					if(playerToLeft) {
						if(this.currentAnimation !== 'fallingL') {
							animations.play('fallingL', animations.frameRate, true);
							this.currentAnimation = 'fallingL';
						}
					} else {
						if(this.currentAnimation !== 'fallingR') {
							animations.play('fallingR', animations.frameRate, true);
							this.currentAnimation = 'fallingR';
						}
						
					}
				} else {
					if(playerToLeft) {
						if(this.currentAnimation !== 'walkL') {
							animations.play('walkL', animations.frameRate, true);
							this.currentAnimation = 'walkL';
						}
						this.move({ direction: Polyworks.Directions.LEFT });
					} else {
						if(this.currentAnimation !== 'walkR') {
							animations.play('walkR', animations.frameRate, true);
							this.currentAnimation = 'walkR';
						}
						this.move({ direction: Polyworks.Directions.RIGHT });
					}
				}
			}
		}
	};
	
	return AnimatedEnemy;
})();