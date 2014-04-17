Polyworks.SocialPanel = (function() {
	var SHARE_URLS = {
		facebook: 'http://www.facebook.com/share.php?u=~{url}~&title=~{title}~',
		google: 'https://plus.google.com/share?url=~{url}~',
		twitter: 'http://twitter.com/home?status=~{title}~+~{url}~'
	};
	
	var _model = {};
	
	var module = {
		init: function(params) {
			trace('SocialPanel/init, params = ', params);
			_model = Polyworks.Utils.extend(_model, params);
			_initViews();
			_addListeners();
		},

		show: function() {
			_model.parentEl.style.visibility = 'visible';
		},

		hide: function() {
			_model.parentEl.style.visibility = 'hidden';
		},

		buttonClick: function(network) {
			trace('SocialPanel/buttonClick, network = ' + network);

		},

		destroy: function() {
			_removeListeners();
			_destroyViews();
		}
	};
	
	function _initViews() {
		_initParentEl(); 
		_addButtons();
	}

	function _initParentEl() {
		_model.parentEl = document.getElementById(_model.parentId) || document.getElementsByTagName('body')[0];
	}

	function _addButtons() {
		_model.buttons = {};

		var buttonClass = _model.buttonClass || 'socialButton';
		var button;

		Polyworks.Utils.each(_model.networks,
			function(network) {
				button = {
					pops: _model.parentEl,
					id: network,
					el: 'img',
					attrs: {
						src: _model.imagePath + network + '.png',
						onclick: 'Polyworks.SocialPanel.buttonClick("'+network+'");'
					},
					className: buttonClass
				};
				_model.buttons[network] = Polyworks.Utils.addElement(button);
			},
			this
		);
	}

	function _destroyViews() {
		var buttons = _model.buttons;
		var button;
		for(var key in buttons) {
			button = buttons[key];
			button.parentNode.removeChild(button);
		}
		if(_model.parentEl) {
			_model.parentEl.parentNode.removeChild(_model.parentEl);
		}
	}

	function _addListeners() {
		Polyworks.Utils.each(_model.listeners,
			function(listener) {
				Polyworks.EventCenter.bind(listener.type, _eventResponder, this);
			},
			this
		);
	}

	function _removeListeners() {
		Polyworks.Utils.each(_model.listeners,
			function(listener) {
				Polyworks.EventCenter.unbind(listener.type, _eventResponder, this);
			},
			this
		);
	}

	function _eventResponder(event) {
		trace('SocialPanel/_eventResponder event = ', event);
		var listener;
		Polyworks.Utils.each(_model.listeners,
			function(l) {
				if(l.type === event.type) {
					listener = l;
				}
			},
			this
		);
		var match = listener.match;
		if(match) {
			trace('\tthere is a match');
			if(match.value === event.value) {
				trace('\t\tvalue matches the event value, calling: ' + match.action.method);
				Polyworks.SocialPanel[match.action.method](match.action.value);
			} else if(listener.nonmatch) {
				trace('\t\tnonmatch calling: ' + listener.nonmatch.action.method);
				Polyworks.SocialPanel[listener.nonmatch.action.method](listener.nonmatch.action.value);
			}
		} else {
			Polyworks.SocialPanel[listener.action.method](listener.action.value);
		}
	}
	
	return module;
}());