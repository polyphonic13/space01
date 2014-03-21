Polyworks.Bonus = (function() {
	Polyworks.Utils.inherits(Bonus, Polyworks.Sprite);
	
	function Bonus(params) {
		Bonus._super.constructor.call(this, params);
	}
	
	Bonus.prototype.begin = function() {
		Bonus._super.begin.call(this);
	};
	
	Bonus.prototype.collect = function() {
		if(this.model.attrs.score) {
		    PolyworksGame.setScore(this.model.attrs.score);
		}
		this.model.ancestor.removeChild.call(this.model.ancestor, this.model.name);
		Bonus._super.kill.call(this);
	};
	
	return Bonus;
})();