Polyworks.ReactingTerrain = (function() {
	Polyworks.Utils.inherits(ReactingTerrian, Polyworks.Sprite); 
	
	ReactingTerrain.DEACTIVATED = -1;
	ReactingTerrain.IDLE = 0;
	ReactingTerrain.COLLIDED = 1;
	ReactingTerrain.ACTIVATED = 1;
	
	function ReactingTerrain(params) {
		ReactingTerrain._super.constructor.call(this, params);
		this.state = ReactingTerrain.IDLE;
	}
	
	ReactingTerrain.prototype.begin = function() {
		ReactingTerrain._super.begin.call(this);
	};
	
	ReactingTerrain.prototype.dynamicTerrainCollision = function(sprite, terrain) {
		trace('ReactingTerrain['+this.model.name+']/dynamiceTerrainCollision, hasCollided = ' + this.hasCollided + '\n\tsprite = ', sprite, '\tterrain = ', terrain);
		ReactingTerrain._super.dynamiceTerrainCollision.call(sprite, terrain);

		if(this.state === ReactingTerrain.IDLE) {
			trace('\tsomething collided with terrain, switching state');

			var reaction = this.model.reaction;
			trace('\treaction = ', reaction);
			switch(reaction) {
				case TerrainReactions.ADD_GRAVITY:
					this.addGravity();
				break;

				case TerrainReactions.ADD_GRAVITY_AFTER_X_SECONDS: 
					this.addGravityAfterTimer();
				break; 

				default:
					trace('\tunknown reaction type');
				break;
			}

			if(this.model.attrs.animations) {
				this.playAnimation();
			}
		} else if(this.state === ReactingTerrain.ACTIVATED) {
			trace('\treacting terrain collided with something, destroy it');
			this.state = ReactingTerrain.DEACTIVATED;
			if(this.model.attrs.animations) {
				this.playAnimation();
			}
			this.destroy();
		}
	};
	
	ReactingTerrain.prototype.playAnimation = function() {
		var animation = this.model.attrs.animations[this.state];
		if(animation) {
			this.play(animation.name, animation.frameRate, animation.looped);
		}
	};

	ReactingTerrain.prototype.addGravity = function() {
		trace('ReactingTerrain['+this.model.name+']/addGravity');
		this.state = ReactingTerrain.ACTIVATED;
		this.immovable = false; 
		this.activateGravity();
	};
	
	ReactingTerrain.prototype.addGravityAfterXSeconds = function() {
		trace('ReactingTerrain['+this.model.name+']/addGravityAfterXSeconds');
		this.state = ReactingTerrain.COLLIDED;

		this.timer = setTimeout(
			this.addGravity,
			this.model.reaction.time
		);
	};
	
	ReactingTerrain.prototype.destroy = function() {
		ReactingTerrain._super.destroy.call(this);
	};
	
	return ReactingTerrain;
})();