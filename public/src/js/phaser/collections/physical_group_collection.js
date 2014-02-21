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
				c.checkTerrainCollision(terrain);
			},
			this
		);
	};
	
	PhysicalGroupCollection.prototype.checkDyanmicTerrainCollision = function(terrain) {
		// trace('PhysicalGroupCollection['+this.model.name+']/checkDyanmicTerrainCollision');
		// trace(terrain);
		// trace(this);
		Utils.each(this.model.collection,
			function(c) {
				c.checkDynamicTerrainCollision(terrain);
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
		// trace('PhysicalGroupCollection['+this.model.name+']/getActive, collection length = ' + this.model.collection.length);
		var activeElements = [];
		Utils.each(this.model.collection,
			function(c) {
				trace('c['+c.model.name+'].active = ' + c.active);
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