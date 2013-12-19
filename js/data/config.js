var config = {
	stageFrame: [
	{
		id: 'top',
		x: 0,
		y: 0,
		width: stageConfig.width,
		height: 10
	},
	{
		id: 'bottom',
	    x: 0,
	    y: stageConfig.height - 40,
	    width: stageConfig.width,
	    height: 50
	},
	{
		id: 'left',
	    x: 0,
	    y: 0,
	    width: 10,
	    height: stageConfig.height
	},
	{
		id: 'right',
	    x: stageConfig.width - 10,
	    y: 0,
	    width: 50,
	    height: stageConfig.height
	}],
	backLayers: [{
		id: 'farMountains',
		imgUrl: 'assets/images/hills04_grey.png',
		startX: -200,
		startY: 0,
		width: 2048,
		height: 500,
		speed: 0.1
	},
	{
		id: 'nearHills',
		imgUrl: 'assets/images/hills03_grey.png',
		startX: -200,
		startY: stageConfig.height - 320,
		width: 2048,
		height: 256,
		speed: 0.3
	},
	{
		id: 'treeLine',
		imgUrl: 'assets/images/tree01.png',
		x: 500,
		y: -75,
		width: 256,
		height: 512,
		startX: 0,
		startY: stageConfig.height - 300,
		speed: 3
	}],
	player: {
		images: {
			forward: 'assets/images/keke.png',
			reverse: 'assets/images/keke_tiny_reverse.png'
		},
        x: stageConfig.width/2,
        y: stageConfig.height - 130,
        width: 20,
        height: 55,
        speed: 2.5,
		jumpTime: 5
    },
	foreLayers: [{
		id: 'trees',
		imgUrl: 'assets/images/tree01.png',
		x: 0,
		y: 0,
		width: 256,
		height: 512,
		startX: 0,
		startY: 0,
		speed: 4.5
	},
	{
		id: 'trees',
		imgUrl: 'assets/images/tree01.png',
		x: 0,
		y: 0,
		width: 256,
		height: 512,
		startX: 0,
		startY: 0,
		speed: 5
	}],
	moveSpeed: 50,
    friction: 0.5,
    gravity: 0.2

};

var player,
	wallHolder,
	backgroundHolder1,
	background1 = {
		imgUrl: 'assets/images/hills04_grey.png',
		startX: -200,
		startY: 0,
		width: 2048,
		height: 500,
		// speed: 250
		speed: 0.1
	},
	backgroundHolder2,
	background2 = {
		imgUrl: 'assets/images/hills03_grey.png',
		startX: -200,
		startY: stageConfig.height - 320,
		width: 2048,
		height: 256,
		// speed: 250
		speed: 0.3
	},
	foregroundHolder,
	foreground = {
		images: [{
			url: 'assets/images/tree01.png',
			x: 500,
			y: -75,
			width: 256,
			height: 512
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
        width: 20,
        height: 55,
        speed: 2.5,
		jumpTime: 5,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: true
    },
	kekeUrl = 'assets/images/keke.png',
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
	playing = true,
	won = false;
