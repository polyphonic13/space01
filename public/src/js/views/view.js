var View = (function() {
	
	var _this;
	
	function View(params) {
		_this = this;
		this.model = params;

		if(!this.model.layer) {
			this.model.layer = new Kinetic.Layer();
			if(this.model.parent) {
				this.model.parent.add(this.model.layer);
			}
		}

		this.__defineGetter__("layer", function() {
			return this.model.layer;
		});
		this.__defineSetter__("layer", function(val) {
			this.model.layer = val;
		});
		this.__defineGetter__("position", function() {
			return this.model.position;
		});
		this.__defineSetter__("position", function(val) {
			this.model.position = val;
		});
		this.__defineGetter__("x", function() {
			return this.model.x;
		});
		this.__defineSetter__("x", function(val) {
			this.model.x = val;
		});
		this.__defineGetter__("y", function() {
			return this.model.y;
		});
		this.__defineSetter__("y", function(val) {
			this.model.y = val;
		});
		this.__defineGetter__("width", function() {
			return this.model.width;
		});
		this.__defineSetter__("width", function(val) {
			this.model.width = val;
		});
		this.__defineGetter__("height", function() {
			return this.model.height;
		});
		this.__defineSetter__("height", function(val) {
			this.model.height = val;
		});
	}
	
	View.prototype.getModel = function() {
		return this.model;
	};

	View.prototype.setPosition = function(params) {
		this.model.layer.setPosition(params);
	};
	
	View.prototype.move = function(x, y) {
		this.model.layer.move(x, y);
	};
	
	View.prototype.setStage = function(parent) {
		this.model.parent = parent;
		parent.add(this.model.layer);
	};
	
	View.prototype.remove = function() {
		this.model.layer.remove();
	};
	
	return View;
})();