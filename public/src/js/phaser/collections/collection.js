Polyworks.Collection = (function() {
	
	function Collection(params) {
		this.model = new Polyworks.Model(params);
		trace('Collection['+params.name+']/constructor');
	}
	
	Collection.prototype.init = function() {
		trace('Collection['+this.model.name+']/init');
		trace(this.model);
		var game = PolyworksGame.phaser;
		var children = this.model.attrs;
		var child;
		var cl;
		var attrs;
		var group = game.add.group();
		var collection = {};

		for(var i = 0; i < children.length; i++) {
			var attrs = children[i].attrs;
			if(!attrs.name) {
				attrs.name = (children[i].name) ? children[i].name : i;
			}

			trace('\tchildren['+children[i].name+'].cl = ' + children[i].cl);
			trace(attrs);

			child = new Polyworks[children[i].cl](game, attrs);
			child.init();

			collection[children[i].name] = child;
			group.add(child);
		}
		this.model.set({ collection: collection, group: group });
	};
	
	Collection.prototype.addView = function(params, itemClass) {
		trace('Collection['+this.model.name+']/addView');
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
		var collection = this.model.collection;
		for(var key in collection) {
			delete collection[key];
		}
	};

	return Collection;
})();