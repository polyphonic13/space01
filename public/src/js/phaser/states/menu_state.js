Polyworks.MenuState = (function() {
	Utils.inherits(MenuState, Polyworks.ControlsState);
	
	function MenuState(params, id) {
		MenuState._super.constructor.call(this, params, id);
	}
	
	MenuState.prototype.createState = function() {
		MenuState._super.createState.call(this);
		this.createControls.call(this);
		
		Polyworks.EventCenter.bind(Polyworks.Events.CONTROL_PRESSED, this.onControlButtonPressed);
		
	};
	
	MenuState.prototype.onControlButtonPressed = function(event) {
		if(event.value === Polyworks.ControlCodes.PLAY) {
			Polyworks.Game.changeState('level'); 
		}
	};
	
	return MenuState;
})();