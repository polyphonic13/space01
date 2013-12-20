var Joystick = (function() {
	var _states = {};
	var _position = {
		x: 0,
		y: 0
	};
	var _model = {
		startX: 60,
		startY: 60,
		lgRadius: 50,
		lgFill: '#666666',
		lgStroke: '#222222',
		lgStrokeWidth: 2,
		smRadius: 25,
		smFill: '#cccccc',
		smStroke: '#222222',
		smStrokeWidth: 2,
		xOnly: false,
		yOnly: false
	};
	var _layer; 
	var _lgCircle;
	var _smCircle;
	
	function Joystick(params) {
		// save config params for later use
		_model = Utils.extend(_model, params);
		_resetStates();
		_buildViews();
		_addListeners();
	}
	
	function _resetStates() {
		for(var key in JoystickStates) {
			_states[JoystickStates[key]] = false;
		}
		_states[JoystickStates.REST] = true;
		// trace('_resetStates, _states = ');
		// trace(_states);
	}

	function _buildViews() {
		_layer = new Kinetic.Layer();

		_lgCircle = new Kinetic.Circle({
			x: _model.startX,
			y: _model.startY,
			radius: _model.lgRadius,
			fill: _model.lgFill,
			stroke: _model.lgStroke,
			strokeWidth: _model.lgStrokeWidth
		});

		_smCircle = new Kinetic.Circle({
			x: _model.startX,
			y: _model.startY,
			radius: _model.smRadius,
			fill: _model.smFill,
			stroke: _model.smStroke,
			strokeWidth: _model.smStrokeWidth,
			draggable: true,
			dragBoundFunc: function(pos) {
				var x = _model.startX;  // your center point
				var y = _model.startY;  // your center point 
				var radius = _model.smRadius
				var scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2)); // distance formula ratio

				var yScale = (_model.xOnly) ? scale * 0.3 : scale;
				var xScale = (_model.yOnly) ? scale * 0.3 : scale;

				if(scale < 1) {
					return {
					y: Math.round((pos.y - y) * yScale + y),
					x: Math.round((pos.x - x) * xScale + x)
					};
				} else {
					return pos;
				}
			}
		});

		_layer.add(_lgCircle);
		_layer.add(_smCircle);
	}
	
	function _addListeners() {
		_smCircle.on('dragstart', function(evt) {
			console.log('DRAG START!');
			_onDragStart(evt);
		});
		_smCircle.on('dragmove', function(evt) {
			_onDragMove(evt);
		});
		_smCircle.on('dragend', function(evt) {
			_onDragEnd();
		});
	}

	function _onDragStart(evt) {
		// console.log('_onDragStart, x/y = ' + evt.x + '/' + evt.y);
		_states[JoystickStates.REST] = false;
		_checkDirection(evt);
	}

	function _onDragMove(evt) {
		// console.log('_onDragMove, x/y = ' + evt.x + '/' + evt.y);
		_checkDirection(evt);
	}

	function _onDragEnd(evt) {
		console.log('_onDragEnd');
		_resetStates();
		_smCircle.setPosition(_model.startX, _model.startY);
		_layer.draw();
	}

	function _checkDirection(evt) {
		if(evt.x > _model.startX) {
			console.log("FORWARD");
			_states[JoystickStates.REVERSE] = true;
			_states[JoystickStates.FORWARD] = false;
		} else {
			console.log("REVERSE");
			_states[JoystickStates.FORWARD] = true;
			_states[JoystickStates.REVERSE] = false;
		}
		if(evt.y > _model.startY) {
			_states[JoystickStates.DOWN] = true;
			_states[JoystickStates.UP] = false;
		} else {
			_states[JoystickStates.UP] = true;
			_states[JoystickStates.DOWN] = false;
		}
	}
	
	Joystick.prototype.getLayer = function() {
		return _layer;
	};

	Joystick.prototype.setPosition = function(pos) {
		_layer.setPosition(pos);
		_layer.draw();
	};
	
	Joystick.prototype.getStates = function() {
		return _states;
	};
	
	Joystick.prototype.getRest = function() {
		return _states[JoystickStates.REST];
	};
	
	Joystick.prototype.getForward = function() {
		return _states[JoystickStates.FORWARD];
	};
	
	Joystick.prototype.getReverse = function() {
		return _states[JoystickStates.REVERSE];
	};
	
	Joystick.prototype.getUp = function() {
		return _states[JoystickStates.UP];
	};
	
	Joystick.prototype.getDown = function() {
		return _states[JoystickStates.DOWN];
	};
	
	Joystick.prototype.getPosition = function() {
		return _position;
	};
	
	Joystick.prototype.getX = function() {
		return _position.x;
	};
	
	Joystick.prototype.getY = function() {
		return _position.y;
	};
	
	return Joystick;
})();