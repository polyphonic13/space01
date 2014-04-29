Polyworks.GroupEnemy = (function() {
	Polyworks.Utils.inherits(GroupEnemy, Polyworks.PhysicalGroupCollection);
	
	function GroupEnemy(params) {
		GroupEnemy._super.constructor.call(this, params);
	}
	
	GroupEnemy.prototype.begin = function() {
		trace('GroupEnemy['+this.model.name+']/begin');
		GroupEnemy._super.begin.call(this);
	};
	
	return GroupEnemy;
})();