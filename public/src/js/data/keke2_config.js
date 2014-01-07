var config = {
	stage: {
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight,
	},
	world: {
		x: 0,
		y: 0,
		width: 4098,
		height: document.documentElement.clientHeight,
		gravity: 15
	},
	images: {
		sky: 'images/night_sky.jpg',
		mountains: 'images/hills03_grey.png',
		treesBack: 'images/trees_back01.png',
		treesFore: 'images/trees_fore01.png',
		platform: 'images/platform.png',
		grass1: 'images/grass01.png',
		grass2: 'images/grass02.png',
		lollipop: 'images/lollipop.png',
		quitButton: 'images/quit_button.png'
	},
	sprites: {
		keke: {
			url: 'images/keke_character2.png', 
			width: 76, 
			height: 128, 
			frames: 35
		},
		caterpillar01: {
			url: 'images/caterpillar01a_sprite.png',
			width: 104, 
			height: 22, 
			frames: 12
		}
	},
	sectors: [{
		bounds: {
			start: 0,
			end: 1024
		},
		enemies: [{
			type: 'caterpillar01',
			start: {
				x: 512,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			currentAnimation: '',
			animations: caterpillarAnimations
		},
		{
			type: 'caterpillar01',
			start: {
				x: 900,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			currentAnimation: '',
			animations: caterpillarAnimations
		}],
		bonuses: [{
			type: 'lollipop',
			start: {
				x: 750,
				y: 0
			},
			score: 100,
			health: 10
		}]
	},
	{
		bounds: {
			start: 1024,
			end: 2048
		},
		enemies: [{
			type: 'caterpillar01',
			start: {
				x: 1500,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			currentAnimation: '',
			animations: caterpillarAnimations
		},
		{
			type: 'caterpillar01',
			start: {
				x: 1800,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			currentAnimation: '',
			animations: caterpillarAnimations
		}],
		bonuses: []
	},
	{
		bounds: {
			start: 2048,
			end: 3072
		},
		enemies: [{
			type: 'caterpillar01',
			start: {
				x: 2500,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			currentAnimation: '',
			animations: caterpillarAnimations
		},
		{
			type: 'caterpillar01',
			start: {
				x: 3050,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			currentAnimation: '',
			animations: caterpillarAnimations
		}],
		bonuses: [{
			type: 'lollipop',
			start: {
				x: 2800,
				y: 0
			},
			score: 100,
			health: 10
		},
		{
			id: 1,
			type: 'lollipop',
			start: {
				x: 2950,
				y: 0
			},
			score: 100,
			health: 10,
			alive: true
		},]
	},
	{
		bounds: {
			start: 3072,
			end: 4098
		},
		enemies: [{
			type: 'caterpillar01',
			start: {
				x: 3580,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			currentAnimation: '',
			animations: caterpillarAnimations
		},
		{
			type: 'caterpillar01',
			start: {
				x: 4000,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			
			currentAnimation: '',
			animations: caterpillarAnimations
		}],
		bonuses: [{
			type: 'lollipop',
			start: {
				x: 3100,
				y: 0
			},
			score: 100,
			health: 10
		}]
	}],
	player: {
		width: 76,
		height: 148,
		bounce: 0.2,
		speed: 150,
		health: 100,
		damage: 5,
		jumpHeight: 350,
		jumping: false,
		justJumped: false,
		currentAnimation: '',
		facingForward: true
	}
};