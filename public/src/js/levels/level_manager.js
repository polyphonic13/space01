var LevelManager = (function() {
	
	function LevelManager(params) {
		this.currentLevel = 0;
		this.collection = [];
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
	
	return LevelManager;
})();