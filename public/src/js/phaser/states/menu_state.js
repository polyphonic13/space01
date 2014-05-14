Polyworks.MenuState = (function() {
	Polyworks.Utils.inherits(MenuState, Polyworks.State);
	
	function MenuState(params) {
		MenuState._super.constructor.call(this, params);
	}
	
	MenuState.prototype.createState = function() {
		MenuState._super.createState.call(this);
		this.changingState = false;
	};
	
	MenuState.prototype.addListeners = function() {
		Polyworks.EventCenter.bind(Polyworks.Events.BUTTON_PRESSED, this.onButtonPressed, this);
	};
	
	MenuState.prototype.onButtonPressed = function(event) {
		// trace('MenuState/onButtonPressed, changingState = ' + this.changingState + ', event = ');
		// trace(event);
		if(event.value === Polyworks.InputCodes.PLAY || event.value === Polyworks.InputCodes.NEXT) {
			PolyworksGame.changeState('level'); 
			this.changingState = true;
		}
	};
	
	MenuState.prototype.shutdown = function() {
		Polyworks.EventCenter.unbind(Polyworks.Events.BUTTON_PRESSED, this.onButtonPressed, this);
		MenuState._super.shutdown.call(this);
	};
	
	return MenuState;
})();