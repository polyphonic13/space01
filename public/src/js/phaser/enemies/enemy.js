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

			if(this.model.attrs.testInView) {
				if(enemyX < (playerX + Polyworks.Stage.width/2) && enemyX > (playerX - Polyworks.Stage.width/2)) {
					this.isInView = true;
				} else {
					this.isInView = false;
				}
			}
			this.checkDynamicTerrainCollision(params.dynamicTerrain);

			if(this.isInView) {
				this.relationToPlayer = 'near';
				var movementType = this.model.attrs.movement.type;
				switch(movementType) {
					case: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED:
					case: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED:
						this.calculateHorizontalMovement(params.player);
					break;
					
					case: Polyworks.MovementTypes.VERTICAL_BY_SPEED:
						this.calculateVerticalMovement(params.player);
					break;
					
					default: 
						trace('ERROR: unknown movement type: ' + movementType);
					break;
				}
			}

			if(this.body.touching.down) {
				this.justJumped = false;
			}
		}
	};
	
	Enemy.prototype.calculateHorizontalMovement = function(player) {
		var enemyX = this.body.screenX;
		var playerX = player.body.screenX;

		if(enemyX < (playerX - 10)) {
			// trace('move right');
			this.relationToPlayer = 'right';
			this.move({ direction: Polyworks.Directions.RIGHT, type: this.model.attrs.movement.type });
		} else if(enemyX > (playerX + 10)) {
			// trace('move left');
			this.relationToPlayer = 'left';
			this.move({ direction: Polyworks.Directions.LEFT, type: this.model.attrs.movement.type });
		} else if(this.model.attrs.jumps && (enemyY > playerY)) {
			this.relationToPlayer = 'jumping';
			if(!this.justJumped) {
				this.justJumped = true;
				this.move({ direction: Polyworks.Directions.UP, type: Polyworks.MovementTypes.JUMP });
			}
		}
	};
	
	Enemy.prototype.calculateVerticalMovement = function(player) {
		var enemyY = this.body.screenY;
		var playerY = player.body.screenY;
		
		if(enemyY < (playerY - 10)) {
			// trace('move right');
			this.relationToPlayer = 'up';
			this.move({ direction: Polyworks.Directions.UP, type: this.model.attrs.movement.type });
		} else if(enemyY > (playerY + 10)) {
			// trace('move left');
			this.relationToPlayer = 'down';
			this.move({ direction: Polyworks.Directions.DOWN, type: this.model.attrs.movement.type });
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