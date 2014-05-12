Polyworks.DOMManager = (function() {
	var bodyEl = document.getElementsByTagName('body')[0];
	
	var dom_manager = {
		addElements: function(elements, parentEl) {
			var pops = parentEl || bodyEl;
			Polyworks.Utils.each(
				elements,
				function(element) {
					trace('DOMManager/addElements, type = ' + element.type + ', element = ', element);
					var el = document.createElement(element.type);

					if(element.attrs) { el = this.addAttributes(element.attrs, el); }
					if(element.css) { el = this.addStyle(element.css, el); }
					if(element.className) { el.className = element.className; }
					if(element.html) { el.innerHTML = element.html; }

					pops.appendChild(el);
				},
			this
			);
		},

		addAttributes: function(attributes, el) {
			Polyworks.Utils.each(
				attributes,
				function(attribute, key) {
					el.setAttribute(key, attribute);
				},
				this
			);
			return el;
		},

		addStyle: function(styles, el) {
			Polyworks.Utils.each(
				styles,
				function(style, key) {
					el.style[key] = style;
				},
				this
			);
			return el;
		}
	};
	
	return dom_manager;
}());