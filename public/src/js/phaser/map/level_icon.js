Polyworks.LevelIcon = (function() {
	Polyworks.Utils.inherits(LevelIcon, Polyworks.GroupCollection);
	
	
	function LevelIcon(params) {
		LevelIcon._super.constructor.call(this, params);
	}
	
	LevelIcon.prototype.begin = function() {
		this.model.attrs = this.initAttributes();
		// trace('LevelIcon['+this.model.name+']/begin', this.model);
		LevelIcon._super.begin.call(this);
	};
	
	LevelIcon.prototype.initAttributes = function() {
		var levelIconWidth = (Polyworks.Stage.unit * 2);
		var levelIconHeight = (Polyworks.Stage.unit * 3);

		var attributes = [
		{
			name: 'levelIcon',
			cl: 'Sprite',
			attrs: {
				img: this.model.name + 'Icon',
				start: this.model.start,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight,
				}
			}
		},
		{
			name: 'selected',
			cl: 'Sprite',
			attrs: {
				img: 'levelSelectedIcon',
				start: this.model.start,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight,
					visible: this.model.selected
				}
			}
		},
		{
			name: 'locked',
			cl: 'Sprite',
			attrs: {
				img: 'levelLockedIcon',
				start: this.model.start,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight,
					visible: this.model.locked
				}
			}
		},
		{
			name: 'cleared',
			cl: 'Sprite',
			attrs: {
				img: 'levelClearedIcon',
				start: this.model.start,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight,
					visible: this.model.cleared
				}
			}
		},
		{
			name: 'invisButton',
			cl: 'InputButton',
			attrs: {
				img: 'greyRect',
				start: this.model.start,
				phaser: {
					width: levelIconWidth,
					height: levelIconHeight,
					visible: !this.model.locked
				},
				events: {
					pressed: {
						type: Polyworks.Events.CHANGE_STATE,
						value: this.model.name
					}
				}
			}
		}
		];

		return attributes;
	};
	
	LevelIcon.prototype.select = function() {
		this.showHideChild('selected', true);
	};
	
	LevelIcon.prototype.deselect = function() {
		this.showHideChild('selected', false);
	};
	
	LevelIcon.prototype.unlock = function() {
		this.showHideChild('locked', false);
	};
	
	LevelIcon.prototype.clear = function() {
		this.showHideChild('cleared', true);
	};
	
	LevelIcon.prototype.showHideChild = function(name, show) {
		var child = this.model.collection.getItemByName(name);
		child.alpha = (show) ? 1 : 0;
	};
	
	return LevelIcon;
})();