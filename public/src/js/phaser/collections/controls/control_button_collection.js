var ControlButtonCollection = (function() {
	Utils.inherits(ControlButtonCollection, Collection);
	
	function ControlButtonCollection(params) {
		ControlButtonCollection._super.constructor.call(this, params);
		this.init(ControlButton);
		
		this.nameIndex = {};
		for(var i = 0; i < this.collection.length; i++) {
			var name = this.collection[i].model.type;
			this.nameIndex[name] = i;
		}
	}
	
	ControlButtonCollection.prototype.getButtonByName = function(name) {
		return this.nameIndex[name];
	};
	
	ControlButtonCollection.prototype.isDown = function(name) {
		// trace('ControlButonCollection/isDown, name = ' + name);
		var button = this.collection[this.getButtonByName(name)];
		// trace(button);
		return button.pressed;
	};
	
	return ControlButtonCollection;
})();