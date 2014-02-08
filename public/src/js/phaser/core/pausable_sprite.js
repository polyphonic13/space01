Polyworks.PausableSprite = (function() {
	Utils.inherits(PausableSprite, Polyworks.Sprite);
	
	function PausableSprite(params) {
		PausableSprite._super.constructor.call(this, params);
	}
	
	PausableSprite.prototype.begin = function() {
		this.paused = false;
		Polyworks.EventCenter.bind(Polyworks.Events.PAUSE_STATE, this.onPauseState, this);
		Polyworks.EventCenter.bind(Polyworks.Events.RESUME_STATE, this.onResumeState, this);
		PausableSprite._super.begin.call(this);
	};
	
	PausableSprite.prototype.update = function(params) {
		if(!this.paused) {
			PausableSprite._super.update.call(params);
		}
	};
	
	PolyworksSprite.prototype.onPauseState = function() {
		this.paused = true;
		
	};
	
	PolyworksSprite.prototype.onResumeState = function() {
		this.paused = false;
		
	};
	
	return PausableSprite;
})();