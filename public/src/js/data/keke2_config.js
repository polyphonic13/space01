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
	// IMAGES
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
		startButton: 'images/start_button.png',
		quitButton: 'images/quit_button.png',
		greyRect: 'images/grey_rect32x32.png',
		heart: 'images/heart.png',
		invisibleBg: 'images/invisible.png'
	},
	// SPRITES
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
	// CONTROLS
	controls: {
		keys: [{
			name: 'quit',
			type: 'ControlKey',
			attrs: {
				inputCode: Polyworks.InputCodes.QUIT,
				events: {
					pressed: {
						type: Polyworks.Events.CHANGE_STATE,
						value: 'quit'
					}
				}
			}
		},
		{
			name: 'left',
			type: 'ControlKey',
			attrs: {
				inputCode: Polyworks.InputCodes.LEFT
			}
		},
		{
			name: 'right',
			type: 'ControlKey',
			attrs: {
				inputCode: Polyworks.InputCodes.RIGHT
			}
		},
		{
			name: 'up',
			type: 'ControlKey',
			attrs: {
				inputCode: Polyworks.InputCodes.UP
			}
		}],
		buttons: {
			menu: [{
				name: 'invisBtn',
				type: 'MenuButton',
				attrs: {
					img: 'startButton',
					start: {
						x: stage.width/2 - 128,
						y: stage.height/2 - 64
					},
					inputCode: Polyworks.InputCodes.PLAY
				}
			},
			{
				name: 'quitBtn',
				type: 'MenuButton',
				attrs: {
					img: 'quitButton',
					start: {
						x: stage.width - 80,
						y: 10
					},
					inputCode: Polyworks.InputCodes.QUIT,
					event: {
						pressed: {
							type: Polyworks.Events.CHANGE_STATE,
							value: 'quit'
						}
					}
				}
			}],
			level: [{
				name: 'invisBtn',
				type: 'ControlButton',
				attrs: {
					img: 'invisibleBg',
					start: {
						x: 0,
						y: 0
					},
					width: stage.width, 
					height: stage.height,
					inputCode: Polyworks.InputCodes.RESET
				}
			},
			{
				name: 'leftBtn',
				type: 'ControlButton',
				attrs: {
					img: 'leftButton',
					start: {
						x: 20,
						y: stage.height - 80
					},
					inputCode: Polyworks.InputCodes.LEFT
				}
			},
			{
				name: 'rightBtn',
				type: 'ControlButton',
				attrs: {
					img: 'rightButton',
					start: {
						x: 120,
						y: stage.height - 80
					},
					inputCode: Polyworks.InputCodes.RIGHT
				}
			},
			{
				name: 'upBtn',
				type: 'ControlButton',
				attrs: {
					img: 'upButton',
					start: {
						x: stage.width - 80,
						y: stage.height - 80
					},
					inputCode: Polyworks.InputCodes.UP
				}
			},
			{
				name: 'quitBtn',
				type: 'MenuButton',
				attrs: {
					img: 'quitButton',
					start: {
						x: stage.width - 80,
						y: 10
					},
					inputCode: Polyworks.InputCodes.QUIT,
					event: {
						pressed: {
							type: Polyworks.Events.CHANGE_STATE,
							value: 'quit'
						}
					}
				}
			}]
		}
	},
	// STATES
	initialState: 'menu',
	states: [{
		name: 'menu',
		type: 'MenuState',
		world: {
			x: 0,
			y: 0,
			width: stage.width,
			height: stage.height
		},
		clearWorld: true,
		clearCache: false,
		controlsType: 'menu',
		elements: [{
			name: 'bg',
			type: 'Sprite',
			attrs: {
				img: 'greyRect',
				start: {
					x: 20,
					y: 20 
				},
				width: stage.width - 40,
				height: stage.height - 40
			}
		},
		{
			name: 'copy',
			type: 'GroupCollection',
			attrs: [{
				name: 'title',
				type: 'Text',
				attrs: {
					centerX: true,
					centerY: false,
					x: 0,
					y: 50,
					defaultContent: 'Keke vs. the Caterpillars',
					style: { 
						font: '30px Arial', 
						fill: '#000000',
						align: 'center'
					}
				}
			}]
		}]
	},
	{
		name: 'level0',
		type: 'LevelState',
		world: {
			x: 0,
			y: 0,
			width: 4098,
			height: stage.height
		},
		clearWorld: true,
		clearCache: false,
		controlsType: 'level',
		bounds: {
			start: 0,
			end: 4050
		},
		elements: [{
			name: 'scenery',
			type: 'Collection',
			attrs: [{
				type: 'Sprite',
				attrs: {
					img: 'sky',
					name: 'sky',
					start: {
						x: 0,
						y: 0
					},
					width: stage.width,
					height: stage.height,
					fixedToCamera: true
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'mountains',
					start: {
						x: 0,
						y: 0
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'treesBack',
					start: {
						x: 0,
						y: stage.height - 490
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'treesFore',
					start: {
						x: 0,
						y: 0
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'mountains',
					start: {
						x: 2048,
						y: 0
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'treesBack',
					start: {
						x: 2048,
						y: stage.height - 490
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'treesFore',
					start: {
						x: 2048,
						y: 0
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'grass1',
					start: {
						x: 0,
						y: stage.height - 200
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'grass2',
					start: {
						x: 2048,
						y: stage.height - 200
					}
				}
			}]
		},
		{
			name: 'terrain',
			type: 'PhysicalGroupCollection',
			attrs: [{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 0,
						y: world.height - 20
					},
					scale: [8, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 2048,
						y: world.height - 20
					},
					scale: [8, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 1000,
						y: world.height - 75
					},
					scale: [0.5, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 1200,
						y: world.height - 130
					},
					scale: [0.5, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 1400,
						y: world.height - 180
					},
					scale: [0.5, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 3100,
						y: world.height - 75
					},
					scale: [0.8, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 3300,
						y: world.height - 130
					},
					scale: [0.8, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 3500,
						y: world.height - 180
					},
					scale: [0.8, 1],
					physics: {
						immovable: true
					}
				}
			}]
		},
		{
			name: 'sectors',
			type: 'Sectors',
			attrs: [{
				type: 'Sector',
				attrs: {
					bounds: {
						start: 0,
						end: 1024
					},
					enemies: [{
						type: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							name: 'sector0-enemy0',
							start: {
								x: 800,
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
						}
					},
					{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					}],
					bonuses: []
				}
			},
			{
				type: 'Sector',
				attrs: {
					bounds: {
						start: 1024,
						end: 2048
					},
					enemies: [{
						type: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							name: 'sector1-enemy0',
							start: {
								x: 1400,
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
						}
					},
					{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					}],
					bonuses: []
				}
			},
			{
				type: 'Sector',
				attrs: {
					bounds: {
						start: 2048,
						end: 3072
					},
					enemies: [{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					},
					{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					}],
					bonuses: [{
						type: 'Sprite',
						attrs: {
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
						}
					},
					{
						type: 'Sprite',
						attrs: {
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
						}
					}]
				}
			},
			{
				type: 'Sector',
				attrs: {
					bounds: {
						start: 3072,
						end: 4098
					},
					enemies: [{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					},
					{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					}],
					bonuses: [{
						type: 'Sprite',
						attrs: {
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
						}
					}]
				}
			}]

		},
		{
			name: 'gui',
			type: 'GUIConsole',
			attrs: [/*{
				name: 'score',
				type: 'Text',
				attrs: {
					x: 15,
					y: 15,
					defaultContent: 'Score: ',
					style: { 
						font: '18px Arial', 
						fill: '#ffffff' 
					}
				}
			}, */
			{
				name: 'heartIcon',
				type: 'Sprite',
				attrs: {
					img: 'heart',
					start: {
						x: 20,
						y: 20
					}
				}
			},
			{
				name: 'health',
				type: 'Text',
				attrs: {
					x: 60,
					y: 25,
					defaultContent: '',
					style: { 
						font: '18px Arial', 
						fill: '#ffffff' 
					}
				}
			}]

		}]
	},
	{
		name: 'level1',
		type: 'LevelState',
		world: {
			x: 0,
			y: 0,
			width: 4098,
			height: stage.height
		},
		clearWorld: true,
		clearCache: false,
		controlsType: 'level',
		bounds: {
			start: 0,
			end: 4050
		},
		elements: [{
			name: 'scenery',
			type: 'Collection',
			attrs: [{
				type: 'Sprite',
				attrs: {
					img: 'sky',
					name: 'sky',
					start: {
						x: 0,
						y: 0
					},
					width: stage.width,
					height: stage.height,
					fixedToCamera: true
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'mountains',
					start: {
						x: 0,
						y: 0
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'treesBack',
					start: {
						x: 0,
						y: stage.height - 490
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'treesFore',
					start: {
						x: 0,
						y: 0
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'mountains',
					start: {
						x: 2048,
						y: 0
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'treesBack',
					start: {
						x: 2048,
						y: stage.height - 490
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'treesFore',
					start: {
						x: 2048,
						y: 0
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'grass1',
					start: {
						x: 0,
						y: stage.height - 200
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'grass2',
					start: {
						x: 2048,
						y: stage.height - 200
					}
				}
			}]
		},
		{
			name: 'terrain',
			type: 'PhysicalGroupCollection',
			attrs: [{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 0,
						y: world.height - 20
					},
					scale: [8, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 2048,
						y: world.height - 20
					},
					scale: [8, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 1000,
						y: world.height - 75
					},
					scale: [0.5, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 1200,
						y: world.height - 130
					},
					scale: [0.5, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 1400,
						y: world.height - 180
					},
					scale: [0.5, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 3100,
						y: world.height - 75
					},
					scale: [0.8, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 3300,
						y: world.height - 130
					},
					scale: [0.8, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				type: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 3500,
						y: world.height - 180
					},
					scale: [0.8, 1],
					physics: {
						immovable: true
					}
				}
			}]
		},
		{
			name: 'sectors',
			type: 'Sectors',
			attrs: [{
				type: 'Sector',
				attrs: {
					bounds: {
						start: 0,
						end: 1024
					},
					enemies: [{
						type: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							name: 'sector0-enemy0',
							start: {
								x: 800,
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
						}
					},
					{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					}],
					bonuses: []
				}
			},
			{
				type: 'Sector',
				attrs: {
					bounds: {
						start: 1024,
						end: 2048
					},
					enemies: [{
						type: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							name: 'sector1-enemy0',
							start: {
								x: 1400,
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
						}
					},
					{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					}],
					bonuses: []
				}
			},
			{
				type: 'Sector',
				attrs: {
					bounds: {
						start: 2048,
						end: 3072
					},
					enemies: [{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					},
					{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					}],
					bonuses: [{
						type: 'Sprite',
						attrs: {
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
						}
					},
					{
						type: 'Sprite',
						attrs: {
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
						}
					}]
				}
			},
			{
				type: 'Sector',
				attrs: {
					bounds: {
						start: 3072,
						end: 4098
					},
					enemies: [{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					},
					{
						type: 'AnimatedEnemy',
						attrs: {
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
						}
					}],
					bonuses: [{
						type: 'Sprite',
						attrs: {
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
						}
					}]
				}
			}]

		},
		{
			name: 'gui',
			type: 'GUIConsole',
			attrs: [/*{
				name: 'score',
				type: 'Text',
				attrs: {
					x: 15,
					y: 15,
					defaultContent: 'Score: ',
					style: { 
						font: '18px Arial', 
						fill: '#ffffff' 
					}
				}
			}, */
			{
				name: 'heartIcon',
				type: 'Sprite',
				attrs: {
					img: 'heart',
					start: {
						x: 20,
						y: 20
					}
				}
			},
			{
				name: 'health',
				type: 'Text',
				attrs: {
					x: 60,
					y: 25,
					defaultContent: '',
					style: { 
						font: '18px Arial', 
						fill: '#ffffff' 
					}
				}
			}]

		}]
	},
	{
		name: 'completedLevel',
		type: 'State',
		world: {
			x: 0,
			y: 0,
			width: stage.width,
			height: stage.height
		},
		clearWorld: true,
		clearCache: false,
		elements: [{
			name: 'copy',
			type: 'GroupCollection',
			attrs: [{
				name: 'bg',
				type: 'Sprite',
				attrs: {
					img: 'greyRect',
					start: {
						x: 20,
						y: 20
					},
					// fixedToCamera: true,
					width: stage.width - 40,
					height: stage.height - 40,
				}
			},
			{
				name: 'title',
				type: 'Text',
				attrs: {
					centerX: true,
					centerY: true,
					x: stage.width/2,
					y: stage.height/2,
					defaultContent: 'Level Completed',
					fixedToCamera: true,
					style: { 
						font: '30px Arial', 
						fill: '#000000',
						align: 'center'
					}
				}
			}]
		}]

	},
		{
		name: 'quit',
		type: 'State',
		world: {
			x: 0,
			y: 0,
			width: stage.width,
			height: stage.height
		},
		clearWorld: true,
		clearCache: false,
		elements: [{
			name: 'copy',
			type: 'GroupCollection',
			attrs: [{
				name: 'bg',
				type: 'Sprite',
				attrs: {
					img: 'greyRect',
					start: {
						x: 20,
						y: 20
					},
					// fixedToCamera: true,
					width: stage.width - 40,
					height: stage.height - 40,
				}
			},
			{
				name: 'title',
				type: 'Text',
				attrs: {
					centerX: true,
					centerY: true,
					x: stage.width/2,
					y: stage.height/2,
					defaultContent: 'Game Over',
					fixedToCamera: true,
					style: { 
						font: '30px Arial', 
						fill: '#000000',
						align: 'center'
					}
				}
			}]
		}]

	}],
	player: {
		name: 'keke',
		type: 'AnimatedPlayer',
		attrs: {
			spriteType: 'AnimatedSprite',
			img: 'keke',
			width: 76,
			height: 148,
			setSize: {
				width: 50,
				height: 140
			},
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
			speed: {
				x: 150,
				y: 350,
			},
			controls: {
				left: Polyworks.InputCodes.LEFT,
				right: Polyworks.InputCodes.RIGHT,
				jump: Polyworks.InputCodes.UP
			},
			health: 100,
			damage: 5,
			jumping: false,
			justJumped: false,
			defaultAnimation: 'idleL',
			animations: kekeAnimations,
			facingForward: true
		}
	}
};