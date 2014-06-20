PWG.SocialManager = (function() {

	var _model = {
		adapters: {}
	};
	
	var _urls = {
		FacebookAdapter: '../js/social/facebook_adapter.js',
		GoogleAdapter: '../js/social/google_adapter.js',
		TwitterAdapter: '../js/social/twitter_adapter.js'
	};

	var socialManager = {
		init: function(params) {
			_model = PWG.Utils.extend(_model, params);
			trace('SocialManager/init, _model = ', _model);
			_initParentEl();
			_addListeners();
			// this.hide();
			_loadSocialScripts();
		},
		show: function(elements) {
			trace('SocialManager/show, elements = ' + elements);
			PWG.Utils.each(elements,
				function(element) {
					trace('\telement = ' + element);
					if(_model.elementMap[element]) {
						trace('\t\tadapter = ' + _model.elementMap[element]);
						_model.adapters[_model.elementMap[element]].show(element);
					}
				},
				this
			);
		},
		hide: function(elements) {
			trace('SocialManager/hide, elements = ' + elements);
			PWG.Utils.each(elements,
				function(element) {
					trace('\telement = ' + element);
					if(_model.elementMap[element]) {
						_model.adapters[_model.elementMap[element]].hide(element);
					}
				},
				this
			);
		},

		showAll: function() {
			trace('SocialManager/showAll');
			for(var key in _model.adapters) {
				_model.adapters[key].showAll();
			}
		},
		hideAll: function() {
			trace('SocialManager/hideAll');
			for(var key in _model.adapters) {
				_model.adapters[key].hideAll();
			}
		},
		destroy: function() {
			_removeListeners();
			_destroyAdapters();
		}
	};
	
	function _initParentEl() {
		_model.parentEl = document.getElementById(_model.parentId) || document.getElementsByTagName('body')[0];
	}

	function _addListeners() {
		for(var key in _model.listeners) {
			PWG.EventCenter.bind(key, _eventResponder, this);
		}
	}

	function _removeListeners() {
		for(var key in _model.listeners) {
			PWG.EventCenter.unbind(key, _eventResponder, this);
		}
	}

	function _destroyAdapters() {
		for(var key in _model.adapters) {
			_model.adapters[key].destroy();
		}
	}

	function _eventResponder(event) {
		trace('SocialManager/_eventResponder event = ', event);
		var listener = _model.listeners[event.type];
		var match = listener.match;
		if(match) {
			trace('\tthere is a match');
			if(match.value === event.value) {
				trace('\t\tvalue matches the event value, calling: ' + match.action.method);
				PWG.SocialManager[match.action.method](match.action.value);
			} else if(listener.nonmatch) {
				trace('\t\tnonmatch calling: ' + listener.nonmatch.action.method);
				PWG.SocialManager[listener.nonmatch.action.method](listener.nonmatch.action.value);
			}
		} else {
			PWG.SocialManager[listener.action.method](listener.action.value);
		}
	}
	
	function _loadSocialScripts() {
		var loader = new PWG.Loader();
		var urls = {};

		PWG.Utils.each(_model.apis,
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
			var adapter = new PWG[key]({
				name: key,
				parentEl: _model.parentEl
			});
			_model.adapters[key] = adapter;
		}
	}
	
	function _allApisLoaded() {
		trace('SocialManager/_allAdaptersLoaded, adapters = ', _model.adapters);
		_initElementMap();
		if(_model.initialElements) {
			PWG.SocialManager.show(_model.initialElements);
		}
	}
	
	function _initElementMap() {
		_model.elementMap = {};
		for(var adapter in _model.adapters) {
			for(var element in _model.adapters[adapter].elements) {
				_model.elementMap[element] = adapter;
			}
		}
	}
	
	return socialManager;
}());