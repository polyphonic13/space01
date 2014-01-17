Polyworks.Sprite = (function() {
	Utils.inherits(Sprite, Phaser.Sprite);

	function Sprite(params) {
		this.model = new Polyworks.Model(params);
		// trace('Sprite['+this.model.name+']/constructor, this = ');
		// trace(this);
		var attrs = this.model.attrs;
		var start = attrs.start;
		Sprite._super.constructor.call(this, params.game, start.x, start.y, attrs.img);
	}
	
	Sprite.prototype.begin = function() {
		// trace('Sprite['+this.model.name+']/begin, this = ');
		// trace(this);

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
			this.beginPhysics(attrs.physics);
		}
		if(attrs.animations) {
			this.beginAnimations(attrs.animations)
		}
	};

	Sprite.prototype.beginPhysics = function(physics) {
		// trace('\n\nSprite['+this.model.name+']/beginPhysics');
		for(var key in physics) {
			// trace(key + ' = ' + physics[key]);
			this.body[key] = physics[key];
		}
		if(!physics.gravity && !physics.immovable) {
			this.body.gravity.y = world.gravity;
		}
	};

	Sprite.prototype.checkTerrainCollision = function(terrain) {
		// trace('Sprite['+this.model.name+']/checkTerrainCollision, terrain = ');
		// trace(terrain);
		// trace(this);
		PolyworksGame.phaser.physics.collide(this, terrain);
	};
	
	Sprite.prototype.beginAnimations = function(animations) {
		for(var i = 0; i < animations.length; i++) {
			this.animations.add(animations[i].name, animations[i].keyFrames, animations[i].frameRate);
		}

		var defaultAnimation = this.model.defaultAnimation;
		if(defaultAnimation) {
			this.play();
			this.model.currentAnimation = defaultAnimation;
		} else {
			this.animations.frame = 0;
			this.model.currentAnimation = '';
		}
	};
	
	Sprite.prototype.play = function(name, frameRate, looped) {
		this.animations.play(name, frameRate, looped);
		this.model.currentAnimation = name;
	};
	
	Sprite.prototype.stop = function() {
		this.animations.stop();
		this.model.currentAnimation = '';
	};

	Sprite.prototype.move = function(params) {
		if(this.model.movement) {
			Utils.moveView(this, this.model.movement, params);
		}
	};

	return Sprite;
})();

