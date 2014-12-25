PWG.ControlButtons = (function() {
	PWG.Utils.inherits(ControlButtons, PWG.GroupCollection);
	
	function ControlButtons(params) {
		ControlButtons._super.constructor.call(this, params);
	}
	
	ControlButtons.prototype.begin = function() {
		var ctrls = PolyworksGame.get('controls');
		this.model.attrs = ctrls.buttons[this.model.type];

		ControlButtons._super.begin.call(this);

	};
	
	ControlButtons.prototype.destroy = function() {
		PWG.Utils.each(this.model.collection,
			function(c) {
				c.destroy();
			},
			this
		);
	};
	
	return ControlButtons;
})();