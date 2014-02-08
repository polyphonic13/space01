Polyworks.Collection = (function() {
	
	function Collection(params) {
		this.model = new Polyworks.Model(params);
		// trace('Collection['+params.name+']/constructor');
		// trace(params);
	}
	
	Collection.prototype.begin = function() {
		// trace('Collection['+this.model.name+']/begin');
		// trace(this);
		var game = PolyworksGame.phaser;
		var collection = [];
		var nameIndex = {};
		var children = this.model.attrs;
		var child;
		var params;

		Utils.each(children,
			function(c, i) {
				c.game = game;
				c.ancestor = this;

				child = new Polyworks[c.cl](c);
				child.begin();

				collection.push(child);
				nameIndex[c.name] = i;
			},
			this
		);

		this.model.set({ collection: collection, nameIndex: nameIndex });
		// this.beginGetterSetters();
	};
	
	// Collection.prototype.beginGetterSetters = function() {
	// 	this.__defineSetter__('exists', function(val) {
	// 		this.setChildProperty(val, 'exists');
	// 	});
	// 	this.__defineSetter__('visible', function(val) {
	// 		trace('Collection['+this.model.name+']/set visible, val = ' + val);
	// 		this.setChildProperty(val, 'visible');
	// 	});
	// };
	
	Collection.prototype.setChildProperty = function(prop, val) {
		// trace('Collection['+this.model.name+']/setChildProperty, val = ' + val + ', prop = ' + prop);
		Utils.each(this.model.collection,
			function(c) {
				// trace('\tc = ' + c.model.name);
				if(c.setChildProperty) {
					// trace('\t\tcalling setChildProperty');
					c.setChildProperty(val, prop);
				} else if(c.hasOwnProperty(prop)) {
					// trace('\t\tsetting property');
					c[prop] = val;
				}
			},
			true
		);
	};
	
	Collection.prototype.set
	Collection.prototype.getChildByName = function(name) {
		// trace('Collection/getChildByName, name = ' + name);
		// trace(this.model);
		return this.model.collection[this.model.nameIndex[name]];
	};
	
	Collection.prototype.removeAll = function() {
		this.destroy();
	};
	
	Collection.prototype.destroy = function() {
		var collection = this.model.collection;

		while(collection.length > 0) {
			collection.pop();
		}
	};
	
	return Collection;
})();