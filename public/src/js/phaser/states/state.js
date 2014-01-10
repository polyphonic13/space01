Polyworks.State = (function() {
	Polyworks.Utils.inherits(State, Polyworks.Base);
	
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

		this.viewManager = [];

		if(this.model.views) {
			this.createViews();
		}
		if(this.model.controlsType) {
			this.createControls(this.model.controlsType);
		}
	};
	
	State.prototype.createViews = function() {
		var views = this.model.views;
		var view;

		for(var i = 0; i < views.length; i++) {
			views[i].game = this.game;
			view = new Polyworks[views[i].type](views[i]);
			view.init();
			this.viewManager.push(view);
		}
	};
	
	State.prototype.createControls = function(type) {
		this.controls = new Polyworks.ControlButtons(config.controls[type]);
	};
	
	State.prototype.update = function() {
//		trace('State['+this.id+']/update');
		if(this.controls.isPressed()) {

		}
	};
	
	return State;
})();