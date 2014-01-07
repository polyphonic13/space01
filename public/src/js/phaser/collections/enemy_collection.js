var EnemyCollection = (function() {
	Utils.inherits(EnemyCollection, GroupCollection);
	
	function EnemyCollection(params) {
		EnemyCollection._super.constructor.call(this, params);
	}
	
	EnemyCollection.prototype.update = function(params) {
		var enemy;
		for(var key in this.collection) {
			enemy = this.collection[key]
			if(enemy.active) {
				enemy.update(params);
			}
		}
	};
	
	EnemyCollection.prototype.remove = function() {
		for(var key in this.collection) {
			this.collection[key].remove();
		}
	};
	
	return EnemyCollection;
})();