Polyworks.Sprite = (function() {
	var _this;

	function Sprite(params) {
		_this = this;
		this.model = new Polyworks.Model(params);
		trace('Sprite['+this.model.name+']/constructor, this = ');
		trace(this);
		trace(params);
		var attrs = this.model.attrs;
		Phaser.Sprite.call(this, params.game, attrs.x, attrs.y, attrs.img);
	}
	
	Sprite.prototype = Object.create(Phaser.Sprite.prototype);
	Sprite.prototype.constructor = Polyworks.Sprite;

	Sprite.prototype.begin = function() {
		trace('Sprite['+this.model.name+']/begin, this = ');
		trace(this);

		var attrs = this.model.attrs;
		if(attrs.width) {
			this.width = attrs.width;
		}
		if(attrs.height) {
			this.height = attrs.height;
		}
		var scale = attrs.scale
		if(scale) {
			this.scale.setTo(scale[0], scale[1]);
		}
		if(attrs.fixedToCamera) {
			 this.fixedToCamera = true;
		}
		if(attrs.physics) {
			this.beginPhysics(attrs.physics, sprite);
		}
	};

	Sprite.prototype.beginPhysics = function(physics, sprite) {
		// trace('Sprite['+this.model.name+']/beginPhysics');
		for(var key in physics) {
			// trace(key + ' = ' + physics[key]);
			this.body[key] = physics[key];
		}
		if(!physics.gravity && !physics.immovable) {
			this.body.gravity.y = world.gravity;
		}
	};

	Sprite.prototype.checkTerrainCollision = function(terrain) {
		PolyworksGame.phaser.physics.collide(this, terrain);
	};
	
	// Sprite.prototype.move = function(params) {
	// 	if(this.model.movement) {
	// 		Utils.moveView(this.sprite, this.model.movement, params);
	// 	}
	// };
	
	return Sprite;
})();

