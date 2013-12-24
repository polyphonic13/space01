var View = (function() {
	
	_model = {};
	
	function View(params) {
		_model = Utils.extend(_model, params);

		_model.layer = new Kinetic.Layer();
		_model.layer.setPosition({ x: _model.x, y: _model.y });
		_model.stage.add(_model.layer);

		this.__defineGetter__("layer", function() {
			return _model.layer;
		});
		this.__defineSetter__("layer", function(val) {
			_model.layer = val;
		});
		this.__defineGetter__("position", function() {
			return _model.position;
		});
		this.__defineSetter__("position", function(val) {
			_model.position = val;
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
	}
	
	View.prototype.getModel = function() {
		return _model;
	};

	View.prototype.setPosition = function(params) {
		_model.layer.setPosition(params);
	};
	
	View.prototype.move = function(x, y) {
		_model.layer.move(x, y);
	};
	
	return View;
})();