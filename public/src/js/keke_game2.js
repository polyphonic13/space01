var stage = {
	// width: 800,
	// height: 500
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight
};
var platforms;
var cursors;
var player;
var playerConfig = {
	bounce: 0.2,
	speed: 150,
	jumpHeight: 350,
	jumping: false,
	currentAnimation: '',
	facingForward: true
};

var gravity = 15;

var lollipops;
var score = 0;
var scoreText;

var quitButton;

var game = new Phaser.Game(stage.width, stage.height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('sky', 'images/night_sky.jpg');
  game.load.image('mountains', 'images/hills03_grey.png');
  game.load.image('treesBack', 'images/trees_back01.png');
  game.load.image('treesFore', 'images/trees_fore01.png');
  game.load.image('platform', 'images/platform.png');
  game.load.image('grass1', 'images/grass01.png');
  game.load.image('grass2', 'images/grass02.png');
  game.load.image('lollipop', 'images/lollipop.png');
  game.load.image('quitButton', 'images/quit_button.png');

  game.load.spritesheet('keke', 'images/keke_character2.png', 76, 128, 35);

  cursors = game.input.keyboard.createCursorKeys();
}

function create() {
	var sky = game.add.sprite(0, 0, 'sky');
	sky.fixedToCamera = true;
	
	game.add.sprite(0, 0, 'mountains');
	game.add.sprite(0, (stage.height - 490), 'treesBack');
	game.add.sprite(0, 0, 'treesFore');
	game.add.sprite(2048, 0, 'mountains');
	game.add.sprite(2048, (stage.height - 490), 'treesBack');
	game.add.sprite(2048, 0, 'treesFore');

	game.add.sprite(0, (stage.height - 200), 'grass1');
	game.add.sprite(2048, (stage.height - 200), 'grass2');
	
  game.world.setBounds(0, 0, 4096, stage.height);

  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = game.add.group();

	var ground = platforms.create(0, game.world.height - 20, 'platform');
	ground.scale.setTo(8, 1);
	ground.body.immovable = true;
  
	ground = platforms.create(2048, game.world.height - 20, 'platform');
	ground.scale.setTo(8, 1);
  	ground.body.immovable = true;

  // var ground2 = platforms.create(2048, game.world.height - 200, 'grass2');
  // ground2.body.immovable = true;

  //  Now let's create two ledges
   var ledge = platforms.create(500, (stage.height - 80), 'platform');
   ledge.body.immovable = true;

   ledge = platforms.create(800, (stage.height - 130), 'platform');
   ledge.body.immovable = true;

   ledge = platforms.create(1100, (stage.height - 180), 'platform');
   ledge.body.immovable = true;


  player = game.add.sprite((stage.width/2 - 76/2), (stage.height - 148), 'keke');
  player.anchor.setTo(0.5, 0.5);

	player.animations.add('idleR', [0], 14);
	player.animations.add('idleL', [1], 14);
	player.animations.add('runR', [7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19], 14);
	player.animations.add('runL', [21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33], 14);
	player.animations.add('jumpR', [2], 14);
	player.animations.add('jumpL', [3], 14);
		
	//  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = playerConfig.bounce;
  player.body.gravity.y = gravity;
  player.body.collideWorldBounds = true;
	
  game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);

    //  Finally some lollipops to collect
    lollipops = game.add.group();

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 28; i++)
    {
        //  Create a lollipop inside of the 'lollipops' group
        var lollipop = lollipops.create((i+2) * 175, 0, 'lollipop');

        //  Let gravity do its thing
        lollipop.body.gravity.y = gravity;

        //  This just gives each lollipop a slightly random bounce value
        lollipop.body.bounce.y = 0.15 + Math.random() * 0.2;
    }

	// CONTROLS
 key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
  key1.onDown.add(quit, this);

  // Init game controller with left thumb stick
   GameController.init({
        left: {
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
            // We're not using anything on the right for this demo, but you can add buttons, etc.
            // See https://github.com/austinhallock/html5-virtual-game-controller/ for examples.
            // type: 'none'
			position: { left: stage.width - 10, top: stage.height - 50 },
	      buttons: [
	        { 
				radius: 18,
	            label: 'Quit',
				fontSize: 9, 
				touchStart: function() { 
	                // do something 
					trace('right controller button touchstart');
					quit();
	            } 
	        }, 
	        false, false, false
	        ] 
        }
    });
    
    // This is an ugly hack to get this to show up over the Phaser Canvas
    // (which has a manually set z-index in the example code) and position it in the right place,
    // because it's positioned relatively...
    // You probably don't need to do this in your game unless your game's canvas is positioned in a manner
    // similar to this example page, where the canvas isn't the whole screen.
    $('canvas').last().css('z-index', 20);
    $('canvas').last().offset( $('canvas').first().offset() );

   //  The score
	var guiConsole = game.add.group(null);
	// scoreText.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '28px', fill: '#fff' });
	guiConsole.add(scoreText);

    // game.input.addPointer();
    // game.input.addPointer();
    // game.input.addPointer();
    // game.input.addPointer();
 	//    quitButton = game.add.button(stage.width - 50, stage.height - 50, 'quitButton', quit, this);
 	//     quitButton.inputEnabled = true;
 	// quitButton.input.pointerOver.id = 1;
 	// quitButton = game.add.sprite(stage.width - 50, stage.height - 50, 'quitButton');
    // quitButton.input.addPointer();
	// quitButton.events.onInputDown.add(isTouchingButton, this);
	// onInputOver
	// onInputOut
	// onInputDown
	// onInputUp
	// onDragStart
	// onDragStop
	// quitButton.input.start();
	// guiConsole.add(quitButton);

	// quitButton.events.onInputDown.add(isTouchingQuit, this);
	// quitButton.events.onInputOver.add(isOverQuit, this);
	// game.input.touch.callbackContext = this;
	// game.input.touch.touchStartCallback = this.onTouchDown;
 }

