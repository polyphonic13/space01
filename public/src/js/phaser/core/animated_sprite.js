Polyworks.AnimatedSprite = (function() {
	Utils.inherits(AnimatedSprite, Polyworks.Sprite);
	
	var _this;
	function AnimatedSprite(params, id) {
		_this = this;
		AnimatedSprite._super.constructor.call(this, params, id);

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
	
	AnimatedSprite.prototype.init = function(params) {
		AnimatedSprite._super.init.call(_this, params);
		this.initAnimations(_this.model.animations, _this.sprite);
	};
	
	AnimatedSprite.prototype.initAnimations = function(animations, sprite) {
		for(var i = 0; i < animations.length; i++) {
			sprite.animations.add(animations[i].name, animations[i].keyFrames, animations[i].frameRate);
		}

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