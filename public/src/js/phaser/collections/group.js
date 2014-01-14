Polyworks.Group = (function() {
	var _this;
	
	function Group(game, params) {
		_this = this;
		this.model = new Polyworks.Model(params);
		this.collection = {};
		Phaser.Group.call(this, game, params.parent, params.name, parmas.useStage);
	}
	
	Group.prototype = Object.create(Phaser.Group.prototype);
	Group.prototype.constructor = Polyworks.Group;

	Group.prototype.begin = function() {
		trace('Group['+this.model.name+']/begin');
		trace(this.model.attrs);
		var game = PolyworksGame.phaser;
		var elements = this.model.attrs;
		var element;
		var cl;
		for(var i = 0; i < elements.length; i++) {
			if(!elements[i].attrs.name) {
				elements[i].attrs.name = (elements[i].name) ? elements[i].name : i;
			}
			if(!elements[i].cl) {
				elements[i].cl = itemClass;
			}
			trace('\telements['+elements[i].name+'].cl = ' + elements[i].cl);
			trace(elements[i]);
			if(elements[i].type === 'view') {
				element = new Polyworks[elements[i].cl](game, elements[i].attrs.start.x, elements[i].attrs.start.y, elements[i].attrs);
			} else {
				element = new Polyworks[elements[i].cl](elements[i]);
			}
			element.begin();
			this.collection[elements[i].name] = element;
		}
	};
	
	Group.prototype.addView = function(params, itemClass) {
		trace('Group['+this.model.name+']/addView, itemClass = ' + itemClass);
		trace(params);
		return new Polyworks[itemClass](params);
	};
	
	return Group;
})();