PWG.Model = (function() {
	
	var _this;
	function Model(params) {
		// trace('Model['+params.name+']/constructor, params = ');
		// trace(params);
		_this = this;
		this.active = true;
		PWG.Utils.each(params,
			function(p, key) {
				this[key] = p;
			},
			this
		);
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
		PWG.Utils.each(params,
			function(p, key) {
				this[key] = p;
			},
			this
		);
	};
	
	return Model;
})();