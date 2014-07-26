PWG.Enemy = (function() {
	PWG.Utils.inherits(Enemy, PWG.Sprite);
	
	var _this;
	function Enemy(params) {
		Enemy._super.constructor.call(this, params);
		this.reactivated = false; 
		this.isInView = true;
		this.isInProximity = false;
		this.isActive = false;
		this.justJumped = false;
		this.relationToPlayer = '';
	}

	Enemy.prototype.pwUpdate = function(params) {
		if(this.alive) {
			// trace('Enemy['+this.model.name+']/pwUpdate, relationToPlayer = ' + this.relationToPlayer);
			this.checkDynamicTerrainCollision(params.dynamicTerrain);

			this.relationToPlayer = 'near';
			var movementType = this.model.attrs.movement.type;
			switch(movementType) {
				case PWG.MovementTypes.HORIZONTAL_BY_SPEED:
				case PWG.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED:
					this.calculateHorizontalMovement(params.player, movementType, false);
				break;
				
				case PWG.MovementTypes.VERTICAL_BY_SPEED:
					this.calculateVerticalMovement(params.player, movementType);
				break;
				
				case PWG.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED:
					this.calculateHorizontalMovement(params.player, PWG.MovementTypes.HORIZONTAL_BY_SPEED);
					var invert = false;
					if(this.relationToPlayer == 'below') {
						invert = true;
					}
					this.calculateVerticalMovement(params.player, PWG.MovementTypes.VERTICAL_BY_SPEED, invert);
				break;

				default: 
					trace('ERROR: (enemy) unknown movement type: ' + movementType);
				break;
			}

			if(this.body.touching.down) {
				this.justJumped = false;
			}
		}
	};
	
	Enemy.prototype.calculateHorizontalMovement = function(player, movementType, invert) {
		// trace('Enemy['+this.model.name+']/calculateHorizontalMovement');
		var reverse = invert || false;
		var enemyX = this.body.x;
		var enemyY = this.body.y;
		var playerX = player.body.x;
		var playerY = player.body.y;

		if(this.model.attrs.testInView) {
			// trace('testing in view, enemyX = ' + enemyX + ', playerX = ' + playerX);
			if((enemyX < (playerX + PWG.Stage.width/2) && enemyX > (playerX - PWG.Stage.width/2)) && (enemyY < (playerY + PWG.Stage.height/2) && enemyY > (playerY - PWG.Stage.height/2))) {
				this.isInView = true;
				if(!this.isActive) {
					this.isActive = true;
				}
			} else {
				this.isInView = false;
				if(this.isActive) {
					this.isActive = false;
				}
			}
		}

		if(this.isInView) {
				// trace('is in view, x = ' + enemyX + ', playerX = ' + playerX);
			var direction; 
			if(enemyX < (playerX - 10)) {
				// trace(this.model.name + ': move right, x = ' + enemyX + ', playerX = ' + playerX);
				this.relationToPlayer = 'right';
				direction = (reverse) ? PWG.Directions.LEFT : PWG.Directions.RIGHT;
				this.move({ direction: direction, type: movementType });
			} else if(enemyX > (playerX + 10)) {
				// trace(this.model.name + ': move left, x = ' + enemyX + ', playerX = ' + playerX);
				this.relationToPlayer = 'left';
				direction = (reverse) ? PWG.Directions.RIGHT : PWG.Directions.LEFT;
				this.move({ direction: direction, type: movementType });
			} else if(this.model.attrs.jumps && (enemyY > playerY)) {
				this.relationToPlayer = 'jumping';
				if(!this.justJumped) {
					this.justJumped = true;
					this.move({ direction: PWG.Directions.UP, type: PWG.MovementTypes.JUMP });
				}
			}
		}

		if((enemyX < (playerX + PWG.Stage.width/4) && enemyX > (playerX - PWG.Stage.width/4)) || (enemyY < (playerY + PWG.Stage.height/4) && enemyY > (playerY - PWG.Stage.height/4))) {
			if(!this.isInProximity) {
				this.isInProximity = true;
				PWG.EventCenter.trigger({ type: PWG.Events.ADD_ACTIVE_ENEMY, enemy: this });
			}
		} else {
			if(this.isInProximity) {
				this.isInProximity = false;
				// PWG.EventCenter.trigger({ type: PWG.Events.REMOVE_ACTIVE_ENEMY, enemy: this });
			}
		}
	};
	
	Enemy.prototype.calculateVerticalMovement = function(player, movementType) {
		var enemyY = this.body.screenY;
		var playerY = player.body.screenY;
		var playerHeight = player.body.height;
		
		if(this.model.attrs.testInView) {
			if(enemyX < (playerX + PWG.Stage.width/2) && enemyX > (playerX - PWG.Stage.width/2)) {
				this.isInView = true;
			} else {
				this.isInView = false;
			}
		}

		if(this.isInView) {
			if(enemyY < (playerY - playerHeight)) {
				// trace('move right');
				this.relationToPlayer = 'above';
				this.move({ direction: PWG.Directions.DOWN, type: movementType });
			} else if(enemyY > (playerY + playerHeight)) {
				// trace('move left');
				this.relationToPlayer = 'below';
				this.move({ direction: PWG.Directions.UP, type: movementType });
			}
		}
	};
	
	Enemy.prototype.damage = function(damage) {
		// trace('Enemy['+this.model.name+']/damage, damage = ' + damage + ', health = ' + this.health);
		this.health -= damage;
		if(this.health <= 0) {
			this.kill();
		}
	};
	
	Enemy.prototype.kill = function() {
		trace('Enemy['+this.model.name+']/kill, ancestor = ');
		// trace(this.model);
		PolyworksGame.setLevelScore(this.model.attrs.score);
		this.model.ancestor.removeChild.call(this.model.ancestor, this.model.name);
		Enemy._super.kill.call(this);
	};
	
	Enemy.prototype.destroy = function() {
		trace('Enemy['+this.model.name+']/destroy');
		this.alive = false;
		Enemy._super.destroy.call(this);
	};
	
	return Enemy;
})();