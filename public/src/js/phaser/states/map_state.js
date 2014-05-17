Polyworks.MapState = (function() {
	Polyworks.Utils.inherits(MapState, Polyworks.MenuState); 
	
	function MapState(params) {
		MapState._super.constructor.call(this, params);
	}

	MapState.prototype.createState = function() {
		var stateGroup = PolyworksGame.phaser.add.group();
		this.model.stateGroup = stateGroup;

		MapState._super.createState.call(this);

		var winW = Polyworks.Stage.winW;
		var stageWidth = Polyworks.Stage.width;

		this.createPages(winW, stageWidth, stateGroup);
		// this.createLevelInfo(winW, stageWidth, stateGroup);
		this.addListeners();
	};

	MapState.prototype.createPages = function(winW, stageWidth, stateGroup) {
		this.model.pageCollection = [];
		var pages = this.model.pages;
		var mapPage;

		Polyworks.Utils.each(pages,
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
				mapPage = new Polyworks.MapPage(page);
				mapPage.begin();
				this.model.pageCollection.push(mapPage);
			},
			this
		);
	};
	
	MapState.prototype.addListeners = function() {
		Polyworks.EventCenter.bind(Polyworks.Events.SHOW_LEVEL_INFO, this.onShowLevelInfo, this);
		Polyworks.EventCenter.bind(Polyworks.Events.HIDE_LEVEL_INFO, this.onHideLevelInfo, this);
	};
	
	MapState.prototype.removeListeners = function() {
		Polyworks.EventCenter.unbind(Polyworks.Events.SHOW_LEVEL_INFO, this.onShowLevelInfo, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.HIDE_LEVEL_INFO, this.onHideLevelInfo, this);
	};
	
	MapState.prototype.onShowLevelInfo = function(event) {
		// trace('MapState/onShowLevelInfo, event = ', event, this);
		var collection = this.model.collection;
		Polyworks.Utils.each(collection,
			function(child) {
				if(child.hide) {
					child.hide();
				}
			},
			this
		);

		this.model.levelInfoCollection[event.value].show();
	};
	
	MapState.prototype.onHideLevelInfo = function(event) {
		// trace('MapState/onHideLevelInfo, event = ', event);
		var collection = this.model.collection;
		Polyworks.Utils.each(collection,
			function(child) {
				if(child.show) {
					child.show();
				}
			},
			this
		);

		this.model.levelInfoCollection[event.value].hide();
	};
	
	MapState.prototype.shutdown = function() {
		this.removeListeners();
		MapState._super.shutdown.call(this);
	};
	
	return MapState;
})();