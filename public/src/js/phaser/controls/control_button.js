Polyworks.ControlButton = (function() {
	Polyworks.Utils.inherits(ControlButton, Polyworks.Base);
	
	var _this;
	function ControlButton(params, id) {
		_this = this;
		ControlButton._super.constructor.call(this, params, id);
	};
	
	ControlButton.prototype.init = function() {
		var start = this.model.start;
		trace('ControlButton['+this.model.type+']/init, start x/y = ' + start.x + '/' + start.y);
	    this.button = game.add.button(start.x, start.y, this.model.type, null, this);
		if(this.model.width) {
			this.button.width = this.model.width;
		}
		if(this.model.height) {
			this.button.height = this.model.height;
		}
		this.pressed = false;
		this.addListeners();

	};
	
	ControlButton.prototype.actionOnClick = function() {
		trace('ControlButton['+this.model.type+']/actionOnClick');
		// this.pressed = true;
	};
	
	ControlButton.prototype.addListeners = function() {
		// trace('ControlButton['+this.model.type+']/addListeners, button = ');
		// trace(this.button);
		this.button.events.onInputDown.add(function(event, pointer) {
			this.inputDown(event, pointer);
		}, this);
		this.button.events.onInputUp.add(function(event, pointer) {
			this.inputUp(event, pointer);
		}, this);
	};
	
	ControlButton.prototype.inputDown = function(event, pointer) {
		trace('ControlButton['+this.model.type+']/inputDown');
		this.pressed = true;
		if(this.callback) {
			this.callback({ button: this.model.type, pressed: this.pressed, pointer: pointer });
		}
	};
	
	ControlButton.prototype.inputUp = function(event, pointer) {
		trace('ControlButton['+this.model.type+']/inputUp');
		this.pressed = false;
		if(this.callback) {
			this.callback({ button: this.model.type, pressed: this.pressed, pointer: pointer });
		}
	};
	
	return ControlButton;
})();