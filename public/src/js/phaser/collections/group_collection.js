// collection of Phaser group objects
Polyworks.GroupCollection = (function() {
	Utils.inherits(GroupCollection, Polyworks.Collection);
	
	function GroupCollection(params, groupContext) {
		// trace('GroupCollection['+params.id+']/constructor, groupContext = ' + groupContext);
		GroupCollection._super.constructor.call(this, params);
		if(groupContext === 'null') {
			// trace('GroupCollection['+params.id+'], adding group with context of null');
			this.group = PolyworksGame.phaser.add.group(null);
		} else {
			this.group = PolyworksGame.phaser.add.group();
		}
	}
	
	GroupCollection.prototype.addView = function(params, itemClass) {
		trace('GroupCollection['+this.id+']/addView, itemClass = ' + itemClass);
		trace(params);
		params.parentType = 'group';
		params.group = this.group;
		return new Polyworks[itemClass](params);
	};
	
	return GroupCollection;
})();