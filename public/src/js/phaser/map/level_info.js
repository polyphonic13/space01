Polyworks.LevelInfo = (function() {
	Polyworks.Utils.inherits(LevelInfo, Polyworks.GroupCollection);
	
	function LevelInfo(params) {
		LevelInfo._super.constructor.call(this, params);
	}
	
	LevelInfo.prototype.begin = function() {
		LevelInfo._super.begin.call(this);
		this.hide();
	};
	
	return LevelInfo;
})();