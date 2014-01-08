Polyworks.Recreation = (function() {
	var _states = {};
	var recreation = {
		init: function(params) {
			var states = config.states;

			for(var i = 0; i < states.length; i++) {
				_states[states[i].id] = new Polyworks[states[i].type](states[i], states[i].id);
			}
			trace('Recreation/init, initialState = ' + config.initialState);
			game.state.add(config.initialState, _states[config.initialState], true);

		},

		preload: function(params) {

		},

		create: function(params) {

		},

		update: function(params) {

		}
	};
	
	return recreation;
})(Polyworks || (Polyworks = {}));