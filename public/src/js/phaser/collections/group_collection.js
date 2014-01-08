var GroupCollection = (function() {
	Utils.inherits(GroupCollection, Collection);
	
	function GroupCollection(params, id) {
		GroupCollection._super.constructor.call(this, params, id);
		this.group = game.add.group();
	}
	
	GroupCollection.prototype.checkTerrainCollision = function(ground) {
		for(var key in this.collection) {
			this.collection[key].checkTerrainCollision(ground);
		}
	};
	
	GroupCollection.prototype.addView = function(params, itemClass, idx) {
		return new itemClass(params, this.group, idx);
	};
	
	return GroupCollection;
})();