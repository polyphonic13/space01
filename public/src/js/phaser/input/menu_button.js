PWG.MenuButton = (function() {
	PWG.Utils.inherits(MenuButton, PWG.InputButton);
	
	var _this;
	function MenuButton(params) {
		_this = this;
		MenuButton._super.constructor.call(this, params);
	};
	
	MenuButton.prototype.inputDown = function(event, pointer) {
		this.inputPressed.call(this, { type: PWG.Events.BUTTON_PRESSED, value: this.model.inputCode });
	};
	
	MenuButton.prototype.inputUp = function(event, pointer) {
		this.inputReleased.call(this, { type: PWG.Events.BUTTON_RELEASED, value: this.model.inputCode });
	};
	
	return MenuButton;
})();