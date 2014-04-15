Polyworks.SocialAdapter = (function() {
	
	function SocialAdapter(params) {
		this.model = params;
		trace('SocialAdapter/init, this.model = ', this.model);
		
	}
	
	SocialAdapter.prototype.addRootDiv = function() {
		var pops = this.model.parentEl || document.getElementsByTagName('body')[0];
		var div = document.createElement(this.model.rootEl.el);
		var attrs = this.model.rootEl.attrs;
		for (var key in attrs) {
			div.setAttribute(key, attrs[key]);
		}
		div.className = this.model.rootEl.className;
		pops.appendChild(div);
	};

	 SocialAdapter.prototype.loadApi = function() {
		var po = document.createElement('script'); 
		po.type = 'text/javascript'; 
		po.async = true;
		po.src = 'https://apis.google.com/js/platform.js';
		var s = document.getElementsByTagName('script')[0]; 
		s.parentNode.insertBefore(po, s);
	};

	return SocialAdapter;
})();