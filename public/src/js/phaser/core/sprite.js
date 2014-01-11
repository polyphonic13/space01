Polyworks.Sprite = (function() {
	Utils.inherits(Sprite, Polyworks.Base);
	
	var _this;
	function Sprite(params, id) {
		_this = this;
		Sprite._super.constructor.call(this, params, id);
	}
	
	Sprite.prototype.init = function() {
		var start = _this.model.start;
		var sprite = Utils.addSprite(_this.model);

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
		if(_this.model.fixedToCamera) {
			 sprite.fixedToCamera = true;
		}
		if(_this.model.physics) {
			_this.initPhysics(_this.model.physics, sprite);
		}

		_this.sprite = sprite;
	};

	Sprite.prototype.initPhysics = function(physics, sprite) {
		// trace('Sprite['+this.id+']/initPhysics');
		for(var key in physics) {
			// trace(key + ' = ' + physics[key]);
			sprite.body[key] = physics[key];
		}
		if(!physics.gravity && !physics.immovable) {
			sprite.body.gravity.y = world.gravity;
		}
	};
	
	Sprite.prototype.checkTerrainCollision = function(terrain) {
		Polyworks.Game.phaser.physics.collide(this.sprite, terrain);
	};
	
	Sprite.prototype.move = function(params) {
		if(this.model.movement) {
			Utils.moveView(this.sprite, this.model.movement, params);
		}
	};
	
	Sprite.prototype.remove = function() {
		if(this.sprite.remove) {
			this.sprite.remove();
		}
		if(this.sprite.kill) {
			this.sprite.kill();
		}
	};
	
	Sprite.prototype.kill = function() {
		trace('Sprite['+this.id+']/kill');
		this.sprite.kill();
	};
	
	Sprite.prototype.destroy = function() {
		trace('Sprite['+this.id+']/destroy');
		trace(this.sprite);
		this.sprite.kill();
		this.sprite.destroy();
	};
	
	return Sprite;
})();