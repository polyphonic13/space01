(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var controlKeys = {
		LEFT: 37,
		RIGHT: 39,
		UP: 38,
		DOWN: 40,
		SPACE: 32,
		RESET: 82 // restart
	},
	directions = {
		LEFT: 'l',
		RIGHT: 'r',
		TOP: 't',
		BOTTOM: 'b'
	},
	cvsGround = $("#ground")[0],
	cvsPlayer = $('#player')[0],
	cvsControls = $('#controls')[0],
    ctxGround = cvsGround.getContext('2d'),
	ctxPlayer = cvsPlayer.getContext('2d'),
	ctxControls = cvsControls.getContext('2d'),
	messageDiv = $("#message"),
	kekeUrl = 'images/keke_tiny.png',
	kekeReverseUrl = "images/keke_tiny_back.png",
	kekeW = 20,
	kekeH = 55,
	keke,
	kekeReverse,
	previousCollisionId = '',
    width = 800,
    height = 500,
	startLocation = {
		x: 15,
		y: height - 110
	},
    player = {
        x: startLocation.x,
        y: startLocation.y,
        width: 20,
        height: 55,
        speed: 2.5,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
    keys = [],
    friction = .5,
    gravity = 0.2,
	previousVelX = 0;
	jumpKeyDepressed = false,
	facingForward = true,
	playing = true,
	won = false;


_initGame(); 

var boxes = [
	// floor
	{
		id: 'floor',
	    x: 0,
	    y: height - 10,
	    width: width,
	    height: 50
	},
	// left wall
	{
		id: 'leftWall',
	    x: 0,
	    y: 0,
	    width: 10,
	    height: height
	},
	// right wall
	{
		id: 'rightWall',
	    x: width - 10,
	    y: 0,
	    width: 50,
	    height: height
	},
	// platforms
	{
		id: 'platform01',
		x: 0,
		y: height - 40,
		width: 120,
		height: 15
	},
	{
		id: 'platform02',
	    x: 80,
	    y: height - 85,
	    width: 100,
	    height: 15
	},
	{
		id: 'platform03',
	    x: 160,
	    y: height - 130,
	    width: 80,
	    height: 15
	},
	{
		id: 'platform04',
	    x: 240,
	    y: height - 175,
	    width: 80,
	    height: 15
	},
	{
		id: 'platform05',
	    x: 370,
	    y: height - 80,
	    width: 80,
	    height: 15
	},
	{
		id: 'platform06',
	    x: 440,
	    y: height - 100,
	    width: 40,
	    height: 15
	},
	{
		id: 'platform07',
	    x: 500,
	    y: height - 100,
	    width: 40,
	    height: 15
	},
	{
		id: 'platform08',
	    x: 560,
	    y: height - 130,
	    width: 40,
	    height: 15
	},
	{
		id: 'platform09',
	    x: 620,
	    y: height - 140,
	    width: 40,
	    height: 15
	},
	{
		id: 'platform10',
	    x: 680,
	    y: height - 120,
	    width: 40,
	    height: 15
	},
	{
		id: 'platform11',
	    x: 750,
	    y: height - 110,
	    width: 40,
	    height: 15
	}];

cvsGround.width = cvsPlayer.width = cvsControls.width = width;
cvsGround.height = cvsPlayer.height = cvsControls.height = height;

function update() {
    // check keys
    if (keys[controlKeys.UP] || keys[controlKeys.SPACE]) {
        // up arrow or space
        if (!player.jumping && player.grounded && !jumpKeyDepressed) {
            player.jumping = true;
            player.grounded = false;
			jumpKeyDepressed = true;
            player.velY = -player.speed * 2;
        }
    }
	previousVelX = player.velX;
	
    if (keys[controlKeys.RIGHT]) {
        // right arrow
        if (player.velX < player.speed) {
			facingForward = true;
			player.velX++;
		}
	}
	if (keys[controlKeys.LEFT]) {         // left arrow         
		if (player.velX > -player.speed) {
			facingForward = false;
    		player.velX--;
        }
    }

    player.velX *= friction;
    player.velY += gravity;

    player.grounded = false;

    ctxGround.clearRect(0, 0, width, height);
    ctxGround.beginPath();
	ctxGround.fillStyle = 'black';

    for (var i = 0; i < boxes.length; i++) {

        ctxGround.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);

        var col = collisionCheck(player, boxes[i]);

        if (col.direction === directions.LEFT || col.direction === directions.RIGHT) {
            player.velX = 0;
            player.jumping = false;
			if(col.id === 'rightWall') {
				playing = false;
				_wonGame();
			}
        } else if (col.direction === directions.BOTTOM) {
            player.grounded = true;
            player.jumping = false;
			if(col.id === 'floor') {
				playing = false;
				_death();
			}
        } else if (col.direction === directions.TOP) {
            player.velY *= -1;
        }
		previousCollisionId = col.id;
    }

    if(player.grounded){
         player.velY = 0;
    }

    player.x += player.velX;
    player.y += player.velY;

	var newKekeX = player.x;
	var newKekeY = player.y;
	
    ctxGround.fill();
    // ctxGround.fillStyle = 'aqua';
    // ctxGround.fillRect(player.x, player.y, player.width, player.height);
//	console.log('player.velX = ' + player.velX + ', previousVelX = ' + previousVelX);
	if(facingForward) {
		ctxPlayer.drawImage(keke, player.x, player.y, kekeW, kekeH);
		
	} else {
		ctxPlayer.drawImage(kekeReverse, player.x, player.y, kekeW, kekeH);
	}

	if(playing) {
	    requestAnimationFrame(update);
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
                collision.direction = directions.TOP;
                shapeA.y += oY;
				collision.id = shapeB.id;
            } else {
                collision.direction = directions.BOTTOM;
                shapeA.y -= oY;
				collision.id = shapeB.id;
            }
        } else {
            if (vX > 0) {
                collision.direction = directions.LEFT;
                shapeA.x += oX;
				collision.id = shapeB.id;
            } else {
                collision.direction = directions.RIGHT;
                shapeA.x -= oX;
				collision.id = shapeB.id;
            }
        }
    }
    return collision;
}

