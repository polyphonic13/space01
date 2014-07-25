PWG.MapPage = (function() {
	PWG.Utils.inherits(MapPage, PWG.Collection);
	
	function MapPage(params) {
		MapPage._super.constructor.call(this, params);
		// trace('MapPage['+this.model.name+']/constructor');
	}
	
	MapPage.prototype.begin = function() {
		// trace('MapPage['+this.model.name+']/begin, model = ', this.model);
		this.addListeners();

		var pageStartX = this.model.start.x;
		var stageWidth = PWG.Stage.width;
		var stageSeventh = stageWidth/7;

		var stateGroup = this.model.stateGroup;
		this.pageGroup = PolyworksGame.phaser.add.group();
		// stateGroup.add(this.pageGroup._container);
		stateGroup.add(this.pageGroup);

		var levels = this.model.levels;

		PWG.Utils.each(levels,
			function(level) {
				// trace('\tlevel = ' + level + ', currentLevelString = ' + currentLevelString);
				if(level === PolyworksGame.currentLevel) {
					this.model.selected = true;
				}
			},
			this
		);

		if(this.model.selected) {
			this.pageGroup.visible = true;
		} else {
			this.pageGroup.visible = false;
		}

		if(this.model.leftArrow) {
			var lBtn = this.addArrowButton('left', pageStartX, stageSeventh);
			// trace('\t\tlBtn', lBtn);
			this.model.attrs.push(lBtn);
		}
		if(this.model.rightArrow) {
			var rBtn = this.addArrowButton('right', pageStartX, stageSeventh);
			// trace('\t\trBtn', rBtn);
			this.model.attrs.push(rBtn);
		}

		MapPage._super.begin.call(this);
		// trace(this);
		// trace('end of MapPage super begin, collection = ', this.model.collection);
		var _this = this;
		PWG.Utils.each(this.model.collection,
			function(child) {
				// trace('\tadding child['+child.model.name+'] to group');
				_this.pageGroup.add(child);
			},
			this
		);
	};
	
	MapPage.prototype.addListeners = function() {
		PWG.EventCenter.bind(PWG.Events.CHANGE_MAP_PAGE, this.onChangeMapPage, this);
	};
	
	MapPage.prototype.onChangeMapPage = function(event) {
		// trace('MapPage['+this.model.name+']/onChangeMapPage, event = ', event);
		if(event.value === this.model.idx) {
			this.pageGroup.visible = true;
		} else {
			this.pageGroup.visible = false;
		}
	};
	
	MapPage.prototype.addTitle = function() {
		var title = this.model.title;
		title.attrs.start.x = this.model.start.x;

		return title;
	};
	
	MapPage.prototype.addArrowButton = function(direction, pageStartX, stageSeventh) {
		// trace('MapPage['+this.model.name+']/addArrow, direction = ' + direction + ', start x = ' + pageStartX);
		var stageUnit = PWG.Stage.unit;
		var img;
		var eventValue;
		var buttonX; 
		var levelIconWidth = (PWG.Stage.unit * 1.6);
		var levelIconXOffset = (stageSeventh/2) - (levelIconWidth/2);
		var levelIconHeight = (PWG.Stage.unit * 2);

		if(direction === 'left') {
			img = 'pageLeftArrow';
			eventValue = ((this.model.idx) - 1);
			// buttonX = 0 + pageStartX + levelIconXOffset;
			buttonX = 0 + pageStartX;
		} else {
			img = 'pageRightArrow';
			eventValue = ((this.model.idx) + 1);
			// buttonX = (((stageUnit * 3.5) * 4) + (stageUnit * 2)) + pageStartX;
			buttonX = (stageSeventh * 6) + pageStartX + (levelIconXOffset * 2);
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
					y: (stageUnit * 4)
				},
				events: {
					pressed: {
						type: PWG.Events.CHANGE_MAP_PAGE,
						value: eventValue
					}
				}
			}
		};

		return arrowButton;
	};
	
	return MapPage;
})();