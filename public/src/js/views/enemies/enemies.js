var Enemies = (function() {
	
	function Enemies(params) {
		// trace('Enemies/constructor');
		this.collection = {};
		this.killed = 0;
		this.count = 0;
		var enemy;
		for(var key in params) {
			params[key].holder = this;
			params[key].id = key;
			switch(params[key].type) {
				case EnemyTypes.ANIMATED:
					enemy = new AnimatedEnemy(params[key]);
				break;
				
				case EnemyTypes.SPRITE:
					enemy = new SpriteEnemy(params[key]);
				break;
				
				case EnemyTypes.MOVING_SPRITE:
					enemy = new MovingSpriteEnemy(params[key]);
				break;
				
				default: 
					trace('WARNING, enemy['+key+'].type = ' + params[key].type);
					enemy = new Enemy(params[key]);
				break;
			}
			this.collection[key] = enemy;
			this.count++;
		}
		// trace('\tend of Enemies constructor, collection = ');
		// trace(this.collection);
	}

	Enemies.prototype.setStage = function(stage) {
		for(var key in this.collection) {
			this.collection[key].setStage(stage);
		}
	};
	
	Enemies.prototype.update = function(params) {
		for(var key in this.collection) {
			this.collection[key].update(params);
		}
	};
	
	Enemies.prototype.moveByVelocity = function(velX, velY) {
		// trace('Enemies/moveByVelocity');
		for(var key in this.collection) {
			this.collection[key].moveByVelocity(velX, velY);
		}
	};
	
	Enemies.prototype.remove = function() {
		for(var key in this.collection) {
			this.collection[key].remove();
		}
	};
	
	Enemies.prototype.enemyDied = function(id) {
		trace('Enemies/enemyDied, id = ' + id);
		this.killed++;
		delete this.collection[id];
	};
	
	Enemies.prototype.getStats = function() {
		var stats = {
			killed: this.killed,
			total: this.count
		};
		return stats;
	};
	
	return Enemies;
})();