var ScrollingLayer = (function() {
	Utils.inherits(ScrollingLayer, View);
	
	var _this;
	var _opacity = 1;
	
	function ScrollingLayer(params) {
		_this = this;
		params.opacity = _opacity;
		ScrollingLayer._super.constructor.call(_this, params);
		_buildViews();
		this.model.layer.setPosition(this.model.x, this.model.y);
		this.__defineGetter__('id', function() {
			return this.model.id;
		});
	}
	
	ScrollingLayer.prototype.moveX = function() {
		this.model.layer.move(this.model.speed, 0);
	};
	
	ScrollingLayer.prototype.moveY = function() {
		this.model.layer.move(0, this.model.speed);
	};
	
	ScrollingLayer.prototype.moveByVelocity = function(velX, velY) {
		// trace('ScollingLayer['+this.model.id+']/move, speed = ' + this.model.speed);
		this.model.layer.move((velX * this.model.speed), (velY * this.model.speed));
	};
	
	function _buildViews() {
	    var imageObj = new Image();
		var _model = _this.model;
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
	    imageObj.src = _model.imgUrl;
	}

	return ScrollingLayer;
})();