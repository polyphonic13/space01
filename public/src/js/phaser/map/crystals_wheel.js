PWG.CrystalsWheel = (function() {
	PWG.Utils.inherits(CrystalsWheel, PWG.Sprite); 
	
	function CrystalsWheel(params) {
		CrystalsWheel._super.constructor.call(this, params);
	}
	
	CrystalsWheel.prototype.begin = function() {
		CrystalsWheel._super.begin.call(this);
		if(PolyworksGame.currentLevel > -1) {
			this.frame = (PolyworksGame.currentLevel);
		}
	};
	
	return CrystalsWheel;
})();