var Base = (function() {
	
	var _this;
	function Base(params, id) {
		// trace('Base['+idx+']/constructor, params = ');
		// trace(params);
		_this = this;
		this.model = params;
		this.id = id;
		this.active = true;
	}
	
	Base.prototype.get = function(prop) {
		trace('Base/get, prop = ' + prop + ', model = ');
		trace(_this.model);
		if(_this.model[prop]) {
			return _this.model[prop];
		} else {
			return null;
		}
	};
	
	Base.prototype.set = function(params) {
		for(var key in params) {
			_this.model[key] = params[key];
		}
	};
	
	Base.prototype.remove = function() {
		_this.sprite.remove();
	};
	
	return Base;
})();