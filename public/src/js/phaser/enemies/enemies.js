Polyworks.Enemies = (function() {
	Utils.inherits(Enemies, Polyworks.PhysicalGroupCollection);
	
	function Enemies(params) {
		// trace('Enemies['+params.name+']/constructor');
		// trace(params);
		Enemies._super.constructor.call(this, params);
	}
	
	Enemies.prototype.update = function(params) {
		var enemy;
		var collection  = this.model.collection;
		for(var i = 0; i < collection.length; i++) {
			if(collection[i].active) {
				collection[i].pwUpdate(params);
			}
		}
	};
	
	Enemies.prototype.destroyEnemy = function(name) {
		var enemy = this.model.collection.getChildByName(name);
		trace('Enemies/destroyEnemy, name = ' + name + ', enemy = ');
		trace(enemy);
		enemy.alive = false;
		enemy.destroy();
	};
	
	return Enemies;
})();