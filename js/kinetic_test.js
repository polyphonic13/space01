
var stage,
	stageWidth = 800,
	stageHeight = 500,
	player,
	wallHolder,
	platformHolder,
	platformAnimations = {
		forward: null,
		reverse: null
	},
	currentPlaying = '',
	previousCollisionId = '',
	startLocation = {
		x: stageWidth/2,
		y: stageHeight - 100
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
    keys = [],
	moveSpeed = 50,
    friction = .5,
    gravity = 0.2,
	previousVelX = 0;
	jumpKeyDepressed = false,
	facingForward = true,
	playing = true,
	won = false,
	walls = [{
		id: 'floor',
	    x: 0,
	    y: stageHeight - 10,
	    width: stageWidth,
	    height: 50,
		stroke: 'orange',
		fill: 'red'
	},
	// left wall
	{
		id: 'leftWall',
	    x: 0,
	    y: 0,
	    width: 10,
	    height: stageHeight
	},
	// right wall
	{
		id: 'rightWall',
	    x: stageWidth - 10,
	    y: 0,
	    width: 50,
	    height: stageHeight
	}],
	platforms = [
		{
			id: 'platform01',
			x: 0,
			y: stageHeight - 40,
			width: 120,
			height: 15
		},
		{
			id: 'platform02',
		    x: 80,
		    y: stageHeight - 85,
		    width: 100,
		    height: 15
		},
		{
			id: 'platform03',
		    x: 160,
		    y: stageHeight - 130,
		    width: 80,
		    height: 15
		},
		{
			id: 'platform04',
		    x: 240,
		    y: stageHeight - 175,
		    width: 80,
		    height: 15
		},
		{
			id: 'platform05',
		    x: 370,
		    y: stageHeight - 80,
		    width: 80,
		    height: 15
		},
		{
			id: 'platform06',
		    x: 440,
		    y: stageHeight - 100,
		    width: 40,
		    height: 15
		},
		{
			id: 'platform07',
		    x: 500,
		    y: stageHeight - 100,
		    width: 40,
		    height: 15
		},
		{
			id: 'platform08',
		    x: 560,
		    y: stageHeight - 130,
		    width: 40,
		    height: 15
		},
		{
			id: 'platform09',
		    x: 620,
		    y: stageHeight - 140,
		    width: 40,
		    height: 15
		},
		{
			id: 'platform10',
		    x: 680,
		    y: stageHeight - 120,
		    width: 40,
		    height: 15
		},
		{
			id: 'platform11',
		    x: 750,
		    y: stageHeight - 110,
		    width: 40,
		    height: 15
		}];
	
	
function init() {
	stage = new Kinetic.Stage({
		container: 'container',
		width: stageWidth,
		height: stageHeight
	});

	wallHolder = new Kinetic.Layer();
	addObjectsToLayer(wallHolder, walls);
	stage.add(wallHolder);
	
 	platformHolder = new Kinetic.Layer();
	addObjectsToLayer(platformHolder, platforms);
	stage.add(platformHolder);
	createPlatformAnimations(platformHolder);
	
	playerHolder = new Kinetic.Layer();
	drawPlayer(playerHolder);
	trace('post drawPlayer, playerHolder =');
	trace(playerHolder);
	stage.add(playerHolder);
	playerHolder.setPosition(player.x, player.y);
	
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
        }
    }
	previousVelX = player.velX;
	
    if (keys[ControlKeys.RIGHT]) {
        // right arrow
        if (player.velX < player.speed) {
			facingForward = true;
			player.velX++;
		}
		// startForwardAnimations();
	} else {
		// stopForwardAnimations();
	}
	
	if (keys[ControlKeys.LEFT]) {         // left arrow         
		if (player.velX > -player.speed) {
			facingForward = false;
    		player.velX--;
        }
		// startReverseAnimations();
    } else {
		// stopReverseAnimations();
	}

    player.grounded = false;
	detectCollisions();
	
    if(player.grounded){
         player.velY = 0;
    } else {
	    player.velY += gravity;
	}

    player.velX *= friction;
	
	// trace('player.velX = ' + player.velX + ', velY = ' + player.velY + ', player.grounded = ' + player.grounded);

	var landAnim = new Kinetic.Animation(function(frame) {
		platformHolder.move(player.velX/100, 0);
	}, platformHolder);
	landAnim.start();
	
	var playerAnim = new Kinetic.Animation(function(frame) {
		playerHolder.move(0, player.velY/100);
	}, playerHolder);
	playerAnim.start();
	
	requestAnimFrame(update);
}

