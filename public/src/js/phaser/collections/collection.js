Polyworks.Collection = (function() {
	Utils.inherits(Collection, Polyworks.Base);
	
	function Collection(params) {
		trace('Collection['+params.id+']/constructor');
		Collection._super.constructor.call(this, params);
		this.collection = {};
	}
	
	Collection.prototype.init = function(itemClass) {
		trace('Collection['+this.id+']/init, itemClass = '+ itemClass);
		trace(this.model);
		var element;
		var id;
		var cl;
		for(var i = 0; i < this.model.length; i++) {
			trace('\telement['+key+'].cl = ' + this.model[i].cl);
			// use model-specific class type, or default to itemClass param
			cl = (this.model[i].cl) ? this.model[i].cl : itemClass;
			id = (this.model[i].id) ? this.model[i].id : key;
			trace('\tabout to call addView with class = ' + cl + ', itemClass = ' + itemClass);
			element = this.addView(this.model[i].attrs, cl, id);
			element.init();
			this.collection[id] = element;
		}
	};
	
	Collection.prototype.addView = function(params, itemClass) {
		trace('Collection['+this.id+']/addView, itemClass = ' + itemClass);
		trace(params);
		return new Polyworks[itemClass](params);
	};
	
	Collection.prototype.getItemByName = function(name) {
		return this.collection[name];
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