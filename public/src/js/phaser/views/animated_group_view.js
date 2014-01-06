var AnimatedGroupView = (function() {
	Utils.inherits(AnimatedGroupView, GroupView);
	
	function AnimatedGroupView(params, group, idx) {
		AnimatedGroupView._super.constructor.call(this, params, group, idx);
		this.addAnimations();

		this.__defineGetter__('currentAnimation', function() {
			return this.model.currentAnimation;
		});

		this.__defineSetter__('frame', function(val) {
			this.model.sprite.animations.frame = val;
		});
	}

	AnimatedGroupView.prototype.addAnimations = function() {
		var animations = this.model.animations;
		var sprite = this.model.sprite;

		for(var j = 0; j < animations.length; j++) {
			sprite.animations.add(animations[i].name, animations[i].keyFrames, animations[i].frameRate);
		}

		if(this.model.defaultAnimation) {
			this.play(this.model.defaultAnimation);
		} else {
			sprite.animations.frame = 0;
			this.model.currentAnimation = '';
		}
	}
	
	AnimatedGroupView.prototype.play = function(name) {
		this.model.sprite.animations.play(name);
		this.model.currentAnimation = name;
	};
	
	AnimatedGroupView.prototype.stop = function() {
		this.model.sprite.animations.stop();
	};

	return AnimatedGroupView;
})();