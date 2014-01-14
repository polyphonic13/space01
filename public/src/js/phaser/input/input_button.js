Polyworks.InputButton = (function() {
	
	var _this;
	function InputButton(params) {
		trace('InputButton/constructor, params = ');
		trace(params);
		_this = this;
		this.model = new Polyworks.Model(params);
		trace('\tinput button model = ');
		trace(this.model);
		var attrs = this.model.attrs;
		Phaser.Button.call(this, params.game, attrs.x, attrs.y, attrs.img, null, this);
	};
	
	InputButton.prototype = Object.create(Phaser.Button.prototype);
	InputButton.prototype.constructor = Polyworks.InputButton;

	InputButton.prototype.begin = function() {
		var start = this.model.start;
		// trace('InputButton['+this.model.img+']/begin, start x/y = ' + start.x + '/' + start.y);
	    // this = PolyworksGame.phaser.add.button(start.x, start.y, this.model.img, null, this);
		if(this.model.width) {
			this.width = this.model.width;
		}
		if(this.model.height) {
			this.height = this.model.height;
		}
		this.pressed = false;
		this.addListeners();

	};
	
	InputButton.prototype.addListeners = function() {
		// trace('InputButton['+this.model.img+']/addListeners, button = ');
		// trace(this);
		this.events.onInputDown.add(function(event, pointer) {
			this.inputDown(event, pointer);
		}, this);
		this.events.onInputUp.add(function(event, pointer) {
			this.inputUp(event, pointer);
		}, this);
	};
	
	InputButton.prototype.inputDown = function(event, pointer) {
		// trace('InputButton['+this.model.inputCode+']/inputDown');
		this.inputPressed.call(this, { type: Polyworks.Events.CONTROL_PRESSED, value: this.model.inputCode });
		this.pressed = true;
	};
	
	InputButton.prototype.inputUp = function(event, pointer) {
		// trace('InputButton['+this.model.inputCode+']/inputUp');
		this.inputReleased.call(this, { type: Polyworks.Events.CONTROL_RELEASED, value: this.model.inputCode });
		this.pressed = false;
	};
	
	return InputButton;
})();