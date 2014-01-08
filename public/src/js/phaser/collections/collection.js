Polyworks.Collection = (function() {
	Utils.inherits(Collection, Polyworks.Base);
	
	function Collection(params, id) {
		Collection._super.constructor.call(this, params, id);
		this.collection = [];
	}
	
	Collection.prototype.init = function(itemClass) {
		for(var i = 0; i < this.model.length; i++) {
			var view = this.addView(this.model[i], itemClass, i);
			view.init();
			this.collection.push(view);
		}
	};
	
	Collection.prototype.addView = function(params, itemClass, idx) {
		return new itemClass(params, idx);
	};
	
	return Collection;
})();