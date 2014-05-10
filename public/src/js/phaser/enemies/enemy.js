Polyworks.Enemy = (function() {
	Polyworks.Utils.inherits(Enemy, Polyworks.Sprite);
	
	var _this;
	function Enemy(params) {
		Enemy._super.constructor.call(this, params);
		this.reactivated = false; 
		this.isInView = true;
		this.justJumped = false;
		this.relationToPlayer = '';
	}

	Enemy.prototype.pwUpdate = function(params) {
		if(this.alive) {
			// trace('Enemy/pwUpdate, relationToPlayer = ' + this.relationToPlayer);
			this.checkDynamicTerrainCollision(params.dynamicTerrain);

			this.relationToPlayer = 'near';
			var movementType = this.model.attrs.movement.type;
			switch(movementType) {
				case Polyworks.MovementTypes.HORIZONTAL_BY_SPEED:
				case Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED:
					this.calculateHorizontalMovement(params.player, movementType, false);
				break;
				
				case Polyworks.MovementTypes.VERTICAL_BY_SPEED:
					this.calculateVerticalMovement(params.player, movementType);
				break;
				
				case Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED:
					this.calculateHorizontalMovement(params.player, Polyworks.MovementTypes.HORIZONTAL_BY_SPEED);
					var invert = false;
					if(this.relationToPlayer == 'below') {
						invert = true;
					}
					this.calculateVerticalMovement(params.player, Polyworks.MovementTypes.VERTICAL_BY_SPEED, invert);
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
		var reverse = invert || false;
		var enemyX = this.body.screenX;
		var enemyY = this.body.screenY;
		var playerX = player.body.screenX;
		var playerY = player.body.screenY;

		if(this.model.attrs.testInView) {
			if(enemyX < (playerX + Polyworks.Stage.width/2) && enemyX > (playerX - Polyworks.Stage.width/2)) {
				this.isInView = true;
			} else {
				this.isInView = false;
			}
		}

		if(this.isInView) {
			var direction; 
			if(enemyX < (playerX - 10)) {
				// trace('move right');
				this.relationToPlayer = 'right';
				direction = (reverse) ? Polyworks.Directions.LEFT : Polyworks.Directions.RIGHT;
				this.move({ direction: direction, type: movementType });
			} else if(enemyX > (playerX + 10)) {
				// trace('move left');
				this.relationToPlayer = 'left';
				direction = (reverse) ? Polyworks.Directions.RIGHT : Polyworks.Directions.LEFT;
				this.move({ direction: direction, type: movementType });
			} else if(this.model.attrs.jumps && (enemyY > playerY)) {
				this.relationToPlayer = 'jumping';
				if(!this.justJumped) {
					this.justJumped = true;
					this.move({ direction: Polyworks.Directions.UP, type: Polyworks.MovementTypes.JUMP });
				}
			}
		}
	};
	
	Enemy.prototype.calculateVerticalMovement = function(player, movementType) {
		var enemyY = this.body.screenY;
		var playerY = player.body.screenY;
		var playerHeight = player.body.height;
		
		if(this.model.attrs.testInView) {
			if(enemyX < (playerX + Polyworks.Stage.width/2) && enemyX > (playerX - Polyworks.Stage.width/2)) {
				this.isInView = true;
			} else {
				this.isInView = false;
			}
		}

		if(this.isInView) {
			if(enemyY < (playerY - playerHeight)) {
				// trace('move right');
				this.relationToPlayer = 'above';
				this.move({ direction: Polyworks.Directions.DOWN, type: movementType });
			} else if(enemyY > (playerY + playerHeight)) {
				// trace('move left');
				this.relationToPlayer = 'below';
				this.move({ direction: Polyworks.Directions.UP, type: movementType });
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