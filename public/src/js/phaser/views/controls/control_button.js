Polyworks.ControlButton = (function() {
	Utils.inherits(ControlButton, Polyworks.Base);
	
	var _this;
	function ControlButton(params, id) {
		_this = this;
		ControlButton._super.constructor.call(this, params, id);
	};
	
	ControlButton.prototype.init = function() {
		var start = this.model.start;
		// trace('ControlButton['+this.model.type+']/init, start x/y = ' + start.x + '/' + start.y);
	    this.button = game.add.button(start.x, start.y, this.model.type, null, this);
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
		this.button.events.onInputDown.add(function() {
			this.inputDown();
		}, this);
		this.button.events.onInputUp.add(function() {
			this.inputUp();
		}, this);
	};
	
	ControlButton.prototype.inputDown = function() {
		trace('ControlButton['+this.model.type+']/inputDown');
		this.pressed = true;
		// this.model.parent.notify({ button: this.model.type, pressed: this.pressed });
	};
	
	ControlButton.prototype.inputUp = function() {
		trace('ControlButton['+this.model.type+']/inputUp');
		this.pressed = false;
		// this.model.parent.notify({ button: this.model.type, pressed: this.pressed });
	};
	
	return ControlButton;
})();