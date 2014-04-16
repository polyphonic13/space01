Polyworks.SocialAdapter = (function() {
	
	function SocialAdapter(params) {
		this.model = params;
		this.parentEl = this.model.parentEl || document.getElementsByTagName('body')[0];
		this.elements = [];
		trace('SocialAdapter/init, this.model = ', this.model);
	}
	
	SocialAdapter.prototype.addElements = function() {
		for(var key in this.model.elements) {
			this.addElement(this.model.elements[key], this.parentEl);
		}
	};
	
	SocialAdapter.prototype.addElement = function(params, pops) {
		var div = document.createElement(params.el);
		var attrs = params.attrs;
		for (var key in attrs) {
			div.setAttribute(key, attrs[key]);
		}
		if(params.className) {
			div.className = params.className;
		}
		if(params.style) {
			for(var key in params.style) {
				div.style[key] = params.style[key];
			}
		}
		pops.appendChild(div);

		this.elements.push(div);
	};

	 SocialAdapter.prototype.loadApi = function(url, id) {
		if(!document.getElementById('id')) {
			var script = document.createElement('script'); 
			script.type = 'text/javascript'; 
			script.async = true;
			script.src = url;
			var s = document.getElementsByTagName('script')[0]; 
			s.parentNode.insertBefore(script, s);
		}
	};

	return SocialAdapter;
})();