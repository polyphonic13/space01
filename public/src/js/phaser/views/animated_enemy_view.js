var AnimatedEnemyView = (function() {
	Utils.inherits(AnimatedEnemyView, AnimatedGroupView);
	
	function AnimatedEnemyView(params, group, idx) {
		trace('AnimatedEnemyView['+idx+']/constructor, params =');
		trace(params);
		AnimatedEnemyView._super.constructor.call(this, params, group, idx);
	}
	
	AnimatedEnemyView.prototype.update = function(params) {
		var enemyX = this.sprite.body.screenX;
		var playerX = params.player.body.screenX;

		if(enemyX < (playerX + config.stage.width/2) && enemyX > (playerX - config.stage.width/2)) {
			// trace('enemy['+this.gameObj.name+'] activated');
			var animations = this.sprite.animations; 

			if(enemyX > (playerX + 10)) {
				if(this.currentAnimation !== 'walkL') {
					animations.play('walkL', animations.frameRate, true);
					this.currentAnimation = 'walkL';
				}
				this.sprite.x -= this.speed;

			} else if(enemyX < (playerX - 10)){
				if(this.currentAnimation !== 'walkR') {
					animations.play('walkR', animations.frameRate, true);
					this.currentAnimation = 'walkR';
				}
				this.sprite.x += this.speed;
			} else {
				animations.stop();
				this.sprite.frame = 0
				this.currentAnimation = '';
			}
		}
	};
	
	return AnimatedEnemyView;
})();