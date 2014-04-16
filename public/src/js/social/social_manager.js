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
			_loadSocialScripts();
		}
	};
	
	function _initParentEl() {
		_model.parentEl = document.getElementById(_model.parentId) || document.getElementsByTagName('body')[0];
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
		// _initAdapters();
	}
	
	function _initAdapters() {
		Polyworks.Utils.each(_model.adapters,
			function(adapter) {
				trace('calling init on ', adapter);
				adapter.init();
			},
			this
		);
	}
	
	return socialManager;
}());