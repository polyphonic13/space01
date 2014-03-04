Polyworks.MapPage = (function() {
	Polyworks.Utils.inherits(MapPage, Polyworks.Collection);
	
	function MapPage(params) {
		this.model = new Polyworks.Model(params);
		trace('MapPage['+this.model.name+']/constructor');
	}
	
	MapPage.prototype.begin = function() {
		trace('MapPage['+this.model.name+']/begin, model = ', this.model);
		var stateGroup = this.model.stateGroup;
		this.model.attrs = this.parseLevels(stateGroup);
		this.model.attrs.push(this.addTitle(stateGroup));
		trace('\tattrs now = ', this.model.attrs);
		MapPage._super.begin.call(this);

		var title = this.getChildByName('pageTitle');
		stateGroup.add(title);
	};
	
	MapPage.prototype.parseLevels = function(stateGroup) {
		var stageUnit = Polyworks.Stage.unit;
		var levels = this.model.levels;
		// var attrs = this.model.attrs;
		var attributes = [];
		var pageStartX = this.model.start.x;
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

				trace('\t\tidx = ' + idx);
				var start = {};
				start.x = (((stageUnit * 4) * idx) + (stageUnit * 2)) + pageStartX;
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
	
	MapPage.prototype.addTitle = function(stateGroup) {
		var title = this.model.title;
		title.attrs.start.x = this.model.start.x;
		return title;
	};

	return MapPage;
})();