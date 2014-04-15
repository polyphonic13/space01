/*
<!-- Place this tag where you want the +1 button to render. -->
<div class="g-plusone" data-size="small" data-href="http://www.polyworksgames.com/games/keke2/"></div>

*/
Polyworks.GoogleAdapter = (function() {
	Polyworks.Utils.inherits(GoogleAdapter, Polyworks.SocialAdapter);
	
	function GoogleAdapter(params) {
		GoogleAdapter._super.constructor.call(this, params);
	}
	
	return GoogleAdapter;
	
	
	var this.model = {
		rootEl: {
			el: 'div',
			attrs: {
				'data-href': 'http://www.polyworksgames.com/games/keke2/',
				'data-size': 'small'
			},
			className: 'g-plusone'
		}
	};
	var adapter = {
		init: function(params) {
			this.model = Polyworks.Utils.extend(this.model, params);
			trace('TwitterAdapter/init, this.model = ', this.model);
			_addRootDiv();
			_loadApi();
		}
	};


	return adapter;
}());
