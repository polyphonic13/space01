PWG.Enemies = (function() {
	PWG.Utils.inherits(Enemies, PWG.PhysicalGroupCollection);
	
	function Enemies(params) {
		// trace('Enemies['+params.name+']/constructor, params = ', params);
		Enemies._super.constructor.call(this, params);
	}
	
	Enemies.prototype.begin = function() {
		trace('Enemies/begin, this = ', this);
		PWG.Utils.each(
			this.model.attrs,
			function(child) {
				child.sector = this.model.sector;
			},
			this
		);
		Enemies._super.begin.call(this);
	};
	
	Enemies.prototype.pwUpdate = function(params) {
		PWG.Utils.each(
			this.model.collection,
			function(child) {
				if(child.alive) {
					child.pwUpdate(params);
				}
			},
			this
		);
	};
	
	// Enemies.prototype.activateGravity = function() {
	// 	// trace('Enemies['+this.model.name+']/activateGravity, collection', this.model.collection);
	// 	Enemies._super.activateGravity.call(this);
	// };

	Enemies.prototype.getEnemies = function() {
		return this.model.collection;
	};
	
	Enemies.prototype.deactivateGravity = function() {
		PWG.Utils.each(
			this.model.collection,
			function(child) {
				trace('Enemies/deactivateGravity, child['+child.model.name+'].isActive = ' + child.isActive);
				if(!child.isActive) {
					trace('\tdeactivating gravity');
					child.deactivateGravity();
				}
			},
			this
		);
	};
	
	return Enemies;
})();