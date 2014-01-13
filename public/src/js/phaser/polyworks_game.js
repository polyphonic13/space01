Polyworks.Game = (function() {
	var _model = {};
	var _player = {};
	var _controls = {};
	var _states = {};
	var _qKey; 
	
	var polyworks_game = {
		phaser: null,
		score: 0,
		currentLevel: 0,
		totalLevels: 0,
		currentState: '',
		previousState: '',
		gameOver: false,

		init: function(params) {
			_model = params;

			// var loadingAnimation = document.createElement("img");
			// loadingAnimation.setAttribute("src", "images/loading_animation.gif");
			// loadingAnimation.setAttribute("height", "75");
			// loadingAnimation.setAttribute("width", "75");
			// document.getElementById('loading').appendChild(loadingAnimation);
			
			Polyworks.Game.phaser = new Phaser.Game(stage.width, stage.height, Phaser.AUTO, 'gameContainer', { preload: _preload, create: _create });
			// _checkPhaserBoot();
		},

		getPlayer: function() {
			return _player;
		},

		getControls: function() {
			return _controls;
		},

		getStates: function() {
			return _states;
		},

		get: function(key) {
			if(_model.hasOwnProperty(key)) {
				return _model[key];
			}
		},

		set: function(params) {
			for(var key in params) {
				_model[key] = params[key];
			}
		},

		changeState: function(id) {
			if(id === 'level') {
				id += Polyworks.Game.currentLevel;
			} else if(id === 'nextLevel') {
				trace('next level, current = ' + Polyworks.Game.currentLevel + ', total = ' + Polyworks.Game.totalLevels);
				if(Polyworks.Game.currentLevel < (Polyworks.Game.totalLevels - 1)) {
					Polyworks.Game.currentLevel++;
					id = 'level' + Polyworks.Game.currentLevel;
				} else {
					id = 'quit'
				}
			}
			trace('\tid = ' + id);
			var state = _states[id];
			Polyworks.Game.previousState = Polyworks.Game.currentState;
			Polyworks.Game.currentState = id;
			trace('Polyworks.Game/changeState, id = ' + id + ', clearWorld = ' + state.clearWorld + ', clearCache = ' + state.clearCache);
			// trace(_states);
			Polyworks.Game.phaser.state.start(id, state.clearWorld, state.clearCache);
		},

		quit: function() {
			trace('Polyworks.Game/quit');
			Polyworks.EventCenter.reset();
			Polyworks.Game.gameOver = true;
			Polyworks.Game.phaser.destroy();
		}
	};

	function _preload() {
		// trace('_preload');
		var images = _model.images;
		// trace('preload images');
		for(key in images) {
			Polyworks.Game.phaser.load.image(key, images[key]);
		}
		var sprites = _model.sprites;
		// trace('preload sprites');
		for(key in sprites) {
			Polyworks.Game.phaser.load.spritesheet(key, sprites[key].url, sprites[key].width, sprites[key].height, sprites[key].frames);
		}
	}
	
	function _create() {
		_initEvents();
		_initControls();
		_initStates();
		_removeLoadingAnimation();
		Polyworks.Game.changeState(config.initialState);

	}
	
	
	function _initEvents() {
		Polyworks.EventCenter.init();
		Polyworks.EventCenter.bind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed);
		Polyworks.EventCenter.bind(Polyworks.Events.CHANGE_STATE, _onChangeState);
	}
	
	function _onControlPressed(event) {
		switch(event.value) {
			case Polyworks.InputCodes.QUIT:
				Polyworks.Game.changeState('quit');
			break;
		}
	}
	
	function _onChangeState(event) {
		Polyworks.Game.changeState(event.value);
	}
	
	function _initControls() {

		_controls = new Polyworks.Collection(config.controls.keys, 'controlKeys');
		_controls.init();
	}

	function _initStates() {
		_states = {};

		var states = _model.states;
		var state;

		for(var i = 0; i < states.length; i++) {
			state = new Polyworks[states[i].type](states[i], states[i].name);
			_states[states[i].name] = state;
			Polyworks.Game.phaser.state.add(states[i].name, state, false);
			if(states[i].name.indexOf('level') > -1) {
				Polyworks.Game.totalLevels++;
			}
		}
		trace('Polyworks.Game, _states = ');
		trace(_states);
	}

	function _removeLoadingAnimation() {
		var loading = document.getElementById('loading');
		loading.parentNode.removeChild(loading);
	}
	
	return polyworks_game;
}());