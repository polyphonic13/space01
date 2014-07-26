PWG.Player = (function() {
	// PWG.Utils.inherits(Player, PWG.AnimatedSprite);
	PWG.Utils.inherits(Player, PWG.Sprite);

	var _this;
	function Player(params) {
		// trace('Player/constructor');
		_this = this;
		this.model = new PWG.Model(params);
		this.initialPosition = true;
		this.oneUpdate = false;
		Player._super.constructor.call(this, params);
		// trace('player body size = ' + this.body.width + '/' + this.body.height);
	}
	
	Player.prototype.begin = function(health) {
		Player._super.begin.call(this);

		// this.health = PolyworksGame.startingHealth;
		this.health = health;

		this.velX = 0;
		this.velY = 0;
		this.previousY = this.body.y;
		this.damageTimer = 0;
		this.damageInterval = 250;
		this.justDamaged = false;

		this.beginWorld();
		this.beginEvents();
		this.beginControls();

		PolyworksGame.setHealth(this.health);
		trace('PLAYER:', this);
	};

	Player.prototype.collided = function(a, b, c) {
		trace('Player/collided', a, b, c);
	};
	
	Player.prototype.setGroup = function(group) {
		this.group = group;
	};
	
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
		PWG.EventCenter.bind(PWG.Events.CONTROL_PRESSED, this.onControlButtonPressed, this);
		PWG.EventCenter.bind(PWG.Events.CONTROL_RELEASED, this.onControlButtonReleased, this);
	};
	
	Player.prototype.beginControls = function() {
		this.activeControls = {};
		this.activeControls[PWG.InputCodes.LEFT] = false;
		this.activeControls[PWG.InputCodes.RIGHT] = false;
		this.activeControls[PWG.InputCodes.UP] = false;
		this.activeControls[PWG.InputCodes.SPACE] = false;
		this.activeControls[PWG.InputCodes.DOWN] = false;
		// trace('activeControls');
		// trace(this.activeControls);
	};
	
	Player.prototype.onControlButtonPressed = function(event) {
		this.activeControls[event.value] = true;
		// trace('Player.prototype.onControlButtonPressed, event.value = ' + event.value);
		// trace(this.activeControls);
		if(event.value === PWG.InputCodes.RESET) {
			this.activeControls[PWG.InputCodes.LEFT] = false;
			this.activeControls[PWG.InputCodes.RIGHT] = false;
		} else if(event.value === PWG.InputCodes.LEFT) {
			this.activeControls[PWG.InputCodes.RIGHT] = false;
		} else if(event.value === PWG.InputCodes.RIGHT) {
			this.activeControls[PWG.InputCodes.LEFT] = false;
		}
		this.updatePosition();
	};
	
	Player.prototype.onControlButtonReleased = function(event) {
		this.activeControls[event.value] = false;
		// trace('Player.prototype.onControlButtonReleased, event.value = ' + event.value);
		// trace(this.activeControls);
		if(event.value === PWG.InputCodes.RESET) {
			this.activeControls[PWG.InputCodes.LEFT] = false;
			this.activeControls[PWG.InputCodes.RIGHT] = false;
		} else if(event.value === PWG.InputCodes.LEFT) {
			this.activeControls[PWG.InputCodes.RIGHT] = false;
		} else if(event.value === PWG.InputCodes.RIGHT) {
			this.activeControls[PWG.InputCodes.LEFT] = false;
		}
		this.updatePosition();
	};
	
	Player.prototype.updatePosition = function() {
		// trace('Player/updatePosition, x = ' + this.body.x);
		if(!PolyworksGame.adPlaying) {
			if(this.initialPosition) {
				this.initialPosition = false;
				this.activateGravity();
			}

			this.velX = 0;
			this.velY = 0;
			var attrs = this.model.attrs;

			if (this.activeControls[PWG.InputCodes.LEFT]) {
				this.velX = -attrs.speed.x;
				attrs.facingForward = false;
			}
			else if (this.activeControls[PWG.InputCodes.RIGHT]) {
				this.velX = attrs.speed.x;
				attrs.facingForward = true;
			}

			this.body.velocity.x = this.velX;

			if(this.activeControls[PWG.InputCodes.UP] || this.activeControls[PWG.InputCodes.SPACE]) {
				if(attrs.grounded && !attrs.justJumped) {
					this.velY = -attrs.speed.y;
					this.body.velocity.y = this.velY;
					attrs.grounded = false;
					attrs.jumping = true;
					attrs.justJumped = true;
				} else {
					this.velY = 0;
				}
			} else if(this.activeControls[PWG.InputCodes.DOWN]) {
				// trace('Player/updatePosition, down is active');
			}
		}
	};
	
	Player.prototype.updatePositionFromCollision = function() {
		this.velY = -this.model.attrs.speed.y/2;
		this.body.velocity.y = this.velY;
	};
	
	Player.prototype.activateGravity = function() {
		// trace('Player/activateGravity');
		Player._super.activateGravity.call(this);
	};

	Player.prototype.pwUpdate = function(params) {
		// trace('Player/update, health = ' + this.health);
		// trace(params);
		if(this.alive) {
			this.collided = false;
			var physics = PolyworksGame.phaser.physics.arcade;
			var attrs = this.model.attrs;
			var physicalItems = params.physicalItems; 

			for(var key in physicalItems) {
				// trace('physicalItems['+key+'] = ', physicalItems[key]);
				this[('check' + key + 'Collision')](physicalItems[key], physics);
			}

			if(this.body.touching.down) {
				attrs.grounded = true;
				attrs.jumping = false;
				attrs.justJumped = false;
			} else {
				attrs.grounded = false;
			}
		}
	};

	Player.prototype.checkBonusesCollision = function(bonuses, physics) {
		this.checkCollision(bonuses, this.onBonusCollision, physics, this);
	};
	
	Player.prototype.checkHazardsCollision = function(hazards, physics) {
		this.checkCollision(hazards, this.onHazardCollision, physics, this);
	};
	
	Player.prototype.checkEnemiesCollision = function(enemies, physics) {
		this.checkCollision(enemies, this.onEnemyCollision, physics, this);
	};
	
	Player.prototype.checkGroupEnemiesCollision = function(group, physics) {
		// trace('Player/checkGroupEnemiesCollision, group = ', group);
		// this.checkGroupCollision(group, this.onGroupEnemyCollision, physics, this);
		this.checkCollision(group, this.onGroupEnemyCollision, physics, this);
	};
	
	Player.prototype.checkRequirementsCollision = function(group, physics) {
		this.checkGroupCollision(group, this.onRequirementCollision, physics, this);
	};
	
	Player.prototype.checkGoalsCollision = function(group, physics) {
		this.checkGroupCollision(group, this.onGoalCollision, physics, this);
	};
	
	Player.prototype.checkCollision = function(collection, callback, physics, context) {
		// trace('Player/checkCollision, health = ' + this.health);
		// physics.overlap(this, collection, callback, null, context);
		PWG.Utils.each(collection,
			function(child) {
				physics.overlap(this, child, callback, null, context);
			},
			this
		);
	};
	
	Player.prototype.checkGroupCollision = function(group, callback, physics, context) {
		physics.overlap(this, group, callback, null, context);
	};
	
	Player.prototype.onBonusCollision = function(player, bonus) {
		// trace('Player/onBonusCollision, bonus = ');
		// trace(bonus);
		this.collided = true;

		var health = bonus.model.attrs.health;
		if(health) {
			this.health += health;
			PolyworksGame.setHealth(this.health);
		}
		if(bonus.model.attrs.score) {
		    PolyworksGame.setLevelScore(bonus.model.attrs.score);
		}
		bonus.active = false; 
		bonus.destroy();
	};
	
	Player.prototype.onHazardCollision = function(player, hazard) {
		// trace('Player/onHazardCollision, hazard = ', hazard);
		this.collided = true;
		this.receiveDamage(hazard.model.attrs.attack);
	};
	
	Player.prototype.onEnemyCollision = function(player, enemy) {
		this.collided = true;
		var playerX = player.body.x + (player.body.width);
		var playerY = player.body.y + (player.body.height) - 10; // need a little bit of "wiggle room" to get the collision to take
		var enemyX = enemy.body.x + (enemy.body.width);
		var enemyY = enemy.body.y + (enemy.body.height);
		// trace('Player/onEnemyCollision['+enemy.model.name+'], player x/y = ' + Math.ceil(playerX) + '/' + Math.ceil(playerY) + ', enemy x/y = ' + Math.ceil(enemyX) + '/' + Math.ceil(enemyY));
		// trace(enemy);
// trace('enemy collision\n\tplayerY = ' + playerY + ', enemy.body.y = ' + enemy.body.y + '\n\tenemy.overlapY = ' + enemy.body.overlapY + ', enemy touching = ', enemy.body.touching);
		// if(playerY < (enemyY)) { // player is above enemy
		if(playerY <= enemy.body.y) {
			this.updatePositionFromCollision();
			enemy.damage(this.model.attrs.attack);
		} else {
			this.receiveDamage(enemy.model.attrs.attack);
		}
	};
	
	Player.prototype.onGroupEnemyCollision = function(player, enemy) {
		// trace('Player/onGroupEnemyCollision, enemy = ' + enemy.model.name);
		this.collided = true;
		var playerX = player.body.x + (player.body.width);
		var playerY = player.body.y + (player.body.height) - 10; // need a little bit of "wiggle room" to get the collision to take
		var enemyX = enemy.body.x + (enemy.body.width);
		var enemyY = enemy.body.y + (enemy.body.height);
		// trace('Player/onGroupEnemyCollision['+enemy.model.name+'], player x/y = ' + Math.ceil(playerX) + '/' + Math.ceil(playerY) + ', enemy x/y = ' + Math.ceil(enemyX) + '/' + Math.ceil(enemyY));
		// trace(enemy);
		// trace('enemy collision\n\tplayerY = ' + playerY + ', enemy.body.y = ' + enemy.body.y + '\n\tenemy.overlapY = ' + enemy.body.overlapY + ', enemy touching = ', enemy.body.touching);
		// if(playerY < (enemyY)) { // player is above enemy
		if(playerY <= enemy.body.y) {
			this.updatePositionFromCollision();
			enemy.damage(this.model.attrs.attack);
		} else {
			if(enemy.model.attrs.attack > 0) {
				this.receiveDamage(enemy.model.attrs.attack);
			}
		}
	};

	Player.prototype.onRequirementCollision = function(player, requirement) {
		trace('Player/onRequirementCollision, requirement = ', requirement);

		this.collided = true;
		requirement.collect();
	};
	
	Player.prototype.onGoalCollision = function(player, goal) {
		// trace('Player/onGoalCollision, goal = ' + goal.model.name);
		PWG.EventCenter.trigger({ type: PWG.Events.GOAL_REACHED, value: goal.model.name });
		goal.destroy();
	};

	Player.prototype.receiveDamage = function(damage) {
		// trace('Player/receiveDamage, justDamaged = ' + this.justDamaged);
		if(!this.justDamaged) {
			this.health -= damage;
			PolyworksGame.setHealth(this.health);
			if(this.health <= 0) {
				PolyworksGame.levelScore = 0;
				PolyworksGame.changeState('gameOver');
			} else {
				_this.justDamaged = true;
				_this.damageTimer = setTimeout(_this.resetJustDamaged, _this.damageInterval);
			}
		}
	};
	
	Player.prototype.resetJustDamaged = function() {
		clearTimeout(_this.damageTimer);
		_this.justDamaged = false;
	};
	
	Player.prototype.destroy = function() {
		// trace('Player/destroy');
		PWG.EventCenter.unbind(PWG.Events.CONTROL_PRESSED, this.onControlButtonPressed);
		PWG.EventCenter.unbind(PWG.Events.CONTROL_RELEASED, this.onControlButtonReleased);

		this.alive = false;
		this.update = null;
		this.updatePosition = null;
		Player._super.destroy.call(this);
	};
	
	return Player;
})();