var LevelManager = (function() {
	
	var _currentLevel = 0;
	
	function LevelManager(params) {
		this.currentLevel = 0;
		this.collection = [];

		this.__defineGetter__('currentLevel', function() {
			return _currentLevel;
		});
	}
	
	LevelManager.prototype.setStage = function(stage) {
		this.stage = stage;
	};
	
	LevelManager.prototype.init = function(params) {
		var level;
		for(var i = 0; i < params.length; i++) {
			params[i].id = i;
			params[i].stage = this.stage;
			level = new Level(params[i]);
			this.collection.push(level);
		}
	};
	
	LevelManager.prototype.getLevel = function(level) {
		return this.collection[level];
	};
	
	LevelManager.prototype.getCurrentLevel = function() {
		return this.collection[_currentLevel];
	};
	
	return LevelManager;
})();