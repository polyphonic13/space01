var SpriteView = (function() {
	Utils.inherits(SpriteView, Base);
	
	var _this;
	function SpriteView(params, group, id) {
		_this = this;
		SpriteView._super.constructor.call(this, params, id);
	}
	
	SpriteView.prototype.init = function() {
		var start = _this.model.start;
		trace('SpriteView/init, type = ' + _this.model.type + '\n\tx/y = '+ start.x + '/' + start.y);
		var sprite = game.add.sprite(start.x, start.y, _this.model.type);
		sprite.name = _this.model.type + '-' + _this.id;
		sprite.idx = _this.id;
		this.sprite = sprite;
	};

	return SpriteView;
})();