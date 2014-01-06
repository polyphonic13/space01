var GroupCollection = (function() {
	Utils.inherits(GroupCollection, Collection);
	
	function GroupCollection(params) {
		GroupCollection._super.constructor.call(this, params);
		this.group = game.add.group();
	}
	
	GroupCollection.prototype.addView = function(params, itemClass, idx) {
		return new itemClass(params, this.group, idx);
	};
	
	return GroupCollection;
})();