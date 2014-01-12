Polyworks.ControlsState = (function() {
	Utils.inherits(ControlsState, Polyworks.State); 
	
	var _this;
	function ControlsState(params, id) {
		_this = this;
		ControlsState._super.constructor.call(this, params, id); 
	}
	
	ControlsState.prototype.createState = function() {
		ControlsState._super.createState.call(this);
	};

	ControlsState.prototype.createControls = function() {
		// trace('ControlsState/createControls, this.model = ');
		// trace(this.model);
		this.controls = new Polyworks.ControlButtons(config.controls.buttons[this.model.controlsType]);
	};
	
	ControlsState.prototype.shutdown = function() {
		this.controls.remove();
		ControlsState._super.shutdown.call(this);
	};
	return ControlsState;
})();