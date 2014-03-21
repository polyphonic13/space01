Polyworks.Storage = (function() {
	var _listeners = [];
	
	var storage = {
		get: function(prop) {
			if(_available) {
				return localStorage[prop];
			}
		},
		set: function(params) {
			if(_available) {
				for(var key in params) {
					if(params[key] instanceof Object || params[key] instanceof Array) {
						params[key] = JSON.stringify(params[key]);
					}
					trace('Storage, about to set ' + key + ', to value ' + params[key]);
					localStorage[key] = params[key];
				}
			}
		},
		remove: function(prop) {
			if(_available) {
				localStorage.removeItem(prop);
			}
		},
		destroy: function() {
			localStorage.clear();
		},
		addListener: function(listener) {
			if(_available) {
				var attachNotAdd = false;
				if(window.addEventListener) {
					window.addEventListener('storage', listener, false);
				} else {
					window.attachEvent('onstorage', listener);
					attachNotAdd = true;
				}
				_listeners.push(listener);
			}
		},
		removeListener: function(listener) {
			if(_available) {
				var length = _listeners.length;
				for(var i = 0; i < length; i++) {
					if(_listeners[i].listener === listener) {
						if(window.removeEventListener) {
							window.removeEventListener('storage', listener, false);
						} else {
							window.detachEvent('onstorage', listener);
						}
						_listeners = _listeners.splice(i, 1);
						break;
					}
				}
			}
		}, 
		shutdown: function() {
			var length = _listeners.length;
			for(var i = 0; i < length; i++) {
				if(window.removeEventListener) {
					window.removeEventListener('storage', listener, false);
				} else {
					window.detachEvent('onstorage', listener);
				}
			}
		}
	};
	
	function _supportsLocalStorage() {
		try {
			trace('STORAGE AVAILABLE');
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch(e) {
			trace('STORAGE NOT AVAILABLE');
			return false;
		}
	}
	var _available = _supportsLocalStorage();
	
	return storage;
}());
