/*
	<!-- FACEBOOK -->
    <div id="fb-root"></div>
	<!-- END FB script-->

	<!-- LIKE
		<div id="fbLike">
			<div class="fb-like" data-send="true" data-width="450" data-show-faces="true"></div>
		</div>
		-->
		<!-- share -->
<!--
		<div id="fbShare" class="fb-share-button" data-href="http://www.polyworksgames.com/games/keke2/" data-type="button_count"></div>	
-->
*/
Polyworks.FacebookAdapter = (function() {
	var POLYWORKS_APP_ID = '371443576332187';
	var _model = {
		rootEl: {
			el: 'div',
			attrs: {
				id: 'fb-root'
			}
		},
		apiInitParams: {
			appId: POLYWORKS_APP_ID,
			status: true,
			xfbml: true
		}
	};
	
	var adapter = {
		init: function(params) {
			_model = Polyworks.Utils.extend(_model, params);
			trace('FacebookAdapter/init, _model = ', _model);
			_addRootDiv();
			_addMethodToWindow();
			_loadApi(document, 'script', 'facebook-jssdk');
		}
	}
	
	function _addRootDiv() {
		var pops = _model.parentEl || document.getElementsByTagName('body')[0];
		var div = document.createElement(_model.rootEl.el);
		var attrs = _model.rootEl.attrs;
		for (var key in attrs) {
			div.setAttribute(key, attrs[key]);
		}
		pops.appendChild(div);
	}
	
	function _addMethodToWindow() {
		window.fbAsyncInit = function() {
			FB.init(_model.apiInitParams);
		};
	}
	
	function _loadApi(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js";
		fjs.parentNode.insertBefore(js, fjs);
	}

	return adapter;
}());

