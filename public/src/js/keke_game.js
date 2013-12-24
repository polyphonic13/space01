"use strict";

var keke,
	ground,
	animationToPlay,
	playerMovementLayers,
	controlsLayer,
	joystick,
	joystickText,
	jumpButton,
	quitButton,
	scrollingLayers,
	platformLayer,
	previousCollisionId = '',
    keys = {},
    friction = 0.5,
    gravity = 0.5,
	previousVelX = 0,
	jumpKeyDepressed = false,
	playing = false,
	won = false
		
function init() {
	// STAGE
	stage = new Kinetic.Stage({
		container: 'container',
		width: stageConfig.width,
		height: stageConfig.height
	});

	// STAGE BACKGROUND
	var stageBgLayer = new Kinetic.Layer();
	var stageBgImage = new ImageLayer(gameConfig.stageBg);
	stageBgImage.setStage(stage);

	// CONTROLS
	controlsLayer = new Kinetic.Layer();
	
	var joystickStartX = 80;
	var joystickStartY = stageConfig.height - 60;
	joystick = new Joystick({ 
		layer: controlsLayer,
		startX: joystickStartX,
		startY: joystickStartY
	});
	
	controlsLayer.on(JoystickStates.REST, function() {
		_onJoystickRest();
	});
	
	var jumpBtnX = stageConfig.width - 80;
	var jumpBtnY = stageConfig.height - 60;
	jumpButton = new ControlButton({
		layer: controlsLayer,
		x: jumpBtnX,
		y: jumpBtnY
	});

	var textLayer = new Kinetic.Layer();
	// joystickText = new Kinetic.Text({
	// 	x: 20,
	// 	y: 20,
	//        text: 'joystick postiion: ',
	//         fontSize: 18,
	//         fontFamily: 'Calibri',
	//         fill: 'white'
	// });
	// textLayer.add(joystickText);

	scrollingLayers = new ScrollingLayers(gameConfig.scrollingLayers);
	scrollingLayers.setStage(stage);

	// PLAYER MOVEMENT BG LAYERS
	playerMovementLayers = new ScrollingLayers(gameConfig.playerMovementLayers);
	playerMovementLayers.setStage(stage);
	
	// GROUND
	ground = new RectsLayer(gameConfig.ground);
	ground.setStage(stage);
	
	// PLAYER
	keke = new SpritePlayer(gameConfig.player);
	keke.setStage(stage);
	
	// STAGE FRAME
	var stageFrame = new RectsLayer(gameConfig.stageFrame);
	stageFrame.setStage(stage);
	
	stage.add(controlsLayer);
	stage.add(textLayer);

	$(window).keydown(function(e) {
		keydownHandler(e);
	});
	$(window).keyup(function(e) {
		keyupHandler(e);
	});
	playing = true;
	update();
}

function update() {
	checkInput();
	
    keke.velX *= friction;
	keke.velY += gravity;
	
	keke.grounded = false;
	
	detectCollisions();
	
    if(keke.grounded && !keke.jumping) {
         keke.velY = 0;
    }

	// horizontal movement
	keke.position += keke.velX;
	if(keke.position < gameConfig.level.minX && keke.position > gameConfig.level.maxX) {
		// trace('keke.position = ' + keke.position);
		keke.playAnimation(animationToPlay);
		playerMovementLayers.moveByVelocity(keke.velX, 0);
	} else {
		trace('bounds reached');
		if(keke.facingForward) {
			keke.playAnimation('idleR');
		} else {
			keke.playAnimation('idleL');
		}
	}

	// vertical movement
	keke.move(0, keke.velY);

	// layer movement
	scrollingLayers.moveX();
	
	stage.draw();
	
	if(playing) {
		requestAnimFrame(update);
	}
}

