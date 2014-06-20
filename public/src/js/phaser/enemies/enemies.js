PWG.Enemies = (function() {
	PWG.Utils.inherits(Enemies, PWG.PhysicalGroupCollection);
	
	function Enemies(params) {
		// trace('Enemies['+params.name+']/constructor, params = ', params);
		Enemies._super.constructor.call(this, params);
	}
	
	Enemies.prototype.pwUpdate = function(params) {
		PWG.Utils.each(this.model.collection,
			function(c) {
				if(c.alive) {
					c.pwUpdate(params);
				}
			},
			this
		);
	};
	
	Enemies.prototype.activateGravity = function() {
		// trace('Enemies['+this.model.name+']/activateGravity, collection', this.model.collection);
		Enemies._super.activateGravity.call(this);
	};

	return Enemies;
})();