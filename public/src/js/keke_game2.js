var stage = {
	// width: 800,
	// height: 500
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight
};
var gameOver = false;
var platforms;
var cursors;
// phaser object
var player; 
// config object
var plyr = {
	width: 76,
	height: 148,
	bounce: 0.2,
	speed: 150,
	health: 100,
	damage: 5,
	jumpHeight: 350,
	jumping: false,
	justJumped: false,
	currentAnimation: '',
	facingForward: true
};

var gravity = 15;

var caterpillars;
var enemies = {};

var lollipops;

var score = 0;
var scoreText;

var quitButton;

var game = new Phaser.Game(stage.width, stage.height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

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
	game.world.setBounds(0, 0, 4096, stage.height);

	addScenery();
	addTerrain();
 	addPlayer();
	addCaterpillars();
	addLollipops();
	addControls();
	addGui();
}

function addScenery() {
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
	
}

function addTerrain() {
	//  The platforms group contains the ground and the 2 ledges we can jump on
	platforms = game.add.group();

	var ground = platforms.create(0, game.world.height - 20, 'platform');
	ground.scale.setTo(8, 1);
	ground.body.immovable = true;

	ground = platforms.create(2048, game.world.height - 20, 'platform');
	ground.scale.setTo(8, 1);
  	ground.body.immovable = true;

	var ledge = platforms.create(500, (stage.height - 75), 'platform');
	ledge.body.immovable = true;

	ledge = platforms.create(800, (stage.height - 130), 'platform');
	ledge.body.immovable = true;

	ledge = platforms.create(1100, (stage.height - 180), 'platform');
	ledge.body.immovable = true;

	var ledge = platforms.create(3100, (stage.height - 75), 'platform');
	ledge.scale.setTo(0.8, 1);
	ledge.body.immovable = true;

	ledge = platforms.create(3300, (stage.height - 130), 'platform');
	ledge.scale.setTo(0.8, 1);
	ledge.body.immovable = true;

	ledge = platforms.create(3500, (stage.height - 180), 'platform');
	ledge.scale.setTo(0.8, 1);
	ledge.body.immovable = true;
}

function addPlayer() {
	player = game.add.sprite((stage.width/2 - 76/2), (stage.height - 148), 'keke');
	player.anchor.setTo(0.5, 0.5);

	player.animations.add('idleR', [0], 14);
	player.animations.add('idleL', [1], 14);
	player.animations.add('runR', [7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19], 13);
	player.animations.add('runL', [21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33], 13);
	player.animations.add('jumpR', [2], 14);
	player.animations.add('jumpL', [3], 14);
		
	//  Player physics properties.
	// player.body.setSize(30, plyr.height - 25, 0, 0); // bounding box
	player.body.bounce.y = plyr.bounce;
	player.body.gravity.y = gravity;
	player.body.collideWorldBounds = true;
	
	game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
}

function addCaterpillars() {
   caterpillars = game.add.group();

    for (var i = 0; i < 25; i++) {
        //  Create a lollipop inside of the 'lollipops' group
		// if(i % 2) {
	        var caterpillar = caterpillars.create((i+2) * 256, stage.height - 100, 'caterpillar01');
			caterpillar.name = 'caterpillar' + i;
			// caterpillar.body.setSize(142, 60, 0, -30); // bounding box

	       //  Let gravity do its thing
	       	caterpillar.body.gravity.y = gravity;
			// caterpillar.body.immovable = true;
			// caterpillar.body.customSeparateX = true;
			// caterpillar.body.customSeparateY = true;
	        //  This just gives each lollipop a slihtly random bounce value
	        caterpillar.body.bounce.y = 0.15 + Math.random() * 0.2;

			caterpillar.animations.add('walkL', [0, 2, 4, 6, 8, 10], 10);
			caterpillar.animations.add('walkR', [1, 3, 5, 7, 9, 11], 10);
	 		caterpillar.animations.play('walkL', 10, true);

			var speed = 20000 + Math.random() * 100000;
			console.log('caterpillar[' + i + '].speed = ' + speed);
		    // tween = game.add.tween(caterpillar).to({ x: 0 }, speed, Phaser.Easing.Linear.None, true, 0, 1000, true)
		
			enemies[caterpillar.name] = {
				gameObj: caterpillar,
				tween: null,
				speed: speed
			};
		// }
    }

}

