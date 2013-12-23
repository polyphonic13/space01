var SpritePlayer = (function() {
	Utils.inherits(SpritePlayer, Player);
	
	var _config = {};
	var _sprite;
	var _facingForward = true;
	var _currentAnimation = '';
	var _model;
	
	// CONSTRUCTOR
	function SpritePlayer(params) {
		config = Utils.extend(_config, params);
		SpritePlayer._super.constructor.call(this, _config);

		_model = this.constructor._super.getModel.call(this);
		_buildViews();
		
		this.__defineGetter__("facingForward", function() {
			return _facingForward;
		});
		this.__defineSetter__("facingForward", function(val) {
			_facingForward = val;
		});
	}

	SpritePlayer.prototype.playAnimation = function(name) {
		// trace('SpritePlayer/playAnimation, name = ' + name);
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
				x: _model.sprite.x,
				y: _model.sprite.y,
				image: imageObj,
				animation: 'idleR',
				animations: kekeAnimations,
				frameRate: _model.sprite.frameRate,
				index: _model.sprite.index
			});

			_model.layer.add(_sprite);

			// start sprite animation
			_sprite.start();
		};
		imageObj.src = _model.sprite.url;
	}

	return SpritePlayer;	
})();
