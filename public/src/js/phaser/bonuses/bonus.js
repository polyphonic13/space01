PWG.Bonus = (function() {
	PWG.Utils.inherits(Bonus, PWG.Sprite);
	
	function Bonus(params) {
		Bonus._super.constructor.call(this, params);
	}
	
	Bonus.prototype.begin = function() {
		Bonus._super.begin.call(this);
	};
	
	Bonus.prototype.collect = function() {
		trace('Bonus['+this.model.name+']/collect, score = ' + this.model.attrs.score,  this.model);
		if(this.model.attrs.score) {
		    PWGGame.setLevelScore(this.model.attrs.score);
		}
		this.model.ancestor.removeChild.call(this.model.ancestor, this.model.name);
		Bonus._super.kill.call(this);
	};
	
	return Bonus;
})();