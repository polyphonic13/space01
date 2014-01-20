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

		begin: function(params) {
			trace('PolyworksGame/begin, stage w/h = ' + stage.width + '/' + stage.height);
			trace((stage.height * 2) + ' ' + ((-stage.height) + 10));
			_model = params;
			PolyworksGame.phaser = new Phaser.Game(stage.width, stage.height, Phaser.AUTO, 'gameContainer', { preload: _preload, create: _create });
			// _checkPhaserBoot();
		},

		get: function(prop) {
			if(_model.hasOwnProperty(prop)) {
				return _model[prop];
			} else {
				return null;
			}
		},

		changeState: function(id) {
				switch(id) {
					case 'level':
						id += PolyworksGame.currentLevel;
					break;
					
					case 'nextLevel':
						trace('next level, current = ' + PolyworksGame.currentLevel + ', total = ' + PolyworksGame.totalLevels);
						if(PolyworksGame.currentLevel < (PolyworksGame.totalLevels - 1)) {
							PolyworksGame.currentLevel++;
							id = 'level' + PolyworksGame.currentLevel;
						} else {
							id = 'end';
						}
					break;
					
					case 'intermission':
						if(PolyworksGame.currentLevel < (PolyworksGame.totalLevels - 1)) {
							id = 'intermission';
						} else {
							id = 'end';
						}
					break;
					
					default:
					break;
				}

				var state = _states[id];
				if(state) {
					PolyworksGame.previousState = PolyworksGame.currentState;
					PolyworksGame.currentState = id;
					trace('PolyworksGame/changeState, id = ' + id + ', clearWorld = ' + state.clearWorld + ', clearCache = ' + state.clearCache);
					// trace(_states);
					PolyworksGame.phaser.state.start(id, state.clearWorld, state.clearCache);
				} else {
					trace('ERROR: state['+id+'] not found');
				}
		},

		getState: function(name) {
			return _states[name];
		},

		setScore: function(val) {
			PolyworksGame.score += val;
			trace('PolyworksGame/setScore, val = ' + val + ', score = ' + PolyworksGame.score);
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.SCORE_UPDATED });
		},

		setHealth: function(val) {
			PolyworksGame.health = val;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.HEALTH_UPDATED });
		},

		// setPlayerGroup: function(group) {
		// 	_model[]
		// }
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
		_removeLoadingAnimation();
		_beginEvents();
		_beginControls();
		_beginStates();
	}
	
	
	function _beginEvents() {
		Polyworks.EventCenter.begin();
		Polyworks.EventCenter.bind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.bind(Polyworks.Events.CONTROL_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.bind(Polyworks.Events.CHANGE_STATE, _onChangeState, this);
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
	
	function _beginControls() {
	
		_controls = new Polyworks.Collection(_model.controls.keys);
		_controls.begin();
	}
	
	function _beginStates() {
		_states = {};

		var states = _model.states;
		var state;

		for(var i = 0; i < states.length; i++) {
			state = new Polyworks[states[i].cl](states[i], states[i].name);
			_states[states[i].name] = state;
			PolyworksGame.phaser.state.add(states[i].name, state, false);
			if(states[i].name.indexOf('level') > -1) {
				PolyworksGame.totalLevels++;
			}
		}
		// trace('PolyworksGame, _states = ');
		// trace(_states);
		if(_model.initialState) {
			PolyworksGame.changeState(_model.initialState);
		}
	}

	function _removeLoadingAnimation() {
		var loading = document.getElementById('loading');
		loading.parentNode.removeChild(loading);
	}
	
	function _killStates() {
		trace('PolyworksGame/_killStates');
		for(var key in _states) {
			if(_states[key].shutdown) {
				_states[key].shutdown();
			}
		}
	}
	
	return polyworks_game;
}());