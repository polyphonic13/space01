PWG.LevelInfo = (function() {
	PWG.Utils.inherits(LevelInfo, PWG.GroupCollection);
	
	function LevelInfo(params) {
		LevelInfo._super.constructor.call(this, params);
	}
	
	LevelInfo.prototype.begin = function() {
		// trace('LevelInfo['+this.model.name+']/begin');
		LevelInfo._super.begin.call(this);
		this.hide();
	};
	
	return LevelInfo;
})();