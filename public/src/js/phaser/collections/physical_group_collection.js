Polyworks.PhysicalGroupCollection = (function() {
	Utils.inherits(PhysicalGroupCollection, Polyworks.GroupCollection);
	
	function PhysicalGroupCollection(params) {
		PhysicalGroupCollection._super.constructor.call(this, params);
	}
	
	PhysicalGroupCollection.prototype.checkTerrainCollision = function(ground) {
		trace('PhysicalGroupCollection['+this.model.name+']/checkTerrainCollsion');
		trace(ground);
		trace(this);
		var collection = this.model.collection;
		for(var i = 0; i < collection.length; i++) {
			collection[i].checkTerrainCollision(ground);
		}
	};
	
	PhysicalGroupCollection.prototype.getActive = function() {
		var activeElements = [];
		var collection = this.model.collection;
		for(var i = 0; i < collection.length; i++) {
			if(collection[i].active) {
				activeElements.push(collection[i]);
			}
		}
		return activeElements;
	};
	
	return PhysicalGroupCollection;
})();