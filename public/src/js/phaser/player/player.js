Polyworks.Player = (function() {
	Polyworks.Utils.inherits(Player, Polyworks.AnimatedSpriteView);
	
	function Player(params, id) {
		_this = this;
		Player._super.constructor.call(this, params, id);
		this.init();
		trace('Player, post super init, sprite = ');
		trace(this.sprite);
		trace(_this.sprite);
		if(this.model.anchor) {
			this.sprite.anchor.setTo(this.model.anchor.x, this.model.anchor.y);
		}
		game.camera.follow(this.sprite, Phaser.Camera.FOLLOW_PLATFORMER);
		
	}
	
	Player.prototype.update = function(params) {
		
	};
	
	Player.prototype.kill = function() {
		
	};
	
	return Player;
})();