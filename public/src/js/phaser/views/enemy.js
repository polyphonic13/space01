var Enemy = (function() {
	Utils.inherits(Enemy, AnimatedGroupView);
	
	function Enemy(params, group, idx) {
		Enemy._super.constructor.call(this, params, group, idx);

		this.__defineGetter__('alive', function() {
			return this.model.sprite.alive;
		});

		this._defineSetter__('alive', function(val) {
			this.model.sprite.alive = val;
		});

		this._defineGetter__('health', function() {
			return this.model.health;
		});

		this._defineGetter__('damage', function() {
			return this.model.damage;
		});
	}
	
	return Enemy;
})();