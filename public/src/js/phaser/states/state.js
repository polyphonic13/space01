Polyworks.State = (function() {
	Utils.inherits(State, Polyworks.Base);
	
	var _this;
	function State(params, id) {
		_this = this;
		State._super.constructor.call(this, params, id);
		this.loaded = false;
		this.created = false;
		this.active = false;
		
		this.__defineGetter__('clearWorld', function() {
			return this.model.clearWorld;
		});
		
		this.__defineGetter__('clearCache', function() {
			return this.model.clearCache;
		});
	}
	
	State.prototype.preLoad = function() {
		if(!this.loaded) {
			this.loaded = true;
		}
	};
	
	State.prototype.create = function() {
		this.createState();
		this.created = true;
	};

	State.prototype.createState = function() {
		// trace('State/createState, this = ');
		// trace(this);
		
		this.game = Polyworks.Game.phaser;
		this.gameOver = Polyworks.Game.gameOver; 

		this.elements = {};
		this.createWorld();
		this.createElements();

	};
	
	State.prototype.createWorld = function() {
		var world = this.model.world;
		Polyworks.Game.phaser.world.setBounds(world.x, world.y, world.width, world.height);
	};

	State.prototype.createElements = function() {
		var elements = this.model.elements;
		var element;
		var attrs; 

		for(var i = 0; i < elements.length; i++) {
			attrs = elements[i].attrs;
			var id = (attrs.name) ? attrs.name : i;
			element = new Polyworks[elements[i].type](attrs, id);
			element.init();
			this.elements[elements[i].name] = element;
		}
	};
	
	State.prototype.shutdown = function() {
		for(var key in this.elements) {
			if(this.elements[key].destroy) {
				this.elements[key].destroy();
			}
		}
	};

	return State;
})();