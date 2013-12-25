var gameConfig = {
	stageBg: {
		imgUrl: 'images/night_sky.png',
		x: 0,
		y: 0,
		width: stageConfig.width,
		// height: stageConfig.height
		height: 500
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
	scrollingLayers: [{
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
	}],
	playerMovementLayers: [{
		id: 'mountains',
		imgUrl: 'images/hills03_grey.png',
		x: -100,
		// y: 50,
		y: 30,
		width: 2048,
		// height: 256,
		height: stageConfig.height - 200,
		// speed: 0.3
		speed: 1
	},
	{
		id: 'backgroundTrees',
		imgUrl: 'images/trees_back01.png',
		x: -64,
		y: 80,
		width: 2048,
		// height: 350,
		height: stageConfig.height - 150,
		// speed: 0.7
		speed: 2
	},
	{
		id: 'grass01',
		imgUrl: 'images/grass01.png',
		// x: -256,
		x: 0,
		y: stageConfig.height - 120,
		width: 2048,
		height: 82,
		// speed: 3
		speed: 6
	},
	{
		id: 'grass01',
		imgUrl: 'images/grass01.png',
		// x: -256,
		x: 2048,
		y: stageConfig.height - 170,
		width: 2048,
		height: 82,
		// speed: 3
		speed: 6
	
/*	},
	{
		id: 'foregroundTrees2',
		imgUrl: 'images/trees_fore01.png',
		x: 1792,
		y: -40,
		width: 2048,
		height: 500,
		// speed: 3
		speed: 6
	},
	{
		id: 'foregroundTrees3',
		imgUrl: 'images/trees_fore01.png',
		x: 3840,
		y: -40,
		width: 2048,
		height: 500,
		// speed: 3
		speed: 6
*/	}],
	ground: {
		// speed: 3,
		speed: 6,
		rects: [{
			id: 'floor1',
			x: 0,
			y: stageConfig.height - 75,
			width: 2048,
			height: 50,
			fill: '#000000'
		},
		{
			id: 'floor2',
			x: 2047,
			y: stageConfig.height - 125,
			width: 2048,
			height: 150,
			fill: '#000000'
		},
		{
			id: 'floor3',
			x: 4094,
			y: stageConfig.height - 75,
			width: 2048,
			height: 150,
			fill: '#000000'
		}]
	},
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
	controls: {
		views: [{
			id: 'invisibleHitArea',
			type: 'Rect',
			x: 0,
			y: 0,
			width: stageConfig.width,
			height: stageConfig.height,
			stroke: '#000000',
			fill: '#123456',
			opacity: 0
		},
		{
			id: 'forwardButton',
			type: 'Wedge',
			x: 200,
			y: stageConfig.height - 50,
			radius: 70,
			angleDeg: 45,
			fill: '#666666',
			stroke: 'black',
			strokeWidth: 4,
			rotationDeg: 160
		},
		{
			id: 'reverseButton',
			type: 'Wedge',
			x: 20,
			y: stageConfig.height - 50,
			radius: 70,
			angleDeg: 45,
			fill: '#666666',
			stroke: 'black',
			strokeWidth: 4,
			rotationDeg: -25
		},
		{
			id: 'jumpButton',
			type: 'Circle',
			x: stageConfig.width - 60,
			y: stageConfig.height - 60,
			radius: 40,
			fill: '#666666',
			stroke: '#000000',
			strokeWidth: 4
		}],
		hitRegions: {
			invisibleHitArea: {
				x: 0,
				y: 0,
				width: stageConfig.width,
				height: stageConfig.height
			},
			forwardButton: {
				x: 150, 
				y: (stageConfig.height - 70), 
				width: 270, 
				height: stageConfig.height
			},
			reverseButton: {
				x: 20, 
				y: (stageConfig.height - 70), 
				width: 90, 
				height: stageConfig.height
			},
			jumpButton: {
				x: (stageConfig.width - 100), 
				y: (stageConfig.height - 70), 
				width: stageConfig.width, 
				height: stageConfig.height
			}
		}
	},
	level: {
		minX: 86,
		maxX: -1697
	},
	friction: 0.5,
	// gravity: 0.2
	gravity: 0.5
};
