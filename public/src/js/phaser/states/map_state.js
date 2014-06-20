PWG.MapState = (function() {
	PWG.Utils.inherits(MapState, PWG.MenuState); 
	
	function MapState(params) {
		MapState._super.constructor.call(this, params);
	}

	MapState.prototype.createState = function() {
		var stateGroup = PWGGame.phaser.add.group();
		this.model.stateGroup = stateGroup;

		MapState._super.createState.call(this);

		var winW = PWG.Stage.winW;
		var stageWidth = PWG.Stage.width;

		this.createPages(winW, stageWidth, stateGroup);
	};

	MapState.prototype.createPages = function(winW, stageWidth, stateGroup) {
		this.model.pageCollection = [];
		var pages = this.model.pages;
		var mapPage;

		PWG.Utils.each(pages,
			function(page, idx) {
				page.addTo = 'stateGroup';
				page.stateGroup = stateGroup;
				page.idx = idx;
				page.start = {
					x: (winW/2) - (stageWidth/2),
					y: 0
				};
				if(idx > 0) {
					page.leftArrow = true;
				}
				if(idx < (pages.length - 1)) {
					page.rightArrow = true;
				}
				mapPage = new PWG.MapPage(page);
				mapPage.begin();
				this.model.pageCollection.push(mapPage);
			},
			this
		);
	};
	
	return MapState;
})();