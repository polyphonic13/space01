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
		nextButton: 'images/next_button.png',
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
							cl: Polyworks.Events.CHANGE_STATE,
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
				name: 'controls',
				cl: 'Collection',
				addTo: 'null',
				attrs: [{
					name: 'start',
					cl: 'InputButton',
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
					cl: 'InputButton',
					attrs: {
						img: 'quitButton',
						start: {
							x: stage.width - 80,
							y: 10
						},
						inputCode: Polyworks.InputCodes.QUIT,
						event: {
							pressed: {
								cl: Polyworks.Events.CHANGE_STATE,
								value: 'quit'
							}
						}
					}
				}]
			}],
			levelComplete: [{
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
							cl: Polyworks.Events.CHANGE_STATE,
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
						x: stage.width - 80,
						y: 10
					},
					inputCode: Polyworks.InputCodes.QUIT,
					event: {
						pressed: {
							cl: Polyworks.Events.CHANGE_STATE,
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
						x: 20,
						y: stage.height - 80
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
						x: 120,
						y: stage.height - 80
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
						x: stage.width - 80,
						y: stage.height - 80
					},
					inputCode: Polyworks.InputCodes.UP
				}
			},
			{
				name: 'quitBtn',
				cl: 'InputButton',
				attrs: {
					img: 'quitButton',
					start: {
						x: stage.width - 80,
						y: 10
					},
					inputCode: Polyworks.InputCodes.QUIT,
					event: {
						pressed: {
							cl: Polyworks.Events.CHANGE_STATE,
							value: 'quit'
						}
					}
				}
			}]
		}
	},
	// STATES
	// initialState: 'menu',
	initialState: 'level0',
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
					y: 50,
					defaultContent: 'Keke vs. the Caterpillars',
					style: { 
						font: '30px Arial', 
						fill: '#000000',
						align: 'center'
					}
				}
			},
			{
				name: 'start',
				cl: 'InputButton',
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
				cl: 'InputButton',
				attrs: {
					img: 'quitButton',
					start: {
						x: stage.width - 80,
						y: 10
					},
					inputCode: Polyworks.InputCodes.QUIT,
					event: {
						pressed: {
							cl: Polyworks.Events.CHANGE_STATE,
							value: 'quit'
						}
					}
				}
			}
			]
		}
		]
	},
	{
		name: 'level0',
		cl: 'LevelState',
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
				name: 'mountains0',
				cl: 'Sprite',
				attrs: {
					img: 'mountains',
					start: {
						x: 0,
						y: 0
					}
				}
			},
			{
				name: 'mountains1',
				cl: 'Sprite',
				attrs: {
					img: 'mountains',
					start: {
						x: 2048,
						y: 0
					}
				}
			},
			{
				name: 'treesBack0',
				cl: 'Sprite',
				attrs: {
					img: 'treesBack',
					start: {
						x: 0,
						y: stage.height - 490
					}
				}
			},
			{
				name: 'treesBack1',
				cl: 'Sprite',
				attrs: {
					img: 'treesBack',
					start: {
						x: 2048,
						y: stage.height - 490
					}
				}
			},
			{
				name: 'treesFore0',
				cl: 'Sprite',
				attrs: {
					img: 'treesFore',
					start: {
						x: 0,
						y: 0
					}
				}
			},
			{
				name: 'treesFore1',
				cl: 'Sprite',
				attrs: {
					img: 'treesFore',
					start: {
						x: 2048,
						y: 0
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
			attrs: [{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 0,
						y: world.height - 20
					},
					scale: [16, 1],
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
					scale: [0.3, 1],
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
						x: 2000,
						y: world.height - 75
					},
					scale: [0.3, 1],
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
						x: 2200,
						y: world.height - 130
					},
					scale: [0.3, 1],
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
						x: 2400,
						y: world.height - 185
					},
					scale: [0.3, 1],
					physics: {
						immovable: true
					}
				}
			}]
		},
		{
			name: 'sectors',
			cl: 'Sectors',
			attrs: [{
				name: 'sector0',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 0,
						end: 1024
					},
					enemies: {
						name: 'sector0-enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level0-sector0-enemy0',
							cl: 'AnimatedEnemy',
							attrs: {
								name: 'caterpillar01-sprite',
								img: 'caterpillar01',
								spriteType: 'Sprite',
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
						name: 'bonuses',
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
					enemies: {
						name: 'sector1-enemies',
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
						name: 'sector1-bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: []
					}
				}
				/*
			},
			{
				name: 'sector2',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 2048,
						end: 3072
					},
					enemies: [{
						name: 'level0-sector2-enemy1',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							spriteType: 'Sprite',
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
						cl: 'Sprite',
						attrs: {
							img: 'lollipop',
							start: {
								x: 2420,
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
			},
			{
				name: 'sector3',
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 3072,
						end: 4098
					},
					enemies: [{
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
					}],
					bonuses: [{
						cl: 'Sprite',
						attrs: {
							img: 'lollipop',
							start: {
								x: 3500,
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
				*/
			}]
/*
		},
		{
			name: 'gui',
			cl: 'GUIConsole',
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
*/
		}]
	},
	/*

	{
		name: 'level1',
		cl: 'LevelState',
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
		attrs: [{
			name: 'scenery',
			cl: 'Collection',
			attrs: [{
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
				cl: 'Sprite',
				attrs: {
					img: 'mountains',
					start: {
						x: 0,
						y: 0
					}
				}
			},
			{
				cl: 'Sprite',
				attrs: {
					img: 'treesBack',
					start: {
						x: 0,
						y: stage.height - 490
					}
				}
			},
			{
				cl: 'Sprite',
				attrs: {
					img: 'treesFore',
					start: {
						x: 0,
						y: 0
					}
				}
			},
			{
				cl: 'Sprite',
				attrs: {
					img: 'mountains',
					start: {
						x: 2048,
						y: 0
					}
				}
			},
			{
				cl: 'Sprite',
				attrs: {
					img: 'treesBack',
					start: {
						x: 2048,
						y: stage.height - 490
					}
				}
			},
			{
				cl: 'Sprite',
				attrs: {
					img: 'treesFore',
					start: {
						x: 2048,
						y: 0
					}
				}
			},
			{
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
			attrs: [{
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					start: {
						x: 0,
						y: world.height - 20
					},
					scale: [16, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				cl: 'Sprite',
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
				cl: 'Sprite',
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
				cl: 'Sprite',
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
				cl: 'Sprite',
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
				cl: 'Sprite',
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
				cl: 'Sprite',
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
			cl: 'Sectors',
			attrs: [{
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 0,
						end: 1024
					},
					enemies: [{
						name: 'level1-sector0-enemy0',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							spriteType: 'Sprite',
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
						name: 'level1-sector0-enemy0',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							spriteType: 'Sprite',
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
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 1024,
						end: 2048
					},
					enemies: [{
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
							defaultAnimation: '',
							animations: caterpillarAnimations
						}
					},
					{
						name: 'level1-sector1-enemy0',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							spriteType: 'Sprite',
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
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 2048,
						end: 3072
					},
					enemies: [{
						name: 'level1-sector2-enemy0',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							spriteType: 'Sprite',
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
						name: 'level1-sector2-enemy0',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							spriteType: 'Sprite',
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
						cl: 'Sprite',
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
						cl: 'Sprite',
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
				cl: 'Sector',
				attrs: {
					bounds: {
						start: 3072,
						end: 4098
					},
					enemies: [{
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
					},
					{
						name: 'level1-sector3-enemy0',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar01',
							spriteType: 'Sprite',
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
						cl: 'Sprite',
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
			cl: 'GUIConsole',
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

		}]
	},
*/
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
					y: 50,
					defaultContent: 'Level Completed',
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
					y: stage.height/2,
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
			setSize: {
				width: 50,
				height: 140
			},
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