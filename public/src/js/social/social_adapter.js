Polyworks.SocialAdapter = (function() {
	
	function SocialAdapter(params) {
		this.model = params;
		trace('SocialAdapter/init, this.model = ', this.model);
	}
	
	SocialAdapter.prototype.addRootElement = function() {
		var pops = this.model.parentEl || document.getElementsByTagName('body')[0];
		var div = document.createElement(this.model.rootEl.el);
		var attrs = this.model.rootEl.attrs;
		for (var key in attrs) {
			div.setAttribute(key, attrs[key]);
		}
		if(this.model.rootEl.className) {
			div.className = this.model.rootEl.className;
		}
		pops.appendChild(div);

		this.rootEl = div;
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