function isTouchingButton(button, pointer) {
	trace('isTouchingButton');
	trace(button);
	trace(pointer);
	quit();
}

function onTouchDown(event) {
	trace('isTouchingQuit');
	trace(event);
	quit();
}

function isOverQuit(button, pointer) {
	trace('isOverQuit');
}

function update() {
	// if (quitButton.input.pointerOver()) {
	// 	trace('quit button pointOver');
	// }
	//     game.debug.renderPointer(game.input.mousePointer);
	//     game.debug.renderPointer(game.input.pointer1);
	// 
	// if (game.input.pointer1.isDown) {
	// 	trace('pointer1 is down');
	// }
	// if(quitButton.input.activePointer.isDown) {
	// 	trace('quit button activePointer is down');
	// }
	// if(game.input.activePointer.isDown) {
	// 	trace('game activePointer is down');
	// }
	// if(quitButton.input.pointerDown(game.input.activePointer.id)) {
	// 	trace('quit button pointer down');
	// 	quit();
	// } else {
		checkCollisions();
		checkGameInput();
	// }
}

function checkCollisions() {
	
	game.physics.collide(player, platforms);
	game.physics.collide(lollipops, platforms);
    game.physics.overlap(player, lollipops, collectLollipop, null, this);
  
}

function checkGameInput() {

 //  Reset the players velocity (movement)
   player.body.velocity.x = 0;

   if (cursors.left.isDown)
   {
       //  Move to the left
       player.body.velocity.x = -playerConfig.speed;

		// trace('play run left');
		//        player.animations.play('runL');
			playerConfig.facingForward = false;
   }
   else if (cursors.right.isDown)
   {
       //  Move to the right
       player.body.velocity.x = playerConfig.speed;

		// trace('play run right');
       // player.animations.play('runR');
			playerConfig.facingForward = true;
   }

   //  Allow the player to jump if they are touching the ground.
	if (cursors.up.isDown && player.body.touching.down)
	{
		player.body.velocity.y = -playerConfig.jumpHeight;
		playerConfig.jumping = true;
	} else {
		playerConfig.jumping = false;
	}

   // Check key states every frame.
   if (game.input.joystickLeft) {
		var jl = game.input.joystickLeft;
		if(jl.normalizedX > 0) {
			player.body.velocity.x = playerConfig.speed;
			playerConfig.facingForward = true;
		} else if(jl.normalizedX < 0) {
			player.body.velocity.x = -playerConfig.speed;
			playerConfig.facingForward = false;
		}

		if(player.body.touching.down) {
			if(jl.normalizedY > 0.5) {
				player.body.velocity.y = -playerConfig.jumpHeight;
				playerConfig.jumping = true;
			}
		} else {
			playerConfig.jumping = false;
			
		}
   }
 	setPlayerAnimations();
}

function setPlayerAnimations() {
	// trace('player vel x = ' + player.body.velocity.x);
	if(playerConfig.jumping) {
		trace('jumping');
		// jumping
		if(playerConfig.facingForward) {
			// player.animations.play('jumpR', 1, false);
			player.frame = 9;
			// player.frame = 2;
			playerConfig.currentAnimation = 'jumpR';
		} else {
			// player.animations.play('jumpL', 1, false);
			player.frame = 24;
			// player.frame = 3;
			playerConfig.currentAnimation = 'jumpL';
		}
	} else if(!player.body.touching.down) {
		trace('falling');
		if(playerConfig.facingForward) {
			// player.frame = 4;
			player.frame = 9;
			playerConfig.currentAnimation = 'fallingR';
		} else {
			// player.frame = 5;
			player.frame = 24;
			playerConfig.currentAnimation = 'fallingL';
		}
	} else {
		if(player.body.velocity.x > 0) {
			if(playerConfig.currentAnimation !== 'runR') {
		 		trace('play run right');
				player.animations.play('runR', 10, true);
				playerConfig.currentAnimation = 'runR';
				playerConfig.facingForward = false;
			}
		} else if(player.body.velocity.x < 0) {
			if(playerConfig.currentAnimation !== 'runL') {
		 		trace('play run left');
				player.animations.play('runL', 10, true);
				playerConfig.currentAnimation = 'runL';
				playerConfig.facingForward = false;
			}
		} else if(player.body.velocity.x === 0) {
			player.animations.stop();
			if(playerConfig.facingForward) {
				playerConfig.currentAnimation = 'idleR';
				player.frame = 0;
			} else {
				playerConfig.currentAnimation = 'idleL';
				player.frame = 1;
			}
		}
	}
}

function collectLollipop (player, lollipop) {
    
    // Removes the lollipop from the screen
    lollipop.kill();

    //  Add and update the score
    score += 10;
    scoreText.content = 'Score: ' + score;

}
function quit() {
	trace('quit');
	GameController.destroy();
	game.destroy();
}
