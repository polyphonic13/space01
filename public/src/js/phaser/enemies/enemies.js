Polyworks.Enemies = (function() {
	Utils.inherits(Enemies, Polyworks.PhysicalGroupCollection);
	
	function Enemies(params) {
		// trace('Enemies['+params.name+']/constructor');
		// trace(params);
		Enemies._super.constructor.call(this, params);
	}
	
	Enemies.prototype.update = function(params) {
		// trace('Enemies['+this.model.name+']/update, this.collection = ');
		// trace(this.collection);
		var enemy;
		var collection  = this.model.collection;
		for(var i = 0; i < collection.length; i++) {
			enemy = collection[i]
			if(enemy.active) {
				enemy.update(params);
			}
		}
	};
	
	return Enemies;
})();