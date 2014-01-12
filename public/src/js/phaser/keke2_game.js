var gameOver = false;
var platforms;
var cursors;
// phaser object
var player; 

var score = 0;
var scoreText;

var quitButton;

var game = new Phaser.Game(config.world.width, config.world.height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	// images
	game.load.image('sky', 'images/night_sky.jpg');
	game.load.image('mountains', 'images/hills03_grey.png');
	game.load.image('treesBack', 'images/trees_back01.png');
	game.load.image('treesFore', 'images/trees_fore01.png');
	game.load.image('platform', 'images/platform.png');
	game.load.image('grass1', 'images/grass01.png');
	game.load.image('grass2', 'images/grass02.png');
	game.load.image('lollipop', 'images/lollipop.png');
	game.load.image('quitButton', 'images/quit_button.png');

	// spritesheets
	game.load.spritesheet('caterpillar01', 'images/caterpillar01a_sprite.png', 104, 22, 12);
	game.load.spritesheet('keke', 'images/keke_character2.png', 76, 128, 35);

	// keyboard buttons
	cursors = game.input.keyboard.createCursorKeys();
}

function create() {
	game.world.setBounds(0, 0, 4096, config.world.height);

	createScenery();
	createTerrain();
 	createPlayer();
	createSectors();
	createControls();
	createGui();
}

function createScenery() {
	var sky = game.add.sprite(0, 0, 'sky');
	sky.width = config.world.width;
	sky.height = config.world.height;
	sky.fixedToCamera = true;
	
	game.add.sprite(0, 0, 'mountains');
	game.add.sprite(0, (config.world.height - 490), 'treesBack');
	game.add.sprite(0, 0, 'treesFore');
	game.add.sprite(2048, 0, 'mountains');
	game.add.sprite(2048, (config.world.height - 490), 'treesBack');
	game.add.sprite(2048, 0, 'treesFore');

	game.add.sprite(0, (config.world.height - 200), 'grass1');
	game.add.sprite(2048, (config.world.height - 200), 'grass2');
	
}

function createTerrain() {
	//  The platforms group contains the ground and the 2 ledges we can jump on
	platforms = game.add.group();

	var ground = platforms.create(0, game.world.height - 20, 'platform');
	ground.scale.setTo(8, 1);
	ground.body.immovable = true;

	ground = platforms.create(2048, game.world.height - 20, 'platform');
	ground.scale.setTo(8, 1);
  	ground.body.immovable = true;

	var ledge = platforms.create(500, (config.world.height - 75), 'platform');
	ledge.body.immovable = true;

	ledge = platforms.create(800, (config.world.height - 130), 'platform');
	ledge.body.immovable = true;

	ledge = platforms.create(1100, (config.world.height - 180), 'platform');
	ledge.body.immovable = true;

	var ledge = platforms.create(3100, (config.world.height - 75), 'platform');
	ledge.scale.setTo(0.8, 1);
	ledge.body.immovable = true;

	ledge = platforms.create(3300, (config.world.height - 130), 'platform');
	ledge.scale.setTo(0.8, 1);
	ledge.body.immovable = true;

	ledge = platforms.create(3500, (config.world.height - 180), 'platform');
	ledge.scale.setTo(0.8, 1);
	ledge.body.immovable = true;
}

function createPlayer() {
	player = game.add.sprite((config.world.width/2 - 76/2), (config.world.height - 148), 'keke');
	player.anchor.setTo(0.5, 0.5);

	player.animations.add('idleR', [0], 14);
	player.animations.add('idleL', [1], 14);
	player.animations.add('runR', [7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19], 13);
	player.animations.add('runL', [21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33], 13);
	player.animations.add('jumpR', [2], 14);
	player.animations.add('jumpL', [3], 14);
		
	//  Player physics properties.
	// player.body.setSize(30, config.player.height - 25, 0, 0); // bounding box
	player.body.bounce.y = config.player.bounce;
	player.body.gravity.y = config.world.gravity;
	player.body.collideWorldBounds = true;
	
	game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
}