function addLollipops() {
	lollipops = game.add.group();

    for (var i = 0; i < 28; i++) {
		if(i % 3) {
	        //  Create a lollipop inside of the 'lollipops' group
	        var lollipop = lollipops.create((i+2) * 512, 0, 'lollipop');

	        //  Let gravity do its thing
	        lollipop.body.gravity.y = gravity;

	        //  This just gives each lollipop a slightly random bounce value
	        lollipop.body.bounce.y = 0.15 + Math.random() * 0.2;
		}
    }
    
}

function addControls() {
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
			position: { left: stage.width - 130, top: stage.height - 130 },
			buttons: [
			{ 
				radius: 50,
				label: 'Quit',
				fontSize: 18, 
				offset: {
					x: 0,
					y: -(stage.height - 150)
				},
				touchStart: function() { 
					trace('right controller left button touchstart');
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
					trace('right controller right button touchstart');
					plyr.jumpButtonPressed = true;
				},
				touchEnd: function() {
					trace('right controller right button touchend');
					plyr.justJumped = false;
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

function addGui() {
   //  The score
	var guiConsole = game.add.group(null);
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '12px', fill: '#ffffff' });
	guiConsole.add(scoreText);

	healthText = game.add.text(16, 50, 'Health: ' + plyr.health, { fontSize: '12px', fill: '#ffffff' });
	guiConsole.add(healthText);
}

function update() {
	if(!gameOver) {
		checkCollisions();
		checkGameInput();
		setPlayerAnimations();
		updateEnemies();
	}
}

function checkCollisions() {
	
	game.physics.collide(player, platforms);
	game.physics.collide(lollipops, platforms);
	game.physics.collide(caterpillars, platforms);
    game.physics.overlap(player, lollipops, collectLollipop, null, this);
    game.physics.overlap(player, caterpillars, collideCaterpillar, null, this);
  
}

function checkGameInput() {

 //  Reset the players velocity (movement)
   player.body.velocity.x = 0;

   if (cursors.left.isDown)
   {
       //  Move to the left
       player.body.velocity.x = -plyr.speed;

		// trace('play run left');
		//        player.animations.play('runL');
			plyr.facingForward = false;
   }
   else if (cursors.right.isDown)
   {
       //  Move to the right
       player.body.velocity.x = plyr.speed;

		// trace('play run right');
       // player.animations.play('runR');
			plyr.facingForward = true;
   }

	if(player.body.touching.down) {
		plyr.jumping = false;
	}
   //  Allow the player to jump if they are touching the ground.
	if(cursors.up.isDown && player.body.touching.down && !plyr.justJumped) {
		player.body.velocity.y = -plyr.jumpHeight;
		plyr.jumping = true;
		plyr.justJumped = true;
		setTimeout(resetJump, 1500);
	}

   // Check key states every frame.
	if (game.input.joystickLeft) {
		var jl = game.input.joystickLeft;
		if(jl.normalizedX > 0.1) {
			player.body.velocity.x = plyr.speed;
			plyr.facingForward = true;
		} else if(jl.normalizedX < -0.1) {
			player.body.velocity.x = -plyr.speed;
			plyr.facingForward = false;
		}

		// if(jl.normalizedY > 0.2) {
		// 	if(player.body.touching.down && !plyr.justJumped) {
		// 		player.body.velocity.y = -plyr.jumpHeight;
		// 		plyr.jumping = true;
		// 		plyr.justJumped = true;
		// 		setTimeout(resetJump, 1000);
		// 	}
		// }
	}

	if(player.body.touching.down && plyr.jumpButtonPressed && !plyr.justJumped) {
		player.body.velocity.y = -plyr.jumpHeight;
		plyr.jumping = true;
		plyr.justJumped = true;
		plyr.jumpButtonPressed = false;
	}
}

function resetJump() {
	plyr.justJumped = false;
}

function collideCaterpillar(player, caterpillar) {
	// trace('collideCaterpillar check, touching =');
	// trace('caterpillar = ');
	// trace(caterpillar);
	// trace('player overlap x/y = ' + caterpillar.body.overlapX + '/' + caterpillar.body.overlapY);
	// trace(caterpillar);
	// trace(player.body.touching);
	if(!player.body.touching.down) {
		// trace('player bottom touching caterpillar top, player touching: ');
		// trace(player.body.touching);
		// trace('\tcaterpillar touching: ');
		// trace(caterpillar.body.touching);
		player.body.velocity.y = -plyr.jumpHeight/2;
		playerJump();
		// keke damages caterpillar
		killCaterpillar(caterpillar);
	} else {
		// trace('caterpillar damage player, player touching');
		// trace(player.body.touching);
		// trace('\tcaterpillar touching');
		// trace(caterpillar.body.touching);
		// caterpillar damages keke
		plyr.health -= 1;
		healthText.content = 'Health: ' + plyr.health;
		if(plyr.health <= 0) {
			quit();
		}
	}

}

function killCaterpillar(caterpillar) {
	caterpillar.kill();
	
	score += 50;
	scoreText.content = 'Score: ' + score;
}

function collectLollipop (player, lollipop) {
    
    // Removes the lollipop from the screen
    lollipop.kill();

    //  Add and update the score
    score += 10;
    scoreText.content = 'Score: ' + score;

	plyr.health += 5;
	healthText.content = 'Health: ' + plyr.health;
}

function setPlayerAnimations() {
	// trace('player vel x = ' + player.body.velocity.x);
	if(plyr.jumping) {
		playerJump();
	// } else if(!player.body.touching.down) {
	// 	trace('falling');
	// 	if(plyr.facingForward) {
	// 		// player.frame = 4;
	// 		player.frame = 9;
	// 		plyr.currentAnimation = 'fallingR';
	// 	} else {
	// 		// player.frame = 5;
	// 		player.frame = 24;
	// 		plyr.currentAnimation = 'fallingL';
	// 	}
	} else {
		trace('setPlayerAnimations, player.body.touching.down = ' + player.body.touching.down);
		if(player.body.velocity.x > 0 && player.body.touching.down) {
			if(plyr.currentAnimation !== 'runR') {
		 		trace('play run right');
				player.animations.play('runR', 13, true);
				plyr.currentAnimation = 'runR';
				plyr.facingForward = false;
			}
		} else if(player.body.velocity.x < 0 && player.body.touching.down) {
			if(plyr.currentAnimation !== 'runL') {
		 		trace('play run left');
				player.animations.play('runL', 13, true);
				plyr.currentAnimation = 'runL';
				plyr.facingForward = false;
			}
		} else if(player.body.velocity.x === 0) {
			player.animations.stop();
			if(plyr.facingForward) {
				player.frame = 0;
				player.animations.stop();
				plyr.currentAnimation = 'idleR';
			} else {
				player.animations.stop();
				player.frame = 1;
				plyr.currentAnimation = 'idleL';
			}
		}
	}
}

function playerJump() {
	trace('jumping');
	// jumping
	if(plyr.facingForward) {
		// trace('playing jump r animation');
		// player.animations.play('jumpR', 1, false);
		player.animations.stop();
		player.frame = 9;
		// player.frame = 2;
		plyr.currentAnimation = 'jumpR';
	} else {
		// player.animations.play('jumpL', 1, false);
		player.animations.stop();
		player.frame = 24;
		// player.frame = 3;
		plyr.currentAnimation = 'jumpL';
	}
	
}

function updateEnemies() {
	for(var key in enemies) {
		updateEnemy(enemies[key]);
	}
}

function updateEnemy(enemy) {
	if(!gameOver) {
		if(enemy.gameObj.body.x > player.body.x + 50) {
			enemy.gameObj.animations.play('walkL', 10, true);
	 		enemy.tween = game.add.tween(enemy.gameObj).to({ x: 0 }, enemy.speed, Phaser.Easing.Linear.None, true, 0, 1000, true);
		} else if(enemy.gameObj.body.x < player.body.x - 50){
	 		enemy.gameObj.animations.play('walkR', 10, true);
			enemy.tween = game.add.tween(enemy.gameObj).to({ x: stage.width }, enemy.speed, Phaser.Easing.Linear.None, true, 0, 1000, true);
		} else {


		}
	}
}


function removeEnemies() {
	for(var key in enemies) {
		if(enemies[key].tween) {
			enemies[key].tween.pause();
		}
		enemies[key].gameObj.destroy();
		
	}
}

function quit() {
	trace('quit');
	gameOver = true;
	removeEnemies();
	GameController.destroy();
	game.destroy();
}
