var AnimatedGroupView = (function() {
	Utils.inherits(AnimatedGroupView, GroupView);
	
	function AnimatedGroupView(params, group, idx) {
		// trace('AnimatedGroupView['+idx+']/constructor, params = ');
		// trace(params);
		AnimatedGroupView._super.constructor.call(this, params, group, idx);
		this.addAnimations();

		this.__defineGetter__('currentAnimation', function() {
			return this.model.currentAnimation;
		});

		this.__defineSetter__('frame', function(val) {
			this.sprite.animations.frame = val;
		});
	}

	AnimatedGroupView.prototype.addAnimations = function() {
		// trace('\t\tAnimatedGroupView['+this.id+']/addAnimations');
		var animations = this.model.animations;
		var sprite = this.sprite;

		for(var i = 0; i < animations.length; i++) {
			// trace('\t\t\tanimations['+i+'].name = ' + animations[i].name + ', keyFrames = ' + animations[i].keyFrames + ', frameRate = ' + animations[i].frameRate + ', sprite =');
			// trace(sprite);
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
		this.sprite.animations.play(name);
		this.model.currentAnimation = name;
	};
	
	AnimatedGroupView.prototype.stop = function() {
		this.sprite.animations.stop();
	};

	return AnimatedGroupView;
})();