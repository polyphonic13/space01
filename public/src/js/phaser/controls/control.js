Polyworks.Control = (function() {
	Utils.inherits(Control, Polyworks.Base);
	
	var _this;
	
	function Control(params) {
		_this = this;
		Control._super.constructor.call(this, params);
	}
	
	Control.prototype.controlPressed = function(params) {
		// trace('Control/controlPressed, controlCode = ' + params.controlCode);
		var event;
		var events = _this.model.events;
		if(events && events.pressed) {
			event = { type: events.pressed.type, value: events.pressed.value };
		} else {
			event = { type: Polyworks.Events.CONTROL_PRESSED, value: params.controlCode }
		}
		_this.trigger(event);
	};
	
	Control.prototype.controlReleased = function(params) {
		// trace('Control/controlReleased, controlCode = ' + params.controlCode);
		var event;
		var events = _this.model.events;
		if(events && events.released) {
			event = { type: events.released.type, value: events.released.value };
		} else {
			event = { type: Polyworks.Events.CONTROL_RELEASED, value: params.controlCode }
		}
		_this.trigger(event);
	};
	
	Control.prototype.trigger = function(event) {
		Polyworks.EventCenter.trigger(event);
	};
	
	return Control;
})();