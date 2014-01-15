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
		var collection = [];
		var nameIndex = {};
		var children = this.model.attrs;
		var child;
		var params;

		for(var i = 0; i < children.length; i++) {
			params = children[i];
			trace('\tchildren['+children[i].name+'].cl = ' + params.cl);
			params.game = game;
			params.ancestor = this;
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
	
	Collection.prototype.removeAll = function() {
		for(var key in this.model.collection) {
			if(this.model.collection[key].destroy) {
				this.model.collection[key].destroy()
			}
		}
		this.destroy();
	};
	
	Collection.prototype.destroy = function() {
		while(this.model.collection.length > 0) {
			this.model.collection.pop();
		}
	};
	
	return Collection;
})();