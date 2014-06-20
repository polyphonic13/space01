PWG.Requirements = (function() {
	PWG.Utils.inherits(Requirements, PWG.PhysicalGroupCollection);
	
	function Requirements(params) {

		Requirements._super.constructor.call(this, params);
	}

	Requirements.prototype.begin = function() {
		Requirements._super.begin.call(this);

		this.requirementsMet = 0;
		this.requirementsCount = this.model.collection.length;
		// trace('Requirements/begin, about to set on pw game, total = ' + this.requirementsCount);
		PWGGame.setRequirements(this.requirementsMet, this.requirementsCount);
		PWG.EventCenter.bind(PWG.Events.REQUIREMENT_MET, this.onRequirementMet, this);
	};
	
	Requirements.prototype.onRequirementMet = function() {
		this.requirementsMet++;
		// trace('Requirements/onRequirementMet, requirementsFill = ' + this.requirementsMet + ', total = ' + this.requirementsCount);
		PWGGame.setRequirements(this.requirementsMet, this.requirementsCount);
		if(this.requirementsMet >= this.requirementsCount) {
			PWG.EventCenter.unbind(PWG.Events.REQUIREMENT_MET, this.onRequirementMet, this);
			PWG.EventCenter.trigger({ type: PWG.Events.LEVEL_REQUIREMENTS_MET });
		}
	};
	
	Requirements.prototype.destroy = function() {
		PWG.EventCenter.unbind(PWG.Events.REQUIREMENT_MET, this.onRequirementMet, this);
		Requirements._super.destroy.call(this);
	};

	return Requirements;
})();