function _death() {
	console.log('died');
	messageDiv.html('GAME OVER! Press [r] to restart.');
}

function _wonGame() {
	console.log('won');
	messageDiv.html('CONGRATULATIONS! You won. Press [r] to restart.');
}

function _addKeke() {
	keke = new Image();
	kekeReverse = new Image();
	keke.onload = function() {
		console.log('keke/onload');
		console.log(ctxGround);
		ctxGround.drawImage(keke, startLocation.x, startLocation.y, kekeW, kekeH);
		update();
	}
	keke.src = kekeUrl;
	kekeReverse.src = kekeReverseUrl;
	console.log('keke = ');
	console.log(keke);
	
}
function _initGame() {
	for(var key in keys) {
		keys[key] = false;
	}
	messageDiv.html("Try to get to the other side without falling. Controls: arrow keys to move, and space to jump.");
	playing = true;
	won = false;
	player.jumping = false;
	player.grounded = false;
	player.x = startLocation.x;
	player.y = startLocation.y;
}

function _restartGame() {
	_initGame();
    requestAnimationFrame(update);
}

// document.body.addEventListener('keydown', function (e) {
	$(document).keydown(function(e) {
	// console.log('keydown key code = ' + e.keyCode);
	if(playing) {
	    keys[e.keyCode] = true;
	} else if(e.keyCode === controlKeys.RESET) {
		_restartGame();
	}
});

// document.body.addEventListener('keyup', function (e) {
$(document).keyup(function(e) {
	if(playing) {
		if(e.keyCode === controlKeys.SPACE || e.keyCode === controlKeys.UP) {
			jumpKeyDepressed = false;
		}
	    keys[e.keyCode] = false;
	}

});

$(document).ready(function() {
	//update();
	_addKeke();
})