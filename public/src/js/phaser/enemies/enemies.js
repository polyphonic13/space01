Polyworks.Enemies = (function() {
	Utils.inherits(Enemies, Polyworks.PhysicalGroupCollection);
	
	function Enemies(params) {
		// trace('Enemies['+params.name+']/constructor');
		// trace(params);
		Enemies._super.constructor.call(this, params);
	}
	
	Enemies.prototype.update = function(params) {
		trace('Enemies['+this.model.name+']/update, this.collection = ');
		trace(this.model.collection);
		var enemy;
		var collection  = this.model.collection;
		for(var i = 0; i < collection.length; i++) {
			enemy = collection[i]
			trace('\tenemy['+i+'].active = ' + enemy.active);
			if(enemy.active) {
				trace('\t\tcalling update on enemy['+i+']');
				enemy.pwUpdate(params);
			}
		}
	};
	
	// Enemie
	return Enemies;
})();