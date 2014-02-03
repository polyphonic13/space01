Polyworks.Player = (function() {
	// Utils.inherits(Player, Polyworks.AnimatedSprite);
	Utils.inherits(Player, Polyworks.Sprite);

	var _this;
	function Player(params) {
		// trace('Player/constructor');
		_this = this;
		this.model = new Polyworks.Model(params);
		Player._super.constructor.call(this, params);
	}
	
	Player.prototype.begin = function() {
		Player._super.begin.call(this);

		this.health = PolyworksGame.startingHealth;

		this.velX = 0;
		this.velY = 0;
		this.damageTimer = 0;
		this.damageInterval = 250;
		this.justDamaged = false;
		
		this.beginGetterSetters();
		this.beginWorld();
		this.beginEvents();
		this.beginControls();

		PolyworksGame.setHealth(this.health);
		trace(this);
		// this.body.setSize(50, 113, 22.5, 0);
	    
	};
	
	Player.prototype.setGroup = function(group) {
		this.group = group;
	};
	
	Player.prototype.beginGetterSetters = function() {
		this.__defineGetter__('facingForward', function() {
			return this.model.attrs.facingForward;
		});
		this.__defineSetter__('facingForward', function(val) {
			this.model.attrs.facingForward = val;
		});
		this.__defineGetter__('attack', function() {
			return this.model.attrs.attack;
		});
		this.__defineGetter__('isJumping', function() {
			return this.model.attrs.jumping;
		});
		this.__defineGetter__('sprite', function() {
			return this;
		});
	}
	
	Player.prototype.beginWorld = function() {
		// trace('Player/beginWorld');
		// trace(this);
		var attrs = this.model.attrs;
		if(attrs.anchor) {
			this.anchor.setTo(attrs.anchor.x, attrs.anchor.y);
		}
		if(attrs.followStyle) {
			PolyworksGame.phaser.camera.follow(this, attrs.followStyle);
		}
	};
	
	Player.prototype.beginEvents = function() {
		Polyworks.EventCenter.bind(Polyworks.Events.CONTROL_PRESSED, this.onControlButtonPressed, this);
		Polyworks.EventCenter.bind(Polyworks.Events.CONTROL_RELEASED, this.onControlButtonReleased, this);
	};
	
	Player.prototype.beginControls = function() {
		this.activeControls = {};
		this.activeControls[Polyworks.InputCodes.LEFT] = false;
		this.activeControls[Polyworks.InputCodes.RIGHT] = false;
		this.activeControls[Polyworks.InputCodes.UP] = false;
		this.activeControls[Polyworks.InputCodes.DOWN] = false;
		// trace('activeControls');
		// trace(this.activeControls);
	};
	
	Player.prototype.onControlButtonPressed = function(event) {
		_this.activeControls[event.value] = true;
		// trace('Player.prototype.onControlButtonPressed, event.value = ' + event.value);
		// trace(_this.activeControls);
		if(event.value === Polyworks.InputCodes.RESET) {
			_this.activeControls[Polyworks.InputCodes.LEFT] = false;
			_this.activeControls[Polyworks.InputCodes.RIGHT] = false;
		} else if(event.value === Polyworks.InputCodes.LEFT) {
			_this.activeControls[Polyworks.InputCodes.RIGHT] = false;
		} else if(event.value === Polyworks.InputCodes.RIGHT) {
			_this.activeControls[Polyworks.InputCodes.LEFT] = false;
		}
		_this.updateInput();
	};
	
	Player.prototype.onControlButtonReleased = function(event) {
		_this.activeControls[event.value] = false;
		// trace('Player.prototype.onControlButtonReleased, event.value = ' + event.value);
		// trace(_this.activeControls);
		if(event.value === Polyworks.InputCodes.RESET) {
			_this.activeControls[Polyworks.InputCodes.LEFT] = false;
			_this.activeControls[Polyworks.InputCodes.RIGHT] = false;
		} else if(event.value === Polyworks.InputCodes.LEFT) {
			_this.activeControls[Polyworks.InputCodes.RIGHT] = false;
		} else if(event.value === Polyworks.InputCodes.RIGHT) {
			_this.activeControls[Polyworks.InputCodes.LEFT] = false;
		}
		_this.updateInput();
	};
	
	Player.prototype.updateInput = function() {
		this.velX = 0;
		this.velY = 0;
		var attrs = this.model.attrs;

		if (this.activeControls[Polyworks.InputCodes.LEFT]) {
			this.velX = -attrs.speed.x;
			attrs.facingForward = false;
		}
		else if (this.activeControls[Polyworks.InputCodes.RIGHT]) {
			this.velX = attrs.speed.x;
			attrs.facingForward = true;
		}

		// this.velocityX = this.velX;
		this.body.velocity.x = this.velX;

		if(this.activeControls[Polyworks.InputCodes.UP]) {
			if(attrs.grounded && !attrs.justJumped) {
				this.velY = -attrs.speed.y;
				// this.velocityY = this.velY;
				this.body.velocity.y = this.velY;
				attrs.grounded = false;
				attrs.jumping = true;
				attrs.justJumped = true;
			} else {
				this.velY = 0;
			}
		} else if(this.activeControls[Polyworks.InputCodes.DOWN]) {
			// trace('Player/updateInput, down is active')
		}
		// trace('end player update input, velX = ' + this.velocityX + ', velY = ' + this.velocityY);
	};
	
	Player.prototype.pwUpdate = function(params) {
		// trace('Player/update, health = ' + this.health);
		// trace(params);
		if(this.alive) {
			var physics = PolyworksGame.phaser.physics;
			var attrs = this.model.attrs;

			this.checkTerrainCollision(params.terrain);

			this.checkDynamicTerrainCollision(params.dynamicTerrain, physics);
			this.checkHazardCollision(params.hazards, physics);
			this.checkEnemyCollision(params.enemies, physics);
			this.checkBonusCollision(params.bonuses, physics);

			if(this.body.touching.down) {
				attrs.grounded = true;
				attrs.jumping = false;
				attrs.justJumped = false;
			}
		}
	};

	Player.prototype.checkDynamicTerrainCollision = function(dynamicTerrain, physics) {
		this.checkCollision(dynamicTerrain, this.dynamicTerrainCollision, physics, this);
	};
	
	Player.prototype.checkHazardCollision = function(hazards, physics) {
		this.checkCollision(hazards, this.hazardCollision, physics, this);
	};
	
	Player.prototype.checkEnemyCollision = function(enemies, physics) {
		this.checkCollision(enemies, this.enemyCollision, physics, this);
	};
	
	Player.prototype.checkBonusCollision = function(bonuses, physics) {
		this.checkCollision(bonuses, this.bonusCollision, physics, this);
	};
	
	Player.prototype.checkCollision = function(collection, callback, physics, context) {
		// trace('Player/checkCollision, health = ' + this.health);
		for(var i = 0; i < collection.length; i++) {
			physics.overlap(this, collection[i], callback, null, context);
		}
	};
	
	Player.prototype.dynamicTerrainCollision = function(player, terrain) {
		trace('Player/dynamicTerrainCollision, terrain = ');
		trace(terrain);
		var terrainY = terrain.body.y;
		var playerOffsetY = this.body.y + this.height;
		trace('\tterrainY = ' + terrainY + ', playerOffsetY = ' + playerOffsetY);
		if(playerOffsetY <= terrainY) {
			trace('\tgoing to do collision check again this terrain since player is above it');
			this.checkTerrainCollision(params.terrain);
		} else {
			trace('\tdo nothing, the player is under the terrain');
		}
	};
	
	Player.prototype.hazardCollision = function(player, hazard) {
		// trace('Player/hazardCollision, hazard = ');
		// trace(hazard);
		this.receiveDamage(hazard.model.attrs.attack);
	};
	
	Player.prototype.enemyCollision = function(player, enemy) {
		var playerX = player.body.x + (player.body.width);
		var playerY = player.body.y + (player.body.height);
		var enemyX = enemy.body.x + (enemy.body.width);
		var enemyY = enemy.body.y + (enemy.body.height);
		// trace('Player/enemyCollision, player x/y = ' + Math.ceil(playerX) + '/' + Math.ceil(playerY) + ', enemy x/y = ' + Math.ceil(enemyX) + '/' + Math.ceil(enemyY));
		// trace(enemy);

		// if(this.model.jumping || this.model.attacking) {
		if(playerY < (enemyY - 15)) { // player is above enemy
			this.updatePositionFromCollision();
			//enemy.receiveDamage(this.damage);
			enemy.damage(enemy.attack);
		} else {
			this.receiveDamage(enemy.attack);
		}
	};
	
	Player.prototype.bonusCollision = function(player, bonus) {
		// Polyworks.EventCenter.trigger({ type: Polyworks.Events.BONUS_COLLISION, player: player, bonus: bonus });
		// trace('Player/bonusCollision, bonus = ');
		// trace(bonus);
	    PolyworksGame.setScore(bonus.model.attrs.score);

		var health = bonus.model.attrs.health;
		if(health) {
			this.health += health;
			PolyworksGame.setHealth(this.health);
		}

		bonus.active = false; 
		bonus.destroy();
	};
	
	Player.prototype.receiveDamage = function(damage) {
		if(!_this.justDamaged) {
			// trace('Player/receiveDamage, damage = ' + damage + ', health = ' + this.health);
			this.health -= damage;
			PolyworksGame.setHealth(this.health);
			if(this.health <= 0) {
				// this.destroy();
				PolyworksGame.changeState('gameOver');
			} else {
				_this.justDamaged = true;
				_this.damageTimer = setTimeout(_this.resetJustDamaged, _this.damageInterval);
			}
		}
	};
	
	Player.prototype.resetJustDamaged = function() {
 		// trace('Player/resetJustDamaged');
		clearTimeout(_this.damageTimer);
		_this.justDamaged = false;
	};
	
	Player.prototype.updatePositionFromCollision = function() {
		this.velY = -this.model.attrs.speed.y/2;
		// this.velocityY = this.velY;
		this.body.velocity.y = this.velY;
	};
	
	Player.prototype.destroy = function() {
		// trace('Player/destroy');
		Polyworks.EventCenter.unbind(Polyworks.Events.CONTROL_PRESSED, this.onControlButtonPressed);
		Polyworks.EventCenter.unbind(Polyworks.Events.CONTROL_RELEASED, this.onControlButtonReleased);

		this.alive = false;
		this.update = null;
		this.updateInput = null;
		Player._super.destroy.call(this);
		// trace('end player destroy');
	};
	
	return Player;
})();