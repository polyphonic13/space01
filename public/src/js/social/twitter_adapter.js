/*
<!-- twitter follow -->
<!--
<a id="twFollow" href="https://twitter.com/KekePolyworks" class="twitter-follow-button" data-show-count="false">Follow @KekePolyworks</a>
-->

*/
Polyworks.TwitterAdapter = (function() {
	var this.model = {
		rootEl: {
			el: 'a',
			attrs: {
				id: 'twFollow',
				href: 'https://twitter.com/KekePolyworks',
				"data-show-count": false			
			},
			className: 'twitter-follow-button'
		}
	};

	function TwitterAdapter(params) {
		
	}
	var adapter = {
		init: function(params) {
			this.model = Polyworks.Utils.extend(this.model, params);
			trace('TwitterAdapter/init, this.model = ', this.model);
			_addRootDiv();
			_loadApi(document, 'script', 'twitter-wjs');
		}
	}

	function _addRootDiv() {
		var pops = this.model.parentEl || document.getElementsByTagName('body')[0];
		var div = document.createElement(this.model.rootEl.el);
		var attrs = this.model.rootEl.attrs;
		for (var key in attrs) {
			div.setAttribute(key, attrs[key]);
		}
		div.className = this.model.rootEl.className;
		pops.appendChild(div);
	}

	function _loadApi(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0],
			p = /^http:/.test(d.location) ? 'http' : 'https';
		if (!d.getElementById(id)) {
			js = d.createElement(s);
			js.id = id;
			js.src = p + '://platform.twitter.com/widgets.js';
			fjs.parentNode.insertBefore(js, fjs);
		}
	}

	return TwitterAdapter;
}());
