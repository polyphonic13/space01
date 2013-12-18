var stage,
	player,
	wallHolder,
	platformHolder,
	platformAnimations = {
		forward: null,
		reverse: null
	},
	currentPlaying = '',
	controls = {
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
	messageDiv = $("#message"),
	kekeUrl = 'assets/images/keke_tiny.png',
	kekeReverseUrl = "assets/images/keke_tiny_back.png",
	kekeW = 20,
	kekeH = 55,
	keke,
	kekeReverse,
	previousCollisionId = '',
    stageWidth = 800,
    stageHeight = 500,
	startLocation = {
		x: 15,
		y: stageHeight - 110
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
	playerHolder,
    keys = [],
	moveSpeed = 20,
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
	console.log('post drawPlayer, playerHolder =');
	console.log(playerHolder);
	stage.add(playerHolder);
	
	var topLayer = $('#container');
	$(window).keydown(function(e) {
		keydownHandler(e);
	});
	$(window).keyup(function(e) {
		keyupHandler(e);
	});
	stage.on("keydown", function(e) {
		console.log('keydown event, key = ' + e.keycode);
	});
	stage.on("keyup", function(e) {
		console.log('keyup event, key = ' + e.keycode);
	});
	stage.on("mouseover", function(e) {
		console.log('mouseover event');
	});
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
		case controls.LEFT:
			platformAnimations.forward.start();
			currentPlaying = 'forward';
		break;
		
		case controls.RIGHT:
			platformAnimations.reverse.start();
			currentPlaying = 'reverse';
		break;
		
		default: 
		break;
	}
}

function keyupHandler(e) {
	if(currentPlaying === 'forward') {
		platformAnimations.forward.stop();
	} else if(currentPlaying === 'reverse') {
		platformAnimations.reverse.stop();
	}
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
			x: player.x,
			y: player.y,
			image: imageObj,
			width: player.width,
			height: player.height
		});
		layer.add(playerImg);
		layer.draw(); // layer has to have draw called each time there is a change
		console.log('imageObj/onload');
    };
    imageObj.src = kekeUrl;
	console.log('drawPlayer, imageObj =');
	console.log(imageObj);
}


$(document).ready(function() {
	init();
});