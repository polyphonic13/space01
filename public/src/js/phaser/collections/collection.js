Polyworks.Collection = (function() {
	
	function Collection(params) {
		this.model = new Polyworks.Model(params);
		trace('Collection['+params.name+']/constructor');
		trace(params);
	}
	
	Collection.prototype.begin = function() {
		trace('Collection['+this.model.name+']/begin');
		trace(this);
		var collection = [];
		var nameIndex = {};
		var child;
		var params;

		for(var i = 0; i < children.length; i++) {
			params = children[i];
			trace('\tchildren['+children[i].name+'].cl = ' + params.cl);
			params.game = game;
			trace(params);

			child = new Polyworks[params.cl](params);
			child.begin();

			// collection[children[i].name] = child;
			collection.push(child);
		}

		this.model.set({ collection: collection, nameIndex: nameIndex });
	};
	
	Collection.prototype.getItemByName = function(name) {
		return this.model.collection[this.model.nameIndex[name]];
	};
	
	return Collection;
})();