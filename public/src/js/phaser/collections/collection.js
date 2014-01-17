Polyworks.Collection = (function() {
	
	function Collection(params) {
		this.model = new Polyworks.Model(params);
		// trace('Collection['+params.name+']/constructor');
		// trace(params);
	}
	
	Collection.prototype.begin = function() {
		trace('Collection['+this.model.name+']/begin');
		trace(this);
		var game = PolyworksGame.phaser;
		var collection = [];
		var nameIndex = {};
		var children = this.model.attrs;
		var child;
		var params;

		for(var i = 0; i < children.length; i++) {
			params = children[i];
			params.game = game;
			params.ancestor = this;

			trace('\tchildren['+children[i].name+'].cl = ' + params.cl);
			trace(params);

			child = new Polyworks[params.cl](params);
			child.begin();

			collection.push(child);
			nameIndex[children[i].name] = i;
		}

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
		// for(var i = 0; i < collection.length; i++) {
		// 	if(collection[i].destroy) {
		// 		collection[i].destroy();
		// 	}
		// }
		while(collection.length > 0) {
			collection.pop();
		}
	};
	
	return Collection;
})();