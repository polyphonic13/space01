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
	images: [{
		id: 'stageBg',
		src: 'images/flat_background.jpg'
	},
	{
		id: 'moon',
		src: 'images/moon.png'
	},
	{
		id: 'grassO1a',
		src: 'images/grass01a.png'
	},
	{
		id: 'tree01',
		src: 'images/tree01.png'
	},
	{
		id: 'grass01b',
		src: 'images/grass01b.png'
	},
	{
		id: 'thorns01',
		src: 'images/thorns01.png'
	},
	{
		id: 'grass01g',
		src: 'images/grass01g.png'
	},
	{
		id: 'tree02',
		src: 'images/tree02.png'
	},
	{
		id: 'tree03',
		src: 'images/tree03.png'
	},
	{
		id: 'grass01h',
		src: 'images/grass01h.png'
	},
	{
		id: 'caterpillar01a',
		src: 'images/caterpillar01a.png'
	},
	{
		id: 'candyCane01',
		src: 'images/candy_cane01.png'
	},
	{
		id: 'keke',
		src: 'images/keke_character2.png'
	},
	{
		id: 'heart',
		src: 'images/heart.png'
	},
	{
		id: 'quitButton',
		src: 'images/quit_button.png'
	},
	{
		id: 'joystickSmCircle',
		src: 'images/joystick_sm_circle.png'
	}],
	level: {
		points: 50000,
		perfectPoints: 113000,
		cleared: false,
		minX: 5,
		// maxX: -389,
		maxX: -455,
		fill: '#000000',
		stroke: '#000000',
		strokeWidth: 2,
		views: [{
			id: 'night_sky',
			type: 'Image',
			x: 0,
			y: 0,
			width: stageConfig.width,
			height: stageConfig.height,
			src: 'stageBg'
		},
		{
			id: 'moon',
			type: 'Image',
			x: (stageConfig.height > 300) ? stageConfig.width - 256 : stageConfig.width - (256/2),
			y: 0,
			width: (stageConfig.height > 300) ? 256 : 256/2,
			height: (stageConfig.height > 300) ? 247 : 256/2,
			src: 'moon'
		}]
	},
	scrollingLayers: [{
		id: 'clouds1',
		src: 'images/clouds.png',
		x: 0,
		y: 0,
		width: 2048,
		height: 490,
		speed: -1
	},
	{
		id: 'clouds2',
		src: 'images/clouds.png',
		x: 2048,
		y: 0,
		width: 2048,
		height: 490,
		speed: -1
	}],
	playerMovementLayers: [{
		id: 'mountains',
		src: 'images/hills03_grey.png',
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
		src: 'images/trees_back01.png',
		x: -5,
		y: 80,
		width: 2048,
		// height: 350,
		height: stageConfig.height - 150,
		speed: 1.33
	// },
	// {
	// 	id: 'foregroundTrees2',
	// 	src: 'images/trees_fore01.png',
	// 	x: 0,
	// 	y: stageConfig.height - 550,
	// 	width: 2048,
	// 	height: 500,
	// 	speed: 5
	// },
	// {
	// 	id: 'foregroundTrees3',
	// 	src: 'images/trees_fore01.png',
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
			height: 100,
			// fill: 'green',
			fill: '#000000',
			image: {
				src: 'grassO1a',
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
			// fill: 'green',
			fill: '#000000',
			image: {
				src: 'tree01',
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
			// fill: 'green',
			fill: '#000000',
			image: {
				src: 'grass01b',
				x: 976,
				y: stageConfig.height - 191,
				width: 1024,
				height: 124
			}
		},
		{
			id: 'thorns01',
			direction: 'both',
			x: 2000,
			y: stageConfig.height - 65,
			width: 120,
			height: 100,
			// fill: 'red',
			fill: '#000000',
			damage: -3,
			image: {
				src: 'thorns01',
				x: 2000,
				y: stageConfig.height - 155,
				width: 120,
				height: 100
			}
		},
		{
			id: 'floor1c',
			direction: 'horizontal',
			x: 2120,
			y: stageConfig.height - 80,
			width: 512,
			height: 500,
			// fill: 'green',
			fill: '#000000',
			image: {
				src: 'grass01g',
				x: 2120,
				y: stageConfig.height - 177,
				width: 512,
				height: 110
			}
		
		},
		{
			id: 'tree02',
			direction: 'horizontal',
			x: 2320,
			y: stageConfig.height - 143,
			width: 220,
			height: 5,
			// fill: 'green',
			fill: '#000000',
			image: {
				src: 'tree02',
				x: 2300,
				y: stageConfig.height - 530,
				width: 269,
				height: 476
				
			}
		},
		{
			id: 'tree03',
			direction: 'horizontal',
			x: 2640,
			y: stageConfig.height - 210,
			width: 210,
			height: 5,
			// fill: 'green',
			fill: '#000000',
			image: {
				src: 'tree03',
				x: 2600,
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
			height: 100,
			// fill: 'green',
			fill: '#000000',
			image: {
				src: 'grass01h',
				x: 2622,
				y: stageConfig.height - 211,
				width: 512,
				height: 124,
			}

		}]
	},
	enemies: {
		caterpillar01: {
			type: 'SpriteEnemy',
			x: 600,
			y: stageConfig.height - 100,
			width: 142,
			height: 30,
			sprite: {
				src: 'caterpillar01a',
				x: 0,
				y: 0,
				index: 0,
				frameRate: 14
			},
			defaultAnimation: 'idleLeft',
			animations: caterpillarAnimations,
			speed: 6,
			damage: -3,
			health: 5,
			alive: true
		},
		caterpillar02: {
			type: 'SpriteEnemy',
			x: 950,
			y: stageConfig.height - 120,
			width: 142,
			height: 30,
			sprite: {
				src: 'caterpillar01a',
				x: 0,
				y: 0,
				index: 0,
				frameRate: 14
			},
			defaultAnimation: 'idleLeft',
			animations: caterpillarAnimations,
			speed: 6,
			damage: -3,
			health: 5,
			alive: true
		},
		caterpillar03: {
			type: 'SpriteEnemy',
			x: 1400,
			y: stageConfig.height - 120,
			width: 142,
			height: 30,
			sprite: {
				src: 'caterpillar01a',
				x: 0,
				y: 0,
				index: 0,
				frameRate: 14
			},
			defaultAnimation: 'idleLeft',
			animations: caterpillarAnimations,
			speed: 6,
			damage: -5,
			health: 10,
			alive: true
		},
		caterpillar04: {
			type: 'SpriteEnemy',
			x: 2300,
			y: stageConfig.height - 120,
			width: 142,
			height: 30,
			sprite: {
				src: 'caterpillar01a',
				x: 0,
				y: 0,
				index: 0,
				frameRate: 14
			},
			defaultAnimation: 'idleLeft',
			animations: caterpillarAnimations,
			movement: {
		      amplitude: 100,
		      period: 5000
			},
			speed: 6,
			damage: -10,
			health: 50,
			alive: true
		}
		
	},
	bonuses: {
		candyCane01: {
			x: 1500,
			y: stageConfig.height - 300,
			width: 23,
			height: 56,
			views: [{
				type: 'Image',
				x: 0,
				y: 0,
				width: 23,
				height: 56,
				src: 'candyCane01'
			}],
			speed: 6,
			boost: 5,
			collected: false
		},
		candyCane02: {
			x: 2750,
			y: stageConfig.height - 380,
			width: 23,
			height: 56,
			views: [{
				type: 'Image',
				x: 0,
				y: 0,
				width: 23,
				height: 56,
				src: 'candyCane01'
			}],
			speed: 6,
			boost: 5,
			collected: false
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
			src: 'keke',
			x: 0,
			y: 0,
			index: 0,
			frameRate: 14
		},
		defaultAnimation: 'idleRight',
		animations: kekeAnimations,
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
			src: 'heart',
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
			id: 'joystick',
			type: 'joystick'
		},
		{
			id: 'quitButton',
			type: 'controlButton',
			src: 'quitButton',
			x: 10,
			y: 10,
			width: 35,
			height: 35
		}]
	},
	friction: 0.5,
	gravity: 0.67
};
