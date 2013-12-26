"use strict";

var ticker,
	tickerTime = 500,
	fps = 64,
	keke,
	ground,
	animationToPlay,
	playerMovementLayers,
	controls,
	controlsLayer,
	quitButton,
	scrollingLayers,
	platformLayer,
	previousCollisionId = '',
    keys = {},
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
	var stageBgColor = new Kinetic.Rect(gameConfig.stageBgColor);
	stageBgLayer.add(stageBgColor);
	stage.add(stageBgLayer);
	
	var stageBgImage = new ImageLayer(gameConfig.stageBg);
	stageBgImage.setStage(stage);

	// scrollingLayers = new ScrollingLayers(gameConfig.scrollingLayers);
	// scrollingLayers.setStage(stage);

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
	
	// CONTROLS
	controls = new ControlLayer(gameConfig.controls);
	controls.setStage(stage);
	
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
	
    keke.velX *= gameConfig.friction;
	keke.velY += gameConfig.gravity;
	
	keke.grounded = false;
	
	detectCollisions();
	
    if(keke.grounded && !keke.jumping) {
         keke.velY = 0;
    }

	// horizontal movement
	keke.position += keke.velX;
	keke.velX = (Math.floor(keke.velX*1000))/1000;
	// trace('keke.velX = ' + keke.velX);
	if(keke.position < gameConfig.level.minX && keke.position > gameConfig.level.maxX) {
		// trace('keke.position = ' + keke.position + ', level.min = ' + gameConfig.level.minX + ', max = ' + gameConfig.level.maxX);
		if(keke.velX !== 0) {
			ground.moveByVelocity(keke.velX, 0);
			playerMovementLayers.moveByVelocity(keke.velX, 0);
		} else {
			// trace('no movement');
		}
	} else {
		trace('bounds reached');
		if(keke.facingForward) {
			animationToPlay = 'idleR';
		} else {
			animationToPlay = 'idleL';
		}
	}
	keke.playAnimation(animationToPlay);

	// vertical movement
	keke.move(0, keke.velY);

	// layer movement
	// scrollingLayers.moveX();
	
	stage.draw();
	
	if(playing) {
		setTimeout(function() {
			requestAnimFrame(update);
		}, 1000 / fps);
	}
	// ticker = window.setInterval(update, tickerTime);
}

function checkInput() {
	    // if (keys[ControlKeys.UP] || jumpButton.getWasPressed()) {
	    // if (keys[ControlKeys.UP] || jumpButton.getWasPressed() || joystick.getUp()) {
	    // if (keys[ControlKeys.UP] || joystick.getUp()) {
	    if (keys[ControlKeys.UP] || controls.getJumped()) {
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
				// trace('\tpassed jump conditional, velY = ' + keke.velY);
	       }
			// jumpButton.setWasPressed(false);
	    }
//		trace('checkInput, forward = ' + joystick.getForward() + ', reverse = ' + joystick.getReverse() + ', rest = ' + joystick.getRest());
	    // if (keys[ControlKeys.LEFT] || joystick.getReverse()) {
	    if (keys[ControlKeys.LEFT] || controls.getReverse()) {
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
		// } else if (keys[ControlKeys.RIGHT] || joystick.getForward()) {         // left arrow         
		} else if (keys[ControlKeys.RIGHT] || controls.getForward()) {         // left arrow         
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

	var groundObjs = ground.collection;
	var rect;
	var rectPos;
	
	for(var i = 0; i < groundObjs.length; i++) {
		// trace('groundObjs['+i+'].attrs = ');
		// trace(groundObjs[i].attrs);
		rectPos = groundObjs[i].getAbsolutePosition();
		rect = {
			x: rectPos.x,
			y: rectPos.y,
			width: groundObjs[i].attrs.width,
			height: groundObjs[i].attrs.height
		}
		var col = collisionCheck(keke.getHitArea(), rect); // check for floor collision

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
	// window.clearInterval(ticker);
	playing = false;
	window.keyup = null;
	window.keydown = null;
}

$(document).ready(function() {
	init();
});