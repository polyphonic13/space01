"use strict";

var keke,
	animationToPlay,
	scrollingLayers,
	controlsLayer,
	joystick,
	joystickText,
	jumpButton,
	quitButton,
	level = {
		minX: 86,
		maxX: -1697
	},
	wallLayer,
	cloudsLayer,
	clouds = {
		imgUrl: 'images/clouds.png',
		startX: 0,
		startY: 0,
		width: 2048,
		height: 490,
		speed: 1
	},
	scenery = [],
	mountainsLayer,
	mountains = {
		imgUrl: 'images/hills03_grey.png',
		startX: -100,
		startY: 50,
		width: 2048,
		height: 256,
		speed: 0.3
	},
	backgroundTreesLayer,
	backgroundTrees = {
		imgUrl: 'images/trees_back01.png',
		startX: -64,
		startY: 80,
		width: 2048,
		height: 350,
		speed: 0.7
	},
	foregroundTreesLayer1,
	foregroundTrees1 = {
		imgUrl: 'images/trees_fore01.png',
		startX: -256,
		startY: -40,
		width: 2048,
		height: 500,
		speed: 3
	},
	foregroundTreesLayer2,
	foregroundTrees2 = {
		imgUrl: 'images/trees_fore01.png',
		startX: 1792,
		startY: -40,
		width: 2048,
		height: 500,
		speed: 3
	},
	foregroundTreesLayer3,
	foregroundTrees3 = {
		imgUrl: 'images/trees_fore01.png',
		startX: 3840,
		startY: -40,
		width: 2048,
		height: 500,
		speed: 3
	},
	platformLayer,
	previousCollisionId = '',
    keys = {},
    friction = 0.5,
    gravity = 0.5,
	previousVelX = 0,
	jumpKeyDepressed = false,
	playing = false,
	won = false,
	imagesToLoad = 4;
		
