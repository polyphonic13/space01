var MovingSpriteEnemy = (function() {
	Utils.inherits(MovingSpriteEnemy, SpriteEnemy);
	
	var _this;
	
	function MovingSpriteEnemy(params) {
		// trace('MovingSpriteEnemy/constructor');
		_this = this;
		MovingSpriteEnemy._super.constructor.call(this, params);
		// trace('\tpost super constructor, sprite = ');
		// trace(this.sprite);
		this.addAnimation(this.model);
	}
	
	MovingSpriteEnemy.prototype.update = function(params) {
		MovingSpriteEnemy._super.update.call(this, params);
		this.updateMovement();
	};
	
	MovingSpriteEnemy.prototype.updateMovement = function() {
		if(this.inView) {
			this.anim.start();
			this.checkDirectionChange();
		} else {
			this.anim.stop();
		}
	};
	
	MovingSpriteEnemy.prototype.checkDirectionChange = function() {
		var pos = this.getHitArea();
		if(pos.x < this.previousX) {
			this.changeType = 'descending';
		} else if(pos.x > this.previousX) {
			this.changeType = 'ascending';
		}
		
		if(this.changeType !== this.previousChangeType) {
			// the direction of movement has changed
			this.directionChange(this.changeType);
		}
		
		this.previousChangeType = this.changeType;
		this.previousX = pos.x;
	};
	
	MovingSpriteEnemy.prototype.addAnimation = function(params) {
		// trace('MovingSpriteEnemy/addAnimation');
		var animConfig = params.movement;
		animConfig.layer = this.model.layer;
		animConfig.target = this.sprite;
		this.anim = new MovementAnimation(animConfig);
	};

	MovingSpriteEnemy.prototype.directionChange = function(direction) {
		// trace('MovingSpriteEnemy['+this.model.id+']/animationChange');
		if(direction === 'descending') {
			this.setDirection(Directions.LEFT);
		} else if(direction === 'ascending') {
			this.setDirection(Directions.RIGHT);
		}
	};
	
	MovingSpriteEnemy.prototype.remove = function() {
		// trace('MovingSpriteEnemy['+this.model.id+']/remove, this.anim = ');
		// trace(this.anim);
		this.anim.stop();
		MovingSpriteEnemy._super.remove.call(this);
	};
	
	return MovingSpriteEnemy;
})();