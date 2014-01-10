Polyworks.PhysicalGroupCollection = (function() {
	Utils.inherits(PhysicalGroupCollection, Polyworks.GroupCollection);
	
	function PhysicalGroupCollection(params, id) {
		PhysicalGroupCollection._super.constructor.call(this, params, id);
	}
	
	PhysicalGroupCollection.prototype.checkTerrainCollision = function(ground) {
		for(var key in this.collection) {
			this.collection[key].checkTerrainCollision(ground);
		}
	};
	
	return PhysicalGroupCollection;
})();