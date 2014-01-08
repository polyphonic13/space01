var gameOver = false;
var platforms;
var sectorManager;
var controls;
var cursors;
// phaser object
var player; 

var score = 0;
var scoreText;

var quitButton;

var game = new Phaser.Game(stage.width, stage.height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var levelOne = new Polyworks.LevelState({});	
// });
// var quitState = new Phaser.State();
// game.state.add('menu', menuState, false);
game.state.add('level1', levelOne, true);
// game.state.add('quit', quitState, false);

// game.state.start('level0');
// game.switchState(levelOne);

function preload() {
	trace('preload');
	// images
	// var images = config.images;
	// trace('preload images');
	// for(key in images) {
	// 	game.load.image(key, images[key]);
	// }
	// var sprites = config.sprites;
	// trace('preload sprites');
	// for(key in sprites) {
	// 	// trace('\t' + key + ', width = ' + sprites[key].width + ', height = ' + sprites[key].height + ', frames = ' + sprites[key].frames);
	// 	game.load.spritesheet(key, sprites[key].url, sprites[key].width, sprites[key].height, sprites[key].frames);
	// }
	// 
	// // keyboard buttons
	// cursors = game.input.keyboard.createCursorKeys();
}

function create() {
	// game.world.setBounds(config.world.x, config.world.y, config.world.width, config.world.height);
	// createPlayer();
	// createControls();
	// createGui();
}

function createControls() {
	// CONTROLS
	key1 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
	key1.onDown.add(quit, this);

	controls = new Polyworks.ControlButtonCollection(config.controls);
	
 }

function createGui() {
   //  The score
	var guiConsole = game.add.group(null);
    scoreText = game.add.text(16, 15, 'Score: 0', { font: '18px Arial', fill: '#ffffff' });
	guiConsole.add(scoreText);

	healthText = game.add.text(16, 40, 'Health: ' + config.player.health, { font: '18px Arial', fill: '#ffffff' });
	guiConsole.add(healthText);
}

function update() {
	// if(!gameOver) {
	// 
	// 	sectorManager.checkTerrainCollision(platforms);
	// 	sectorManager.setActive(game.camera.x + (stage.width/2));
	// 	
	// 	var sector = sectorManager.activeSector;
	// 	sector.enemies.update({ player: player });
	// 
	// 	checkCollisions(sector);
	// 
	// 	checkGameInput();
	// 	setPlayerAnimations();
	// }
}

function checkCollisions(sector) {
	if(!gameOver) {
		game.physics.collide(player, platforms);

		checkObjectCollision(sector.enemies.collection, enemyCollision);
		checkObjectCollision(sector.bonuses.collection, bonusCollision);
	}
}

function checkObjectCollision(views, callback) {
	// trace('checkObjectCollision, views = ');
	// trace(views);
	for(var i = 0; i < views.length; i++) {
		// trace('views['+i+'].active = ');
		// trace(views[i].active);
		if(views[i].active) {
			// trace('views['+views[i].name+'].sprite = ');
			// trace(views[i].sprite);

			// game.physics.collide(views[i].sprite, platforms);
			game.physics.overlap(player, views[i].sprite, callback, null, this);
		}
	}
}

function enemyCollision(player, sprite) {
	var enemy = sectorManager.activeSector.enemies.collection[sprite.idx];
	
	// trace('enemyCollision');
	// trace(sprite);
	// trace('player overlap x/y = ' + sprite.body.overlapX + '/' + sprite.body.overlapY);
	// trace(sprite);
	// trace(player.body.touching);
	if(!player.body.touching.down) {
		// trace('player bottom touching enemy top, player touching: ');
		// trace(player.body.touching);
		// trace('\tenemy touching: ');
		// trace(sprite.body.touching);
		player.body.velocity.y = -config.player.jumpHeight/2;
		playerJump();
		// keke damages enemy
		// killEnemy(sprite);
		enemy.health -= config.player.damage;
		if(enemy.health <= 0) {
			// killEnemy(sprite);
			killEnemy(enemy);
		}
	} else {
		// trace('enemy damage player, player touching');
		// trace(player.body.touching);
		// trace('\tenemy touching');
		// trace(sprite.body.touching);
		// enemy damages keke
		config.player.health -= enemy.damage;
		healthText.content = 'Health: ' + config.player.health;
		if(config.player.health <= 0) {
			quit();
		}
	}

}

function killEnemy(enemy) {
	// trace('killEnemy');
	score += enemy.score;
	scoreText.content = 'Score: ' + score;

	enemy.kill();
}

function bonusCollision (player, sprite) {
	// trace('bonusCollision, sprite = ');
	// trace(sprite);
	var bonus = sectorManager.activeSector.bonuses.collection[sprite.idx];
	// trace('bonus = ');
	// trace(bonus);
	sprite.kill();
	bonus.active = false; 
	
    score += bonus.get('score');
    scoreText.content = 'Score: ' + score;

	config.player.health += bonus.get('health');
	healthText.content = 'Health: ' + config.player.health;
}

function checkGameInput() {
	if(!gameOver) {
		if(controls.isDown(ControlButtonTypes.QUIT)) {
			quit();
		} else {
		 //  Reset the players velocity (movement)
			player.body.velocity.x = 0;
			var velX = 0;
			if (cursors.left.isDown || controls.isDown(ControlButtonTypes.LEFT)) {
				velX = -config.player.speed;
				config.player.facingForward = false;
			}
			else if (cursors.right.isDown || controls.isDown(ControlButtonTypes.RIGHT)) {
				velX = config.player.speed;
				config.player.facingForward = true;
			}

			if(player.body.touching.down) {
				config.player.jumping = false;
			}
			//  Allow the player to jump if they are touching the ground.
			if(cursors.up.isDown || controls.isDown(ControlButtonTypes.UP)) {
				if(player.body.touching.down && !config.player.justJumped) {
					player.body.velocity.y = -config.player.jumpHeight;
					config.player.jumping = true;
					config.player.justJumped = false;
					// setTimeout(resetJump, 1500);
				}			
			} 
			if(player.body.touching.down && config.player.jumpButtonPressed && !config.player.justJumped) {
				player.body.velocity.y = -config.player.jumpHeight;
				config.player.jumping = true;
				config.player.justJumped = true;
				config.player.jumpButtonPressed = false;
			}
			player.body.velocity.x = velX;
		}
	}
}

function resetJump() {
	config.player.justJumped = false;
}

function setPlayerAnimations() {
	// trace('player vel x = ' + player.body.velocity.x);
	if(config.player.jumping) {
		playerJump();
	// } else if(!player.body.touching.down) {
	// 	trace('falling');
	// 	if(config.player.facingForward) {
	// 		// player.frame = 4;
	// 		player.frame = 9;
	// 		config.player.currentAnimation = 'fallingR';
	// 	} else {
	// 		// player.frame = 5;
	// 		player.frame = 24;
	// 		config.player.currentAnimation = 'fallingL';
	// 	}
	} else {
		if(player.body.velocity.x > 0 && player.body.touching.down) {
			if(config.player.currentAnimation !== 'runR') {
		 		// trace('play run right');
				player.animations.play('runR', 13, true);
				config.player.currentAnimation = 'runR';
				config.player.facingForward = false;
			}
		} else if(player.body.velocity.x < 0 && player.body.touching.down) {
			if(config.player.currentAnimation !== 'runL') {
		 		// trace('play run left');
				player.animations.play('runL', 13, true);
				config.player.currentAnimation = 'runL';
				config.player.facingForward = false;
			}
		} else if(player.body.velocity.x === 0) {
			player.animations.stop();
			if(config.player.facingForward) {
				player.frame = 0;
				player.animations.stop();
				config.player.currentAnimation = 'idleR';
			} else {
				player.animations.stop();
				player.frame = 1;
				config.player.currentAnimation = 'idleL';
			}
		}
	}
}

function playerJump() {
	// trace('jumping');
	// jumping
	if(config.player.facingForward) {
		// trace('playing jump r animation');
		// player.animations.play('jumpR', 1, false);
		player.animations.stop();
		player.frame = 9;
		// player.frame = 2;
		config.player.currentAnimation = 'jumpR';
	} else {
		// player.animations.play('jumpL', 1, false);
		player.animations.stop();
		player.frame = 24;
		// player.frame = 3;
		config.player.currentAnimation = 'jumpL';
	}
	
}

function quit() {
	trace('quit');
	gameOver = true;
    
	// clearSectors();
	// GameController.destroy();
	game.destroy();
	messageTest = game.add.text(stage.width/2, stage.height/2, 'Game Over', { font: '32px Arial', fill: '#ffffff' });
}
