PWG.Collection = (function() {
	
	function Collection(params) {
		this.model = new PWG.Model(params);
		// trace('Collection['+params.name+']/constructor', params);
	}
	
	Collection.prototype.begin = function() {
		// trace('Collection['+this.model.name+']/begin', this);
		var game = PolyworksGame.phaser;
		var collection = [];
		var nameIndex = {};
		var children = this.model.attrs;
		var child;
		var params;
		// trace('children.length = ' + children.length);
		PWG.Utils.each(children,
			function(c, i) {
				// trace('\t\ti = ' + i + ', c = ', c);
				if(typeof(c) !== 'undefined') {
					c.game = game;
					c.ancestor = this;
					c.idx = i;

					// trace('\tc['+c.name+'] cl = ' + c.cl);
					child = new PWG[c.cl](c);
					child.begin();

					collection.push(child);
					nameIndex[c.name] = i;
				}
			},
			this
		);

		this.model.set({ collection: collection, nameIndex: nameIndex });
	};
	
	Collection.prototype.getLength = function() {
		return this.model.collection.length;
	};
	
	Collection.prototype.setChildrenExists = function(exists) {
		// trace('Collection['+this.model.name+']/setChildrenExists, exists = ' + exists);
		PWG.Utils.each(this.model.collection,
			function(child) {
				if(child.setChildrenExists) {
					// trace('\tcalling setChildExists on: '+child.model.name);
					child.setChildrenExists(exists);
				} else {
					// trace('\tchild['+child.model.name+'].exists = ' + child.exists);
					child.exists = exists;
				}
			},
			this
		);
	};
	
	Collection.prototype.getChildByName = function(name) {
		// trace('Collection/getChildByName, name = ' + name + 'model = ', this.model);
		var child; 

		var collection = this.model.collection;
		var length = collection.length;
		for(var i = 0; i < length; i++) {
			if(collection[i].model.name === name) {
				child = collection[i];
				break;
			}
		}
		return child;
	};
	
	Collection.prototype.removeChild = function(name) {
		// trace('Collection/removeChild, name = ' + name + ', pre splice collection: ');
		trace(this.model.collection);

		var collection = this.model.collection;
		var length = collection.length;
		for(var i = 0; i < length; i++) {
			if(collection[i].model.name === name) {
				// trace('\tfound name at index: ' + i);
				this.model.collection.splice(i, 1);
				break;
			}
		}

		// trace('\tpost splice collection: ');
		// trace(this.model.collection);
	};
	
	Collection.prototype.removeAll = function() {
		this.destroy();
	};
	
	Collection.prototype.destroy = function() {
		var collection = this.model.collection;
		// trace('Collection['+this.model.name+']/destroy, collection = ', collection);
		PWG.Utils.each(collection,
			function(child) {
				// trace('\tattempting to call destroy on child['+child.model.name+']');
				if(child.destroy) {
					child.destroy();
				}
			},
			this
		);
		// trace('\tthis.model.name children destroyed, collection = ', collection);
		if(collection) {
			while(collection.length > 0) {
				collection.pop();
			}
		}
		// trace('\tpost pop, collection = ', collection);
		this.destroyed = true;
	};
	
	return Collection;
})();