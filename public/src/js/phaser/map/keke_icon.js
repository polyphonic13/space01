Polyworks.KekeIcon = (function() {
	Polyworks.Utils.inherits(KekeIcon, Polyworks.Sprite);
	
	function KekeIcon(params) {
		params.attrs.start = this.initPosition(params.positions);
		KekeIcon._super.constructor.call(this, params);
	}
	
	KekeIcon.prototype.initPosition = function(positions) {
		var level = PolyworksGame.getCurrentLevelText();
		return positions[level];
	};
	
	KekeIcon.prototype.begin = function() {
		this.input.start();
		this.addListeners();
		KekeIcon._super.begin.call(this);

		var currentLevel = PolyworksGame.getCurrentLevelText();
		var grandfather = this.model.ancestor.model.ancestor;
		trace('KekeIcon/begin, currentLevel = ' + currentLevel, this);
		trace('\tgrandfather = ', grandfather);
		var pages = grandfather.model.pages;
		trace('\tpages = ', pages);
		var pagesLength = pages.length;
		for(var i = 0; i < pagesLength; i++) {
			var levels = pages[i].levels;
			var levelsLength = levels.length
			for(var j = 0; j < levelsLength; j++) {
				if(levels[j] === currentLevel) {
					this.pageIndex = i;
					break;
				}
			}
		}
		trace('\tpageIndex = ' + this.pageIndex);
	};
	
	KekeIcon.prototype.addListeners = function() {
		Polyworks.EventCenter.bind(Polyworks.Events.CHANGE_MAP_PAGE, this.onChangeMapPage, this);
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
	
	KekeIcon.prototype.onChangeMapPage = function(event) {
		trace('KekeIcon/onChangeMapPage, event = ', event);
		if(event.value === this.pageIndex) {
			this.visible = true;
		} else {
			this.visible = false;
		}
	};
	
	KekeIcon.prototype.destroy = function() {
		Polyworks.EventCenter.unbind(Polyworks.Events.CHANGE_MAP_PAGE, this.onChangeMapPage, this);
		KekeIcon._super.destroy.call(this);
	};
	
	return KekeIcon;
})();