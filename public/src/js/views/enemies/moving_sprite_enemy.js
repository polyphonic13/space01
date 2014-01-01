var MovingSpriteEnemy = (function() {
	
	var _this;
	
	function MovingSpriteEnemy(params) {
		_this = this;
		MovingSpriteEnemy._super.constructor.call(this, params);
	}
	
	MovementSpriteEnemy.prototype.update = function(params) {
		var pos = (params.pos) ? params.pos : this.model.layer.getAbsolutePosition();
		if(Utils.isOnStage(pos)) {
			this.updateMovement(true);
		} else {
			this.updateMovement(false);
		}
		MovementSpriteEnemy._super.update.call(this, params);
	};
	
	return MovingSpriteEnemy;
})();