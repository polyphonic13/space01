var HorizontalControls = (function() {
	Utils.inherits(HorizontalControls, View);
	
	var _this;
	var _forwardPressed = false;
	var _reversePressed = false;
	var _forwardWedge;
	var _reverseWedge;
	
	function HorizontalControls(params) {
		trace('HorizontalControls/constructor');
		_this = this;
		HorizontalControls._super.constructor.call(this, params);
		
		_buildViews();
		_addListeners();
	}
	
	HorizontalControls.prototype.getForward = function() {
		return _forwardPressed;
	};
	
	HorizontalControls.prototype.getReverse = function() {
		return _reversePressed;
	};
	
	function _buildViews() {
		_reverseWedge = new Kinetic.Wedge({
			x: 200,
			y: stageConfig.height - 70,
			radius: 70,
			angleDeg: 60,
			fill: '#cccccc',
			stroke: 'black',
			strokeWidth: 4,
			rotationDeg: 150
		});

		_forwardWedge = new Kinetic.Wedge({
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
		_forwardWedge.on('mousedown touchstart', function() {
			_onForwardPressed();
		});
		
		_forwardWedge.on('mouseup touchend', function() {
			_onForwardReleased();
		});
		
		_reverseWedge.on('mousedown touchstart', function() {
			_onReversedPressed();
		});
		
		_reverseWedge.on('mouseup touchend', function() {
			_onReverseReleased();
		});
	}
	
	function _onForwardPressed() {
		trace('HorizontalControls/_onForwardPressed');
		_forwardPressed = true;
		_reversePressed = false;
	}
	
	function _onForwardReleased() {
		trace('HorizontalControls/_onForwardReleased');
		_forwardPressed = false;
	}
	
	function _onReversedPressed() {
		trace('HorizontalControls/_onReversedPressed');
		_reversePressed = true;
		_forwardPressed = false;
	}
	
	function _onReverseReleased() {
		trace('HorizontalControls/_onReleased');
		_reversePressed = false;
	}
	
	return HorizontalControls;
})();