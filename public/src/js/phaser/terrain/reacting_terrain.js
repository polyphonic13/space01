Polyworks.ReactingTerrain = (function() {
	Polyworks.Utils.inherits(ReactingTerrain, Polyworks.Sprite); 
	
	ReactingTerrain.DEACTIVATED = 'deactivated';
	ReactingTerrain.IDLE = 'idle';
	ReactingTerrain.COLLIDED = 'collided';
	ReactingTerrain.ACTIVATED = 'activated';
	
	var _this;
	
	function ReactingTerrain(params) {
		ReactingTerrain._super.constructor.call(this, params);
		this.state = ReactingTerrain.IDLE;
		this.hasCollided = false;
	}
	
	ReactingTerrain.prototype.begin = function() {
		// trace('ReactingTerrain['+this.model.name+']/begin');
		ReactingTerrain._super.begin.call(this);
	};
	
	ReactingTerrain.prototype.collidedWithSprite = function(sprite) {
		if(!this.hasCollided && sprite.model.name === 'player') {
			// trace('ReactingTerrain['+this.model.name+']/collidedWithSprite, hasCollided = ' + this.hasCollided + ', sprite.model.name = ' + sprite.model.name + '\n\tsprite.height = ' + sprite.body.height + '\n\tsprite.y = ' + sprite.body.y + '\n\tsprite bottom = ' + (sprite.body.y + sprite.body.height - 1) + '\n\tthis.y = ', this.body.y);
			if((sprite.body.y + sprite.body.height - 1) <= this.body.y) {
				this.hasCollided = true;

				if(this.state === ReactingTerrain.IDLE) {
					// trace('\tsomething collided with terrain, switching state');

					var reaction = this.model.reaction;
					// trace('\treaction = ', reaction.type);
					switch(reaction.type) {
						case Polyworks.TerrainReactions.ADD_GRAVITY:
							this.addGravity(this);
						break;

						case Polyworks.TerrainReactions.ADD_GRAVITY_AFTER_X_SECONDS: 
							this.callMethodAfterXSeconds('addGravity');
						break; 

						case Polyworks.TerrainReactions.DESTROY_AFTER_X_SECONDS: 
							this.callMethodAfterXSeconds('removeTerrain');
						break;

						case Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION:
							this.destroyAfterAnimation();
						break; 

						default:
							// trace('\tunknown reaction type');
						break;
					}

				// } else if(this.state === ReactingTerrain.ACTIVATED) {
				// 	// trace('\treacting terrain collided with something, destroy it');
				// 	this.state = ReactingTerrain.DEACTIVATED;
				// 	if(this.model.attrs.animations) {
				// 		this.playAnimation();
				// 	}
				// 	this.destroy();
				}
			}
		}
	};

	ReactingTerrain.prototype.changeState = function(state) {
		this.state = state;
		if(this.model.attrs.animations) {
			this.playAnimation();
		}
	};

	ReactingTerrain.prototype.animationCompleted = function() {
		// trace('ReactingTerrain['+this.model.name+']/animationCompleted');
		this.removeTerrain();
	};
	
	ReactingTerrain.prototype.playAnimation = function() {
		// trace('ReactingTerrain['+this.model.name+']/playAnimation: ' + this.state);
		var animation = this.model.attrs.animations[this.state];
		if(animation) {
			// trace('\tgoing to call play on', animation);
			var kill = false;
			if(this.model.reaction.type === Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION) {
				// trace('\t\tit\'s a destroy after animation, set kill to true');
				kill = true;
			}
			this.play(this.state, animation.frameRate, animation.looped, kill);
		}
	};

	ReactingTerrain.prototype.addGravity = function() {
		// trace('ReactingTerrain['+_this.model.name+']/addGravity, _this = ', _this);
		_this.changeState(ReactingTerrain.DEACTIVATED);
		_this.immovable = false; 
		_this.activateGravity();
	};
	
	ReactingTerrain.prototype.removeTerrain = function() {
		// trace('ReactingTerrain['+this.model.name+']/removeTerrain, _this = ', this);
		if(this.model.attrs.animations) {
			this.stop();
		}
		this.destroy();
	};
	
	ReactingTerrain.prototype.callMethodAfterXSeconds = function(method) {
		// trace('ReactingTerrain['+this.model.name+']/callMethodAfterXSeconds, time = ' + this.model.reaction.time + ', method = ' + method);
		this.changeState(ReactingTerrain.COLLIDED);
		_this = this;
		this.timer = setTimeout(
			this[method],
			this.model.reaction.time
		);
	};
	
	ReactingTerrain.prototype.destroyAfterAnimation = function() {
		// trace('ReactingTerrain['+this.model.name+']/destroyAfterAnimation');
		this.changeState(ReactingTerrain.COLLIDED);
		// this.events.onAnimationComplete.add(function() {
		// 	// trace('\tadding call to animation completed method');
		// 	this.animationCompleted();
		// }, this);
	};
	
	ReactingTerrain.prototype.destroy = function() {
		ReactingTerrain._super.destroy.call(this);
	};
	
	return ReactingTerrain;
})();