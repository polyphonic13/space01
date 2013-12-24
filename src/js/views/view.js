var View = (function() {
	
	var _this;
	
	function View(params) {
		_this = this;
		_this.model = params;

		trace('View/Constructor, model = ');
		trace(_this.model);
		
		_this.model.layer = new Kinetic.Layer();
		_this.model.stage.add(_this.model.layer);

		_this.__defineGetter__("layer", function() {
			return _this.model.layer;
		});
		_this.__defineSetter__("layer", function(val) {
			_this.model.layer = val;
		});
		_this.__defineGetter__("position", function() {
			return _this.model.position;
		});
		_this.__defineSetter__("position", function(val) {
			_this.model.position = val;
		});
		_this.__defineGetter__("x", function() {
			return _this.model.x;
		});
		_this.__defineSetter__("x", function(val) {
			_this.model.x = val;
		});
		_this.__defineGetter__("y", function() {
			return _this.model.y;
		});
		_this.__defineSetter__("y", function(val) {
			_this.model.y = val;
		});
		_this.__defineGetter__("width", function() {
			return _this.model.width;
		});
		_this.__defineSetter__("width", function(val) {
			_this.model.width = val;
		});
		_this.__defineGetter__("height", function() {
			return _this.model.height;
		});
		_this.__defineSetter__("height", function(val) {
			_this.model.height = val;
		});
	}
	
	View.prototype.getModel = function() {
		return _this.model;
	};

	View.prototype.setPosition = function(params) {
		_this.model.layer.setPosition(params);
	};
	
	View.prototype.move = function(x, y) {
		_this.model.layer.move(x, y);
	};
	
	return View;
})();