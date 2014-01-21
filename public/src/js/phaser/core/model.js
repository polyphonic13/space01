Polyworks.Model = (function() {
	
	var _this;
	function Model(params) {
		// trace('Model['+params.name+']/constructor, params = ');
		// trace(params);
		_this = this;
		this.active = true;
		for(var key in params) {
			this[key] = params[key];
		}
	}
	
	Model.prototype.get = function(prop) {
		// trace('Model/get, prop = ' + prop + ', this = ');
		// trace(this);
		if(this[prop]) {
			return this[prop];
		} else {
			return null;
		}
	};
	
	Model.prototype.set = function(params) {
		for(var key in params) {
			this[key] = params[key];
		}
	};
	
	return Model;
})();