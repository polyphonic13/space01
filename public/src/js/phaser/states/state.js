Polyworks.State = (function() {
	Utils.inherits(State, Polyworks.Collection);
	
	var _this;
	function State(params) {
		trace('State['+params.name+']/constructor');
		_this = this;

		State._super.constructor.call(this, params);
		this.model.set({
			loaded: false,
			created: false,
			active: false
		});

		this.__defineGetter__('clearWorld', function() {
			return this.model.clearWorld;
		});

		this.__defineGetter__('clearCache', function() {
			return this.model.clearCache;
		});
	}
	
	State.prototype.preLoad = function() {
		if(!this.model.loaded) {
			this.model.loaded = true;
		}
	};
	
	State.prototype.create = function() {
		if(!this.model.created) {
			this.init();
			this.createState();
			this.model.set({ created: true });
		}
	};

	State.prototype.createState = function() {
		// trace('State/createState, this = ');
		// trace(this);

		this.game = PolyworksGame.phaser;
		this.gameOver = PolyworksGame.gameOver; 

		this.createWorld();
		// this.createElements();

	};
	
	State.prototype.createWorld = function() {
		var world = this.model.world;
		PolyworksGame.phaser.world.setBounds(world.x, world.y, world.width, world.height);
	};

	State.prototype.createElements = function() {
		trace('State['+this.model.name+']/createElements');
		trace(this.model);
		var game = PolyworksGame.phaser;
		var elements = this.model.elements;
		trace('\telements.length = ' + elements.length);
		var element;
		var attrs; 
		var group = game.add.group();
		var collection = {};

		for(var i = 0; i < elements.length; i++) {
			if(!elements[i].name) {
				elements[i].name = i;
			}
			trace('\telements['+elements[i].name+'].cl = ' + elements[i].cl);
			trace(elements[i]);
			if(elements[i].type === 'sprite') {
				element = new Polyworks[elements[i].cl](game, elements[i].attrs.start.x, elements[i].attrs.start.y, elements[i].attrs);
				element.init(elements[i].name);
			} else {
				element = new Polyworks[elements[i].cl](game, elements[i]);
				element.init();
			}
			collection[elements[i].name] = element;
			group.add(element);
		}

		this.model.set({ group: group, collection: collection });
	};
	
	State.prototype.shutdown = function() {
		this.update = null;
		this.model.group.destroy();
		this.model = null;
	};

	return State;
})();