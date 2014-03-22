PolyworksGame = (function() {
	var _model = {};
	var _player = {};
	var _controls = {};
	var _states = {};
	var _levels = [];
	// var _loadingTitleHTML = '<div class="kekeText">keke</div><br /><div class="gameText1"><b>and</b></div><div class="gameText2">T H E&nbsp;&nbsp;G R E Y&nbsp;&nbsp;&nbsp;E X P A N S E</div></div>';
	var _loadingTitleHTML = '';
	
	var _configURL = 'js/phaser/data/keke2_config6.js';
	
	var _gameTitle = '';
	var _isTouchDevice = false;
	var _stageInitialized = false;
	var _statesInitialized = false;
	var _firstStateChanged = false; 
	
	var _resizeTimer = null;
	var _resizeInterval = 200;
	
	var polyworks_game = {
		name: '',
		phaser: null,
		player: null,
		score: 0,
		health: 0,
		levelText: '',
		currentLevel: 0,
		totalLevels: 0,
		requirementsMet: 0,
		totalRequirements: 0,
		currentState: '',
		previousState: '',
		savedState: '',
		isLandscape: false,
		gameOver: false,
		isQuit: false,

		begin: function(name) {
			PolyworksGame.name = name;
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

			_addListeners();
			_checkOrientation();
			_getSavedData();
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
					trace('ERROR: state['+id+'] not found');
				}
				_setSavedData();
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
		Polyworks.EventCenter.bind(Polyworks.Events.START_LEVEL, _onStartLevel, this);
		Polyworks.EventCenter.bind(Polyworks.Events.NEXT_LEVEL, _onNextLevel, this);
		Polyworks.EventCenter.bind(Polyworks.Events.LEVEL_CLEARED, _onLevelCleared, this);
	}

	function _removeListeners() {
		window.onorientationchange = null;
		window.onresize = null;
		Polyworks.EventCenter.unbind(Polyworks.Events.STAGE_INITIALIZED, _onStageInitialized, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.CONTROL_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.CHANGE_STATE, _onChangeState, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.START_LEVEL, _onStartLevel, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.NEXT_LEVEL, _onNextLevel, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.LEVEL_CLEARED, _onLevelCleared, this);
	}

	function _hideAddressBar() {
		trace('------------ PolyworksGame/_hideAddressBar, window.location.hash = ', window.location.hash);
		if(!window.location.hash) {
			trace('\tdocument.height = ' + document.height + ', window.outerHeight = ' + window.outerHeight);
			if(document.height < window.outerHeight) {
				document.body.style.height = (window.outerHeight + 50) + 'px';
			}
			setTimeout(
				function() {
					trace('\tabout to scrollTo 0/1');
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
	
	function _getSavedData() {
		var savedData = Polyworks.Storage.get(PolyworksGame.name);
		trace('PolyworksGame/_getSavedData, savedData = ', savedData);
		if(typeof(savedData) !== 'undefined') {
			if(savedData.indexOf('{') > -1) {
				trace('\tdata saved was an object, parsing...');
				savedData = JSON.parse(savedData);
				for(var key in savedData) {
					PolyworksGame[key] = savedData[key];
				}
			}
		}
	}

	function _setSavedData() {
		var params = {};
		params[PolyworksGame.name] = {
			score: PolyworksGame.score,
			currentLevel: PolyworksGame.currentLevel,
			savedState: PolyworksGame.currentState,
			savedStatus: PolyworksGame.levelStatus
		};

		Polyworks.Storage.set(params);
	}
	
	function _preload() {
		var phaser = PolyworksGame.phaser;
		var images = _model.images;
		// trace('preload images');
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

		var sprites = _model.sprites;
		var loadedSprites = {};
		// trace('preload sprites');
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
	}
	
	function _create() {
		trace('PolyworksGame/_create');
		_beginControls();
		_beginStates();
	}
	
	function _onStageInitialized(event) {
		_stageInitialized = true;
		_isTouchDevice = (navigator.userAgent.match(/ipad|iphone|android/i) !== null);
		trace('PolyworksGame/_onStageInitialized, _isTouchDevice = ' + _isTouchDevice);

		var config = new Polyworks.Config();

		_model = config.init(Polyworks.Stage);
		trace(_model);
		PolyworksGame.startingHealth = _model.player.attrs.phaser.health;
		PolyworksGame.phaser = new Phaser.Game(Polyworks.Stage.winW, Polyworks.Stage.winH, Phaser.AUTO, 'gameContainer', { preload: _preload, create: _create });
	}

	function _onControlPressed(event) {
		switch(event.value) {
			case Polyworks.InputCodes.QUIT:
				PolyworksGame.changeState('quit');
			break;
			
			case Polyworks.InputCodes.CLEAR_DATA: 
				Polyworks.Storage.destroy();
			break;
			
			default: 
			break;
		}
	}
	
	function _onChangeState(event) {
		PolyworksGame.changeState(event.value);
	}
	
	function _onStartLevel(event) {
		trace('PolyworksGame/_onStartLevel, event = ', event);
		var idx = event.value;
		var stateId = _levels[idx].model.name;
		PolyworksGame.currentLevel = idx;
		trace('\tstateId = ' + stateId);
		PolyworksGame.levelText = _levels[idx].model.text;
		PolyworksGame.changeState(stateId);
	}
	
	function _onNextLevel(event) {
		trace('PolyworksGame/_onNextLevel, currentLevel = ', PolyworksGame.currentLevel);
		var stateId;
		if(PolyworksGame.currentLevel < PolyworksGame.levelCount) {
			stateId = _levels[PolyworksGame.currentLevel].model.name;
			PolyworksGame.levelText = _levels[PolyworksGame.currentLevel].model.text;
		} else {
			PolyworksGame.currentLevel = 0;
			PolyworksGame.levelText = '';
			stateId = 'completed'
		}
		PolyworksGame.changeState(stateId);
	}
	
	function _onLevelCleared(event) {
		trace('PolyworksGame/_onLevelCleared, event = ', event);
		var idx = event.value;
		PolyworksGame.levelStatus[idx] = 'c';
		
		idx++;
		
		if(PolyworksGame.levelStatus[idx] === 'l') {
			PolyworksGame.levelStatus[idx] = 'u';
		}
		PolyworksGame.currentLevel = idx;
		trace('\tend of level cleared, idx = ' + idx + ', currentLevel = ' + PolyworksGame.currentLevel);
	}

	function _beginControls() {
	
		_controls = new Polyworks.Collection(_model.controls.keys);
		_controls.begin();
	}

	function _beginStates() {
		trace('currentLevel = ' + PolyworksGame.currentLevel);
		PolyworksGame.levelStatus = [];

		var states = _model.states;
		var state;
		var levelCount = 0;

		Polyworks.Utils.each(states,
			function(s, idx) {
				state = new Polyworks[s.cl](s, s.name);
				_states[s.name] = state;
				PolyworksGame.phaser.state.add(s.name, state, false);
				if(s.name.indexOf('level') > -1) {
					trace('\tstate['+s.name+']');
					if(PolyworksGame.savedStatus) {
						PolyworksGame.levelStatus[levelCount] = PolyworksGame.savedStatus[levelCount];
					} else {
						PolyworksGame.levelStatus[levelCount] = (levelCount === 0) ? 'u' : 'l';
					}
					levelCount++;
					_levels.push(state);

					firstLevel = false;
				}
			},
			this
		);
		PolyworksGame.levelCount = levelCount;
		trace('PolyworksGame/_beginStates, _stageInitialized = ' + _stageInitialized + ', _states = ', _states, '\t_levels = ', _levels);
		if(_stageInitialized) {
			// if(PolyworksGame.savedState !== '' && PolyworksGame.currentState !== _model.initialState) {
			// 	PolyworksGame.changeState(PolyworksGame.savedState);
			// } else {
				PolyworksGame.changeState(_model.initialState);
			// }
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