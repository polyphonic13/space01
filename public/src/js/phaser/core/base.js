Polyworks.Base = (function() {
	
	var _this;
	function Base(params) {
		// trace('Base['+params.id+']/constructor, params = ');
		// trace(params);
		_this = this;
		this.model = params;
		this.id = params.id;
		this.active = true;
	}
	
	Base.prototype.get = function(prop) {
		// trace('Base/get, prop = ' + prop + ', model = ');
		// trace(this.model);
		if(this.model[prop]) {
			return this.model[prop];
		} else {
			return null;
		}
	};
	
	Base.prototype.set = function(params) {
		for(var key in params) {
			this.model[key] = params[key];
		}
	};
	
	return Base;
})();