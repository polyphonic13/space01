var Controls = (function() {

	var _this;
	var _views = {};
	
	function Controls(params) {
		_this = this;
		this.model = params;
		// ensure that control layer is a fresh, clean layer
		this.model.layer = new Kinetic.Layer();

		this.addViews(this.model.views);
	}
	
	Controls.prototype.setStage = function(stage) {
		for(var key in _views) {
			_views[key].setStage(stage);
		}
	};
	
	Controls.prototype.getForward = function() {
		return _views['joystick'].getForward();
	};
	
	Controls.prototype.getReverse = function() {
		return _views['joystick'].getReverse();
	};
	
	Controls.prototype.getJumped = function() {
		return _views['joystick'].getJumped();
	};
	
	Controls.prototype.getWasPressed = function(btn) {
		return _views[btn].getWasPressed();
		// return false;
	};
	
	Controls.prototype.remove = function() {
		for(var key in _views) {
			_views[key].remove();
		}
		this.model.layer.remove();
	};
	
	Controls.prototype.addViews = function(views) {
		// trace('Controls/_addViews');
		for(var key in views) {
			// trace('\tviews['+key+'].type = ' + views[key].type);
			_views[views[key].id] = new ControlTypes[views[key].type](views[key]);
		}

	}
	
	return Controls;
})();