function createSectors() {
	for(var i = 0; i < config.sectors.length; i++) {
		createSector(config.sectors[i]);
	}
}

function createSector(sector) {
	createEnemies(sector);
	createBonuses(sector);
}

function createEnemies(sector) {
	var group = game.add.group();
	var enemies = sector.enemies;
	var enemy;
	
	for(var i = 0; i < enemies.length; i++) {
		enemy = group.create((enemies[i].start.x + sector.bounds.start), enemies[i].start.y, enemies[i].type);
		enemy.name = enemies[i].type + '-' + i;
		enemy.idx = i;
		enemy.alive = true;
		enemy.body.gravity.y = config.world.gravity;
		enemy.body.bounce.y = 0.15 + Math.random() * 0.2;
		
		var animations = enemies[i].animations;
		for(var j = 0; j < animations.length; j++) {
			enemy.animations.add(animations[i].name, animations[i].keyFrames, animations[i].frameRate);
		}
		enemy.animations.frame = 0;
		enemies[i].gameObj = enemy;
		// trace('sector['+sector.id+'].enemies['+i+'] = ');
		// trace(sector.enemies[i].gameObj);
	}
	
	sector.enemyGroup = group;
}

function createBonuses(sector) {
	var group = game.add.group();
	var bonuses = sector.bonuses;
	var bonus;
	
	for(var i = 0; i < bonuses.length; i++) {
		bonus = group.create((bonuses[i].start.x + sector.bounds.start), bonuses[i].start.y, bonuses[i].type);
		bonus.name = bonuses[i].type + i;
		bonus.idx = i;
		bonus.alive = true;

		bonus.body.gravity.y = config.world.gravity;
		bonus.body.bounce.y = 0.15 + Math.random() * 0.2;
	}
	sector.bonusGroup = group;
}

function createControls() {
	// CONTROLS
	key1 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
	key1.onDown.add(quit, this);

  // Init game controller with left thumb stick
  // See https://github.com/austinhallock/html5-virtual-game-controller/ for examples.

	GameController.init({
        left: {
			position: { left: 75, bottom: 75 },
            type: 'joystick',
            joystick: {
                touchStart: function() {
                    // Don't need this, but the event is here if you want it.
                },
                touchMove: function(joystick_details) {
                    game.input.joystickLeft = joystick_details;
                },
                touchEnd: function() {
                    game.input.joystickLeft = null;
					
                }
            }
        },
        right: {
			position: { left: config.world.width - 130, top: config.world.height - 130 },
			buttons: [
			{ 
				radius: 50,
				label: 'Quit',
				fontSize: 18, 
				offset: {
					x: 0,
					y: -(config.world.height - 150)
				},
				touchStart: function() { 
					// trace('right controller left button touchstart');
					quit();
				} 
			}, 
			false,
			{
				radius: 50,
				label: 'Jump',
				fontSize: 18,
				offset: {
					x: 0,
					y: 0
				},
				touchStart: function() {
					// trace('right controller right button touchstart');
					config.player.jumpButtonPressed = true;
				},
				touchEnd: function() {
					// trace('right controller right button touchend');
					config.player.justJumped = false;
				}
			}, 
			false] 
        }
    });
    
    // This is an ugly hack to get this to show up over the Phaser Canvas
    // (which has a manually set z-index in the example code) and position it in the right place,
    // because it's positioned relatively...
    // You probably don't need to do this in your game unless your game's canvas is positioned in a manner
    // similar to this example page, where the canvas isn't the whole screen.
    $('canvas').last().css('z-index', 20);
    $('canvas').last().offset( $('canvas').first().offset() );

}

function createGui() {
   //  The score
	var guiConsole = game.add.group(null);
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '12px', fill: '#ffffff' });
	guiConsole.add(scoreText);

	healthText = game.add.text(16, 50, 'Health: ' + config.player.health, { fontSize: '12px', fill: '#ffffff' });
	guiConsole.add(healthText);
}

