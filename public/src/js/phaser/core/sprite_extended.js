Polyworks.MovableSprite = (function() {
	
	function MovableSprite(game, x, y, params) {
		Phaser.Sprite.call(this, game, x, y, params.img);
	}
	
	MovableSprite.prototype.init = function() {
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

	MovableSprite.prototype.initPhysics = function(physics, sprite) {
		// trace('Sprite['+this.id+']/initPhysics');
		for(var key in physics) {
			// trace(key + ' = ' + physics[key]);
			sprite.body[key] = physics[key];
		}
		if(!physics.gravity && !physics.immovable) {
			sprite.body.gravity.y = world.gravity;
		}
	};

	MovableSprite.prototype = Object.create(Phaser.Sprite.prototype);
	MovableSprite.prototype.constructor = Polyworks.Sprite;

	MovableSprite.prototype.checkTerrainCollision = function(terrain) {
		PolyworksGame.phaser.physics.collide(this.sprite, terrain);
	};
	
	MovableSprite.prototype.move = function(params) {
		if(this.model.movement) {
			Utils.moveView(this.sprite, this.model.movement, params);
		}
	};
	
	return MovableSprite;
})();

