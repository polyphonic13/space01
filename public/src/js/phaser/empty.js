Polyworks.Empty = (function() {
	function Empty(params) {
		trace('Empty/constructor');
		this.model = new Polyworks.Model(params);
	}
	
	Empty.prototype.begin = function() {
		trace('Empty/begin');
		this.name = this.model.name;
		trace(this);
	};
	
	return Empty;
})();