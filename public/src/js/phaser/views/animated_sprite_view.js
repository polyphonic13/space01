Polyworks.AnimatedSpriteView = (function() {
	Polyworks.Utils.inherits(AnimatedSpriteView, Polyworks.SpriteView);
	
	var _this;
	function AnimatedSpriteView(params, id) {
		_this = this;
		AnimatedSpriteView._super.constructor.call(this, params, id);
		this.__defineSetter__('frame', function(val) {
			this.sprite.animations.frame = val;
		})
	}
	
	AnimatedSpriteView.prototype.init = function(params) {
		AnimatedSpriteView._super.init.call(_this, params);
		this.initAnimations(_this.model.animations, _this.sprite);
	};
	
	AnimatedSpriteView.prototype.initAnimations = function(animations, sprite) {
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
	
	AnimatedSpriteView.prototype.play = function(name) {
		_this.sprite.animations.play(name);
		_this.model.currentAnimation = name;
	};
	
	AnimatedSpriteView.prototype.stop = function() {
		_this.sprite.animations.stop();
		_this.model.currentAnimation = '';
	};

	return AnimatedSpriteView;
})();