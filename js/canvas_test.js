(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var directions = {
	LEFT: 'l',
	RIGHT: 'r',
	TOP: 't',
	BOTTOM: 'b'
};

var canvas = document.getElementById('canvas'),
	messagesDiv = document.getElementById('messages'),
	previousCollisionId = '',
    ctx = canvas.getContext('2d'),
    width = 800,
    height = 500,
	startLocation = {
		x: 10,
		y: height - 55
	},
    player = {
        x: startLocation.x,
        y: startLocation.y,
        width: 5,
        height: 5,
        speed: 2.5,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
    keys = [],
    friction = .5,
    gravity = 0.25,
	playing = true;

var boxes = [
	// left wall
	{
		id: 'leftWall',
	    x: 0,
	    y: 0,
	    width: 10,
	    height: height
	},
	// floor
	{
		id: 'floor',
	    x: 0,
	    y: height - 2,
	    width: width,
	    height: 50
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
		width: 80,
		height: 40
	},
	{
		id: 'platform02',
	    x: 80,
	    y: height - 80,
	    width: 80,
	    height: 40
	},
	{
		id: 'platform03',
	    x: 160,
	    y: height - 120,
	    width: 80,
	    height: 40
	},
	{
		id: 'platform04',
	    x: 240,
	    y: height - 160,
	    width: 80,
	    height: 40
	},
	{
		id: 'platform05',
	    x: 340,
	    y: height - 80,
	    width: 80,
	    height: 40
	},
	{
		id: 'platform06',
	    x: 440,
	    y: height - 100,
	    width: 40,
	    height: 40
	},
	{
		id: 'platform07',
	    x: 500,
	    y: height - 100,
	    width: 40,
	    height: 40
	},
	{
		id: 'platform08',
	    x: 560,
	    y: height - 130,
	    width: 40,
	    height: 40
	},
	{
		id: 'platform09',
	    x: 620,
	    y: height - 140,
	    width: 40,
	    height: 40
	},
	{
		id: 'platform10',
	    x: 680,
	    y: height - 120,
	    width: 40,
	    height: 40
	},
	{
		id: 'platform11',
	    x: 750,
	    y: height - 110,
	    width: 40,
	    height: 40
	}];

canvas.width = width;
canvas.height = height;

function update() {
    // check keys
    if (keys[38] || keys[32]) {
        // up arrow or space
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 2;
        }
    }
    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {
			player.velX++;
		}
	}
	if (keys[37]) {         // left arrow         
		if (player.velX > -player.speed) {
    		player.velX--;
        }
    }

	if(keys[82]) { // reset 
		player.x = startLocation.x;
        player.y = startLocation.y;
	}

    player.velX *= friction;
    player.velY += gravity;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'black';
    ctx.beginPath();

    player.grounded = false;
    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);

        var col = collisionCheck(player, boxes[i]);
		if(col.id !== previousCollisionId) {
			// console.log('post collision check, dir = ' + col.direction + ', id = ' + col.id);
		}
        if (col.direction === directions.LEFT || col.direction === directions.RIGHT) {
			if(col.id === 'rightWall') {
				playing = false;
				_wonGame();
			} else {
	            player.velX = 0;
	            player.jumping = false;
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

    ctx.fill();
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.width, player.height);

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
	messages.html = '<p>YOU DIED, PRESS [R] TO TRY AGAIN</p>';
}

function _wonGame() {
	console.log('won');
	messages.html = '<p>CONGRATULATIONS! YOU WIN</p>';
}


document.body.addEventListener('keydown', function (e) {
//	console.log('keydown key code = ' + e.keyCode);
    keys[e.keyCode] = true;
});

document.body.addEventListener('keyup', function (e) {
    keys[e.keyCode] = false;
});

window.addEventListener('load', function () {
    update();
});
