Polyworks.SpriteView = (function() {
	Polyworks.Utils.inherits(SpriteView, Polyworks.Base);
	
	var _this;
	function SpriteView(params, id) {
		_this = this;
		SpriteView._super.constructor.call(this, params, id);
	}
	
	SpriteView.prototype.init = function() {
		var start = _this.model.start;
		trace('SpriteView/init, type = ' + _this.model.type + '\n\tx/y = '+ start.x + '/' + start.y);
		// var sprite = game.add.sprite(start.x, start.y, _this.model.type);
		// var sprite = _this.model.group.create(start.x, start.y, _this.model.type);
		var sprite = Polyworks.Utils.addSprite(_this.model);
		sprite.name = _this.model.type + '-' + _this.id;
		sprite.idx = _this.id;
		this.sprite = sprite;
	};

	return SpriteView;
})();