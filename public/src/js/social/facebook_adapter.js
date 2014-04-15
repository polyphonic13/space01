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
	var _defaults = {
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
	
	function FacebookAdapter(params) {
		params = Polyworks.Utils.extend(_defaults, params);
		FacebookAdapter._super.constructor.call(this, params);
	}
	
	var adapter = {
		init: function(params) {
			this.model = Polyworks.Utils.extend(this.model, params);
			_addRootDiv();
			_addMethodToWindow();
			_loadApi(document, 'script', 'facebook-jssdk');
		}
	}
	
	function _addRootDiv() {
		var pops = this.model.parentEl || document.getElementsByTagName('body')[0];
		var div = document.createElement(this.model.rootEl.el);
		var attrs = this.model.rootEl.attrs;
		for (var key in attrs) {
			div.setAttribute(key, attrs[key]);
		}
		pops.appendChild(div);
	}
	
	function _addMethodToWindow() {
		window.fbAsyncInit = function() {
			FB.init(this.model.apiInitParams);
		};
	}
	
	function _loadApi(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js";
		fjs.parentNode.insertBefore(js, fjs);
	}

	return FacebookAdapter;
})();

