Polyworks.TGSAdapter = (function() {
	var LEVEL_PLAYS_PER_AD = 1;
	var WIDGET_WIDTH = 300;
	
	var _levels = [];

	var _tgs_config = {
		GAME_ID: 'kekeandthegreyexpanse',
		ADS: {
			INTERSTITIAL_INTERVAL: 5
		}
	};
	
	var _endScreenContainer;
	var _displayConfig = {
		parentDiv: document.getElementById('adContainer'),
		blurDiv: document.getElementById('gameContainter'),
		closeCallback: function() {
			_finishAdSession();
		}
	};
	
	var module = {
		init: function(levelCount) {
			_endScreenContainer = document.getElementById('endScreenContainer');
			trace('TGSAdapter, _endScreenContainer = ', _endScreenContainer);
			
			for(var i = 0; i < levelCount; i++) {
				_levels[i] = 0;
			}
			if(typeof(TGS) !== 'undefined') {
				TGS.Init(_tgs_config);
			}
			trace('TGSAdapter/init, _levels = ', _levels);
		},
		
		adCheck: function(idx) {
			trace('TGSAdapter/adCheck, _levels[' + idx + '] = ' + _levels[idx] + ', LEVELS_PLAYS_PER_AD = ' + LEVEL_PLAYS_PER_AD);
			if(_levels[idx] === 0) {
				_levels[idx] = LEVEL_PLAYS_PER_AD;
				this.displayInterstitial();
			} else {
				_levels[idx]--;
				_finishAdSession();
			}
		},
		
		displayInterstitial: function() {
			
			trace('TGSAdapter/displayInterstitial');
			PolyworksGame.adPlaying = true;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.AD_STARTED });
			if(typeof(TGS) !== 'undefined') {
				TGS.Advertisement.DisplayInterstitialAd(_displayConfig);		
			} else {
				trace('WARNING: TGS is not defined');
				_finishAdSession();
			}
		},
		
		addGameOverWidget: function() {
			trace('TGSAdapter/addGameOverWidget');
			var winW = Polyworks.Stage.winW; 
			var winH = Polyworks.Stage.winH;
			var widgetW = WIDGET_WIDTH;
			var widgetX = winW/4 - widgetW/2;
			var widgetY = '50px';

			_endScreenContainer.style.display = 'block';
			
			if(typeof(TGS) !== 'undefined') {
				this.widget = TGS.Widget.CreateWidget({
					width: widgetW,
					x: widgetX,
					y: 0,
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
		PolyworksGame.adPlaying = false;
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.AD_COMPLETED });
	}
	
	return module;
}());