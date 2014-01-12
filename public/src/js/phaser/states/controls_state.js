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
		trace('ControlsState/createControls, this.model = ');
		trace(this.model);
		this.controls = new Polyworks.ControlButtons(config.controls[this.model.controlsType]);
	};
	
	ControlsState.prototype.shutdown = function() {
		trace('ControlsState['+this.id+']/shutdown, this.elements.length = ');
		trace(this.controls);
		/*
		for(var key in this.controls) {
			trace('\telements['+key+'] = ');
			trace(this.elements[key]);
			if(this.elements[key].destroy) {
				this.elements[key].destroy();
			}
		}
		*/
		this.controls.remove();
		ControlsState._super.shutdown.call(this);
	};
	return ControlsState;
})();