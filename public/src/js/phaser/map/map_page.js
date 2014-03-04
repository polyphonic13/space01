Polyworks.MapPage = (function() {
	Polyworks.Utils.inherits(MapPage, Polyworks.Collection);
	
	function MapPage(params) {
		this.model = new Polyworks.Model(params);
		trace('MapPage['+this.model.name+']/constructor');
	}
	
	MapPage.prototype.begin = function() {
		trace('MapPage['+this.model.name+']/begin');
		this.parseLevels();
		
		trace('\tattrs now = ', this.model.attrs);
		MapPage._super.begin.call(this);
	};
	
	MapPage.prototype.parseLevels = function() {
		var stageUnit = Polyworks.Stage.unit;
		var levels = this.model.levels;
		var attrs = this.model.attrs;
		var currentLevel = 'level' + (PolyworksGame.currentLevel);
		var selected;
		var locked;
		
		Polyworks.Utils.each(levels,
			function(level, idx) {
				
				selected = false;
				locked = (!PolyworksGame.levels[level].cleared) ? true : false;
				if(level === currentLevel) {
					selected = true;
					locked = false;
				}
				trace('\t\tidx = ' + idx);
				var start = {};
				start.x = (stageUnit) + ((stageUnit * 2) * idx);
				start.y = (stageUnit * 2);
				
				attrs.push({
					name: level,
					cl: 'LevelIcon',
					selected: selected,
					locked: locked,
					start: start
				});
			},
			this
		);
	};
	
	return MapPage;
})();