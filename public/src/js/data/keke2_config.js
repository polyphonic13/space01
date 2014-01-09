var stage = {
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight
};
var world = {
	x: 0,
	y: 0,
	width: 4098,
	height: stage.height,
	gravity: 15
};

var config = {
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
		img: ControlButtonTypes.INVISIBLE_BG,
		start: {
			x: 0,
			y: 0
		},
		width: stage.width, 
		height: stage.height
	},
	{
		img: ControlButtonTypes.LEFT,
		start: {
			x: 20,
			y: stage.height - 80
		}
	},
	{
		img: ControlButtonTypes.RIGHT,
		start: {
			x: 120,
			y: stage.height - 80
		}
	},
	{
		img: ControlButtonTypes.UP,
		start: {
			x: stage.width - 80,
			y: stage.height - 80
		}
	},
	{
		img: ControlButtonTypes.QUIT,
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
		scenery: [{
			img: 'sky',
			name: 'sky',
			start: {
				x: 0,
				y: 0
			},
			width: stage.width,
			height: stage.height,
			fixedToCamera: true
		},
		{
			img: 'mountains',
			start: {
				x: 0,
				y: 0
			}
		},
		{
			img: 'treesBack',
			start: {
				x: 0,
				y: stage.height - 490
			}
		},
		{
			img: 'treesFore',
			start: {
				x: 0,
				y: 0
			}
		},
		{
			img: 'mountains',
			start: {
				x: 2048,
				y: 0
			}
		},
		{
			img: 'treesBack',
			start: {
				x: 2048,
				y: stage.height - 490
			}
		},
		{
			img: 'treesFore',
			start: {
				x: 2048,
				y: 0
			}
		},
		{
			img: 'grass1',
			start: {
				x: 0,
				y: stage.height - 200
			}
		},
		{
			img: 'grass2',
			start: {
				x: 2048,
				y: stage.height - 200
			}
		}],
		terrain: [{
			img: 'platform',
			start: {
				x: 0,
				y: world.height - 20
			},
			scale: [8, 1],
			physics: {
				immovable: true,
			}
		},
		{
			img: 'platform',
			start: {
				x: 2048,
				y: world.height - 75
			},
			scale: [8, 1],
			physics: {
				immovable: true,
			}
		},
		{
			img: 'platform',
			start: {
				x: 500,
				y: world.height - 75
			},
			physics: {
				immovable: true,
			}
		},
		{
			img: 'platform',
			start: {
				x: 800,
				y: world.height - 130
			},
			physics: {
				immovable: true,
			}
		},
		{
			img: 'platform',
			start: {
				x: 1100,
				y: world.height - 180
			},
			physics: {
				immovable: true,
			}
		},
		{
			img: 'platform',
			start: {
				x: 3100,
				y: world.height - 75
			},
			scale: [0.8, 1],
			physics: {
				immovable: true,
			}
		},
		{
			img: 'platform',
			start: {
				x: 3300,
				y: world.height - 130
			},
			scale: [0.8, 1],
			physics: {
				immovable: true,
			}
		},
		{
			img: 'platform',
			start: {
				x: 3500,
				y: world.height - 180
			},
			scale: [0.8, 1],
			physics: {
				immovable: true,
			}
		}],
		sectors: [{
			bounds: {
				start: 0,
				end: 1024
			},
			enemies: [{
				type: 'AnimatedEnemyView',
				img: 'caterpillar01',
				name: 'sector0-enemy0',
				start: {
					x: 500,
					y: 0
				},
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
				},
				damage: 5,
				health: 5,
				score: 500,
				movement: {
					speed: 0.25,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				defaultAnimation: '',
				animations: caterpillarAnimations
			},
			{
				type: 'AnimatedEnemyView',
				img: 'caterpillar01',
				name: 'sector0-enemy1',
				start: {
					x: 1000,
					y: 0
				},
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
				},
				damage: 5,
				health: 5,
				score: 500,
				movement: {
					speed: 0.5,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				defaultAnimation: '',
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
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
				},
				speed: 0.5,
				damage: 5,
				health: 10,
				score: 1000,
				defaultAnimation: '',
				animations: caterpillarAnimations
			},
			{
				img: 'caterpillar01',
				name: 'sector1-enemy1',
				start: {
					x: 1800,
					y: 0
				},
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
				},
				speed: 1,
				damage: 5,
				health: 10,
				score: 1000,
				defaultAnimation: '',
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
				type: 'AnimatedEnemyView',
				img: 'caterpillar01',
				name: 'sector2-enemy0',
				start: {
					x: 2500,
					y: 0
				},
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
				},
				damage: 5,
				health: 20,
				score: 1000,
				movement: {
					speed: 0.75,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				defaultAnimation: '',
				animations: caterpillarAnimations
			},
			{
				type: 'AnimatedEnemyView',
				img: 'caterpillar01',
				name: 'sector2-enemy1',
				start: {
					x: 3050,
					y: 0
				},
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
				},
				damage: 5,
				health: 5,
				score: 1000,
				movement: {
					speed: 1,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				defaultAnimation: '',
				animations: caterpillarAnimations
			}],
			bonuses: [{
				img: 'lollipop',
				start: {
					x: 2800,
					y: 0
				},
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
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
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
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
				type: 'AnimatedEnemyView',
				img: 'caterpillar01',
				name: 'sector3-enemy0',
				start: {
					x: 3580,
					y: 0
				},
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
				},
				damage: 5,
				health: 5,
				score: 500,
				movement: {
					speed: 1,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				defaultAnimation: '',
				animations: caterpillarAnimations
			},
			{
				type: 'AnimatedEnemyView',
				img: 'caterpillar01',
				name: 'sector3-enemy1',
				start: {
					x: 4000,
					y: 0
				},
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
				},
				damage: 5,
				health: 5,
				score: 500,
				movement: {
					speed: 1,
					type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
					formula: null
				},
				defaultAnimation: '',
				animations: caterpillarAnimations
			}],
			bonuses: [{
				img: 'lollipop',
				start: {
					x: 3100,
					y: 0
				},
				physics: {
					bounce: {
						x: 0,
						y: 0.2
					}
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
		img: 'keke',
		width: 76,
		height: 148,
		start: {
			x: stage.width/2 - 76/2,
			y: stage.height - 148
		},
		physics: {
			bounce: {
				x: 0,
				y: 0.2
			},
			collideWorldBounds: true
		},
		anchor: {
			x: 0.5,
			y: 0.5
		},
		speed: 150,
		health: 100,
		damage: 5,
		jumpHeight: 350,
		jumping: false,
		justJumped: false,
		defaultAnimation: 'idleL',
		animations: kekeAnimations,
		facingForward: true
	}
};