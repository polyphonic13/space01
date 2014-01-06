var SpritePlayer = (function() {
	Utils.inherits(SpritePlayer, Player);
	
	var _config = {};
	var _sprite;
	var _this;
	
	// CONSTRUCTOR
	function SpritePlayer(params) {
		_this = this;
		config = Utils.extend(_config, params);
		SpritePlayer._super.constructor.call(_this, _config);

		this.direction = this.model.defaultDirection;
		this.buildViews();
	}

	SpritePlayer.prototype.stop = function() {
		if(typeof(_sprite) !== 'undefined') {
			_sprite.stop();
		}
	};
	
	SpritePlayer.prototype.start = function() {
		if(typeof(_sprite) !== 'undefined') {
			_sprite.start();
		}
	};
	
	SpritePlayer.prototype.playAnimation = function(name) {
		if(typeof(_sprite) !== 'undefined') {
			var animationName = name + this.direction;
			// trace('SpritePlayer/playAnimation, name = ' + name + ', animationName = ' + animationName + ', frameRate = ' + _sprite.getFrameRate());
			if(animationName !== this.currentAnimation) {
				_sprite.setAnimation(animationName);
			}
			this.currentAnimation = animationName;
		}
	};

	// PRIVATE METHODS
	SpritePlayer.prototype.buildViews = function() {
		// trace('SpritePlayer/_buildViews, sprite = ');
		// trace(imageManager.getImage(_this.model.sprite.src));
		_sprite = SpriteCreator.addToModel(_this.model);

		_sprite.start();
	}

	return SpritePlayer;	
})();
