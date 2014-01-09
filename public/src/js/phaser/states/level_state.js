Polyworks.LevelState = (function() {
	Polyworks.Utils.inherits(LevelState, Polyworks.State); 
	
	function LevelState(params, id) {
		LevelState._super.constructor.call(this, params, id);

		this.gameOver = false;
		this.platforms = {};
		this.controls;
		this.cursors;
		this.player; 
		this.quitButton;
		this.score = 0;
		this.scoreText;
	};
	
	LevelState.prototype.preload = function() {
		trace('LevelState['+this.id+']/preload');
		var images = config.images;
		trace('preload images');
		for(key in images) {
			game.load.image(key, images[key]);
		}
		var sprites = config.sprites;
		trace('preload sprites');
		for(key in sprites) {
			// trace('\t' + key + ', width = ' + sprites[key].width + ', height = ' + sprites[key].height + ', frames = ' + sprites[key].frames);
			game.load.spritesheet(key, sprites[key].url, sprites[key].width, sprites[key].height, sprites[key].frames);
		}

		// keyboard buttons
		this.cursors = game.input.keyboard.createCursorKeys();
	};
	
	LevelState.prototype.create =  function() {
		trace('LevelState['+this.id+']/create');
		game.world.setBounds(config.world.x, config.world.y, config.world.width, config.world.height);

		this.createScenery();
		this.createTerrain();
		this.sectorManager = new Polyworks.Sectors(this.model.sectors);
		this.createPlayer();
		this.createGui();
		this.createControls();
	};
	
	LevelState.prototype.createScenery = function() {
		var sky = game.add.sprite(0, 0, 'sky');
		sky.width = stage.width;
		sky.height = stage.height;
		sky.fixedToCamera = true;

		game.add.sprite(0, 0, 'mountains');
		game.add.sprite(0, (stage.height - 490), 'treesBack');
		game.add.sprite(0, 0, 'treesFore');
		game.add.sprite(2048, 0, 'mountains');
		game.add.sprite(2048, (stage.height - 490), 'treesBack');
		game.add.sprite(2048, 0, 'treesFore');

		game.add.sprite(0, (stage.height - 200), 'grass1');
		game.add.sprite(2048, (stage.height - 200), 'grass2');

	};

	LevelState.prototype.createTerrain = function() {
		//  The this.platforms group contains the ground and the 2 ledges we can jump on
		this.platforms = game.add.group();

		var ground = this.platforms.create(0, game.world.height - 20, 'platform');
		ground.scale.setTo(8, 1);
		ground.body.immovable = true;

		ground = this.platforms.create(2048, game.world.height - 20, 'platform');
		ground.scale.setTo(8, 1);
	  	ground.body.immovable = true;

		var ledge = this.platforms.create(500, (config.world.height - 75), 'platform');
		ledge.body.immovable = true;

		ledge = this.platforms.create(800, (config.world.height - 130), 'platform');
		ledge.body.immovable = true;

		ledge = this.platforms.create(1100, (config.world.height - 180), 'platform');
		ledge.body.immovable = true;

		var ledge = this.platforms.create(3100, (config.world.height - 75), 'platform');
		ledge.scale.setTo(0.8, 1);
		ledge.body.immovable = true;

		ledge = this.platforms.create(3300, (config.world.height - 130), 'platform');
		ledge.scale.setTo(0.8, 1);
		ledge.body.immovable = true;

		ledge = this.platforms.create(3500, (config.world.height - 180), 'platform');
		ledge.scale.setTo(0.8, 1);
		ledge.body.immovable = true;
	};

	LevelState.prototype.createPlayer = function() {
		trace('createPlayer');
		this.player = new Polyworks.Player(config.player, 0);
	};

	LevelState.prototype.createControls = function() {
		// CONTROLS
		key1 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
		key1.onDown.add(quit, this);

		this.controls = new Polyworks.ControlButtons(config.controls);

	 };
	
	LevelState.prototype.createGui = function() {
	   //  The score
		var guiConsole = game.add.group(null);
	    this.scoreText = game.add.text(16, 15, 'Score: 0', { font: '18px Arial', fill: '#ffffff' });
		guiConsole.add(this.scoreText);

		this.healthText = game.add.text(16, 40, 'Health: ' + config.player.health, { font: '18px Arial', fill: '#ffffff' });
		guiConsole.add(this.healthText);
	};

	LevelState.prototype.update = function() {
		if(!this.gameOver) {

			this.sectorManager.checkTerrainCollision(this.platforms);
			this.sectorManager.setActive(game.camera.x + (stage.width/2));

			var sector = this.sectorManager.activeSector;
			sector.enemies.update({ player: this.player.sprite });

			this.checkCollisions(sector);

			this.checkGameInput();
			this.setPlayerAnimations();
		}
	};
	
	LevelState.prototype.checkCollisions = function(sector) {
		if(!this.gameOver) {
			this.player.checkTerrainCollision(this.platforms);

			this.checkObjectCollision(sector.enemies.collection, this.enemyCollision);
			this.checkObjectCollision(sector.bonuses.collection, this.bonusCollision);
		}
	};

	LevelState.prototype.checkObjectCollision = function(views, callback) {
		// trace('checkObjectCollision, views = ');
		// trace(views);
		for(var i = 0; i < views.length; i++) {
			// trace('views['+i+'].active = ');
			// trace(views[i].active);
			if(views[i].active) {
				// trace('views['+views[i].name+'].sprite = ');
				// trace(views[i].sprite);

				// game.physics.collide(views[i].sprite, this.platforms);
				game.physics.overlap(this.player.sprite, views[i].sprite, callback, null, this);
			}
		}
	};

	LevelState.prototype.enemyCollision = function(player, sprite) {
		var enemy = this.sectorManager.activeSector.enemies.collection[sprite.idx];

		trace('enemyCollision, sprite =');
		trace(sprite);
		trace('\tenemy =');
		trace(enemy);
		// trace('this.player overlap x/y = ' + sprite.body.overlapX + '/' + sprite.body.overlapY);
		// trace(sprite);
		// trace(this.player.sprite.body.touching);
		if(!this.player.sprite.body.touching.down) {
			// trace('this.player bottom touching enemy top, this.player touching: ');
			// trace(this.player.sprite.body.touching);
			// trace('\tenemy touching: ');
			// trace(sprite.body.touching);
			this.player.sprite.body.velocity.y = -config.player.jumpHeight/2;
			this.playerJump();
			// keke damages enemy
			// killEnemy(sprite);
			enemy.health -= config.player.damage;
			if(enemy.health <= 0) {
				// killEnemy(sprite);
				this.killEnemy(enemy);
			}
		} else {
			// trace('enemy damage this.player, this.player touching');
			// trace(this.player.sprite.body.touching);
			// trace('\tenemy touching');
			// trace(sprite.body.touching);
			// enemy damages keke
			config.player.health -= enemy.damage;
			healthText.content = 'Health: ' + config.player.health;
			if(config.player.health <= 0) {
				this.close();
			}
		}

	};

	LevelState.prototype.killEnemy = function(enemy) {
		// trace('killEnemy');
		this.score += enemy.score;
		this.scoreText.content = 'Score: ' + this.score;

		enemy.kill();
	};

	LevelState.prototype.bonusCollision = function(player, sprite) {
		// trace('bonusCollision, sprite = ');
		// trace(sprite);
		var bonus = this.sectorManager.activeSector.bonuses.collection[sprite.idx];
		// trace('bonus = ');
		// trace(bonus);
		sprite.kill();
		bonus.active = false; 

	    this.score += bonus.get('score');
	    this.scoreText.content = 'Score: ' + score;

		config.player.health += bonus.get('health');
		this.healthText.content = 'Health: ' + config.player.health;
	};

	LevelState.prototype.checkGameInput = function() {
		if(!this.gameOver) {
			if(this.controls.isDown(ControlButtonTypes.QUIT)) {
				this.close();
			} else {
			 //  Reset the this.players velocity (movement)
				this.player.sprite.body.velocity.x = 0;
				var velX = 0;
				if (this.cursors.left.isDown || this.controls.isDown(ControlButtonTypes.LEFT)) {
					velX = -config.player.speed;
					config.player.facingForward = false;
				}
				else if (this.cursors.right.isDown || this.controls.isDown(ControlButtonTypes.RIGHT)) {
					velX = config.player.speed;
					config.player.facingForward = true;
				}

				if(this.player.sprite.body.touching.down) {
					config.player.jumping = false;
				}
				//  Allow the this.player to jump if they are touching the ground.
				if(this.cursors.up.isDown || this.controls.isDown(ControlButtonTypes.UP)) {
					if(this.player.sprite.body.touching.down && !config.player.justJumped) {
						this.player.sprite.body.velocity.y = -config.player.jumpHeight;
						config.player.jumping = true;
					}
				} 
				if(this.player.sprite.body.touching.down && config.player.jumpButtonPressed && !config.player.justJumped) {
					this.player.sprite.body.velocity.y = -config.player.jumpHeight;
					config.player.jumping = true;
					config.player.jumpButtonPressed = false;
				}
				this.player.sprite.body.velocity.x = velX;
			}
		}
	};

	LevelState.prototype.setPlayerAnimations = function() {
		// trace('this.player vel x = ' + this.player.sprite.body.velocity.x);
		if(config.player.jumping) {
			this.playerJump();
		} else {
			if(this.player.sprite.body.velocity.x > 0 && this.player.sprite.body.touching.down) {
				if(this.player.currentAnimation !== 'runR') {
			 		// trace('play run right');
					this.player.play('runR', 13, true);
					this.player.currentAnimation = 'runR';
					config.player.facingForward = false;
				}
			} else if(this.player.sprite.body.velocity.x < 0 && this.player.sprite.body.touching.down) {
				if(this.player.currentAnimation !== 'runL') {
			 		// trace('play run left');
					this.player.play('runL', 13, true);
					this.player.currentAnimation = 'runL';
					config.player.facingForward = false;
				}
			} else if(this.player.sprite.body.velocity.x === 0) {
				this.player.stop();
				if(config.player.facingForward) {
					this.player.frame = 0;
					this.player.stop();
					this.player.currentAnimation = 'idleR';
				} else {
					this.player.stop();
					this.player.frame = 1;
					this.player.currentAnimation = 'idleL';
				}
			}
		}
	};

	LevelState.prototype.playerJump = function() {
		// trace('jumping');
		// jumping
		if(config.player.facingForward) {
			// trace('playing jump r animation');
			// this.player.play('jumpR', 1, false);
			this.player.stop();
			this.player.frame = 9;
			// this.player.frame = 2;
			this.player.currentAnimation = 'jumpR';
		} else {
			// this.player.play('jumpL', 1, false);
			this.player.stop();
			this.player.frame = 24;
			// this.player.frame = 3;
			this.player.currentAnimation = 'jumpL';
		}

	};

	LevelState.prototype.close = function() {
		
	};
	
	return LevelState;
})();
