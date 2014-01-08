Polyworks.Game = (function() {
	var _game;
	var _states = {};
	var g = {
		init: function(params) {
			_game = new Phaser.Game(stage.width, stage.height, Phaser.AUTO, '', { preload: g.preload, create: g.create, update: g.update });
			var state;
			var states = config.states;
			for(var i = 0; i < states.length; i++) {
				_states[states[i].id] = new Polyworks[states[i].type](states[i], _game);
			}
			
		},

		preload: function(params) {

		},

		create: function(params) {

		},

		update: function(params) {

		}
	};
	
	return g;
})(Polyworks || (Polyworks = {}));