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
		lgColor1: '#666666',
		lgColor2: '#222222',
		lgColor3: '#000000',
		lgGradient: true,
		lgStrokeWidth: 2,
		smRadius: 35,
		smColor1: '#999999',
		smColor2: '#aaaaaa',
		smColor3: '#222222',
		smGradient: false,
		smStrokeWidth: 1,
		xOnly: false,
		yOnly: false,
		layer: null
	};
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
		if(!_model.layer) {
			_model.layer = new Kinetic.Layer({
				width: _model.lgRadius,
				height: _model.lgRaduis
			});
		}
		
		var lgCircleConfig = {
			x: _model.startX,
			y: _model.startY,
			radius: _model.lgRadius,
			stroke: _model.lgColor3,
			strokeWidth: _model.lgStrokeWidth
		};

		if(_model.lgGradient) {
			var lgGradientStops;
			if(_model.lgGradientStops) {
				lgGradientStops = _model.lgGradientStops;
			} else {
				lgGradientStops = [0, _model.lgColor3, .8, _model.lgColor1, 1, _model.lgColor2];
			}
			
			lgCircleConfig.fillRadialGradientStartRadius = 0;
			lgCircleConfig.fillRadialGradientEndRadius = _model.lgRadius;
			lgCircleConfig.fillRadialGradientColorStops = lgGradientStops;
		} else {
			lgCircleConfig.fill = _model.lgColor1;
		}


		var smCircleConfig = {
			x: _model.startX,
			y: _model.startY,
			radius: _model.smRadius,
			stroke: _model.smColor3,
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
		};
		
		if(_model.smGradient) {
			var smGradientStops;
			if(_model.smGradientStops) {
				smGradientStops = _model.smGradientStops;
			} else {
				smGradientStops = [0, _model.smColor2, .9, _model.smColor1, 1, _model.smColor2];
			}
			
			smCircleConfig.fillRadialGradientStartRadius = 0;
			smCircleConfig.fillRadialGradientEndRadius = _model.smRadius;
			smCircleConfig.fillRadialGradientColorStops = smGradientStops;
		} else {
			smCircleConfig.fill = _model.smColor1;
			
		}

		_lgCircle = new Kinetic.Circle(lgCircleConfig);
		_smCircle = new Kinetic.Circle(smCircleConfig);

		_model.layer.add(_lgCircle);
		_model.layer.add(_smCircle);
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
		_model.layer.draw();
	}

	function _checkDirection(evt) {
		var pos = _smCircle.getPosition();
		
		_position.x = pos.x;
		_position.y = pos.y;
		
		if(_position.x > _model.startX) {
			console.log("FORWARD");
			_states[JoystickStates.REVERSE] = true;
			_states[JoystickStates.FORWARD] = false;
		} else {
			console.log("REVERSE");
			_states[JoystickStates.FORWARD] = true;
			_states[JoystickStates.REVERSE] = false;
		}
		if(_position.y > _model.startY) {
			_states[JoystickStates.DOWN] = true;
			_states[JoystickStates.UP] = false;
		} else {
			_states[JoystickStates.UP] = true;
			_states[JoystickStates.DOWN] = false;
		}
	}
	
	Joystick.prototype.getLayer = function() {
		return _model.layer;
	};

	Joystick.prototype.setPosition = function(pos) {
		_model.layer.setPosition(pos);
		_model.layer.draw();
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
	
	Joystick.prototype.getStartX = function() {
		return _model.startX;
	};
	
	Joystick.prototype.getStartY = function() {
		return _model.startY;
	}
	return Joystick;
})();