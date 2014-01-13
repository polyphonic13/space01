Polyworks.AnimatedEnemy = (function() {
	Utils.inherits(AnimatedEnemy, Polyworks.AnimatedSprite);
	
	var _this;
	function AnimatedEnemy(params, id) {
		// trace('AnimatedEnemy['+idx+']/constructor, params =');
		// trace(params);
		_this = this;
		AnimatedEnemy._super.constructor.call(this, params, id);

		this.__defineGetter__('score', function() {
			return this.model.score;
		});
		this.__defineGetter__('damage', function() {
			return this.model.damage;
		});
		this.__defineGetter__('health', function() {
			return this.model.health;
		});
		this.__defineSetter__('health', function(val) {
			this.model.health = val;
		});
	}
	
	AnimatedEnemy.prototype.update = function(params) {
		if(this.active) {
			var enemyX = this.sprite.body.screenX;
			var playerX = params.player.body.screenX;
			// trace('AnimatedEnemy['+this.sprite.name+']/update\n\tenemyX = ' + enemyX + ', playerX = ' + playerX);

			if(enemyX < (playerX + stage.width/2) && enemyX > (playerX - stage.width/2)) {
				// trace('\tenemy['+this.sprite.name+'] in range');
				var animations = this.sprite.animations; 

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
					this.sprite.frame = 0
					this.currentAnimation = '';
				}
			}
		}
	};
	
	AnimatedEnemy.prototype.damaged = function(damage) {
		trace('AnimatedEnemy/damaged, player.damage = ' + damage);
		this.model.health -= damage;
		if(this.model.health <= 0) {
			PolyworksGame.setScore(this.model.score);
			this.destroy();
		}
	}
	
	AnimatedEnemy.prototype.destroy = function() {
		this.sprite.animations.stop();
		this.sprite.animations = null;
		AnimatedEnemy._super.destroy.call(this);
	};
	
	return AnimatedEnemy;
})();