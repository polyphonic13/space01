Polyworks.ControlsState = (function() {
	Utils.inherits(ControlsState, Polyworks.State); 
	
	var _this;
	function ControlsState(params) {
		_this = this;
		ControlsState._super.constructor.call(this, params); 
	}
	
	ControlsState.prototype.createState = function() {
		ControlsState._super.createState.call(this);
	};

	ControlsState.prototype.createControls = function() {
		trace('ControlsState/createControls, this.this = ');
		trace(this);
		var ctrls = PolyworksGame.get('controls');
		var attrs = ctrls.buttons[this.model.name];

		this.addChildren(this.game, this.model.group, attrs);
		this.controls = this.getItemByName('controls');
		// this.controls = new Polyworks.ControlButtons(config.controls.buttons[this.model.controlsType]);
		// this.controls.begin();
		// this.controls = new Polyworks.Collection(config.controls.buttons[this.model.controlsType], 'controlButtons');
		// var controlConsole = PolyworksGame.phaser.add.group(null);
		// this.controls = new Polyworks.GroupCollection(config.controls.buttons[this.model.controlsType], 'controlButtons', 'null');
		// this.controls.begin();
	};
	
	ControlsState.prototype.shutdown = function() {
		if(this.controls) {
			this.controls.remove();
		}
		ControlsState._super.shutdown.call(this);
	};
	
	return ControlsState;
})();