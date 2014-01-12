Polyworks.Control = (function() {
	Utils.inherits(Control, Polyworks.Base);
	
	var _this;
	
	function Control(params) {
		_this = this;
		Control._super.constructor.call(this, params);
	}
	
	Control.prototype.inputPressed = function(params) {
		// trace('Control/inputPressed, value = ' + params.value + ', type = ' + params.type);
		// trace(this.model);
		var event;
		var events = this.model.events;
		// trace(events);
		if(events && events.pressed) {
			// trace('\tabout to dispatch ' + events.pressed.type);
			event = { type: events.pressed.type, value: events.pressed.value };
		} else {
			event = { type: params.type, value: params.value }
		}
		this.trigger(event);
	};
	
	Control.prototype.inputReleased = function(params) {
		// trace('Control/inputReleased, value = ' + params.value + ', type = ' + params.type);
		var events = this.model.events;
		if(events && events.released) {
			this.trigger({ type: events.released.type, value: events.released.value });
		} else {
			this.trigger({ type: params.type, value: params.value });
		}
	};
	
	Control.prototype.trigger = function(event) {
		// trace('Control/trigger, event = ');
		// trace(event);
		Polyworks.EventCenter.trigger(event);
	};
	
	return Control;
})();