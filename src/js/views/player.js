var Player = (function() {
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
		sprite: {
			url: 'images/keke_character2.png',
			x: 0,
			y: 0
		}
	};
	
	// CONSTRUCTOR
	function Player(params) {
		trace('Player/constructor');
		_model = Utils.extend(_model, params);
		_model.layer = new Kinetic.Layer();
		
		_model.layer.setPosition({ x: _model.x, y: _model.y });

		_buildViews();
	}

	// PUBLIC INTERFACE
	Player.prototype = {
		get layer() {
			return _model.layer;
		},
		set layer(val) {
			_model.layer = val;
		},
		get x() {
			return _model.x;
		},
		set x(val) {
			_model.x = val;
		},
		get y() {
			return _model.y;
		},
		set y(val) {
			_model.y = val;
		},
		get width() {
			return _model.width;
		},
		set width(val) {
			_model.width = val;
		},
		get height() {
			return _model.height;
		},
		set height(val) {
			_model.height = val;
		},
		get velX() {
			return _model.velX;
		},
		set velX(val) {
			_model.velX = val;
		},
		get velY() {
			return _model.velY;
		},
		set velY(val) {
			_model.velY = val;
		},
		get speed() {
			return _model.speed;
		},
		set speed(val) {
			_model.speed = val;
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
	
	Player.prototype.getHitArea = function() {
		var pos = _model.layer.getAbsolutePosition();
		var hitArea = {
			x: pos.x,
			y: pos.y,
			width: _model.width,
			height: _model.height
		};
		return hitArea;
	};
	
	Player.prototype.setPosition = function(params) {
		_model.layer.setPosition(params);
	};
	
	Player.prototype.move = function(x, y) {
		_model.layer.move(x, y);
	};
	
	Player.prototype.playAnimation = function(name) {
		// trace('Player/playAnimation, name = ' + name);
		if(_sprite) {
			_sprite.setAnimation(name);
		}
		_currentAnimation = name;
	};

	Player.prototype.getCurrentAnimation = function() {
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
				frameRate: _model.frameRate,
				index: _model.index
			});

			_model.layer.add(_sprite);

			// start sprite animation
			_sprite.start();
		};
		imageObj.src = _model.sprite.url;
	}

	return Player;	
})();
