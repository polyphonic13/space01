var ControlButton = (function() {
	Utils.inherits(ControlButton, View);
	
	// var this.model = {
	// 	type: 'Circle',
	// 	x: 0,
	// 	y: 0,
	// 	radius: 40,
	// 	fill: '#aaaaaa',
	// 	stroke: '#000000',
	// 	strokeWidth: 2,
	// 	layer: null
	// };
	// var _circle;
	function ControlButton(params) {
		// trace('ControlButton/constructor');
		// this.model = Utils.extend(this.model, params);
		ControlButton._super.constructor.call(this, params);
		this.pressed = false;
		this.wasPressed = false;

		_buildViews();
		_addListeners();
	}

	ControlButton.prototype.onPressed = function(evt) {
		// trace('ControlButton/_onPressed');
		// trace(evt);
		this.pressed = true;
		this.wasPressed = true;
		this.triggerCallback({ type: 'pressed', value: this.model.id });
	};
	
	ControlButton.prototype.onReleased = function(evt) {
		// trace('ControlButton/_onReleased');
		// trace(evt);
		this.pressed = false;
		this.triggerCallback({ type: 'released', value: this.model.id });
	};
	
	ControlButton.prototype.triggerCallback = function(evt) {
		if(this.model.eventCallback) {
			this.model.eventCallback.call(this, evt);
		}
	};
	
	ControlButton.prototype.remove = function() {
		this.btn.off('mousedown touchstart');
		this.btn.off('mouseup touchend');
		this.model.layer.remove();
	};
	
	function _buildViews() {
		this.btn = this.addImage(this.model.view, this.model);
    }

	function _addListeners() {
		this.btn.on('mousedown touchstart', function(evt) {
			this.onPressed(evt);
		});
		this.btn.on('mouseup touchend', function(evt) {
			this.onReleased(evt);
		});
	}
	
	return ControlButton;
})();