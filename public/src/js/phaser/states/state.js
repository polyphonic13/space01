Polyworks.State = (function() {
	Utils.inherits(State, Polyworks.Base);
	
	var _this;
	function State(params, id) {
		_this = this;
		// trace('State['+id+']/constructor')
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
		// trace('State['+this.id+']/preLoad, loaded = ' + this.loaded);
		if(!this.loaded) {
			this.loaded = true;
		}
	};
	
	State.prototype.create = function() {
		// trace('State['+this.id+']/create, created = '+ this.created);
		// if(!this.created) {
			this.createState();
			this.created = true;
		// }
	};

	State.prototype.createState = function() {
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
			// trace('State/createElements, elements['+i+'].type = ' + elements[i].type);
			// trace(attrs);
			var id = (attrs.name) ? attrs.name : i;
			element = new Polyworks[elements[i].type](attrs, id);
			element.init();
			this.elements[elements[i].name] = element;
		}
	};
	
	State.prototype.update = function() {
	};
	
	State.prototype.shutdown = function() {
		// trace('State['+this.id+']/shutdown, this.elements.length = ');
		// trace(this.elements);
		for(var key in this.elements) {
			// trace('\telements['+key+'] = ');
			// trace(this.elements[key]);
			if(this.elements[key].destroy) {
				this.elements[key].destroy();
			}
		}
	};

	return State;
})();