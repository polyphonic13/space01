PWG.ControlKey = (function() {
	PWG.Utils.inherits(ControlKey, PWG.Control);
	
	function ControlKey(params) {
		// trace('ControlKey/constructor, params = ');
		// trace(params);
		ControlKey._super.constructor.call(this, params);
	}
	
	ControlKey.prototype.begin = function() {
		// trace('ControlKey['+this.model.name+']/begin');
		// trace(this);
		this.key = PWGGame.phaser.input.keyboard.addKey(this.model.attrs.inputCode);
		this.key.onDown.add(this.inputDown, this);
		this.key.onUp.add(this.inputUp, this);
	};
	
	ControlKey.prototype.inputDown = function(params) {
		// trace('ControlKey['+this.model.inputCode+']/inputDown');
		this.inputPressed.call(this, { type: PWG.Events.CONTROL_PRESSED, value: params.keyCode });
	};
	
	ControlKey.prototype.inputUp = function(params) {
		// trace('ControlKey['+this.model.inputCode+']/inputUp');
		this.inputReleased.call(this, { type: PWG.Events.CONTROL_RELEASED, value: params.keyCode });
	};

	return ControlKey;
})();