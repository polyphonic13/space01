var Enemy = (function() {
	function Enemy(params) {
		
	}
	
	Enemy.prototype.update = function(params) {
		
	};
	
	Enemy.prototype.kill = function() {
		// trace('AnimatedEnemey['+this.sprite.name+']/kill');
		this.active = false;
		// this.sprite.destroy();
		this.destroy();
	};
	
	return Enemy;
})();