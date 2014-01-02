 var Level = (function() {
	
	var _this;
	
	function Level(params) {
		_this = this;
		trace('Level['+params.id+']/constructor, params = ');
		trace(params);
		this.id = params.id;
		this.completed = false;
		this.model = params;

		this.backgroundLayer = new BackgroundLayer(this.model.background);
		this.backgroundLayer.setStage(this.model.stage);

		// GROUND
		this.terrain = new TerrainLayer(this.model.terrain);
		this.terrain.setStage(this.model.stage);

		// ENEMIES
		this.enemies = new Enemies(this.model.enemies);
		this.enemies.setStage(this.model.stage);

		// BONUSES
		this.bonuses = new Bonuses(this.model.bonuses);
		this.bonuses.setStage(this.model.stage);
	}
	
	Level.prototype.moveByVelocity = function(velX, velY) {

	};
	
	return Level;
})();