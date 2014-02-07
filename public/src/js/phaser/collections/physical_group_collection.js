Polyworks.PhysicalGroupCollection = (function() {
	Utils.inherits(PhysicalGroupCollection, Polyworks.GroupCollection);
	
	function PhysicalGroupCollection(params) {
		PhysicalGroupCollection._super.constructor.call(this, params);
	}
	
	PhysicalGroupCollection.prototype.checkTerrainCollision = function(terrain) {
		// trace('PhysicalGroupCollection['+this.model.name+']/checkTerrainCollsion');
		// trace(terrain);
		// trace(this);
		Utils.each(this.model.collection,
			function(c) {
				c.checkTerrainCollection(terrain);
			},
			this
		);
	};
	
	PhysicalGroupCollection.prototype.activateGravity = function() {
		// trace('PhysicalGroupCollection['+this.model.name+']/activateGravity, collection length = ' + collection.length);
		Utils.each(this.model.collection,
			function(c) {
				c.activateGravity();
			},
			this
		);
	};
	
	PhysicalGroupCollection.prototype.getActive = function() {
		var activeElements = [];
		Utils.each(this.model.collection,
			function(c) {
				if(c.active) {
					activeElements.push(c);
				}
			},
			this
		);

		return activeElements;
	};
	
	return PhysicalGroupCollection;
})();