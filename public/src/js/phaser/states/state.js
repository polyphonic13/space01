Polyworks.State = (function() {
	Utils.inherits(State, Polyworks.Base);
	
	function State(params, id) {
		State._super.constructor.call(this, params, id);
	}
	
	State.prototype.preLoad = function() {
		trace('State['+this.id+']/preLoad');
	};
	
	State.prototype.create = function() {
		trace('State['+this.id+']/create');
		this.createViews();
	};
	
	State.prototype.createViews = function() {
		var views = this.model.views;
		var view;
		this.viewManager = [];
		for(var i = 0; i < views.length; i++) {
			// view = new Polyworks[views[i].type](views[i].config);
			this.viewManager.push(view);
		}
	};
	
	State.prototype.update = function() {
		trace('State['+this.id+']/update');
	};
	
	return State;
})();