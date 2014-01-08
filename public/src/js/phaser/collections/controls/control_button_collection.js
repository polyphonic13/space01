Polyworks.ControlButtonCollection = (function() {
	Utils.inherits(ControlButtonCollection, Polyworks.Collection);
	
	var _this = this;
	function ControlButtonCollection(params) {
		_this = this;
		params.collection = this;
		ControlButtonCollection._super.constructor.call(this, params);
		this.init(Polyworks.ControlButton);
		this.invisibleDown = false;

		this.nameIndex = {};

		var name;
		var button;
		var controlConsole = game.add.group(null);
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].callback = this.notifyPressed;
			name = this.collection[i].model.type;
			this.nameIndex[name] = i;
			button = this.collection[i].button;
			controlConsole.add(button);
		}
	}
	
	ControlButtonCollection.prototype.notifyPressed = function(params) {
		trace('ControlButtonCollection/notifyPressed, params =');
		trace(params);
		if(params.pressed) { // inputDown received
			switch(params.button) {
				case ControlButtonTypes.LEFT: 
				_this.collection[_this.getIndexByName(ControlButtonTypes.RIGHT)].pressed = false;
				break;

				case ControlButtonTypes.RIGHT:
				_this.collection[_this.getIndexByName(ControlButtonTypes.LEFT)].pressed = false;
				break;

				case ControlButtonTypes.INVISIBLE_BG:
				_this.invisibleDown = true;
				break;

				default: 
				break;
			}
		} else { // inputUp received
			if(params.button === ControlButtonTypes.INVISIBLE_BG) {
				if(pointer.clientX < stage.width) {
					trace('\tsetting left and right buttons pressed to false');
					_this.collection[_this.getIndexByName(ControlButtonTypes.LEFT)].pressed = false;
					_this.collection[_this.getIndexByName(ControlButtonTypes.RIGHT)].pressed = false;
				} else {
					trace('\tsetting jump button pressed to false');
					_this.collection[_this.getIndexByName(ControlButtonTypes.JUMP)].pressed = false;
				}
			}
		}
	};
	
	ControlButtonCollection.prototype.getIndexByName = function(name) {
		return this.nameIndex[name];
	};
	
	ControlButtonCollection.prototype.isDown = function(name) {
		return this.collection[this.getIndexByName(name)].pressed;
	};
	
	return ControlButtonCollection;
})();