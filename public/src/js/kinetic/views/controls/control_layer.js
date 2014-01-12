var ControlLayer = (function() {
	
	var _this;
	var _pressedButtons = {};
	
	function ControlLayer(params) {
		_this = this;
		_this.model = params;

		// ensure that control layer is a fresh, clean layer
		_this.model.layer = new Kinetic.Layer();

		_buildViews();
		_addListeners();
	}
	
	ControlLayer.prototype.setStage = function(stage) {
		this.model.stage = stage;
		stage.add(this.model.layer);
		if(this.model.joystick) {
			this.model.joystick.setStage(stage);
		}
	};
	
	ControlLayer.prototype.reset = function() {
		_resetPressedButtons();
	};
	
	ControlLayer.prototype.getPressedButtons = function() {
		return _pressedButtons;
	};
	
	ControlLayer.prototype.getQuit = function() {
		return _pressedButtons['quitButton'];
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
	
	ControlLayer.prototype.remove = function() {
		_this.model.layer.remove();
	};
	
	function _buildViews() {
		// trace('ControlLayer/_buildViews');
		var views = _this.model.views
		var view;

		// per this article:  http://stackoverflow.com/questions/12804710/android-4-html5-canvas-not-redrawing
		var bg = new Kinetic.Rect({
			x: 0,
			y: 0,
			width: stageConfig.width,
			height: stageConfig.height,
			fill: 'red',
			stroke: 'red',
			strokeWidth: 1,
			opacity: 0.5,
			draggable: false
		});
		_this.model.layer.add(bg); 

		for(var i = 0; i < views.length; i++) {
			if(views[i].type === 'Joystick') {
				_this.model.joystick = new Joystick();
			} else if(views[i].type === 'Image') {
				_buildImageView(views[i]);
			} else {
				view = new Kinetic[views[i].type](views[i]);
				_this.model.layer.add(view);
			}
			_pressedButtons[views[i].id] = false;
		}
	}
	
	function _buildImageView(params) {
	    var imageObj = new Image();
		var _model = _this.model;
		
		var imgConfig = {
			x: params.x,
			y: params.y,
			width: params.width,
			height: params.height,
			image: imageObj
		};

	    imageObj.onload = function() {
			var image = new Kinetic.Image(imgConfig);
			_model.layer.add(image);
			_model.layer.draw(); // layer has to have draw called each time there is a change
	    };
	    imageObj.src = params.src;
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
		// trace('ControlLayer/_onPressed');
		// trace(evt);
		var hits = _checkHitRegions(evt);
		// trace('\tpost check hit regions, hits = ');
		// trace(hits);
		for(var key in hits) {
			// trace('hits['+key+'] = ' + hits[key]);
			if(hits[key]) {
				_pressedButtons[key] = true;
				// do not allow for both forward and reverse to be true at the same time:
				if(key == 'forwardButton') {
					_pressedButtons['reverseButton'] = false;
				} else if(key === 'reverseButton') {
					_pressedButtons['forwardButton'] = false;
				}
			}
			// _pressedButtons[key] = hits[key];
		}
		// trace('POST PRESS, _pressedButtons = ');
		// trace(_pressedButtons);
	}
	
	function _onReleased(evt) {
		// trace('ControlLayer/_onReleased');
		// trace(evt);
		var hits = _checkHitRegions(evt);
		var hit;
		var noButtons = true;
		for(var key in hits) {
			if(hits[key]) {
				_pressedButtons[key] = false;
				noButtons = false;
				// do not allow for both forward and reverse to be true at the same time:
				if(key == 'forwardButton') {
					_pressedButtons['reverseButton'] = false;
				} else if(key === 'reverseButton') {
					_pressedButtons['forwardButton'] = false;
				}
			}
		}
		if(noButtons) {
			// a release was triggered off of the defined button areas (turn every button off)
			for(var key in _pressedButtons) {
				_pressedButtons[key] = false;
			}
		}
		// trace('POST RELEASE, _pressedButtons = ');
		// trace(_pressedButtons);
	}
	
	function _checkHitRegions(evt) {
		var pos = _getEventPosition(evt);
		var hitRegions = _this.model.hitRegions;
		var hits = {};
		// loop through all controls' hit regions, checking against position of event hit
		for(var key in hitRegions) {
			hits[key] = _checkHitRegion(pos, hitRegions[key]);
			// trace('hits['+key+'] = ' + hits[key]);
		}
		return hits;
	}

	function _resetPressedButtons() {
		for(var key in _pressedButtons) {
			_pressedButtons[key] = false;
		}
	}
	
	function _checkHitRegion(pos, hitRegion) {
		// if x/y of pos (hit/touch) is within x/y/width/height bounds of region, a hit happened
		var xHit = (pos.x > hitRegion.x && pos.x < (hitRegion.x + hitRegion.width)) ? true : false;
		var yHit = (pos.y > hitRegion.y && pos.y < (hitRegion.y + hitRegion.height)) ? true : false;
		var hit = (xHit && yHit) ? true : false;
		// trace('_checkHitRegion\n\t\tpos: ' + pos.x + '/' + pos.y + '\n\t\thitRegion: horizontal = ' + hitRegion.x + '/' + (hitRegion.x + hitRegion.width) + ', vertical = ' + hitRegion.y + '/' + (hitRegion.y + hitRegion.height) + '\n\t\txHit = ' + xHit + ', yHit = ' + yHit + ', hit = ' + hit);
		return hit;
	}
	
	function _getEventPosition(evt) {
		var pos = {};
		if(evt.changedTouches && evt.changedTouches.length > 0) {
			// trace('there are changedTouches');
			pos = {
				// x: evt.targetTouches[0].clientX,
				// y: evt.targetTouches[0].clientY
				x: evt.changedTouches[0].clientX,
				y: evt.changedTouches[0].clientY
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
	
	return ControlLayer;
})();