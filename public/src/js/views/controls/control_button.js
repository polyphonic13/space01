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
		// _addListeners();
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
	
	function _buildViews() {
		if(!_model.layer) {
			_model.layer = new Kinetic.Layer({
				width: _model.radius,
				height: _model.radius
			});
		}
		
		_circle = new Kinetic.Circle(_model);
		_model.layer.add(_circle);
    }

	function _addListeners() {
		_circle.on('mousedown touchstart', function(evt) {
			_onPressed(evt);
		});
		
		_circle.on('mouseup touchend', function(evt) {
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