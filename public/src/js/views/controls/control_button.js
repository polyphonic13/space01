var ControlButton = (function() {
	
	var _model = {
		type: 'Circle',
		x: 0,
		y: 0,
		radius: 40,
		fill: '#aaaaaa',
		stroke: '#000000',
		strokeWidth: 2,
		layer: null
	};
	var _circle;
	var _pressed = false; 
	var _wasPressed = false;
	
	function ControlButton(params) {
		_model = Utils.extend(_model, params);
		_buildViews();
	}

	ControlButton.prototype.getLayer = function() {
		return _model.layer;
	};
	
	ControlButton.prototype.setStage = function(stage) {
		_model.stage = stage;
		stage.add(_model.layer);
	};
	
	ControlButton.prototype.getPressed = function() {
		return _pressed;
	};
	
	ControlButton.prototype.getWasPressed = function() {
		return _wasPressed;
	};
	
	ControlButton.prototype.setWasPressed = function(val) {
		_wasPressed = val;
	};
	
	ControlButton.prototype.remove = function() {
		_model.layer.remove();
	};
	
	function _buildViews() {
		if(!_model.layer) {
			_model.layer = new Kinetic.Layer({
				width: _model.radius,
				height: _model.radius
			});
		}
		
		if(_model.type === 'Image') {
			_buildImageView(_model);
		} else {
			_circle = new Kinetic.Circle(_model);
			_model.layer.add(_circle);
			_model.view = _circle;
			_addListeners();
		}
    }

	function _buildImageView(params) {
	    var imageObj = new Image();
		
		var imgConfig = {
			x: params.x,
			y: params.y,
			width: params.width,
			height: params.height,
			image: imageObj
		};

	    imageObj.onload = function() {
			var image = new Kinetic.Image(imgConfig);
			_model.layer.add(image);
			_model.layer.draw(); // layer has to have draw called each time there is a change
			_model.view = image;
			_addListeners();
	    };
	    imageObj.src = params.src;
	}
	
	function _addListeners() {
		_model.view.on('mousedown touchstart', function(evt) {
			_onPressed(evt);
		});
		
		_model.view.on('mouseup touchend', function(evt) {
			_onReleased(evt);
		});
		
	}
	
	function _onPressed(evt) {
		trace('ControlButton/_onPressed');
		trace(evt);
		_pressed = true;
		_wasPressed = true;
	}
	
	function _onReleased(evt) {
		trace('ControlButton/_onReleased');
		trace(evt);
		_pressed = false;
	}
	
	return ControlButton;
})();