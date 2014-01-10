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

		this.viewManager = [];
		this.createViews();

	};
	
	State.prototype.createViews = function() {
		var views = this.model.views;
		var view;
		var params; 

		for(var i = 0; i < views.length; i++) {
			params = views[i].params;
			params.game = this.game;

			view = new Polyworks[views[i].type](params);
			view.init();
			this.viewManager.push(view);
		}
	};
	
	State.prototype.update = function() {
//		trace('State['+this.id+']/update');
		if(this.controls.isPressed()) {

		}
	};
	
	return State;
})();