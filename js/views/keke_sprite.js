var KekeSprite = (function() {
	var _sprite;
	var _currentAnimation;
	var _model = {
	    x: stageConfig.width / 2,
	    y: stageConfig.height - 256,
		position: 0,
	    width: 76,
	    height: 128,
	    speed: 4,
		jumpTime: 5,
	    velX: 0,
	    velY: 0,
	    jumping: false,
		justJumped: false,
	    grounded: true,
		spriteSheet: 'assets/images/keke_character.png'
	};
	
	function KekeSprite(params) {
		_model = Utils.extend(_model, params);
		_buildViews();
	}
	
	function _buildViews() {
		var imageObj = new Image();
		imageObj.onload = function() {
			_sprite = new Kinetic.Sprite({
				x: _model.x,
				y: _model.y,
				image: imageObj,
				animation: 'idle',
				animations: kekeAnimations,
				frameRate: 7,
				index: 0
			});

			_model.layer.add(_sprite);

			// start sprite animation
			_sprite.start();
		};
		imageObj.src = _model.spriteSheet;
	}

	KekeSprite.prototype.playAnimation = function(name) {
		trace('KekeSprite/playAnimation, name = ' + name);
		if(_sprite) {
			_sprite.setAnimation(name);
		}
		_currentAnimation = name;
	};

	KekeSprite.prototype.getCurrentAnimation = function() {
		return _currentAnimation;
	};
	
	return KekeSprite;	
})();
