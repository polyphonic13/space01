Polyworks.EventCenter = (function() {

	var eventCenter = {};
	var _listeners; 
	
	eventCenter.begin = function() {
		_listeners = {};
	};
	
	eventCenter.bind = function(type, callback, context) {
		var ctx = context || this;
		// trace('EventCenter/bind, type = ' + type);
		if(!_listeners[type]) {
			_listeners[type] = [];
		}
		_listeners[type].push({ func: callback, ctx: ctx });
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
						var func = _listeners[key][i].func;
						var ctx = _listeners[key][i].ctx;
						ctx[func].call(this, params);
						// _listeners[key][i].call(this, params);
					}
				}
			}
		}
	};
	
	eventCenter.unbind = function(type, callback) {
		if(_listeners[type]) {
			for(var i = 0; i < _listeners[type].length; i++) {
				if(_listeners[type][i] === callback) {
					_listeners[type][i] = null;
				}
			}
			_listeners[type] = Utils.reindexArray(_listeners[type]);
			if(_listeners[type].length === 0) {
				delete _listeners[type];
			}
		}
	};
	
	eventCenter.reset = function() {
		_listeners = [];
	};
	
	return eventCenter;
}());