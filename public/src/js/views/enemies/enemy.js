var Enemy = (function() {
	Utils.inherits(Enemy, View);

	var _this;
	
	function Enemy(params) {
		_this = this;
		Enemy._super.constructor.call(this, params);

		this.model.viewObjs = {};
		
		this.model.layer.setPosition(this.model.x, this.model.y);

		this.inView = false;
		
		this.__defineGetter__('alive', function() {
			return this.model.alive;
		});
		
		this.__defineGetter__('health', function() {
			return this.model.health;
		});
		
		this.__defineSetter__('health', function(val) {
			this.model.health = val;
			if(this.model.health <= 0) {
				this.die();
			}
		});

		this.__defineGetter__('damage', function() {
			return this.model.damage;
		});
		
	}
	
	Enemy.prototype.getAbsolutePosition = function() {
		// return this.model.viewObjs[0].getAbsolutePosition();
		return this.model.layer.getAbsolutePosition();
	};
	
	Enemy.prototype.update = function(params) {
		var pos = (params.pos) ? params.pos : this.model.layer.getAbsolutePosition();
		if(Utils.isInView(pos)) {
			this.inView = true;
		} else {
			this.inView = false;
		}
	};
	
	Enemy.prototype.die = function() {
		// trace('Enemy['+this.model.id+']/die');
		this.model.holder.enemyDied(this.model.id);
		this.model.layer.remove();
		this.model.alive = false;
	};
	
	return Enemy;
})();