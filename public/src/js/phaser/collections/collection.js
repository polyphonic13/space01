Polyworks.Collection = (function() {
	Polyworks.Utils.inherits(Collection, Polyworks.Base);
	
	function Collection(params, id) {
		Collection._super.constructor.call(this, params, id);
		this.collection = [];
	}
	
	Collection.prototype.init = function(itemClass) {
		var cl;
		for(var i = 0; i < this.model.length; i++) {
			// use model-specific class type, or default to itemClass param
			cl = (this.model[i] || itemClass);
			var view = this.addView(this.model[i], cl, i);
			view.init();
			this.collection.push(view);
		}
	};
	
	Collection.prototype.addView = function(params, itemClass, idx) {
		return new itemClass(params, idx);
	};
	
	return Collection;
})();