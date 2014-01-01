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

		_buildViews();
		this.direction = Directions.RIGHT;
	}

	SpritePlayer.prototype.stop = function() {
		if(typeof(_sprite) !== 'undefined') {
			_sprite.stop();
		}
	};
	
	SpritePlayer.prototype.start = function() {
		_sprite.start();
	};
	
	SpritePlayer.prototype.playAnimation = function(name) {
		if(_sprite) {
			var animationName = name + this.direction;
			// trace('SpritePlayer/playAnimation, name = ' + name + ', animationName = ' + animationName);
			if(animationName !== this.currentAnimation) {
				_sprite.setAnimation(animationName);
			}
			this.currentAnimation = animationName;
		}
	};

	// PRIVATE METHODS
	function _buildViews() {
		// trace('SpritePlayer/_buildViews, sprite = ');
		// trace(imageManager.getImage(_this.model.sprite.src));
		
		_sprite = new Kinetic.Sprite({
			x: _this.model.sprite.x,
			y: _this.model.sprite.y,
			image: imageManager.getImage(_this.model.sprite.src),
			animation: _this.model.defaultAnimation,
			animations: _this.model.animations,
			frameRage: _this.model.sprite.frameRate,
			index: _this.model.sprite.index
		});
		_this.model.layer.add(_sprite);

		_sprite.start();
	}

	return SpritePlayer;	
})();
