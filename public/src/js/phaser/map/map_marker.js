PWG.MapMarker = (function() {
	PWG.Utils.inherits(MapMarker, PWG.Sprite);
	
	function MapMarker(params) {
		MapMarker._super.constructor.call(this, params);
	}
	
	MapMarker.prototype.begin = function() {
		// trace('MapMarker['+this.model.name+']/begin, level = ' + this.model.level);
		MapMarker._super.begin.call(this);

		var name = this.model.name;
		this.model.level = parseInt(name.replace('mapLevelMarker', ''));
		var currentLevel = PolyworksGame.currentLevel;
		var levelStatus = PolyworksGame.levelStatus[this.model.level];

		if(levelStatus === 'l') {
			this.frame = 14;
		} else {
			if(levelStatus === 'c') {
				this.frame = this.model.level;
			} else {
				this.frame = 15; // u (cleared)
			}
			this.input.start();
			this.addListeners();
		}
		// TESTING
		// this.frame = 15;
		// this.input.start();
		// this.addListeners();
	};
	
	MapMarker.prototype.addListeners = function() {
		var ctx = this;
		this.events.onInputDown.add(function(event, pointer) {
			this.inputDown(event, pointer, ctx);
		}, this);
		this.events.onInputUp.add(function(event, pointer) {
			this.inputUp(event, pointer, ctx);
		}, this);
	};
	
	MapMarker.prototype.inputDown = function(event, pointer, ctx) {
		// trace('MapMarker['+this.model.name+']/inputDown');
		ctx.pressed = true;
	};
	
	MapMarker.prototype.inputUp = function(event, pointer, ctx) {
		// trace('MapMarker['+this.model.name+']/inputUp');
		ctx.pressed = false;
		PWG.EventCenter.trigger({ type: PWG.Events.SHOW_LEVEL_INFO, value: this.model.level });
	};
	
	return MapMarker;
})();