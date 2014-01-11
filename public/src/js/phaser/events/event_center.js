Polyworks.EventCenter = (function() {

	var eventCenter = {};
	var _listeners = {}; 
	
	eventCenter.bind = function(event, callback) {
		if(!_listeners[event]) {
			_listeners[event] = [];
		}
		_listeners[event].push(callback);
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