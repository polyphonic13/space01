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
		var cursorKeys = Polyworks.Game.phaser.input.keyboard.createCursorKeys();
		cursorKeys['up'].onDown.add(this.upPressed, this);
		cursorKeys['up'].onUp.add(this.upReleased, this);
		cursorKeys['down'].onDown.add(this.downPressed, this);
		cursorKeys['down'].onUp.add(this.downReleased, this);
		cursorKeys['left'].onDown.add(this.leftPressed, this);
		cursorKeys['left'].onUp.add(this.leftReleased, this);
		cursorKeys['right'].onDown.add(this.rightPressed, this);
		cursorKeys['right'].onUp.add(this.rightReleased, this);
		this.cursorKeys = cursorKeys;

		var space = Polyworks.Game.phaser.input.keyboard.addKey(Phaser.Keyboard.SPACE_BAR);
		space.onDown.add(this.spacePressed, this);
		space.onDown.add(this.spaceReleased, this);
		
		this.cursorKeys['space'] = space;
	};
	
	ControlButtons.prototype.upPressed = function(params) {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_PRESSED, value: Polyworks.ControlKeys.UP });
	};
	
	ControlButtons.prototype.upReleased = function(params) {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_RELEASED, value: Polyworks.ControlKeys.UP });
	};
	
	ControlButtons.prototype.downPressed = function(params) {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_PRESSED, value: Polyworks.ControlKeys.DOWN });
	};
	
	ControlButtons.prototype.downReleased = function(params) {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_RELEASED, value: Polyworks.ControlKeys.DOWN });
	};
	
	ControlButtons.prototype.leftPressed = function(params) {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_PRESSED, value: Polyworks.ControlKeys.LEFT });
	};
	
	ControlButtons.prototype.leftReleased = function(params) {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_RELEASED, value: Polyworks.ControlKeys.LEFT });
	};
	
	ControlButtons.prototype.rightPressed = function(params) {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_PRESSED, value: Polyworks.ControlKeys.RIGHT });
	};
	
	ControlButtons.prototype.rightReleased = function(params) {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_RELEASED, value: Polyworks.ControlKeys.RIGHT });
	};
	
	ControlButtons.prototype.spacePressed = function(params) {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_PRESSED, value: Polyworks.ControlKeys.SPACE });
	};
	
	ControlButtons.prototype.spaceReleased = function(params) {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CONTROL_BUTTON_RELEASED, value: Polyworks.ControlKeys.SPACE });
	};
	
	ControlButtons.prototype.notifyPressed = function(params) {
		trace('ControlButtons/notifyPressed, params =');
		trace(params);
		
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
					trace('\tsetting left and right buttons pressed to false');
					_this.collection[_this.getIndexByName(ControlButtonTypes.LEFT)].pressed = false;
					_this.collection[_this.getIndexByName(ControlButtonTypes.RIGHT)].pressed = false;
				} else {
					trace('\tsetting jump button pressed to false');
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
	
	return ControlButtons;
})();