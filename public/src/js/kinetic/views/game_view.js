var GameView = (function(){
	
	function GameView(params) {

		for(var key in params) {
			this[key] = params[key];
		}
		_init();
	}
	
	function _init() {
		this.layer = new Kinetic.Layer();
		if(this.images) {
			_addImages();
		}
		this.layer.setPosition(this.x, this.y);
	}
	
	function _addImages() {
		for(var i = 0; i < images.length; i++) {
			console.log('\timages url = ' + images[i].url);
			_addImage(images[i], i);
		}
	}

	function _addImage(params) {
	    var imageObj = new Image();
		var imageConfig = _createImageConfig(params);
		imageConfig.image = imageObj;
	    imageObj.onload = function() {
			var image = new Kinetic.Image(imageConfig);
			this.layer.add(image);
			this.layer.draw(); // layer has to have draw called each time there is a change
			// trace('imageObj/onload');
	    };
	    imageObj.src = params.url;
	}
	
	function _createImageConfig(params) {
		var config = {
			id: idx,
			x: params.x,
			y: params.y,
			width: params.width,
			height: params.height
		};
		if(params.filter) {
			config.filter = params.filter;
		}
		if(params.filterRadius) {
			config.filterRadius = params.filterRadius;
		}
		if(params.opacity) {
			config.opacity = params.opacity;
		}
	}
})();
