Polyworks.Enemies = (function() {
	Polyworks.Utils.inherits(Enemies, Polyworks.Groups);
	
	function Enemies(params, id) {
		Enemies._super.constructor.call(this, params, id);
	}
	
	Enemies.prototype.update = function(params) {
		// trace('Enemies['+this.id+']/update, this.collection = ');
		// trace(this.collection);
		var enemy;
		for(var key in this.collection) {
			enemy = this.collection[key]
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