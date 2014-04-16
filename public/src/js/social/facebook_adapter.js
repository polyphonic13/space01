/*
	<!-- FACEBOOK -->
    <div id='fb-root'></div>
	<!-- END FB script-->

	<!-- LIKE
		<div id='fbLike'>
			<div class='fb-like' data-send='true' data-width='450' data-show-faces='true'></div>
<div class='fb-like' data-href='https://developers.facebook.com/docs/plugins/' data-layout='button' data-action='like' data-show-faces='true' data-share='true'></div>'
		</div>
		-->
		<!-- share -->
<!--
		<div id='fbShare' class='fb-share-button' data-href='http://www.polyworksgames.com/games/keke2/' data-type='button_count'></div>	
-->
*/
Polyworks.FacebookAdapter = (function() {
	Polyworks.Utils.inherits(FacebookAdapter, Polyworks.SocialAdapter);

	var POLYWORKS_APP_ID = '371443576332187';
	var POLYWORKS_SHARE_URL = 'http://www.polyworksgames.com/games/keke2/';
	var POLYWORKS_LIKE_URL = 'http://www.polyworksgames.com/games/keke2/';
	
	var _defaults = {
		elements: [
		{
			el: 'div',
			attrs: {
				id: 'fb-root'
			}
		},
		{
			el: 'div',
			attrs: {
				'data-href': POLYWORKS_LIKE_URL,
				'data-send': true,
				'data-width': 450,
				'data-layout': 'button',
				'data-show-faces': false,
				'data-share': false
			},
			className: 'fb-like',
			style: {
				// padding: '2px',
				// position: 'absolute'
			}
		// },
		// {
		// 	el: 'div',
		// 	attrs: {
		// 		id: 'fbShare',
		// 		'data-href': POLYWORKS_SHARE_URL,
		// 		'data-type': 'button_count'
		// 	},
		// 	className: 'fb-share-button',
		// 	style: {
		// 		padding: '2px',
		// 		position: 'absolute'
		// 	}
		}
		],
		adapterInitParams: {
			appId: POLYWORKS_APP_ID,
			status: true,
			xfbml: true
		},
		api: {
			url: '//connect.facebook.net/en_US/all.js',
			id: 'facebook-jssdk'
		}
	};
	
	function FacebookAdapter(params) {
		params = Polyworks.Utils.extend(_defaults, params);
		FacebookAdapter._super.constructor.call(this, params);
		this.addElements();
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

