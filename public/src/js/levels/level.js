 var Level = (function() {
	
	var _this;
	function Level(params) {
		_this = this;
		trace('Level['+params.id+']/constructor, params = ');
		trace(params);
		this.id = params.id;
		this.completed = false;

		this.imageManager = new ImageManager(params.images, this.onImagesLoaded);
		
		// BACKGROUND
		this.backgroundLayer = new BackgroundLayer(params.background);
		this.backgroundLayer.setStage(params.stage);

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
	
	Level.prototype.onImagesLoaded = function() {
		trace('Level['+_this.id+']/onImagesLoaded');
	};
	
	return Level;
})();