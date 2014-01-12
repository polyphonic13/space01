 var Level = (function() {
	
	var _this;
	
	function Level(params) {
		_this = this;
		// trace('Level['+params.id+']/constructor, params = ');
		// trace(params);
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

		this.__defineGetter__('points', function() {
			return this.model.points;
		});

		this.__defineGetter__('perfectPoints', function() {
			return this.model.perfectPoints;
		});

		this.__defineGetter__('minX', function() {
			return this.model.minX;
		});

		this.__defineGetter__('maxX', function() {
			return this.model.maxX;
		});

		this.__defineGetter__('cleared', function() {
			return this.model.cleared;
		});

		this.__defineSetter__('cleared', function(val) {
			this.model.cleared = val;
		});
	}

	Level.prototype.move = function(x, y) {
		
	};
	
	Level.prototype.moveByVelocity = function(velX, velY) {

	};
	
	return Level;
})();