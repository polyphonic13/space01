PWG.Sector = (function() {
	PWG.Utils.inherits(Sector, PWG.Collection);
	
	function Sector(params) {
		// trace('Sector['+params.name+']/constructor, params = ');
		// trace(params);
		Sector._super.constructor.call(this, params);

	}
	
	Sector.prototype.begin = function() {
		
		Sector._super.begin.call(this);
		this.setChildrenExists(false);

		this.dynamicTerrain = this.getChildByName('dynamicTerrain') || { getActive: function() { return []; }};
		this.hazards = this.getChildByName('hazards') || { getActive: function() { return []; }};
		this.bonuses = this.getChildByName('bonuses') || { getActive: function() { return []; }};
	};

	Sector.prototype.setActive = function(active) {
		// trace('Sector['+this.model.name+']/setActive: active = ' + active + ', activatedOnce = ' + this.activatedOnce);
		if(this.active || active) {
			this.setChildrenExists(active);
		}

		this.active = active;
		if(active) {
			// trace('Sector['+this.model.name+']/setActive: active = ' + active + ', activatedOnce = ' + this.activatedOnce);
			this.activateOnce = true;
			this.deactivated = false;

		} else if(!this.deactivated) {
		
			this.deactivated = true;
		}
	};
	
	Sector.prototype.destroy = function() {
		// if(this.bonuses) {
		// 	this.bonuses.destroy();
		// }
	};
	
	return Sector;
})();