function init() {
	// STAGE
	stage = new Kinetic.Stage({
		container: 'container',
		width: stageConfig.width,
		height: stageConfig.height
	});

	// STATIC BACKGROUND
	var stageBgLayer = new Kinetic.Layer();
	addImageToLayer(stageBgLayer, 'images/night_sky.png', 0, 0, stageConfig.width, stageConfig.height, 1);
	stage.add(stageBgLayer);

	// CLOUDS
	cloudsLayer = new Kinetic.Layer();
	addImageToLayer(cloudsLayer, clouds.imgUrl, clouds.startX, clouds.startY, clouds.width, clouds.height);
	
	// MOVING BACKGROUNDS
	/*
	mountainsLayer = new Kinetic.Layer();
	addImageToLayer(mountainsLayer, mountains.imgUrl, mountains.startX, mountains.startY, mountains.width, mountains.height);
	backgroundTreesLayer = new Kinetic.Layer();
	addImageToLayer(backgroundTreesLayer, backgroundTrees.imgUrl, backgroundTrees.startX, backgroundTrees.startY, backgroundTrees.width, backgroundTrees.height);
	foregroundTreesLayer1 = new Kinetic.Layer(); 
	addImageToLayer(foregroundTreesLayer1, foregroundTrees1.imgUrl, foregroundTrees1.startX, foregroundTrees1.startY, foregroundTrees1.width, foregroundTrees1.height);
	foregroundTreesLayer2 = new Kinetic.Layer(); 
	addImageToLayer(foregroundTreesLayer2, foregroundTrees2.imgUrl, foregroundTrees2.startX, foregroundTrees2.startY, foregroundTrees2.width, foregroundTrees2.height);
	foregroundTreesLayer3 = new Kinetic.Layer(); 
	addImageToLayer(foregroundTreesLayer3, foregroundTrees3.imgUrl, foregroundTrees3.startX, foregroundTrees3.startY, foregroundTrees3.width, foregroundTrees3.height);
	*/

	// STATIC OUTER WALLS
	wallLayer = new Kinetic.Layer();
	addObjectsToLayer(wallLayer, walls);
	
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
	
	stage.add(cloudsLayer);
	/*
	stage.add(mountainsLayer);
	stage.add(backgroundTreesLayer);
	stage.add(foregroundTreesLayer1);
	stage.add(foregroundTreesLayer2);
	stage.add(foregroundTreesLayer3);
	*/
	for(var i = 0; i < gameConfig.scrollingLayers.length; i++) {
		gameConfig.scrollingLayers[i].stage = stage;
	}
	scrollingLayers = new ScrollingLayers(gameConfig.scrollingLayers);
	// PLAYER
	gameConfig.player.stage = stage;
	keke = new SpritePlayer(gameConfig.player);
	
	stage.add(wallLayer);
	stage.add(controlsLayer);
	stage.add(textLayer);
	/*
	scenery.push({ config: mountains, layer: mountainsLayer });
	scenery.push({ config: backgroundTrees, layer: backgroundTreesLayer });
	scenery.push({ config: foregroundTrees1, layer: foregroundTreesLayer1 });
	scenery.push({ config: foregroundTrees2, layer: foregroundTreesLayer2 });
	scenery.push({ config: foregroundTrees3, layer: foregroundTreesLayer3 });
	*/
	// stage.draw();
	
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
	// trace('keke.facingForward = ' + keke.facingForward);
	checkInput();
	
    keke.velX *= friction;
	keke.velY += gravity;
	
	// trace('post checkInput, velY = ' + keke.velY + ', jumping = ' + keke.jumping + ', grounded = ' + keke.grounded);
	
	keke.grounded = false;
	
	detectCollisions();

	// trace('post detectCollisions, velY = ' + keke.velY + ', jumping = ' + keke.jumping + ', grounded = ' + keke.grounded);
	
    if(keke.grounded && !keke.jumping) {
         keke.velY = 0;
    }

	// trace('about to animation, keke.velY = ' + keke.velY + ', jumping = ' + keke.jumping + ', grounded = ' + keke.grounded);

	// TODO: test for bounds of game before moving
	// horizontal movement
	keke.position += keke.velX;
	if(keke.position < level.minX && keke.position > level.maxX) {
		// trace('keke.position = ' + keke.position);
		keke.playAnimation(animationToPlay);
		//animateLayers();
		scrollingLayers.move(keke.velX, 0);
	} else {
		trace('bounds reached');
		if(keke.facingForward) {
			keke.playAnimation('idleR');
		} else {
			keke.playAnimation('idleL');
		}
	}


	// vertical movement
	// trace('about to do vertical animation, keke.velY = ' + keke.velY);
	keke.move(0, keke.velY);
	
	animateClouds();
	
	stage.draw();
	
	if(playing) {
		// requestAnimFrame(update);
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
					// keke.playAnimation('jumpR');
					animationToPlay = 'jumpR';
				} else {
					// keke.playAnimation('jumpL');
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
						// keke.playAnimation('runL');
						animationToPlay = 'runL';
					}
				} else {
					// keke.playAnimation('jumpL');
					animationToPlay = 'jumpL';
				}
			}
			keke.facingForward = false;
		} else if (keys[ControlKeys.RIGHT] || joystick.getReverse()) {         // left arrow         
			if (keke.velX > -keke.speed) {
	    		keke.velX--;
				if(!keke.jumping) {
					if(keke.getCurrentAnimation() !== 'runR') {
						// keke.playAnimation('runR');
						animationToPlay = 'runR';
					}
				} else {
					// keke.playAnimation('jumpR');
					animationToPlay = 'jumpR';
				}
	        }
			keke.facingForward = true;
		} else if(!keke.jumping) {
			if(keke.facingForward) {
				// keke.playAnimation('idleR');
				animationToPlay = 'idleR';
			} else {
				// keke.playAnimation('idleL');
				animationToPlay = 'idleL';
			}
		}
		// joystickText.setText('joystick postion: ' + joystick.getX() + '/' + joystick.getY() + ', start: ' + joystick.getStartX() + '/' + joystick.getStartY() + ', forward = ' + joystick.getForward() + ', reverse = ' + joystick.getReverse());
}

