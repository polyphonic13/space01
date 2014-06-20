PWG.TGSAdapter = (function() {
	var LEVEL_PLAYS_PER_AD = 1;
	var WIDGET_WIDTH = 300;

	
	var _levels = [];

	var _tgsExists = false;
	var _needAd = false;
	
	var _tgsConfig = {
		GAME_ID: 'kekeandthegreyexpanse',
		ADS: {
			INTERSTITIAL_INTERVAL: 5
		}
	};
	
	var _displayConfig = {
		parentDiv: document.getElementById('adContainer'),
		blurDiv: document.getElementById('gameContainter'),
		closeCallback: function() {
			_finishAdSession();
		}
	};
	
	var _endScreenContainer;

	var module = {
		logEvents: {
			GAME_EVENT: 'logGameEvent',
			LEVEL_EVENT: 'logLevelEvent',
			CUSTOM_EVENT: 'logCustomEvent',
			SHARE_EVENT: 'logShareEvent',
			SCREEN: 'logScreen',
			ACHIEVEMENT_EVENT: 'logAchievementEvent'
		},
		gameEvents: {
			LOAD: 'load',
			BEGIN: 'begin',
			PAUSE: 'pause',
			RESUME: 'resume',
			END: 'end'
		},
		levelEvents: {
			START: 'start',
			COMPLETE: 'complete',
			FAIL: 'fail',
			REPLAY: 'replay'
		},
		achievementEvents: {
			NEW_HIGH_SCORE: 'newHighScore',
			GAME_COMPLETED: 'gameCompleted'
		},
		
		init: function(levelCount) {
			_endScreenContainer = document.getElementById('endScreenContainer');
			
			for(var i = 0; i < levelCount; i++) {
				_levels[i] = LEVEL_PLAYS_PER_AD;
			}

			if(typeof(TGS) !== 'undefined') {
				_tgsExists = true;
				TGS.Init(_tgsConfig);
			}
			trace('TGSAdapter/init, _levels = ', _levels);
		},
		
		// http://developer.tresensa.com/docs/tgs/symbols/TGS.Analytics.html#.logGameEvent
		logEvent: function(type, args) {
			if(_tgsExists) {
				trace('TGSAdapter/logEvent, type = ' + type + ', args = ', args);
				TGS.Analytics[type](args);
			}
		},
		
		submitScore: function(params) {
			if(_tgsExists) {
				trace('submitting score: ', params);
				TGS.Leaderboard.SubmitScore(params);
			}
		},
		
		adCheck: function(idx) {
			trace('TGSAdapter/adCheck, _levels[' + idx + '] = ' + _levels[idx] + ', LEVELS_PLAYS_PER_AD = ' + LEVEL_PLAYS_PER_AD);
			// if(_tgsExists) {
			if(_needAd) {
				// if(_levels[idx] === 0) {
					// _levels[idx] = LEVEL_PLAYS_PER_AD;
					this.displayInterstitial();
				// } else {
				// 	_levels[idx]--;
				// 	_finishAdSession();
				// }
				_needAd = false;
			} else {
				_needAd = true;
				_finishAdSession();
			}
		},
		
		displayInterstitial: function() {
			
			trace('TGSAdapter/displayInterstitial');
			PWGGame.adPlaying = true;
			PWG.EventCenter.trigger({ type: PWG.Events.AD_STARTED });
			TGS.Advertisement.DisplayInterstitialAd(_displayConfig);		
		},
		
		addGameOverWidget: function() {
			trace('TGSAdapter/addGameOverWidget');
			var winW = PWG.Stage.winW; 
			var winH = PWG.Stage.winH;
			var widgetW = WIDGET_WIDTH;
			var widgetX = winW/4 - widgetW/2;
			var widgetY = '0';

			_endScreenContainer.style.display = 'block';
			
			if(_tgsExists) {
				this.widget = TGS.Widget.CreateWidget({
					width: widgetW,
					x: widgetX,
					y: widgetY,
					shareUrl: 'https://www.facebook.com/kekevscaterpillars',
					shareImage: 'http://www.polyworksgames.com/games/keke2/assets/images/keke_grey_expanse_title.png',
					shareTitle: 'keke and the grey expanse',
					shareMessage: 'i love playing keke and the grey expanse!',
					parentDiv: _endScreenContainer
				});
			}

		},

		hideGameOverWidget: function() {
			trace('TGSAdapter/hideGameOverWidget');
			if(this.widget) {
				this.widget.close();
			}
			_endScreenContainer.style.display = 'none';
		}
	};
	
	
	function _finishAdSession() {
		trace('TGSAdapter/_finishAdSession');
		PWGGame.adPlaying = false;
		PWG.EventCenter.trigger({ type: PWG.Events.AD_COMPLETED });
	}
	
	return module;
}());