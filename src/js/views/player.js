var Player = (function() {

	var _model = {};
	
	function Player(params) {
		_model = Utils.extend(_model, params);
		_model.layer = new Kinetic.Layer();
		_model.layer.setPosition({ x: _model.x, y: _model.y });

		this.__defineGetter__("layer", function() {
			return _model.layer;
		});
		this.__defineSetter__("layer", function(val) {
			_model.layer = val;
		});
		this.__defineGetter__("x", function() {
			return _model.x;
		});
		this.__defineSetter__("x", function(val) {
			_model.x = val;
		});
		this.__defineGetter__("y", function() {
			return _model.y;
		});
		this.__defineSetter__("y", function(val) {
			_model.y = val;
		});
		this.__defineGetter__("width", function() {
			return _model.width;
		});
		this.__defineSetter__("width", function(val) {
			_model.width = val;
		});
		this.__defineGetter__("height", function() {
			return _model.height;
		});
		this.__defineSetter__("height", function(val) {
			_model.height = val;
		});
		this.__defineGetter__("velX", function() {
			return _model.velX;
		});
		this.__defineSetter__("velX", function(val) {
			_model.velX = val;
		});
		this.__defineGetter__("velY", function() {
			return _model.velY;
		});
		this.__defineSetter__("velY", function(val) {
			_model.velY = val;
		});
		this.__defineGetter__("speed", function() {
			return _model.speed;
		});
		this.__defineSetter__("speed", function(val) {
			_model.speed = val;
		});
		this.__defineGetter__("grounded", function() {
			return _model.grounded;
		});
		this.__defineSetter__("grounded", function(val) {
			_model.grounded = val;
		});
		this.__defineGetter__("jumping", function() {
			return _model.jumping;
		});
		this.__defineSetter__("jumping", function(val) {
			_model.jumping = val;
		});
		this.__defineGetter__("justJumped", function() {
			return _model.justJumped;
		});
		this.__defineSetter__("justJumped", function(val) {
			_model.justJumped = val;
		});
	}

	Player.prototype.getModel = function() {
		return _model;
	};

	Player.prototype.setPosition = function(params) {
		_model.layer.setPosition(params);
	};
	
	Player.prototype.move = function(x, y) {
		_model.layer.move(x, y);
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
	
	return Player;
})();