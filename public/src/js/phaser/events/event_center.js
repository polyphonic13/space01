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
				for(var i = 0; i < _listeners[key].length; i++) {
					_listeners[key][i].call(this, params);
				}
				break;
			}
		}
	}
	
	return eventCenter;
}());