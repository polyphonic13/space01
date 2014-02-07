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
		for(var key in _listeners) {
			if(key === params.type) {
				// trace('\t_listeners['+key+']. length = ' + _listeners[key].length);
				// trace(_listeners[key]);
				if(_listeners[key]) {
					for(var i = 0; i < _listeners[key].length; i++) {
						// trace('\t\t_listeners['+key+']['+i+'] = ');
						// trace(_listeners[key][i]);
						var callback = _listeners[key][i].callback;
						var context = _listeners[key][i].context;
						callback.call(context, params);
					}
				}
			}
		}
	};
	
	eventCenter.unbind = function(type, callback) {
		var removed = false;
		var listeners = _listeners[type];
		if(listeners) {
			var length = listeners.length;
			for(var i = 0; i < length; i++) {
				if(listeners[i] === callback) {
					listeners.splice(i, 1);
					break;
				}
			}
		}
	};

	eventCenter.reset = function() {
		_listeners = [];
	};
	
	return eventCenter;
}());