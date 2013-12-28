var Enemies = (function() {
	
	function Enemies(params) {
		trace('Enemies/constructor');
		// this.collection = [];
		// for(var i = 0; i < params.length; i++) {
		// 	this.collection.push(new Enemy(params[i]));
		// }
		this.collection = {};
		var enemy;
		for(var key in params) {
			enemy = new Enemy(params[key], key, this);
			this.collection[key] = enemy;
		}
		trace('\tend of Enemies constructor, collection = ');
		trace(this.collection);
	}

	Enemies.prototype.setStage = function(stage) {
		// for(var i = 0; i < this.collection.length; i++) {
		// 	this.collection[i].setStage(stage);
		// }
		for(var key in this.collection) {
			this.collection[key].setStage(stage);
		}
	};
	
	Enemies.prototype.moveByVelocity = function(velX, velY) {
		// trace('Enemies/moveByVelocity');
		// for(var i = 0; i < this.collection.length; i++) {
		// 	// trace('\tabout to move ' + this.collection[i].id);
		// 	this.collection[i].moveByVelocity(velX, velY);
		// }
		for(var key in this.collection) {
			this.collection[key].moveByVelocity(velX, velY);
		}
	};
	
	Enemies.prototype.remove = function() {
		// for(var i = 0; i < this.collection.length; i++) {
		// 	this.collection[i].remove();
		// }
		for(var key in this.collection) {
			this.collection[key].remove();
		}
	};
	
	Enemies.prototype.enemyDied = function(id) {
		trace('Enemies/enemyDied, id = ' + id);
		delete this.collection[id];
	};
	
	return Enemies;
})();