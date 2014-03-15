Polyworks.KekeIcon = (function() {
	Polyworks.Utils.inherits(KekeIcon, Polyworks.Sprite);
	
	function KekeIcon(params) {
		params.attrs.start = this.initPosition(params.positions);
		KekeIcon._super.constructor.call(this, params);
	}
	
	KekeIcon.prototype.initPosition = function(positions) {
		var level = PolyworksGame.getCurrentLevelText();
		trace('KekeIcon/initPosition, currentLevel = ' + level, positions);
		return positions[level];
	};
	
	KekeIcon.prototype.begin = function() {
		this.input.start();
		this.addListeners();
		KekeIcon._super.begin.call(this);
	};
	
	KekeIcon.prototype.addListeners = function() {
		var ctx = this;
		this.events.onInputDown.add(function(event, pointer) {
			this.inputDown(event, pointer, ctx);
		}, this);
		this.events.onInputUp.add(function(event, pointer) {
			this.inputUp(event, pointer, ctx);
		}, this);
	};
	
	KekeIcon.prototype.inputDown = function(event, pointer, ctx) {
		// trace('KekeIcon['+this.model.name+']/inputDown');
		ctx.pressed = true;
	};
	
	KekeIcon.prototype.inputUp = function(event, pointer, ctx) {
		// trace('KekeIcon['+this.model.name+']/inputUp');
		ctx.pressed = false;
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.CHANGE_STATE, value: 'level' });
	};
	
	return KekeIcon;
})();