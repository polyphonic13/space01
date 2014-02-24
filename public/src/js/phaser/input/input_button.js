Polyworks.InputButton = (function() {
	Utils.inherits(InputButton, Phaser.Button);
	
	var _this;
	function InputButton(params) {
		// trace('InputButton/constructor, params = ');
		// trace(params);
		_this = this;
		this.model = new Polyworks.Model(params);
		// trace('\tinput button model = ');
		// trace(this.model);
		var attrs = this.model.attrs;
		var frames = attrs.frames;
		if(frames) {
			// trace('InputButton['+this.model.name+'] has frames: ' + frames);
			InputButton._super.constructor.call(this, params.game, attrs.x, attrs.y, attrs.img, null, this, frames[0], frames[1], frames[2]);
		} else {
			InputButton._super.constructor.call(this, params.game, attrs.x, attrs.y, attrs.img, null, this);
		}
	};
	
	InputButton.prototype.begin = function() {
		var start = this.model.attrs.start;
		this.x = start.x;
		this.y = start.y;
		// trace('InputButton['+this.model.img+']/begin, start x/y = ' + start.x + '/' + start.y);
		if(this.model.width) {
			this.width = this.model.width;
		}
		if(this.model.height) {
			this.height = this.model.height;
		}
		this.pressed = false;
		this.addListeners();
		// trace('InputButton, end of begin');
		// trace(this);
	};
	
	InputButton.prototype.addListeners = function() {
		// trace('InputButton['+this.model.img+']/addListeners, button = ');
		// trace(this);
		var ctx = this;
		this.events.onInputDown.add(function(event, pointer) {
			this.inputDown(event, pointer, ctx);
		}, this);
		this.events.onInputUp.add(function(event, pointer) {
			this.inputUp(event, pointer, ctx);
		}, this);
	};
	
	InputButton.prototype.inputDown = function(event, pointer, ctx) {
		// trace('InputButton['+this.model.name+']/inputDown');
		// trace(event);
		// trace('\tpointer = ');
		// trace(pointer);
		// trace('\tcontext = ');
		// trace(ctx);
		ctx.inputPressed.call(ctx, { type: Polyworks.Events.CONTROL_PRESSED, value: ctx.model.attrs.inputCode });
		ctx.pressed = true;
	};
	
	InputButton.prototype.inputUp = function(event, pointer, ctx) {
		// trace('InputButton['+this.model.name+']/inputUp');
		ctx.inputReleased.call(ctx, { type: Polyworks.Events.CONTROL_RELEASED, value: ctx.model.attrs.inputCode });
		ctx.pressed = false;
	};
	
	InputButton.prototype.inputPressed = function(params) {
		// trace('InputButton/inputPressed, value = ' + params.value + ', type = ' + params.type);
		// trace(this);
		var event;
		var events = this.model.attrs.events;
		// trace(events);
		if(events && events.pressed) {
			// trace('\tabout to dispatch ' + events.pressed.type);
			event = { type: events.pressed.type, value: events.pressed.value };
		} else {
			event = { type: params.type, value: params.value }
		}
		// trace(event);
		_trigger(event);
	};
	
	InputButton.prototype.inputReleased = function(params) {
		// trace('InputButton/inputReleased, value = ' + params.value + ', type = ' + params.type);
		var events = this.model.events;
		if(events && events.released) {
			_trigger({ type: events.released.type, value: events.released.value });
		} else {
			_trigger({ type: params.type, value: params.value });
		}
	};
	
	_trigger = function(event) {
		// trace('InputButton/trigger, event = ');
		// trace(event);
		Polyworks.EventCenter.trigger(event);
	};
	
	return InputButton;
})();