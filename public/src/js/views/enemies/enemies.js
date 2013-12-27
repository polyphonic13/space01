var Enemies = (function() {
	
	function Enemies(params) {
		trace('Enemies/constructor');
		// this.collection = [];
		// for(var i = 0; i < params.length; i++) {
		// 	this.collection.push(new Enemy(params[i]));
		// }
		this.collection = {};
		for(var key in params) {
			this.collection[key] = new Enemy(params[key], key);
		}
		trace('\tend of Enemies constructor, collection = ');
		trace(this.collection);
	}

	Enemies.prototype.setParent = function(stage) {
		// for(var i = 0; i < this.collection.length; i++) {
		// 	this.collection[i].setParent(stage);
		// }
		for(var key in this.collection) {
			this.collection[key].setParent(stage);
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
	
	
	return Enemies;
})();