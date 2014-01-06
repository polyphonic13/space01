var SpriteEnemy = (function() {
	Utils.inherits(SpriteEnemy, Enemy);
	
	var _this; 
	// var this.sprite; 
	
	function SpriteEnemy(params) {
		_this = this;
		SpriteEnemy._super.constructor.call(this, params);

		this.direction = this.model.defaultDirection;
		this.inView = false;
		this.buildViews();
	}

	SpriteEnemy.prototype.update = function(params) {
		SpriteEnemy._super.update.call(this, params);
		this.updateAnimation();
	};
	
	SpriteEnemy.prototype.setDirection = function(direction) {
		// trace('SpriteEnemy['+this.model.id+']/setDirection, direction = ' + direction + ', this.direction = ' + this.direction);
		if(this.direction !== direction) {
			this.direction = direction;
			this.updateAnimation();
		}
	};
	
	SpriteEnemy.prototype.updateAnimation = function() {
		if(typeof(this.sprite) !== 'undefined') {
			if(this.inView) {
				this.playAnimation('walk');
			} else {
				this.sprite.stop();
			}
		}
	};
	
	SpriteEnemy.prototype.playAnimation = function(name) {
		if(typeof(this.sprite) !== 'undefined') {
			var animationName = name + this.direction;
			if(animationName !== this.currentAnimation) {
				// trace('SpriteEnemy/playAnimation, animationName = ' + animationName + ', this.currentAnimation = ' + this.currentAnimation);
				this.sprite.stop();
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

	SpriteEnemy.prototype.remove = function() {
		this.sprite.stop();
		SpriteEnemy._super.remove.call(this);
	};
	
	return SpriteEnemy
})();