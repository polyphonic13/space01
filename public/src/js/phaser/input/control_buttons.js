Polyworks.ControlButtons = (function() {
	Utils.inherits(ControlButtons, Polyworks.GroupCollection);
	
	var _this = this;
	function ControlButtons(params) {
		_this = this;
		// params.collection = this;
		this.name = params.name;
		this.model = new Polyworks.Model(params);
		ControlButtons._super.constructor.call(this, params);
	}
	
	ControlButtons.prototype.begin = function() {
		trace('ControlButtons/begin');
		var ctrls = PolyworksGame.get('controls');
		this.model.attrs = ctrls.buttons[this.model.type];
		// trace(ctrls);
		// trace(this.model.attrs);
		ControlButtons._super.begin.call(this);
	};
	
	return ControlButtons;
})();