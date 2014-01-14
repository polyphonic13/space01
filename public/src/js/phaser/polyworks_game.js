PolyworksGame = (function() {
	var _model = {};
	var _player = {};
	var _controls = {};
	var _states = {};
	
	var polyworks_game = {
		phaser: null,
		player: null,
		score: 0,
		health: 0,
		currentLevel: 0,
		totalLevels: 0,
		currentState: '',
		previousState: '',
		gameOver: false,

		init: function(params) {
			_model = params;
			PolyworksGame.phaser = new Phaser.Game(stage.width, stage.height, Phaser.AUTO, 'gameContainer', { preload: _preload, create: _create });
			// _checkPhaserBoot();
		},

		changeState: function(id) {
			// if(id === 'quit') {
			// 	PolyworksGame.quit();
			// } else {
				if(id === 'level') {
					id += PolyworksGame.currentLevel;
				} else if(id === 'nextLevel') {
					trace('next level, current = ' + PolyworksGame.currentLevel + ', total = ' + PolyworksGame.totalLevels);
					if(PolyworksGame.currentLevel < (PolyworksGame.totalLevels - 1)) {
						PolyworksGame.currentLevel++;
						id = 'level' + PolyworksGame.currentLevel;
					} else {
						id = 'end';
					}
				}
				trace('\tid = ' + id);
				var state = _states[id];
				PolyworksGame.previousState = PolyworksGame.currentState;
				PolyworksGame.currentState = id;
				trace('PolyworksGame/changeState, id = ' + id + ', clearWorld = ' + state.clearWorld + ', clearCache = ' + state.clearCache);
				// trace(_states);
				PolyworksGame.phaser.state.start(id, state.clearWorld, state.clearCache);
			// }
		},

		setScore: function(val) {
			PolyworksGame.score += val;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.SCORE_UPDATED });
		},

		setHealth: function(val) {
			PolyworksGame.health = val;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.HEALTH_UPDATED });
		},

		quit: function() {
			trace('PolyworksGame/quit');
			// _killStates();
			Polyworks.EventCenter.reset();
			PolyworksGame.gameOver = true;
			if(PolyworksGame.player) {
				PolyworksGame.player.destroy();
			}
			PolyworksGame.phaser.destroy();
		}
	};

	function _preload() {
		// trace('_preload');
		var images = _model.images;
		// trace('preload images');
		for(key in images) {
			PolyworksGame.phaser.load.image(key, images[key]);
		}
		var sprites = _model.sprites;
		// trace('preload sprites');
		for(key in sprites) {
			PolyworksGame.phaser.load.spritesheet(key, sprites[key].url, sprites[key].width, sprites[key].height, sprites[key].frames);
		}
	}
	
	function _create() {
		_initEvents();
		// _initControls();
		_initStates();
		_removeLoadingAnimation();
		PolyworksGame.changeState(config.initialState);

	}
	
	
	function _initEvents() {
		Polyworks.EventCenter.init();
		Polyworks.EventCenter.bind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed);
		Polyworks.EventCenter.bind(Polyworks.Events.CHANGE_STATE, _onChangeState);
	}
	
	function _onControlPressed(event) {
		switch(event.value) {
			case Polyworks.InputCodes.QUIT:
				PolyworksGame.changeState('quit');
			break;
		}
	}
	
	function _onChangeState(event) {
		PolyworksGame.changeState(event.value);
	}
	
	// function _initControls() {
	// 
	// 	_controls = new Polyworks.Collection(config.controls.keys, 'controlKeys');
	// 	_controls.init();
	// }
	// 
	function _initStates() {
		_states = {};

		var states = _model.states;
		var state;

		for(var i = 0; i < states.length; i++) {
			state = new Polyworks[states[i].cl](states[i], states[i].id);
			_states[states[i].id] = state;
			PolyworksGame.phaser.state.add(states[i].id, state, false);
			if(states[i].id.indexOf('level') > -1) {
				PolyworksGame.totalLevels++;
			}
		}
		trace('PolyworksGame, _states = ');
		trace(_states);
	}

	function _removeLoadingAnimation() {
		var loading = document.getElementById('loading');
		loading.parentNode.removeChild(loading);
	}
	
	function _killStates() {
		trace('PolyworksGame/_killStates');
		for(var key in _states) {
			if(_states[key].destroy) {
				_states[key].destroy();
			}
		}
	}
	
	return polyworks_game;
}());