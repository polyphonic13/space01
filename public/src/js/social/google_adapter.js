/*
https://developers.google.com/+/web/+1button/
<!-- Place this tag where you want the +1 button to render. -->
<div class="g-plusone" data-size="small" data-href="http://www.polyworksgames.com/games/keke2/"></div>

<!-- Place this tag where you want the +1 button to render. -->
<div class="g-plusone" data-size="medium" data-annotation="none"></div>

<!-- Place this tag after the last +1 button tag. -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>
*/
Polyworks.GoogleAdapter = (function() {
	Polyworks.Utils.inherits(GoogleAdapter, Polyworks.SocialAdapter);
	
	var POLYWORKS_PLUS_ONE_URL = 'http://www.polyworksgames.com/games/keke2/';
	
	var _defaults = {
		elements: [
		{
			el: 'div',
			attrs: {
				'id': 'gPlusOne',
				'data-href': POLYWORKS_PLUS_ONE_URL,
				'data-size': 'medium',
				'data-annotation': 'none'
			},
			className: 'g-plusone'
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
