Polyworks.ControlButtons = (function() {
	Polyworks.Utils.inherits(ControlButtons, Polyworks.Collection);
	
	var _this = this;
	function ControlButtons(params) {
		_this = this;
		params.collection = this;
		ControlButtons._super.constructor.call(this, params);
		this.init('ControlButton');
		this.invisibleDown = false;

		this.nameIndex = {};

		var name;
		var button;
		var controlConsole = Polyworks.Game.phaser.add.group(null);
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].callback = this.notifyPressed;
			name = this.collection[i].model.img;
			this.nameIndex[name] = i;
			button = this.collection[i].button;
			controlConsole.add(button);
		}

		// keyboard buttons
		this.cursors = Polyworks.Game.phaser.input.keyboard.createCursorKeys();

	}
	
	ControlButtons.prototype.notifyPressed = function(params) {
		trace('ControlButtons/notifyPressed, params =');
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
				if(params.pointer.clientX < stage.width) {
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
	
	ControlButtons.prototype.getIndexByName = function(name) {
		return this.nameIndex[name];
	};
	
	ControlButtons.prototype.isDown = function(name) {
		return this.collection[this.getIndexByName(name)].pressed;
	};
	
	return ControlButtons;
})();