PWG.DOMManager = function() {
	var bodyEl = document.getElementsByTagName('body')[0];
	
	var module = {};
	
	function ScriptLoader(config, callback, context) {
		this.url = config.url;
		this.name = config.name;
		
		var ctx = context || window;
		var script = document.createElement('script');
		
		script.setAttribute('type', 'text/javascript');
		
		if (script.readyState) { 
			script.onreadystatechange = function() {
				if(script.readyState == 'loaded' || script.readyState == 'complete') {
					callback.call(ctx, config.name);
				}
			};
		} else {
			script.onload = function() {
				callback.call(ctx, config.name);
			};
		}
		
		script.setAttribute('src', config.url);
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	
	module.ScriptLoader = ScriptLoader;
	
	module.loaders = {};
	module.activeCallback;
	module.activeContext;
	
	module.addScripts = function(scripts, callback, context) {
		module.activeCallback = callback;
		module.activeContext = context; 
		
		PWG.Utils.each(
			scripts,
			function(script) {
				script.idx = module.loaders.length;
				module.loaders[script.name] = new ScriptLoader(script, module.scriptLoaded, module);
			},
			this
		);
	},
	
	module.scriptLoaded = function(name) {
		trace('DOMManager/scriptLoaded, name = ' + name + ', loaders = ', module.loaders);
		delete module.loaders[name];
		
		if(PWG.Utils.objLength(module.loaders) === 0) {
			if(module.activeCallback) {
				var ctx = module.activeContext || window;
				module.activeCallback.call(ctx);
			}
		}
	},
	
	module.addElements = function(elements, parentEl, callback, context) {
		var pops = parentEl || bodyEl;
		PWG.Utils.each(
			elements,
			function(element) {
				// trace('DOMManager/addElements, type = ' + element.type + ', element = ', element);
				var el = document.createElement(element.type);

				if(element.attrs) { el = this.addAttributes(element.attrs, el); }
				if(element.css) { el = this.addStyle(element.css, el); }
				if(element.className) { el.className = element.className; }
				if(element.html) { el.innerHTML = element.html; }

				pops.appendChild(el);
			},
		this
		);
		
		if(callback) {
			var ctx = context || window;
			callback.call(ctx);
		}
	},

	module.addAttributes = function(attributes, el) {
		PWG.Utils.each(
			attributes,
			function(attribute, key) {
				el.setAttribute(key, attribute);
			},
			this
		);
		return el;
	},

	module.addStyle = function(styles, el) {
		PWG.Utils.each(
			styles,
			function(style, key) {
				el.style[key] = style;
			},
			this
		);
		return el;
	}
	
	return module;
}();