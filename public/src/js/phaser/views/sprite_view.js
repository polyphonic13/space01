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

		if(_this.model.width) {
			sprite.width = _this.model.width;
		}
		if(_this.model.height) {
			sprite.height = _this.model.height;
		}
		var scale = _this.model.scale
		if(scale) {
			sprite.scale.setTo(scale[0], scale[1]);
		}
		if(_this.model.physics) {
			_this.initPhysics(_this.model.physics, sprite);
		}

		_this.sprite = sprite;
	};

	SpriteView.prototype.initPhysics = function(physics, sprite) {
		trace('SpriteView['+this.id+']/initPhysics');
		for(var key in physics) {
			trace(key + ' = ' + physics[key]);
			sprite.body[key] = physics[key];
		}
		if(!physics.gravity && !physics.immovable) {
			sprite.body.gravity.y = world.gravity;
		}
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