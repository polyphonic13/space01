var AnimatedGroupView = (function() {
	Utils.inherits(AnimatedGroupView, GroupView);
	
	function AnimatedGroupView(params, group, id) {
		// trace('AnimatedGroupView['+idx+']/constructor, params = ');
		// trace(params);
		AnimatedGroupView._super.constructor.call(this, params, group, id);

		this.__defineGetter__('currentAnimation', function() {
			return this.model.currentAnimation;
		});

		this.__defineSetter__('frame', function(val) {
			this.sprite.animations.frame = val;
		});
	}

	AnimatedGroupView.prototype.init = function() {
		// trace('\t\tAnimatedGroupView['+this.id+']/addAnimations');
		AnimatedGroupView._super.init();
		
		var animations = this.get('animations');
		var sprite = this.sprite;
		
		for(var i = 0; i < animations.length; i++) {
			// trace('\t\t\tanimations['+i+'].name = ' + animations[i].name + ', keyFrames = ' + animations[i].keyFrames + ', frameRate = ' + animations[i].frameRate + ', sprite =');
			// trace(sprite);
			sprite.animations.add(animations[i].name, animations[i].keyFrames, animations[i].frameRate);
		}

		var defaultAnimation = this.model.get('defaultAnimation');
		if(defaultAnimation) {
			this.play();
			this.model.set({ currentAnimation: defaultAnimation });
			
		} else {
			sprite.animations.frame = 0;
			this.model.set({ currentAnimation: '' });
		}
	}
	
	AnimatedGroupView.prototype.play = function(name) {
		this.sprite.animations.play(name);
		this.model.set({ currentAnimation: name });
	};
	
	AnimatedGroupView.prototype.stop = function() {
		this.sprite.animations.stop();
		this.model.set({ currentAnimation: '' });
	};

	return AnimatedGroupView;
})();