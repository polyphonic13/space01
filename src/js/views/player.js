var Player = (function() {
	Utils.inherits(Player, View);
	
	var _config = {};
	var _model = {};
	
	function Player(params) {
		_config = Utils.extend(_config, params);
		Player._super.constructor.call(this, _config);

		_model = this.constructor._super.getModel.call(this);

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