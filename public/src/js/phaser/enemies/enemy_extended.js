Polyworks.Enemy = (function() {
	Utils.inherits(Enemy, Polyworks.Sprite);
	
	var _this;
	function Enemy(params) {
		// _this = this;
		// trace('Enemy/constructor');
		// Polyworks.Sprite.call(this, params);
		Enemy._super.constructor.call(this, params);
		// trace(this);
		// trace(_this);
	}

	// Enemy.prototype = Object.create(Polyworks.Sprite.prototype);
	// Enemy.prototype.constructor = Enemy;

	Enemy.prototype.start = function() {
		// trace('Enemy['+this.model.name+']/start');
		// trace(this);
		Enemy._super.start.call(this);
		this.initGetterSetters();
	};

	Enemy.prototype.initGetterSetters = function() {
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
	};
	
	Enemy.prototype.update = function(params) {
		if(this.active) {
			var enemyX = this.body.screenX;
			var playerX = params.player.body.screenX;

			if(enemyX < (playerX + stage.width/2) && enemyX > (playerX - stage.width/2)) {
				this.isInView = true;
			} else {
				this.isInView = false;
			}
		}
	};
	
	Enemy.prototype.receiveDamage = function(damage) {
		// trace('Enemy/receiveDamage, player.damage = ' + damage);
		this.model.health -= damage;
		if(this.model.health <= 0) {
			PolyworksGame.setScore(this.model.score);
			this.destroy();
		}
	};
	
	return Enemy;
})();