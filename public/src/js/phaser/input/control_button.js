Polyworks.ControlButton = (function() {
	Utils.inherits(ControlButton, Polyworks.InputButton);
	
	var _this;
	function ControlButton(params) {
		// trace('ControlButton/constructor, params = ');
		// trace(params);
		_this = this;
		ControlButton._super.constructor.call(this, params);
	};
	
	ControlButton.prototype.inputDown = function(event, pointer) {
		// trace('ControlButton['+this.model.inputCode+']/inputDown');
		this.inputPressed.call(this, { type: Polyworks.Events.CONTROL_PRESSED, value: this.model.inputCode });
	};
	
	ControlButton.prototype.inputUp = function(event, pointer) {
		// trace('ControlButton['+this.model.inputCode+']/inputUp');
		this.inputReleased.call(this, { type: Polyworks.Events.CONTROL_RELEASED, value: this.model.inputCode });
	};
	
	return ControlButton;
})();