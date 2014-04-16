/*
https://about.twitter.com/resources/buttons
<!-- twitter follow -->
<!--
<a id="twFollow" href="https://twitter.com/KekePolyworks" class="twitter-follow-button" data-show-count="false">Follow @KekePolyworks</a>
-->
<a href="https://twitter.com/KekePolyworks" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false">Follow @KekePolyworks</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

// TWEET: 
<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://polyworksgames.com/games/keke2/" data-via="KekePolyworks" data-count="none">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

*/
Polyworks.TwitterAdapter = (function() {
	Polyworks.Utils.inherits(TwitterAdapter, Polyworks.SocialAdapter);

	var POLYWORKS_FOLLOW_URL = 'https://twitter.com/KekePolyworks';
	var POLYWORKS_TWEET_URL = 'https://twitter.com/share';
	var POLYWORKS_TWEET_DESTINATION_URL = 'http://polworksgames.com/games/keke2/';
	
	var _defaults = {
		elements: [
		{
			el: 'a',
			attrs: {
				'id': 'twFollow',
				'href': POLYWORKS_FOLLOW_URL,
				'data-show-count': false,
				'data-show-screen-name': false
			},
			className: 'twitter-follow-button'
		},
		{
			el: 'a',
			attrs: {
				'id': 'twFollow',
				'href': POLYWORKS_TWEET_URL,
				'data-url': POLYWORKS_TWEET_DESTINATION_URL,
				'data-via': 'KekePolyworks',
				'data-count': 'none',
				'data-show-screen-name': false
			},
			className: 'twitter-share-button'
		}],
		api: {
			url: '//platform.twitter.com/widgets.js',
			id: 'twitter-wjs'
		}
	};

	function TwitterAdapter(params) {
		params = Polyworks.Utils.extend(_defaults, params);
		TwitterAdapter._super.constructor.call(this, params);
		this.addElements();
		this.loadApi(this.model.api.url, this.model.api.id);
	}

	return TwitterAdapter;
}());
