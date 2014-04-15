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
	Polyworks.Utils.inherits(FacebookAdapter, Polyworks.SocialAdapter);

	var POLYWORKS_APP_ID = '371443576332187';
	var _defaults = {
		rootEl: {
			el: 'div',
			attrs: {
				id: 'fb-root'
			}
		},
		adapterInitParams: {
			appId: POLYWORKS_APP_ID,
			status: true,
			xfbml: true
		},
		api: {
			url: "//connect.facebook.net/en_US/all.js",
			id: 'facebook-jssdk'
		}
	};
	
	function FacebookAdapter(params) {
		params = Polyworks.Utils.extend(_defaults, params);
		FacebookAdapter._super.constructor.call(this, params);
		this.addRootElement();
		this.addMethodToWindow();
		this.loadApi(this.model.api.url, this.model.api.id);
	}
	
	FacebookAdapter.prototype.addMethodToWindow = function() {
		var initParams = this.model.adapterInitParams;
		window.fbAsyncInit = function() {
			FB.init(initParams);
		};
	};
	
	return FacebookAdapter;
})();

