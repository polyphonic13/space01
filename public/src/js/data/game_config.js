var gameConfig = {
	stageBg: {
		imgUrl: 'images/night_sky.png',
		x: 0,
		y: 0,
		width: stageConfig.width,
		height: stageConfig.height
	},
	stageFrame: {
		rects: [{
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
		}]
	},
	ground: {
		speed: 3,
		rects: [{
			id: 'floor1',
			x: 0,
			y: stageConfig.height - 75,
			width: 600,
			height: 50,
			fill: '#123456'
		},
		{
			id: 'floor1',
			x: 600,
			y: stageConfig.height - 100,
			width: 600,
			height: 50,
			fill: '#123456'
		}]
	},
	scrollingLayers: [/*{
		id: 'clouds1',
		imgUrl: 'images/clouds.png',
		x: 0,
		y: 0,
		width: 2048,
		height: 490,
		speed: -1
	},
	{
		id: 'clouds2',
		imgUrl: 'images/clouds.png',
		x: 2048,
		y: 0,
		width: 2048,
		height: 490,
		speed: -1
	}*/],
	playerMovementLayers: [/*{
		id: 'mountains',
		imgUrl: 'images/hills03_grey.png',
		x: -100,
		y: 50,
		width: 2048,
		height: 256,
		speed: 0.3
	},
	{
		id: 'backgroundTrees',
		imgUrl: 'images/trees_back01.png',
		x: -64,
		y: 80,
		width: 2048,
		height: 350,
		speed: 0.7
	},
	{
		id: 'foregroundTrees1',
		imgUrl: 'images/trees_fore01.png',
		x: -256,
		y: -40,
		width: 2048,
		height: 500,
		speed: 3
	},
	{
		id: 'foregroundTrees2',
		imgUrl: 'images/trees_fore01.png',
		x: 1792,
		y: -40,
		width: 2048,
		height: 500,
		speed: 3
	},
	{
		id: 'foregroundTrees3',
		imgUrl: 'images/trees_fore01.png',
		x: 3840,
		y: -200,
		width: 2048,
		height: 500,
		speed: 3
	}*/],
 	player: {
		x: stageConfig.width / 2,
		y: stageConfig.height - 256,
		position: 0,
	    width: 76,
	    height: 128,
	    speed: 5,
	    velX: 0,
	    velY: 0,
	    jumping: false,
		justJumped: false,
	    grounded: true,
		sprite: {
			url: 'images/keke_character2.png',
			x: 0,
			y: 0,
			index: 0,
			frameRate: 14
		}
    },
	level: {
		minX: 86,
		maxX: -1697
	},
	friction: 0.5,
	gravity: 0.2
};
