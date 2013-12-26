var SpritePlayer = (function() {
	Utils.inherits(SpritePlayer, Player);
	
	var _config = {};
	var _sprite;
	var _facingForward = true;
	var _currentAnimation = '';
	var _this;
	
	// CONSTRUCTOR
	function SpritePlayer(params) {
		_this = this;
		config = Utils.extend(_config, params);
		SpritePlayer._super.constructor.call(_this, _config);

		_buildViews();
		
		_this.__defineGetter__("facingForward", function() {
			return _facingForward;
		});
		_this.__defineSetter__("facingForward", function(val) {
			_facingForward = val;
		});
	}

	SpritePlayer.prototype.stop = function() {
		_sprite.stop();
	};
	
	SpritePlayer.prototype.playAnimation = function(name) {
		if(_sprite) {
			if(name !== _currentAnimation) {
				_sprite.setAnimation(name);
			}
			_currentAnimation = name;
		}
	};

	SpritePlayer.prototype.getCurrentAnimation = function() {
		return _currentAnimation;
	};
	
	// PRIVATE METHODS
	function _buildViews() {
		var imageObj = new Image();
		imageObj.onload = function() {
			_sprite = new Kinetic.Sprite({
				x: _this.model.sprite.x,
				y: _this.model.sprite.y,
				image: imageObj,
				animation: 'idleR',
				animations: kekeAnimations,
				frameRate: _this.model.sprite.frameRate,
				index: _this.model.sprite.index
			});

			_this.model.layer.add(_sprite);

			// start sprite animation
			_sprite.start();
		};
		imageObj.src = _this.model.sprite.url;
	}

	return SpritePlayer;	
})();
