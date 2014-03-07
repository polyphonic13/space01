Polyworks.Enemy = (function() {
	Polyworks.Utils.inherits(Enemy, Polyworks.Sprite);
	
	var _this;
	function Enemy(params) {
		// _this = this;
		// trace('Enemy/constructor');
		// Polyworks.Sprite.call(this, params);
		Enemy._super.constructor.call(this, params);
		// trace(this);
		// trace(_this);
		// this.deactivateGravity();

		// pause state debugging
		this.reactivated = false; 
	}

	Enemy.prototype.begin = function() {
		// trace('Enemy['+this.model.name+']/begin');
		// trace(this);
		Enemy._super.begin.call(this);
		// trace('Enemy['+this.model.name+']/begin, size = ' + this.width + '/' + this.height + ', body size = ' + this.body.width + '/' + this.body.height);
	};

	// Enemy.prototype.activateGravity = function() {
	// 	trace('Enemy['+this.model.name+']/activateGravity');
	// 	this.reactivated = true;
	// 	Enemy._super.activateGravity.call(this);
	// };

	Enemy.prototype.pwUpdate = function(params) {
		if(this.alive) {
			if(this.reactivated) {
				trace('Player/update, x/y = ' + this.body.screenX + '/' + this.body.screenY, this);
			}
			// trace('Enemy['+this.model.name+']/pwUpdate, x/y = ' + this.body.screenX + '/' + this.body.screenY);
			// trace(this);
			var enemyX = this.body.screenX;
			var playerX = params.player.body.screenX;

			if(enemyX < (playerX + Polyworks.Stage.width/2) && enemyX > (playerX - Polyworks.Stage.width/2)) {
				this.isInView = true;
			} else {
				this.isInView = false;
			}
			this.checkDynamicTerrainCollision(params.dynamicTerrain);
		}
	};
	
	Enemy.prototype.damage = function(damage) {
		// trace('Enemy['+this.model.name+']/damage, damage = ' + damage + ', health = ' + this.health);
		this.health -= damage;
		if(this.health <= 0) {
			this.kill();
		}
	};
	
	Enemy.prototype.kill = function() {
		trace('Enemy['+this.model.name+']/kill, ancestor = ');
		// trace(this.model);
		PolyworksGame.setScore(this.model.attrs.score);
		this.model.ancestor.killChild.call(this.model.ancestor, this.model.name);
		Enemy._super.kill.call(this);
	};
	
	Enemy.prototype.destroy = function() {
		// trace('Enemy['+this.model.name+']/destroy');
		this.alive = false;
		Enemy._super.destroy.call(this);
	};
	
	return Enemy;
})();