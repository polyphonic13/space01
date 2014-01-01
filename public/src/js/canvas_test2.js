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
		RESET: 82, // restart,
		QUIT: 81
	},
	directions = {
		LEFT: 'l',
		RIGHT: 'r',
		TOP: 't',
		BOTTOM: 'b'
	},
	images = [{
		id: 'bg',
		src: 'images/flat_background800x500.jpg'
	},
	{
		id: 'kekeForward',
		src: 'images/keke_tiny.png'
	},
	{
		id: 'kekeReverse',
		src: 'images/keke_tiny_back.png'
	},
	{
		id: 'reverse',
		src: 'images/arrow_left.png'
	},
	{
		id: 'forward',
		src: 'images/arrow_right.png'
	},
	{
		id: 'jump',
		src: 'images/arrow_up.png'
	}],
	imageManager,
	top = 34,
	width = document.documentElement.clientWidth - 10,
    height = document.documentElement.clientHeight - 50,
	cvsBackground = $("#background")[0],
	cvsGround = $('#ground')[0],
	cvsPlayer = $('#player')[0],
	cvsControls = $('#controls')[0],
    ctxBackground = cvsBackground.getContext('2d'),
    ctxGround = cvsGround.getContext('2d'),
	ctxPlayer = cvsPlayer.getContext('2d'),
	ctxControls = cvsControls.getContext('2d'),
	messageDiv = $("#message"),
	controlDiv = $("#controlDiv"),
	previousCollisionId = '',
	startLocation = {
		x: 15,
		y: height - 210
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
	previousLocation = {
		x: startLocation.x,
		y: startLocation.y
	},
	controlButtons = {
		reverse: {
			id: 'reverse',
			x: 20,
			y: document.documentElement.clientHeight - 100,
			width: 35,
			height: 35,
			pressed: false
		},
		forward: {
			id: 'forward',
			x: 75,
			y: document.documentElement.clientHeight - 100,
			width: 35,
			height: 35,
			pressed: false
		},
		jump: {
			id: 'jump',
			x: document.documentElement.clientWidth - 60,
			y: document.documentElement.clientHeight - 100,
			width: 35,
			height: 35,
			pressed: false
		}
	},
	controls,
    keys = [],
    friction = .5,
    gravity = 0.2,
	previousVelX = 0;
	jumpKeyDepressed = false,
	facingRight = true,
	playing = true,
	won = false;


var boxes = [
	// floor
	{
		id: 'floor',
	    x: 0,
	    y: height - 60,
	    width: width,
	    height: 60,
		fill: 'red'
	},
	// left wall
	{
		id: 'leftWall',
	    x: 0,
	    y: 0,
	    width: 10,
	    height: height,
		fill: 'black'
	},
	// right wall
	{
		id: 'rightWall',
	    x: width - 10,
	    y: 0,
	    width: 50,
	    height: height,
		fill: 'black'
	},
	// platforms
	{
		id: 'platform01',
		x: 0,
		y: height - 90,
		width: 120,
		height: 15,
		fill: 'black'
	},
	{
		id: 'platform02',
	    x: 80,
	    y: height - 135,
	    width: 100,
	    height: 15,
		fill: 'black'
	},
	{
		id: 'platform03',
	    x: 160,
	    y: height - 180,
	    width: 80,
	    height: 15,
		fill: 'black'
	},
	{
		id: 'platform04',
	    x: 240,
	    y: height - 225,
	    width: 80,
	    height: 15,
		fill: 'black'
	},
	{
		id: 'platform05',
	    x: 370,
	    y: height - 130,
	    width: 80,
	    height: 15,
		fill: 'black'
	},
	{
		id: 'platform06',
	    x: 440,
	    y: height - 150,
	    width: 40,
	    height: 15,
		fill: 'black'
	},
	{
		id: 'platform07',
	    x: 500,
	    y: height - 150,
	    width: 40,
	    height: 15,
		fill: 'black'
	},
	{
		id: 'platform08',
	    x: 560,
	    y: height - 180,
	    width: 40,
	    height: 15,
		fill: 'black'
	},
	{
		id: 'platform09',
	    x: 620,
	    y: height - 190,
	    width: 40,
	    height: 15,
		fill: 'black'
	},
	{
		id: 'platform10',
	    x: 680,
	    y: height - 170,
	    width: 40,
	    height: 15,
		fill: 'black'
	},
	{
		id: 'platform11',
	    x: 750,
	    y: height - 160,
	    width: 40,
	    height: 15,
		fill: 'black'
	}];

cvsBackground.width = cvsGround.width = cvsPlayer.width = cvsControls.width = width;
cvsBackground.height = cvsGround.height = cvsPlayer.height = cvsControls.height = height;

function update() {
    // check keys
    if (keys[controlKeys.UP] || keys[controlKeys.SPACE] || controls.getJumping()) {
		trace('THERE WAS A JUMP, jumping = ' + player.jumping + ', grounded = ' + player.grounded);
		if(controls.getJumping()) {
			controls.setJumping(false);
		}
        // up arrow or space
        // if (!player.jumping && player.grounded && !jumpKeyDepressed) {
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
			jumpKeyDepressed = true;
            player.velY = -player.speed * 2;
        }
    }
	previousVelX = player.velX;
	
    if (keys[controlKeys.RIGHT] || controls.getForward()) {
        // right arrow
        if (player.velX < player.speed) {
			facingRight = true;
			player.velX++;
		}
	}
	if (keys[controlKeys.LEFT] || controls.getReverse()) {         // left arrow         
		if (player.velX > -player.speed) {
			facingRight = false;
    		player.velX--;
        }
    }

    player.velX *= friction;
    player.velY += gravity;

    player.grounded = false;


    for (var i = 0; i < boxes.length; i++) {

        // ctxGround.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);

        var col = collisionCheck(player, boxes[i]);

        if (col.direction === directions.LEFT || col.direction === directions.RIGHT) {
            player.velX = 0;
            player.jumping = false;
			if(col.id === 'rightWall') {
				playing = false;
				_wonGame();
			}
        } else if (col.direction === directions.BOTTOM) {
	// trace('HIT SOMETHING ON THE BOTTOM');
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
	
    // ctxGround.fillStyle = 'aqua';
    // ctxGround.fillRect(player.x, player.y, player.width, player.height);
//	trace('player.velX = ' + player.velX + ', previousVelX = ' + previousVelX);
	// only redraw when player has moved
	if(player.x !== previousLocation.x || player.y !== previousLocation.y) {
		ctxPlayer.clearRect((previousLocation.x-1), (previousLocation.y-1), (player.width+2), (player.height+2));
		if(facingRight) {
			ctxPlayer.drawImage(imageManager.images['kekeForward'], player.x, player.y, player.width, player.height);
		} else {
			ctxPlayer.drawImage(imageManager.images['kekeReverse'], player.x, player.y, player.width, player.height);
		}

	}


	previousLocation.x = player.x;
	previousLocation.y = player.y;
	
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
	trace('died');
	playing = false;
	messageDiv.html('GAME OVER! Press [r] to restart.');
}

function _wonGame() {
	trace('won');
	playing = false;
	messageDiv.html('CONGRATULATIONS! You won. Press [r] to restart.');
}

function _addBackground() {
	ctxBackground.drawImage(imageManager.images['bg'], 0, 0, cvsBackground.width, cvsBackground.height);
}

function _addGround() {
	ctxGround.clearRect(0, 0, width, height);

    for (var i = 0; i < boxes.length; i++) {
	    ctxGround.beginPath();
		ctxGround.fillStyle = boxes[i].fill;
		// trace('boxes[' + i + '].fill = ' + boxes[i].fill);
        ctxGround.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
	    ctxGround.fill();
    }
}

function _addKeke() {
	ctxPlayer.drawImage(imageManager.images['kekeForward'], startLocation.x, startLocation.y, player.width, player.height);
}

function _addControls() {
	controls = new Controls(controlButtons);
	controls.setImages(imageManager, cvsControls);
	// controls.addControls(controlDiv);
	controls.addControls(ctxControls);
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

function _allImagesLoaded() {
	trace('_allImagesLoaded, imageManager = ');
	trace(imageManager);
	// var msgY = document.documentElement.clientWidth - 30 + 'px'
	// trace('document.documentElement.clientWidth - 30 = ' + msgY);
	// messageDiv.attr({ top: msgY });
	_addBackground();
	_addGround();
	_addKeke();
	_addControls();
	update();
}

_initGame(); 


// document.body.addEventListener('keydown', function (e) {
	$(document).keydown(function(e) {
	// trace('keydown key code = ' + e.keyCode);
	if(e.keyCode === controlKeys.QUIT) {
		messageDiv.html("Quit Game");
		playing = false;
	} else {
		if(playing) {
		    keys[e.keyCode] = true;
		} else if(e.keyCode === controlKeys.RESET) {
			_restartGame();
		}
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
	imageManager = new ImageManager(images, _allImagesLoaded);
});

