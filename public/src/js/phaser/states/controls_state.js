Polyworks.ControlsState = (function() {
	Utils.inherits(ControlsState, Polyworks.State); 
	
	function ControlsState(params, id) {
		ControlsState._super.constructor.call(this, params, id); 
	}
	
	ControlsState.prototype.createState = function() {
		ControlsState._super.createState.call(this);
	};

	ControlsState.prototype.createControls = function() {
		// trace('ControlsState/createControls, this.model = ');
		// trace(this.model);
		this.controls = new Polyworks.ControlButtons(config.controls[this.model.controlsType]);
	};
	
	return ControlsState;
})();