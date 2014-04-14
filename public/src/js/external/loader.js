Polyworks.Loader = (function() {
	
	function Loader() {
		trace('Loader/constructor');
		this.numToLoad = 0;
		this.numLoaded = 0;
		this.fileCallback;
		this.batchCallback;
		this.scope;
		this.head = document.getElementsByTagName('head')[0];
	}
	
	Loader.prototype.batchLoadJS = function(files, fileCallback, batchCallback, context) {
		trace('Loader/batchLoadJS, files = ', files, '\tcontext = ', context);
		this.fileCallback = fileCallback || null;
		this.batchCallback = batchCallback || null;
		this.context = context || window;

		for(var key in files) {
			this.loadJS(files[key], key, this.fileLoaded, this);
		}
	};
	
	Loader.prototype.loadJS = function(url, key, callback, context) {
		this.numToLoad++;

		var label = key || url;

		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		if (script.readyState) { 
			script.onreadystatechange = function() {
				if(script.readyState == 'loaded' || script.readyState == 'complete') {
					if(callback instanceof Function) {
						callback.call(context || window, url, true, label);
					}
				}
			};
		} else {
			script.onload = function() {
				if(callback instanceof Function) {
					callback.call(context || window, url, true, label);
				}
			};
		}
		script.setAttribute('src', url);
		this.head.appendChild(script);
	};
	
	Loader.prototype.fileLoaded = function(url, success, key) {
		if(this.fileCallback !== null) {
			this.fileCallback.call(this.context, url, success, key);
		}

		this.numLoaded++;
		if(this.numLoaded >= this.numToLoad) {
			if(this.batchCallback !== null) {
				this.batchCallback.call(this.context);
			}
		}
	};
	
	return Loader;
})();