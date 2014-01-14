Polyworks.Collection = (function() {
	
	function Collection(params) {
		this.model = new Polyworks.Model(params);
		trace('Collection['+params.name+']/constructor');
		trace(params);
	}
	
	Collection.prototype.begin = function() {
		trace('Collection['+this.model.name+']/begin');
		trace(this);

		var game = PolyworksGame.phaser;
		var group;
		if(this.model.addTo && this.model.addTo === 'null') {
			group = game.add.group(null);
		} else {
			group = game.add.group();
		}

		this.addChildren(game, group, this.model.attrs);
	};
	
	Collection.prototype.addChildren = function(game, group, children) {
		trace('Collection['+this.model.name+']/addChildren, children = ');
		trace(children);
		var collection = this.model.collection || {};
		var child;
		var params;

		for(var i = 0; i < children.length; i++) {
			params = children[i];
			trace('\tchildren['+children[i].name+'].cl = ' + params.cl);
			params.game = game;
			trace(params);

			child = new Polyworks[params.cl](params);
			child.begin();

			collection[children[i].name] = child;
			group.add(child);
		}

		this.model.set({ collection: collection, group: group });
	};
	
	// Collection.prototype.addView = function(params, itemClass) {
	// 	trace('----- Collection['+this.model.name+']/addView');
	// 	trace(params);
	// 	return new Polyworks[itemClass](params);
	// };
	
	Collection.prototype.getItemByName = function(name) {
		return this.model.collection[name];
	};
	
	Collection.prototype.remove = function(child) {
		this.model.group.remove(child);
		delete this.model.collection[child];
	};
	
	Collection.prototype.removeAll = function() {
		// trace('Collection['+this.model.name+']/remove, collection = ');
		// trace(this.collection);
		this.model.group.removeAll();
	};

	Collection.prototype.destroy = function() {
		this.model.group.destroy();
		var collection = this.model.collection;
		for(var key in collection) {
			delete collection[key];
		}
	};
	
	return Collection;
})();