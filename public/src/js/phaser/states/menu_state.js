Polyworks.MenuState = (function() {
	Utils.inherits(MenuState, Polyworks.ControlsState);
	
	function MenuState(params, id) {
		MenuState._super.constructor.call(this, params, id);
	}
	
	MenuState.prototype.createState = function() {
		this.createControls.call(this);
	};
	
	return MenuState;
})();