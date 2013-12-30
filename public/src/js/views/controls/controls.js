var Controls = (function() {
	
	var _this; 
	
	function Controls(params) {
		_this = this;
		_this.buttons = params;
	}
	
	Controls.prototype.setImages = function(imageManager, canvas) {
		for(var key in _this.buttons) {
			_this.buttons[key].img = imageManager.images[key];
			_this.buttons[key].img.setAttribute("id", key);
		}
		// trace('Controls/setImages, _this.buttons =');
		// trace(_this.buttons);
		
		_addListeners(canvas);
	};
	
	// Controls.prototype.addControls = function(parentEl) {
	Controls.prototype.addControls = function(ctx) {
		
		// trace('Controls/addControls');
		var btn;
		for(var key in _this.buttons) {
			btn = _this.buttons[key];
			// trace('\tdrawing ');
			// trace(btn.img);
			// trace('\t\tproperties = x/y: ' + btn.x + '/' + btn.y + ', width/height: ' + btn.width + '/' + btn.height);
			ctx.drawImage(btn.img, btn.x, btn.y, btn.width, btn.height);
			// _addListeners(btn.img, btn.id);
		}
		// var div;
		// var btn;
		// var btnEl;
		// var style;
		// 
		// for(var key in _this.buttons) {
		// 	btn = _this.buttons[key];
		// 	
		// 	div = $('<div />');
		// 	div.append(btn.img);
		// 	parentEl.append(div);
		// 	
		// 	_addListeners(div, btn.id);
		// 	
		// 	style = {
		// 		left: (btn.x + 'px'),
		// 		top: (btn.y + 'px')
		// 	};
		// 	// trace('style = ');
		// 	// trace(style);
		// 	btnEl = $(btn.img);
		// 
		// 	btnEl.addClass('controlBtn');
		// 	btnEl.css(style);
		// 	// trace(btnEl);
		// }
	};
	
	Controls.prototype.getForward = function() {
		return _this.buttons['forward'].pressed;
	};
	
	Controls.prototype.getReverse = function() {
		return _this.buttons['reverse'].pressed;
	};
	
	Controls.prototype.getJumping = function() {
		return _this.buttons['jump'].pressed;
	};
	
	Controls.prototype.setJumping = function(val) {
		return _this.buttons['jump'].pressed = false;
	};

	function _addListeners(canvas) {
		canvas.addEventListener('mousedown', function(evt) {
			_onPressed(evt);
		});
		canvas.addEventListener('touchstart', function(evt) {
			_onPressed(evt);
		});
		canvas.addEventListener('mouseup', function(evt) {
			_onReleased(evt);
		});
		canvas.addEventListener('touchend', function(evt) {
			
		});
	}
	/*
	function _addListeners(btn, id) {
		btn.addEventListener('mousedown', function() {
			switch(id) {
				case 'reverse':
				_onReverseDown();
				break;
				
				case 'forward':
				_onForwardDown();
				break;
				
				case 'jump': 
				_onJumpDown();
				break;
				
				default: 
				// trace('unknown button type');
				break;
				
			}
		});

		btn.addEventListener('touchstart', function() {
			switch(id) {
				case 'reverse':
				_onReverseDown();
				break;
				
				case 'forward':
				_onForwardDown();
				break;
				
				case 'jump': 
				_onJumpDown();
				break;
				
				default: 
				// trace('unknown button type');
				break;
				
			}
		});

		btn.addEventListener('mouseup', function() {
			switch(id) {
				case 'reverse':
				_onReverseUp();
				break;
				
				case 'forward':
				_onForwardUp();
				break;
				
				case 'jump': 
				_onJumpUp();
				break;
				
				default: 
				// trace('unknown button type');
				break;
				
			}
		});

		btn.addEventListener('touchend', function() {
			switch(id) {
				case 'reverse':
				_onReverseUp();
				break;
				
				case 'forward':
				_onForwardUp();
				break;
				
				case 'jump': 
				_onJumpUp();
				break;
				
				default: 
				// trace('unknown button type');
				break;
			}
		});
	};
	
	*/

	function _onPressed(evt) {
		// trace('Controls/_onPressed');
		// trace(evt);
		var hits = _checkHitRegions(evt);
		// trace('\tpost check hit regions, hits = ');
		// trace(hits);
		for(var key in hits) {
			// trace('hits['+key+'] = ' + hits[key]);
			if(hits[key]) {
				_this.buttons[key].pressed = true;
				// do not allow for both forward and reverse to be true at the same time:
				if(key == 'forward') {
					_this.buttons['reverse'].pressed = false;
				} else if(key === 'reverse') {
					_this.buttons['forward'].pressed = false;
				}
			}
			// _this.buttons[key] = hits[key];
		}
		// trace('POST PRESS, _this.buttons = ');
		// trace(_this.buttons);
	}
	
	function _onReleased(evt) {
		// trace('Controls/_onReleased');
		// trace(evt);
		var hits = _checkHitRegions(evt);
		var hit;
		var noButtons = true;
		for(var key in hits) {
			if(hits[key]) {
				noButtons = false;
				if(key !== 'junp') {
					_this.buttons[key].pressed = false;
					// do not allow for both forward and reverse to be true at the same time:
					if(key == 'forward') {
						_this.buttons['reverse'].pressed = false;
					} else if(key === 'reverse') {
						_this.buttons['forward'].pressed = false;
					}
				}
			}
		}
		if(noButtons) {
			// a release was triggered off of the defined button areas (turn every button off)
			for(var key in _this.buttons) {
				if(key !== 'jump') {
					_this.buttons[key].pressed = false;
				}
			}
		}
		// trace('POST RELEASE, _this.buttons = ');
		// trace(_this.buttons);
	}
	function _checkHitRegions(evt) {
		var pos = _getEventPosition(evt);
		// var hitRegions = _this.hitRegions;
		var hitRegions = _this.buttons;
		var hits = {};
		// loop through all controls' hit regions, checking against position of event hit
		for(var key in hitRegions) {
			hits[key] = _checkHitRegion(pos, hitRegions[key]);
			// trace('hits['+key+'] = ' + hits[key]);
		}
		return hits;
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

	function _resetPressedButtons() {
		for(var key in _this.buttons) {
			_this.buttons[key].pressed = false;
		}
	}

	return Controls;
	
})();