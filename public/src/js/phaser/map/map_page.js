Polyworks.MapPage = (function() {
	Polyworks.Utils.inherits(MapPage, Polyworks.Collection);
	
	function MapPage(params) {
		this.model = new Polyworks.Model(params);
		trace('MapPage['+this.model.name+']/constructor');
	}
	
	MapPage.prototype.begin = function() {
		trace('MapPage['+this.model.name+']/begin, model = ', this.model);
		this.parseLevels();

		trace('\tattrs now = ', this.model.attrs);
		MapPage._super.begin.call(this);
	};
	
	MapPage.prototype.parseLevels = function() {
		var stageUnit = Polyworks.Stage.unit;
		var levels = this.model.levels;
		var attrs = this.model.attrs;
		var pageStartX = this.model.start.x;
		var currentLevel = 'level' + (PolyworksGame.currentLevel);
		var selected;
		var locked;
		var cleared; 
		var stateGroup = this.model.stateGroup;

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
				start.y = (stageUnit * 3);

				attrs.push({
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
	};
	
	return MapPage;
})();