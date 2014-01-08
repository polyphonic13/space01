Polyworks.AnimatedEnemyView = (function() {
	Utils.inherits(AnimatedEnemyView, Polyworks.AnimatedGroupView);
	
	var _this;
	function AnimatedEnemyView(params, group, id) {
		// trace('AnimatedEnemyView['+idx+']/constructor, params =');
		// trace(params);
		_this = this;
		AnimatedEnemyView._super.constructor.call(this, params, group, id);
		
		this.__defineGetter__('score', function() {
			return this.get('score');
		});
		this.__defineGetter__('damage', function() {
			return this.get('damage');
		});
		this.__defineGetter__('health', function() {
			return this.get('health');
		});
		this.__defineSetter__('health', function(val) {
			this.set({ health: val });
		});
	}
	
	AnimatedEnemyView.prototype.update = function(params) {
		var enemyX = this.sprite.body.screenX;
		var playerX = params.player.body.screenX;
		// trace('AnimatedEnemyView['+this.sprite.name+']/update\n\tenemyX = ' + enemyX + ', playerX = ' + playerX);

		if(enemyX < (playerX + stage.width/2) && enemyX > (playerX - stage.width/2)) {
			// trace('\tenemy['+this.sprite.name+'] in range');
			var animations = this.sprite.animations; 

			if(enemyX > (playerX + 10)) {
				if(this.currentAnimation !== 'walkL') {
					animations.play('walkL', animations.frameRate, true);
					this.currentAnimation = 'walkL';
				}
				this.sprite.x -= this.model.speed;

			} else if(enemyX < (playerX - 10)){
				if(this.currentAnimation !== 'walkR') {
					animations.play('walkR', animations.frameRate, true);
					this.currentAnimation = 'walkR';
				}
				this.sprite.x += this.model.speed;
			} else {
				animations.stop();
				this.sprite.frame = 0
				this.currentAnimation = '';
			}
		}
	};
	
	AnimatedEnemyView.prototype.kill = function() {
		trace('AnimatedEnemey['+this.sprite.name+']/kill');
		this.active = false;
		this.sprite.destroy();
	};
	
	return AnimatedEnemyView;
})();