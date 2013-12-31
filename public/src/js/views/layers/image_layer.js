var ImageLayer = (function() {
	Utils.inherits(ImageLayer, View);
	
	var _this;
	
	function ImageLayer(params) {
		_this = this;
		ImageLayer._super.constructor.call(this, params);
		
		_buildViews();
		this.model.layer.setPosition(this.model.x, this.model.y);

		this.__defineGetter__('id', function() {
			var id = (this.model.id) ? this.model.id : ''
			return id;
		});
	}
	
	function _buildViews() {
	    var imageObj = new Image();
		var _model = _this.model;
		_model.opacity = (_model.opacity) ? _model.opacity : 1;
		
		var imgConfig = {
			x: 0,
			y: 0,
			width: _model.width,
			height: _model.height,
			opacity: _model.opacity,
			image: imageObj
		};

		if(_model.filter) {
			for(var key in _model.filter) {
				imgConfig[key] = _model.filter[key];
			}
		}

	    imageObj.onload = function() {
			var image = new Kinetic.Image(imgConfig);
			_model.layer.add(image);
			_model.layer.draw(); // layer has to have draw called each time there is a change
	    };
	    imageObj.src = _model.src;
	}

	return ImageLayer;
})();