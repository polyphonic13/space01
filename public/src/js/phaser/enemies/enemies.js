Polyworks.Enemies = (function() {
	Utils.inherits(Enemies, Polyworks.PhysicalGroupCollection);
	
	function Enemies(params) {
		// trace('Enemies['+params.name+']/constructor');
		// trace(params);
		Enemies._super.constructor.call(this, params);
	}
	
	Enemies.prototype.pwUpdate = function(params) {
		Utils.each(this.model.collection,
			function(c) {
				if(c.alive) {
					c.pwUpdate(params);
				}
			},
			this
		);
	};
	
	Enemies.prototype.killEnemy = function(name) {
		// this = me;
		// trace('Enemies['+this.model.name+']/killEnemy, name = ' + name);
		// trace(this);
		this.removeChild(name);
	};
	
	Enemies.prototype.destroyEnemy = function(name, ancestor) {
		// trace('Enemies/destroyEnemy, name = ' + name);
		// trace(this);
		// trace(ancestor);
		var enemy = ancestor.model.collection[ancestor.nameIndex[name]];
		// trace(enemy);
		enemy.alive = false;
		enemy.destroy();
	};
	
	return Enemies;
})();