function update() {
	if(!gameOver) {
		// sectorTest(player.body.screenX); // activate / deactivate sectors based on current player position
		sectorTest(game.camera.x);
		var sector = config.sectors[config.currentSector];
		// trace('update, sector = ');
		// trace(sector);
		updateEnemies(sector.enemies);
		checkCollisions(sector);
		checkGameInput();
		setPlayerAnimations();
	}
}

function sectorTest(x) {
	// trace('sectorTest, x = ' + x + ', currentSector = ' + config.currentSector);
	var sectors = config.sectors;
	var bounds;
	for(var i = 0; i < sectors.length; i++) {
		bounds = sectors[i].bounds;
		// trace('bounds['+i+'] start/end = ' + bounds.start + '/' + bounds.end + ', x = ' + x);
		if(x > bounds.start && x < bounds.end) {
			if(config.currentSector !== i) {
				activateSector(sectors[i]);
				config.currentSector = i;
			}
		} else {
			sectors[i].active = false;
		}
	}
}

function activateSector(sector) {
	// trace('activateSector['+sector.id+'], created = ' + sector.created);
	if(!sector.created) {
		createSector(sector);
	}
	sector.active = true;
}

function updateEnemies(enemies) {
	for(var i = 0; i < enemies.length; i++) {
		if(enemies[i].gameObj.alive) {
			updateEnemy(enemies[i]);
		}
	}
}

function updateEnemy(enemy) {
	if(!gameOver) {
		// trace('updateEnemy, sector['+ config.currentSector + ']/enemy[' + enemy.id + '], alive = ' + enemy.gameObj.alive);
		// trace('enemy['+enemy.gameObj.name+'].screenX = ' + enemy.gameObj.body.screenX);
		var enemyX = enemy.gameObj.body.screenX;
		var playerX = player.body.screenX;
		// check for enemy on screen
		if(enemyX < (playerX + config.world.width/2) && enemyX > (playerX - config.world.width/2)) {
			// trace('enemy['+enemy.gameObj.name+'] activated');
			if(enemyX > (playerX + 10)) {
				if(enemy.currentAnimation !== 'walkL') {
					enemy.gameObj.animations.play('walkL', 10, true);
					enemy.currentAnimation = 'walkL';
				}
		 		// enemy.tween = game.add.tween(enemy.gameObj).to({ x: 0 }, enemy.speed, Phaser.Easing.Linear.None, true, 0, 1000, true);
				enemy.gameObj.x -= enemy.speed;
			} else if(enemyX < (playerX - 10)){
				if(enemy.currentAnimation !== 'walkR') {
					enemy.gameObj.animations.play('walkR', 10, true);
					enemy.currentAnimation = 'walkR';
				}
		 		enemy.gameObj.animations.play('walkR', 10, true);
				// enemy.tween = game.add.tween(enemy.gameObj).to({ x: player.body.x }, enemy.speed, Phaser.Easing.Linear.None, true, 0, 1000, true);
				enemy.gameObj.x += enemy.speed;
			} else {
				// enemy.tween.pause();
				enemy.gameObj.animations.stop();
				enemy.gameObj.frame = 0
				enemy.currentAnimation = '';
			}
		}
	}
}

function checkCollisions(sector) {
	if(!gameOver) {
		game.physics.collide(player, platforms);
		// game.physics.collide(sector.enemyGroup, platforms);
		// game.physics.collide(sector.bonusGroup, platforms);
		//     game.physics.overlap(player, sector.enemyGroup, bonusCollision, null, this);
		//     game.physics.overlap(player, sector.bonusGroup, enemyCollision, null, this);
		var sector = config.sectors[config.currentSector];
		checkObjectCollision(sector.enemies, enemyCollision);
		checkObjectCollision(sector.bonuses, bonusCollision);
	}
}

