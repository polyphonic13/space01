PWG.BossEnemy = function() {
	PWG.Utils.inherits(BossEnemy, PWG.Enemy);
	
	var _this;
	
	function BossEnemy(params) {
		trace('BossEnemy/constructor');
		BossEnemy._super.constructor.call(this, params);
	}
	
	BossEnemy.prototype.pwUpdate = function(params) {
		trace('BossEnemy/pwUpdate, alive = ' + this.alive, this);
		if(this.alive) {
			if(this.model.preUpdate) {
				trace('there is a pre update, about to call');
				this.model.preUpdate.call(this, params);
			}
			BossEnemy._super.pwUpdate.call(this, params);
			if(this.model.postUpdate) {
				trace('there is a post update, about to call');
				this.model.postUpdate.call(this, params);
			}
		}
	};
	
	BossEnemy.prototype.destroy = function() {
		if(this.model.destroy) {
			this.model.destroy.call(this);
		}
		BossEnemy._super.destroy.call(this);
	};
	
	return BossEnemy;
}();