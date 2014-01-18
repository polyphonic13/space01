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
		trace('post super begin: ');
		trace(this);
		/*
		var button;
		var controlConsole = PolyworksGame.phaser.add.group(null);
		for(var i = 0; i < this.collection.length; i++) {
			button = this.collection[i].button;
			controlConsole.add(button);
		}
		*/
	};
	
	// ControlButtons.prototype.remove = function() {
	// 	for(var i = 0; i < this.collection.length; i++) {
	// 		this.collection[i].destroy();
	// 	}
	// };
	
	return ControlButtons;
})();