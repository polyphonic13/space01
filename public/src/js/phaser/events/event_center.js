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
PWG.EventCenter = (function() {

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
		var list = _listeners[params.type];
		// trace('----- EventCenter/trigger, type = ' + params.type + ', list = ', list);
		if(list) {
			PWG.Utils.each(list,
				function(l) {
					// trace('\t\tl = ', l);
					if(l && l.callback) { // in case callback is destroyed during course of trigger
						l.callback.call(l.context, params);
					}
				},
				this
			);
		}
	};
	
	eventCenter.unbind = function(type, callback) {
		var listeners = _listeners[type];
		if(listeners) {
			PWG.Utils.each(listeners,
				function(l, i) {
					if(l && l.callback === callback) {
						listeners.splice(i, 1);
					}
				},
				this
			);
		}
	};

	eventCenter.reset = function() {
		// iterate thru _listeners object
		// for each type, remove all array elements
		// then delete type from _listeners
		PWG.Utils.each(_listeners,
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