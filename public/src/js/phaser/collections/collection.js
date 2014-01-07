var Collection = (function() {
	
	function Collection(params) {
		this.model = params;
		this.collection = [];
	}
	
	Collection.prototype.init = function(itemClass) {
		for(var i = 0; i < this.model.length; i++) {
			var view = this.addView(this.model[i], itemClass, i);
			view.init();
			this.collection.push(view);
		}
	};
	
	Collection.prototype.checkTerrainCollision = function(ground) {
		for(var key in this.collection) {
			this.collection[key].checkTerrainCollision(ground);
		}
	};
	
	Collection.prototype.addView = function(params, itemClass, idx) {
		return new itemClass(params, idx);
	};
	
	return Collection;
})();