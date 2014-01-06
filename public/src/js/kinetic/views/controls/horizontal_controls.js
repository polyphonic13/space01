var HorizontalControls = (function() {
	Utils.inherits(HorizontalControls, View);
	
	var _this;
	var _forwardPressed = false;
	var _reversePressed = false;
	var _previousForwardTouch = {};
	var _previousReverseTouch = {};
	var _forwardWedge;
	var _reverseWedge;
	
	function HorizontalControls(params) {
		// trace('HorizontalControls/constructor');
		_this = this;
		HorizontalControls._super.constructor.call(this, params);
		
		_buildViews();
		// _addListeners();
	}
	
	HorizontalControls.prototype.getForward = function() {
		return _forwardPressed;
	};
	
	HorizontalControls.prototype.getReverse = function() {
		return _reversePressed;
	};
	
	function _buildViews() {
		_forwardWedge = new Kinetic.Wedge({
			x: 200,
			y: stageConfig.height - 70,
			radius: 70,
			angleDeg: 60,
			fill: '#cccccc',
			stroke: 'black',
			strokeWidth: 4,
			rotationDeg: 150
		});

		_reverseWedge = new Kinetic.Wedge({
			x: 20,
			y: stageConfig.height - 70,
			radius: 70,
			angleDeg: 60,
			fill: '#cccccc',
			stroke: 'black',
			strokeWidth: 4,
			rotationDeg: -30
		});
		_this.model.layer.add(_forwardWedge);
		_this.model.layer.add(_reverseWedge);
	}
	
	function _addListeners() {
		// trace('horizontal controls listeners, buttons = ');
		// trace(_forwardWedge);
		// trace(_reverseWedge);
		_forwardWedge.on('mousedown touchstart', function(evt) {
			_onForwardPressed(evt);
		});
		
		_forwardWedge.on('mouseup touchend', function(evt) {
			_onForwardReleased(evt);
		});
		
		_reverseWedge.on('mousedown touchstart', function(evt) {
			_onReversedPressed(evt);
		});
		
		_reverseWedge.on('mouseup touchend', function(evt) {
			_onReverseReleased(evt);
		});
	}
	
	function _getEventPosition(evt) {
		var pos = {};
		if(evt.targetTouches && evt.targetTouches.length > 0) {
			// trace('there are target touches');
			pos = {
				x: evt.targetTouches[0].clientX,
				y: evt.targetTouches[0].clientY
			}
		} else {
			// trace('no target touches');
			pos = {
				x: evt.x,
				y: evt.y
			}
		}
		return pos;
	}
	
	function _onForwardPressed(evt) {
		// trace('HorizontalControls/_onForwardPressed');
		// trace(evt);
		_forwardPressed = true;
		_reversePressed = false;
		var pos = _getEventPosition(evt);

		_previousForwardTouch = {
			x: pos.x,
			y: pos.y,
			targetNode: evt.targetNode
		};
	}
	
	function _onForwardReleased(evt) {
		// trace('HorizontalControls/_onForwardReleased');
		// trace(evt);
		// trace(_previousForwardTouch);
		if(evt.x === _previousForwardTouch.x && evt.y === _previousForwardTouch.y) {
		// if(evt.targetNode === _previousForwardTouch.targetNode) {
			_forwardPressed = false;
		}
	}
	
	function _onReversedPressed(evt) {
		// trace('HorizontalControls/_onReversedPressed');
		// trace(evt);
		_reversePressed = true;
		_forwardPressed = false;
		var pos = _getEventPosition(evt);

		_previousReverseTouch = {
			x: pos.x,
			y: pos.y,
			targetNode: evt.targetNode
		};
	}
	
	function _onReverseReleased(evt) {
		// trace('HorizontalControls/_onReleased');
		// trace(evt);
		// trace(_previousReverseTouch);
		if(evt.x === _previousReverseTouch.x && evt.y === _previousReverseTouch.y) {
		// if(evt.targetNode === _previousReverseTouch.targetNode) {
			_reversePressed = false;
		}
	}
	
	return HorizontalControls;
})();