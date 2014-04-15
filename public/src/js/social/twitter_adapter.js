/*
<!-- twitter follow -->
<!--
<a id="twFollow" href="https://twitter.com/KekePolyworks" class="twitter-follow-button" data-show-count="false">Follow @KekePolyworks</a>
-->

*/
Polyworks.TwitterAdapter = (function() {
	Polyworks.Utils.inherits(TwitterAdapter, Polyworks.SocialAdapter);

	var _defaults = {
		rootEl: {
			el: 'a',
			attrs: {
				id: 'twFollow',
				href: 'https://twitter.com/KekePolyworks',
				"data-show-count": false
			},
			className: 'twitter-follow-button'
		},
		api: {
			url: '//platform.twitter.com/widgets.js',
			id: 'twitter-wjs'
		}
	};

	function TwitterAdapter(params) {
		params = Polyworks.Utils.extend(_defaults, params);
		TwitterAdapter._super.constructor.call(this, params);
		this.addRootDiv();
		this.loadApi(this.model.api.url, this.model.api.id);
	}

	return TwitterAdapter;
}());
