var ScrollingLayer = (function() {
	Utils.inherits(ScrollingLayer, ImageLayer);
	
	function ScrollingLayer(params) {
		ScrollingLayer._super.constructor.call(this, params);
	}
	
	ScrollingLayer.prototype.moveX = function() {
		this.model.layer.move(this.model.speed, 0);
	};
	
	ScrollingLayer.prototype.moveY = function() {
		this.model.layer.move(0, this.model.speed);
	};
	
	ScrollingLayer.prototype.moveByVelocity = function(velX, velY) {
		this.model.layer.move((velX * this.model.speed), (velY * this.model.speed));
	};
	
	return ScrollingLayer;
})();