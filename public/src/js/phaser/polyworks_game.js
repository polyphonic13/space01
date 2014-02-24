PolyworksGame = (function() {
	// var _gameTitle = 'Keke vs. the Caterpillars';
	var _gameTitle = '';
	var _model = {};
	var _player = {};
	var _controls = {};
	var _states = {};
	
	var polyworks_game = {
		phaser: null,
		player: null,
		score: 0,
		health: 0,
		currentLevel: 1,
		totalLevels: 0,
		currentState: '',
		previousState: '',
		gameOver: false,
		isQuit: false,

		begin: function(params) {
			window.scrollTo(0,0);
			// trace('PolyworksGame/begin, stage w/h = ' + PolyworksStage.width + '/' + PolyworksStage.height);
			// trace((PolyworksStage.height * 2) + ' ' + ((-PolyworksStage.height) + 10));
			_model = params;
			trace(params);
			PolyworksGame.startingHealth = params.player.attrs.phaser.health;
			PolyworksGame.phaser = new Phaser.Game(PolyworksStage.winW, PolyworksStage.winH, Phaser.AUTO, 'gameContainer', { preload: _preload, create: _create });
			// _checkPhaserBoot();
		},

		get: function(prop) {
			// if(_model.hasOwnProperty(prop)) {
			if(Utils.has(_model, prop)) {
				return _model[prop];
			} else {
				return null;
			}
		},

		changeState: function(id) {
			trace('change state, id = ' + id);
				switch(id) {
					case 'level':
						id += PolyworksGame.currentLevel;
					break;

					case 'nextLevel':
						trace('next level, current = ' + PolyworksGame.currentLevel + ', total = ' + PolyworksGame.totalLevels);
						if(PolyworksGame.currentLevel < (PolyworksGame.totalLevels)) {
							PolyworksGame.currentLevel++;
							id = 'level' + PolyworksGame.currentLevel;
						} else {
							PolyworksGame.currentLevel = 1;
							trace('ALL COMPLETED, CURRENT LEVEL = ' + PolyworksGame.currentLevel);
							id = 'completed';
						}
					break;

					case 'intermission':
						if(PolyworksGame.currentLevel < (PolyworksGame.totalLevels)) {
							id = 'intermission';
						} else {
							PolyworksGame.currentLevel = 1;
							trace('ALL COMPLETED, CURRENT LEVEL = ' + PolyworksGame.currentLevel);
							id = 'completed';
						}
					break;

					case 'gameOver':
						// PolyworksGame.currentLevel = 1;
					break;

					default:
					break;
				}

				if(id === 'quit') {
					PolyworksGame.quit();
				} else {
					var state = _states[id];
					if(state) {
						PolyworksGame.previousState = PolyworksGame.currentState;
						PolyworksGame.currentState = id;
						trace('PolyworksGame/changeState, id = ' + id + ', clearWorld = ' + state.clearWorld + ', clearCache = ' + state.clearCache);
						// trace(_states);
						PolyworksGame.addLoadingDiv();
						PolyworksGame.phaser.state.start(id, state.clearWorld, state.clearCache);
					} else {
						// trace('ERROR: state['+id+'] not found');
					}
				}
		},

		setScore: function(val) {
			PolyworksGame.score += val;
			// trace('PolyworksGame/setScore, val = ' + val + ', score = ' + PolyworksGame.score);
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.SCORE_UPDATED });
		},

		setHealth: function(val) {
			PolyworksGame.health = val;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.HEALTH_UPDATED });
		},

		removeLoadingDiv: function() {
			var loading = document.getElementById('loading');
			var loadingHolder = document.getElementById('loadingHolder');
			trace(loading);
			trace(loadingHolder);
			loadingHolder.removeChild(loading);
			trace(loadingHolder);
		},

		addLoadingDiv: function() {
			var loading = document.createElement('div');
			loading.setAttribute('id', 'loading');
			loading.innerHTML = _gameTitle;

			var loadingHolder = document.getElementById('loadingHolder');
			loadingHolder.appendChild(loading);
		},

		quit: function() {
			// trace('PolyworksGame/quit');
			if(!PolyworksGame.isQuit) {
				_quit();
			}
		}
	};

	function _preload() {
		// trace('_preload');
		var phaser = PolyworksGame.phaser;
		var images = _model.images;
		// trace('preload images');
		var loadedImages = {};

		Utils.each(images,
			function(image, key) {
				// phaser.load.image(key, image);
				loadedImages[key] = false;
			},
			this
		);

		var sprites = _model.sprites;
		var loadedSprites = {};
		// trace('preload sprites');
		Utils.each(sprites,
			function(sprite, key) {
				// trace('PolyworksGame setting sprite['+key+'] loaded to false');
				// phaser.load.spritesheet(key, sprite.url, sprite.width, sprite.height, sprite.frames);
				loadedSprites[key] = false;
			},
			this
		);
		
		PolyworksGame.loadedImages = loadedImages;
		PolyworksGame.loadedSprites = loadedSprites;
	}
	
	function _create() {
		// _removeLoadingAnimation();
		// PolyworksGame.removeLoadingDiv();
		_addListeners();
		_beginControls();
		_beginStates();
	}
	
	
	function _addListeners() {
		Polyworks.EventCenter.begin();
		Polyworks.EventCenter.bind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.bind(Polyworks.Events.CONTROL_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.bind(Polyworks.Events.CHANGE_STATE, _onChangeState, this);
	}

	function _removeListeners() {
		Polyworks.EventCenter.unbind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.CONTROL_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.CHANGE_STATE, _onChangeState, this);
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

		Utils.each(states,
			function(s) {
				state = new Polyworks[s.cl](s, s.name);
				_states[s.name] = state;
				PolyworksGame.phaser.state.add(s.name, state, false);
				if(s.name.indexOf('level') > -1) {
					PolyworksGame.totalLevels++;
				}
			},
			this
		);

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

	function _quit() {
		_removeListeners();
		PolyworksGame.isQuit = true;
		// _killStates();
		// Polyworks.EventCenter.reset();
		_states[PolyworksGame.currentState].shutdown();
		PolyworksGame.gameOver = true;
		if(PolyworksGame.player) {
			PolyworksGame.player.destroy();
		}
		PolyworksGame.phaser.destroy();

		var gameContainer = document.getElementById('gameContainer');
		gameContainer.parentNode.removeChild(gameContainer);

		PolyworksGame.phaser = null;
		PolyworksStage.destroy();
		PolyworksStage = null;
		Polyworks = null;
		Phaser = null;
		window.PolyworksGame = null;
	}
	
	function _killStates() {
		// trace('PolyworksGame/_killStates');
		Utils.each(_states,
			function(s) {
				s.shutdown();
			},
			this
		);
	}
	
	return polyworks_game;
}());