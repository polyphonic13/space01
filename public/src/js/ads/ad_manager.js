Polyworks.AdManager = (function() {
	var _level
	var _tgs_config = {
		GAME_ID: 'com.polyworksgames.keke2',
		ADS: {
			INTERSTITIAL_PLACEMENT_ID: '3092820',
			INTERSTITIAL_INTERVAL: 150
		}
	};
	
	var _display_config = {
		parentDiv: document.getElementById('adContainer'),
		blurDiv: document.getElementById('gameContainter'),
		closeCallback: function() {
			PolyworksGame.adPlaying = false;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.AD_COMPLETED });
		}
	};
	
	var adManager = {
		displayInterstitial: function(level) {
			trace('AdManager/displayInterstitial');
			PolyworksGame.adPlaying = true;
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.AD_STARTED });
		}
	};
	
	return adManager;
}());