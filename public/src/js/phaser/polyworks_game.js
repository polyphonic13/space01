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

		getState: function(name) {
			return _states[name];
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
		_removeLoadingAnimation();
		_beginEvents();
		// _beginControls();
		_beginStates();
/*
		var params = {
			x: 10, 
			y: 10,
			img: 'heart',
			name: 'heartIcon'
		};
		var test = new Polyworks.Sprite(PolyworksGame.phaser, params.x, params.y, params);
		test.begin();
		// PolyworksGame.phaser.add.sprite(10, 10, params.img, params.name);
		var group = PolyworksGame.phaser.add.group();
		group.add(test);
*/
	}
	
	
	function _beginEvents() {
		Polyworks.EventCenter.begin();
		Polyworks.EventCenter.bind(Polyworks.Events.BUTTON_PRESSED, _onControlPressed, this);
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
	
		_controls = new Polyworks.Collection(config.controls.keys, 'controlKeys');
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
		PolyworksGame.changeState(config.initialState);
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