Polyworks.LevelIcon = (function() {
	Polyworks.Utils.inherits(LevelIcon, Polyworks.Collection);
	
	function LevelIcon(params) {
		LevelIcon._super.constructor.call(this, params);
	}
	
	LevelIcon.prototype.begin = function() {
		trace('LevelIcon['+this.model.name+']/begin', this.model);
	};
	
	return LevelIcon;
})();