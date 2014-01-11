Polyworks.EventCenter = (function() {

	var eventCenter = {};
	var _listeners; 
	
	eventCenter.init = function() {
		_listeners = {};
	};
	
	eventCenter.bind = function(type, callback) {
		trace('EventCenter/bind, type = ' + type);
		if(!_listeners[type]) {
			_listeners[type] = [];
		}
		_listeners[type].push(callback);
	};
	
	eventCenter.trigger = function(params) {
		for(var key in _listeners) {
			if(key === params.type) {
				trace('_listeners['+key+']. length = ' + _listeners[key].length);
				trace(_listeners[key]);
				if(_listeners[key]) {
					for(var i = 0; i < _listeners[key].length; i++) {
						_listeners[key][i].call(this, params);
					}
				}
			}
		}
	};
	
	eventCenter.unbind = function(type, callback) {
		if(_listeners[key]) {
			for(var i = 0; i < _listeners[key].length; i++) {
				if(_listeners[key][i] === callback) {
					_listeners[key][i] = null;
					break;
				}
			}
		}
	};
	
	eventCenter.reset = function() {
		_listeners = [];
		// for(var key in _listeners) {
		// 	delete _listeners[key];
		// }
		// _listeners = null;
	};
	
	return eventCenter;
}());