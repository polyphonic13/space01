var Enemies = (function() {
	
	function Enemies(params) {
		trace('Enemies/constructor, length = ' + params.length);
		this.collection = [];
		for(var i = 0; i < params.length; i++) {
			this.collection.push(new Enemy(params[i]));
		}
	}

	Enemies.prototype.setParent = function(stage) {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].setParent(stage);
		}
	};
	
	Enemies.prototype.moveX = function() {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].moveX();
		}
	};
	
	Enemies.prototype.moveY = function() {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].moveY();
		}
	};
	
	Enemies.prototype.moveByVelocity = function(velX, velY) {
		// trace('Enemies/moveByVelocity');
		for(var i = 0; i < this.collection.length; i++) {
			// trace('\tabout to move ' + this.collection[i].id);
			this.collection[i].moveByVelocity(velX, velY);
		}
	};
	
	Enemies.prototype.remove = function() {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].remove();
		}
	};
	
	
	return Enemies;
})();