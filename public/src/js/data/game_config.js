var gameConfig = {
	stageBgColor: {
		x: 0,
		y: 0,
		width: stageConfig.width,
		height: stageConfig.height,
		fill: '#000000',
		stroke: '#000000',
		strokeWidth: 1
	},
	stageBg: {
		imgUrl: 'images/night_sky.jpg',
		x: 0,
		y: 0,
		width: stageConfig.width,
		// height: stageConfig.height
		// height: 500
		height: (stageConfig.width * 0.625)
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
		    y: stageConfig.height - 10,
		    width: stageConfig.width,
		    height: 10
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
		x: 0,
		// y: 50,
		y: 30,
		width: 2048,
		// height: 256,
		// height: stageConfig.height - 200,
		height: (stageConfig.width * 0.625),
		speed: 0.67
	},
	{
		id: 'backgroundTrees',
		imgUrl: 'images/trees_back01.png',
		x: -5,
		y: 80,
		width: 2048,
		// height: 350,
		height: stageConfig.height - 150,
		speed: 1.33
	// },
	// {
	// 	id: 'foregroundTrees2',
	// 	imgUrl: 'images/trees_fore01.png',
	// 	x: 0,
	// 	y: stageConfig.height - 550,
	// 	width: 2048,
	// 	height: 500,
	// 	speed: 5
	// },
	// {
	// 	id: 'foregroundTrees3',
	// 	imgUrl: 'images/trees_fore01.png',
	// 	x: 2048,
	// 	y: stageConfig.height - 550,
	// 	width: 2048,
	// 	height: 500,
	// 	speed: 5
	}],
	ground: {
		// speed: 3,
		speed: 6,
		rects: [// {
		// 			id: 'floor1',
		// 			x: -48,
		// 			y: stageConfig.height - 60,
		// 			width: 2048,
		// 			height: 50,
		// 			fill: '#000000'
		// 		},
		{
			id: 'floor1a',
			x: -48,
			y: stageConfig.height - 60,
			width: 512,
			height: 50,
			fill: '#000000',
			image: {
				id: 'grass01a',
				imgUrl: 'images/grass01a.png',
				x: -48,
				y: stageConfig.height - 121,
				width: 512,
				height: 74
			}
		},
		{
			id: 'floor1b',
			x: 464,
			y: stageConfig.height - 60,
			width: 512,
			height: 50,
			fill: '#000000',
			image: {
				id: 'grass01b',
				imgUrl: 'images/grass01b.png',
				x: 464,
				y: stageConfig.height - 121,
				width: 512,
				height: 74,
				speed: 6
			}
		},
		{
			id: 'floor1c',
			x: 1056,
			y: stageConfig.height - 60,
			width: 512,
			height: 50,
			fill: '#000000',
			image: {
				id: 'grass01c',
				imgUrl: 'images/grass01c.png',
				x: 1056,
				y: stageConfig.height - 121,
				width: 512,
				height: 74,
				speed: 6
			}
		},
		{
			id: 'floor1d',
			x: 1568,
			y: stageConfig.height - 60,
			width: 512,
			height: 50,
			fill: '#000000',
			image: {
				id: 'grass01d',
				imgUrl: 'images/grass01d.png',
				x: 1568,
				y: stageConfig.height - 171,
				width: 512,
				height: 124,
				speed: 6
			}
		},
		{
			id: 'floor2',
			x: 2060,
			y: stageConfig.height - 110,
			width: 2048,
			height: 150,
			fill: '#000000',
			image: {
				id: 'grass02',
				imgUrl: 'images/grass01.png',
				x: 2060,
				y: stageConfig.height - 305,
				width: 2048,
				height: 200,
				speed: 6
			}
		},
		{
			id: 'floor3',
			x: 41088,
			y: stageConfig.height - 170,
			width: 2048,
			height: 200,
			fill: '#000000',
			image: {
				id: 'grass03',
				imgUrl: 'images/grass01.png',
				// x: -256,
				x: 4108,
				y: stageConfig.height - 355,
				width: 2048,
				height: 200,
				speed: 6
			}
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
			id: 'reverseButton',
			type: 'Image',
			imgUrl: 'images/arrow_left.png',
			x: 20,
			y: stageConfig.height - 40,
			width: 30,
			height: 30
		},
		{
			id: 'forwardButton',
			type: 'Image',
			imgUrl: 'images/arrow_right.png',
			x: 70,
			y: stageConfig.height - 40,
			width: 30,
			height: 30
		},
		{
			id: 'jumpButton',
			type: 'Image',
			imgUrl: 'images/arrow_up.png',
			x: stageConfig.width - 60,
			y: stageConfig.height - 40,
			width: 30,
			height: 30
		}],
				// {
		// 	id: 'forwardButton',
		// 	type: 'Wedge',
		// 	x: 200,
		// 	y: stageConfig.height - 50,
		// 	radius: 70,
		// 	angleDeg: 45,
		// 	fill: '#666666',
		// 	stroke: 'black',
		// 	strokeWidth: 4,
		// 	rotationDeg: 160
		// },
		// {
		// 	id: 'reverseButton',
		// 	type: 'Wedge',
		// 	x: 20,
		// 	y: stageConfig.height - 50,
		// 	radius: 70,
		// 	angleDeg: 45,
		// 	fill: '#666666',
		// 	stroke: 'black',
		// 	strokeWidth: 4,
		// 	rotationDeg: -25
		// },
		// {
		// 	id: 'jumpButton',
		// 	type: 'Circle',
		// 	x: stageConfig.width - 60,
		// 	y: stageConfig.height - 60,
		// 	radius: 40,
		// 	fill: '#666666',
		// 	stroke: '#000000',
		// 	strokeWidth: 4
		// }],
		hitRegions: {
			invisibleHitArea: {
				x: 0,
				y: 0,
				width: stageConfig.width,
				height: stageConfig.height
			},
			reverseButton: {
				x: 20, 
				y: (stageConfig.height - 40), 
				width: 50, 
				height: stageConfig.height
			},
			forwardButton: {
				x: 70, 
				y: (stageConfig.height - 40), 
				width: 120, 
				height: stageConfig.height
			},
			jumpButton: {
				x: (stageConfig.width - 60), 
				y: (stageConfig.height - 40), 
				width: stageConfig.width, 
				height: stageConfig.height
			}
			// forwardButton: {
			// 	x: 150, 
			// 	y: (stageConfig.height - 70), 
			// 	width: 270, 
			// 	height: stageConfig.height
			// },
			// reverseButton: {
			// 	x: 20, 
			// 	y: (stageConfig.height - 70), 
			// 	width: 90, 
			// 	height: stageConfig.height
			// },
			// jumpButton: {
			// 	x: (stageConfig.width - 100), 
			// 	y: (stageConfig.height - 70), 
			// 	width: stageConfig.width, 
			// 	height: stageConfig.height
			// }
		}
	},
	level: {
		minX: 10,
		maxX: -863
	},
	friction: 0.5,
	// gravity: 0.2
	gravity: 0.67
};
