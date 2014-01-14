Polyworks.Enemies = (function() {
	Utils.inherits(Enemies, Polyworks.PhysicalGroupCollection);
	
	var _this;
	function Enemies(params, id) {
		_this = this;
		Enemies._super.constructor.call(this, params, id);
		this.addListeners();
	}
	
	Enemies.prototype.addListeners = function() {
		Polyworks.EventCenter.bind(Polyworks.Events.ENEMY_DESTROYED, this.enemyDestroyed);
	};
	
	Enemies.prototype.update = function(params) {
		// trace('Enemies['+this.id+']/update, this.collection = ');
		// trace(this.collection);
		var enemy;
		for(var i = 0; i < this.collection.length; i++) {
			enemy = this.collection[i]
			if(enemy.active) {
				enemy.update(params);
			}
		}
	};
	
	Enemies.prototype.enemyDestroyed = function(event) {
		trace('Enemies['+_this.id+']/enemyDestroyed, event.value = ' + event.value);
		var enemy = _this.getItemByName(event.value);
		trace(enemy);
	};
	
	return Enemies;
})();