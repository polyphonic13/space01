PWG.ControlButton = (function() {
	PWG.Utils.inherits(ControlButton, PWG.InputButton);
	
	var _this;
	function ControlButton(params) {
		_this = this;
		ControlButton._super.constructor.call(this, params);
	};
	
	ControlButton.prototype.inputDown = function(event, pointer) {
		trace('ControlButton['+this.model.inputCode+']/inputDown');
		if(this.model.inputCode) {
			this.inputPressed.call(this, { type: PWG.Events.CONTROL_PRESSED, value: this.model.inputCode });
		}
	};
	
	ControlButton.prototype.inputUp = function(event, pointer) {
		if(this.model.inputCode) {
			this.inputReleased.call(this, { type: PWG.Events.CONTROL_RELEASED, value: this.model.inputCode });
		}
	};
	
	ControlButton.prototype.destroy = function() {
	};
	
	return ControlButton;
})();