Polyworks.MapPage = (function() {
	Polyworks.Utils.inherits(MapPage, Polyworks.Collection);
	
	function MapPage(params) {
		this.model = new Polyworks.Model(params);
		// trace('MapPage['+this.model.name+']/constructor');
	}
	
	MapPage.prototype.begin = function() {
		trace('----------------------- MapPage['+this.model.name+']/begin, model = ', this.model);
		this.addListeners();

		var pageStartX = this.model.start.x;
		var stateGroup = this.model.stateGroup;
		this.pageGroup = PolyworksGame.phaser.add.group();
		stateGroup.add(this.pageGroup._container);

		this.parseLevels(pageStartX);
		
		trace('\n\npost concat, attrs = ', this.model.attrs, '\n\n');
		
		if(this.model.selected) {
			this.pageGroup.visible = true;
		} else {
			this.pageGroup.visible = false;
		}

		this.model.attrs.push(this.addTitle());
		
		if(this.model.leftArrow) {
			var lBtn = this.addArrowButton('left', pageStartX);
			// trace('\t\tlBtn', lBtn);
			this.model.attrs.push(lBtn);
		}
		if(this.model.rightArrow) {
			var rBtn = this.addArrowButton('right', pageStartX);
			// trace('\t\trBtn', rBtn);
			this.model.attrs.push(rBtn);
		}
		trace('\tattrs now = ', this.model.attrs);
		MapPage._super.begin.call(this);
		// trace(this);

		var _this = this;
		Polyworks.Utils.each(this.model.collection,
			function(child) {
				_this.pageGroup.add(child);
			},
			this
		);
		// var background = this.getChildByName('background');
		// this.pageGroup.add(background);
		// 
		// var title = this.getChildByName('pageTitle');
		// this.pageGroup.add(title);
		// 
		// var leftArrow = this.getChildByName('leftArrowButton');
		// // trace('\t\tleftArrow: ', leftArrow);
		// if(leftArrow) {
		// 	// trace('\t\t\tadding left arrow to state group');
		// 	this.pageGroup.add(leftArrow);
		// }
		// var rightArrow = this.getChildByName('rightArrowButton');
		// // trace('\t\trightArrow: ', rightArrow);
		// if(rightArrow) {
		// 	// trace('\t\t\tadding right arrow to state group');
		// 	this.pageGroup.add(rightArrow);
		// }
	};
	
	MapPage.prototype.addListeners = function() {
		Polyworks.EventCenter.bind(Polyworks.Events.CHANGE_MAP_PAGE, this.onChangeMapPage, this);
	};
	
	MapPage.prototype.onChangeMapPage = function(event) {
		// trace('MapPage['+this.model.name+']/onChangeMapPage, event = ', event);
		if(event.value === this.model.idx) {
			this.pageGroup.visible = true;
		} else {
			this.pageGroup.visible = false;
		}
	};
	
	MapPage.prototype.parseLevels = function(pageStartX) {
		var stageUnit = Polyworks.Stage.unit;
		var levels = this.model.levels;
		// var attrs = this.model.attrs;
		var attributes = [];
		var currentLevel = 'level' + (PolyworksGame.currentLevel);
		var selected;
		var locked;
		var cleared; 
		var _this = this; 
		this.model.selected = false; 

		Polyworks.Utils.each(levels,
			function(level, idx) {
				selected = (level === currentLevel) ? true: false;
				if(selected) {
					_this.model.selected = true;
				}
				cleared = (PolyworksGame.levels[level].cleared) ? true: false;
				if(!selected) {
					locked = (PolyworksGame.levels[level].locked) ? true : false;
				} else {
					locked = false;
				}

				// // trace('\t\tidx = ' + idx);
				var start = {};
				start.x = (((stageUnit * 3.5) * idx) + (stageUnit * 2)) + pageStartX;
				start.y = (stageUnit * 4);

				// _this.model.attrs.push({
				// 	name: level,
				// 	cl: 'LevelIcon',
				// 	selected: selected,
				// 	locked: locked,
				// 	start: start,
				// 	cleared: cleared,
				// 	addTo: 'pageGroup',
				// 	pageGroup: _this.pageGroup
				// });
				var tempA = _this.model.attrs;
				var tempB = _this.addLevelIcon(
					{
						name: level,
						selected: selected,
						locked: locked,
						start: start,
						cleared: cleared
					}
				);
				_this.model.attrs = tempA.concat(tempB);
				trace('\t\t_this.model.attrs = ', _this.model.attrs);
				// _this.model.attrs.concat(_this.addLevelIcon({
				// 	name: level,
				// 	selected: selected,
				// 	locked: locked,
				// 	start: start,
				// 	cleared: cleared
				// }));
			},
			this
		);

		// return attributes;
	};
	
	MapPage.prototype.addLevelIcon = function(params) {
		trace('MapPage['+this.model.name+']/addLevelIcon, params = ', params);
		var levelIconWidth = (Polyworks.Stage.unit * 2);
		var levelIconHeight = (Polyworks.Stage.unit * 3);

		var levelIcon = [
		{
			name: 'levelIcon',
			cl: 'Sprite',
			attrs: {
				img: params.name + 'Icon',
				start: params.start,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight,
				}
			}
		},
		{
			name: 'selected',
			cl: 'Sprite',
			attrs: {
				img: 'levelSelectedIcon',
				start: params.start,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight,
					visible: params.selected
				}
			}
		},
		{
			name: 'locked',
			cl: 'Sprite',
			attrs: {
				img: 'levelLockedIcon',
				start: params.start,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight,
					visible: params.locked
				}
			}
		},
		{
			name: 'cleared',
			cl: 'Sprite',
			attrs: {
				img: 'levelClearedIcon',
				start: params.start,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight,
					visible: params.cleared
				}
			}
		},
		{
			name: 'invisButton',
			cl: 'InputButton',
			attrs: {
				img: 'greyRect',
				start: params.start,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight,
					alpha: 0.1,
					visible: ((params.locked) ? false : true)
				},
				events: {
					pressed: {
						type: Polyworks.Events.CHANGE_STATE,
						value: params.name
					}
				}
			}
		}
		];
		
		
		return levelIcon;
	};
	
	MapPage.prototype.addTitle = function() {
		var title = this.model.title;
		title.attrs.start.x = this.model.start.x;

		return title;
	};
	
	MapPage.prototype.addArrowButton = function(direction, pageStartX) {
		trace('MapPage['+this.model.name+']/addArrow, direction = ' + direction + ', start x = ' + pageStartX);
		var stageUnit = Polyworks.Stage.unit;
		var img;
		var eventValue;
		var buttonX; 
		var levelIconWidth = (Polyworks.Stage.unit * 1);
		var levelIconHeight = (Polyworks.Stage.unit * 3);

		if(direction === 'left') {
			img = 'pageLeftArrow';
			eventValue = ((this.model.idx) - 1);
			buttonX = 0 + pageStartX;
		} else {
			img = 'pageRightArrow';
			eventValue = ((this.model.idx) + 1);
			buttonX = (((stageUnit * 3.5) * 4) + (stageUnit * 2)) + pageStartX;
		}

		var arrowButton = {
			name: direction + 'ArrowButton',
			cl: 'InputButton',
			attrs: {
				img: img,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight
				},
				start: {
					x: buttonX,
					y: (stageUnit * 3.5)
				},
				events: {
					pressed: {
						type: Polyworks.Events.CHANGE_MAP_PAGE,
						value: eventValue
					}
				}
			}
		};

		return arrowButton;
	};
	
	return MapPage;
})();