Polyworks.MapState = (function() {
	Polyworks.Utils.inherits(MapState, Polyworks.MenuState); 
	
	function MapState(params) {
		MapState._super.constructor.call(this, params);
	}

	MapState.prototype.createState = function() {
		trace('MapState/createState, this = ', this);
		// MapState._super.createState.call(this);
		var stateGroup = PolyworksGame.phaser.add.group();
		this.model.stateGroup = stateGroup;

		var pages = this.model.pages;
		var winW = Polyworks.Stage.winW;
		var stageWidth = Polyworks.Stage.width;
		trace('\tpages = ', pages);

		this.model.world.width = (pages.length * winW);

		this.model.pageCollection = [];
		var mapPage;

		Polyworks.Utils.each(pages,
			function(page, idx) {
				trace('\tcreating MapPage with: ', page);
				page.addTo = 'stateGroup';
				page.stateGroup = stateGroup;
				page.start = {
					x: (winW/2 - stageWidth/2) + (idx * winW),
					y: 0
				};
				if(idx > 0) {
					page.leftArrow = true;
				}
				if(idx < (pages.length - 1)) {
					page.rightArrow = true;
				}
				mapPage = new Polyworks.MapPage(page);
				mapPage.begin();
				this.model.pageCollection.push(mapPage);
				// this.model.attrs.push(page);
			},
			this
		);

		MapState._super.createState.call(this);

	};
	
	return MapState;
})();