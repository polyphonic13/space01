Polyworks.ControlButtons = (function() {
	Polyworks.Utils.inherits(ControlButtons, Polyworks.GroupCollection);
	
	var _this = this;
	function ControlButtons(params) {
		_this = this;
		// params.collection = this;
		this.name = params.name;
		this.model = new Polyworks.Model(params);
		ControlButtons._super.constructor.call(this, params);
	}
	
	ControlButtons.prototype.begin = function() {
		// trace('ControlButtons/begin');
		var ctrls = PolyworksGame.get('controls');
		this.model.attrs = ctrls.buttons[this.model.type];
		// trace(ctrls);
		// trace(this.model.attrs);
		ControlButtons._super.begin.call(this);
		// trace('control buttons post begin, collection = ');
		// trace(this.model.collection);
	};
	
	ControlButtons.prototype.destroy = function() {
		// trace('ControlButtons['+this.model.name+']/destroy');
		// trace(this);
//		ControlButtons._super.destroy.call(this);
		Polyworks.Utils.each(this.model.collection,
			function(c) {
				c.destroy();
			},
			this
		);
	};
	
	return ControlButtons;
})();