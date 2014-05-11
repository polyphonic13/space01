Polyworks.AdManager = (function() {
	var LEVEL_PLAYS_PER_AD = 1;
	
	var _levels = [];

	var _tgs_config = {
		GAME_ID: 'com.polyworksgames.keke2',
		ADS: {
			INTERSTITIAL_PLACEMENT_ID: '3092820',
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
	
	var adManager = {
		init: function(levelCount) {
			for(var i = 0; i < levelCount; i++) {
				_levels[i] = 0;
			}
			trace('AdManager/init, _levels = ', _levels);
			TGS.Init(_tgs_config);
		},
		
		adCheck: function(idx) {
			trace('AdManager/adCheck, _levels[' + idx + '] = ' + _levels[idx] + ', LEVELS_PLAYS_PER_AD = ' + LEVEL_PLAYS_PER_AD);
			if(_levels[idx] === 0) {
				_levels[idx] = LEVEL_PLAYS_PER_AD;
				this.displayInterstitial();
			} else {
				_levels[idx]--;
				_finishAdSession();
			}
		},
		
		displayInterstitial: function() {
			
			trace('AdManager/displayInterstitial');
			PolyworksGame.adPlaying = true;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.AD_STARTED });
			TGS.Advertisement.DisplayInterstitialAd(_display_config);		
		}
	};
	
	function _finishAdSession() {
		trace('AdManager/_finishAdSession');
		PolyworksGame.adPlaying = false;
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.AD_COMPLETED });
	}
	
	return adManager;
}());