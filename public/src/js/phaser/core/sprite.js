PWG.Sprite = (function() {
	PWG.Utils.inherits(Sprite, Phaser.Sprite);

	function Sprite(params) {
		this.model = new PWG.Model(params);
		// trace('Sprite['+this.model.name+']/constructor, model = ', this.model);
		var attrs = this.model.attrs;
		var start = attrs.start;
		// trace('\t\t\tstart = x: ' + start.x + ', y: ' + start.y + ', img = ' + attrs.img);
		Sprite._super.constructor.call(this, params.game, start.x, start.y, attrs.img);
		this.active = true;
		// this.active = false;
		// this.alive = false;
		// this.exists = false;
	}
	
	Sprite.prototype.begin = function() {
		// trace('Sprite['+this.model.name+']/begin, this = ', this);

		var attrs = this.model.attrs;
		var phaser = attrs.phaser; 

		// set phaser.sprite specific attributes
		for(var key in phaser) {
			this[key] = phaser[key];
			if(key === 'rotation') {
				this.addBodyRotation(phaser[key]);
			}
		}

		// call phaser.sprite methods on other attributes
		// SCALE
		var scale = attrs.scale;
		if(scale) {
			this.scale.setTo(scale[0], scale[1]);
		}

		// PHYSICS
		if(attrs.physics) {
			if(attrs.physicsType) {
				PolyworksGame.phaser.physics.enable(this, attrs.physicsType);
			} else {
				// trace('------ enabling physics for: ' + this.model.name);
				PolyworksGame.phaser.physics.enable(this, Phaser.Physics.ARCADE);
			}
			this.beginPhysics(attrs.physics);
		}

		// SIZE
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
		}

		// ANIMATIONS
		if(attrs.animations) {
			this.beginAnimations(attrs.animations);
		}
	};

	Sprite.prototype.addBodyRotation = function(rot) {
		this.body.polygon.rotate(rot);
	};
	
	Sprite.prototype.beginPhysics = function(physics) {
		// trace('\n\nSprite['+this.model.name+']/beginPhysics, this = ', this, '\tphysics = ', physics);
		for(var key in physics) {
			this.body[key] = physics[key];
		}

		if(!physics.deferredGravity && !physics.immovable) {
			if(!physics.gravity) {
				this.body.gravity = PolyworksGame.get('gravity');
			}
		}
	};

	Sprite.prototype.deactivateGravity = function() {
		// trace('Sprte['+this.model.name+']/deactivateGravity');
		this.exists = false;
		this.allowGravity = false;
		this.body.gravity = 0;
	};
	
	Sprite.prototype.activateGravity = function() {
		// trace(this);
		// trace('Sprite['+this.model.name+']/activateGravity, y = ' + this.body.screenY);
		var physics = this.model.attrs.physics;
		if(physics && physics.deferredGravity) {
			var gravity = (physics.gravity) ? physics.gravity : PolyworksGame.get('gravity');
			// trace('gravity = ');
			// trace(gravity);
			this.body.gravity = gravity;
		}
		this.allowGravity = true;
		this.exists = true;
	};
	
	Sprite.prototype.checkTerrainCollision = function(terrain) {
		// trace('Sprite['+this.model.name+']/checkTerrainCollision, terrain = ');
		// trace(terrain);
		// trace(this);
		PolyworksGame.phaser.physics.arcade.collide(this, terrain);
	};
	
	Sprite.prototype.checkDynamicTerrainCollision = function(dynamicTerrain) {
		var physics = PolyworksGame.phaser.physics;
		var _this = this;

		PWG.Utils.each(dynamicTerrain,
			function(c) {
				physics.arcade.overlap(this, c, _this.onDynamicTerrainCollision, null, _this);
			},
			_this
		);
	};
	
	Sprite.prototype.onDynamicTerrainCollision = function(sprite, terrain) {
		// trace('Sprite['+this.model.name+']/onDynamicTerrainCollision, terrain = ' + terrain.model.name);
		if(terrain.collidedWithSprite) {
			// trace('Sprite['+this.model.name+']/onDynamicTerrainCollision, calling collidedWithSprite on ', terrain);
			terrain.collidedWithSprite(sprite);
		}
		var terrainY = terrain.body.y + terrain.body.height;
		var spriteOffsetY = this.body.y + (this.body.height);

		if(spriteOffsetY <= terrainY) {
			this.checkTerrainCollision(terrain);
		}
	};
	
	Sprite.prototype.beginAnimations = function(animations) {
		// trace('Sprite['+this.model.name+']/beginAnimations, animations = ', animations);
		PWG.Utils.each(animations,
			function(a, key) {
				// trace('\ta['+key+'] = ', a);
				this.animations.add(key, a.keyFrames, a.frameRate);
			},
			this
		);

		var defaultAnimation = this.model.attrs.defaultAnimation;
		// trace('------------- Sprite['+this.model.name+']/beginAnimations, defaultAnimation = ' + defaultAnimation);
		if(defaultAnimation) {
			// trace('\tgoing to be defaultAnimation: ' + defaultAnimation);
			this.play(defaultAnimation, animations[defaultAnimation].frameRate, animations[defaultAnimation].loop);
			this.model.currentAnimation = defaultAnimation;
		} else {
			// trace('\tgoing to frame 0');
			this.animations.frame = 0;
			this.model.currentAnimation = '';
		}
	};
	
	Sprite.prototype.play = function(name, frameRate, loop, killOnComplete) {
		// var kill = (typeof(killOnCompleted) === 'undefined') ? false : killOnComplete;
		// if(this.model.name !== 'keke') {
		// 	// trace('KILL = ' + kill + ', killOnComplete = ' + killOnComplete);
		// }
		this.animations.play(name, frameRate, loop, killOnComplete);
		this.model.currentAnimation = name;
	};
	
	Sprite.prototype.stop = function() {
		this.animations.stop();
		this.model.currentAnimation = '';
	};

	Sprite.prototype.move = function(params) {
		var movement = this.model.attrs.movement;
		if(movement) {
			// trace('Sprite['+this.model.name+']/move, movement = ', movement);
			PWG.Utils.moveView(this, movement, params);
		}
	};

	Sprite.prototype.destroy = function() {
		// trace('Sprite['+this.model.name+']/destroy, alive = ' + this.alive + ', exists = ' + this.exits);
		this.exists = false; // keeps phaser update core from running on this sprite;

		if(this.alive) {
			if(this.animations) {
				// trace('\tdestroying animations');
				this.animations.stop();
				this.animations.destroy();
			}
			Sprite._super.destroy.call(this);
		}
	};
	
	return Sprite;
})();

