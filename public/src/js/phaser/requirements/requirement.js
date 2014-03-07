Polyworks.Requirement = (function() {
	Polyworks.Utils.inherits(Requirement, Polyworks.Sprite);
	
	function Requirement(params) {
		Requirement._super.constructor.call(this, params);
	}
	
	Requirement.prototype.begin = function() {
		trace('Requirement['+this.model.name+']/begin');
		Requirement._super.begin.call(this);
	};
	
	Requirement.prototype.collect = function() {
		trace('Requirement['+this.model.name+']/collect');
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.REQUIREMENT_MET, value: this.model.name });
		this.model.ancestor.killChild.call(this.model.ancestor, this.model.name);
		Requirement._super.kill.call(this);
	};
	
	return Requirement;
})();