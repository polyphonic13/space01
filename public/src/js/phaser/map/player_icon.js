PWG.PlayerIcon = (function() {
	PWG.Utils.inherits(PlayerIcon, PWG.Sprite);
	
	function PlayerIcon(params) {
		params.attrs.start = this.initPosition(params.positions);
		PlayerIcon._super.constructor.call(this, params);
	}
	
	PlayerIcon.prototype.initPosition = function(positions) {
		trace('PlayerIcon/initPosition, position = ', positions, '\tcurrentLevel = ' + PWGGame.currentLevel);
		return positions[PWGGame.currentLevel];
	};
	
	PlayerIcon.prototype.begin = function() {
		this.input.start();
		this.addListeners();
		PlayerIcon._super.begin.call(this);

		var grandfather = this.model.ancestor.model.ancestor;
		// trace('\tgrandfather = ', grandfather);
		var pages = grandfather.model.pages;
		// trace('\tpages = ', pages);
		var pagesLength = pages.length;
		for(var i = 0; i < pagesLength; i++) {
			var levels = pages[i].levels;
			var levelsLength = levels.length;
			for(var j = 0; j < levelsLength; j++) {
				if(levels[j] === PWGGame.currentLevel) {
					this.pageIndex = i;
					break;
				}
			}
		}
		// trace('\tpageIndex = ' + this.pageIndex);
	};
	
	PlayerIcon.prototype.addListeners = function() {
		PWG.EventCenter.bind(PWG.Events.CHANGE_MAP_PAGE, this.onChangeMapPage, this);
		var ctx = this;
		this.events.onInputDown.add(function(event, pointer) {
			this.inputDown(event, pointer, ctx);
		}, this);
		this.events.onInputUp.add(function(event, pointer) {
			this.inputUp(event, pointer, ctx);
		}, this);
	};
	
	PlayerIcon.prototype.inputDown = function(event, pointer, ctx) {
		// trace('PlayerIcon['+this.model.name+']/inputDown');
		ctx.pressed = true;
	};
	
	PlayerIcon.prototype.inputUp = function(event, pointer, ctx) {
		// trace('PlayerIcon['+this.model.name+']/inputUp');
		ctx.pressed = false;
		// PWG.EventCenter.trigger({ type: PWG.Events.START_LEVEL, value: PWGGame.currentLevel });
	};
	
	PlayerIcon.prototype.onChangeMapPage = function(event) {
		// trace('PlayerIcon/onChangeMapPage, event = ', event);
		if(event.value === this.pageIndex) {
			this.visible = true;
		} else {
			this.visible = false;
		}
	};
	
	PlayerIcon.prototype.destroy = function() {
		PWG.EventCenter.unbind(PWG.Events.CHANGE_MAP_PAGE, this.onChangeMapPage, this);
		PlayerIcon._super.destroy.call(this);
	};
	
	return PlayerIcon;
})();