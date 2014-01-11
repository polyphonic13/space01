Polyworks.Player = (function() {
	Utils.inherits(Player, Polyworks.AnimatedSprite);
	
	function Player(params, id) {
		_this = this;
		Player._super.constructor.call(this, params, id);
		this.init();
		if(this.model.anchor) {
			this.sprite.anchor.setTo(this.model.anchor.x, this.model.anchor.y);
		}
		Polyworks.Game.phaser.camera.follow(this.sprite, Phaser.Camera.FOLLOW_PLATFORMER);

		this.__defineGetter__('health', function() {
			return this.model.health;
		});
		
		this.__defineSetter__('health', function(val) {
			this.model.health = val;
		});
		
		this.__defineGetter__('damage', function() {
			return this.model.damage;
		});
	}
	
	Player.prototype.update = function(params) {

	};
	
	Player.prototype.kill = function() {

	};
	
	return Player;
})();