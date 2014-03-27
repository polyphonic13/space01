Polyworks.RequirementPlaceHolder = (function() {
	Polyworks.Utils.inherits(RequirementPlaceHolder, Polyworks.Sprite); 
	
	function RequirementPlaceHolder(params) {
		// trace('RequirementPlaceHolder/constructor, this = ', this);
		RequirementPlaceHolder._super.constructor.call(this, params);
		Polyworks.EventCenter.bind(Polyworks.Events.REQUIREMENT_INITIALIZED, this.onRequirementsInitialized, this);
		Polyworks.EventCenter.bind(Polyworks.Events.REQUIREMENT_MET, this.onRequirementMet, this);
	}
	
	RequirementPlaceHolder.prototype.begin = function() {
		// trace('RequirementPlaceHolder/begin, this = ', this);
		RequirementPlaceHolder._super.begin.call(this);
	};

	RequirementPlaceHolder.prototype.onRequirementsInitialized = function(params) {
		trace('RequirementPlaceHolder/onRequirementsInitialized, params = ', params);
		var requirementImg = params.value.attrs.img;
		// trace('\trequirementImg = ' + requirementImg);
		var phaserAttrs = this.model.attrs.phaser;
		// phaserAttrs.visible = false;
		this.requirement = new Polyworks.Sprite({
			game: this.model.game,
			attrs: {
				img: requirementImg,
				start: this.model.attrs.start,
				phaser: this.model.attrs.phaser
			}
		});
		this.requirement.visible = false;
		this.requirement.begin();
		Polyworks.EventCenter.unbind(Polyworks.Events.REQUIREMENT_INITIALIZED, this.onRequirementsInitialized);
	};
	
	RequirementPlaceHolder.prototype.onRequirementMet = function(params) {
		trace('RequirementPlaceHolder/onRequirementMet, params = ', params, '\tthis = ', this);
		// Polyworks.EventCenter.unbind(Polyworks.Events.REQUIREMENT_MET, this.onRequirementMet);
		this.model.ancestor.group.add(this.requirement);
		this.requirement.alpha = 1;
		this.requirement.visible = true;
	};

	RequirementPlaceHolder.prototype.destroy = function() {
		// trace('RequirementPlaceHolder['+this.model.name+']/destroy');
		Polyworks.EventCenter.unbind(Polyworks.Events.REQUIREMENT_MET, this.onRequirementMet);
		RequirementPlaceHolder._super.destroy.call(this);
	};
	
	return RequirementPlaceHolder;
})();