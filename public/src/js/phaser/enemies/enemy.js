Polyworks.Enemy = (function() {
	Utils.inherits(Enemy, Polyworks.Base);
	
	var _this;
	function Enemy(params, id) {
		_this = this;
		Enemy._super.constructor.call(this, params, id);

		this.__defineGetter__('sprite', function() {
			return this.view.sprite;
		});
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
	
	Enemy.prototype.init = function(params) {
		this.isInView = false;
		this.velX = 0;
		this.velY = 0;
		this.initSprite();
	};
	
	Enemy.prototype.initSprite = function() {
		this.view = new Polyworks[this.model.spriteType](this.model, this.id);
		this.view.init();
	};
	
	Enemy.prototype.update = function(params) {
		if(this.active) {
			var enemyX = this.view.sprite.body.screenX;
			var playerX = params.player.body.screenX;

			if(enemyX < (playerX + stage.width/2) && enemyX > (playerX - stage.width/2)) {
				this.isInView = true;
			} else {
				this.isInView = false;
			}
		}
	};
	
	Enemy.prototype.checkTerrainCollision = function(terrain) {
		PolyworksGame.phaser.physics.collide(this.view.sprite, terrain);
	};
	
	Enemy.prototype.damaged = function(damage) {
		// trace('Enemy/damaged, player.damage = ' + damage);
		this.model.health -= damage;
		if(this.model.health <= 0) {
			PolyworksGame.setScore(this.model.score);
			this.destroy();
		}
	}
	
	Enemy.prototype.destroy = function() {
		this.view.destroy();
	};
	
	return Enemy;
})();