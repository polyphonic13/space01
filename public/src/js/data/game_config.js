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
		// imgUrl: 'images/night_sky.jpg',
		imgUrl: 'images/flat_background.jpg',
		x: 0,
		y: 0,
		width: stageConfig.width,
		height: stageConfig.height,
		// height: 500
		// height: (stageConfig.width * 0.625)
	},
	stageFrame: {
		rects: [{
			id: 'top',
			x: 0,
			y: 0,
			width: stageConfig.width,
			height: 10,
			fill: '#000000'
		},
		{
			id: 'bottom',
		    x: 0,
		    y: stageConfig.height - 10,
		    width: stageConfig.width,
		    height: 10,
			fill: '#000000'
		},
		{
			id: 'left',
		    x: 0,
		    y: 0,
		    width: 10,
		    height: stageConfig.height,
			fill: '#000000'
		},
		{
			id: 'right',
		    x: stageConfig.width - 10,
		    y: 0,
		    width: 50,
		    height: stageConfig.height,
			fill: '#000000'
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
		speed: 6,
		rects: [
		{
			id: 'floor1a',
			direction: 'horizontal',
			x: -48,
			y: stageConfig.height - 60,
			width: 1024,
			height: 50,
			// fill: 'green',

			fill: '#003300',
			image: {
				imgUrl: 'images/grass01a.png',
				x: -48,
				y: stageConfig.height - 510,
				width: 1024,
				height: 463
			}
		},
		{
			id: 'tree01',
			direction: 'horizontal',
			x: 1410,
			y: stageConfig.height - 143,
			width: 220,
			height: 5,
			fill: '#003300',
			image: {
				imgUrl: 'images/tree01.png',
				x: 1390,
				y: stageConfig.height - 530,
				width: 256,
				height: 452
				
			}
		},
		{
			id: 'floor1b',
			direction: 'both',
			x: 976,
			y: stageConfig.height - 80,
			width: 1024,
			height: 50,
			// fill: 'green'
		
			fill: '#000000',
			image: {
				imgUrl: 'images/grass01b.png',
				x: 976,
				y: stageConfig.height - 191,
				width: 1024,
				height: 124
			}
		},
		{
			id: 'floor1b_flame',
			direction: 'horizontal',
			x: 2000,
			y: stageConfig.height - 55,
			width: 110,
			height: 50,
			fill: 'red',
			damage: -3
		},
		{
			id: 'floor1c',
			direction: 'horizontal',
			x: 2110,
			y: stageConfig.height - 80,
			width: 512,
			height: 500,
			// fill: 'green',
		
			fill: '#000000',
			image: {
				imgUrl: 'images/grass01g.png',
				x: 2110,
				y: stageConfig.height - 177,
				width: 512,
				height: 110
			}
		
		},
		{
			id: 'tree02',
			direction: 'horizontal',
			x: 2310,
			y: stageConfig.height - 143,
			width: 220,
			height: 5,
			fill: '#000000',
			image: {
				imgUrl: 'images/tree02.png',
				x: 2290,
				y: stageConfig.height - 530,
				width: 269,
				height: 476
				
			}
		},
		{
			id: 'tree03',
			direction: 'horizontal',
			x: 2610,
			y: stageConfig.height - 200,
			width: 220,
			height: 5,
			fill: '#000000',
			image: {
				imgUrl: 'images/tree03.png',
				x: 2590,
				y: stageConfig.height - 580,
				width: 290,
				height: 480
				
			}
		},
		{
			id: 'floor1e',
			direction: 'horizontal',
			x: 2622,
			y: stageConfig.height - 100,
			width: 512,
			height: 50,
			// fill: 'green'
		
			fill: '#000000',
			image: {
				imgUrl: 'images/grass01h.png',
				x: 2622,
				y: stageConfig.height - 211,
				width: 512,
				height: 124,
			}

		}]
	},
	enemies: {
		caterpillar01: {
			x: 800,
			y: stageConfig.height - 100,
			width: 120,
			height: 30,
			views: [{
				type: 'Rect',
				x: 0,
				y: 0,
				width: 120,
				height: 30,
				fill: '#009933',
				stroke: 'black',
				strokeWidth: 1
			}],
			movement: {
		      amplitude: 100,
		      period: 5000
			},
			speed: 6,
			damage: -3,
			health: 5,
			alive: true
		},
		caterpillar02: {
			x: 1400,
			y: stageConfig.height - 120,
			width: 120,
			height: 30,
			views: [{
				type: 'Rect',
				x: 0,
				y: 0,
				width: 120,
				height: 30,
				fill: '#339933',
				stroke: 'black',
				strokeWidth: 1
			}],
			movement: {
		      amplitude: 150,
		      period: 5000
			},
			speed: 6,
			damage: -5,
			health: 10,
			alive: true
		// },
		// caterpillar03: {
		// 	x: 2000,
		// 	y: stageConfig.height - 300,
		// 	width: 180,
		// 	height: 30,
		// 	views: [{
		// 		type: 'Rect',
		// 		x: 0,
		// 		y: 0,
		// 		width: 120,
		// 		height: 30,
		// 		fill: '#339933',
		// 		stroke: 'black',
		// 		strokeWidth: 1
		// 	}],
		// 	movement: {
		//       amplitude: 150,
		//       period: 5000
		// 	},
		// 	speed: 2,
		// 	damage: -5,
		// 	health: 10,
		// 	alive: true
		}
	},
 	player: {
		x: stageConfig.width / 2,
		y: stageConfig.height - 200,
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
		},
		damage: -5,
		health: 100
    },
	lifeMeter: {
		x: 140,
		y: stageConfig.height - 40,
		width: 100,
		height: 32,
		views: [{
			type: 'Image',
			imgUrl: 'images/heart.png',
			x: 0,
			y: 0,
			width: 32,
			height: 32
		},
		{
			type: 'Text',
			x: 35,
			y: 10,
			width: 68,
			height: 32,
			align: 'left',
			fontSize: 18,
			fontFamily: 'Arial',
			fill: '#ffffff'
		}]
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
			width: 32,
			height: 32
		},
		{
			id: 'forwardButton',
			type: 'Image',
			imgUrl: 'images/arrow_right.png',
			x: 70,
			y: stageConfig.height - 40,
			width: 32,
			height: 32
		},
		{
			id: 'pauseButton',
			type: 'Image',
			imgUrl: 'images/pause_btn.png',
			// x: stageConfig.width - 110,
			// y: stageConfig.height - 40,
			x: 20,
			y: 20,
			width: 32,
			height: 32
		},
		{
			id: 'jumpButton',
			type: 'Image',
			imgUrl: 'images/arrow_up.png',
			x: stageConfig.width - 60,
			y: stageConfig.height - 40,
			width: 32,
			height: 32
		}],
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
				height: 50
			},
			forwardButton: {
				x: 70, 
				y: (stageConfig.height - 40), 
				width: 40, 
				height: 50
			},
			pauseButton: {
				// x: (stageConfig.width - 110), 
				// y: (stageConfig.height - 40), 
				x: 15,
				y: 15,
				width: 40, 
				height: 50
			},
			jumpButton: {
				x: (stageConfig.width - 60), 
				y: (stageConfig.height - 40), 
				width: 40, 
				height: 50
			}
		}
	},
	level: {
		minX: 5,
		maxX: -589
	},
	friction: 0.5,
	gravity: 0.67
};
