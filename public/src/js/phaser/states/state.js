Polyworks.State = (function() {
	Utils.inherits(State, Polyworks.Collection);
	
	var _this;
	function State(params) {
		// trace('State['+params.name+']/constructor');
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
			this.model.created = true;
		}
	};

	State.prototype.createState = function() {
		this.gameOver = PolyworksGame.gameOver; 
		this.createWorld();

		if(this.model.pausable) {
			Polyworks.EventCenter.bind(Polyworks.Events.PAUSE_STATE, this.onPauseState, this);
			Polyworks.EventCenter.bind(Polyworks.Events.RESUME_STATE, this.onResumeState, this);
		}
		this.begin();
	};
	
	State.prototype.onPauseState = function() {
		trace(this);
		trace('State['+this.model.name+']/onPauseState');
		this.paused = true;
	};
	
	State.prototype.onResumeState = function() {
		trace('State['+this.model.name+']/onResuemState');
		this.paused = false;
	};
	
	State.prototype.createWorld = function() {
		var world = this.model.world;
		trace('Stage['+this.model.name+']/createWorld, world = ', world, PolyworksStage);
		PolyworksGame.phaser.world.setBounds(world.x, world.y, world.width, world.height);
	};

	State.prototype.update = function() {
		if(!this.paused) {
			// extend update implementation
		}
	};
	
	State.prototype.shutdown = function() {
		Polyworks.EventCenter.unbind(Polyworks.Events.PAUSE_STATE, this.onPauseState);
		Polyworks.EventCenter.unbind(Polyworks.Events.RESUME_STATE, this.onResumeState);

		this.model.created = false;
		this.destroy();
	};

	return State;
})();