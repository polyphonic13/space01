// collection of Phaser group objects
Polyworks.GroupCollection = (function() {
	Polyworks.Utils.inherits(GroupCollection, Polyworks.Collection);
	
	function GroupCollection(params, groupContext) {
		// trace('GroupCollection['+params.name+']/constructor, groupContext = ' + groupContext);
		GroupCollection._super.constructor.call(this, params);
		// if(groupContext === 'null') {
		// 	// trace('GroupCollection['+params.name+'], adding group with context of null');
		// 	this.group = PolyworksGame.phaser.add.group(null);
		// } else {
		// 	this.group = PolyworksGame.phaser.add.group();
		// }
	}
	
	GroupCollection.prototype.begin = function() {
		// trace('GroupCollection['+this.model.name+']/begin, this = ', this);
		GroupCollection._super.begin.call(this);

		var game = PolyworksGame.phaser;
		var collection = this.model.collection;
		var group;

		var addTo = this.model.addTo;

		if(addTo) {
			if(addTo === 'null') {
				group = game.add.group(null);
			} else {
				group = game.add.group();
				// retrieve parent group from model based on addTo value
				// trace('----------------- finding parent group: ' + addTo + ' on ', this.model);
				this.model[addTo].add(group._container);
			}
		} else {
			group = game.add.group();
		}

		Polyworks.Utils.each(collection,
			function(c) {
				// trace('\t\tc = ', c);
				group.add(c);
			},
			this
		);

		this.group = group;

		// trace('group now = ');
		// trace(this.group);
	};

	GroupCollection.prototype.hide = function() {
		this.group.visible = false;
	};
	
	GroupCollection.prototype.show = function() {
		this.group.visible = true;
	};
	
	GroupCollection.prototype.remove = function(child) {
		this.group.remove(child);
		delete this.model.collection[child];
	};
	
	GroupCollection.prototype.removeAll = function() {
		// trace('GroupCollection['+this.model.name+']/remove, collection = ');
		// trace(this.collection);
		this.group.removeAll();
		while(this.model.collection.length > 0) {
			this.model.collection.pop();
		};
	};

	GroupCollection.prototype.destroy = function() {
		// trace('GroupCollection['+this.model.name+']/destroy');
		this.group.destroy(true);
		GroupCollection._super.destroy.call(this);
	};
	
	return GroupCollection;
})();