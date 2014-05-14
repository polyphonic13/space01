lPolyworks.TGSAdapter = (function() {
	var LEVEL_PLAYS_PER_AD = 1;
	
	var _levels = [];

	var _tgs_config = {
		GAME_ID: 'kekeandthegreyexpanse',
		ADS: {
			INTERSTITIAL_INTERVAL: 5
		}
	};
	
	var _display_config = {
		parentDiv: document.getElementById('adContainer'),
		blurDiv: document.getElementById('gameContainter'),
		closeCallback: function() {
			_finishAdSession();
		}
	};
	
	var module = {
		init: function(levelCount) {
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
				trace('WARNING: TGS is not defined');
				TGS.Advertisement.DisplayInterstitialAd(_display_config);		
			} else {
				_finishAdSession();
			}
		}
	};
	
	function _finishAdSession() {
		trace('TGSAdapter/_finishAdSession');
		PolyworksGame.adPlaying = false;
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.AD_COMPLETED });
	}
	
	return module;
}());