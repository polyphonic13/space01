var MovingSpriteEnemy = (function() {
	Utils.inherits(MovingSpriteEnemy, SpriteEnemy);
	
	var _this;
	
	function MovingSpriteEnemy(params) {
		trace('MovingSpriteEnemy/constructor');
		_this = this;
		MovingSpriteEnemy._super.constructor.call(this, params);
		trace('\tpost super constructor, sprite = ');
		trace(this.sprite);
		this.setUpAnimation(this.model);
	}
	
	MovingSpriteEnemy.prototype.update = function(params) {
		var pos = (params.pos) ? params.pos : this.model.layer.getAbsolutePosition();
		if(Utils.isInView(pos)) {
			this.updateMovement(true);
		} else {
			this.updateMovement(false);
		}
		MovingSpriteEnemy._super.update.call(this, params);
	};
	
	MovingSpriteEnemy.prototype.updateMovement = function(inView) {
		if(inView) {
			this.anim.start();
		} else {
			this.anim.stop();
		}
	};
	
	MovingSpriteEnemy.prototype.setUpAnimation = function(params) {
		trace('MovingSpriteEnemy/setUpAnimation');
		var animConfig = params.movement;
		animConfig.layer = this.model.layer;
		animConfig.target = this.sprite;
		this.anim = new MovementAnimation(animConfig);
/*
		var layer = this.model.layer;
		var centerX = this.model.width / 2;
		var sprite = this.sprite;
		
		this.anim = new Kinetic.Animation(function(frame) {
			sprite.setX(params.movement.amplitude * Math.sin(frame.time * 2 * Math.PI / params.movement.period) + centerX);
			// var dist = params.movement.velocity * (frame.timeDiff / 1000);
			// sprite.move(dist, 0);
		}, layer);
*/
	};

	return MovingSpriteEnemy;
})();