function checkObjectCollision(objects, callback) {
	for(var i = 0; i < objects.length; i++) {
		if(objects[i].gameObj.alive) {
			game.physics.collide(objects[i].gameObj, platforms);
			game.physics.overlap(player, objects[i].gameObj, callback, null, this);
		}
	}
}

function enemyCollision(player, enemy) {
	// trace('enemyCollision');
	// trace(enemy);
	// trace('player overlap x/y = ' + enemy.body.overlapX + '/' + enemy.body.overlapY);
	// trace(enemy);
	// trace(player.body.touching);
	if(!player.body.touching.down) {
		// trace('player bottom touching enemy top, player touching: ');
		// trace(player.body.touching);
		// trace('\tenemy touching: ');
		// trace(enemy.body.touching);
		player.body.velocity.y = -config.player.jumpHeight/2;
		playerJump();
		// keke damages enemy
		killEnemy(enemy);
	} else {
		// trace('enemy damage player, player touching');
		// trace(player.body.touching);
		// trace('\tenemy touching');
		// trace(enemy.body.touching);
		// enemy damages keke
		config.player.health -= 1;
		healthText.content = 'Health: ' + config.player.health;
		if(config.player.health <= 0) {
			quit();
		}
	}

}

function bonusCollision (player, gameObj) {

	gameObj.alive = false;
	gameObj.kill();
	
	var bonuses = getCurrentSectorProperty('bonuses');
	var bonus = bonuses[gameObj.idx];
	
    score += bonus.score;
    scoreText.content = 'Score: ' + score;

	config.player.health += bonus.health;
	healthText.content = 'Health: ' + config.player.health;
}

function checkGameInput() {
	if(!gameOver) {
	 //  Reset the players velocity (movement)
		player.body.velocity.x = 0;
		var velX = 0;
		if (cursors.left.isDown) {
			velX = -config.player.speed;
			config.player.facingForward = false;
		}
		else if (cursors.right.isDown) {
			velX = config.player.speed;
			config.player.facingForward = true;
		}

		if(player.body.touching.down) {
			config.player.jumping = false;
		}
		//  Allow the player to jump if they are touching the ground.
		if(cursors.up.isDown && player.body.touching.down && !config.player.justJumped) {
			player.body.velocity.y = -config.player.jumpHeight;
			config.player.jumping = true;
			config.player.justJumped = false;
			// setTimeout(resetJump, 1500);
		}

		// Check key states every frame.
		if (game.input.joystickLeft) {
			var jl = game.input.joystickLeft;
			if(jl.normalizedX > 0.1) {
				velX = config.player.speed;
				config.player.facingForward = true;
			} else if(jl.normalizedX < -0.1) {
				velX = -config.player.speed;
				config.player.facingForward = false;
			}

			// if(jl.normalizedY > 0.2) {
			// 	if(player.body.touching.down && !config.player.justJumped) {
			// 		player.body.velocity.y = -config.player.jumpHeight;
			// 		config.player.jumping = true;
			// 		config.player.justJumped = true;
			// 		setTimeout(resetJump, 1000);
			// 	}
			// }
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

function resetJump() {
	config.player.justJumped = false;
}

function setPlayerAnimations() {
	// trace('player vel x = ' + player.body.velocity.x);
	if(config.player.jumping) {
		playerJump();
	// } else if(!player.body.touching.down) {
	// 	// trace('falling');
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

function killEnemy(enemy) {
	// trace('killEnemey, enemy = ');
	// trace(enemy);
	enemy.alive = false;
	enemy.kill();
	
	var enemies = getCurrentSectorProperty('enemies');
	var enemy = enemies[gameObj.idx];

	score += enemy.score;
	scoreText.content = 'Score: ' + score;
}

function getCurrentSectorProperty(name) {
	return config.sectors[config.currentSector][name];
}

function quit() {
	// trace('quit');
	gameOver = true;
	// clearSectors();
	GameController.destroy();
	game.destroy();
}
