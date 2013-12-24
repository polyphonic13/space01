Polyworks.views.ScrollingLayer = (function() {
	Utils.inherits(ScrollingLayer, View);
	
	_config = {
		opacity: 1
	};
	_model = {};
	
	function ScrollingLayer(params) {
		_config = Utils.extend(_config, params);
		ScrollingLayer._super.constructor.call(this, _config);

		_model = this.constructor._super.getModel.call(this);
		_buildViews();
		
	}
	
	ScrollingLayer.prototype.move = function(velX, velY) {
		_model.layer.move((velX * _model.speed), (velY * _model.speed));
	};
	
	function _buildViews() {
	    var imageObj = new Image();

		var imgConfig = {
			x: _model.x,
			y: _model.y,
			width: _model.width,
			height: _model.height,
			opacity: _model.opacity,
			image: imageObj
		};

		var filter = 
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
	    imageObj.src = _model.imgUrl;
	}

})();