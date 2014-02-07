/*
	_listeners: {
		type: [
		{
			callback: cb,
			context: ctx
		}
		]
	}
*/
Polyworks.EventCenter = (function() {

	var eventCenter = {};
	var _listeners; 
	
	eventCenter.begin = function() {
		_listeners = {};
	};
	
	eventCenter.bind = function(type, callback, context) {
		var ctx = context || this;
		// trace('EventCenter/bind, type = ' + type);
		// trace(callback);
		if(!_listeners[type]) {
			_listeners[type] = [];
		}
		_listeners[type].push({ callback: callback, context: ctx });
		// trace('_listeners['+type+'] now = ');
		// trace(_listeners[type]);
	};
	
	eventCenter.trigger = function(params) {
		// trace('EventCenter/trigger, params = ');
		// trace(params);
		var list = _listeners[params.type];
		if(list) {
			Utils.each(list,
				function(l) {
					l.callback.call(l.context, params);
				},
				this
			);
		}
	};
	
	eventCenter.unbind = function(type, callback) {
		var removed = false;
		var listeners = _listeners[type];
		if(listeners) {
			Utils.each(listeners,
				function(l, i) {
					if(l.callback === callback) {
						listeners.splice(i, 1);
					}
				},
				this
			);
		}
	};

	eventCenter.reset = function() {
		// iterate thru _listeners object
		// for each type, set type array to [] and delete
		// type from _listeners
		Utils.each(_listeners,
			function(l, key) {
				l = [];
				delete _listeners[key];
			},
			this
		);
		// set entire _listeners array to []
		_listeners = [];
	};
	
	return eventCenter;
}());