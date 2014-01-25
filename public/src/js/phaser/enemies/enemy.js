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

	Enemy.prototype.begin = function() {
		// trace('Enemy['+this.model.name+']/begin');
		// trace(this);
		Enemy._super.begin.call(this);
		this.beginGetterSetters();
	};

	Enemy.prototype.beginGetterSetters = function() {
		Enemy._super.beginGetterSetters.call(this);
		
		this.__defineGetter__('active', function() {
			return this.model.active;
		});
		this.__defineSetter__('active', function(val) {
			this.model.active = val;
		});
		this.__defineGetter__('score', function() {
			return this.model.attrs.score;
		});
	};
	
	Enemy.prototype.pwUpdate = function(params) {
		if(this.alive) {
			// trace('Enemy['+this.model.name+']/pwUpdate');
			// trace(this);
			var enemyX = this.body.screenX;
			var playerX = params.player.body.screenX;

			if(enemyX < (playerX + stage.width/2) && enemyX > (playerX - stage.width/2)) {
				this.isInView = true;
			} else {
				this.isInView = false;
			}
		}
	};
	
	Enemy.prototype.kill = function(damage) {
		trace('Enemy['+this.model.name+']/kill');
		PolyworksGame.setScore(this.score);
		Enemy._super.kill.call(this);
	};
	
	Enemy.prototype.destroy = function() {
		// trace('Enemy['+this.model.name+']/destroy');
		this.alive = false;
		Enemy._super.destroy.call(this);
		// var ancestor = this.model.ancestor;
		// ancestor.destroyEnemy.call(this, this.model.name, ancestor);
	};
	
	return Enemy;
})();