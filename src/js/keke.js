"use strict";

var keke,
	controlsLayer,
	joystick,
	joystickText,
	jumpButton,
	quitButton,
	level = {
		minX: 130,
		maxX: -1024
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
	backgroundLayer2,
	background2 = {
		imgUrl: 'images/hills03_grey.png',
		startX: -100,
		startY: 50,
		width: 2048,
		height: 256,
		// speed: 250
		speed: 0.5
	},
	backgroundLayer3,
	background3 = {
		imgUrl: 'images/trees_back01.png',
		startX: -200,
		startY: stageConfig.height - 320,
		width: 2048,
		height: 256,
		// speed: 250
		speed: 1.5
	},
	foregroundLayer,
	foreground = {
		images: [{
			url: 'images/trees_fore01.png',
			x: -385,
			y: -40,
			width: 2048,
			height: 500
		}],
		startX: 0,
		startY: stageConfig.height - 300,
		speed: 4
	},
	platformLayer,
	splineLayer,
	splineMove = 100,
	currentPlaying = '',
	previousCollisionId = '',
	startLocation = {
		x: stageConfig.width / 2,
		y: stageConfig.height - 256
		// y: stageConfig.height - 205
	},
	keke,
    keys = {},
	moveSpeed = 50,
    friction = 0.5,
    gravity = 0.5,
	previousVelX = 0,
	jumpKeyDepressed = false,
	facingForward = true,
	playing = false,
	won = false,
	imagesToLoad = 4;
		
function init() {
	stage = new Kinetic.Stage({
		container: 'container',
		width: stageConfig.width,
		height: stageConfig.height
	});

	var stageBgLayer = new Kinetic.Layer();
	addImageToLayer(stageBgLayer, 'images/night_sky.png', 0, 0, stageConfig.width, stageConfig.height, 1);
	stage.add(stageBgLayer);

	cloudsLayer = new Kinetic.Layer();
	addImageToLayer(cloudsLayer, clouds.imgUrl, clouds.startX, clouds.startY, clouds.width, clouds.height);
	backgroundLayer2 = new Kinetic.Layer();
	addImageToLayer(backgroundLayer2, background2.imgUrl, background2.startX, background2.startY, background2.width, background2.height);
	backgroundLayer3 = new Kinetic.Layer();
	addImageToLayer(backgroundLayer3, background3.imgUrl, background3.startX, background3.startY, background3.width, background3.height);
	
	foregroundLayer = new Kinetic.Layer(); 
	addImagesToLayer(foregroundLayer, foreground.images);
	
	keke = new Player(startLocation);
	
	wallLayer = new Kinetic.Layer();
	addObjectsToLayer(wallLayer, walls);
	
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
	stage.add(backgroundLayer2);
	stage.add(backgroundLayer3);
	stage.add(foregroundLayer);
	stage.add(keke.layer);
	stage.add(wallLayer);
	stage.add(controlsLayer);
	stage.add(textLayer);
	
	scenery.push({ config: background2, layer: backgroundLayer2 });
	scenery.push({ config: background3, layer: backgroundLayer3 });
	scenery.push({ config: foreground, layer: foregroundLayer });
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
	animateLayers();


	// vertical movement
	// trace('about to do vertical animation, keke.velY = ' + keke.velY);
	keke.move(0, keke.velY);
	
	animateClouds();
	
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
				if(facingForward) {
					keke.playAnimation('jumpL');
				} else {
					keke.playAnimation('jumpR');
				}
				trace('\tpassed jump conditional, velY = ' + keke.velY);
	       }
			jumpButton.setWasPressed(false);
	    }
		previousVelX = keke.velX;
//		trace('checkInput, forward = ' + joystick.getForward() + ', reverse = ' + joystick.getReverse() + ', rest = ' + joystick.getRest());
	    if (keys[ControlKeys.LEFT] || joystick.getForward()) {
			trace('left key or joystick forward');
	        // right arrow
	
	        if (keke.velX < keke.speed) {
				keke.velX++;
				if(!keke.jumping) {
					if(keke.getCurrentAnimation() !== 'runL') {
						keke.playAnimation('runL');
					}
				} else {
					keke.playAnimation('jumpL');
				}
			}
			facingForward = true;
		} else if (keys[ControlKeys.RIGHT] || joystick.getReverse()) {         // left arrow         
			trace('right key or joystick reverse');
			if (keke.velX > -keke.speed) {
	    		keke.velX--;
				if(!keke.jumping) {
					if(keke.getCurrentAnimation() !== 'runR') {
						keke.playAnimation('runR');
					}
				} else {
					keke.playAnimation('jumpR');
				}
	        }
			facingForward = false;
		} else if(!keke.jumping) {
			// trace('not moving and not jumping, facingForward = ' + facingForward);
			if(facingForward) {
				keke.playAnimation('idleL');
			} else {
				keke.playAnimation('idleR');
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
		trace('imageObj/onload');
    };
    imageObj.src = imgUrl;
	
}

function addImagesToLayer(layer, images) {
	console.log('addImagesToLayer');
	console.log(images);
	for(var i = 0; i < images.length; i++) {
		console.log('\timages url = ' + images[i].url);
	    var imageObj = new Image();
		var x = images[i].x;
		var y = images[i].y;
		var width = images[i].width;
		var height = images[i].height;
	    imageObj.onload = function() {
			var image = new Kinetic.Image({
				x: x,
				y: y,
				image: imageObj,
				width: width,
				height: height
			});
			layer.add(image);
			layer.draw(); // layer has to have draw called each time there is a change
			trace('imageObj/onload');
	    };
	    imageObj.src = images[i].url;
	}
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
		keke.playAnimation('idleL');
		// platformAnimations.forward.stop();
		break;

		case ControlKeys.RIGHT:
		keys[ControlKeys.RIGHT] = false;
		keke.playAnimation('idleR');
		// platformAnimations.reverse.stop();
		break;

		case ControlKeys.UP:
		console.log("ControlKeys.UP release");
		keys[ControlKeys.UP] = false;
		jumpKeyDepressed = false;
		break; 

		default:
		break;
	}
}

function _onJoystickRest() {
	trace('_onJoystickRest');
	if(facingForward) {
		keke.playAnimation('idleR');
	} else {
		keke.playAnimation('idleL');
	}
}

function start() {
	console.log('starting');
	playing = true;
	update();
}

function quit() {
	console.log('quiting')
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