Polyworks.MovingSprite = (function() {
	Utils.inherits(MovingSprite, Polyworks.Sprite);
	
	function MovingSprite(params) {
		// params.attrs.fixedToCamera = true;
		MovingSprite._super.constructor.call(this, params);
	}
	
	MovingSprite.prototype.update = function() {
		// trace('MovingSprite['+this.model.name+']/update')
		this.move({});
	};
	
	return MovingSprite;
})();