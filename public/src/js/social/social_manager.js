Polyworks.SocialManager = (function() {

	var _model = {
		adapters: []
	};
	
	var _urls = {
		FacebookAdapter: '../js/social/facebook_adapter.js',
		GoogleAdapter: '../js/social/google_adapter.js',
		TwitterAdapter: '../js/social/twitter_adapter.js'
	};

	var socialManager = {
		init: function(params) {
			_model = Polyworks.Utils.extend(_model, params);
			trace('SocialManager/init, _model = ', _model);
			_initParentEl();
			_addListeners();
			// this.hide();
			_loadSocialScripts();
		},
		show: function() {
			trace('SocialManager/show');
			if(_model.parentEl) {
				_model.parentEl.style.display = 'block';
			}
		},
		hide: function() {
			trace('SocialManager/hide');
			if(_model.parentEl) {
				_model.parentEl.style.display = 'none';
			}
		}
	};
	
	function _initParentEl() {
		_model.parentEl = document.getElementById(_model.parentId) || document.getElementsByTagName('body')[0];
	}

	function _addListeners() {
		for(var key in _model.listeners) {
			Polyworks.EventCenter.bind(key, _eventResponder, this);
		}
		// Polyworks.EventCenter.bind(Polyworks.Events.CHANGE_STATE, _eventResponder, this);
	}

	function _eventResponder(event) {
		trace('SocialManager/_eventResponder event = ', event);
		var listener = _model.listeners[event.type];
		var match = listener.match;
		if(match) {
			trace('\tthere is a match');
			if(match.value === event.value) {
				trace('\t\tvalue matches the event value, calling: ' + match.action.method);
				Polyworks.SocialManager[match.action.method](match.action.value);
			} else if(listener.nonmatch) {
				trace('\t\tnonmatch calling: ' + listener.nonmatch.action.method);
				Polyworks.SocialManager[listener.nonmatch.action.method](listener.nonmatch.action.value);
			}
		} else {
			Polyworks.SocialManager[listener.action.method](listener.action.value);
		}
	}
	
	function _loadSocialScripts() {
		var loader = new Polyworks.Loader();
		var urls = {};

		Polyworks.Utils.each(_model.apis,
			function(api, idx) {
				if(_urls[api]) {
					urls[api] = _urls[api];
				}
			},
			this
		);

		trace('SocialManager/_loadSocialScripts, urls = ', urls);
		loader.batchLoadJS(urls, _apiLoaded, _allApisLoaded, this);
	}
	
	function _apiLoaded(url, success, key) {
		trace('SocialManager/_adapterLoaded, key = ' + key + ', success = ' + success);
		if(success) {
			var adapter = new Polyworks[key]({
				parentEl: _model.parentEl
			});
			_model.adapters.push(adapter);
		}
	}
	
	function _allApisLoaded() {
		trace('SocialManager/_allAdaptersLoaded, adapters = ', _model.adapters);
	}
	
	return socialManager;
}());