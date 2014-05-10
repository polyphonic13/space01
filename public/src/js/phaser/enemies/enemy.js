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
			var enemyX = this.body.screenX;
			var enemyY = this.body.screenY;
			var playerX = params.player.body.screenX;
			var playerY = params.player.body.screenY;
			
			// trace('Enemy/pwUpdate, relationToPlayer = ' + this.relationToPlayer);

			if(this.model.attrs.testInView) {
				if(enemyX < (playerX + Polyworks.Stage.width/2) && enemyX > (playerX - Polyworks.Stage.width/2)) {
					this.isInView = true;
				} else {
					this.isInView = false;
				}
			}
			this.checkDynamicTerrainCollision(params.dynamicTerrain);

			this.relationToPlayer = 'near';
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

			if(this.body.touching.down) {
				this.justJumped = false;
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