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
	};
	
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