Polyworks.MapMarker = (function() {
	Polyworks.Utils.inherits(MapMarker, Polyworks.Sprite);
	
	function MapMarker(params) {
		MapMarker._super.constructor.call(this, params);
	}
	
	MapMarker.prototype.begin = function() {
		// trace('MapMarker['+this.model.name+']/begin');
		MapMarker._super.begin.call(this);

		var name = this.model.name;
		// this.model.level = (name.substring(0, name.indexOf('-mapMarker')));
		this.model.level = parseInt(name.replace('mapLevelMarker', ''));
		// var currentLevel = 'level' + ((PolyworksGame.currentLevel < 10) ? '0' : '') + PolyworksGame.currentLevel;
		var currentLevel = PolyworksGame.currentLevel;
		var levelStatus = PolyworksGame.levelStatus[this.model.level];

		trace('\tlevelStatus = ', levelStatus, '\tlevel = ' + this.model.level + ', currentLevel = ' + currentLevel);
		if(levelStatus === 'l') {
			this.frame = 2;
		} else {
			if(levelStatus === 'u') {
				this.frame = 1;
			} else {
				this.frame = 0; // c (cleared)
			}
			this.input.start();
			this.addListeners();
		}
		// if(!levelStatus.locked || (this.model.level === currentLevel)) {
		// 	if(levelStatus.cleared) {
		// 		this.frame = 0;
		// 	} else {
		// 		this.frame = 1;
		// 	}
		// 	this.input.start();
		// 	this.addListeners();
		// } else {
		// 	this.frame = 2;
		// }
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
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.START_LEVEL, value: this.model.level });
	};
	
	return MapMarker;
})();