
PolyworksGame = (function() {
	var _model = {};
	var _player = {};
	var _controls = {};
	var _states = {};
	// var _loadingTitleHTML = '<div class="kekeText">keke</div><br /><div class="gameText1"><b>and</b></div><div class="gameText2">T H E&nbsp;&nbsp;G R E Y&nbsp;&nbsp;&nbsp;E X P A N S E</div></div>';
	var _loadingTitleHTML = '';
	
	var _configURL = 'js/phaser/data/keke2_config6.js';
	
	var _gameTitle = '';
	var _isTouchDevice = false;
	var _preloaded = false;
	var _stageInitialized = false;
	var _statesInitialized = false;
	var _firstStateChanged = false; 
	
	var _resizeTimer = null;
	var _resizeInterval = 200;
	
	var polyworks_game = {
		phaser: null,
		player: null,
		score: 0,
		health: 0,
		currentLevel: 1,
		totalLevels: 0,
		requirementsMet: 0,
		totalRequirements: 0,
		currentState: '',
		previousState: '',
		isLandscape: false,
		gameOver: false,
		isQuit: false,

		begin: function() {
			// _model = params;
			// window.scrollTo(0,0);
			window.addEventListener("load", 
				function() { 
					trace('window.load');
					if(!window.pageYOffset) { 
						_hideAddressBar(); 
					} 
				} 
			);
			window.addEventListener("orientationchange", 
				function() {
					trace('window.orientationchange');
					_hideAddressBar();
				}
			);
			var winW = document.documentElement.clientWidth; 
			var winH = document.documentElement.clientHeight;

			PolyworksGame.phaser = new Phaser.Game(winW, winH, Phaser.AUTO, 'gameContainer', { preload: _preload, create: _create });
			_addListeners();
			_checkOrientation();
		},

		getModel: function() {
			return _model;
		},

		get: function(prop) {
			// if(_model.hasOwnProperty(prop)) {
			if(Polyworks.Utils.has(_model, prop)) {
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
							id = 'completed';
						}
					break;

					case 'intermission':
						if(PolyworksGame.currentLevel < (PolyworksGame.totalLevels)) {
							id = 'intermission';
						} else {
							PolyworksGame.currentLevel = 1;
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
						// if(_firstStateChanged) {
							PolyworksGame.addLoadingDiv();
						// }
						PolyworksGame.phaser.state.start(id, state.clearWorld, state.clearCache);
						_firstStateChanged = true;
					} else {
						// trace('ERROR: state['+id+'] not found');
					}
				}
		},

		setScore: function(val) {
			PolyworksGame.score += val;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.SCORE_UPDATED });
		},

		setHealth: function(val) {
			PolyworksGame.health = val;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.HEALTH_UPDATED });
		},

		setRequirements: function(met, total) {
			PolyworksGame.requirementsMet = met;
			PolyworksGame.totalRequirements = total;
			trace('PolyworksGame.setRequirements, requirementsMet = ' + PolyworksGame.requirementsMet + ', total = ' + PolyworksGame.totalRequirements);
			if(total > 0) {
				Polyworks.EventCenter.trigger({ type: Polyworks.Events.REQUIREMENTS_UPDATED });
			}
		},

		addLoadingDiv: function() {
			var loading = document.createElement('div');
			loading.setAttribute('id', 'loading');
			//loading.innerHTML = _gameTitle;
			loading.innerHTML = _loadingTitleHTML;

			var loadingHolder = document.getElementById('loadingHolder');
			loadingHolder.appendChild(loading);
		},

		removeLoadingDiv: function() {
			var loading = document.getElementById('loading');
			var loadingHolder = document.getElementById('loadingHolder');
			loadingHolder.removeChild(loading);
		},

		showOrientationMessage: function() {
			var orientationMessage = document.getElementById('orientationMessage');
			orientationMessage.style.display = 'block';
		},

		hideOrientationMessage: function() {
			var orientationMessage = document.getElementById('orientationMessage');
			orientationMessage.style.display = 'none';
		},

		quit: function() {
			// trace('PolyworksGame/quit');
			if(!PolyworksGame.isQuit) {
				_quit();
			}
		}
	};

	function _hideAddressBar() {
		trace('PolyworksGame/_hideAddressBar');
		if(!window.location.hash) {
			if(document.height < window.outerHeight) {
				document.body.style.height = (window.outerHeight + 50) + 'px';
			}
			setTimeout(
				function() { 
					window.scrollTo(0, 1); 
				}, 
				50 
			);
		}
	}

	function _checkOrientation() {
		var w = window.innerWidth;
		var h = window.innerHeight;
		PolyworksGame.isLandscape = (w > h) ? true : false;
		trace('PolyworksGame/_checkOrientation, isLandscape = ' + PolyworksGame.isLandscape, '\t_stageInitialized = ' + _stageInitialized);
		if(PolyworksGame.isLandscape) {
			PolyworksGame.hideOrientationMessage();
			if(!_stageInitialized) {
				Polyworks.Stage.init();
			}
		} else {
			PolyworksGame.showOrientationMessage();
		}
	}
	
	function _orientationChange() {
		_checkOrientation();
		trace('PolyworksGame/_orientationChange, isLandscape = ' + PolyworksGame.isLandscape + ', currentState' + PolyworksGame.currentState); 
		if(PolyworksGame.currentState !== '') {
			_states[PolyworksGame.currentState].orientationSet(PolyworksGame.isLandscape);
		}
	}
	
	function _preload() {
		trace('PolyworksGame/_preload');
		var phaser = PolyworksGame.phaser;
		var config = new Polyworks.Config();
		var images = config.getInitialStateImages();
		var sprites = config.getInitialStateSprites();
		// var images = _model.images;
		trace('preload images', images);
		var loadedImages = {};

		Polyworks.Utils.each(images,
			function(image, key) {
				if(_model.preloadAll) {
					phaser.load.image(key, image);
				}
				loadedImages[key] = false;
			},
			this
		);

		// var sprites = _model.sprites;
		var loadedSprites = {};
		trace('preload sprites', sprites);
		Polyworks.Utils.each(sprites,
			function(sprite, key) {
				// trace('PolyworksGame setting sprite['+key+'] loaded to false');
				if(_model.preloadAll) {
					phaser.load.spritesheet(key, sprite.url, sprite.width, sprite.height, sprite.frames);
				}
				loadedSprites[key] = false;
			},
			this
		);

		PolyworksGame.loadedImages = loadedImages;
		PolyworksGame.loadedSprites = loadedSprites;
		PolyworksGame.config = config;
	}
	
	function _create() {
		trace('PolyworksGame/_create');
		_preloaded = true;
		if(_stageInitialized) {
			_finishInitialization();
		}
	}
	
	function _addListeners() {
		window.onorientationchange = function(event) {
			_orientationChange();
		};
		window.onresize = function(event) {
			// if(_isTouchDevice) {
			  clearTimeout(_resizeTimer);
			  _resizeTimer = setTimeout(_orientationChange, _resizeInterval);
			// }
		};

		Polyworks.EventCenter.begin();
		Polyworks.EventCenter.bind(Polyworks.Events.STAGE_INITIALIZED, _onStageInitialized, this);
		Polyworks.EventCenter.bind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.bind(Polyworks.Events.CONTROL_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.bind(Polyworks.Events.CHANGE_STATE, _onChangeState, this);
		Polyworks.EventCenter.bind(Polyworks.Events.LEVEL_CLEARED, _onLevelCleared, this);
	}

	function _removeListeners() {
		window.onorientationchange = null;
		window.onresize = null;
		Polyworks.EventCenter.unbind(Polyworks.Events.STAGE_INITIALIZED, _onStageInitialized, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.CONTROL_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.CHANGE_STATE, _onChangeState, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.LEVEL_CLEARED, _onLevelCleared, this);
	}

	function _onLevelCleared(event) {
		trace('PolyworksGame/_onLevelCleared, event = ', event);
		PolyworksGame.levels[event.value].cleared = true;
		PolyworksGame.levels[event.value].locked = false;
		// PolyworksGame.changeState('intermission');
	}

	function _onStageInitialized(event) {
		_stageInitialized = true;
		_isTouchDevice = (navigator.userAgent.match(/ipad|iphone|android/i) !== null);
		trace('PolyworksGame/_onStageInitialized, _isTouchDevice = ' + _isTouchDevice);

		if(_preloaded) {
			_finishInitialization();
		}
	}

	function _finishInitialization() {
		trace('PolyworksGame/_finishInitialization, phaser w/h: ' + PolyworksGame.phaser.width + '/' + PolyworksGame.phaser.height);
		PolyworksGame.phaser.width = PolyworksGame.phaser.canvas.width = Polyworks.Stage.winW;
		PolyworksGame.phaser.height = PolyworksGame.phaser.canvas.height = Polyworks.Stage.winH; 
		trace('\tphaser w/h now set to: ' + PolyworksGame.phaser.width + '/' + PolyworksGame.phaser.height, Polyworks.Stage);
		_model = PolyworksGame.config.init(Polyworks.Stage);
		trace(_model);
		PolyworksGame.startingHealth = _model.player.attrs.phaser.health;
		_beginControls();
		_beginStates();
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

		PolyworksGame.levels = {};

		var states = _model.states;
		var state;

		Polyworks.Utils.each(states,
			function(s) {
				state = new Polyworks[s.cl](s, s.name);
				_states[s.name] = state;
				PolyworksGame.phaser.state.add(s.name, state, false);
				if(s.name.indexOf('level') > -1) {
					PolyworksGame.totalLevels++;
					PolyworksGame.levels[s.name] = {
						cleared: false,
						locked: true
					};
				}
			},
			this
		);

		trace('PolyworksGame/_beginStates, _stageInitialized = ' + _stageInitialized + ', _states = ');
		trace(_states);
		if(_stageInitialized) {
			PolyworksGame.changeState(_model.initialState);
		}
		_statesInialized = true;
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
		Polyworks.Stage.destroy();
		Polyworks.Stage = null;
		Polyworks = null;
		Phaser = null;
		window.PolyworksGame = null;
	}
	
	function _killStates() {
		// trace('PolyworksGame/_killStates');
		Polyworks.Utils.each(_states,
			function(s) {
				s.shutdown();
			},
			this
		);
	}
	
	return polyworks_game;
}());