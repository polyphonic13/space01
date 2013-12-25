var ControlLayer = (function() {
	
	var _this;
	var _pressedButtons = {};
	
	function ControlLayer(params) {
		_this = this;
		_this.model = params;
		
		if(!_this.model.layer) {
			_this.model.layer = new Kinetic.Layer();
		}
		
		_buildViews();
		_addListeners();
	}
	
	ControlLayer.prototype.setStage = function(stage) {
		this.model.stage = stage;
		stage.add(this.model.layer);
	};
	
	ControlLayer.prototype.getForward = function() {
		return _pressedButtons['forwardButton'];
	};
	
	ControlLayer.prototype.getReverse = function() {
		return _pressedButtons['reverseButton'];
	};
	
	ControlLayer.prototype.getJumped = function() {
		return _pressedButtons['jumpButton'];
	};
	
	function _buildViews() {
		var views = _this.model.views
		var view;
		for(var i = 0; i < views.length; i++) {
			view = new Kinetic[views[i].type](views[i]);
			_this.model.layer.add(view);
			_pressedButtons[views[i].id] = false;
		}
	}
	
	function _addListeners() {
		_this.model.layer.on("mousedown touchstart", function(evt) {
			_onPressed(evt);
		});
		_this.model.layer.on("mouseup touchend", function(evt) {
			_onReleased(evt);
		});
	}
	
	function _onPressed(evt) {
		trace('ControlLayer/_onPressed');
		trace(evt);
		var hits = _checkHitRegions(evt);
		for(var key in hits) {
			_pressedButtons[key] = hits[key];
		}
		trace(_pressedButtons);
	}
	
	function _onReleased(evt) {
		trace('ControlLayer/_onReleased');
		trace(evt);
		var hits = _checkHitRegions(evt);
		var hit;
		for(var key in hits) {
			if(hits[key]) {
				_pressedButtons[key] = false;
			}
		}
		trace(_pressedButtons);
	}
	
	function _checkHitRegions(evt) {
		var pos = _getEventPosition(evt);
		var hitRegions = _this.model.hitRegions;
		var hits = {};
		// loop through all controls' hit regions, checking against position of event hit
		for(var key in hitRegions) {
			hits[key] = _checkHitRegion(pos, hitRegions[key]);
		}
		return hits;
	}

	function _checkHitRegion(pos, hitRegion) {
		// if x/y of pos (hit/touch) is within x/y/width/height bounds of region, a hit happened
		var xHit = (pos.x > hitRegion.x && pos.x < hitRegion.width) ? true : false;
		var yHit = (pos.y > hitRegion.y && pos.y < hitRegion.height) ? true : false;
		var hit = (xHit && yHit) ? true : false;
		trace('_checkHitRegion\n\tpos: ' + pos.x + '/' + pos.y + '\n\thitRegion: ' + hitRegion.x + '/' + hitRegion.y + ', ' + hitRegion.width + '/' + hitRegion.height + '\n\txHit = ' + xHit + ', yHit = ' + yHit + ', hit = ' + hit);
		return hit;
	}
	
	function _getEventPosition(evt) {
		var pos = {};
		if(evt.targetTouches && evt.targetTouches.length > 0) {
			trace('there are target touches');
			pos = {
				x: evt.targetTouches[0].clientX,
				y: evt.targetTouches[0].clientY
			}
		} else {
			trace('no target touches');
			pos = {
				x: evt.x,
				y: evt.y
			}
		}
		return pos;
	}
	
	return ControlLayer;
})();