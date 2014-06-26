PWG.ReactingTerrain = (function() {
	PWG.Utils.inherits(ReactingTerrain, PWG.Sprite); 
	
	ReactingTerrain.DEATH_ANIMATION_TIME = 1500;
	ReactingTerrain.RESPAWN_TIME = 5000;
	ReactingTerrain.DEACTIVATED = 'deactivated';
	ReactingTerrain.IDLE = 'idle';
	ReactingTerrain.COLLIDED = 'collided';
	ReactingTerrain.ACTIVATED = 'activated';
	
	var _this;
	
	function ReactingTerrain(params) {
		ReactingTerrain._super.constructor.call(this, params);
		this.activate();
	}
	
	ReactingTerrain.prototype.begin = function() {
		// trace('ReactingTerrain['+this.model.name+']/begin');
		ReactingTerrain._super.begin.call(this);
	};
	
	ReactingTerrain.prototype.activate = function() {
		trace('ReactionTerrain/activate, this = ', this);
		this.state = ReactingTerrain.IDLE;
		this.hasCollided = false;
		this.active = true;
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
						case PWG.TerrainReactions.ADD_GRAVITY:
							this.addGravity(this);
						break;

						case PWG.TerrainReactions.ADD_GRAVITY_AFTER_X_SECONDS: 
							this.callMethodAfterXSeconds('addGravity');
						break; 

						case PWG.TerrainReactions.DESTROY_AFTER_X_SECONDS: 
							this.callMethodAfterXSeconds('removeTerrain');
						break;

						case PWG.TerrainReactions.DESTROY_AFTER_ANIMATION:
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
		trace('ReactingTerrain['+this.model.name+']/animationCompleted');
		this.removeTerrain();
	};
	
	ReactingTerrain.prototype.playAnimation = function() {
		trace('ReactingTerrain['+this.model.name+']/playAnimation: ', this);
		var animation = this.model.attrs.animations[this.state];
		if(animation) {
			// trace('\tgoing to call play on', animation);
			var kill = false;
			if(this.model.reaction.type === PWG.TerrainReactions.DESTROY_AFTER_ANIMATION) {
				trace('\t\tit\'s a destroy after animation, set kill to true');
				kill = true;
			}
			this.play(this.state, animation.frameRate, animation.looped, false);
			setTimeout(this.deactivate, ReactingTerrain.DEATH_ANIMATION_TIME, this);
			
			if(this.model.reaction.respawn) {
				setTimeout(this.respawn, ReactingTerrain.RESPAWN_TIME, this)
			}
		}
	};

	ReactingTerrain.prototype.deactivate = function(self) {
		trace('ReactiongTerrain['+self.model.name+']/deactivate');
		self.active = false;
	};
	
	ReactingTerrain.prototype.respawn = function(self) {
		trace('ReactingTerrain['+self.model.name+']/respawn, self = ', self);
		// self.animations.frame = 0;
		var animation = self.model.attrs.animations['respawn'];
		self.play('respawn', animation.frameRate, animation.looped, false);
		self.activate();
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
		// this.destroy();
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