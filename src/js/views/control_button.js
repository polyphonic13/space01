var ControlButton = (function() {
	
	var _model = {
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
		_addListeners();
	}

	function _buildViews() {
		if(!_model.layer) {
			_model.layer = new Kinetic.Layer({
				width: _model.radius,
				height: _model.radius
			});
		}
		
		_circle = new Kinetic.Circle(_model);
    }

	function _addListeners() {
		_circle.on('mousedown touchstart', function() {
			_onPressed();
		});
		
		_circle.on('mouseup touchend', function() {
			_onReleased();
		});
		
		_model.layer.add(_circle);
	}
	
	function _onPressed() {
		trace('ControlButton/_onPressed');
		_pressed = true;
		_wasPressed = true;
	}
	
	function _onReleased() {
		trace('ControlButton/_onReleased');
		_pressed = false;
	}
	
	ControlButton.prototype.getLayer = function() {
		return _model.layer;
	};
	
	ControlButton.prototype.getPressed = function() {
		return _pressed;
	};
	
	ControlButton.prototype.getWasPressed = function() {
		return _wasPressed;
	};
	
	ControlButton.prototype.setWasPressed = function(pressed) {
		_wasPressed = pressed;
	};
	
	return ControlButton;
})();