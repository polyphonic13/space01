// collection of Phaser group objects
Polyworks.GroupCollection = (function() {
	Utils.inherits(GroupCollection, Polyworks.Collection);
	
	function GroupCollection(params, id) {
		GroupCollection._super.constructor.call(this, params, id);
		this.group = Polyworks.Game.phaser.add.group();
	}
	
	GroupCollection.prototype.addView = function(params, itemClass, idx) {
		params.parentType = 'group';
		params.group = this.group;
		return new Polyworks[itemClass](params, idx);
	};
	
	return GroupCollection;
})();