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
			level = new Level(params[0]);
			this.collection.push(level);
		}
	};
	
	return LevelManager;
})();