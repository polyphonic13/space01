/*
http://atlchris.com/1665/how-to-create-custom-share-buttons-for-all-the-popular-social-services/
*/
PWG.SocialAdapter = (function() {
	var SOCIAL_ELEMENT_CONTAINER = 'buttonContainer';
	
	function SocialAdapter(params) {
		this.model = params;
		this.parentEl = this.model.parentEl || document.getElementsByTagName('body')[0];
		this.elements = {};
		trace('SocialAdapter['+this.model.name+']/init, this.model = ', this.model);
	}
	
	SocialAdapter.prototype.show = function(id) {
		trace('SocialAdapter['+this.model.name+']/show, id = ' + id);
		if(this.elements[id]) {
			this.elements[id].style.display = 'block';
		}
	};
	
	SocialAdapter.prototype.hide = function(id) {
		if(this.elements[id]) {
			this.elements[id].style.display = 'none';
		}
	};
	
	SocialAdapter.prototype.showAll = function() {
		for(var key in this.elements) {
			this.elements[key].style.display = 'block';
		}
	};
	
	SocialAdapter.prototype.hideAll = function() {
		trace('SocialAdapter['+this.model.name+']/hideAll');
		for(var key in this.elements) {
			trace('\telement['+key+'] = ', this.elements[key]);
			this.elements[key].style.display = 'none';
		}
	};
	
	SocialAdapter.prototype.addElements = function() {
		for(var key in this.model.elements) {
			this.addElement(this.model.elements[key], this.parentEl);
		}
	};
	
	SocialAdapter.prototype.addElement = function(params, pops) {
		var attrs = params.attrs;

		var container = document.createElement('div');
		container.className = SOCIAL_ELEMENT_CONTAINER;
		var id = attrs.id;
		container.setAttribute('id', id);
		container.style.display = 'none';

		var div = document.createElement(params.el);
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

		container.appendChild(div);
		pops.appendChild(container);

		this.elements[id] = container;
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

	SocialAdapter.prototype.destroy = function() {
		for(var key in this.elements) {
			this.parentEl.removeChild(this.elements[key]);
		}
		// this.parentEl.parentNode.removeChild(this.parentEl);
	};
	
	return SocialAdapter;
})();