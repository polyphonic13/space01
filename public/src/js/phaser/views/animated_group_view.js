Polyworks.AnimatedGroupView = (function() {
	Utils.inherits(AnimatedGroupView, Polyworks.GroupView);
	
	var _this;
	function AnimatedGroupView(params, group, id) {
		// trace('AnimatedGroupView['+idx+']/constructor, params = ');
		// trace(params);
		_this = this;
		AnimatedGroupView._super.constructor.call(this, params, group, id);

		this.__defineGetter__('currentAnimation', function() {
			return this.model.currentAnimation;
		});

		this.__defineSetter__('frame', function(val) {
			this.sprite.animations.frame = val;
		});
	}

	AnimatedGroupView.prototype.init = function() {
	// AnimatedGroupView.prototype.addAnimations = function() {
		// trace('AnimatedGroupView['+this.id+']/init, this =');
		// trace(this);
		AnimatedGroupView._super.init();
		
		var animations = _this.model.animations;
		var sprite = _this.sprite;
		
		for(var i = 0; i < animations.length; i++) {
			// trace('\t\t\tanimations['+i+'].name = ' + animations[i].name + ', keyFrames = ' + animations[i].keyFrames + ', frameRate = ' + animations[i].frameRate + ', sprite =');
			// trace(sprite);
			sprite.animations.add(animations[i].name, animations[i].keyFrames, animations[i].frameRate);
		}

		var defaultAnimation = this.model.defaultAnimation;
		if(defaultAnimation) {
			_this.play();
			_this.model.currentAnimation = defaultAnimation;
			
		} else {
			sprite.animations.frame = 0;
			_this.model.currentAnimation = '';
		}
	};
	
	AnimatedGroupView.prototype.play = function(name) {
		_this.sprite.animations.play(name);
		_this.set({ currentAnimation: name });
	};
	
	AnimatedGroupView.prototype.stop = function() {
		_this.sprite.animations.stop();
		_this.set({ currentAnimation: '' });
	};

	return AnimatedGroupView;
})();