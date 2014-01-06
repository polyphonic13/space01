var Collection = (function() {
	
	function Collection(params) {
		this.model = params;
		this.collection = [];
	}
	
	Collection.prototype.init = function(itemClass) {
		for(var i = 0; i < this.model.length; i++) {
			this.collection.push(this.addView(this.model[i], itemClass, i));
		}
	};
	
	Collection.prototype.addView = function(params, itemClass, idx) {
		return new itemClass(params, idx);
	};
	
	return Collection;
})();