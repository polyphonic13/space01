Polyworks.ControlButtons = (function() {
	Utils.inherits(ControlButtons, Polyworks.Collection);
	
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
		// this.cursors = Polyworks.Game.phaser.input.keyboard.createCursorKeys();
		this.initControlKeys();
	}
	
	ControlButtons.prototype.initControlKeys = function() {
		// var cursorKeys = Polyworks.Game.phaser.input.keyboard.createCursorKeys();
		var cursorKeys = {};
		for(var key in Polyworks.ControlKeys) {
			cursorKeys[key] = Polyworks.Game.phaser.input.keyboard.addKey(Polyworks.ControlKeys[key]);
			cursorKeys[key].onDown.add(this.keyPressed, this);
			cursorKeys[key].onUp.add(this.keyReleased, this);
			
		}
		/*
		cursorKeys['up'].onDown.add(this.keyPressed, this);
		cursorKeys['up'].onUp.add(this.keyReleased, this);
		cursorKeys['down'].onDown.add(this.keyPressed, this);
		cursorKeys['down'].onUp.add(this.keyReleased, this);
		cursorKeys['left'].onDown.add(this.keyPressed, this);
		cursorKeys['left'].onUp.add(this.keyReleased, this);
		cursorKeys['right'].onDown.add(this.keyPressed, this);
		cursorKeys['right'].onUp.add(this.keyReleased, this);
		*/
		this.cursorKeys = cursorKeys;
	};
	
	ControlButtons.prototype.keyPressed = function(params) {
		// trace('ControlButtons/keyPressed, keycode = ' + params.keyCode);
		// trace(params);
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_PRESSED, value: params.keyCode });
	};
	
	ControlButtons.prototype.keyReleased = function(params) {
		// trace('ControlButtons/keyReleased, keycode = ' + params.keyCode);
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_RELEASED, value: params.keyCode });
	};
	
	ControlButtons.prototype.notifyPressed = function(params) {
		// trace('ControlButtons/notifyPressed, params =');
		// trace(params);
		
		if(params.pressed) { // inputDown received
			/*
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
			*/
			if(params.value === Polyworks.ControlKeys.QUIT) {
				Polyworks.Game.quit();
			} else {
				Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_PRESSED, value: params.value });
			}
		} else { // inputUp received
			/*
			if(params.button === ControlButtonTypes.INVISIBLE_BG) {
				if(params.pointer.clientX < stage.width) {
					// trace('\tsetting left and right buttons pressed to false');
					_this.collection[_this.getIndexByName(ControlButtonTypes.LEFT)].pressed = false;
					_this.collection[_this.getIndexByName(ControlButtonTypes.RIGHT)].pressed = false;
				} else {
					// trace('\tsetting jump button pressed to false');
					_this.collection[_this.getIndexByName(ControlButtonTypes.JUMP)].pressed = false;
				}
			}
			*/
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_RELEASED, value: params.value });
		}
		
	};
	
	ControlButtons.prototype.isDown = function(name) {
		return this.collection[this.nameIndex[name]].pressed;
	};
	
	ControlButtons.prototype.remove = function() {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].destroy();
		}
	};
	
	return ControlButtons;
})();