var SpritePlayer = (function() {
	Utils.inherits(SpritePlayer, Player);
	
	var config = {
		x: 0,
		y: 0,
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
		sprite: {
			url: 'images/keke_character2.png',
			x: 0,
			y: 0,
			index: 0,
			frameRate: 15
		}
	};

	var _sprite;
	var _currentAnimation;
	var _model;
	
	// CONSTRUCTOR
	function SpritePlayer(params) {
		trace('SpritePlayer/constructor');
		config = Utils.extend(config, params);
		SpritePlayer._super.constructor.call(this, config);

		_model = this.constructor._super.getModel.call(this);
		trace('\t_model =');
		trace(_model);

		_buildViews();
	}

	SpritePlayer.prototype.playAnimation = function(name) {
		// trace('SpritePlayer/playAnimation, name = ' + name);
		if(_sprite) {
			_sprite.setAnimation(name);
		}
		_currentAnimation = name;
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
