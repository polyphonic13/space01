Polyworks.ControlKey = (function() {
	Utils.inherits(ControlKey, Polyworks.Control);
	
	function ControlKey(params) {
		// trace('ControlKey/constructor, params = ');
		// trace(params);
		ControlKey._super.constructor.call(this, params);
	}
	
	ControlKey.prototype.init = function() {
		this.key = Polyworks.Game.phaser.input.keyboard.addKey(this.model.controlCode);
		this.key.onDown.add(this.inputDown, this);
		this.key.onUp.add(this.inputUp, this);
	};
	
	ControlKey.prototype.inputDown = function(params) {
		// trace('ControlKey['+this.model.controlCode+']/inputDown');
		this.controlPressed.call(this, { controlCode: params.keyCode });
	};
	
	ControlKey.prototype.inputUp = function(params) {
		// trace('ControlKey['+this.model.controlCode+']/inputUp');
		this.controlReleased.call(this, { controlCode: params.keyCode });
	};

	return ControlKey;
})();