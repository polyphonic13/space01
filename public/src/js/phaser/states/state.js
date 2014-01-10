Polyworks.State = (function() {
	Polyworks.Utils.inherits(State, Polyworks.Base);
	
	function State(params, id) {
		State._super.constructor.call(this, params, id);
		this.loaded = false;
		this.created = false;
		this.active = false;
	}
	
	State.prototype.preLoad = function() {
		trace('State['+this.id+']/preLoad');
		this.loaded = true;
	};
	
	State.prototype.create = function() {
		trace('State['+this.id+']/create');
		this.game = Polyworks.Game.phaser;

		this.createViews();
		this.created = true;
	};
	
	State.prototype.createViews = function() {
		var views = this.model.views;
		var view;
		this.viewManager = [];
		for(var i = 0; i < views.length; i++) {
			var properties = views[i].properties;
			properties.game = this.game;
			view = new Polyworks[views[i].type](properties);
			this.viewManager.push(view);
		}
	};
	
	State.prototype.createControls = function() {
		this.controls = new Polyworks.ControlButtons(config.controls.level);
	};
	
	State.prototype.update = function() {
//		trace('State['+this.id+']/update');
	};
	
	return State;
})();