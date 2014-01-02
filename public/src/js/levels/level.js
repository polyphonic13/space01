 var Level = (function() {
	
	function Level(params) {
		this.completed = false;
		
		// BACKGROUND
		this.levelLayer = new BackgroundLayer(params.background);
		this.levelLayer.setStage(params.stage);

		// GROUND
		this.terrain = new TerrainLayer(params.terrain);
		this.terrain.setStage(params.stage);

		// ENEMIES
		this.enemies = new Enemies(params.enemies);
		this.enemies.setStage(params.stage);

		// BONUSES
		this.bonuses = new Bonuses(params.bonuses);
		this.bonuses.setStage(params.stage);

	}
	
	Level.prototype.moveByVelocity = function(velX, velY) {
		
	};
	
	return Level;
})();