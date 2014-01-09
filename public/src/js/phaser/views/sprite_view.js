Polyworks.SpriteView = (function() {
	Polyworks.Utils.inherits(SpriteView, Polyworks.Base);
	
	var _this;
	function SpriteView(params, id) {
		_this = this;
		SpriteView._super.constructor.call(this, params, id);
	}
	
	SpriteView.prototype.init = function() {
		var start = _this.model.start;
		// trace('SpriteView/init, img = ' + _this.model.img + '\n\tx/y = '+ start.x + '/' + start.y);
		var sprite = Polyworks.Utils.addSprite(_this.model);
		sprite.name = _this.model.img + '-' + _this.id;
		sprite.idx = _this.id;
		_this.sprite = sprite;

		if(_this.model.physics) {
			_this.initPhysics(_this.model.physics);
		}
	};

	SpriteView.prototype.initPhysics = function(physics) {
		for(var key in physics) {
			this.sprite.body[key] = physics[key];
		}
		this.sprite.body.gravity = (this.sprite.body.gravity || config.world.gravity);
	};
	
	SpriteView.prototype.checkTerrainCollision = function(terrain) {
		game.physics.collide(this.sprite, terrain);
	};
	
	SpriteView.prototype.move = function(params) {
		if(this.model.movement) {
			Polyworks.Utils.moveView(this.sprite, this.model.movement, params);
		}
	};
	
	SpriteView.prototype.remove = function() {
		this.sprite.remove();
	};
	
	return SpriteView;
})();