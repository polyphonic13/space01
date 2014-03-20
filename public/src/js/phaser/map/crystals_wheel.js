Polyworks.CrystalsWheel = (function() {
	Polyworks.Utils.inherits(CrystalsWheel, Polyworks.Sprite); 
	
	function CrystalsWheel(params) {
		CrystalsWheel._super.constructor.call(this, params);
	}
	
	CrystalsWheel.prototype.begin = function() {
		CrystalsWheel._super.begin.call(this);
		trace('crystals wheel begin, this = ', this);
		if(PolyworksGame.currentLevel > -1) {
			this.frame = (PolyworksGame.currentLevel - 1);
		}
	};
	
	return CrystalsWheel;
})();