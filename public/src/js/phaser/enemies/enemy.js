Polyworks.Enemy = (function() {
	
	var _this;
	function Enemy(params) {
		_this = this;
		this.model = new Polyworks.Model(params);

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
		this.view = new Polyworks[this.model.spriteType](this.model, this.model.name);
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
	
	Enemy.prototype.receiveDamage = function(damage) {
		// trace('Enemy/receiveDamage, player.damage = ' + damage);
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