var ControlsState = (function() {
	Polworks.inherits(ControlsState, State); 
	
	function ControlsState(params) {
		ControlsState._super.constructor.call(this, params); 

	}
	
	ControlsState.prototype.createState = function() {
		ControlsState._super.createState.call(this);

		this.controls = new Polyworks.ControlButtons(config.controls[type]);
	};
	
})();