Polyworks.ControlKey = (function() {
	Utils.inherits(ControlKey, Polyworks.Control);
	
	function ControlKey(params) {
		// trace('ControlKey/constructor, params = ');
		// trace(params);
		ControlKey._super.constructor.call(this, params);
	}
	
	ControlKey.prototype.init = function() {
		this.key = Polyworks.Game.phaser.input.keyboard.addKey(this.model.controlCode);
		this.key.onDown.add(this.controlPressed, this);
		this.key.onUp.add(this.controlReleased, this);
	};
	
	return ControlKey;
})();