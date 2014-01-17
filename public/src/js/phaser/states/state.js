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
			this.createState();
			this.model.set({ created: true });
		}
	};

	State.prototype.createState = function() {
		// trace('\nState['+this.model.name+']/createState, this = ');
		// trace(this);
		this.gameOver = PolyworksGame.gameOver; 
		this.createWorld();
		this.begin();
	};
	
	State.prototype.createWorld = function() {
		trace('State/createWorld, world params = ');
		var world = this.model.world;
		trace(world);
		PolyworksGame.phaser.world.setBounds(world.x, world.y, world.width, world.height);
	};

	State.prototype.shutdown = function() {
		this.update = null;
		this.destroy();
		// this.removeAll();
	};

	return State;
})();