"use strict";

var ticker,
	tickerTime = 500,
	fps = 64,
	menuLayer,
	gameLevelContainer,
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
	stageBgImage.setParent(stage);
	
	startGame();
}

function startGame() { 
	
	trace('start game');
	// scrollingLayers = new ScrollingLayers(gameConfig.scrollingLayers);
	// scrollingLayers.setParent(stage);
	// gameLevelContainer = new Kinetic.Container();

	// PLAYER MOVEMENT BG LAYERS
	playerMovementLayers = new ScrollingLayers(gameConfig.playerMovementLayers);
	playerMovementLayers.setParent(stage);
	
	// GROUND
	ground = new RectsLayer(gameConfig.ground);
	ground.setParent(stage);
	
	// PLAYER
	keke = new SpritePlayer(gameConfig.player);
	keke.setParent(stage);
	
	// STAGE FRAME
	var stageFrame = new RectsLayer(gameConfig.stageFrame);
	stageFrame.setParent(stage);
	
	// CONTROLS
	controls = new ControlLayer(gameConfig.controls);
	controls.setParent(stage);
	
	// stage.add(gameLevelContainer);
	
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
	if(keke.health > 0 && playing) {
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
			ticker = setTimeout(function() {
				requestAnimFrame(update);
			}, 1000 / fps);
		}
	} else {
		quit('keke died!');
	}
}

function checkInput() {
	if(controls.getPause()) {
		quit();
	} else {
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
	}
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
		// trace('oX = ' + oX + ', oY = ' + oY);
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
		restart();
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

function restart() {
	trace('starting');
	removeMenuScreen();
	// keke.start();
	// update();
	startGame();
}

function quit(message) {
	trace('quiting');
	window.clearTimeout(ticker);
	playing = false;

	keke.stop();
	keke.remove();
	// keke = null;
	
	controls.reset();
	controls.remove();
	// controls = null;
	
	ground.remove();
	// ground = null;
	
	playerMovementLayers.remove();
	// playerMovementLayers = null;
	
	window.keyup = null;
	window.keydown = null;
	addMenuScreen(message);
}

function addMenuScreen(message) {
	var menuText = (typeof(message) !== 'undefined') ? message : 'paused';
	
	menuLayer = new Kinetic.Layer();
	var bg = new Kinetic.Rect({
		x: 10,
		y: 10,
		width: stageConfig.width - 20,
		height: stageConfig.height - 20,
		stroke: '#000000',
		strokeWidth: 1,
		fill: '#ffffff',
		opacity: 0.5
	});
	
	var gameOverText = new Kinetic.Text({
		x: 0,
		y: stage.getHeight() / 3,
		width: stage.getWidth(),
		text: menuText,
		align: 'center',
		fontSize: 56,
		fontFamily: 'Calibri',
		fill: '#000000'
	});
	
	var restartButtonGroup = new Kinetic.Group({});
	
	var restartButton = new Kinetic.Rect({
		x: 50,
		y: (stage.getHeight() / 3) * 2,
		width: stageConfig.width - 100,
		height: 68,
		stroke: '#000000',
		strokeWidth: 1,
		fill: '#123456'
	});
	
	var restartText = new Kinetic.Text({
		x: 0,
		y: (stage.getHeight() / 3) * 2,
		width: stage.getWidth(),
		text: 'Restart',
		align: 'center',
		fontSize: 48,
		fontFamily: 'Calibri',
		fill: '#ffffff'
	});	
	
	restartButtonGroup.on("mousedown touchstart", function(evt) {
		restart();
	});
	
	menuLayer.add(bg);
	menuLayer.add(gameOverText);
	restartButtonGroup.add(restartButton);
	restartButtonGroup.add(restartText);
	// menuLayer.add(restartButtonGroup);
	
	if(stage) {
		stage.add(menuLayer);
	}
}

function removeMenuScreen() {
	menuLayer.remove();
	menuLayer = null;
}

$(document).ready(function() {
	init();
});