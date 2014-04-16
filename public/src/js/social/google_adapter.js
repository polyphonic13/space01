/*
<!-- Place this tag where you want the +1 button to render. -->
<div class="g-plusone" data-size="small" data-href="http://www.polyworksgames.com/games/keke2/"></div>

*/
Polyworks.GoogleAdapter = (function() {
	Polyworks.Utils.inherits(GoogleAdapter, Polyworks.SocialAdapter);
	
	var _defaults = {
		elements: [
		{
			el: 'div',
			attrs: {
				'data-href': 'http://www.polyworksgames.com/games/keke2/',
				'data-size': 'small'
			},
			className: 'g-plusone',
			style: {
				padding: '2px',
				position: 'absolute'
			}
		}],
		api: {
			url: 'https://apis.google.com/js/platform.js',
			id: 'google-jssdk'
		}
	};

	function GoogleAdapter(params) {
		params = Polyworks.Utils.extend(_defaults, params);
		GoogleAdapter._super.constructor.call(this, params);
		this.addElements();
		this.loadApi(this.model.api.url, this.model.api.id);
	}
	
	return GoogleAdapter;
}());
