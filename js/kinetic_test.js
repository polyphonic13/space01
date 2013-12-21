
var player,
	joystick,
	joystickText,
	level = {
		minX: 130,
		maxX: -1024
	},
	wallHolder,
	cloudsLayer,
	clouds = {
		imgUrl: 'assets/images/clouds.png',
		startX: 0,
		startY: 0,
		width: 2048,
		height: 490,
		speed: 1
	},
	scenery = [],
	backgroundHolder2,
	background2 = {
		imgUrl: 'assets/images/hills03_grey.png',
		startX: -100,
		startY: 50,
		width: 2048,
		height: 256,
		// speed: 250
		speed: 0.5
	},
	backgroundHolder3,
	background3 = {
		imgUrl: 'assets/images/trees_back01.png',
		startX: -200,
		startY: stageConfig.height - 320,
		width: 2048,
		height: 256,
		// speed: 250
		speed: 1.5
	},
	foregroundHolder,
	foreground = {
		images: [{
			url: 'assets/images/trees_fore01.png',
			x: -385,
			y: -40,
			width: 2048,
			height: 500
		}],
		startX: 0,
		startY: stageConfig.height - 300,
		speed: 3
	},
	platformHolder,
	splineHolder,
	splineMove = 100,
	currentPlaying = '',
	previousCollisionId = '',
	startLocation = {
		x: stageConfig.width/2,
		y: stageConfig.height - 130
	},
	playerHolder,
    player = {
        x: startLocation.x,
        y: startLocation.y,
		position: 0,
        width: 20,
        height: 55,
        speed: 3,
		jumpTime: 5,
        velX: 0,
        velY: 0,
        jumping: false,
		justJumped: false,
        grounded: true
    },
	kekeUrl = 'assets/images/keke_tiny.png',
	kekeReverseUrl = "assets/images/keke_tiny_reverse.png",
	kekeW = 20,
	kekeH = 55,
	keke,
	kekeReverse,
    keys = {},
	moveSpeed = 50,
    friction = .5,
    gravity = 0.2,
	previousVelX = 0;
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
	addImageToLayer(stageBgLayer, 'assets/images/night_sky.png', 0, 0, stageConfig.width, stageConfig.height, 1);
	stage.add(stageBgLayer);

	cloudsHolder = new Kinetic.Layer();
	addImageToLayer(cloudsHolder, clouds.imgUrl, clouds.startX, clouds.startY, clouds.width, clouds.height);
	backgroundHolder2 = new Kinetic.Layer();
	addImageToLayer(backgroundHolder2, background2.imgUrl, background2.startX, background2.startY, background2.width, background2.height);
	backgroundHolder3 = new Kinetic.Layer();
	addImageToLayer(backgroundHolder3, background3.imgUrl, background3.startX, background3.startY, background3.width, background3.height);
	
 	playerHolder = new Kinetic.Layer();
	addImageToLayer(playerHolder, kekeUrl, 0, 0, player.width, player.height);
	
	playerHolder.setPosition(player.x, player.y);
	
	foregroundHolder = new Kinetic.Layer(); 
	addImagesToLayer(foregroundHolder, foreground.images);
	// addImageToLayer(foregroundHolder, 'assets/images/striped_bg.png', -800, 0, 3200, stageConfig.height, 1);
	
	wallHolder = new Kinetic.Layer();
	addObjectsToLayer(wallHolder, walls);
	
	var startY = stageConfig.height - 60;
	var startX = 80;
	joystick = new Joystick({ 
		startX: startX,
		startY: startY 
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
	
	stage.add(cloudsHolder);
	stage.add(backgroundHolder2);
	stage.add(backgroundHolder3);
	stage.add(foregroundHolder);
	stage.add(playerHolder);
	stage.add(wallHolder);
	stage.add(joystick.getLayer());
	stage.add(textLayer);
	
	scenery.push({ config: background2, layer: backgroundHolder2 });
	scenery.push({ config: background3, layer: backgroundHolder3 });
	scenery.push({ config: foreground, layer: foregroundHolder });
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
	
    player.velX *= friction;
	player.velY += gravity;
	
	trace('post checkInput, velY = ' + player.velY + ', jumping = ' + player.jumping + ', grounded = ' + player.grounded);
	
	player.grounded = false;
	
	detectCollisions();

	trace('post detectCollisions, velY = ' + player.velY + ', jumping = ' + player.jumping + ', grounded = ' + player.grounded);
	
    if(player.grounded && !player.jumping) {
         player.velY = 0;
    }

	trace('about to animation, player.velY = ' + player.velY + ', jumping = ' + player.jumping + ', grounded = ' + player.grounded);
	// horizontal movement
	// if(player.positionX > level.minX) {
	// 	player.positionX = level.minX;
	//  	} else {
		player.positionX += player.velX; 
		animateLayers();
	// }

	// vertical movement
	// trace('about to do vertical animation, player.velY = ' + player.velY);
	// var playerAnim = new Kinetic.Animation(function(frame) {
	// 	playerHolder.move(0, player.velY);
	// }, playerHolder);
	// playerAnim.start();
	playerHolder.move(0, player.velY);

	animateClouds();
	
	stage.draw();
	
	if(playing) {
		requestAnimFrame(update);
	}
}

function checkInput() {
		// trace('checkInput, keys[' + ControlKeys.UP + '] = ' + keys[ControlKeys.UP] + 'keys[' + ControlKeys.LEFT + '] = ' + keys[ControlKeys.LEFT] + 'keys[' + ControlKeys.RIGHT + '] = ' + keys[ControlKeys.RIGHT);
	    if (keys[ControlKeys.UP]) {
	        // up arrow or space
			trace('ControlKeys.UP pressed, jumping = ' + player.jumping + ', grounded = ' + player.grounded);
	        if (!player.jumping && player.grounded && !jumpKeyDepressed) {
	        // if (!player.jumping && player.grounded) {
	            player.jumping = true;
				player.justJumped = true;
	            player.grounded = false;
				jumpKeyDepressed = true;
	            player.velY = -player.speed * 2;
				trace('\tpassed jump conditional, velY = ' + player.velY);
	       }
	    }
		previousVelX = player.velX;
		// trace('checkInput, forward = ' + joystick.getForward() + ', reverse = ' + joystick.getReverse() + ', rest = ' + joystick.getRest());
	    if (keys[ControlKeys.LEFT] || joystick.getForward()) {
	        // right arrow
	        if (player.velX < player.speed) {
				facingForward = true;
				player.velX++;
			}
		}

		if (keys[ControlKeys.RIGHT] || joystick.getReverse()) {         // left arrow         
			if (player.velX > -player.speed) {
				facingForward = false;
	    		player.velX--;
	        }
		}
		// joystickText.setText('joystick postion: ' + joystick.getX() + '/' + joystick.getY() + ', start: ' + joystick.getStartX() + '/' + joystick.getStartY() + ', forward = ' + joystick.getForward() + ', reverse = ' + joystick.getReverse());
}

function detectCollisions() {

	var playerPos = playerHolder.getAbsolutePosition();
	var plyr = {
		x: playerPos.x,
		y: playerPos.y,
		width: player.width,
		height: player.height
	};
	var col = collisionCheck(plyr, walls[0]); // check for floor collision

    if (col.direction === Directions.LEFT || col.direction === Directions.RIGHT) {
        player.velX = 0;
        player.jumping = false;
	} else if (col.direction === Directions.BOTTOM) {
		if(player.justJumped) {
			player.justJumped = false;
		} else {
	        player.grounded = true;
	        player.jumping = false;
			jumpKeyDepressed = false;
		}
	} else if (col.direction === Directions.TOP) {
        player.velY *= -1;
    }

	// previousCollisionId = col.id;
	// trace('detectCollisions, player.grounded = ' + player.grounded + ', col.direction = ' + col.direction);
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

	/*
	// simple rectangle collision check:
		var status = false;
		var rec1Top = shapeA.y;
		var rec1Bottom = shapeA.y + shapeA.height;
		var rec1Left = shapeA.x;
		var rec1Right = shapeA.x + shapeA.width;

		var rec2Top = shapeB.y;
		var rec2Bottom = shapeB.y + shapeB.width;
		var rec2Left = shapeB.x;
		var rec2Right = shapeB.x + shapeB.width;

		if(!(rec1Bottom < rec2Top || rec1Top > rec2Bottom || rec1Left > rec2Right || rec1Right < rec2Left)) {
			status = true;
		}

		return status;
	*/	

}

function animateLayers() {
	for(var i = 0; i < scenery.length; i++) {
		animateLayer(scenery[i].layer, (player.velX * scenery[i].config.speed), 0);
	}
}

function animateLayer(layer, newX, newY) {
	layer.move(newX, newY);
}

function animateClouds() {
	var cloudPos = cloudsHolder.getPosition();
	// trace('cloudPos.x = ' + -(cloudPos.x) + ', max = ' + (clouds.width - stageConfig.width));
	if(-(cloudPos.x) < (clouds.width - stageConfig.width)) {
		animateLayer(cloudsHolder, -(clouds.speed), 0);
	} else {
		cloudsHolder.setPosition(clouds.startX, 0);
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
		// platformAnimations.forward.stop();
		break;

		case ControlKeys.RIGHT:
		keys[ControlKeys.RIGHT] = false;
		// platformAnimations.reverse.stop();
		break;

		case ControlKeys.UP: 
		keys[ControlKeys.UP] = false;
		jumpKeyDepressed = false;
		break; 

		default:
		break;
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