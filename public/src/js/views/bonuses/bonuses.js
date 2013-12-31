var Bonuses = (function() {
	
	function Bonuses(params) {
		// trace('Bonuses/constructor');
		this.collection = {};
		this.collected = 0;
		this.count = 0;
		var bonus;
		for(var key in params) {
			bonus = new Bonus(params[key], key, this);
			this.collection[key] = bonus;
			this.count++;
		}
		trace('\tend of Bonuses constructor, collection = ');
		trace(this.collection);
	}

	Bonuses.prototype.setStage = function(stage) {
		for(var key in this.collection) {
			this.collection[key].setStage(stage);
		}
	};
	
	Bonuses.prototype.moveByVelocity = function(velX, velY) {
		// trace('Bonuses/moveByVelocity');
		for(var key in this.collection) {
			this.collection[key].moveByVelocity(velX, velY);
		}
	};
	
	Bonuses.prototype.remove = function() {
		for(var key in this.collection) {
			this.collection[key].remove();
		}
	};
	
	Bonuses.prototype.bonusCollected = function(id) {
		trace('Bonuses/bonusCollected, id = ' + id);
		this.collected++;
		delete this.collection[id];
	};
	
	Bonuses.prototype.getStats = function() {
		var stats = {
			collected: this.collected,
			total: this.count
		};
		return stats;
	};
	
	return Bonuses;
})();