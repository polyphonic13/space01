Polyworks.AnimatedSprite = (function() {
	// Utils.inherits(AnimatedSprite, Polyworks.Sprite);
	
	// var _this;
	function AnimatedSprite(params) {
		// _this = this;
		// _this.model.name = id;
		AnimatedSprite._super.constructor.call(this, params);

		this.__defineSetter__('frame', function(val) {
			this.sprite.animations.frame = val;
		});

		this.__defineSetter__('velocityX', function(val) {
			this.sprite.body.velocity.x = val;
		});

		this.__defineSetter__('velocityY', function(val) {
			this.sprite.body.velocity.y = val;
		});
	}
	
	AnimatedSprite.prototype.begin = function(params) {
		AnimatedSprite._super.begin.call(_this, params);
		this.beginAnimations(_this.model.animations, _this.sprite);
	};
	
	AnimatedSprite.prototype.beginAnimations = function(animations, sprite) {
		Utils.each(animations,
			function(a) {
				sprite.animations.add(a.name, a.keyFrames, a.frameRate);
			},
			this
		);

		var defaultAnimation = _this.model.defaultAnimation;
		if(defaultAnimation) {
			_this.play();
			_this.model.currentAnimation = defaultAnimation;
		} else {
			sprite.animations.frame = 0;
			_this.model.currentAnimation = '';
		}
	};
	
	AnimatedSprite.prototype.play = function(name, frameRate, looped) {
		_this.sprite.animations.play(name, frameRate, looped);
		_this.model.currentAnimation = name;
	};
	
	AnimatedSprite.prototype.stop = function() {
		_this.sprite.animations.stop();
		_this.model.currentAnimation = '';
	};

	return AnimatedSprite;
})();