function checkInput() {
	    if (keys[ControlKeys.UP] || jumpButton.getWasPressed()) {
	        // up arrow or space
	        if (!keke.jumping && keke.grounded && !jumpKeyDepressed) {
	            keke.jumping = true;
				keke.justJumped = true;
	            keke.grounded = false;
				jumpKeyDepressed = true;
	            keke.velY = -keke.speed * 2;
				if(keke.facingForward) {
					animationToPlay = 'jumpR';
				} else {
					animationToPlay = 'jumpL';
				}
				trace('\tpassed jump conditional, velY = ' + keke.velY);
	       }
			jumpButton.setWasPressed(false);
	    }
		previousVelX = keke.velX;
//		trace('checkInput, forward = ' + joystick.getForward() + ', reverse = ' + joystick.getReverse() + ', rest = ' + joystick.getRest());
	    if (keys[ControlKeys.LEFT] || joystick.getForward()) {
	        // right arrow
	
	        if (keke.velX < keke.speed) {
				keke.velX++;
				if(!keke.jumping) {
					if(keke.getCurrentAnimation() !== 'runL') {
						animationToPlay = 'runL';
					}
				} else {
					animationToPlay = 'jumpL';
				}
			}
			keke.facingForward = false;
		} else if (keys[ControlKeys.RIGHT] || joystick.getReverse()) {         // left arrow         
			if (keke.velX > -keke.speed) {
	    		keke.velX--;
				if(!keke.jumping) {
					if(keke.getCurrentAnimation() !== 'runR') {
						animationToPlay = 'runR';
					}
				} else {
					animationToPlay = 'jumpR';
				}
	        }
			keke.facingForward = true;
		} else if(!keke.jumping) {
			if(keke.facingForward) {
				animationToPlay = 'idleR';
			} else {
				animationToPlay = 'idleL';
			}
		}
		// joystickText.setText('joystick postion: ' + joystick.getX() + '/' + joystick.getY() + ', start: ' + joystick.getStartX() + '/' + joystick.getStartY() + ', forward = ' + joystick.getForward() + ', reverse = ' + joystick.getReverse());
}

function detectCollisions() {

	var col = collisionCheck(keke.getHitArea(), ground.collection[0].attrs); // check for floor collision

    if (col.direction === Directions.LEFT || col.direction === Directions.RIGHT) {
        keke.velX = 0;
        keke.jumping = false;
	} else if (col.direction === Directions.BOTTOM) {
		if(keke.justJumped) {
			keke.justJumped = false;
		} else {
	        keke.grounded = true;
	        keke.jumping = false;
			jumpKeyDepressed = false;
		}
	} else if (col.direction === Directions.TOP) {
        keke.velY *= -1;
    }

	// previousCollisionId = col.id;
	// trace('detectCollisions, keke.grounded = ' + keke.grounded + ', col.direction = ' + col.direction);
}

function collisionCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        collision = {
			id: '',
			direction: ''
		};

	// trace('collisionCheck\n\tvX = ' + vX + ', vY = ' + vY + '\n\thWidths = ' + hWidths + ', hHeights = ' + hHeights);
	// if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         
		var oX = hWidths - Math.abs(vX),             
			oY = hHeights - Math.abs(vY);
	
		if (oX >= oY) {
            if (vY > 0) {
                collision.direction = Directions.TOP;
                shapeA.y += oY;
				collision.id = shapeB.id;
            } else {
                collision.direction = Directions.BOTTOM;
                shapeA.y -= oY;
				collision.id = shapeB.id;
            }
        } else {
            if (vX > 0) {
                collision.direction = Directions.LEFT;
                shapeA.x += oX;
				collision.id = shapeB.id;
            } else {
                collision.direction = Directions.RIGHT;
                shapeA.x -= oX;
				collision.id = shapeB.id;
            }
        }
 		// trace('\n\toX = ' + oX + ', oY = ' + oY);
    }
    return collision;
}

function keydownHandler(e) {
	switch(e.which) {
		case ControlKeys.UP:
		keys[ControlKeys.UP] = true;
		break;

		case ControlKeys.LEFT:
		keys[ControlKeys.LEFT] = true;
		break;

		case ControlKeys.RIGHT:
		keys[ControlKeys.RIGHT] = true;
		break;

		case ControlKeys.START:
		start();
		break;
		
		case ControlKeys.QUIT: 
		if(playing) {
			quit();
		}
		default: 
		break;
	}
}

function keyupHandler(e) {
	switch(e.which) {
		case ControlKeys.LEFT:
		keys[ControlKeys.LEFT] = false;
		animationToPlay = 'idleL';
		break;

		case ControlKeys.RIGHT:
		keys[ControlKeys.RIGHT] = false;
		animationToPlay = 'idleR';
		break;

		case ControlKeys.UP:
		keys[ControlKeys.UP] = false;
		jumpKeyDepressed = false;
		break; 

		default:
		break;
	}
}

function _onJoystickRest() {
	trace('_onJoystickRest');
	if(keke.facingForward) {
		animationToPlay = 'idleR';
	} else {
		animationToPlay = 'idleL';
	}
}

function start() {
	trace('starting');
	playing = true;
	update();
}

function quit() {
	trace('quiting');
	playing = false;
	window.keyup = null;
	window.keydown = null;
}

$(document).ready(function() {
	init();
});