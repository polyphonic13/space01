Polyworks.MapPage = (function() {
	Polyworks.Utils.inherits(MapPage, Polyworks.Collection);
	
	function MapPage(params) {
		this.model = new Polyworks.Model(params);
		trace('MapPage['+this.model.name+']/constructor');
	}
	
	MapPage.prototype.begin = function() {
		trace('MapPage['+this.model.name+']/begin, model = ', this.model);
		var stateGroup = this.model.stateGroup;
		var pageStartX = this.model.start.x;
		this.model.attrs = this.parseLevels(stateGroup, pageStartX);
		this.model.attrs.push(this.addTitle(stateGroup));
		
		// if(this.model.leftArrow) {
		// 	var lBtn = this.addArrowButton('left', pageStartX);
		// 	trace('============= LEFT BUTTON');
		// 	trace(lBtn);
		// 	this.model.attrs.push(lBtn);
		// }
		// if(this.model.rightArrow) {
		// 	var rBtn = this.addArrowButton('right', pageStartX);
		// 	trace('============= RIGHT BUTTON');
		// 	trace(rBtn);
		// 	this.model.attrs.push();
		// }
		trace('\tattrs now = ', this.model.attrs);
		MapPage._super.begin.call(this);

		var title = this.getChildByName('pageTitle');
		stateGroup.add(title);
		// 
		// var leftArrow = this.getChildByName('leftArrowButton');
		// if(leftArrow) {
		// 	stateGroup.add(leftArrow);
		// }
		// var rightArrow = this.getChildByName('rightArrowButton');
		// if(rightArrow) {
		// 	stateGroup.add(rightArrow);
		// }
	};
	
	MapPage.prototype.parseLevels = function(stateGroup, pageStartX) {
		var stageUnit = Polyworks.Stage.unit;
		var levels = this.model.levels;
		// var attrs = this.model.attrs;
		var attributes = [];
		var currentLevel = 'level' + (PolyworksGame.currentLevel);
		var selected;
		var locked;
		var cleared; 

		Polyworks.Utils.each(levels,
			function(level, idx) {

				selected = (level === currentLevel) ? true: false;
				cleared = (PolyworksGame.levels[level].cleared) ? true: false;
				if(!selected) {
					locked = (PolyworksGame.levels[level].locked) ? true : false;
				} else {
					locked = false;
				}

				// trace('\t\tidx = ' + idx);
				var start = {};
				start.x = (((stageUnit * 3.5) * idx) + (stageUnit * 2)) + pageStartX;
				start.y = (stageUnit * 5);

				attributes.push({
					name: level,
					cl: 'LevelIcon',
					selected: selected,
					locked: locked,
					start: start,
					cleared: cleared,
					addTo: 'stateGroup',
					stateGroup: stateGroup
				});
			},
			this
		);
		return attributes;
	};
	
	MapPage.prototype.addTitle = function(stateGroup, pageStartX) {
		var title = this.model.title;
		title.attrs.start.x = this.model.start.x;
		return title;
	};

	MapPage.prototype.addArrowButton = function(direction, pageStartX) {
		var stageUnit = Polyworks.Stage.unit;
		var img;
		var eventValue;
		var buttonX; 
		
		if(direction === 'left') {
			img = 'pageLeftArrow';
			eventValue = 'backward';
			buttonX = 0 + pageStartX;
		} else {
			img = 'pageRightArrow';
			eventValue = 'forward';
			buttonX = (Polyworks.Stage.winW - (stageUnit * 3.5)) + pageStartX;
		}
		var arrowButton = {
			name: direction + 'ArrowButton',
			cl: 'InputButton',
			img: img,
			start: {
				x: buttonX,
				y: (stageUnit * 5)
			},
			events: {
				pressed: {
					type: Polyworks.Events.CHANGE_STATE,
					value: eventValue
				}
			}
			
		}
		return arrowButton;
	};
	
	return MapPage;
})();