Polyworks.MapMarker = (function() {
	Polyworks.Utils.inherits(MapMarker, Polyworks.Sprite);
	
	function MapMarker(params) {
		MapMarker._super.constructor.call(this, params);
	}
	
	MapMarker.prototype.begin = function() {
		// trace('MapMarker['+this.model.name+']/begin');
		MapMarker._super.begin.call(this);

		var name = this.model.name;
		this.model.level = (name.substring(0, name.indexOf('-mapMarker')));
		var currentLevel = 'level' + ((PolyworksGame.currentLevel < 10) ? '0' : '') + PolyworksGame.currentLevel;
		var levelAttrs = PolyworksGame.levels[this.model.level];

		// trace('\tlevelAttrs = ', levelAttrs, '\tlevel = ' + this.model.level + ', currentLevel = ' + currentLevel);
		if(!levelAttrs.locked || (this.model.level === currentLevel)) {
			if(levelAttrs.cleared) {
				this.frame = 0;
			} else {
				this.frame = 1;
			}
			this.input.start();
			this.addListeners();
		} else {
			this.frame = 2;
		}
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
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CHANGE_STATE, value: this.model.level });
	};
	
	return MapMarker;
})();