PWG.RequirementPlaceHolder = (function() {
	PWG.Utils.inherits(RequirementPlaceHolder, PWG.Sprite); 
	
	function RequirementPlaceHolder(params) {
		// trace('RequirementPlaceHolder/constructor, this = ', this);
		RequirementPlaceHolder._super.constructor.call(this, params);
		PWG.EventCenter.bind(PWG.Events.REQUIREMENT_INITIALIZED, this.onRequirementsInitialized, this);
		PWG.EventCenter.bind(PWG.Events.REQUIREMENT_MET, this.onRequirementMet, this);
	}
	
	RequirementPlaceHolder.prototype.begin = function() {
		// trace('RequirementPlaceHolder/begin, this = ', this);
		RequirementPlaceHolder._super.begin.call(this);
	};

	RequirementPlaceHolder.prototype.onRequirementsInitialized = function(params) {
		// trace('RequirementPlaceHolder/onRequirementsInitialized, params = ', params);
		var requirementImg = params.value.attrs.img;
		// trace('\trequirementImg = ' + requirementImg);
		var phaserAttrs = this.model.attrs.phaser;
		// phaserAttrs.visible = false;
		this.requirement = new PWG.Sprite({
			game: this.model.game,
			attrs: {
				img: requirementImg,
				start: this.model.attrs.start,
				phaser: this.model.attrs.phaser
			}
		});
		this.requirement.visible = false;
		this.requirement.begin();
		PWG.EventCenter.unbind(PWG.Events.REQUIREMENT_INITIALIZED, this.onRequirementsInitialized);
	};
	
	RequirementPlaceHolder.prototype.onRequirementMet = function(params) {
		// trace('RequirementPlaceHolder/onRequirementMet, params = ', params, '\tthis = ', this);
		// PWG.EventCenter.unbind(PWG.Events.REQUIREMENT_MET, this.onRequirementMet);
		this.model.ancestor.group.add(this.requirement);
		this.requirement.alpha = 1;
		this.requirement.visible = true;
	};

	RequirementPlaceHolder.prototype.destroy = function() {
		// trace('RequirementPlaceHolder['+this.model.name+']/destroy');
		PWG.EventCenter.unbind(PWG.Events.REQUIREMENT_MET, this.onRequirementMet);
		RequirementPlaceHolder._super.destroy.call(this);
	};
	
	return RequirementPlaceHolder;
})();