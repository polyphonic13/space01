/*
<!-- Place this tag where you want the +1 button to render. -->
<div class="g-plusone" data-size="small" data-href="http://www.polyworksgames.com/games/keke2/"></div>

*/
Polyworks.GoogleAdapter = (function() {
	var _model = {
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
			_model = Polyworks.Utils.extend(_model, params);
			trace('TwitterAdapter/init, _model = ', _model);
			_addRootDiv();
			_loadApi();
		}
	};

	function _addRootDiv() {
		var pops = _model.parentEl || document.getElementsByTagName('body')[0];
		var div = document.createElement(_model.rootEl.el);
		var attrs = _model.rootEl.attrs;
		for (var key in attrs) {
			div.setAttribute(key, attrs[key]);
		}
		div.className = _model.rootEl.className;
		pops.appendChild(div);
	}

	function _loadApi() {
		var po = document.createElement('script'); 
		po.type = 'text/javascript'; 
		po.async = true;
		po.src = 'https://apis.google.com/js/platform.js';
		var s = document.getElementsByTagName('script')[0]; 
		s.parentNode.insertBefore(po, s);
	}

	return adapter;
}());
