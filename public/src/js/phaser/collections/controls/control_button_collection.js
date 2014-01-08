var ControlButtonCollection = (function() {
	Utils.inherits(ControlButtonCollection, Collection);
	
	function ControlButtonCollection(params) {
		ControlButtonCollection._super.constructor.call(this, params);
		this.init(ControlButton);
		
		this.nameIndex = {};
		var name;
		var button;
		var controlConsole = game.add.group(null);
		
		for(var i = 0; i < this.collection.length; i++) {
			name = this.collection[i].model.type;
			this.nameIndex[name] = i;
			button = this.collection[i].button;
			controlConsole.add(button);
		}
	}
	
	ControlButtonCollection.prototype.getButtonByName = function(name) {
		return this.nameIndex[name];
	};
	
	ControlButtonCollection.prototype.isDown = function(name) {
		// trace('ControlButonCollection/isDown, name = ' + name);
		var view = this.collection[this.getButtonByName(name)];
		// trace(button);
		return view.pressed;
	};
	
	return ControlButtonCollection;
})();