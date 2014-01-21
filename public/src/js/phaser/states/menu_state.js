Polyworks.MenuState = (function() {
	Utils.inherits(MenuState, Polyworks.State);
	
	var _this;
	function MenuState(params) {
		_this = this;
		MenuState._super.constructor.call(this, params);
	}
	
	MenuState.prototype.createState = function() {
		MenuState._super.createState.call(this);
		// this.createControls.call(this);

		// this.addListeners();
		this.changingState = false;
	};
	
	MenuState.prototype.addListeners = function() {
		Polyworks.EventCenter.bind(Polyworks.Events.BUTTON_PRESSED, this.onButtonPressed);
	};
	
	MenuState.prototype.onButtonPressed = function(event) {
		// trace('MenuState/onButtonPressed, changingState = ' + this.changingState + ', event = ');
		// trace(event);
		if(event.value === Polyworks.InputCodes.PLAY || event.value === Polyworks.InputCodes.NEXT) {
			// if(!this.changingState) {
				PolyworksGame.changeState('level'); 
				this.changingState = true;
			// }
		}
	};
	
	MenuState.prototype.shutdown = function() {
		MenuState._super.shutdown.call(this);
	};
	
	return MenuState;
})();