function detectCollisions() {

	var col = collisionCheck(keke.getHitArea(), walls[0]); // check for floor collision

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

function animateLayers() {
	for(var i = 0; i < scenery.length; i++) {
		animateLayer(scenery[i].layer, (keke.velX * scenery[i].config.speed), 0);
	}
}

function animateLayer(layer, newX, newY) {
	layer.move(newX, newY);
}

function animateClouds() {
	var cloudPos = cloudsLayer.getPosition();
	// trace('cloudPos.x = ' + -(cloudPos.x) + ', max = ' + (clouds.width - stageConfig.width));
	if(-(cloudPos.x) < (clouds.width - stageConfig.width)) {
		animateLayer(cloudsLayer, -(clouds.speed), 0);
	} else {
		cloudsLayer.setPosition(clouds.startX, 0);
	}
}

function addObjectsToLayer(layer, objects) {
	var fill;
	var stroke;
	for(var i = 0; i < objects.length; i++) {
		if(objects[i].fill) {
			fill = objects[i].fill;
		} else {
			fill = 'black';
		}
		if(objects[i].stroke) {
			stroke = objects[i].stroke;
		} else {
			stroke = 'black';
		}
		var rect = new Kinetic.Rect({
			x: objects[i].x,
			y: objects[i].y,
			width: objects[i].width,
			height: objects[i].height,
			fill: fill,
			stroke: stroke,
			strokeWidth: 1
		});
		layer.add(rect);
	}
}

function addImageToLayer(layer, imgUrl, x, y, w, h, alpha, filter) {
	var a = (typeof(alpha) !== 'undefined') ? alpha : 1;
    var imageObj = new Image();
	
	var imgConfig = {
		x: x,
		y: y,
		width: w,
		height: h,
		opacity: a,
		image: imageObj
	};

	if(typeof(filter) !== 'undefined') {
		for(var key in filter) {
			imgConfig[key] = filter[key];
		}
	}

    imageObj.onload = function() {
		var image = new Kinetic.Image(imgConfig);
		layer.add(image);
		layer.draw(); // layer has to have draw called each time there is a change
    };
    imageObj.src = imgUrl;
	
}

function keydownHandler(e) {
	switch(e.which) {
		case ControlKeys.UP:
		keys[ControlKeys.UP] = true;
		// handleJump();
		break;

		case ControlKeys.LEFT:
		keys[ControlKeys.LEFT] = true;
		// startForwardAnimations();
		break;

		case ControlKeys.RIGHT:
		keys[ControlKeys.RIGHT] = true;
		// startReverseAnimations();
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
		// keke.playAnimation('idleL');
		animationToPlay = 'idleL';
		break;

		case ControlKeys.RIGHT:
		keys[ControlKeys.RIGHT] = false;
		// keke.playAnimation('idleR');
		animationToPlay = 'idleR';
		break;

		case ControlKeys.UP:
		trace("ControlKeys.UP release");
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
		// keke.playAnimation('idleR');
		animationToPlay = 'idleR';
	} else {
		// keke.playAnimation('idleL');
		animationToPlay = 'idleL';
	}
}

function start() {
	trace('starting');
	playing = true;
	update();
}

function quit() {
	trace('quiting')
;	playing = false;
}

$(document).ready(function() {
	init();
});

// collision algorithm: http://devmag.org.za/2009/04/13/basic-collision-detection-in-2d-part-1/

// collision detection1 http://www.gamingthinktank.com/2013/07/11/collision-detection-using-bounding-rectangle-method-kineticjs-and-html5-canvas-tutorial/
// collision detection2 http://stackoverflow.com/questions/14875119/html5-kineticjs-getintersection-function-implementation
/*
function checkCollide(pointX, pointY, objectx, objecty, objectw, objecth) { // pointX, pointY belong to one rectangle, while the object variables belong to another rectangle
      var oTop = objecty;
      var oLeft = objectx; 
      var oRight = objectx+objectw;
      var oBottom = objecty+objecth; 

      if(pointX > oLeft && pointX < oRight){
           if(pointY > oTop && pointY < oBottom ){
                return 1;
           }
      }
      else
           return 0;
 };

var children = layer.getChildren();
 for( var i=0; i<children.length; i++){  // for each single shape
     for( var j=0; j<children.length; j++){ //check each other shape
         if(i != j){ //skip if shape is the same
            if(checkCollide(children[i].getX(), children[i].getY(), children[j].getX(), children[j].getY(), children[j].getWidth(), children[j].getHeight()))
                alert('top left corner collided');
         }
     }
 }
*/