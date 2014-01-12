Polyworks.ControlButton = (function() {
	Utils.inherits(ControlButton, Polyworks.Control);
	
	var _this;
	function ControlButton(params, id) {
		// trace('ControlButton/constructor, params = ');
		// trace(params);
		_this = this;
		ControlButton._super.constructor.call(this, params, id);
	};
	
	ControlButton.prototype.init = function() {
		var start = this.model.start;
		// trace('ControlButton['+this.model.img+']/init, start x/y = ' + start.x + '/' + start.y);
	    this.button = Polyworks.Game.phaser.add.button(start.x, start.y, this.model.img, null, this);
		if(this.model.width) {
			this.button.width = this.model.width;
		}
		if(this.model.height) {
			this.button.height = this.model.height;
		}
		this.pressed = false;
		this.addListeners();

	};
	
	ControlButton.prototype.addListeners = function() {
		// trace('ControlButton['+this.model.img+']/addListeners, button = ');
		// trace(this.button);
		this.button.events.onInputDown.add(function(event, pointer) {
			this.inputDown(event, pointer);
		}, this);
		this.button.events.onInputUp.add(function(event, pointer) {
			this.inputUp(event, pointer);
		}, this);
	};
	
	ControlButton.prototype.inputDown = function(event, pointer) {
		// trace('ControlButton['+this.model.controlCode+']/inputDown');
		this.controlPressed.call(this, { controlCode: this.model.controlCode });
	};
	
	ControlButton.prototype.inputUp = function(event, pointer) {
		// trace('ControlButton['+this.model.controlCode+']/inputUp');
		this.controlReleased.call(this, { controlCode: this.model.controlCode });
	};
	
	ControlButton.prototype.destroy = function() {
		this.button.destroy();
	};
	
	return ControlButton;
})();