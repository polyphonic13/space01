Polyworks.Collection = (function() {
	
	function Collection(params) {
		this.model = new Polyworks.Model(params);
		trace('Collection['+params.name+']/constructor');
		this.collection = {};
	}
	
	Collection.prototype.init = function() {
		trace('Collection['+this.model.name+']/init, itemClass = '+ itemClass);
		trace(this.model.attrs);
		var game = PolyworksGame.phaser;
		var elements = this.model.attrs;
		var element;
		var cl;

		this.group = game.add.group();

		for(var i = 0; i < elements.length; i++) {
			if(!elements[i].attrs.name) {
				elements[i].attrs.name = (elements[i].name) ? elements[i].name : i;
			}
			if(!elements[i].cl) {
				elements[i].cl = itemClass;
			}
			trace('\telements['+elements[i].name+'].cl = ' + elements[i].cl);
			trace(elements[i]);
			if(elements[i].type === 'view') {
				element = new Polyworks[elements[i].cl](game, elements[i].attrs.start.x, elements[i].attrs.start.y, elements[i].attrs);
			} else {
				element = new Polyworks[elements[i].cl](elements[i]);
			}
			element.init();
			this.collection[elements[i].name] = element;
			this.group.add(element);
		}
	};
	
	Collection.prototype.addView = function(params, itemClass) {
		trace('Collection['+this.model.name+']/addView, itemClass = ' + itemClass);
		trace(params);
		return new Polyworks[itemClass](params);
	};
	
	Collection.prototype.getItemByName = function(name) {
		return this.collection[name];
	};
	
	Collection.prototype.remove = function() {
		// trace('Collection['+this.model.name+']/remove, collection = ');
		// trace(this.collection);
		for(var i = 0; i < this.collection.length; i++) {
			if(this.collection[i].remove) {
				this.collection[i].remove();
			}
		}
	};
	
	return Collection;
})();