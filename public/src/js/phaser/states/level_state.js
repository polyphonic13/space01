Polyworks.LevelState = (function() {
	Utils.inherits(LevelState, Polyworks.ControlsState); 
	
	var _this;
	function LevelState(params, id) {
		// trace('LevelState/constructor, phaser = ');
		_this = this;
		LevelState._super.constructor.call(this, params, id);

		this.gameOver = false;
		this.terrain;
		this.controls;
		this.cursors;
		this.player; 
		this.quitButton;
		// Polyworks.Game.score = 0;
	};
	
	LevelState.prototype.preload = function() {
	};
	
	LevelState.prototype.create =  function() {
		// trace('LevelState['+this.id+']/create');
		LevelState._super.create.call(this);
	}
	
	LevelState.prototype.createState = function() {

		// create views and controls with super
		LevelState._super.createState.call(this);

		this.terrain = this.elements.terrain;
		this.sectorManager = this.elements.sectors;

		// trace('player type = ' + config.player.type);
		this.player = new Polyworks[config.player.type](config.player.attrs, config.player.name);

		this.createControls.call(this);
		// this.cursors = this.controls.cursors;
		this.gui = this.elements.gui;
		this.initGUI();
	};
	
	LevelState.prototype.initGUI = function() {
		// this.gui.setContent('score', 'Score: ' + Polyworks.Game.score);
		this.gui.setContent('health', this.player.health);
	};
	
	LevelState.prototype.update = function() {
		// trace('this.player.x = ' + this.player.sprite.x + ', end = ' + this.model.bounds.end);
		// this.gameOver = true;
		if(!this.gameOver) {
			if(this.player.sprite.x >= this.model.bounds.end) {
				Polyworks.Game.changeState('quit');
			} else {
				this.sectorManager.checkTerrainCollision(this.terrain.group);
				this.sectorManager.setActive(this.game.camera.x + (stage.width/2));

				var sector = this.sectorManager.activeSector;
				sector.enemies.update({ player: this.player.sprite });

				this.player.update({
					terrain: this.terrain.group,
					enemies: {
						collection: sector.enemies.getActive(),
						callback: this.enemyCollision
					},
					bonuses: {
						collection: sector.bonuses.getActive(),
						callback: this.bonusCollision
					}
				});
			}
		}
	};
	
	LevelState.prototype.enemyCollision = function(player, sprite) {
		// trace('LevelState/enemyCollision');
		// trace(player.body.touching);
		// trace(sprite.body.touching);
		// trace(_this);
		var enemy = _this.sectorManager.activeSector.enemies.collection[sprite.idx];

		// trace('enemyCollision, sprite =');
		// trace(sprite);
		// trace('\tenemy =');
		// trace(enemy);
		// trace('this.player overlap x/y = ' + sprite.body.overlapX + '/' + sprite.body.overlapY);
		// trace(sprite);
		// trace(this.player.sprite.body.touching);
		// if(!_this.player.sprite.body.touching.down) {
		// if(!sprite.body.touching.down) {
		if(_this.player.isJumping) {
			// trace('this.player bottom touching enemy top, this.player touching: ');
			// trace(this.player.sprite.body.touching);
			// trace('\tenemy touching: ');
			// trace(sprite.body.touching);
			// _this.player.sprite.body.velocity.y = -config.player.jumpHeight/2;
			// _this.playerJump();
			// trace('keke damages enemy');
			_this.player.hitEnemy();
			// killEnemy(sprite);
			enemy.health -= _this.player.damage;
			if(enemy.health <= 0) {
				// killEnemy(sprite);
				_this.killEnemy(enemy);
			}
		} else {
			// trace('enemy damage this.player, this.player touching');
			// trace(this.player.sprite.body.touching);
			// trace('\tenemy touching');
			// trace(sprite.body.touching);
			// trace('enemy damages keke');
			_this.player.damaged(enemy.damage);
			_this.gui.setContent('health', _this.player.health);
		}
	};

	LevelState.prototype.killEnemy = function(enemy) {
		// trace('killEnemy');
		Polyworks.Game.score += enemy.score;
		// Polyworks.Game.scoreText.content = 'Score: ' + Polyworks.Game.score;
		// this.gui.setContent('score', 'Score: ' + Polyworks.Game.score);
		enemy.kill();
	};

	LevelState.prototype.bonusCollision = function(player, sprite) {
		// trace('bonusCollision, sprite = ');
		// trace(sprite);
		var bonus = _this.sectorManager.activeSector.bonuses.collection[sprite.idx];
		// trace('bonus = ');
		// trace(bonus);
		sprite.kill();
		bonus.active = false; 

	    Polyworks.Game.score += bonus.get('score');
		// _this.gui.setContent('score', 'Score: ' + Polyworks.Game.score);

		_this.player.health += bonus.get('health');
		_this.gui.setContent('health', _this.player.health);
	};

	LevelState.prototype.close = function() {
		Polyworks.Game.changeState('quit');
	};
	
	return LevelState;
})();
