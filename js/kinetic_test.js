
var player,
	wallHolder,
	backgroundHolder,
	hillsUrl = 'assets/images/hills01_black.png',
	backgroundAnimations = {
		forward: null,
		reverse: null
	},
	background = {
		startX: -200,
		startY: stageHeight - 325,
		width: 2048,
		height: 256,
		speed: 250
	},
	foregroundHolder,
	platformHolder,
	platformAnimations = {
		forward: null,
		reverse: null
	},
	platMove = 100,
	splineHolder,
	splineMove = 100,
	currentPlaying = '',
	previousCollisionId = '',
	startLocation = {
		x: stageWidth/2,
		y: stageHeight - 130
	},
	playerHolder,
    player = {
        x: startLocation.x,
        y: startLocation.y,
        width: 20,
        height: 55,
        speed: 2.5,
		jumpTime: 5,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
	kekeUrl = 'assets/images/keke_tiny.png',
	kekeReverseUrl = "assets/images/keke_tiny_back.png",
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
	playing = true,
	won = false;
	
	
function init() {
	stage = new Kinetic.Stage({
		container: 'container',
		width: stageWidth,
		height: stageHeight
	});

	var stageBgLayer = new Kinetic.Layer();
	var stageBg = new Kinetic.Rect({
		x: 0,
		y: 0,
		width: stageWidth,
		height: stageHeight,
		fillRGB: {
			r: 184,
			g: 182,
			b: 180
		}
	});
	stageBgLayer.add(stageBg);
	stage.add(stageBgLayer);
	
	backgroundHolder = new Kinetic.Layer();
	addImageToLayer(backgroundHolder, hillsUrl, background.startX, background.startY, background.width, background.height);
	
	wallHolder = new Kinetic.Layer();
	addObjectsToLayer(wallHolder, walls);
	
	// platformHolder = new Kinetic.Layer();
	// addObjectsToLayer(platformHolder, platforms);
	
 	playerHolder = new Kinetic.Layer();
	addImageToLayer(playerHolder, kekeUrl, 0, 0, player.width, player.height);
	playerHolder.setPosition(player.x, player.y);
	
	splineHolder = new Kinetic.Layer();
	var spline = new Kinetic.Spline({
	  x: 100,
	  y: 50,
	points: splinePoints,
	  stroke: 'gray',
		fill: 'red',
	  tension: 0.5
	});
	splineHolder.add(spline);
	splineHolder.setPosition(0, 400);
	
	stage.add(backgroundHolder);
	stage.add(wallHolder);
	// stage.add(platformHolder);
	stage.add(playerHolder);
	stage.add(splineHolder);
	
	$(window).keydown(function(e) {
		keydownHandler(e);
	});
	$(window).keyup(function(e) {
		keyupHandler(e);
	});
	update();
}

function update() {
	// trace('update');
    if (keys[ControlKeys.UP] || keys[ControlKeys.SPACE]) {
        // up arrow or space
        if (!player.jumping && player.grounded && !jumpKeyDepressed) {
            player.jumping = true;
            player.grounded = false;
			jumpKeyDepressed = true;
            player.velY = -player.speed * 2;
			trace('passed jump conditional, velY = ' + player.velY);
 
       }
    }
	previousVelX = player.velX;
	
    if (keys[ControlKeys.LEFT]) {
        // right arrow
        if (player.velX < player.speed) {
			facingForward = true;
			player.velX++;
		}
		// startForwardAnimations();
	} else {
		// stopForwardAnimations();
	}
	
	if (keys[ControlKeys.RIGHT]) {         // left arrow         
		if (player.velX > -player.speed) {
			facingForward = false;
    		player.velX--;
        }
		// startReverseAnimations();
    } else {
		// stopReverseAnimations();
	}

	//     if(player.grounded){
	//          player.velY = 0;
	//     } else {
	    // player.velY += gravity;
	// }
    player.velX *= friction;
    player.velY += gravity;
	
    player.grounded = false;

	detectCollisions();
	
	// trace('player.velX = ' + player.velX + ', velY = ' + player.velY + ', player.grounded = ' + player.grounded);
	var bgPosition = backgroundHolder.getPosition();
	var minX = -(background.startX);
	if(bgPosition.x < minX) {
		var bgAnim = new Kinetic.Animation(function(frame) {
			backgroundHolder.move(player.velX/background.speed, 0);
		}, backgroundHolder);
		bgAnim.start();
	}
	// trace('bgPosiiton.x = ' + bgPosition.x + ', minX = ' + minX);
	// var platAnim = new Kinetic.Animation(function(frame) {
	// 	platformHolder.move(player.velX/platMove, 0);
	// }, platformHolder);
	// platAnim.start();

	var splineAnim = new Kinetic.Animation(function(frame) {
		splineHolder.move(player.velX/splineMove, 0);
	}, splineHolder);
	splineAnim.start();
	
	// trace('player.velY = ' + player.velY);
	var playerAnim = new Kinetic.Animation(function(frame) {
		playerHolder.move(0, player.velY/100);
	}, playerHolder);
	playerAnim.start();
	
	requestAnimFrame(update);
}

function detectCollisions() {

	var playerPos = playerHolder.getAbsolutePosition();
	var plyr = {
		x: playerPos.x,
		y: playerPos.y,
		width: player.width,
		height: player.height
	};
	var col;

	col = collisionCheck(plyr, walls[0]); // check for ground collision
	updateByCollision(col);

}

function updateByCollision(col) {
	// trace('updateByCollision, direction = ' + col.direction);
    if (col.direction === Directions.LEFT || col.direction === Directions.RIGHT) {
        player.velX = 0;
        player.jumping = false;
	} else if (col.direction === Directions.BOTTOM) {
        player.grounded = true;
        player.jumping = false;
	} else if (col.direction === Directions.TOP) {
        player.velY *= -1;
    }
	previousCollisionId = col.id;

    if(player.grounded){
         player.velY = 0;
    }
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
    }
    return collision;
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

function addImageToLayer(layer, imgUrl, x, y, w, h) {
    var imageObj = new Image();
    imageObj.onload = function() {
		var playerImg = new Kinetic.Image({
			x: x,
			y: y,
			image: imageObj,
			width: w,
			height: h
		});
		layer.add(playerImg);
		layer.draw(); // layer has to have draw called each time there is a change
		trace('imageObj/onload');
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
		break; 

		default:
		break;
	}
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