// collection of Phaser group objects
Polyworks.GroupCollection = (function() {
	Utils.inherits(GroupCollection, Polyworks.Collection);
	
	function GroupCollection(params, id, groupContext) {
		GroupCollection._super.constructor.call(this, params, id);
		if(groupContext === 'null') {
			trace('GroupCollection, adding group with context of null');
			this.group = Polyworks.Game.phaser.add.group(null);
		} else {
			this.group = Polyworks.Game.phaser.add.group();
		}
	}
	
	GroupCollection.prototype.addView = function(params, itemClass, idx) {
		params.parentType = 'group';
		params.group = this.group;
		return new Polyworks[itemClass](params, idx);
	};
	
	return GroupCollection;
})();