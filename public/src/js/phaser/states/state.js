Polyworks.State = (function() {
	Utils.inherits(State, Polyworks.Base);
	
	function State(params, id) {
		State._super.constructor.call(this, params, id);
		this.loaded = false;
		this.created = false;
		this.active = false;
	}
	
	State.prototype.preLoad = function() {
		trace('State['+this.id+']/preLoad, loaded = ' + this.loaded);
		if(!this.loaded) {
			this.loaded = true;
		}
	};
	
	State.prototype.create = function() {
		trace('State['+this.id+']/create, created = '+ this.created);
		if(!this.created) {
			this.createState();
			this.created = true;
		}
	};

	State.prototype.createState = function() {
		this.game = Polyworks.Game.phaser;
		this.gameOver = Polyworks.Game.gameOver; 

		this.elements = {};
		this.createElements();

	};
	
	State.prototype.createElements = function() {
		var elements = this.model.elements;
		var element;
		var attrs; 

		for(var i = 0; i < elements.length; i++) {
			attrs = elements[i].attrs;
			trace('State/createElements, elements['+i+'].type = ' + elements[i].type);
			trace(attrs);
			var id = (attrs.name) ? attrs.name : i;
			element = new Polyworks[elements[i].type](attrs, id);
			element.init();
			this.elements[elements[i].name] = element;
		}
	};
	
	State.prototype.update = function() {
	};
	
	return State;
})();