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
	var _layerBg;
	var _lgCircle;
	var _smCircle;
	
	function Joystick(params) {
		// save config params for later use
		_model = Utils.extend(_model, params);

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
		_layerBg.setVisible(true);
		_layerBg.setOpacity(0.001);
	};
	
	Joystick.prototype.remove = function() {
		_smCircle.off('dragstart');
		_smCircle.off('dragmove');
		_smCircle.off('dragend');
		_smCircle.off('touchstart');
		_smCircle.off('touchmove');
		_smCircle.off('touchend');
		_layerBg.off('dragstart');
		_layerBg.off('dragmove');
		_layerBg.off('dragend');
		_layerBg.off('touchstart');
		_layerBg.off('touchmove');
		_layerBg.off('touchend');

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
		_model.layer = new Kinetic.Layer({
			x: _model.x,
			y: _model.y,
			width: _model.width,
			height: _model.height
		});

		// per this article:  http://stackoverflow.com/questions/12804710/android-4-html5-canvas-not-redrawing		
		_layerBg = new Kinetic.Rect({
			x: 0,
			y: 0,
			width: stageConfig.width,
			height: stageConfig.height,
			fill: 'red',
			stroke: 'red',
			strokeWidth: 1,
			// opacity: 0.1,
			draggable: true
		});
		_layerBg.setVisible(false);
		// _layerBg.setOpacity(0.1);
		_model.layer.add(_layerBg); 

		var lgCircleConfig = {
			x: _model.startX + 35,
			y: _model.startY + 35,
			radius: _model.lgRadius,
			// stroke: _model.lgColor3,
			stroke: _model.lgColor2,
			strokeWidth: _model.lgStrokeWidth,
			draggable: false
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
		_lgCircle = new Kinetic.Circle(lgCircleConfig);
		_model.layer.add(_lgCircle);

		smCircleConfig.image = imageManager.getImage(_model.smImgUrl);

		var image = new Kinetic.Image(smCircleConfig);
		_model.layer.add(image);
		_smCircle = image;
		_model.layer.draw(); // layer has to have draw called each time there is a change
		_addListeners();
	}
	
	function _addListeners() {
		_smCircle.on('dragstart', function(evt) {
			_onCircleDragStart(evt);
		});
		_smCircle.on('dragmove', function(evt) {
			_onCircleMove(evt);
		});
		_smCircle.on('dragend', function(evt) {
			_onCircleDragEnd(evt);
		});
		_smCircle.on('touchstart', function(evt) {
			var pos = _smCircle.getPosition();
			var size = _smCircle.getSize();
			var xAxis = (size.width/2) + pos.x;
			var yAxis = (size.height/2) + pos.y;
			_onTouchStart(evt, xAxis, yAxis);
		});

		_smCircle.on('touchmove', function(evt) {
			trace('_smCircle, touchmove, evt =');
			trace(evt);
			// _onTouchMove(evt);
		})
		_smCircle.on('touchend', function(evt) {
			_onTouchEnd(evt);
		});

		_layerBg.on('dragstart', function(evt) {
			_onLayerDragStart(evt);
		});
		_layerBg.on('dragmove', function(evt) {
			_onLayerMove(evt);
		});
		_layerBg.on('dragend', function(evt) {
			_onLayerDragEnd(evt);
		});
		_layerBg.on('touchstart', function(evt) {
			var xAxis = stageConfig.width/2;
			var yAxis = stageConfig.height/2;
			_onTouchStart(evt, xAxis, yAxis);
		});
		_layerBg.on('touchmove', function(evt) {
			_onLayerMove(evt);
		});
		_layerBg.on('touchend', function(evt) {
			_onTouchEnd(evt);
		});
	}

	function _onLayerDragStart(evt) {
		trace('_onLayerDragStart, x/y = ' + evt.x + '/' + evt.y);
		_states[JoystickStates.REST] = false;
		_checkDirection(evt, _layerBg, 0, 0);
	}

	function _onLayerMove(evt) {
		trace('_onLayerMove, x/y = ' + evt.x + '/' + evt.y);
		_checkDirection(evt, _layerBg, 0, 0);
	}

	function _onLayerDragEnd(evt) {
		trace('_onLayerDragEnd');
		_resetStates();
		_layerBg.setPosition(0, 0);
		_model.layer.draw();
		_model.layer.fire(JoystickStates.REST);
	}

	function _onTouchStart(evt, xAxis, yAxis) {
		trace('_onLayerTouchStart');
		// trace(evt);
		if(evt.changedTouches || evt.changedTouches.length >= 1) {
			var changedTouches = evt.changedTouches[0];
			trace('\tchangedTouches: x = ' + changedTouches.clientX + ', y = ' + changedTouches.clientY
				+ '\n\txAxis = ' + xAxis + ', yAxis = ' + yAxis);
			if(changedTouches.clientX > (xAxis + 10)) {
				trace('\t\tMOVE RIGHT');
				_states[JoystickStates.REVERSE] = false;
				_states[JoystickStates.FORWARD] = true;
			} else if(changedTouches.clientX < (xAxis - 5)) {
				trace('\t\tMOVE LEFT');
				_states[JoystickStates.FORWARD] = false;
				_states[JoystickStates.REVERSE] = true;
			} else {
				trace('\t\tNO MOVEMENT');
				_states[JoystickStates.FORWARD] = false;
				_states[JoystickStates.REVERSE] = false;
			}
			if(changedTouches.clientY < (yAxis - 5)) {
				trace('\t\tJUMP');
				_states[JoystickStates.UP] = true;
				_states[JoystickStates.DOWN] = false;
			} else {
				_states[JoystickStates.UP] = false;
				_states[JoystickStates.DOWN] = false;
			}
		}
	}

	function _onSmCircleTouchStart(evt) {
		trace('_onLayerTouchStart');
		// trace(evt);
		if(evt.changedTouches || evt.changedTouches.length >= 1) {
			var changedTouches = evt.changedTouches[0];
			trace('\tchangedTouches: x = ' + changedTouches.clientX + ', y = ' + changedTouches.clientY
				+ '\n\tstage: width/2 = ' + stageConfig.width/2 + ', height/2 = ' + stageConfig.height/2);
			if(changedTouches.clientX > stageConfig.width/2) {
				trace('\t\tMOVE RIGHT');
				_states[JoystickStates.REVERSE] = false;
				_states[JoystickStates.FORWARD] = true;
			} else if(changedTouches.clientX < stageConfig.width/2) {
				trace('\t\tMOVE LEFT');
				_states[JoystickStates.FORWARD] = false;
				_states[JoystickStates.REVERSE] = true;
			} else {
				trace('\t\tNO MOVEMENT');
				_states[JoystickStates.FORWARD] = false;
				_states[JoystickStates.REVERSE] = false;
			}
			if(changedTouches.clientY < stageConfig.height/2) {
				trace('\t\tJUMP');
				_states[JoystickStates.UP] = true;
				_states[JoystickStates.DOWN] = false;
			} else {
				_states[JoystickStates.UP] = false;
				_states[JoystickStates.DOWN] = false;
			}
		}
	}
	function _onTouchEnd(evt) {
		// trace('_onTouchEnd');
		// trace(evt);
		_resetStates();
		_model.layer.fire(JoystickStates.REST);
	}

	function _onCircleDragStart(evt) {
		trace('_onCircleDragStart, x/y = ' + evt.x + '/' + evt.y);
		_states[JoystickStates.REST] = false;
		_checkDirection(evt, _smCircle, _model.startX, _model.startY);
	}

	function _onCircleMove(evt) {
		trace('_onCircleMove, x/y = ' + evt.x + '/' + evt.y);
		_checkDirection(evt, _smCircle, _model.startX, _model.startY);
	}

	function _onCircleDragEnd(evt) {
		trace('_onCircleDragEnd');
		_resetStates();
		_smCircle.setPosition(_model.startX, _model.startY);
		_model.layer.draw();
		_model.layer.fire(JoystickStates.REST);
	}

	function _checkDirection(evt, obj, startX, startY) {
		// var pos = _smCircle.getPosition();
		var pos = obj.getPosition();

		_position.x = pos.x;
		_position.y = pos.y;

		if(_position.x > (startX + 10)) {
			// trace("RIGHT");
			_states[JoystickStates.REVERSE] = false;
			_states[JoystickStates.FORWARD] = true;
		} else if(_position.x < (startX - 10)) {
			// trace("LEFT");
			_states[JoystickStates.FORWARD] = false;
			_states[JoystickStates.REVERSE] = true;
		} else {
			// trace("NO MOVEMENT");
			_states[JoystickStates.FORWARD] = false;
			_states[JoystickStates.REVERSE] = false;
		}
		// trace('y = ' + _position.y + ', startY = ' + _model.startY);
		if(_position.y > (startY + 20)) {
			// trace("DOWN");
			_states[JoystickStates.DOWN] = true;
			_states[JoystickStates.UP] = false;
		} else if(_position.y < (startY - 20)){
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