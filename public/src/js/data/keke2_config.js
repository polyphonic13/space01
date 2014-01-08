var stage = {
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight
};

var config = {
	world: {
		x: 0,
		y: 0,
		width: 4098,
		height: stage.height,
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
		leftButton: 'images/arrow_left.png',
		rightButton: 'images/arrow_right.png',
		upButton: 'images/arrow_up.png',
		quitButton: 'images/quit_button.png',
		invisibleBg: 'images/invisible.png'
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
	controls: [{
		type: ControlButtonTypes.INVISIBLE_BG,
		start: {
			x: 0,
			y: 0
		},
		width: stage.width, 
		height: stage.height
	},
	{
		type: ControlButtonTypes.LEFT,
		start: {
			x: 20,
			y: stage.height - 80
		}
	},
	{
		type: ControlButtonTypes.RIGHT,
		start: {
			x: 120,
			y: stage.height - 80
		}
	},
	{
		type: ControlButtonTypes.UP,
		start: {
			x: stage.width - 80,
			y: stage.height - 80
		}
	},
	{
		type: ControlButtonTypes.QUIT,
		start: {
			x: stage.width - 80,
			y: 10
		}
	}],
	initialState: 'level1',
	states: [{
		id: 'menu',
		type: 'State',
		views: [{
			
		}]
	},
	{
		id: 'level1',
		type: 'LevelState',
		sectors: [{
			bounds: {
				start: 0,
				end: 1024
			},
			enemies: [{
				type: 'AnimatedEnemy',
				img: 'caterpillar01',
				name: 'sector0-enemy0',
				start: {
					x: 700,
					y: 0
				},
				damage: 5,
				health: 5,
				score: 500,
				movement: {
					speed: 0.25,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				currentAnimation: '',
				animations: caterpillarAnimations
			},
			{
				type: 'AnimatedEnemy',
				img: 'caterpillar01',
				name: 'sector0-enemy1',
				start: {
					x: 1000,
					y: 0
				},
				damage: 5,
				health: 5,
				score: 500,
				movement: {
					speed: 0.5,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				currentAnimation: '',
				animations: caterpillarAnimations
			}],
			bonuses: []
		},
		{
			bounds: {
				start: 1024,
				end: 2048
			},
			enemies: [{
				img: 'caterpillar01',
				name: 'sector1-enemy0',
				start: {
					x: 1500,
					y: 0
				},
				speed: 0.5,
				damage: 5,
				health: 10,
				score: 1000,
				currentAnimation: '',
				animations: caterpillarAnimations
			},
			{
				img: 'caterpillar01',
				name: 'sector1-enemy1',
				start: {
					x: 1800,
					y: 0
				},
				speed: 1,
				damage: 5,
				health: 10,
				score: 1000,
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
				type: 'AnimatedEnemy',
				img: 'caterpillar01',
				name: 'sector2-enemy0',
				start: {
					x: 2500,
					y: 0
				},
				damage: 5,
				health: 20,
				score: 1000,
				movement: {
					speed: 0.75,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				currentAnimation: '',
				animations: caterpillarAnimations
			},
			{
				type: 'AnimatedEnemy',
				img: 'caterpillar01',
				name: 'sector2-enemy1',
				start: {
					x: 3050,
					y: 0
				},
				damage: 5,
				health: 5,
				score: 1000,
				movement: {
					speed: 1,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				currentAnimation: '',
				animations: caterpillarAnimations
			}],
			bonuses: [{
				img: 'lollipop',
				start: {
					x: 2800,
					y: 0
				},
				score: 100,
				health: 10
			},
			{
				id: 1,
				img: 'lollipop',
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
				type: 'AnimatedEnemy',
				img: 'caterpillar01',
				name: 'sector3-enemy0',
				start: {
					x: 3580,
					y: 0
				},
				damage: 5,
				health: 5,
				score: 500,
				movement: {
					speed: 1,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				currentAnimation: '',
				animations: caterpillarAnimations
			},
			{
				type: 'AnimatedEnemy',
				img: 'caterpillar01',
				name: 'sector3-enemy1',
				start: {
					x: 4000,
					y: 0
				},
				damage: 5,
				health: 5,
				score: 500,
				movement: {
					speed: 1,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				currentAnimation: '',
				animations: caterpillarAnimations
			}],
			bonuses: [{
				img: 'lollipop',
				start: {
					x: 3100,
					y: 0
				},
				score: 100,
				health: 10
			}]
		}]
	},
	{
		id: 'end_state',
		type: 'State',
		views: [{
			
		}]
	}],
	player: {
		width: 76,
		height: 148,
		physics: {
			bounce: {
				x: 0,
				y: 0.2
			}
		},
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