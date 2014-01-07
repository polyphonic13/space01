var EnemyCollection = (function() {
	Utils.inherits(EnemyCollection, GroupCollection);
	
	function EnemyCollection(params, id) {
		EnemyCollection._super.constructor.call(this, params, id);
	}
	
	EnemyCollection.prototype.update = function(params) {
		// trace('EnemyCollection['+this.id+']/update, this.collection = ');
		// trace(this.collection);
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