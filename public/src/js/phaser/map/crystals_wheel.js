PWG.CrystalsWheel = (function() {
	PWG.Utils.inherits(CrystalsWheel, PWG.Sprite); 
	
	function CrystalsWheel(params) {
		CrystalsWheel._super.constructor.call(this, params);
	}
	
	CrystalsWheel.prototype.begin = function() {
		CrystalsWheel._super.begin.call(this);
		if(PWGGame.currentLevel > -1) {
			this.frame = (PWGGame.currentLevel);
		}
	};
	
	return CrystalsWheel;
})();