var ScrollingLayer = (function() {
	Utils.inherits(ScrollingLayer, View);
	
	var _this;
	var _config = {
		opacity: 1
	};
	
	function ScrollingLayer(params) {
		_this = this;
		_config = Utils.extend(_config, params);
		ScrollingLayer._super.constructor.call(_this, _config);
		_buildViews();
		
		trace('ScrollingLayer['+_this.model.id+']/constructor');
		trace(_this.model);
	}
	
	ScrollingLayer.prototype.move = function(velX, velY) {
		trace('ScollingLayer['+_this.model.id+']/move, speed = ' + _this.model.speed);
		_this.model.layer.move((velX * _this.model.speed), (velY * _this.model.speed));
	};
	
	function _buildViews() {
	    var imageObj = new Image();

		var imgConfig = {
			// x: _this.model.x,
			// y: _this.model.y,
			x: 0,
			y: 0,
			width: _this.model.width,
			height: _this.model.height,
			opacity: _this.model.opacity,
			image: imageObj
		};

		if(_this.model.filter) {
			for(var key in _this.model.filter) {
				imgConfig[key] = _this.model.filter[key];
			}
		}

	    imageObj.onload = function() {
			var image = new Kinetic.Image(imgConfig);
			_this.model.layer.add(image);
			_this.model.layer.draw(); // layer has to have draw called each time there is a change
	    };
	    imageObj.src = _this.model.imgUrl;
	}

	return ScrollingLayer;
})();