Polyworks.Requirement = (function() {
	Polyworks.Utils.inherits(Requirement, Polyworks.Sprite);
	
	function Requirement(params) {
		Requirement._super.constructor.call(this, params);
	}
	
	Requirement.prototype.begin = function() {
		// trace('Requirement['+this.model.name+']/begin, model = ', this.model);
		Requirement._super.begin.call(this);
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.REQUIREMENT_INITIALIZED, value: this.model });
	};
	
	Requirement.prototype.collect = function() {
		// trace('Requirement['+this.model.name+']/collect');
		if(this.model.attrs.score) {
		    PolyworksGame.setLevelScore(this.model.attrs.score);
		}
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.REQUIREMENT_MET, value: this.model.name });
		this.model.ancestor.killChild.call(this.model.ancestor, this.model.name);
		Requirement._super.kill.call(this);
	};
	
	return Requirement;
})();