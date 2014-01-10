Polyworks.Rectangle = (function() {
	
	function Rectangle(params) {
		trace('Rectangle, params = ');
		trace(params);
		var graphics = params.game.add.graphics(params.graphics.x, params.graphics.y);
		graphics.lineStyle(params.stroke.width, params.stroke.color, params.stroke.opacity);
		graphics.beginFill(params.fill.color, params.fill.alpha);
		graphics.drawRect(params.x, params.y, params.width, params.height);
		graphics.endFill();
	}
	
	Rectangle.prototype.init = function() {

	}
	
	return Rectangle;
})();