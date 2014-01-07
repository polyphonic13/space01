var SpriteView = (function() {
	Utils.inherits(SpriteView, Base);
	
	function SpriteView(params, group, id) {
		SpriteView._super.constructor.call(this, params, group, id);
		this.init();
	}
	
	SpriteView.prototype.init = function() {
		var sprite = game.add.sprite(_this.model.x, _this.model.y, _this.model.type);
		sprite.name = _this.model.type + '-' + _this.id;
		sprite.idx = _this.id;
		this.sprite = sprite;
	};

	return SpriteView;
})();