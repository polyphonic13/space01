Polyworks.PhysicalGroupCollection = (function() {
	Polyworks.Utils.inherits(PhysicalGroupCollection, Polyworks.GroupCollection);
	
	function PhysicalGroupCollection(params) {
		PhysicalGroupCollection._super.constructor.call(this, params);
	}
	
	PhysicalGroupCollection.prototype.checkTerrainCollision = function(terrain) {
		// trace('PhysicalGroupCollection['+this.model.name+']/checkTerrainCollsion');
		// trace(terrain);
		// trace(this);
		Polyworks.Utils.each(this.model.collection,
			function(c) {
				c.checkTerrainCollision(terrain);
			},
			this
		);
	};
	
	PhysicalGroupCollection.prototype.deactivateGravity = function() {
		Polyworks.Utils.each(this.model.collection,
			function(c) {
				c.deactivateGravity();
			},
			this
		);
	};
	
	PhysicalGroupCollection.prototype.activateGravity = function() {
		// trace('PhysicalGroupCollection['+this.model.name+']/activateGravity, collection length = ' + collection.length);
		Polyworks.Utils.each(this.model.collection,
			function(c) {
				c.activateGravity();
			},
			this
		);
	};
	
	PhysicalGroupCollection.prototype.getActive = function() {
		// trace('PhysicalGroupCollection['+this.model.name+']/getActive, collection length = ' + this.model.collection.length);
		var activeElements = [];
		Polyworks.Utils.each(this.model.collection,
			function(c) {
				// trace('c['+c.model.name+'].active = ' + c.active);
				if(c.active) {
					activeElements.push(c);
				}
			},
			this
		);

		// trace('PhysicalGroupCollection['+this.model.name+']/getActive, activeElements = ', activeElements);
		return activeElements;
		// return this.group;
	};
	
	PhysicalGroupCollection.prototype.killChild = function(name) {
		trace('PhysicalGroupCollection['+this.model.name+']/killChild, name = ' + name);
		var child = this.getChildByName(name); 
		child.exists = child.alive = false;
		this.removeChild(name);
	};
	
	return PhysicalGroupCollection;
})();