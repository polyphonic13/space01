var AnimatedEnemyView = (function() {
	Utils.inherits(AnimatedEnemyView, AnimatedGroupView);
	
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

		if(enemyX < (playerX + config.stage.width/2) && enemyX > (playerX - config.stage.width/2)) {
			// trace('enemy['+this.gameObj.name+'] activated');
			var animations = this.sprite.animations; 

			if(enemyX > (playerX + 10)) {
				if(_this.currentAnimation !== 'walkL') {
					animations.play('walkL', animations.frameRate, true);
					_this.currentAnimation = 'walkL';
				}
				_this.sprite.x -= _this.speed;

			} else if(enemyX < (playerX - 10)){
				if(this.currentAnimation !== 'walkR') {
					animations.play('walkR', animations.frameRate, true);
					_this.currentAnimation = 'walkR';
				}
				_this.sprite.x += _this.speed;
			} else {
				animations.stop();
				_this.sprite.frame = 0
				_this.currentAnimation = '';
			}
		}
	};
	
	return AnimatedEnemyView;
})();