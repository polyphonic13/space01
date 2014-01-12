Polyworks.Collection = (function() {
	Utils.inherits(Collection, Polyworks.Base);
	
	function Collection(params, id) {
		// trace('Collection['+id+']/constructor');
		Collection._super.constructor.call(this, params, id);
		this.collection = [];
		this.nameIndex = {};

	}
	
	Collection.prototype.init = function(itemClass) {
		// trace('Collection['+this.id+']/init, itemClass = '+ itemClass);
		// trace(this.model);
		var element;
		var id;
		var cl;
		for(var i = 0; i < this.model.length; i++) {
			// use model-specific class type, or default to itemClass param
			cl = (this.model[i].type) ? this.model[i].type : itemClass;
			id = (this.model[i].name) ? this.model[i].name : i;
			element = this.addView(this.model[i].attrs, cl, id);
			element.init();
			this.nameIndex[element.id] = i;
			this.collection.push(element);
		}
	};
	
	Collection.prototype.addView = function(params, itemClass, idx) {
		return new Polyworks[itemClass](params, idx);
	};
	
	Collection.prototype.getIndexByName = function(name) {
		return this.nameIndex[name];
	};

	Collection.prototype.getItemByName = function(name) {
		return this.collection[this.nameIndex[name]];
	};
	
	Collection.prototype.remove = function() {
		// trace('Collection['+this.id+']/remove, collection = ');
		// trace(this.collection);
		for(var i = 0; i < this.collection.length; i++) {
			if(this.collection[i].remove) {
				this.collection[i].remove();
			}
		}
	};
	
	return Collection;
})();