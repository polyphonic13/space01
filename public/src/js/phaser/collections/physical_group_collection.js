Polyworks.PhysicalGroupCollection = (function() {
	Utils.inherits(PhysicalGroupCollection, Polyworks.GroupCollection);
	
	function PhysicalGroupCollection(params) {
		PhysicalGroupCollection._super.constructor.call(this, params);
	}
	
	PhysicalGroupCollection.prototype.checkTerrainCollision = function(ground) {
		for(var key in this.collection) {
			this.collection[key].checkTerrainCollision(ground);
		}
	};
	
	PhysicalGroupCollection.prototype.getActive = function() {
		var activeElements = [];
		for(var key in this.collection) {
			if(this.collection[key].active) {
				activeElements.push(this.collection[key]);
			}
		}
		return activeElements;
	};
	
	return PhysicalGroupCollection;
})();