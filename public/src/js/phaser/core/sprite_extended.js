Polyworks.Sprite = (function() {
	var _this;

	function Sprite(game, params) {
		_this = this;
		this.model = new Polyworks.Model(params);
		// trace('Sprite['+this.model.name+']/constructor, this = ');
		// trace(this);
		Phaser.Sprite.call(this, game, params.x, params.y, params.img);
	}
	
	Sprite.prototype = Object.create(Phaser.Sprite.prototype);
	Sprite.prototype.constructor = Polyworks.Sprite;

	Sprite.prototype.begin = function() {
		trace('Sprite['+this.model.name+']/begin, this = ');
		trace(this);
		if(this.model.width) {
			this.width = this.model.width;
		}
		if(this.model.height) {
			this.height = this.model.height;
		}
		var scale = this.model.scale
		if(scale) {
			this.scale.setTo(scale[0], scale[1]);
		}
		if(this.model.fixedToCamera) {
			 this.fixedToCamera = true;
		}
		if(this.model.physics) {
			this.beginPhysics(this.model.physics, sprite);
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

