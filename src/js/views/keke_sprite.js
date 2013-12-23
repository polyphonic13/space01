var KekeSprite = (function() {
	var _sprite;
	var _currentAnimation;
	var _model = {
	    // x: stageConfig.width / 2,
	    // y: stageConfig.height - 200,
		x: 0,
		y: 0,
		position: 0,
	    width: 76,
	    height: 128,
		frameRate: 15,
		index: 0,
	    speed: 4,
		jumpTime: 5,
	    velX: 0,
	    velY: 0,
	    jumping: false,
		justJumped: false,
	    grounded: true,
		spriteSheet: 'images/keke_character2.png'
	};
	
	// CONSTRUCTOR
	function KekeSprite(params) {
		trace('KekeSprite/constructor');
		_model = Utils.extend(_model, params);
		_model.layer = new Kinetic.Layer();
		
		_buildViews();
	}

	// PUBLIC INTERFACE
	KekeSprite.prototype = {
		get layer() {
			return _model.layer;
		},
		set layer(val) {
			_model.layer = val;
		},
		get grounded() {
			return _model.grounded;
		},
		set grounded(val) {
			_model.grounded = val;
		},
		get jumping() {
			return _model.jumping;
		},
		set jumping(val) {
			_model.jumping = val;
		},
		get justJumped() {
			return _model.justJumped;
		},
		set justJumped(val) {
			_model.justJumped = val;
		}
	};
	
	KekeSprite.prototype.playAnimation = function(name) {
		// trace('KekeSprite/playAnimation, name = ' + name);
		if(_sprite) {
			_sprite.setAnimation(name);
		}
		_currentAnimation = name;
	};

	KekeSprite.prototype.getCurrentAnimation = function() {
		return _currentAnimation;
	};
	
	// PRIVATE METHODS
	function _buildViews() {
		var imageObj = new Image();
		imageObj.onload = function() {
			_sprite = new Kinetic.Sprite({
				x: _model.x,
				y: _model.y,
				image: imageObj,
				animation: 'idleR',
				animations: kekeAnimations,
				frameRate: _model.frameRate,
				index: _model.index
			});

			_model.layer.add(_sprite);

			// start sprite animation
			_sprite.start();
		};
		imageObj.src = _model.spriteSheet;
	}

	return KekeSprite;	
})();
