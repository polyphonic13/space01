Polyworks.InputButton = (function() {
	Utils.inherits(InputButton, Polyworks.Control);
	
	var _this;
	function InputButton(params, id) {
		// trace('InputButton/constructor, params = ');
		// trace(params);
		_this = this;
		InputButton._super.constructor.call(this, params, id);
	};
	
	InputButton.prototype.init = function() {
		var start = this.model.start;
		// trace('InputButton['+this.model.img+']/init, start x/y = ' + start.x + '/' + start.y);
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
	
	InputButton.prototype.addListeners = function() {
		// trace('InputButton['+this.model.img+']/addListeners, button = ');
		// trace(this.button);
		this.button.events.onInputDown.add(function(event, pointer) {
			this.inputDown(event, pointer);
		}, this);
		this.button.events.onInputUp.add(function(event, pointer) {
			this.inputUp(event, pointer);
		}, this);
	};
	
	InputButton.prototype.destroy = function() {
		this.button.destroy();
	};
	
	return InputButton;
})();