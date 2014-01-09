Polyworks.SpriteView = (function() {
	Polyworks.Utils.inherits(SpriteView, Polyworks.Base);
	
	var _this;
	function SpriteView(params, id) {
		_this = this;
		SpriteView._super.constructor.call(this, params, id);
	}
	
	SpriteView.prototype.init = function() {
		var start = _this.model.start;
		var sprite = Polyworks.Utils.addSprite(_this.model);
		sprite.name = _this.model.img + '-' + _this.id;
		sprite.idx = _this.id;
		_this.sprite = sprite;
		if(_this.model.physics) {
			_this.initPhysics(_this.model.physics, _this.sprite);
		}
	};

	SpriteView.prototype.initPhysics = function(physics, sprite) {
		trace('SpriteView/initPhysics, physics = ');
		trace(physics);
		// trace('sprite = ');
		// trace(sprite);
		for(var key in physics) {
			sprite.body[key] = physics[key];
		}
		if(!physics.gravity) {
			sprite.body.gravity.y = config.world.gravity;
		}
		trace('phyisics set to ' + sprite.body);
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