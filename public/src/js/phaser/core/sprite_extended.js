Polyworks.Sprite = (function() {
	var _this;

	function Sprite(game, x, y, params) {
		_this = this;
		this.model = new Polyworks.Model(params);
		trace('Sprite['+this.model.name+']/constructor, model = ');
		trace(this.model);
		trace('\tgame =');
		trace(game);
		Phaser.Sprite.call(this, game, x, y, params.img);
	}
	
	Sprite.prototype = Object.create(Phaser.Sprite.prototype);
	Sprite.prototype.constructor = Polyworks.Sprite;

	Sprite.prototype.init = function() {
		trace('Sprite['+this.model.name+']/init, model = ');
		trace(this.model);
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
			this.initPhysics(this.model.physics, sprite);
		}
	};

	Sprite.prototype.initPhysics = function(physics, sprite) {
		// trace('Sprite['+this.model.name+']/initPhysics');
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

