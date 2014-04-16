/*
<!-- twitter follow -->
<!--
<a id="twFollow" href="https://twitter.com/KekePolyworks" class="twitter-follow-button" data-show-count="false">Follow @KekePolyworks</a>
-->

*/
Polyworks.TwitterAdapter = (function() {
	Polyworks.Utils.inherits(TwitterAdapter, Polyworks.SocialAdapter);

	var POLYWORKS_FOLLOW_URL = 'https://twitter.com/KekePolyworks';
	
	var _defaults = {
		elements: [
		{
			el: 'a',
			attrs: {
				id: 'twFollow',
				href: POLYWORKS_FOLLOW_URL,
				'data-show-count': false
			},
			className: 'twitter-follow-button',
			style: {
				padding: '2px',
				position: 'absolute'
			}
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
