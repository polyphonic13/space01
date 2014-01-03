var Joystick = (function() {
	var _states = {};
	var _position = {
		x: 0,
		y: 0
	};
	var _model = {
		// startX: 60,
		// startY: 60,
		startX: 40,
		startY: stageConfig.height - 95,
		lgRadius: 50,
		// lgColor1: '#666666',
		// lgColor2: '#222222',
		lgColor1: '#88efff',
		lgColor2: '#000000',
		lgColor3: '#5595ff',
		// lgColor3: '#000000',
		lgGradient: true,
		lgStrokeWidth: 2,
		smRadius: 35,
		smWidth: 70,
		smHeight: 70,
		smColor1: '#999999',
		smColor2: '#aaaaaa',
		smColor3: '#222222',
		smImgUrl: 'joystickSmCircle',
		smGradient: true,
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
		if(!_model.layer) {
			_model.layer = new Kinetic.Layer();
		}
		_resetStates();
		_buildViews();
		
		// _model.layer.setPosition(5, stageConfig.height - 120);
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
	
	Joystick.prototype.getJumped = function() {
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
	};
	
	Joystick.prototype.setStage = function(stage) {
		stage.add(_model.layer);
	};
	
	Joystick.prototype.remove = function() {
		_model.layer.remove();
	};

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
			x: _model.startX + 35,
			y: _model.startY + 35,
			radius: _model.lgRadius,
			// stroke: _model.lgColor3,
			stroke: _model.lgColor2,
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
			width: _model.smWidth ,
			height: _model.smHeight,
			// radius: _model.smRadius,
			// stroke: _model.smColor3,
			// fill: 'black',
			// strokeWidth: _model.smStrokeWidth,
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
		
		// _lgCircle = new Kinetic.Circle(lgCircleConfig);
		// _model.layer.add(_lgCircle);

	    // var imageObj = new Image();
		smCircleConfig.image = imageManager.getImage(_model.smImgUrl);

		var image = new Kinetic.Image(smCircleConfig);
		_model.layer.add(image);
		_smCircle = image;
		_model.layer.draw(); // layer has to have draw called each time there is a change
		_addListeners();
		

	}
	
	function _addListeners() {
		// _smCircle.on('touchstart', function(evt) {
		// 	_onTouchStart(evt);
		// });
		
		_smCircle.on('dragstart', function(evt) {
			_onDragStart(evt);
		});
		// _smCircle.on('dragenter', function(evt) {
		// 	_onDragStart(evt);
		// });
		// _smCircle.on('drag', function(evt) {
		// 	_onDragStart(evt);
		// });
		_smCircle.on('dragmove', function(evt) {
			_onDragMove(evt);
		});
		_smCircle.on('dragend', function(evt) {
			_onDragEnd();
		});
	}

	function _onTouchStart(evt) {
		trace('_onTouchStart, x/y = ' + evt.x + '/' + evt.y);
		_states[JoystickStates.REST] = false;
		_checkDirection(evt);
	}
	
	function _onDragStart(evt) {
		trace('_onDragStart, x/y = ' + evt.x + '/' + evt.y);
		_states[JoystickStates.REST] = false;
		_checkDirection(evt);
	}

	function _onDragEnter(evt) {
		trace('_onDragEnter, x/y = ' + evt.x + '/' + evt.y);
		_states[JoystickStates.REST] = false;
		_checkDirection(evt);
	}

	function _onDrag(evt) {
		trace('_onDrag, x/y = ' + evt.x + '/' + evt.y);
		_states[JoystickStates.REST] = false;
		_checkDirection(evt);
	}

	function _onDragMove(evt) {
		// trace('_onDragMove, x/y = ' + evt.x + '/' + evt.y);
		_checkDirection(evt);
	}

	function _onDragEnd(evt) {
		// trace('_onDragEnd');
		_resetStates();
		_smCircle.setPosition(_model.startX, _model.startY);
		_model.layer.draw();
		_model.layer.fire(JoystickStates.REST);
	}

	function _checkDirection(evt) {
		var pos = _smCircle.getPosition();
		
		_position.x = pos.x;
		_position.y = pos.y;
		
		if(_position.x > (_model.startX + 10)) {
			// trace("FORWARD");
			_states[JoystickStates.REVERSE] = false;
			_states[JoystickStates.FORWARD] = true;
		} else if(_position.x < (_model.startX - 10)) {
			// trace("REVERSE");
			_states[JoystickStates.FORWARD] = false;
			_states[JoystickStates.REVERSE] = true;
		} else {
			// trace("REVERSE");
			_states[JoystickStates.FORWARD] = false;
			_states[JoystickStates.REVERSE] = false;
		}
		// trace('y = ' + _position.y + ', startY = ' + _model.startY);
		if(_position.y > (_model.startY + 20)) {
			// trace("DOWN");
			_states[JoystickStates.DOWN] = true;
			_states[JoystickStates.UP] = false;
		} else if(_position.y < (_model.startY - 20)){
			// trace("UP");
			_states[JoystickStates.UP] = true;
			_states[JoystickStates.DOWN] = false;
		} else {
			_states[JoystickStates.UP] = false;
			_states[JoystickStates.DOWN] = false;
		}
	}
	

	return Joystick;
})();