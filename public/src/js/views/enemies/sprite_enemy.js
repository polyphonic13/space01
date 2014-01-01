var SpriteEnemy = (function() {
	Utils.inherits(SpriteEnemy, Enemy);
	
	var _this; 
	// var this.sprite; 
	
	function SpriteEnemy(params) {
		_this = this;
		SpriteEnemy._super.constructor.call(this, params);

		this.direction = this.model.defaultDirection;
		this.buildViews();
	}

	SpriteEnemy.prototype.update = function(params) {
		var pos = (params.pos) ? params.pos : this.model.layer.getAbsolutePosition();
		if(Utils.isInView(pos)) {
			this.updateAnimation(true);
		} else {
			this.updateAnimation(false);
		}
		SpriteEnemy._super.update.call(this, params);
	};
	
	SpriteEnemy.prototype.updateAnimation = function(inView) {
		if(typeof(this.sprite) !== 'undefined') {
			if(inView) {
				this.playAnimation('walk');
			} else {
				this.sprite.stop();
			}
		}
		SpriteEnemy._super.setInView.call(this, inView);
	};
	
	SpriteEnemy.prototype.playAnimation = function(name) {
		if(typeof(this.sprite) !== 'undefined') {
			var animationName = name + this.direction;
			if(animationName !== this.currentAnimation) {
				this.sprite.setAnimation(animationName);
				this.sprite.start();
			}
			this.currentAnimation = animationName;
		}
	};
	
	SpriteEnemy.prototype.die = function() {
		if(typeof(this.sprite) !== 'undefined') {
			this.sprite.stop();
		}
		SpriteEnemy._super.die.call(this);
	};
	
	SpriteEnemy.prototype.buildViews = function() {
		// trace('SpritePlayer/_buildViews, sprite = ');
		// trace(imageManager.getImage(_this.model.sprite.src));
		this.sprite = SpriteCreator.addToModel(_this.model);
		this.sprite.stop();
	};

	SpriteEnemy.prototype.getHitArea = function() {
		var pos = this.sprite.getAbsolutePosition();
		var hitArea = {
			x: pos.x,
			y: pos.y,
			width: this.model.width,
			height: this.model.height
		};
		return hitArea;
	};

	return SpriteEnemy
})();