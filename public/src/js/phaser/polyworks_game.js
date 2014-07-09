PWGGame = (function() {
	var _model = {};
	var _player = {};
	var _controls = {};
	var _states = {};
	var _levels = [];
	var _levelInfoStates = [];
	var _socialManager; 

	var _adapter = PWG.TGSAdapter;
	
	var _gameTitle = '';
	var _gameStarted = false;
	var _isTouchDevice = false;
	var _stageInitialized = false;
	var _statesInitialized = false;
	var _firstStateChanged = false; 
	
	var _resizeTimer = null;
	var _resizeInterval = 200;

	var _gaID = 'UA-50665683-1';
	
	var module = {
		name: '',
		phaser: null,
		player: null,
		highScores: [],
		levelScore: 0,
		currentLevelHighScore: 0,
		health: 0,
		levelText: '',
		currentLevel: 0,
		levelCount: 0,
		requirementsMet: 0,
		requirementsCount: 0,
		currentState: '',
		previousState: '',
		savedState: '',
		viewedOnce: '0',
		adPlaying: false,
		tipDisplayed: false,
		isLandscape: false,
		gameOver: false,
		isQuit: false,
		Tresensa: null,

		begin: function(params) {
			PWGGame.name = params.name;
			PWGGame.aspectRatio = params.aspectRatio;
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
			
			// window.addEventListener("orientationchange", 
			// 	function() {
			// 		trace('window.orientationchange');
			// 		_hideAddressBar();
			// 	}
			// );
			// window.addEventListener("blur",
			// 	function() {
			// 		PWG.EventCenter.trigger({ type: PWG.Events.PAUSE_STATE });
			// 	}
			// );
			// window.addEventListener("pagehide",
			// 	function() {
			// 		PWG.EventCenter.trigger({ type: PWG.Events.PAUSE_STATE });
			// 	}
			// );
			PWGGame.browser = PWG.DeviceUtils.getBrowser();
			PWGGame.os = PWG.DeviceUtils.getOs();
			trace('browser = ' + PWGGame.browser + ', os = ' + PWGGame.os);
			// CHECK FOR FIREFOX ON MAC, AND BLOCK -- IT CRASHES WITH WEB GL RENDERING AND IS TOO SLOW FOR CANVAS RENDERING
			if(PWGGame.browser === PWG.DeviceUtils.browsers.FIREFOX && PWGGame.os === PWG.DeviceUtils.operatingSystems.MAC) {
				var ffmsg = document.createElement('div');
				ffmsg.setAttribute('id', 'firefoxMessage');
				ffmsg.innerHTML = "we're sorry, but firefox is not supported.<br />please switch to a different browser.";
				document.body.appendChild(ffmsg);
			} else {
				_addGoogleAnalytics();
				_addListeners();
				_checkOrientation();
				_getSavedData();

				// if(PWG.DeviceUtils.isIphone()) {
				// 	document.getElementById('iphoneTip').style.display = 'block';
				// 	this.tipDisplayed = true;
				// }
			}
		},

		startGame: function() {
			trace('PWGGame/startGame');
			if(_stageInitialized) {
				_adapter.init(_levels.length);
				PWGGame.Tresensa = PWGGame.phaser.plugins.add(Phaser.Plugin.TreSensaPlugin);
				PWGGame.changeState(_model.initialState);
			}
		},
		
		getModel: function() {
			return _model;
		},

		get: function(prop) {
			// if(_model.hasOwnProperty(prop)) {
			if(PWG.Utils.has(_model, prop)) {
				return _model[prop];
			} else {
				return null;
			}
		},

		getLevelInfo: function(idx) {
			// trace('polyworks game/getLevelInfo, idx = ' + idx);
			var levelInfo = {
				levelText: _levels[idx].model.text,
				highScore: PWGGame.highScores[idx],
				status: PWGGame.levelStatus[idx],
				statusText: _model.levelStatusText[PWGGame.levelStatus[idx]]
			};
			return levelInfo;
		},

		changeState: function(id) {
			trace('change state, id = ' + id + ', tipDisplayed = ' + this.tipDisplayed);
			if(this.tipDisplayed && id !== 'menu') {
				document.getElementById('iphoneTip').style.display = 'none';
				tipDisplayed = false;
			}
			if(id === 'quit') {
				PWGGame.quit();
			} else {
				var state = _states[id];
				if(state) {
					PWGGame.previousState = PWGGame.currentState;
					PWGGame.currentState = id;
					trace('PWGGame/changeState, id = ' + id + ', clearWorld = ' + state.clearWorld + ', clearCache = ' + state.clearCache);
					// trace(_states);
					PWGGame.addLoadingDiv();
					PWGGame.phaser.state.start(id, state.clearWorld, state.clearCache);
				} else {
					trace('ERROR: state['+id+'] not found');
				}
				_setSavedData();
			}
		},

		setScore: function(val) {
			PWGGame.score += val;
			PWG.EventCenter.trigger({ type: PWG.Events.SCORE_UPDATED });
		},

		setLevelScore: function(val) {
			PWGGame.levelScore += val;
			PWG.EventCenter.trigger({ type: PWG.Events.LEVEL_SCORE_UPDATED });
		},

		setHealth: function(val) {
			PWGGame.health = val;
			PWG.EventCenter.trigger({ type: PWG.Events.HEALTH_UPDATED });
		},

		setRequirements: function(met, total) {
			PWGGame.requirementsMet = met;
			PWGGame.requirementsCount = total;
			trace('PWGGame.setRequirements, requirementsMet = ' + PWGGame.requirementsMet + ', total = ' + PWGGame.requirementsCount);
			if(total > 0) {
				PWG.EventCenter.trigger({ type: PWG.Events.REQUIREMENTS_UPDATED });
			}
		},

		addLoadingDiv: function() {
			var loading = document.createElement('div');
			loading.setAttribute('id', 'loading');

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
			// trace('PWGGame/quit');
			if(!PWGGame.isQuit) {
				_quit();
			}
		}
	};

	function _addWebFonts(webFonts) {
		PWG.WebFontManager.init(webFonts);
	}
	
	function _addGoogleAnalytics() {
		/*
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		var gid = 'kekeandthegreyexpanse';
		var version = '1.0.0';

		ga('create', 'UA-50665683-2', 'games.tresensa.com');
		ga('send', 'pageview');
		ga('set', 'dimension1', gid);
		ga('set', 'dimension2', version);
		*/
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
		window.onblur = function(event) {
			PWG.EventCenter.trigger({ type: PWG.Events.PAUSE_STATE });
		};
		window.onpagehide = function(event) {
			PWG.EventCenter.trigger({ type: PWG.Events.PAUSE_STATE });
		};

		PWG.EventCenter.begin();
		PWG.EventCenter.bind(PWG.Events.STAGE_INITIALIZED, _onStageInitialized, this);
		PWG.EventCenter.bind(PWG.Events.BUTTON_PRESSED, _onControlPressed, this);
		PWG.EventCenter.bind(PWG.Events.CONTROL_PRESSED, _onControlPressed, this);
		PWG.EventCenter.bind(PWG.Events.CHANGE_STATE, _onChangeState, this);
		PWG.EventCenter.bind(PWG.Events.SHOW_LEVEL_INFO, _onShowLevelInfo, this);
		PWG.EventCenter.bind(PWG.Events.START_LEVEL, _onStartLevel, this);
		PWG.EventCenter.bind(PWG.Events.NEXT_LEVEL, _onNextLevel, this);
		PWG.EventCenter.bind(PWG.Events.LEVEL_CLEARED, _onLevelCleared, this);
	}

	function _removeListeners() {
		window.onorientationchange = null;
		window.onresize = null;
		window.onblur = null;
		window.onpagehide = null;
		PWG.EventCenter.unbind(PWG.Events.STAGE_INITIALIZED, _onStageInitialized, this);
		PWG.EventCenter.unbind(PWG.Events.BUTTON_PRESSED, _onControlPressed, this);
		PWG.EventCenter.unbind(PWG.Events.CONTROL_PRESSED, _onControlPressed, this);
		PWG.EventCenter.unbind(PWG.Events.CHANGE_STATE, _onChangeState, this);
		PWG.EventCenter.unbind(PWG.Events.START_LEVEL, _onStartLevel, this);
		PWG.EventCenter.unbind(PWG.Events.NEXT_LEVEL, _onNextLevel, this);
		PWG.EventCenter.unbind(PWG.Events.LEVEL_CLEARED, _onLevelCleared, this);
	}

	function _hideAddressBar() {
		// trace('------------ PWGGame/_hideAddressBar, window.location.hash = ', window.location.hash);
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
		PWGGame.isLandscape = (w > h) ? true : false;
		// trace('PWGGame/_checkOrientation, isLandscape = ' + PWGGame.isLandscape, '\t_stageInitialized = ' + _stageInitialized);
		if(PWGGame.isLandscape) {
			PWGGame.hideOrientationMessage();
			if(!_stageInitialized) {
				PWG.Stage.init(PWGGame.aspectRatio);
			}
		} else {
			PWGGame.showOrientationMessage();
		}
	}
	
	function _orientationChange() {
		_checkOrientation();
		// trace('PWGGame/_orientationChange, isLandscape = ' + PWGGame.isLandscape + ', currentState' + PWGGame.currentState); 
		if(PWGGame.currentState !== '') {
			_states[PWGGame.currentState].orientationSet(PWGGame.isLandscape);
		}
	}
	
	function _getSavedData() {
		// Polywork.Storage.destroy();
		var savedData = PWG.Storage.get(PWGGame.name);
		trace('PWGGame/_getSavedData, savedData = ', savedData);
		if(typeof(savedData) !== 'undefined') {
			if(savedData.indexOf('{') > -1) {
				// trace('\tdata saved was an object, parsing...');
				savedData = JSON.parse(savedData);
				for(var key in savedData) {
					PWGGame[key] = savedData[key];
				}
			}
		}
	}

	function _setSavedData() {
		var params = {};
		params[PWGGame.name] = {
			score: PWGGame.score,
			currentLevel: PWGGame.currentLevel,
			savedState: PWGGame.currentState,
			savedStatus: PWGGame.levelStatus,
			highScores: PWGGame.highScores,
			viewedOnce: '1'
		};

		PWG.Storage.set(params);
	}
	
	function _preload() {
		var phaser = PWGGame.phaser;
		var audio = _model.audio;
		var images = _model.images;
		var sprites = _model.sprites;
		var loaded = {
			audio: {},
			images: {},
			sprites: {}
		};

		PWG.Utils.each(
			audio,
			function(audio, key) {
				if(_model.preloadAll) {
					phaser.load.audio(key, audio);
					loaded.audio[key] = true;
				}
				loaded.audio[key] = false;
			},
			this
		);
		
		PWG.Utils.each(images,
			function(image, key) {
				if(_model.preloadAll) {
					phaser.load.image(key, image);
					loaded.image[key] = true;
				}
				loaded.images[key] = false;
			},
			this
		);

		// trace('preload sprites');
		PWG.Utils.each(sprites,
			function(sprite, key) {
				// trace('PWGGame setting sprite['+key+'] loaded to false');
				if(_model.preloadAll) {
					phaser.load.spritesheet(key, sprite.url, sprite.width, sprite.height, sprite.frames);
					loaded.sprites[key] = true;
				}
				loaded.sprites[key] = false;
			},
			this
		);

		PWGGame.loaded = loaded;
	}
	
	function _create() {
		// trace('PWGGame/_create');
		_initControls();
		_initStates();
		// _initSocial();

	}
	
	function _onStageInitialized(event) {
		_stageInitialized = true;
		_isTouchDevice = (navigator.userAgent.match(/ipad|iphone|android/i) !== null);
		// trace('PWGGame/_onStageInitialized, _isTouchDevice = ' + _isTouchDevice);

		var config = new PWG.Config();

		_model = config.init(PWG.Stage);
		trace(_model);
		if(_model.webFonts) {
			_addWebFonts(_model.webFonts);
		}
		PWGGame.startingHealth = _model.player.attrs.phaser.health;

		var renderType = Phaser.AUTO;
		// if(PWG.DeviceUtils.isFirefox()) {
		// 	renderType = Phaser.CANVAS;
		// }
		// trace('---------- renderType = ' + renderType);
		PWGGame.phaser = new Phaser.Game(PWG.Stage.winW, PWG.Stage.winH, renderType, 'gameContainer', { preload: _preload, create: _create });
	}

	function _onControlPressed(event) {
		switch(event.value) {
			case PWG.InputCodes.QUIT:
				PWGGame.changeState('quit');
			break;

			case PWG.InputCodes.CLEAR_DATA: 
				PWG.Storage.destroy();
			break;

			default: 
			break;
		}
	}
	
	function _onChangeState(event) {
		if(event.value === 'map') {
			if(!_gameStarted) {
				_gameStarted = true;
				_adapter.logEvent(_adapter.logEvents.GAME_EVENT, [_adapter.gameEvents.BEGIN]);
			}
		}
		PWGGame.changeState(event.value);
	}
	
	function _onShowLevelInfo(event) {
		trace('PWGGame/_onShowLevelInfo, event = ', event);
		var levelIdx = (event.value < 9) ? ('0' + (event.value+1)) : (event.value+1);
		var stateId = 'level' + levelIdx + 'Info';
		PWGGame.changeState(stateId);
	}

	function _onStartLevel(event) {

		idx = PWGGame.currentLevel;
		for(var key in event) {
			if(key === 'value' && typeof(event[key]) !== 'undefined') {
				idx = event[key];
				break;
			}
		}
		// trace('\tidx = ' + idx);
		var stateId = _levels[idx].model.name;
		PWGGame.currentLevel = idx;
		// trace('\tstateId = ' + stateId);
		PWGGame.levelText = _levels[idx].model.text;
		PWGGame.levelScore = 0;
		PWGGame.currentLevelHighScore = 'high score: ' + PWGGame.highScores[idx];
		PWGGame.changeState(stateId);

		_adapter.logEvent(_adapter.logEvents.LEVEL_EVENT, [_adapter.levelEvents.START, (idx+1)]);
		// _adapter.adCheck(PWGGame.currentLevel);
	}
	
	function _onNextLevel(event) {
		trace('PWGGame/_onNextLevel, currentLevel = ', PWGGame.currentLevel);
		var stateId;
		if(PWGGame.currentLevel === PWGGame.levelCount) {
			PWGGame.currentLevel = 0;
			PWGGame.levelText = '';
			stateId = 'completed';
			
			_adapter.logEvent(_adapter.logEvents.ACHIEVEMENT_EVENT, [_adapter.achievementEvents.GAME_COMPLETED]);

		} else {
			var idx = PWGGame.currentLevel;
			var levelIdx = (idx < 9) ? ('0' + (idx+1)) : (idx+1);
			stateId = 'level' + levelIdx + 'Info';
		}
		_adapter.closeWidget();
		PWGGame.changeState(stateId);

	}
	
	function _onLevelCleared(event) {
		trace('PWGGame/_onLevelCleared, event = ', event);
		var idx = event.value;
		PWGGame.levelStatus[idx] = 'c';

		if(PWGGame.levelScore > PWGGame.highScores[idx]) {
			PWGGame.highScores[idx] = PWGGame.levelScore;
			PWGGame.currentLevelHighScore = 'high score: ' + PWGGame.levelScore + ' NEW';
			PWG.EventCenter.trigger(PWG.Events.HIGH_SCORE_UPDATED);
			_adapter.logEvent(_adapter.logEvents.ACHIEVEMENT_EVENT, [_adapter.achievementEvents.NEW_HIGH_SCORE, PWGGame.levelScore]);

			var totalScore = 0;
			PWG.Utils.each(
				PWGGame.highScores,
				function(highScore) {
					totalScore += highScore;
				},
				this
			);
			_adapter.submitScore({ score: totalScore });
		}

		_adapter.logEvent(_adapter.logEvents.LEVEL_EVENT, [_adapter.levelEvents.COMPLETE, (idx+1)]);
		idx++;
		trace('THE NEW LEVEL STATUS IS: ' + PWGGame.levelStatus[idx]);
		if(PWGGame.levelStatus[idx] === 'l') {
			PWGGame.levelStatus[idx] = 'u';
		}
		PWGGame.currentLevel = idx;
	}

	function _initControls() {
	
		_controls = new PWG.Collection(_model.controls.keys);
		_controls.begin();
	}

	function _initStates() {
		trace('currentLevel = ' + PWGGame.currentLevel);
		PWGGame.levelStatus = [];

		var states = _model.states;
		var state;
		var levelCount = 0;

		PWG.Utils.each(states,
			function(s, idx) {
				// trace(s);
				state = new PWG[s.cl](s, s.name);
				_states[s.name] = state;
				PWGGame.phaser.state.add(s.name, state, false);
				if(s.name.indexOf('level') > -1) {
					// trace('\tstate['+s.name+'] levelCount = ' + levelCount);
					if(PWGGame.savedStatus) {
						PWGGame.levelStatus[levelCount] = PWGGame.savedStatus[levelCount];
						PWGGame.highScores[levelCount] = PWGGame.highScores[levelCount] || 0;
					} else {
						PWGGame.levelStatus[levelCount] = (levelCount === 0) ? 'u' : 'l';
						PWGGame.highScores[levelCount] = 0;
					}
					levelCount++;
					_levels.push(state);
					firstLevel = false;
				}
			},
			this
		);
		PWGGame.levelCount = levelCount;
		_initLevelInfoStates();

		trace('PWGGame/_initStates, _stageInitialized = ' + _stageInitialized + ', _states = ', _states, '\t_levels = ', _levels);
		_statesInialized = true;

		if(typeof(TGS) !== 'undefined') {
			if(TGS.IsReady()) {
				trace('\ttgs is ready');
				_startGame();
			} else {
				trace('\ttgs is defined, but not ready');
				TGS.onReady = PWGGame.startGame();
			}
		} else {
			trace('\ttgs is not defined');
			_startGame();
		}
	}

	// function _startGame() {
	// 	trace('START GAME');
	// 	if(_stageInitialized) {
	// 		_adapter.init(_levels.length);
	// 		PWGGame.Tresensa = PWGGame.phaser.plugins.add(Phaser.Plugin.TreSensaPlugin);
	// 		PWGGame.changeState(_model.initialState);
	// 	}
	// }
	
	function _initLevelInfoStates() {
		var template = PWGGame.get('levelInfoStateTemplate');
		var controls = PWGGame.get('controls').levelInfo;
		
		PWG.Utils.each(
			_levels,
			function(level, idx) {
				var levelInfoConfig = PWG.Utils.clone(template.state);
				var groupCollection = PWG.Utils.clone(template.groupCollection);
				var levelInfoState;
				var levelIdx;
				var levelInfo; 
				var background;
				var title;

				levelInfo = PWGGame.getLevelInfo(idx);
				levelIdx = (idx < 9) ? ('0' + (idx+1)) : (idx+1);

				stateName = 'level' + levelIdx + 'Info';
				background = 'level' + levelIdx + 'Preview';
				title = 'level' + levelIdx + 'Title';
				
				levelInfoConfig.name = stateName;
				levelInfoConfig.images.push(background);
				levelInfoConfig.images.push(title);

				groupCollection.background.attrs.img = background;
				groupCollection.title.attrs.img = title;
				groupCollection.description.attrs.defaultContent = template.descriptions[idx];
				groupCollection.highScore.attrs.defaultContent = 'high score: ' + levelInfo.highScore;
				groupCollection.status.attrs.defaultContent = levelInfo.statusText;
				groupCollection.playButton.attrs.events.released.value = idx;
				
				PWG.Utils.each(
					groupCollection,
					function(item, key) {
						// trace('\titem['+key+'] = ', item);
						levelInfoConfig.attrs[0].attrs.push(item);
					},
					this
				);

				// trace('levelInfo['+levelIdx+'] levelInfoConfig = ', levelInfoConfig);
				levelInfoState = new PWG.MenuState(levelInfoConfig);
				PWGGame.phaser.state.add(stateName, levelInfoState, false);
				_states[stateName] = levelInfoState;
			},
			this
		);
	}
	
	function _initSocial() {
		// PWG.SocialManager.init(_model.social);
		PWG.SocialPanel.init(_model.social);
	}
	
	function _quit() {
		_adapter.logEvent(_adapter.logEvents.GAME_EVENT, [_adapter.gameEvents.END]);
		_removeListeners();
		PWGGame.isQuit = true;
		// _killStates();
		// PWG.EventCenter.reset();

		_states[PWGGame.currentState].shutdown();
		PWGGame.gameOver = true;
		if(PWGGame.player) {
			PWGGame.player.destroy();
		}
		PWG.SocialPanel.destroy();
		PWGGame.phaser.destroy();

		var gameContainer = document.getElementById('gameContainer');
		gameContainer.parentNode.removeChild(gameContainer);

		PWGGame.phaser = null;
		PWG.Stage.destroy();
		PWG.Stage = null;
		PWG = null;
		Phaser = null;
		window.PWGGame = null;
	}
	
	function _killStates() {
		// trace('PWGGame/_killStates');
		PWG.Utils.each(_states,
			function(s) {
				s.shutdown();
			},
			this
		);
	}

	
	return module;
}());

var scriptsLoaded = false;
var elementsAdded = false;

// PWG.DOMManager.addScripts(domConfig.scripts, onScriptsLoaded);
PWG.DOMManager.addElements(domConfig.head.elements, document.getElementsByTagName('head')[0]);
PWG.DOMManager.addElements(domConfig.body.elements, document.getElementsByTagName('body')[0], onElementsAdded);

function onElementsAdded() {
	// trace('onElementsAdded, scriptsLoaded = ' + scriptsLoaded);
	elementsAdded = true;
	// if(scriptsLoaded) {
		beginGame();
	// }
}

function onScriptsLoaded() {
	trace('onScriptsAdded, elementsAdded = ' + elementsAdded);
	scriptsLoaded = true;
	if(elementsAdded) {
		beginGame();
	}
}

function beginGame() {
	PWGGame.begin({
		name: 'kekeAndTheGreyExpanse',
		aspectRatio: [16, 9]
	});
}