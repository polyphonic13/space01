PolyworksGame = (function() {
	var _model = {};
	var _player = {};
	var _controls = {};
	var _states = {};
	var _levels = [];
	var _levelInfoStates = [];
	var _socialManager; 

	var _adapter = Polyworks.TGSAdapter;
	
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

		begin: function(params) {
			PolyworksGame.name = params.name;
			PolyworksGame.aspectRatio = params.aspectRatio;
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
			// 		Polyworks.EventCenter.trigger({ type: Polyworks.Events.PAUSE_STATE });
			// 	}
			// );
			// window.addEventListener("pagehide",
			// 	function() {
			// 		Polyworks.EventCenter.trigger({ type: Polyworks.Events.PAUSE_STATE });
			// 	}
			// );
			PolyworksGame.browser = Polyworks.DeviceUtils.getBrowser();
			if(PolyworksGame.browser === Polyworks.DeviceUtils.browsers.FIREFOX) {
				var ffmsg = document.createElement('div');
				ffmsg.setAttribute('id', 'firefoxMessage');
				ffmsg.innerHTML = "we're sorry, but firefox is not supported.<br />please switch to a different browser.";
				document.body.appendChild(ffmsg);
			} else {
				_addGoogleAnalytics();
				_addListeners();
				_checkOrientation();
				_getSavedData();

				if(Polyworks.DeviceUtils.isIphone()) {
					document.getElementById('iphoneTip').style.display = 'block';
					this.tipDisplayed = true;
				}
			}
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

		getLevelInfo: function(idx) {
			// trace('polyworks game/getLevelInfo, idx = ' + idx);
			var levelInfo = {
				levelText: _levels[idx].model.text,
				highScore: PolyworksGame.highScores[idx],
				status: PolyworksGame.levelStatus[idx],
				statusText: _model.levelStatusText[PolyworksGame.levelStatus[idx]]
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

		setLevelScore: function(val) {
			PolyworksGame.levelScore += val;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.LEVEL_SCORE_UPDATED });
		},

		setHealth: function(val) {
			PolyworksGame.health = val;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.HEALTH_UPDATED });
		},

		setRequirements: function(met, total) {
			PolyworksGame.requirementsMet = met;
			PolyworksGame.requirementsCount = total;
			trace('PolyworksGame.setRequirements, requirementsMet = ' + PolyworksGame.requirementsMet + ', total = ' + PolyworksGame.requirementsCount);
			if(total > 0) {
				Polyworks.EventCenter.trigger({ type: Polyworks.Events.REQUIREMENTS_UPDATED });
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
			// trace('PolyworksGame/quit');
			if(!PolyworksGame.isQuit) {
				_quit();
			}
		}
	};

	function _addWebFonts(webFonts) {
		Polyworks.WebFontManager.init(webFonts);
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
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.PAUSE_STATE });
		};
		window.onpagehide = function(event) {
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.PAUSE_STATE });
		};

		Polyworks.EventCenter.begin();
		Polyworks.EventCenter.bind(Polyworks.Events.STAGE_INITIALIZED, _onStageInitialized, this);
		Polyworks.EventCenter.bind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.bind(Polyworks.Events.CONTROL_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.bind(Polyworks.Events.CHANGE_STATE, _onChangeState, this);
		Polyworks.EventCenter.bind(Polyworks.Events.SHOW_LEVEL_INFO, _onShowLevelInfo, this);
		Polyworks.EventCenter.bind(Polyworks.Events.START_LEVEL, _onStartLevel, this);
		Polyworks.EventCenter.bind(Polyworks.Events.NEXT_LEVEL, _onNextLevel, this);
		Polyworks.EventCenter.bind(Polyworks.Events.LEVEL_CLEARED, _onLevelCleared, this);
	}

	function _removeListeners() {
		window.onorientationchange = null;
		window.onresize = null;
		window.onblur = null;
		window.onpagehide = null;
		Polyworks.EventCenter.unbind(Polyworks.Events.STAGE_INITIALIZED, _onStageInitialized, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.CONTROL_PRESSED, _onControlPressed, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.CHANGE_STATE, _onChangeState, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.START_LEVEL, _onStartLevel, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.NEXT_LEVEL, _onNextLevel, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.LEVEL_CLEARED, _onLevelCleared, this);
	}

	function _hideAddressBar() {
		// trace('------------ PolyworksGame/_hideAddressBar, window.location.hash = ', window.location.hash);
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
		// trace('PolyworksGame/_checkOrientation, isLandscape = ' + PolyworksGame.isLandscape, '\t_stageInitialized = ' + _stageInitialized);
		if(PolyworksGame.isLandscape) {
			PolyworksGame.hideOrientationMessage();
			if(!_stageInitialized) {
				Polyworks.Stage.init(PolyworksGame.aspectRatio);
			}
		} else {
			PolyworksGame.showOrientationMessage();
		}
	}
	
	function _orientationChange() {
		_checkOrientation();
		// trace('PolyworksGame/_orientationChange, isLandscape = ' + PolyworksGame.isLandscape + ', currentState' + PolyworksGame.currentState); 
		if(PolyworksGame.currentState !== '') {
			_states[PolyworksGame.currentState].orientationSet(PolyworksGame.isLandscape);
		}
	}
	
	function _getSavedData() {
		// Polywork.Storage.destroy();
		var savedData = Polyworks.Storage.get(PolyworksGame.name);
		trace('PolyworksGame/_getSavedData, savedData = ', savedData);
		if(typeof(savedData) !== 'undefined') {
			if(savedData.indexOf('{') > -1) {
				// trace('\tdata saved was an object, parsing...');
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
			savedStatus: PolyworksGame.levelStatus,
			highScores: PolyworksGame.highScores,
			viewedOnce: '1'
		};

		Polyworks.Storage.set(params);
	}
	
	function _preload() {
		var phaser = PolyworksGame.phaser;
		var images = _model.images;
		var sprites = _model.sprites;
		var loaded = {
			images: {},
			sprites: {}
		};

		Polyworks.Utils.each(images,
			function(image, key) {
				if(_model.preloadAll) {
					phaser.load.image(key, image);
				}
				loaded.images[key] = false;
			},
			this
		);

		// trace('preload sprites');
		Polyworks.Utils.each(sprites,
			function(sprite, key) {
				// trace('PolyworksGame setting sprite['+key+'] loaded to false');
				if(_model.preloadAll) {
					phaser.load.spritesheet(key, sprite.url, sprite.width, sprite.height, sprite.frames);
				}
				loaded.sprites[key] = false;
			},
			this
		);

		PolyworksGame.loaded = loaded;
	}
	
	function _create() {
		// trace('PolyworksGame/_create');
		_initControls();
		_initStates();
		_initSocial();
	}
	
	function _onStageInitialized(event) {
		_stageInitialized = true;
		_isTouchDevice = (navigator.userAgent.match(/ipad|iphone|android/i) !== null);
		// trace('PolyworksGame/_onStageInitialized, _isTouchDevice = ' + _isTouchDevice);

		var config = new Polyworks.Config();

		_model = config.init(Polyworks.Stage);
		trace(_model);
		if(_model.webFonts) {
			_addWebFonts(_model.webFonts);
		}
		PolyworksGame.startingHealth = _model.player.attrs.phaser.health;

		var renderType = Phaser.AUTO;
		// if(Polyworks.DeviceUtils.isFirefox()) {
		// 	renderType = Phaser.CANVAS;
		// }
		// trace('---------- renderType = ' + renderType);
		PolyworksGame.phaser = new Phaser.Game(Polyworks.Stage.winW, Polyworks.Stage.winH, renderType, 'gameContainer', { preload: _preload, create: _create });
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
		if(event.value === 'map') {
			if(!_gameStarted) {
				_gameStarted = true;
				_adapter.logEvent(_adapter.logEvents.GAME_EVENT, [_adapter.gameEvents.BEGIN]);
			}
		}
		PolyworksGame.changeState(event.value);
	}
	
	function _onShowLevelInfo(event) {
		trace('PolyworksGame/_onShowLevelInfo, event = ', event);
		var levelIdx = (event.value < 9) ? ('0' + (event.value+1)) : (event.value+1);
		var stateId = 'level' + levelIdx + 'Info';
		PolyworksGame.changeState(stateId);
	}

	function _onStartLevel(event) {

		idx = PolyworksGame.currentLevel;
		for(var key in event) {
			if(key === 'value' && typeof(event[key]) !== 'undefined') {
				idx = event[key];
				break;
			}
		}
		// trace('\tidx = ' + idx);
		var stateId = _levels[idx].model.name;
		PolyworksGame.currentLevel = idx;
		// trace('\tstateId = ' + stateId);
		PolyworksGame.levelText = _levels[idx].model.text;
		PolyworksGame.levelScore = 0;
		PolyworksGame.currentLevelHighScore = 'high score: ' + PolyworksGame.highScores[idx];
		PolyworksGame.changeState(stateId);

		_adapter.logEvent(_adapter.logEvents.LEVEL_EVENT, [_adapter.levelEvents.START, (idx+1)]);
		_adapter.adCheck(PolyworksGame.currentLevel);
	}
	
	function _onNextLevel(event) {
		trace('PolyworksGame/_onNextLevel, currentLevel = ', PolyworksGame.currentLevel);
		var stateId;
		if(PolyworksGame.currentLevel === PolyworksGame.levelCount) {
			PolyworksGame.currentLevel = 0;
			PolyworksGame.levelText = '';
			stateId = 'completed';

			_adapter.logEvent(_adapter.logEvents.ACHIEVEMENT_EVENT, [_adapter.achievementEvents.GAME_COMPLETED]);

		} else {
			var idx = PolyworksGame.currentLevel;
			var levelIdx = (idx < 9) ? ('0' + (idx+1)) : (idx+1);
			stateId = 'level' + levelIdx + 'Info';
		}
		PolyworksGame.changeState(stateId);

	}
	
	function _onLevelCleared(event) {
		trace('PolyworksGame/_onLevelCleared, event = ', event);
		var idx = event.value;
		PolyworksGame.levelStatus[idx] = 'c';

		if(PolyworksGame.levelScore > PolyworksGame.highScores[idx]) {
			PolyworksGame.highScores[idx] = PolyworksGame.levelScore;
			PolyworksGame.currentLevelHighScore = 'high score: ' + PolyworksGame.levelScore + ' NEW';
			Polyworks.EventCenter.trigger(Polyworks.Events.HIGH_SCORE_UPDATED);
			_adapter.logEvent(_adapter.logEvents.ACHIEVEMENT_EVENT, [_adapter.achievementEvents.NEW_HIGH_SCORE, PolyworksGame.levelScore]);

			var totalScore = 0;
			Polyworks.Utils.each(
				PolyworksGame.highScores,
				function(highScore) {
					totalScore += highScore;
				},
				this
			);
			_adapter.submitScore({ score: totalScore });
		}

		_adapter.logEvent(_adapter.logEvents.LEVEL_EVENT, [_adapter.levelEvents.COMPLETE, (idx+1)]);
		idx++;
		trace('THE NEW LEVEL STATUS IS: ' + PolyworksGame.levelStatus[idx]);
		if(PolyworksGame.levelStatus[idx] === 'l') {
			PolyworksGame.levelStatus[idx] = 'u';
		}
		PolyworksGame.currentLevel = idx;
	}

	function _initControls() {
	
		_controls = new Polyworks.Collection(_model.controls.keys);
		_controls.begin();
	}

	function _initStates() {
		trace('currentLevel = ' + PolyworksGame.currentLevel);
		PolyworksGame.levelStatus = [];

		var states = _model.states;
		var state;
		var levelCount = 0;

		Polyworks.Utils.each(states,
			function(s, idx) {
				// trace(s);
				state = new Polyworks[s.cl](s, s.name);
				_states[s.name] = state;
				PolyworksGame.phaser.state.add(s.name, state, false);
				if(s.name.indexOf('level') > -1) {
					// trace('\tstate['+s.name+'] levelCount = ' + levelCount);
					if(PolyworksGame.savedStatus) {
						PolyworksGame.levelStatus[levelCount] = PolyworksGame.savedStatus[levelCount];
						PolyworksGame.highScores[levelCount] = PolyworksGame.highScores[levelCount] || 0;
					} else {
						PolyworksGame.levelStatus[levelCount] = (levelCount === 0) ? 'u' : 'l';
						PolyworksGame.highScores[levelCount] = 0;
					}
					levelCount++;
					_levels.push(state);
					firstLevel = false;
				}
			},
			this
		);
		PolyworksGame.levelCount = levelCount;
		_initLevelInfoStates();
		_adapter.init(levelCount);
		trace('PolyworksGame/_initStates, _stageInitialized = ' + _stageInitialized + ', _states = ', _states, '\t_levels = ', _levels);
		if(_stageInitialized) {
			PolyworksGame.changeState(_model.initialState);
		}
		_statesInialized = true;
	}

	function _initLevelInfoStates() {
		var template = PolyworksGame.get('levelInfoStateTemplate');
		var controls = PolyworksGame.get('controls').levelInfo;
		
		Polyworks.Utils.each(
			_levels,
			function(level, idx) {
				var levelInfoConfig = Polyworks.Utils.clone(template.state);
				var groupCollection = Polyworks.Utils.clone(template.groupCollection);
				var levelInfoState;
				var levelIdx;
				var levelInfo; 
				var background;
				var title;

				levelInfo = PolyworksGame.getLevelInfo(idx);
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
				
				Polyworks.Utils.each(
					groupCollection,
					function(item, key) {
						// trace('\titem['+key+'] = ', item);
						levelInfoConfig.attrs[0].attrs.push(item);
					},
					this
				);

				trace('levelInfo['+levelIdx+'] levelInfoConfig = ', levelInfoConfig);
				levelInfoState = new Polyworks.MenuState(levelInfoConfig);
				PolyworksGame.phaser.state.add(stateName, levelInfoState, false);
				_states[stateName] = levelInfoState;
			},
			this
		);
	}
	
	function _initSocial() {
		// Polyworks.SocialManager.init(_model.social);
		Polyworks.SocialPanel.init(_model.social);
	}
	
	function _quit() {
		_adapter.logEvent(_adapter.logEvents.GAME_EVENT, [_adapter.gameEvents.END]);
		_removeListeners();
		PolyworksGame.isQuit = true;
		// _killStates();
		// Polyworks.EventCenter.reset();

		_states[PolyworksGame.currentState].shutdown();
		PolyworksGame.gameOver = true;
		if(PolyworksGame.player) {
			PolyworksGame.player.destroy();
		}
		Polyworks.SocialPanel.destroy();
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

	
	return module;
}());

Polyworks.DOMManager.addElements(domConfig.head.elements, document.getElementsByTagName('head')[0]);
Polyworks.DOMManager.addElements(domConfig.body.elements, document.getElementsByTagName('body')[0], onElementsAdded);

function onElementsAdded() {
	PolyworksGame.begin({
		name: 'kekeAndTheGreyExpanse',
		aspectRatio: [16, 9]
	});
}
