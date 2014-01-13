Polyworks.MenuState = (function() {
	Utils.inherits(MenuState, Polyworks.ControlsState);
	
	var _this;
	function MenuState(params, id) {
		_this = this;
		MenuState._super.constructor.call(this, params, id);
	}
	
	MenuState.prototype.createState = function() {
		MenuState._super.createState.call(this);
		this.createControls.call(this);
		
		Polyworks.EventCenter.bind(Polyworks.Events.BUTTON_PRESSED, _this.onButtonPressed);
		
	};
	
	MenuState.prototype.onButtonPressed = function(event) {
		if(event.value === Polyworks.InputCodes.PLAY) {
			PolyworksGame.changeState('level'); 
		}
	};
	
	return MenuState;
})();