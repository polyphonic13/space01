Polyworks.Enemies = (function() {
	Utils.inherits(Enemies, Polyworks.PhysicalGroupCollection);
	
	function Enemies(params, id) {
		Enemies._super.constructor.call(this, params, id);
	}
	
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
	
	Enemies.prototype.remove = function() {
		for(var key in this.collection) {
			this.collection[key].remove();
		}
	};
	
	return Enemies;
})();