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

		this.velX = 0;
		this.velY = 0;

		this.beginGetterSetters();
		this.beginWorld();
		this.beginEvents();
		this.beginControls();

		PolyworksGame.setHealth(this.health);
	}
	
	Player.prototype.beginGetterSetters = function() {
		this.__defineGetter__('facingForward', function() {
			return this.model.attrs.facingForward;
		});
		this.__defineSetter__('facingForward', function(val) {
			this.model.attrs.facingForward = val;
		});
		this.__defineGetter__('health', function() {
			return this.model.attrs.health;
		});
		this.__defineSetter__('health', function(val) {
			// trace('Player/health setter, val = ' + val);
			this.model.attrs.health = val;
			PolyworksGame.setHealth(this.health);
		});
		this.__defineGetter__('damage', function() {
			return this.model.attrs.damage;
		});
		this.__defineGetter__('isJumping', function() {
			return this.model.attrs.jumping;
		});
		this.__defineGetter__('sprite', function() {
			return this;
		});
	}
	
	Player.prototype.beginWorld = function() {
		trace('Player/beginWorld');
		trace(this);
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
		_this.updateInput();
	};
	
	Player.prototype.onControlButtonReleased = function(event) {
		_this.activeControls[event.value] = false;
		// trace('Player.prototype.onControlButtonReleased, event.value = ' + event.value);
		// trace(_this.activeControls);
		if(event.value === Polyworks.InputCodes.RESET) {
			_this.activeControls[Polyworks.InputCodes.LEFT] = false;
			_this.activeControls[Polyworks.InputCodes.RIGHT] = false;
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

		this.velocityX = this.velX;

		if(this.activeControls[Polyworks.InputCodes.UP]) {
			if(attrs.grounded && !attrs.justJumped) {
				this.velY = -attrs.speed.y;
				this.velocityY = this.velY;
				attrs.grounded = false;
				attrs.jumping = true;
				attrs.justJumped = true;
			} else {
				this.velY = 0;
			}
		} else if(this.activeControls[Polyworks.InputCodes.DOWN]) {
			// trace('Player/updateInput, down is active')
		}
		trace('end player update input, velX = ' + this.velX + ', velY = ' + this.velY);
	};
	
	Player.prototype.pwUpdate = function(params) {
		// trace('Player/update, params = ');
		// trace(params);
		if(this.alive) {
			var physics = PolyworksGame.phaser.physics;
			var attrs = this.model.attrs;

			this.checkTerrainCollision(params.terrain);
			this.checkEnemyCollision(params.enemies, physics);
			this.checkBonusCollision(params.bonuses, physics);

			if(this.body.touching.down) {
				attrs.grounded = true;
				attrs.jumping = false;
				attrs.justJumped = false;
			}
		}
	};

	Player.prototype.checkEnemyCollision = function(enemies, physics) {
		this.checkCollision(enemies, this.enemyCollision, physics, this);
	};
	
	Player.prototype.checkBonusCollision = function(bonuses, physics) {
		this.checkCollision(bonuses, this.bonusCollision, physics, this);
	};
	
	Player.prototype.checkCollision = function(collection, callback, physics, context) {
		for(var i = 0; i < collection.length; i++) {
			physics.overlap(this, collection[i], callback, null, context);
		}
	};
	
	Player.prototype.enemyCollision = function(player, enemy) {
		var playerX = player.body.x + (player.body.width);
		var playerY = player.body.y + (player.body.height);
		var enemyX = enemy.body.x + (enemy.body.width);
		var enemyY = enemy.body.y + (enemy.body.height);
		// trace('Player/enemyCollision, player x/y = ' + Math.ceil(playerX) + '/' + Math.ceil(playerY) + ', enemy x/y = ' + Math.ceil(enemyX) + '/' + Math.ceil(enemyY));
		// trace(enemy);

		// if(this.model.jumping || this.model.attacking) {
		if(playerY < enemyY) { // player is above enemy
			this.updatePositionFromCollision();
			enemy.receiveDamage(this.damage);
		} else {
			this.receiveDamage(enemy.damage);
		}
	};
	
	Player.prototype.bonusCollision = function(player, bonus) {
		// Polyworks.EventCenter.trigger({ type: Polyworks.Events.BONUS_COLLISION, player: player, bonus: bonus });
		trace('Player/bonusCollision, bonus = ');
		trace(bonus);
	    PolyworksGame.setScore(bonus.score);

		var health = bonus.health;
		if(health) {
			this.health += bonus.health;
		}

		bonus.active = false; 
		bonus.destroy();
	};
	
	Player.prototype.receiveDamage = function(damage) {
		// trace('Player/receiveDamage, damage = ' + damage + ', health = ' + this.health);
		this.health -= damage;
		if(this.health <= 0) {
			// this.destroy();
			PolyworksGame.changeState('quit');
		}
	};
	
	Player.prototype.updatePositionFromCollision = function() {
		this.velY = -this.model.attrs.speed.y/2;
		this.velocityY = this.velY;
	};
	
	Player.prototype.checkInput = function() {

		 //  Reset the this.players velocity (movement)
			this.velocityX = 0;
			this.velX = 0;
			if (this.activeControls[Polyworks.InputCodes.LEFT]) {
				this.velX = -this.model.attrs.speed.x;
				this.facingForward = false;
			}
			else if (this.activeControls[Polyworks.InputCodes.RIGHT]) {
				this.velX = this.model.attrs.speed.x;
				this.facingForward = true;
			}

			if(this.body.touching.down) {
				this.jumping = false;
			}
			// trace('player velX = ' + this.velX);
			this.velocityX = this.velX;
	};
	
	Player.prototype.destroy = function() {
		trace('Player/destroy');
		Polyworks.EventCenter.unbind(Polyworks.Events.CONTROL_PRESSED, this.onControlButtonPressed);
		Polyworks.EventCenter.unbind(Polyworks.Events.CONTROL_RELEASED, this.onControlButtonReleased);

		this.alive = false;
		this.update = null;
		this.updateInput = null;
		Player._super.destroy.call(this);
	};
	
	return Player;
})();