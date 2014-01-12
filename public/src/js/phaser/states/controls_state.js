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
		// trace(_this);
		// trace(this);
		this.controls = new Polyworks.ControlButtons(config.controls.buttons[this.model.controlsType]);
		this.controls.init();
		// this.controls = new Polyworks.Collection(config.controls.buttons[this.model.controlsType], 'controlButtons');
		// var controlConsole = Polyworks.Game.phaser.add.group(null);
		// this.controls = new Polyworks.GroupCollection(config.controls.buttons[this.model.controlsType], 'controlButtons', 'null');
		// this.controls.init();
	};
	
	ControlsState.prototype.shutdown = function() {
		this.controls.remove();
		ControlsState._super.shutdown.call(this);
	};
	
	return ControlsState;
})();