function detectCollisions() {
	// trace('platformHolder.x = ' + platformHolder.attrs.x);
	// trace('platformHolder.getAbsolutePosition = ');
	// trace(platformHolder.getAbsolutePosition());
	var holderPos = platformHolder.getAbsolutePosition()
	var holderX = platformHolder.attrs.x;
	var holderY = platformHolder.attrs.y;
	var plat;
	var playerPos = playerHolder.getAbsolutePosition();
	var plyr = {
		x: playerPos.x,
		y: playerPos.y,
		width: player.width,
		height: player.height
	};
	var col;
	for(var i = 0; i < platforms.length; i++) {
		plat = platforms[i];
		plat.x += holderPos.x; // adjust x of current platform by holder's x offset
		plat.y += holderPos.y; // adjust y of current platform by holder's y offset

		col = collisionCheck(plyr, plat);
		if(!won) {
			trace('col =');
			trace(col);
			trace('plat = ');
			trace(plat);
			trace('plyr = ');
			trace(plyr);
			// trace('playerHolder = ');
			// trace(playerHolder);
		}
		updateByCollision(col);
	}
	
	col = collisionCheck(plyr, walls[0]); // check for ground collision
	updateByCollision(col);
	if(col.id === 'floor') {
		trace('COLLIDED WITH FLOOR!');
	}
	won = true;
}

function updateByCollision(col) {
    if (col.direction === Directions.LEFT || col.direction === Directions.RIGHT) {
        player.velX = 0;
        player.jumping = false;
	} else if (col.direction === Directions.BOTTOM) {
        player.grounded = true;
        player.jumping = false;
		player.velY = 0;
	} else if (col.direction === Directions.TOP) {
        player.velY *= -1;
    }
	previousCollisionId = col.id;
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
	if(!won) {
		trace('collisionCheck\n\tshapeA = x/y: ' + shapeA.x + '/' + shapeA.y + ', w/h: ' + shapeA.width + '/' + shapeA.height + '\n\tshapeB = x/y: ' + shapeB.x + '/' + shapeB.y + ', w/h: ' + shapeB.width + '/' + shapeB.height);
		trace('\tvX = ' + vX + ', vY = ' + vY + '\n\toX = ' + oX + ', oY = ' + oY + '\n\thWidths = ' + hWidths + ', hHeights = ' + hHeights);
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

function keydownHandler(e) {
	switch(e.which) {
		case ControlKeys.UP:
		keys[ControlKeys.UPs] = true;
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

function handleJump() {
    player.jumping = true;
    player.grounded = false;
	jumpKeyDepressed = true;
	
	player.velY = -player.speed * 2;
	trace('player velY = ' + player.velY);
	var jump = new Kinetic.Animation(function(frame) {
		playerHolder.move(0, player.velY);
	}, playerHolder);

	jump.start();
	setTimeout(function() {
		jump.stop();
	}, player.jumpTime);
}

function startForwardAnimations() {
	platformAnimations.forward.start();
	currentPlaying = 'forward';
}

function startReverseAnimations() {
	platformAnimations.reverse.start();
	currentPlaying = 'reverse';
}

function stopForwardAnimations() {
	platformAnimations.forward.stop();
	currentPlaying = '';
}

function stopReverseAnimations() {
	platformAnimations.reverse.stop();
	currentPlaying = '';
}

function createPlatformAnimations(layer) {
	// var amplitude = 150;
	//     // in ms
	//     var period = 2000;
    var velocity = moveSpeed;
	var dist;
	
	platformAnimations.forward = new Kinetic.Animation(function(frame) {
		dist = velocity * (frame.timeDiff / 1000);
		layer.move(dist, 0);
	}, layer);
	platformAnimations.reverse = new Kinetic.Animation(function(frame) {
		dist = -velocity * (frame.timeDiff / 1000);
		layer.move(dist, 0);
	}, layer);
}

function drawPlayer(layer) {

    var imageObj = new Image();
    imageObj.onload = function() {
		var playerImg = new Kinetic.Image({
			x: 0,
			y: 0,
			image: imageObj,
			width: player.width,
			height: player.height
		});
		layer.add(playerImg);
		layer.draw(); // layer has to have draw called each time there is a change
		trace('imageObj/onload');
    };
    imageObj.src = kekeUrl;
	trace('drawPlayer, imageObj =');
	trace(imageObj);
}


$(document).ready(function() {
	init();
});