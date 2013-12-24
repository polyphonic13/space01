var ScrollingLayers = (function() {
	
	function ScrollingLayers(params) {
		this.collection = [];
		for(var i = 0; i < params.length; i++) {
			this.collection.push(new ScrollingLayer(params[i]));
		}
	}

	ScrollingLayers.prototype.setStage = function(stage) {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].setStage(stage);
		}
	};
	
	ScrollingLayers.prototype.moveX = function() {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].moveX();
		}
	};
	
	ScrollingLayers.prototype.moveY = function() {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].moveY();
		}
	};
	
	ScrollingLayers.prototype.moveByVelocity = function(velX, velY) {
		// trace('ScrollingLayers/moveByVelocity');
		for(var i = 0; i < this.collection.length; i++) {
			// trace('\tabout to move ' + this.collection[i].id);
			this.collection[i].moveByVelocity(velX, velY);
		}
	};
	
	return ScrollingLayers;
})();