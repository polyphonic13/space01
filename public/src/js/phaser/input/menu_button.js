Polyworks.MenuButton = (function() {
	Utils.inherits(MenuButton, Polyworks.InputButton);
	
	var _this;
	function MenuButton(params, id) {
		// trace('MenuButton/constructor, params = ');
		// trace(params);
		_this = this;
		MenuButton._super.constructor.call(this, params, id);
	};
	
	MenuButton.prototype.inputDown = function(event, pointer) {
		// trace('MenuButton['+this.model.inputCode+']/inputDown');
		this.inputPressed.call(this, { type: Polyworks.Events.BUTTON_PRESSED, value: this.model.inputCode });
	};
	
	MenuButton.prototype.inputUp = function(event, pointer) {
		// trace('MenuButton['+this.model.inputCode+']/inputUp');
		this.inputReleased.call(this, { type: Polyworks.Events.BUTTON_RELEASED, value: this.model.inputCode });
	};
	
	return MenuButton;
})();