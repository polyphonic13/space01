PWG.MenuState = (function() {
	PWG.Utils.inherits(MenuState, PWG.State);
	
	function MenuState(params) {
		MenuState._super.constructor.call(this, params);
	}
	
	MenuState.prototype.createState = function() {
		MenuState._super.createState.call(this);
		this.changingState = false;
	};
	
	MenuState.prototype.addListeners = function() {
		PWG.EventCenter.bind(PWG.Events.BUTTON_PRESSED, this.onButtonPressed, this);
	};
	
	MenuState.prototype.onButtonPressed = function(event) {
		// trace('MenuState/onButtonPressed, changingState = ' + this.changingState + ', event = ', event);
		if(event.value === PWG.InputCodes.PLAY || event.value === PWG.InputCodes.NEXT) {
			PWGGame.changeState('level'); 
			this.changingState = true;
		}
	};
	
	MenuState.prototype.shutdown = function() {
		PWG.EventCenter.unbind(PWG.Events.BUTTON_PRESSED, this.onButtonPressed, this);
		MenuState._super.shutdown.call(this);
	};
	
	return MenuState;
})();