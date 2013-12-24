var Player = (function() {
	Utils.inherits(Player, View);

	var _this;
	var _config = {};
	
	function Player(params) {
		_this = this;
		_config = Utils.extend(_config, params);
		Player._super.constructor.call(_this, _config);
		_this.model.layer.setPosition({ x: _this.model.x, y: _this.model.y });

		_this.__defineGetter__("velX", function() {
			return _this.model.velX;
		});
		_this.__defineSetter__("velX", function(val) {
			_this.model.velX = val;
		});
		_this.__defineGetter__("velY", function() {
			return _this.model.velY;
		});
		_this.__defineSetter__("velY", function(val) {
			_this.model.velY = val;
		});
		_this.__defineGetter__("speed", function() {
			return _this.model.speed;
		});
		_this.__defineSetter__("speed", function(val) {
			_this.model.speed = val;
		});
		_this.__defineGetter__("grounded", function() {
			return _this.model.grounded;
		});
		_this.__defineSetter__("grounded", function(val) {
			_this.model.grounded = val;
		});
		_this.__defineGetter__("jumping", function() {
			return _this.model.jumping;
		});
		_this.__defineSetter__("jumping", function(val) {
			_this.model.jumping = val;
		});
		_this.__defineGetter__("justJumped", function() {
			return _this.model.justJumped;
		});
		_this.__defineSetter__("justJumped", function(val) {
			_this.model.justJumped = val;
		});
	}
	
	Player.prototype.getHitArea = function() {
		var pos = _this.model.layer.getAbsolutePosition();
		var hitArea = {
			x: pos.x,
			y: pos.y,
			width: _this.model.width,
			height: _this.model.height
		};
		return hitArea;
	};
	
	return Player;
})();