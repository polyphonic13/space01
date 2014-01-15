Polyworks.Player = (function() {
	// Utils.inherits(Player, Polyworks.AnimatedSprite);
	Utils.inherits(Player, Polyworks.Sprite);

	var _this;
	function Player(params) {
		trace('Player/constructor');
		_this = this;
		this.model = new Polyworks.Model(params);
		Player._super.constructor.call(this, params);
	}
	
	Player.prototype.begin = function() {
		Player._super.begin.call(this);

		this.velX = 0;
		this.velY = 0;

		this.beginWorld();
		this.beginEvents();
		this.beginControls();

		PolyworksGame.setHealth(this.model.health);

		this.__defineGetter__('health', function() {
			return this.model.health;
		});

		this.__defineSetter__('health', function(val) {
			// trace('Player/health setter, val = ' + val);
			this.model.health = val;
			PolyworksGame.setHealth(this.model.health);
		});

		this.__defineGetter__('damage', function() {
			return this.model.damage;
		});

		this.__defineGetter__('isJumping', function() {
			return this.model.jumping;
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

		if (this.activeControls[Polyworks.InputCodes.LEFT]) {
			this.velX = -this.model.speed.x;
			this.model.facingForward = false;
		}
		else if (this.activeControls[Polyworks.InputCodes.RIGHT]) {
			this.velX = this.model.speed.x;
			this.model.facingForward = true;
		}

		this.velocityX = this.velX;

		if(this.activeControls[Polyworks.InputCodes.UP]) {
			if(this.model.grounded && !this.model.justJumped) {
				this.velY = -this.model.speed.y;
				this.velocityY = this.velY;
				this.model.grounded = false;
				this.model.jumping = true;
				this.model.justJumped = true;
			} else {
				this.velY = 0;
			}
		} else if(this.activeControls[Polyworks.InputCodes.DOWN]) {
			// trace('Player/updateInput, down is active')
		}
	};
	
	Player.prototype.update = function(params) {
		this.checkTerrainCollision(params.terrain);

		var physics = PolyworksGame.phaser.physics;
		this.updateEnemyCollision(params.enemies, physics);
		this.updateBonusCollision(params.bonuses, physics);

		if(this.body.touching.down) {
			this.model.grounded = true;
			this.model.jumping = false;
			this.model.justJumped = false;
		}
	};

	Player.prototype.updateEnemyCollision = function(enemies, physics) {
		this.checkCollision(enemies, this.enemyCollision, physics, this);
	};
	
	Player.prototype.updateBonusCollision = function(bonuses, physics) {
		this.checkCollision(bonuses, this.bonusCollision, physics, this);
	};
	
	Player.prototype.checkCollision = function(collection, callback, physics, context) {
		for(var i = 0; i < collection.length; i++) {
			physics.overlap(this, collection[i].sprite, callback, null, context);
		}
	};
	
	Player.prototype.enemyCollision = function(player, sprite) {
		var playerX = player.body.x + (player.body.width);
		var playerY = player.body.y + (player.body.height);
		var enemyX = sprite.body.x + (sprite.body.width);
		var enemyY = sprite.body.y + (sprite.body.height);
		// trace('Player/enemyCollision, player x/y = ' + Math.ceil(playerX) + '/' + Math.ceil(playerY) + ', enemy x/y = ' + Math.ceil(enemyX) + '/' + Math.ceil(enemyY));
		// trace('Player/enemyCollision, player x/y = ' + Math.ceil(player.body.x) + '/' + Math.ceil(player.body.y) + ', enemy x/y = ' + Math.ceil(sprite.body.x) + '/' + Math.ceil(sprite.body.y));
		var enemy = this.model.sectorManager.activeSector.enemies.getItemByName(sprite.namex);
		// Polyworks.EventCenter.trigger({ type: Polyworks.Events.ENEMY_COLLISION, player: player, enemy: enemy });

		// if(this.model.jumping || this.model.attacking) {
		if(playerY < enemyY) {
			this.updatePositionFromCollision();
			enemy.receiveDamage(this.model.damage);
		} else {
			this.receiveDamage(enemy.damage);
		}
	};
	
	Player.prototype.bonusCollision = function(player, sprite) {
		var bonus = this.model.sectorManager.activeSector.bonuses.getItemByName(sprite.namex);
		// Polyworks.EventCenter.trigger({ type: Polyworks.Events.BONUS_COLLISION, player: player, bonus: bonus });

	    PolyworksGame.setScore(bonus.get('score'));

		var health = bonus.get('health');
		if(health) {
			this.health += bonus.get('health');
		}

		sprite.kill();
		bonus.active = false; 
	};
	
	Player.prototype.receiveDamage = function(damage) {
		this.health -= damage;
		if(this.model.health <= 0) {
			// this.destroy();
			PolyworksGame.changeState('quit');
		}
	};
	
	Player.prototype.updatePositionFromCollision = function() {
		this.velY = -this.model.speed.y/2;
		this.velocityY = this.velY;
	};
	
	Player.prototype.checkInput = function() {

		 //  Reset the this.players velocity (movement)
			this.velocityX = 0;
			this.velX = 0;
			if (this.activeControls[Polyworks.InputCodes.LEFT]) {
				this.velX = -this.model.speed.x;
				this.facingForward = false;
			}
			else if (this.activeControls[Polyworks.InputCodes.RIGHT]) {
				this.velX = this.model.speed.x;
				this.facingForward = true;
			}

			if(this.body.touching.down) {
				this.jumping = false;
			}
			// trace('player velX = ' + this.velX);
			this.velocityX = this.velX;
	};
	
	Player.prototype.destroy = function() {
		Polyworks.EventCenter.unbind(Polyworks.Events.CONTROL_PRESSED, this.onControlButtonPressed);
		Polyworks.EventCenter.unbind(Polyworks.Events.CONTROL_RELEASED, this.onControlButtonReleased);

		this.alive = false;
		this.update = null;
		this.updateInput = null;
		this.destroy();
	};
	
	return Player;
})();