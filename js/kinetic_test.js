var stage,
	player,
	platformHolder,
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
	canvas = $("#canvas")[0],
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
    friction = .5,
    gravity = 0.2,
	previousVelX = 0;
	jumpKeyDepressed = false,
	facingForward = true,
	playing = true,
	won = false,
	platforms = [
		// floor
		{
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
		},
		// platforms
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
/*
    var layer = new Kinetic.Layer();
	
    var rect = new Kinetic.Rect({
      x: player.x,
      y: player.y,
      width: player.width,
      height: player.height,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 0
    });

    layer.add(rect);
    stage.add(layer);
*/
 	platformHolder = new Kinetic.Layer();
	drawPlatforms(platformHolder);
	stage.add(platformHolder);

	playerHolder = new Kinetic.Layer();
	drawPlayer(playerHolder);
	console.log('post drawPlayer, playerHolder =');
	console.log(playerHolder);
	stage.add(playerHolder);
}

function drawPlatforms(layer) {
	var fill;
	var stroke;
	for(var i = 0; i < platforms.length; i++) {
		if(platforms[i].fill) {
			fill = platforms[i].fill;
		} else {
			fill = 'black';
		}
		if(platforms[i].stroke) {
			stroke = platforms[i].stroke;
		} else {
			stroke = 'black';
		}
		var rect = new Kinetic.Rect({
			x: platforms[i].x,
			y: platforms[i].y,
			width: platforms[i].width,
			height: platforms[i].height,
			fill: fill,
			stroke: stroke,
			strokeWidth: 1
		});
		layer.add(rect);
	}
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