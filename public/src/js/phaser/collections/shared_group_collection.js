Polyworks.SharedGroupCollection = (function() {
	Polyworks.Utils.inherits(SharedGroupCollection, Polyworks.GroupCollection);
	function SharedGroupCollection(params) {
		SharedGroupCollection._super.constructor.call(this, params);
		// trace('SharedGroupCollection['+this.model.name+']/constructor');
	}
	
	SharedGroupCollection.prototype.begin = function() {
		trace('SharedGroupCollection['+this.model.name+']/begin');
		var sharedGroups = PolyworksGame.get('sharedGroups');
		this.model.attrs = sharedGroups[this.model.type];
		trace('\tsharedGroups = ', sharedGroups, '\tmodel = ', this.model);
		SharedGroupCollection._super.begin.call(this);
		trace('\tpost super call, model.visible = ' + this.model.visible);
		// if(this.model.visible) {
			this.group.visible = this.model.visible;
		// }
	};
	
	return SharedGroupCollection;
})();