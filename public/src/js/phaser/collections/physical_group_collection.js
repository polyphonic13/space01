Polyworks.PhysicalGroupCollection = (function() {
	Utils.inherits(PhysicalGroupCollection, Polyworks.GroupCollection);
	
	function PhysicalGroupCollection(params) {
		PhysicalGroupCollection._super.constructor.call(this, params);
	}
	
	PhysicalGroupCollection.prototype.checkTerrainCollision = function(terrain) {
		// trace('PhysicalGroupCollection['+this.model.name+']/checkTerrainCollsion');
		// trace(terrain);
		// trace(this);
		var collection = this.model.collection;
		for(var i = 0; i < collection.length; i++) {
			collection[i].checkTerrainCollision(terrain);
		}
	};
	
	PhysicalGroupCollection.prototype.activateGravity = function() {
		var collection = this.model.collection;
		trace('PhysicalGroupCollection['+this.model.name+']/activateGravity, collection length = ' + collection.length);
		for(var i = 0; i < collection.length; i++) {
			collection[i].activateGravity();
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