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
	
	PhysicalGroupCollection.prototype.getActive = function() {
		var activeElements = [];
		for(var i = 0; i < this.collection.length; i++) {
			if(this.collection[i].active) {
				activeElements.push(this.collection[i]);
			}
		}
		return activeElements;
	};
	
	return PhysicalGroupCollection;
})();