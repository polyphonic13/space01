Polyworks.GroupEnemy = (function() {
	Polyworks.Utils.inherits(GroupEnemy, Polyworks.Enemies);
	
	function GroupEnemy(params) {
		GroupEnemy._super.constructor.call(this, params);
	}
	
	GroupEnemy.prototype.pwUpdate = function(params) {
		trace('GroupEnemy['+this.model.name+']/pwUpdate');
	};
	
	return GroupEnemy;
})();