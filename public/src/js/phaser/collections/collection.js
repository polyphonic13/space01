Polyworks.Collection = (function() {
	
	function Collection(params) {
		this.model = new Polyworks.Model(params);
		trace('Collection['+params.name+']/constructor');
	}
	
	Collection.prototype.begin = function() {
		trace('Collection['+this.model.name+']/begin');
		trace(this);

		var game = PolyworksGame.phaser;
		var group;
		if(this.model.parent) {
			if(this.model.parent === 'null') {
				group = game.add.group(null);
			} else {
				group = game.add.group(this.model.parent);
			}
		} else {
			group = game.add.group();
		}

		this.addChildren(game, group);
	};
	
	Collection.prototype.addChildren = function(game, group) {
		var collection = {};
		var children = this.model.attrs;
		var child;

		for(var i = 0; i < children.length; i++) {
			trace('\tchildren['+children[i].name+'].cl = ' + children[i].cl);
			trace(children[i]);

			child = new Polyworks[children[i].cl](game, children[i]);
			child.begin();

			collection[children[i].name] = child;
			group.add(child);
		}

		this.model.set({ collection: collection, group: group });
	};
	
	Collection.prototype.addView = function(params, itemClass) {
		trace('----- Collection['+this.model.name+']/addView');
		trace(params);
		return new Polyworks[itemClass](params);
	};
	
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