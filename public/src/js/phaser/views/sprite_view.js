var SpriteView = (function() {
	Utils.inherits(SpriteView, Base);
	
	function SpriteView(params, group, id) {
		SpriteView._super.constructor.call(this, params, group, id);
		this.init();
	}
	
	SpriteView.prototype.init = function() {
		var sprite = game.add.sprite(this.model.x, this.model.y, this.model.type);
		this.sprite = sprite;
	};

	return SpriteView;
})();