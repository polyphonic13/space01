Polyworks.Requirements = (function() {
	Polyworks.Utils.inherits(Requirements, Polyworks.PhysicalGroupCollection);
	
	function Requirements(params) {

		Requirements._super.constructor.call(this, params);
	}

	Requirements.prototype.begin = function() {
		Requirements._super.begin.call(this);

		this.requirementsMet = 0;
		this.totalRequirements = this.model.collection.length;
		// trace('Requirements/begin, about to set on pw game, total = ' + this.totalRequirements);
		PolyworksGame.setRequirements(this.requirementsMet, this.totalRequirements);
		Polyworks.EventCenter.bind(Polyworks.Events.REQUIREMENT_MET, this.onRequirementMet, this);
	};
	
	Requirements.prototype.onRequirementMet = function() {
		this.requirementsMet++;
		trace('Requirements/onRequirementMet, requirementsFill = ' + this.requirementsMet + ', total = ' + this.totalRequirements);
		PolyworksGame.setRequirements(this.requirementsMet, this.totalRequirements);
		if(this.requirementsMet >= this.totalRequirements) {
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