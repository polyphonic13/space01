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
		
		movingBackground0: 'images/moving_background0.png',
		movingBackground1: 'images/moving_background1.png',
		movingBackground2: 'images/moving_background2.png',
		
		tree01: 'images/tree01.png',
		tree02: 'images/tree02.png',
		tree03: 'images/tree03.png',
		tree04: 'images/tree04.png',
		grass1: 'images/grass01.png',
		grass2: 'images/grass02.png',
		platform: 'images/platform.png',
		platform_grey: 'images/platform_grey.png',
		branch02Left: 'images/branch02_left.png',
		branch02Right: 'images/branch02_right.png',
		thorns: 'images/thorns02.png',
		lollipop: 'images/lollipop.png',
		leftButton: 'images/arrow_left.png',
		rightButton: 'images/arrow_right.png',
		upButton: 'images/arrow_up.png',
		startButton: 'images/start_button.png',
		nextButton: 'images/next_button.png',
		menuButton: 'images/menu_button.png',
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
		keys: {
			name: 'controlKeys',
			cl: 'ControlKey',
			attrs: [{
				name: 'quit',
				cl: 'ControlKey',
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
				cl: 'ControlKey',
				attrs: {
					inputCode: Polyworks.InputCodes.LEFT
				}
			},
			{
				name: 'right',
				cl: 'ControlKey',
				attrs: {
					inputCode: Polyworks.InputCodes.RIGHT
				}
			},
			{
				name: 'up',
				cl: 'ControlKey',
				attrs: {
					inputCode: Polyworks.InputCodes.UP
				}
			}]
		},
		buttons: {
			menu: [{
				name: 'start',
				cl: 'InputButton',
				attrs: {
					img: 'startButton',
					start: {
						x: stage.width/2 - 128,
						y: stage.height/2 - 64
					},
					inputCode: Polyworks.InputCodes.PLAY,
					events: {
						pressed: {
							type: Polyworks.Events.CHANGE_STATE,
							value: 'level'
						}
					}
				}
			},
			{
				name: 'quitBtn',
				cl: 'InputButton',
				attrs: {
					img: 'quitButton',
					start: {
						x: stage.width - 90,
						y: 15
					},
					inputCode: Polyworks.InputCodes.QUIT,
					events: {
						pressed: {
							type: Polyworks.Events.CHANGE_STATE,
							value: 'quit'
						}
					}
				}
			}
			],
			intermission: [{
				name: 'next',
				cl: 'InputButton',
				attrs: {
					img: 'nextButton',
					start: {
						x: stage.width/2 - 128,
						y: stage.height/2 - 64
					},
					inputCode: Polyworks.InputCodes.NEXT,
					events: {
						pressed: {
							type: Polyworks.Events.CHANGE_STATE,
							value: 'nextLevel'
						}
					}
				}
			},
			{
				name: 'quitBtn',
				cl: 'InputButton',
				attrs: {
					img: 'quitButton',
					start: {
						x: stage.width - 90,
						y: 15
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
				cl: 'InputButton',
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
				cl: 'InputButton',
				attrs: {
					img: 'leftButton',
					start: {
						x: 50,
						y: stage.height - 90
					},
					inputCode: Polyworks.InputCodes.LEFT
				}
			},
			{
				name: 'rightBtn',
				cl: 'InputButton',
				attrs: {
					img: 'rightButton',
					start: {
						x: 150,
						y: stage.height - 90
					},
					inputCode: Polyworks.InputCodes.RIGHT
				}
			},
			{
				name: 'upBtn',
				cl: 'InputButton',
				attrs: {
					img: 'upButton',
					start: {
						x: stage.width - 90,
						y: stage.height - 90
					},
					inputCode: Polyworks.InputCodes.UP
				}
			},
			{
				name: 'menuBtn',
				cl: 'InputButton',
				attrs: {
					img: 'menuButton',
					start: {
						x: stage.width - 90,
						y: 15
					},
					inputCode: Polyworks.InputCodes.MENU,
					events: {
						pressed: {
							type: Polyworks.Events.CHANGE_STATE,
							value: 'menu'
						}
					}
				}
			}
			]
		}
	},
	// STATES
	initialState: 'menu',
	// initialState: 'level0',
	states: [{
		name: 'menu',
		cl: 'MenuState',
		world: {
			x: 0,
			y: 0,
			width: stage.width,
			height: stage.height
		},
		clearWorld: true,
		clearCache: false,
		controlsType: 'menu',
		attrs: [
		{
			name: 'menu-group',
			cl: 'GroupCollection',
			attrs: [
			{
				name: 'bg',
				cl: 'Sprite',
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
				name: 'title',
				cl: 'Text',
				attrs: {
					centerX: true,
					centerY: false,
					x: 0,
					y: 40,
					defaultContent: 'Keke vs. the Caterpillars',
					style: { 
						font: '30px Arial', 
						fill: '#000000',
						align: 'center'
					}
				}
			}
			]
		},
		{
			name: 'menu-controls',
			cl: 'ControlButtons',
			type: 'menu',
			attrs: {
				start: {
					x: 0,
					y: 0
				}
			}
		}
		]
	},
	{
		name: 'level0',
		cl: 'LevelState',
		world: {
			x: 0,
			y: -256,
			width: 4098,
			height: stage.height + 256
		},
		clearWorld: true,
		clearCache: false,
		bounds: {
			start: 0,
			// end: 1024
			end: 4020
		},
		attrs: [{
			name: 'scenery',
			cl: 'GroupCollection',
			attrs: [{
				name: 'sky',
				cl: 'Sprite',
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
				name: 'moving_background01',
				cl: 'Sprite',
				attrs: {
					img: 'movingBackground0',
					width: 2048,
					height: stage.height * 1.5,
					start: {
						x: 0,
						y: -(stage.height * 0.5)
					}
				}
			},
			{
				name: 'moving_background02',
				cl: 'Sprite',
				attrs: {
					img: 'movingBackground0',
					width: 2048,
					height: stage.height * 1.5,
					start: {
						x: 2048,
						y: -(stage.height * 0.5)
					}
				}
			},

			{
				name: 'tree01',
				cl: 'Sprite',
				attrs: {
					img: 'tree01',
					width: stage.height,
					height: stage.height * 2,
					start: {
						x: 650,
						y: (-stage.height)
					}
				}
			},
			{
				name: 'tree02',
				cl: 'Sprite',
				attrs: {
					img: 'tree02',
					width: stage.height,
					height: stage.height * 2,
					start: {
						x: 1900,
						y: (-stage.height)
					}
				}
			},
			{
				name: 'tree03',
				cl: 'Sprite',
				attrs: {
					img: 'tree03',
					width: stage.height,
					height: stage.height * 2,
					start: {
						x: 2200,
						y: (-stage.height)
					}
				}
			},
			{
				name: 'tree04',
				cl: 'Sprite',
				attrs: {
					img: 'tree04',
					width: stage.height,
					height: stage.height * 2,
					start: {
						x: 2600,
						y: (-stage.height)
					}
				}
			},
			{
				name: 'tree05',
				cl: 'Sprite',
				attrs: {
					img: 'tree02',
					width: stage.height,
					height: stage.height * 2,
					start: {
						x: 3000,
						y: (-stage.height)
					}
				}
			},
			{
				name: 'grass0',
				cl: 'Sprite',
				attrs: {
					img: 'grass1',
					start: {
						x: 0,
						y: stage.height - 200
					}
				}
			},
			{
				name: 'grass1',
				cl: 'Sprite',
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
			cl: 'PhysicalGroupCollection',
			attrs: [
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 0,
						y: world.height - 10
					},
					scale: [32, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform0',
				cl: 'Sprite',
				attrs: {
					img: 'branch02Left',
					start: {
						x: 700,
						y: world.height - 115
					},
					setSize: [64, 16, 32, 32],
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform1',
				cl: 'Sprite',
				attrs: {
					img: 'branch02Right',
					start: {
						x: 900,
						y: world.height - 140
					},
					setSize: [64, 16, 32, 32],
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform2',
				cl: 'Sprite',
				attrs: {
					img: 'branch02Left',
					start: {
						x: 1948,
						y: world.height - 115
					},
					setSize: [64, 16, 32, 32],
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform3',
				cl: 'Sprite',
				attrs: {
					img: 'branch02Right',
					start: {
						x: 2148,
						y: world.height - 180
					},
					setSize: [64, 16, 32, 32],
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform4',
				cl: 'Sprite',
				attrs: {
					img: 'branch02Left',
					start: {
						x: 2248,
						y: world.height - 255
					},
					setSize: [64, 16, 32, 32],
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform5',
				cl: 'Sprite',
				attrs: {
					img: 'branch02Right',
					start: {
						x: 2448,
						y: world.height - 290
					},
					setSize: [64, 16, 32, 32],
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform6',
				cl: 'Sprite',
				attrs: {
					img: 'branch02Left',
					start: {
						x: 2648,
						y: world.height - 300
					},
					setSize: [64, 16, 32, 32],
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform7',
				cl: 'Sprite',
				attrs: {
					img: 'branch02Right',
					start: {
						x: 2848,
						y: world.height - 290
					},
					setSize: [64, 16, 32, 32],
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform8',
				cl: 'Sprite',
				attrs: {
					img: 'branch02Left',
					start: {
						x: 3048,
						y: world.height - 280
					},
					setSize: [64, 16, 32, 32],
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform9',
				cl: 'Sprite',
				attrs: {
					img: 'branch02Right',
					start: {
						x: 3248,
						y: world.height - 300
					},
					setSize: [64, 16, 32, 32],
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			}

			]
		},
		{
			name: 'sectors',
			cl: 'SectorManager',
			attrs: [{
				name: 'sector0',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 0,
						end: 1024
					},
					hazards: {
						name: 'level0-sector0-hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'level0-sector0-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 800,
									y: world.height - 75
								},
								physics: {
									immovable: true
								},
								damage: 10
							}
						}	
						]
					},
					enemies: {
						name: 'level0-sector0-enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level0-sector0-enemy0',
							cl: 'AnimatedEnemy',
							attrs: {
								name: 'caterpillar01-sprite',
								img: 'caterpillar01',
								spriteType: 'Sprite',
								start: {
									x: 600,
									y: 0
								},
								physics: {
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								movement: {
									speed: 0.25,
									type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
									formula: null
								},
								damage: 5,
								health: 5,
								score: 500,
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						},
						{
							name: 'level0-sector0-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								name: 'caterpillar01-sprite',
								img: 'caterpillar01',
								spriteType: 'Sprite',
								start: {
									x: 900,
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
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}] 
					},
					bonuses: {
						name: 'level0-sector0-bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: [{
							name: 'bonus0-sprite',
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 760,
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
				}
			},
			{
				name: 'sector1',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 1024,
						end: 2048
					},
					hazards: {
						name: 'level0-sector0-hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					enemies: {
						name: 'level0-sector1-enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level0-sector1-enemy0',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								spriteType: 'Sprite',
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
								movement: {
									speed: 0.25,
									type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}]
					},
					bonuses: {
						name: 'level0-sector1-bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: []
					}
				}
			},
			{
				name: 'sector2',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 2048,
						end: 3072
					},
					hazards: {
						name: 'level0-sector2-hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'level0-sector2-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2140,
									y: world.height - 75
								},
								physics: {
									immovable: true
								},
								damage: 10
							}
						},	
						{		
							name: 'level0-sector2-hazard1',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2350,
									y: world.height - 75
								},
								physics: {
									immovable: true
								},
								damage: 10
							}
						},	
						{		
							name: 'level0-sector2-hazard2',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2560,
									y: world.height - 75
								},
								physics: {
									immovable: true
								},
								damage: 10
							}
						},	
						]
					},
					enemies: {
						name: 'level0-sector2-enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level0-sector2-enemy0',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								spriteType: 'Sprite',
								start: {
									x: 2850,
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
							},
						}]
					},
					bonuses: {
						name: 'level0-sector3-bonuses',
						cl: 'PhysicalGroupCollection',
						attrs:  [{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 2740,
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
				}
			},
			{
				name: 'sector3',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 3072,
						end: 4098
					},
					hazards: {
						name: 'level0-sector0-hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					enemies: {
						name: 'level0-sector3-enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level0-sector3-enemy0',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								spriteType: 'Sprite',
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
						}]
					},
					bonuses: {
						name: 'level0-sector3-bonues',
						cl: 'PhysicalGroupCollection',
						attrs: [{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 3700,
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
				}
			}]
		},
		{
			name: 'gui',
			cl: 'GUIConsole',
			addTo: 'null',
			attrs: [{
				name: 'heartIcon',
				cl: 'Sprite',
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
				cl: 'Text',
				attrs: {
					x: 60,
					y: 25,
					defaultContent: '~{health}~',
					style: { 
						font: '18px Arial', 
						fill: '#ffffff' 
					}
				}
			}]
		},
		{
			name: 'level-controls',
			cl: 'ControlButtons',
			type: 'level',
			addTo: 'null',
			attrs: {
				start: {
					x: 0,
					y: 0
				}
			}
		}]
	},
	{
		name: 'level1',
		cl: 'LevelState',
		world: {
			x: 0,
			y: -256,
			width: 4098,
			height: stage.height + 256
		},
		clearWorld: true,
		clearCache: false,
		bounds: {
			start: 0,
			// end: 1024
			end: 4020
		},
		attrs: [{
			name: 'scenery',
			cl: 'GroupCollection',
			attrs: [{
				name: 'sky',
				cl: 'Sprite',
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
				name: 'moving_background01',
				cl: 'Sprite',
				attrs: {
					img: 'movingBackground1',
					width: 2048,
					height: stage.height * 1.5,
					start: {
						x: 0,
						y: -(stage.height * 0.5)
					}
				}
			},
			{
				name: 'moving_background02',
				cl: 'Sprite',
				attrs: {
					img: 'movingBackground2',
					width: 2048,
					height: stage.height * 1.5,
					start: {
						x: 2048,
						y: -(stage.height * 0.5)
					}
				}
			},

			{
				name: 'tree01',
				cl: 'Sprite',
				attrs: {
					img: 'tree01',
					width: stage.height,
					height: stage.height * 2,
					start: {
						x: 700,
						y: (-stage.height)
					}
				}
			},
			{
				name: 'tree02',
				cl: 'Sprite',
				attrs: {
					img: 'tree02',
					width: stage.height,
					height: stage.height * 2,
					start: {
						x: 2000,
						y: (-stage.height)
					}
				}
			},
			{
				name: 'tree03',
				cl: 'Sprite',
				attrs: {
					img: 'tree03',
					width: stage.height,
					height: stage.height * 2,
					start: {
						x: 2300,
						y: (-stage.height)
					}
				}
			},
			{
				name: 'tree04',
				cl: 'Sprite',
				attrs: {
					img: 'tree04',
					width: stage.height,
					height: stage.height * 2,
					start: {
						x: 2650,
						y: (-stage.height)
					}
				}
			},
			{
				name: 'tree05',
				cl: 'Sprite',
				attrs: {
					img: 'tree02',
					width: stage.height,
					height: stage.height * 2,
					start: {
						x: 3000,
						y: (-stage.height)
					}
				}
			},
			{
				name: 'grass0',
				cl: 'Sprite',
				attrs: {
					img: 'grass1',
					start: {
						x: 0,
						y: stage.height - 200
					}
				}
			},
			{
				name: 'grass1',
				cl: 'Sprite',
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
			cl: 'PhysicalGroupCollection',
			attrs: [
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 0,
						y: world.height - 10
					},
					scale: [32, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform0',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 750,
						y: world.height - 75
					},
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform2',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 900,
						y: world.height - 100
					},
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform1',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 2048,
						y: world.height - 75
					},
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform2',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 2198,
						y: world.height - 150
					},
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform3',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 2348,
						y: world.height - 225
					},
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform4',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 2498,
						y: world.height - 300
					},
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform5',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 2698,
						y: world.height - 300
					},
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform6',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 2898,
						y: world.height - 300
					},
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform7',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 3098,
						y: world.height - 300
					},
					// scale: [0.6, 0.3],
					physics: {
						immovable: true
					}
				}
			}

			]
		},
		{
			name: 'sectors',
			cl: 'SectorManager',
			attrs: [{
				name: 'sector0',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 0,
						end: 1024
					},
					hazards: {
						name: 'level1-sector0-hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'level1-sector0-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 800,
									y: world.height - 75
								},
								physics: {
									immovable: true
								},
								damage: 10
							}
						}	
						]
					},
					enemies: {
						name: 'level1-sector0-enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level1-sector0-enemy0',
							cl: 'AnimatedEnemy',
							attrs: {
								name: 'caterpillar01-sprite',
								img: 'caterpillar01',
								spriteType: 'Sprite',
								start: {
									x: 600,
									y: 0
								},
								physics: {
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								movement: {
									speed: 0.25,
									type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
									formula: null
								},
								damage: 5,
								health: 5,
								score: 500,
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						},
						{
							name: 'level1-sector0-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								name: 'caterpillar01-sprite',
								img: 'caterpillar01',
								spriteType: 'Sprite',
								start: {
									x: 900,
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
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}] 
					},
					bonuses: {
						name: 'level1-sector0-bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: [{
							name: 'bonus0-sprite',
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 760,
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
				}
			},
			{
				name: 'sector1',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 1024,
						end: 2048
					},
					hazards: {
						name: 'level1-sector0-hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					enemies: {
						name: 'level1-sector1-enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level1-sector1-enemy0',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								spriteType: 'Sprite',
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
								movement: {
									speed: 0.25,
									type: Polyworks.MovementTypes.DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}]
					},
					bonuses: {
						name: 'level1-sector1-bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: []
					}
				}
			},
			{
				name: 'sector2',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 2048,
						end: 3072
					},
					hazards: {
						name: 'level1-sector2-hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'level1-sector2-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2140,
									y: world.height - 75
								},
								physics: {
									immovable: true
								},
								damage: 10
							}
						},	
						{		
							name: 'level1-sector2-hazard1',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2350,
									y: world.height - 75
								},
								physics: {
									immovable: true
								},
								damage: 10
							}
						},	
						{		
							name: 'level1-sector2-hazard2',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2560,
									y: world.height - 75
								},
								physics: {
									immovable: true
								},
								damage: 10
							}
						},	
						]
					},
					enemies: {
						name: 'level1-sector2-enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level1-sector2-enemy0',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								spriteType: 'Sprite',
								start: {
									x: 2850,
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
							},
						}]
					},
					bonuses: {
						name: 'level1-sector3-bonuses',
						cl: 'PhysicalGroupCollection',
						attrs:  [{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 2700,
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
				}
			},
			{
				name: 'sector3',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 3072,
						end: 4098
					},
					hazards: {
						name: 'level1-sector0-hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					enemies: {
						name: 'level1-sector3-enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level1-sector3-enemy0',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								spriteType: 'Sprite',
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
						}]
					},
					bonuses: {
						name: 'level1-sector3-bonues',
						cl: 'PhysicalGroupCollection',
						attrs: [{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 3700,
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
				}
			}]
		},
		{
			name: 'gui',
			cl: 'GUIConsole',
			addTo: 'null',
			attrs: [{
				name: 'heartIcon',
				cl: 'Sprite',
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
				cl: 'Text',
				attrs: {
					x: 60,
					y: 25,
					defaultContent: '~{health}~',
					style: { 
						font: '18px Arial', 
						fill: '#ffffff' 
					}
				}
			}]
		},
		{
			name: 'level-controls',
			cl: 'ControlButtons',
			type: 'level',
			addTo: 'null',
			attrs: {
				start: {
					x: 0,
					y: 0
				}
			}
		}]
	},

	{
		name: 'intermission',
		cl: 'MenuState',
		world: {
			x: 0,
			y: 0,
			width: stage.width,
			height: stage.height
		},
		clearWorld: true,
		clearCache: false,
		controlsType: 'levelComplete',
		attrs: [		
		{
			name: 'intermission-group',
			cl: 'GroupCollection',
			attrs: [
			{
				name: 'bg',
				cl: 'Sprite',
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
				name: 'title',
				cl: 'Text',
				attrs: {
					centerX: true,
					centerY: false,
					x: 0,
					y: 40,
					defaultContent: 'Level Completed',
					style: { 
						font: '30px Arial', 
						fill: '#000000',
						align: 'center'
					}
				}
			},
			{
				name: 'score',
				cl: 'Text',
				attrs: {
					centerX: true,
					centerY: false,
					x: 0,
					y: 100,
					defaultContent: 'Score: ~{score}~',
					style: { 
						font: '18px Arial', 
						fill: '#000000',
						align: 'center'
					}
				}
			}
			]
		},
		{
			name: 'menu-controls',
			cl: 'ControlButtons',
			type: 'intermission',
			attrs: {
				start: {
					x: 0,
					y: 0
				}
			}
		}
		]
	},
	{
		name: 'end',
		cl: 'MenuState',
		world: {
			x: 0,
			y: 0,
			width: stage.width,
			height: stage.height
		},
		clearWorld: true,
		clearCache: false,
		controlsType: 'levelComplete',
		attrs: [		
		{
			name: 'end-group',
			cl: 'GroupCollection',
			attrs: [
			{
				name: 'bg',
				cl: 'Sprite',
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
				name: 'title',
				cl: 'Text',
				attrs: {
					centerX: true,
					centerY: false,
					x: 0,
					y: 40,
					defaultContent: 'All Completed',
					style: { 
						font: '30px Arial', 
						fill: '#000000',
						align: 'center'
					}
				}
			},
			{
				name: 'score',
				cl: 'Text',
				attrs: {
					centerX: true,
					centerY: false,
					x: 0,
					y: 100,
					defaultContent: 'Score: ~{score}~',
					style: { 
						font: '18px Arial', 
						fill: '#000000',
						align: 'center'
					}
				}
			}
			]
		}
		]
	},
	{
		name: 'quit',
		cl: 'State',
		world: {
			x: 0,
			y: 0,
			width: stage.width,
			height: stage.height
		},
		clearWorld: true,
		clearCache: false,
		attrs: [{
			name: 'quit-group',
			cl: 'GroupCollection',
			attrs: [
			{
				name: 'bg',
				cl: 'Sprite',
				attrs: {
					img: 'greyRect',
					start: {
						x: 20,
						y: 20
					},
					// fixedToCamera: true,
					width: stage.width - 40,
					height: stage.height - 40
				}
			},
			{
				name: 'title',
				cl: 'Text',
				attrs: {
					centerX: true,
					centerY: true,
					x: stage.width/2,
					y: 40,
					defaultContent: 'Game Over',
					fixedToCamera: true,
					style: { 
						font: '30px Arial', 
						fill: '#000000',
						align: 'center'
					}
				}
			}
			]
		}]
	}],
	player: {
		name: 'keke',
		cl: 'AnimatedPlayer',
		attrs: {
			spriteType: 'Sprite',
			img: 'keke',
			width: 76,
			height: 128,
			// setSize: {
			// 	width: 50,
			// 	height: 128
			// },
			start: {
				x: stage.width/2 - 76/2,
				y: stage.height - 128
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
			followStyle: Phaser.Camera.FOLLOW_PLATFORMER,
			speed: {
				x: 150,
				y: 400
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