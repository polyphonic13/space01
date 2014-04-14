Polyworks.SocialManager = (function() {

	var _model = {};
	var _urls = {
		facebook: '../js/social/facebook.js',
		gplus: '../js/social/gplus.js',
		twitter: '../js/social/twitter.js'
	};

	var socialManager = {
		init: function(params) {
			_model = Polyworks.Utils.extend(_model, params);
			trace('SocialManager/init, _model = ', _model);
			_initElements();
			_loadSocialScripts();
		}
	};
	
	function _initElements() {
		
	}
	
	function _loadSocialScripts() {
		var loader = new Polyworks.Loader();
		var urls = {};
		var apis = _model.apis;
		var length = apis.length;

		for(var i = 0; i < length; i++) {
			urls[apis[i]] = _urls[apis[i]];
		}
		trace('SocialManager/_loadSocialScripts, urls = ', urls);
		loader.batchLoadJS(urls, _apiLoaded, _allApisLoaded, this);
	}
	
	function _apiLoaded(url, success, key) {
		trace('SocialManager/_apiLoaded, key = ' + key + ', success = ' + success);
	}
	
	function _allApisLoaded() {
		trace('SocialManager/_allApisLoaded');
	}
	
	return socialManager;
}());