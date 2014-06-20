PWG.SharedGroupCollection = (function() {
	PWG.Utils.inherits(SharedGroupCollection, PWG.GroupCollection);

	function SharedGroupCollection(params) {
		SharedGroupCollection._super.constructor.call(this, params);
	}
	
	SharedGroupCollection.prototype.begin = function() {
		// trace('SharedGroupCollection['+this.model.name+']/begin');
		var sharedGroups = PWGGame.get('sharedGroups');
		this.model.attrs = sharedGroups[this.model.type];
		// trace('\tsharedGroups = ', sharedGroups, '\tmodel = ', this.model);
		SharedGroupCollection._super.begin.call(this);
		// trace('\tpost super call, model.visible = ' + this.model.visible);

		// this.group.visible = this.model.visible;
	};

	return SharedGroupCollection;
})();