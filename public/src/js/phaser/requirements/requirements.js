Polyworks.Requirements = (function() {
	Polyworks.Utils.inherits(Requirements, Polyworks.PhysicalGroupCollection);
	
	function Requirements(params) {

		Requirements._super.constructor.call(this, params);
	}

	Requirements.prototype.begin = function() {
		Requirements._super.begin.call(this);

		this.requirementsFilled = 0;
		this.totalRequirements = this.model.collection.length;

		Polyworks.EventCenter.bind(Polyworks.Events.REQUIREMENT_MET, this.onRequirementMet, this);
	};
	
	Requirements.prototype.onRequirementMet = function() {
		this.requirementsFilled++;
		if(this.requirementsFilled >= this.totalRequirements) {
			Polyworks.EventCenter.unbind(Polyworks.Events.REQUIREMENT_MET, this.onRequirementMet, this);
			Polyworks.EventCenter.trigger({ type: Polyworks.Events.LEVEL_REQUIREMENTS_MET });
		}
	};
	
	Requirements.prototype.destroy = function() {
		Polyworks.EventCenter.unbind(Polyworks.Events.REQUIREMENT_MET, this.onRequirementMet, this);
		Requirements._super.destroy.call(this);
	};

	return Requirements;
})();