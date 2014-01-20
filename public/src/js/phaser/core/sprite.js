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

		this.beginGetterSetters();

		var attrs = this.model.attrs;
		if(attrs.width) {
			// trace('setting ' + this.model.name + ' width to ' + attrs.width);
			this.width = attrs.width;
		}
		if(attrs.height) {
			// trace('setting ' + this.model.name + ' height to ' + attrs.height);
			this.height = attrs.height;
		}
		var scale = attrs.scale;
		if(scale) {
			this.scale.setTo(scale[0], scale[1]);
		}
		var setSize = attrs.setSize;
		if(setSize) {
			// trace('Sprite['+this.model.name+'] setSize = ' + setSize.length);
			// trace(setSize);
			if(setSize.length === 4) {
				// trace('\tsetting w, h, x, y size');
				this.body.setSize(setSize[0], setSize[1], setSize[2], setSize[3]);
			} else {
				// trace('\tsetting w, h size');
				this.body.setSize(setSize[0], setSize[1]);
			}
			
			// if(setSize.x && setSize.y) {
			// 	trace('setting ['+this.model.name+'] size to: ');
			// 	trace(setSize);
			// 	this.body.setSize(setSize.width, setSize.height, setSize.x, setSize.y);
			// } else {
			// 	this.body.setSize(setSize.width, setSize.height);
			// }
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

	Sprite.prototype.beginGetterSetters = function() {
		this.__defineGetter__('active', function() {
			return this.model.active;
		});
		this.__defineSetter__('active', function(val) {
			this.model.active = val;
		});
		this.__defineGetter__('velocityX', function() {
			return this.body.velocity.x;
		});
		this.__defineSetter__('velocityX', function(val) {
			trace('Sprite['+this.model.name+']/set velocityX, val = ' + val);
			trace(this);
			this.body.velocity.x = val;
		});
		this.__defineGetter__('velocityY', function() {
			return this.body.velocity.y;
		});
		this.__defineSetter__('velocityY', function(val) {
			this.body.velocity.y = val;
		});
		this.__defineGetter__('frame', function() {
			return this.animations.frame;
		});
		this.__defineSetter__('frame', function(val) {
			// trace('Sprite['+this.model.name+']/set frame, val = ' + val);
			this.animations.frame = val;
		});
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
		var movement = this.model.attrs.movement;
		if(movement) {
			Utils.moveView(this, movement, params);
		}
	};

	return Sprite;
})();

