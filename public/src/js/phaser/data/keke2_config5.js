var world = {
	// x: 0,
	// y: 0,
	//  	width: PolyworksStage.width,
	// height: PolyworksStage.height,
	gravity: {
		x: 0,
		y: 15
	}
};

var config = {
	// IMAGES
	images: {
		// scenery
		sky: 'images/night_sky.jpg',

		// ovalMask: 'images/oval_mask.png',

		mountainBackground1a: 'images/mountain_background1a.png',
		mountainBackground1b: 'images/mountain_background1b.png',

		forestBackground01: 'images/moving_background0a.png',
		forestBackground02: 'images/moving_background0b.png',
		forestBackground03: 'images/forest_background01a.png',
		forestBackground04: 'images/forest_background01b.png',
		forestBackground05: 'images/forest_background01a.png',
		forestBackground06: 'images/forest_background01b.png',
		forestBackground07: 'images/forest_background01b.png',

		tree01: 'images/tree04a.png',
		tree02: 'images/tree04a.png',
		tree03: 'images/tree04a.png',
		tree04: 'images/tree04a.png',
		grass01: 'images/grass01.png',
		grass02: 'images/grass02.png',
		platform: 'images/platform.png',
		platformRed: 'images/platform_red.png',
		platformV: 'images/platform_v.png',
		rockPlatform1: 'images/rock_platform1.png',
		// branch02Left: 'images/vine01_left.png',
		branch02Left: 'images/branch03_left.png',
		branch02aLeft: 'images/branch03a_left.png',
		vine01Left: 'images/vine01_left.png',
		// branch02Right: 'images/vine01_right.png',
		branch02Right: 'images/branch03_right.png',
		branch02aRight: 'images/branch03a_right.png',
		vine01Right: 'images/vine01_right.png',
		bush01: 'images/bush01.png',
		thorns: 'images/thorns02.png',

		// bonuses
		lollipop: 'images/lollipop.png',
		cupcake: 'images/cupcake.png',
		particle: 'images/particle01.png',

		// buttons
		leftButton: 'images/arrow_left.png',
		rightButton: 'images/arrow_right.png',
		upButton: 'images/arrow_up.png',
		startButton: 'images/start_button.png',
		nextButton: 'images/next_button.png',
		pauseButton: 'images/pause_button.png',
		menuButton: 'images/menu_button.png',
		quitButton: 'images/quit_button.png',
		greyRect: 'images/grey_rect32x32.png',

		// icons
		heart: 'images/heart.png',
		damageIcon: 'images/alarm_icon.png',
		invisibleBg: 'images/invisible.png'
	},
	// SPRITES
	sprites: {
		// player
		keke: {
			url: 'images/keke_character3c.png', 
			width: 95, 
			height: 113, 
			frames: 35
		},
		// enemies
		caterpillar02a: {
			url: 'images/caterpillar02a.png',
			width: 104, 
			height: 32, 
			frames: 14
		},
		caterpillar02b: {
			url: 'images/caterpillar02b.png',
			width: 104, 
			height: 32, 
			frames: 14
		},
		caterpillarBoss01: {
			url: 'images/caterpillar02b_giant.png',
			width: 416, 
			height: 124, 
			frames: 14
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
			menu: [
			{
				name: 'start',
				cl: 'InputButton',
				attrs: {
					img: 'startButton',
					start: {
						x: PolyworksStage.width/2 - 128,
						y: PolyworksStage.height/2 - 64
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
						x: 30,
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
			intermission: [
			{
				name: 'next',
				cl: 'InputButton',
				attrs: {
					img: 'nextButton',
					start: {
						x: PolyworksStage.width/2 - 128,
						y: PolyworksStage.height/2 - 64
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
				name: 'menuBtn',
				cl: 'InputButton',
				attrs: {
					img: 'menuButton',
					start: {
						x: 30,
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
			],
			completed: [
			{
				name: 'menuBtn',
				cl: 'InputButton',
				attrs: {
					img: 'menuButton',
					start: {
						x: 30,
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
			],
			gameOver: [
			{
				name: 'menuBtn',
				cl: 'InputButton',
				attrs: {
					img: 'menuButton',
					start: {
						x: 30,
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
			],
			level: [
			{
				name: 'invisBtn',
				cl: 'InputButton',
				attrs: {
					img: 'invisibleBg',
					start: {
						x: 0,
						y: 0
					},
					width: PolyworksStage.winW, 
					height: PolyworksStage.winH,
					inputCode: Polyworks.InputCodes.RESET
				}
			},
			{
				name: 'leftBtn',
				cl: 'InputButton',
				attrs: {
					img: 'leftButton',
					start: {
						x: 30,
						y: PolyworksStage.height - 266
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
						y: PolyworksStage.height - 266
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
						x: PolyworksStage.width - 90,
						y: PolyworksStage.height - 266
					},
					inputCode: Polyworks.InputCodes.UP
				}
			},
			{
				name: 'pauseButton',
				cl: 'InputButton',
				attrs: {
					img: 'pauseButton',
					start: {
						x: 30,
						y: 15
					},
					inputCode: Polyworks.InputCodes.PAUSE,
					events: {
						pressed: {
							// type: Polyworks.Events.PAUSE_STATE
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
	initialState: 'level1',
	states: [
	// menu
	{
		name: 'menu',
		cl: 'MenuState',
		world: {
			x: 0,
			y: 0,
			width: PolyworksStage.winW,
			height: PolyworksStage.winH
		},
		clearWorld: true,
		clearCache: false,
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
					phaser: {
						width: PolyworksStage.width - 40,
						height: PolyworksStage.height - 40
					}
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
	// level 1
	{
		name: 'level1',
		cl: 'LevelState',
		world: {
			x: 0,
			// y: -(PolyworksStage.height),
			y: -(PolyworksStage.height * 2) + PolyworksStage.winH,
			width: PolyworksStage.width * 6,
			height: PolyworksStage.height * 2
		},
		clearWorld: true,
		clearCache: false,
		bounds: {
			start: 0,
			end: (PolyworksStage.width * 6) - (PolyworksStage.unit * 1)
		},
		pausable: true,
		attrs: [
		{
			name: 'scenery',
			cl: 'GroupCollection',
			attrs: [
			// {
			// 	name: 'sky',
			// 	cl: 'Sprite',
			// 	attrs: {
			// 		img: 'sky',
			// 		name: 'sky',
			// 		start: {
			// 			x: 0,
			// 			y: 0
			// 		},
			// 		phaser: {
			// 			width: PolyworksStage.width,
			// 			height: PolyworksStage.height,
			// 			fixedToCamera: true
			// 		}
			// 	}
			// },
			{
				name: 'background01',
				cl: 'Sprite',
				attrs: {
					img: 'forestBackground01',
					start: {
						x: 0,
						y: -(PolyworksStage.height)
					},
					phaser: {
						width: PolyworksStage.width * 4,
						height: PolyworksStage.height * 2
					}
				}
			},
			{
				name: 'background02',
				cl: 'Sprite',
				attrs: {
					img: 'forestBackground02',
					start: {
						x: PolyworksStage.width * 4,
						y: -(PolyworksStage.height)
					},
					phaser: {
						width: PolyworksStage.width * 4,
						height: PolyworksStage.height * 2
					}
				}
			},
			{
				name: 'grass01',
				cl: 'Sprite',
				attrs: {
					img: 'grass01',
					phaser: {
						width: (PolyworksStage.width * 4)
					},
					start: {
						x: 0,
						y: PolyworksStage.height - 200
					}
				}
			},
			{
				name: 'grass02',
				cl: 'Sprite',
				attrs: {
					img: 'grass02',
					phaser: {
						width: (PolyworksStage.width * 4)
					},
					start: {
						x: (PolyworksStage.width * 4),
						y: PolyworksStage.height - 216
					}
				}
			},
			{
				name: 'tree01',
				cl: 'Sprite',
				attrs: {
					img: 'tree01',
					start: {
						x: (PolyworksStage.width * 2) - (PolyworksStage.unit * 2),
						y: -(PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree01',
				cl: 'Sprite',
				attrs: {
					img: 'tree01',
					start: {
						x: (PolyworksStage.width * 4) - (PolyworksStage.unit * 4),
						y: -(PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree02',
				cl: 'Sprite',
				attrs: {
					img: 'tree02',
					start: {
						x: (PolyworksStage.width * 6) + (PolyworksStage.unit * 4.5),
						y: (-PolyworksStage.height)
					}
				}
			},
			{
				name: 'stageSize',
				cl: 'Sprite',
				attrs: {
					img: 'platformRed',
					phaser: {
						width: PolyworksStage.width,
						height: PolyworksStage.height,
						alpha: 0.5
					},
					start: {
						x: 0,
						y: 0
						//y: (PolyworksStage.winW - PolyworksStage.height)
					}
				}
			}
			]
		},
		{
			name: 'terrain',
			cl: 'PhysicalGroupCollection',
			attrs: [
			{
				name: 'leftWall',
				cl: 'Sprite',
				attrs: {
					img: 'platformV',
					start: {
						x: 0,
						y: -PolyworksStage.height
					},
					phaser: {
						width: 16,
						height: PolyworksStage.height * 2
					},
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					phaser: {
						width: PolyworksStage.width * 8,
						height: 128
					},
					start: {
						x: 0,
						y: PolyworksStage.height - 20
					},
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
			attrs: [
			{
				name: 'sector1',
				cl: 'Sector',
				bounds: {
					start: 0,
					end: PolyworksStage.width
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
				{
					name: 'hazards',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
				{
					name: 'enemies',
					cl: 'Enemies',
					attrs: [{
						name: 'level1-sector1-enemy1',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar02a',
							start: {
								x: PolyworksStage.unit * 11,
								y: PolyworksStage.height - 50
							},
							physics: {
								deferredGravity: true,
								bounce: {
									x: 0,
									y: 0.2
								}
							},
							phaser: {
								health: 3
							},
							scale: [0.75, 0.75],
							speed: 0.5,
							attack: 5,
							score: 1000,
							defaultAnimation: '',
							animations: caterpillarAnimations
						}
					}] 
				},
				{
					name: 'bonuses',
					cl: 'PhysicalGroupCollection',
					attrs: []
				}
				]
			},
			{
				name: 'sector2',
				cl: 'Sector',
				bounds: {
					start: PolyworksStage.width,
					end: PolyworksStage.width * 2
				},
				attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [
						{
							name: 'level1-sector2-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02a',
								start: {
									x: (PolyworksStage.width * 2) + (PolyworksStage.unit * 2),
									y: -50
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								phaser: {
									health: 3
								},
								scale: [0.75, 0.75],
								speed: 0.5,
								attack: 5,
								score: 2000,
								movement: {
									speed: 0.25,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						},
						{
							name: 'level1-sector2-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02a',
								start: {
									x: (PolyworksStage.width * 2) + (PolyworksStage.unit * 11),
									y: PolyworksStage.height - 50
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								phaser: {
									health: 7
								},
								scale: [0.75, 0.75],
								speed: 0.5,
								attack: 5,
								score: 2500,
								movement: {
									speed: 0.5,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}
						]
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: []
					}
					]
			},
			{
				name: 'sector3',
				cl: 'Sector',
				bounds: {
					start: PolyworksStage.width * 2,
					end: PolyworksStage.width * 3
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level1-sector3-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02a',
								start: {
									x: (PolyworksStage.width * 4),
									y: -(PolyworksStage.height/4) 
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
								phaser: {
									health: 5
								},
								score: 2000,
								movement: {
									speed: 1,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						},
						{
							name: 'level1-sector3-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02a',
								start: {
									x: (PolyworksStage.width * 5) + (PolyworksStage.unit * 2),
									y: PolyworksStage.height - 50
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 15,
								phaser: {
									health: 15
								},
								score: 2000,
								movement: {
									speed: 2,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}]
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs:  [
						{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: (PolyworksStage.width * 5) + (PolyworksStage.unit),
									y: PolyworksStage.height - 100
								},
								physics: {
									immovable: true
								},
								score: 100,
								health: 10
							}
						}
						]
					}
				]
			},
			{
				name: 'sector4',
				cl: 'Sector',
				bounds: {
					start: PolyworksStage.width * 3,
					end: PolyworksStage.width * 4
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'plat0',
						cl: 'Sprite',
						attrs: {
							img: 'platform',
							start: {
								x: (PolyworksStage.width * 6) + (PolyworksStage.unit * 7),
								y: PolyworksStage.height - 75
							},
							physics: {
								immovable: true,
								allowGravity: false
							}
						}
					},
					{
						name: 'plat1',
						cl: 'Sprite',
						attrs: {
							img: 'branch02aLeft',
							start: {
								x: (PolyworksStage.width * 6) + (PolyworksStage.unit * 7.5),
								y: PolyworksStage.height - 125
							},
							scale: [1, 0.5],
							physics: {
								immovable: true,
								allowGravity: false
							}
						}
					},
					{
						name: 'plat1',
						cl: 'Sprite',
						attrs: {
							img: 'branch02aRight',
							start: {
								x: (PolyworksStage.width * 6) + (PolyworksStage.unit * 9),
								y: PolyworksStage.height - 175
							},
							scale: [1, 0.5],
							physics: {
								immovable: true,
								allowGravity: false
							}
						}
					},
					{
						name: 'plat1',
						cl: 'Sprite',
						attrs: {
							img: 'branch02aLeft',
							start: {
								x: (PolyworksStage.width * 6) + (PolyworksStage.unit * 7.5),
								y: PolyworksStage.height - 225
							},
							scale: [1, 0.5],
							physics: {
								immovable: true,
								allowGravity: false
							}
						}
					},
					{
						name: 'plat1',
						cl: 'Sprite',
						attrs: {
							img: 'branch02aRight',
							start: {
								x: (PolyworksStage.width * 6) + (PolyworksStage.unit * 9),
								y: PolyworksStage.height - 275
							},
							scale: [1, 0.5],
							physics: {
								immovable: true,
								allowGravity: false
							}
						}
					},
					{
						name: 'plat1',
						cl: 'Sprite',
						attrs: {
							img: 'branch02aLeft',
							start: {
								x: (PolyworksStage.width * 6) + (PolyworksStage.unit * 7.5),
								y: PolyworksStage.height - 325
							},
							scale: [1, 0.5],
							physics: {
								immovable: true,
								allowGravity: false
							}
						}
					},
					{
						name: 'plat1',
						cl: 'Sprite',
						attrs: {
							img: 'branch02aRight',
							start: {
								x: (PolyworksStage.width * 6) + (PolyworksStage.unit * 9),
								y: PolyworksStage.height - 375
							},
							scale: [1, 0.5],
							physics: {
								immovable: true,
								allowGravity: false
							}
						}
					},
					{
						name: 'plat1',
						cl: 'Sprite',
						attrs: {
							img: 'branch02Left',
							start: {
								x: (PolyworksStage.width * 6) + (PolyworksStage.unit * 5),
								y: PolyworksStage.height - 425
							},
							scale: [1.5, 0.5],
							physics: {
								immovable: true,
								allowGravity: false
							}
						}
					}
					]
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [
						{
							name: 'level1-sector4-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02a',
								start: {
									x: PolyworksStage.width * 7,
									y: PolyworksStage.height - 50
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
								phaser: {
									health: 10
								},
								score: 500,
								movement: {
									speed: 1,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}
						]
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: (PolyworksStage.width * 6) + (PolyworksStage.unit * 5),
									y: PolyworksStage.height - 500
								},
								physics: {
									immovable: true
								},
								score: 100,
								health: 10
							}
						}
						]
					}
				]
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
						x: PolyworksStage.width - 50,
						y: 20
					}
				}
			},
			{
				name: 'health',
				cl: 'Text',
				attrs: {
					x: PolyworksStage.width - 100,
					y: 25,
					defaultContent: '~{health}~',
					style: { 
						font: '26px Arial', 
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

	// level 2
	{
		name: 'level2',
		cl: 'LevelState',
		world: {
			x: 0,
			y: -(PolyworksStage.height),
			width: PolyworksStage.width * 8,
			height: PolyworksStage.height * 2
		},
		clearWorld: true,
		clearCache: false,
		bounds: {
			start: 0,
			end: (PolyworksStage.width * 8) - (PolyworksStage.unit * 2)
		},
		attrs: [
		{
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
					phaser: {
						width: PolyworksStage.width,
						height: PolyworksStage.height,
						fixedToCamera: true
					}
				}
			},
			{
				name: 'background01',
				cl: 'Sprite',
				attrs: {
					img: 'forestBackground03',
					start: {
						x: 0,
						y: -(PolyworksStage.height)
					},
					phaser: {
						width: PolyworksStage.width * 4,
						height: PolyworksStage.height * 2
					}
				}
			},
			{
				name: 'background02',
				cl: 'Sprite',
				attrs: {
					img: 'forestBackground04',
					start: {
						x: PolyworksStage.width * 4,
						y: -(PolyworksStage.height)
					},
					phaser: {
						width: PolyworksStage.width * 4,
						height: PolyworksStage.height * 2
					}
				}
			},
			{
				name: 'tree01',
				cl: 'Sprite',
				attrs: {
					img: 'tree02',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: (PolyworksStage.height * 2)
					// },
					start: {
						x: 950,
						y: (-PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree03',
				cl: 'Sprite',
				attrs: {
					img: 'tree01',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: (PolyworksStage.height * 2) + 20						
					// },
					start: {
						x: 1900,
						y: (-PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree04',
				cl: 'Sprite',
				attrs: {
					img: 'tree03',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: PolyworksStage.height * 2
					// },
					start: {
						x: 2190,
						y: (-PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree05',
				cl: 'Sprite',
				attrs: {
					img: 'tree04',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: PolyworksStage.height * 2
					// },
					start: {
						x: 2480,
						y: (-PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree05',
				cl: 'Sprite',
				attrs: {
					img: 'tree02',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: PolyworksStage.height * 2
					// },
					start: {
						x: 2850,
						y: (-PolyworksStage.height)
					}
				}
			// },
			// {
			// 	name: 'grass0',
			// 	cl: 'Sprite',
			// 	attrs: {
			// 		img: 'grass01',
			// 		start: {
			// 			x: 0,
			// 			y: PolyworksStage.height - 220
			// 		}
			// 	}
			// },
			// {
			// 	name: 'grass01',
			// 	cl: 'Sprite',
			// 	attrs: {
			// 		img: 'grass02',
			// 		start: {
			// 			x: 2048,
			// 			y: PolyworksStage.height - 220
			// 		}
			// 	}

			}

			]
		},
		{
			name: 'terrain',
			cl: 'PhysicalGroupCollection',
			attrs: [
 			{
				name: 'leftWall',
				cl: 'Sprite',
				attrs: {
					img: 'platformV',
					start: {
						// x: -16,
						x: 0,
						y: -PolyworksStage.height
					},
					phaser: {
						width: 16,
						height: PolyworksStage.height * 2
					},
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					phaser: {
						width: PolyworksStage.width * 8,
						height: 128
					},
					start: {
						x: 0,
						y: PolyworksStage.height - 20
					},
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
			attrs: [
			{
				name: 'sector1',
				cl: 'Sector',
				bounds: {
					start: 0,
					end: PolyworksStage.width * 2
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
				{
					name: 'hazards',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
				{
					name: 'enemies',
					cl: 'Enemies',
					attrs: [
					{
						name: 'level2-sector1-enemy2',
						cl: 'AnimatedEnemy',
						attrs: {
							name: 'caterpillar02a-sprite',
							img: 'caterpillar02a',
							start: {
								x: 700,
								y: PolyworksStage.height - 50
							},
							physics: {
								deferredGravity: true,
								bounce: {
									x: 0,
									y: 0.2
								}
							},
							attack: 5,
							phaser: {
								health: 3
							},
							score: 500,
							defaultAnimation: '',
							animations: caterpillarAnimations
						}
					}] 
				},
				{
					name: 'bonuses',
					cl: 'PhysicalGroupCollection',
					attrs: []
				}
				]
			},
			{
				name: 'sector2',
				cl: 'Sector',
				bounds: {
					start: PolyworksStage.width * 2,
					end: PolyworksStage.width * 4
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
				{
					name: 'hazards',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
				{
					name: 'enemies',
					cl: 'Enemies',
					attrs: [{
						name: 'level2-sector2-enemy1',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar02a',
							start: {
								x: 1200,
								y: -100
							},
							physics: {
								deferredGravity: true,
								bounce: {
									x: 0,
									y: 0.2
								}
							},
							speed: 0.5,
							attack: 5,
							phaser: {
								health: 10
							},
							score: 1000,
							movement: {
								speed: 0.25,
								type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
								formula: null
							},
							defaultAnimation: '',
							animations: caterpillarAnimations
						}
					}]
				},
				{
					name: 'bonuses',
					cl: 'PhysicalGroupCollection',
					attrs: []
				}
				]
			},
			{
				name: 'sector3',
				cl: 'Sector',
				bounds: {
					start: PolyworksStage.width * 4,
					end: PolyworksStage.width * 6
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'platform2',
						cl: 'Sprite',
						attrs: {
							img: 'vine01Left',
							start: {
								x: 2048,
								y: PolyworksStage.height - 115
							},
							setSize: [64, 16, 32, 32],
							// scale: [0.6, 0.5],
							physics: {
								immovable: true
							}
						}
					},
					{
						name: 'platform3',
						cl: 'Sprite',
						attrs: {
							img: 'vine01Right',
							start: {
								x: 2148,
								y: PolyworksStage.height - 180
							},
							setSize: [64, 16, 32, 32],
							// scale: [0.6, 0.5],
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
								x: 2148,
								y: PolyworksStage.height - 230
							},
							// setSize: [64, 16, 32, 32],
							scale: [0.6, 0.5],
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
								x: 2298,
								y: PolyworksStage.height - 290
							},
							// setSize: [64, 16, 32, 32],
							scale: [0.6, 0.5],
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
								x: 2448,
								y: PolyworksStage.height - 360
							},
							// setSize: [64, 16, 32, 32],
							scale: [0.6, 0.5],
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
								x: 2598,
								y: PolyworksStage.height - 430
							},
							// setSize: [64, 16, 32, 32],
							scale: [0.6, 0.5],
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
								x: 2748,
								y: PolyworksStage.height - 380
							},
							// setSize: [64, 16, 32, 32],
							scale: [0.6, 0.5],
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
								x: 2898,
								y: PolyworksStage.height - 350
							},
							// setSize: [64, 16, 32, 32],
							scale: [0.6, 0.5],
							physics: {
								immovable: true
							}
						}
					}
					]
				},
				{
					name: 'hazards',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
				{
					name: 'enemies',
					cl: 'Enemies',
					attrs: [{
						name: 'level2-sector3-enemy1',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar02a',
							start: {
								x: 2150,
								y: 0
							},
							physics: {
								deferredGravity: true,
								bounce: {
									x: 0,
									y: 0.2
								}
							},
							attack: 5,
							phaser: {
								health: 10
							},
							score: 2000,
							movement: {
								speed: 1,
								type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
								formula: null
							},
							defaultAnimation: '',
							animations: caterpillarAnimations
						}
					},
					{
						name: 'level2-sector3-enemy2',
						cl: 'AnimatedEnemy',
						attrs: {
							img: 'caterpillar02a',
							start: {
								x: 2850,
								y: 0
							},
							physics: {
								deferredGravity: true,
								bounce: {
									x: 0,
									y: 0.2
								}
							},
							attack: 5,
							phaser: {
								health: 10
							},
							score: 2000,
							movement: {
								speed: 1,
								type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
								formula: null
							},
							defaultAnimation: '',
							animations: caterpillarAnimations
						}
					}]
				},
				{
					name: 'bonuses',
					cl: 'PhysicalGroupCollection',
					attrs:  [{
						cl: 'Sprite',
						attrs: {
							img: 'lollipop',
							start: {
								x: 2740,
								y: 20
							},
							physics: {
								immovable: true
							},
							score: 100,
							health: 10
						}
					}]
				}
				]
			},
			{
				name: 'sector4',
				cl: 'Sector',
				bounds: {
					start: PolyworksStage.width * 6,
					end: PolyworksStage.width * 8
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'platform9',
						cl: 'Sprite',
						attrs: {
							img: 'branch02Left',
							start: {
								x: 3098,
								y: PolyworksStage.height - 300
							},
							// setSize: [64, 16, 32, 32],
							scale: [0.6, 0.5],
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
								y: PolyworksStage.height - 380
							},
							// setSize: [64, 16, 32, 32],
							scale: [0.6, 0.5],
							physics: {
								immovable: true
							}
						}
					}
					]
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level2-sector4-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02a',
								start: {
									x: 3580,
									y: PolyworksStage.height - 50
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
								phaser: {
									health: 5
								},
								score: 500,
								movement: {
									speed: 1,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}]
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: [{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 3700,
									y: PolyworksStage.height - 150
								},
								physics: {
									immovable: true
								},
								score: 100,
								health: 10
							}
						}]
					}
				]
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
						x: PolyworksStage.width - 50,
						y: 20
					}
				}
			},
			{
				name: 'health',
				cl: 'Text',
				attrs: {
					x: PolyworksStage.width - 100,
					y: 25,
					defaultContent: '~{health}~',
					style: { 
						font: '26px Arial', 
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
	// level 3
	{
		name: 'level3',
		cl: 'LevelState',
		world: {
			x: 0,
			y: -256,
			width: (PolyworksStage.width * 8),
			height: PolyworksStage.height + 256
		},
		clearWorld: true,
		clearCache: false,
		bounds: {
			start: 0,
			end: (PolyworksStage.width * 8) - (PolyworksStage.unit * 4)
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
					phaser: {
						width: PolyworksStage.width,
						height: PolyworksStage.height,
						fixedToCamera: true
					}
				}
			},
			{
				name: 'background01',
				cl: 'Sprite',
				attrs: {
					img: 'forestBackground04',
					phaser: {
						width: 2048,
						height: PolyworksStage.height * 1.5
					},
					start: {
						x: 0,
						y: -(PolyworksStage.height * 0.5)
					}
				}
			},
			{
				name: 'background02',
				cl: 'Sprite',
				attrs: {
					img: 'forestBackground05',
					phaser: {
						width: 2048,
						height: PolyworksStage.height * 1.5
					},
					start: {
						x: 2048,
						y: -(PolyworksStage.height * 0.5)
					}
				}

			},

			{
				name: 'tree01',
				cl: 'Sprite',
				attrs: {
					img: 'tree01',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: (PolyworksStage.height * 2) + 20
					// },
					start: {
						x: 640,
						y: (-PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree02',
				cl: 'Sprite',
				attrs: {
					img: 'tree04',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: (PolyworksStage.height * 2)
					// },
					start: {
						x: 1200,
						y: (-PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree02',
				cl: 'Sprite',
				attrs: {
					img: 'tree01',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: (PolyworksStage.height * 2) + 20
					// },
					start: {
						x: 1900,
						y: (-PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree03',
				cl: 'Sprite',
				attrs: {
					img: 'tree03',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: PolyworksStage.height * 2
					// },
					start: {
						x: 2190,
						y: (-PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree04',
				cl: 'Sprite',
				attrs: {
					img: 'tree04',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: PolyworksStage.height * 2
					// },
					start: {
						x: 2600,
						y: (-PolyworksStage.height)
					}
				}
			},
			{
				name: 'tree05',
				cl: 'Sprite',
				attrs: {
					img: 'tree02',
					// phaser: {
					// 	width: PolyworksStage.height,
					// 	height: PolyworksStage.height * 2
					// },
					start: {
						x: 3000,
						y: (-PolyworksStage.height)
					}
				}
			// },
			// {
			// 	name: 'grass0',
			// 	cl: 'Sprite',
			// 	attrs: {
			// 		img: 'grass01',
			// 		start: {
			// 			x: 0,
			// 			y: PolyworksStage.height - 220
			// 		}
			// 	}
			// },
			// {
			// 	name: 'grass01',
			// 	cl: 'Sprite',
			// 	attrs: {
			// 		img: 'grass02',
			// 		start: {
			// 			x: 2048,
			// 			y: PolyworksStage.height - 220
			// 		}
			// 	}

			}
			]
		},
		{
			name: 'terrain',
			cl: 'PhysicalGroupCollection',
			attrs: [
			{
				name: 'leftWall',
				cl: 'Sprite',
				attrs: {
					img: 'platformV',
					start: {
						// x: -16,
						x: 0,
						y: -PolyworksStage.height
					},
					phaser: {
						width: 16,
						height: PolyworksStage.height * 2
					},
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					phaser: {
						width: PolyworksStage.width * 8,
						height: 128
					},
					start: {
						x: 0,
						y: PolyworksStage.height - 20
					},
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform0',
				cl: 'Sprite',
				attrs: {
					img: 'vine01Left',
					start: {
						x: 700,
						y: PolyworksStage.height - 115
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform1',
				cl: 'Sprite',
				attrs: {
					img: 'vine01Right',
					start: {
						x: 900,
						y: PolyworksStage.height - 140
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform2',
				cl: 'Sprite',
				attrs: {
					img: 'vine01Left',
					start: {
						x: 1948,
						y: PolyworksStage.height - 115
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform3',
				cl: 'Sprite',
				attrs: {
					img: 'vine01Right',
					start: {
						x: 2148,
						y: PolyworksStage.height - 180
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						y: PolyworksStage.height - 255
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						y: PolyworksStage.height - 290
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						y: PolyworksStage.height - 340
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						y: PolyworksStage.height - 390
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						y: PolyworksStage.height - 440
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						y: PolyworksStage.height - 490
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
				name: 'sector1',
				cl: 'Sector',
				bounds: {
					start: 0,
					end: 1024
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'level3-sector1-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 800,
									y: PolyworksStage.height - 75
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						}	
						]
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level3-sector1-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								name: 'caterpillar02b-sprite',
								img: 'caterpillar02b',
								start: {
									x: 600,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								movement: {
									speed: 1,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								attack: 20,
								phaser: {
									health: 10
								},
								score: 2000,
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						},
						{
							name: 'level3-sector1-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								name: 'caterpillar02b-sprite',
								img: 'caterpillar02b',
								start: {
									x: 900,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								movement: {
									speed: 1.5,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								attack: 20,
								phaser: {
									health: 10
								},
								score: 2000,
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}] 
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: [{
							name: 'bonus0-sprite',
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 760,
									y: PolyworksStage.height - 250
								},
								physics: {
									immovable: true
								},
								score: 500,
								health: 10
							}
						}]
					}
				]
			},
			{
				name: 'sector2',
				cl: 'Sector',
				bounds: {
					start: 1024,
					end: 2048
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level3-sector2-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02b',
								start: {
									x: 1400,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 20,
								phaser: {
									health: 10
								},
								score: 2000,
								movement: {
									speed: 1.5,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}]
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: []
					}
				]
			},
			{
				name: 'sector3',
				cl: 'Sector',
				bounds: {
					start: 2048,
					end: 3072
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'level3-sector3-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2140,
									y: PolyworksStage.height - 75
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},	
						{		
							name: 'level3-sector3-hazard1',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2350,
									y: PolyworksStage.height - 75
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},	
						{		
							name: 'level3-sector3-hazard2',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2560,
									y: PolyworksStage.height - 75
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						}	
						]
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level3-sector3-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02b',
								start: {
									x: 2200,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 20,
								phaser: {
									health: 10
								},
								score: 2000,
								movement: {
									speed: 2,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						},
						{
							name: 'level3-sector3-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02b',
								start: {
									x: 2850,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 20,
								phaser: {
									health: 10
								},
								score: 2000,
								movement: {
									speed: 2,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}
						]
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs:  [{
							cl: 'Sprite',
							attrs: {
								img: 'cupcake',
								start: {
									x: 2740,
									y: PolyworksStage.height - 150
								},
								physics: {
									immovable: true
								},
								score: 100,
								health: 20
							}
						}]
					}
				]
			},
			{
				name: 'sector4',
				cl: 'Sector',
				bounds: {
					start: 3072,
					end: 4096
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [
						{
							name: 'level3-sector4-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02b',
								start: {
									x: 3090,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 20,
								phaser: {
									health: 5
								},
								score: 500,
								movement: {
									speed: 1.5,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						},
						{
							name: 'level3-sector4-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02b',
								start: {
									x: 3280,
									y: -100
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 20,
								phaser: {
									health: 5
								},
								score: 500,
								movement: {
									speed: 1.5,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}
						]
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: [{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 3600,
									y: PolyworksStage.height - 150
								},
								physics: {
									immovable: true
								},
								score: 100,
								health: 10
							}
						}]
					}
				]
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
						x: PolyworksStage.width - 50,
						y: 20
					}
				}
			},
			{
				name: 'health',
				cl: 'Text',
				attrs: {
					x: PolyworksStage.width - 100,
					y: 25,
					defaultContent: '~{health}~',
					style: { 
						font: '26px Arial', 
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
	// level 4
	{
		name: 'level4',
		cl: 'LevelState',
		world: {
			x: 0,
			y: -256,
			width: 4096,
			height: PolyworksStage.height + 256
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
					phaser: {
						width: PolyworksStage.width,
						height: PolyworksStage.height,
						fixedToCamera: true
					},
					start: {
						x: 0,
						y: 0
					}
				}
			},
			{
				name: 'background01',
				cl: 'Sprite',
				attrs: {
					img: 'forestBackground06',
					phaser: {
						width: 2048,
						height: PolyworksStage.height * 1.5
					},
					start: {
						x: 0,
						y: -(PolyworksStage.height * 0.5)
					}
				}
			},
			{
				name: 'background02',
				cl: 'Sprite',
				attrs: {
					img: 'forestBackground07',
					phaser: {
						width: 2048,
						height: PolyworksStage.height * 1.5
					},
					start: {
						x: 2048,
						y: -(PolyworksStage.height * 0.5)
					}
				}

			// },
			// 
			// {
			// 	name: 'grass0',
			// 	cl: 'Sprite',
			// 	attrs: {
			// 		img: 'grass01',
			// 		start: {
			// 			x: 0,
			// 			y: PolyworksStage.height - 220
			// 		}
			// 	}
			// },
			// {
			// 	name: 'grass01',
			// 	cl: 'Sprite',
			// 	attrs: {
			// 		img: 'grass02',
			// 		start: {
			// 			x: 2048,
			// 			y: PolyworksStage.height - 220
			// 		}
			// 	}
			}
			]
		},
		{
			name: 'terrain',
			cl: 'PhysicalGroupCollection',
			attrs: [
			{
				name: 'leftWall',
				cl: 'Sprite',
				attrs: {
					img: 'platformV',
					start: {
						// x: -16,
						x: 0,
						y: -PolyworksStage.height
					},
					phaser: {
						width: 16,
						height: PolyworksStage.height * 2
					},
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'platform',
					phaser: {
						width: PolyworksStage.width * 8,
						height: 128
					},
					start: {
						x: 0,
						y: PolyworksStage.height - 20
					},
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform0',
				cl: 'Sprite',
				attrs: {
					img: 'vine01Left',
					start: {
						x: 700,
						y: PolyworksStage.height - 115
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform1',
				cl: 'Sprite',
				attrs: {
					img: 'vine01Right',
					start: {
						x: 900,
						y: PolyworksStage.height - 140
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform2',
				cl: 'Sprite',
				attrs: {
					img: 'vine01Left',
					start: {
						x: 1948,
						y: PolyworksStage.height - 115
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'platform3',
				cl: 'Sprite',
				attrs: {
					img: 'vine01Right',
					start: {
						x: 2148,
						y: PolyworksStage.height - 180
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						y: PolyworksStage.height - 255
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						x: 2398,
						y: PolyworksStage.height - 330
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						x: 2548,
						y: PolyworksStage.height - 405
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						x: 2698,
						y: PolyworksStage.height - 480
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						x: 2848,
						y: PolyworksStage.height - 555
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
						y: PolyworksStage.height - 630
					},
					// setSize: [64, 16, 32, 32],
					scale: [0.6, 0.5],
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
				name: 'sector1',
				cl: 'Sector',
				bounds: {
					start: 0,
					end: 1024
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'level4-sector1-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 800,
									y: PolyworksStage.height - 75
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						}	
						]
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level4-sector1-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								name: 'caterpillar02b-sprite',
								img: 'caterpillar02b',
								start: {
									x: 600,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								movement: {
									speed: 1,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								attack: 20,
								phaser: {
									health: 10
								},
								score: 2000,
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						},
						{
							name: 'level4-sector1-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								name: 'caterpillar02b-sprite',
								img: 'caterpillar02b',
								start: {
									x: 900,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								movement: {
									speed: 1.5,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								attack: 20,
								phaser: {
									health: 15
								},
								score: 2000,
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}] 
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: [{
							name: 'bonus0-sprite',
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 760,
									y: PolyworksStage.height - 250
								},
								physics: {
									immovable: true
								},
								score: 500,
								health: 10
							}
						}]
					}
				]
			},
			{
				name: 'sector2',
				cl: 'Sector',
				bounds: {
					start: 1024,
					end: 2048
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level4-sector2-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02b',
								start: {
									x: 1400,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 20,
								phaser: {
									health: 10
								},
								score: 2000,
								movement: {
									speed: 1.5,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}]
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: []
					}
				]
			},
			{
				name: 'sector3',
				cl: 'Sector',
				bounds: {
					start: 2048,
					end: 3072
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'level4-sector3-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2140,
									y: PolyworksStage.height - 75
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},	
						{		
							name: 'level4-sector3-hazard1',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2350,
									y: PolyworksStage.height - 75
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},	
						{
							name: 'level4-sector3-hazard2',
							cl: 'Sprite',
							attrs: {
								img: 'thorns',
								start: {
									x: 2560,
									y: PolyworksStage.height - 75
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						}	
						]
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [{
							name: 'level4-sector3-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02b',
								start: {
									x: 2200,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 20,
								phaser: {
									health: 15
								},
								score: 2000,
								movement: {
									speed: 2,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						},
						{
							name: 'level4-sector3-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02b',
								start: {
									x: 2850,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 20,
								phaser: {
									health: 10
								},
								score: 2000,
								movement: {
									speed: 2,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}
						]
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs:  [{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 2740,
									y: PolyworksStage.height - 150
								},
								physics: {
									immovable: true
								},
								score: 100,
								health: 10
							}
						}]
					}
				]
			},
			{
				name: 'sector4',
				cl: 'Sector',
				bounds: {
					start: 3072,
					end: 4096
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: []
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [
						{
							name: 'level4-sector4-ß',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02b',
								start: {
									x: 3090,
									y: 0
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 20,
								phaser: {
									health: 5
								},
								score: 500,
								movement: {
									speed: 1.5,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						},
						{
							name: 'level4-sector4-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02b',
								start: {
									x: 3280,
									y: -100
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 20,
								phaser: {
									health: 5
								},
								score: 500,
								movement: {
									speed: 1.5,
									type: Polyworks.MovementTypes.GROUNDED_DIRECTIONAL_BY_SPEED,
									formula: null
								},
								defaultAnimation: '',
								animations: caterpillarAnimations
							}
						}
						]
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: [{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								start: {
									x: 3600,
									y: PolyworksStage.height - 150
								},
								physics: {
									immovable: true
								},
								score: 100,
								health: 10
							}
						}]
					}
				]
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
						x: PolyworksStage.width - 50,
						y: 20
					}
				}
			},
			{
				name: 'health',
				cl: 'Text',
				attrs: {
					x: PolyworksStage.width - 100,
					y: 25,
					defaultContent: '~{health}~',
					style: { 
						font: '26px Arial', 
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

	// level 5
	{
		name: 'level5',
		cl: 'LevelState',
		world: {
			x: 0,
			// y: -256,
			y: -PolyworksStage.height,
			width: 4096,
			// height: PolyworksStage.height + 256
			height: PolyworksStage.height * 2
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
					phaser: {
						width: PolyworksStage.width,
						height: PolyworksStage.height,
						fixedToCamera: true
					}
				}
			},
			{
				name: 'mountainBackground1a',
				cl: 'Sprite',
				attrs: {
					img: 'mountainBackground1a',
					start: {
						x: 0,
						y: -(PolyworksStage.height * 0.5)
						// y: PolyworksStage.height - 512
					},
					phaser: {
						width: 2048,
						height: PolyworksStage.height * 1.5
						// height: 512,
					}
				}
			},
			{
				name: 'mountainBackground1b',
				cl: 'Sprite',
				attrs: {
					img: 'mountainBackground1b',
					start: {
						x: 2048,
						y: -(PolyworksStage.height * 0.5)
					},
					phaser: {
						width: 2048,
						height: PolyworksStage.height * 1.5
					}
				}
			// },
			// {
			// 	name: 'tree05',
			// 	cl: 'Sprite',
			// 	attrs: {
			// 		img: 'tree01Traced',
			// 		start: {
			// 			x: 128,
			// 			y: (-PolyworksStage.height)
			// 		},
			// 		phaser: {
			// 			width: PolyworksStage.height,
			// 			height: PolyworksStage.height * 2,
			// 		}
			// 	}
			// },
			// {
			// 	name: 'tree04',
			// 	cl: 'Sprite',
			// 	attrs: {
			// 		img: 'tree01Traced',
			// 		start: {
			// 			x: 384,
			// 			y: (-PolyworksStage.height)
			// 		},
			// 		phaser: {
			// 			width: PolyworksStage.height,
			// 			height: PolyworksStage.height * 2,
			// 		}
			// 	}
			}
			]
		},
		{
			name: 'terrain',
			cl: 'PhysicalGroupCollection',
			attrs: [
			{
				name: 'leftWall',
				cl: 'Sprite',
				attrs: {
					img: 'platformV',
					start: {
						// x: -16,
						x: 0,
						y: -PolyworksStage.height
					},
					phaser: {
						width: 16,
						height: PolyworksStage.height * 2
					},
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					phaser: {
						width: PolyworksStage.width * 8,
						height: 128
					},
					start: {
						x: 0,
						y: PolyworksStage.height - 20
					},
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 768,
						y: PolyworksStage.height - 50
					},
					scale: [2, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 1088,
						y: PolyworksStage.height - 80
					},
					scale: [1.5, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 1280,
						y: PolyworksStage.height - 120
					},
					scale: [2, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 1664,
						y: PolyworksStage.height - 150
					},
					scale: [1, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 1856,
						y: PolyworksStage.height - 190
					},
					scale: [1, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 2048,
						y: PolyworksStage.height - 240
					},
					scale: [1.5, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 2304,
						y: PolyworksStage.height - 280
					},
					scale: [2, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 2624,
						y: PolyworksStage.height - 320
					},
					scale: [1, 1],
					physics: {
						immovable: true
					}
				}
			},
			// {
			// 	name: 'ground0',
			// 	cl: 'Sprite',
			// 	attrs: {
			// 		img: 'rockPlatform1',
			// 		start: {
			// 			x: 2688,
			// 			y: PolyworksStage.height - 360
			// 		},
			// 		scale: [1, 1],
			// 		physics: {
			// 			immovable: true
			// 		}
			// 	}
			// },
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 2816,
						y: PolyworksStage.height - 400
					},
					scale: [2, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 3140,
						y: PolyworksStage.height - 440
					},
					scale: [1, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 3332,
						y: PolyworksStage.height - 500
					},
					scale: [2, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 3652,
						y: PolyworksStage.height - 530
					},
					scale: [1, 1],
					physics: {
						immovable: true
					}
				}
			},
			{
				name: 'ground0',
				cl: 'Sprite',
				attrs: {
					img: 'rockPlatform1',
					start: {
						x: 3844,
						y: PolyworksStage.height - 560
					},
					scale: [2, 1],
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
				name: 'sector1',
				cl: 'Sector',
				bounds: {
					start: 0,
					end: 1024
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'death',
							cl: 'Sprite',
							attrs: {
								img: 'invisibleBg',
								start: {
									x: 0,
									y: PolyworksStage.height + 100
								},
								scale: [32, 1],
								physics: {
									immovable: true
								},
								attack: 1000
							}
						}
						]
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: [] 
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: []
					}
				]
			},
			{
				name: 'sector2',
				cl: 'Sector',
				bounds: {
					start: 1024,
					end: 2048
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'death',
							cl: 'Sprite',
							attrs: {
								img: 'invisibleBg',
								start: {
									x: 1024,
									y: PolyworksStage.height + 100
								},
								scale: [32, 1],
								physics: {
									immovable: true
								},
								attack: 1000
							}
						}
						]
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: []
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: []
					}
					]
			},
			{
				name: 'sector2',
				cl: 'Sector',
				bounds: {
					start: 2048,
					end: 3072
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'death',
							cl: 'Sprite',
							attrs: {
								img: 'invisibleBg',
								start: {
									x: 2048,
									y: PolyworksStage.height + 100
								},
								scale: [32, 1],
								physics: {
									immovable: true
								},
								attack: 1000
							}
						}
						]
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: []
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs:  []
					}
				]
			},
			{
				name: 'sector4',
				cl: 'Sector',
				bounds: {
					start: 3072,
					end: 4096
				},
				attrs: [
				{
					name: 'dynamicTerrain',
					cl: 'PhysicalGroupCollection',
					attrs: []
				},
					{
						name: 'hazards',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'death',
							cl: 'Sprite',
							attrs: {
								img: 'invisibleBg',
								start: {
									x: 3072,
									y: PolyworksStage.height + 100
								},
								scale: [32, 1],
								physics: {
									immovable: true
								},
								attack: 1000
							}
						}
						]
					},
					{
						name: 'enemies',
						cl: 'Enemies',
						attrs: []
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: []
					}
				]
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
						x: PolyworksStage.width - 50,
						y: 20
					}
				}
			},
			{
				name: 'health',
				cl: 'Text',
				attrs: {
					x: PolyworksStage.width - 100,
					y: 25,
					defaultContent: '~{health}~',
					style: { 
						font: '26px Arial', 
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
	// intermission
	{
		name: 'intermission',
		cl: 'MenuState',
		world: {
			x: 0,
			y: 0,
			width: PolyworksStage.width,
			height: PolyworksStage.height
		},
		clearWorld: true,
		clearCache: false,
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
					phaser: {
						width: PolyworksStage.width - 40,
						height: PolyworksStage.height - 40
					}
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
					defaultContent: 'Level ~{currentLevel}~ Completed',
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
	// completed
	{
		name: 'completed',
		cl: 'MenuState',
		world: {
			x: 0,
			y: 0,
			width: PolyworksStage.width,
			height: PolyworksStage.height
		},
		clearWorld: true,
		clearCache: false,
		attrs: [
		{
			name: 'completed-group',
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
					phaser: {
						width: PolyworksStage.width - 40,
						height: PolyworksStage.height - 40
					}
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
		},
		{
			name: 'completed-controls',
			cl: 'ControlButtons',
			type: 'completed',
			attrs: {
				start: {
					x: 0,
					y: 0
				}
			}
		}
		]
	},
	// gameOver
	{
		name: 'gameOver',
		cl: 'MenuState',
		world: {
			x: 0,
			y: 0,
			width: PolyworksStage.width,
			height: PolyworksStage.height
		},
		clearWorld: true,
		clearCache: false,
		attrs: [{
			name: 'gameOver-group',
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
					phaser: {
						// fixedToCamera: true,
						width: PolyworksStage.width - 40,
						height: PolyworksStage.height - 40
					}
				}
			},
			{
				name: 'title',
				cl: 'Text',
				attrs: {
					centerX: true,
					centerY: true,
					x: PolyworksStage.width/2,
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
		},
		{
			name: 'gameOver-controls',
			cl: 'ControlButtons',
			type: 'gameOver',
			attrs: {
				start: {
					x: 0,
					y: 0
				}
			}
		}
		]
	}],

	player: {
		name: 'keke',
		cl: 'AnimatedPlayer',
		attrs: {
			img: 'keke',
			phaser: {
				health: 100,
				// width: 95,
				// height: 113
				width: (PolyworksStage.unit * 3) * 0.84,
				height: PolyworksStage.unit * 3
			},
			// setSize: [51, 113],
			setSize: [((PolyworksStage.unit * 3) * 0.3), ((PolyworksStage.unit * 3))],
			start: {
				x: PolyworksStage.width/2 - ((PolyworksStage.unit * 3) * 0.84)/2,
				y: PolyworksStage.height - 128
			},
			physics: {
				/*
				bounce: {
					x: 0,
					y: 0.2
				},
				*/
				collideWorldBounds: false
			},
			anchor: {
				x: 0.5,
				y: 0.5
			},
			followStyle: Phaser.Camera.FOLLOW_PLATFORMER,
			speed: {
				// x: 150,
				// y: 400
				x: (PolyworksStage.unit * 4),
				y: (PolyworksStage.unit * 10)
			},
			controls: {
				left: Polyworks.InputCodes.LEFT,
				right: Polyworks.InputCodes.RIGHT,
				jump: Polyworks.InputCodes.UP
			},
			attack: 5,
			jumping: false,
			justJumped: false,
			defaultAnimation: AnimationTypes.IDLE_L,
			animations: kekeAnimations,
			facingForward: true
		}
	}
};

