var config = (function() {
	var winW = PolyworksStage.winW; 
	var winH = PolyworksStage.winH;
	var stageWidth = PolyworksStage.width;
	var stageHeight = PolyworksStage.height;
	var stageUnit = PolyworksStage.unit;

	var enemy01 = {
		width: (stageUnit) * 1.5,
		height: stageUnit * 0.5
	};

	var enemy02 = {
		width: (stageUnit) * 2,
		height: stageUnit * 0.67
	};

	var c = {
		// IMAGES
		images: {
			sky: 'images/night_sky.jpg',


			forestBackground01: 'images/forest_distant_background01a.png',
			forestBackground02: 'images/forest_distant_background01b.png',
			forestBackground03: 'images/forest_background01a.png',
			forestBackground04: 'images/forest_background01b.png',
			forestBackground05: 'images/forest_background01a.png',
			forestBackground06: 'images/forest_background01b.png',
			forestBackground07: 'images/forest_background01b.png',

			mountainBackground01a: 'images/mountain_background01a.png',
			mountainBackground01b: 'images/mountain_background01b.png',
			mountainBackground01c: 'images/mountain_background01c.png',
			mountainBackground01d: 'images/mountain_background01d.png',
			mountainBackground01e: 'images/mountain_background01e.png',
			mountainBackground01f: 'images/mountain_background01f.png',

			tree01: 'images/tree04a.png',
			tree02: 'images/tree04a.png',
			tree03: 'images/tree04a.png',
			tree04: 'images/tree04a.png',
			platform: 'images/platform.png',
			platformGrey: 'images/platform_grey.png',
			platformRed: 'images/platform_red.png',
			platformV: 'images/platform_v.png',
			rockPlatform1: 'images/rock_platform1.png',
			// branch02Left: 'images/vine01_left.png',
			branch02Left: 'images/branch03_left.png',
			branch02aLeft: 'images/branch03a_left.png',
			vine01Left: 'images/vine01a_left.png',
			// branch02Right: 'images/vine01_right.png',
			branch02Right: 'images/branch03_right.png',
			branch02aRight: 'images/branch03a_right.png',
			vine01Right: 'images/vine01a_right.png',
			bush01: 'images/bush01.png',
			thorns01: 'images/thorns02.png',

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
				// width: 95, 
				// height: 113, 
				width: 190,
				height: 226,
				frames: 35
			},
			// enemies
			caterpillar01: {
				url: 'images/caterpillar02a.png',
				width: 104, 
				height: 32, 
				frames: 14
			},
			caterpillar02: {
				url: 'images/caterpillar02b.png',
				width: 104, 
				height: 32, 
				frames: 14
			},
			caterpillarBoss01: {
				url: 'images/caterpillar02_giant.png',
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
				attrs: [
				{
					name: 'quit', // q
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
					name: 'start', // s
					cl: 'ControlKey',
					attrs: {
						inputCode: Polyworks.InputCodes.START,
						events: {
							pressed: {
								type: Polyworks.Events.CHANGE_STATE,
								value: 'level'
							}
						}
					}
				},
				{
					name: 'next', // n
					cl: 'ControlKey',
					attrs: {
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
					name: 'pause', // p
					cl: 'ControlKey',
					attrs: {
						inputCode: Polyworks.InputCodes.PAUSE,
						events: {
							pressed: {
								type: Polyworks.Events.CHANGE_STATE,
								value: 'menu'
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
				}
				]
			},
			buttons: {
				menu: [
				{
					name: 'start',
					cl: 'InputButton',
					attrs: {
						img: 'startButton',
						start: {
							x: winW/2 - 128,
							y: winH/2 - 64
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
							x: winW/2 - 128,
							y: winH/2 - 64
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
						width: winW, 
						height: winH,
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
							y: winH - 266
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
							y: winH - 266
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
							x: winW - 90,
							y: winH - 266
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
		initialState: 'menu',
		states: [
		// menu
		{
			name: 'menu',
			cl: 'MenuState',
			world: {
				x: 0,
				y: 0,
				width: winW,
				height: winH
			},
			clearWorld: true,
			clearCache: false,
			images: [
				'greyRect',
				'startButton',
				'nextButton',
				'menuButton',
				'quitButton'
			],
			sprites: [
				'keke'
			],
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
							width: winW - 40,
							height: winH - 40
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
				y: -(stageHeight * 2) + winH,
				width: stageWidth * 6,
				height: stageHeight * 2
			},
			clearWorld: true,
			clearCache: false,
			bounds: {
				start: 0,
				end: (stageWidth * 6) - (stageUnit * 1)
			},
			pausable: true,
			images: [
				'sky',
				// 'forestBackground01',
				// 'forestBackground02',
				'forestBackground03',
				'forestBackground04',
				'tree01',
				'platformV',
				'platform',
				'branch02Left',
				'branch02Right',
				'branch02aLeft',
				'branch02aRight',
				'lollipop',
				'leftButton',
				'rightButton',
				'upButton',
				'pauseButton',
				'invisibleBg',
				'heart'
			],
			sprites: [
				'keke',
				'caterpillar01'
			],
			attrs: [
			{
				name: 'scenery',
				cl: 'GroupCollection',
				attrs: [
				{
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
							width: winW,
							height: winH,
							fixedToCamera: true
						}
					}
				},
				{
					name: 'background01',
					cl: 'Sprite',
					attrs: {
						img: 'forestBackground03',
						// img: 'forestBackground01',
						phaser: {
							width: stageWidth * 3,
							height: stageHeight * 2
						},
						start: {
							x: 0,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'background02',
					cl: 'Sprite',
					attrs: {
						img: 'forestBackground04',
						// img: 'forestBackground02',
						phaser: {
							width: stageWidth * 3,
							height: stageHeight * 2
						},
						start: {
							x: stageWidth * 3,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'tree01',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 2),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree02',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 4),
							y: winH - (stageHeight * 3)
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
							x: -16,
							y: winH - (stageHeight * 2)
						},
						phaser: {
							width: 16,
							height: stageHeight * 2
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
							width: stageWidth * 8,
							height: (stageUnit * 0.5)
						},
						start: {
							x: 0,
							y: winH - (stageUnit * 0.5)
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
						end: stageWidth
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
						start: stageWidth,
						end: stageWidth * 2
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
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 3
								},
								start: {
									x: (stageWidth) + (stageUnit * 12),
									y: winH - ((stageUnit * 2) + 32)
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
						start: stageWidth * 2,
						end: stageWidth * 3
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'plat1',
							cl: 'Sprite',
							attrs: {
								img: 'branch02aLeft',
								start: {
									x: (stageWidth * 2) + (stageUnit * 7),
									y: winH - (stageUnit * 2.5)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 2) + (stageUnit * 10),
									y: winH - (stageUnit * 4)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 2) + (stageUnit * 7),
									y: winH - (stageUnit * 5.5)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 2) + (stageUnit * 10),
									y: winH - (stageUnit * 7)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 2) + (stageUnit * 7),
									y: winH - (stageUnit * 8.5)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 2) + (stageUnit * 10),
									y: winH - (stageUnit * 10)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
								img: 'branch02Right',
								start: {
									x: (stageWidth * 2) + (stageUnit * 9.5),
									y: winH - (stageUnit * 11.5)
								},
								phaser: { width: (stageUnit * 7), height: (stageUnit * 0.5) },
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
						attrs: [{
							name: 'level1-sector3-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 3
								},
								start: {
									x: (stageWidth * 2) + (stageUnit * 6),
									y: -(stageHeight/4) 
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
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
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 3
								},
								start: {
									x: (stageWidth * 2) + (stageUnit * 13),
									y: winH - ((stageUnit * 2) + 32)
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 15,
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 15),
									y: winH - (stageUnit * 12.5)
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
						start: stageWidth * 3,
						end: stageWidth * 4
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
							name: 'level1-sector4-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 3
								},
								start: {
									x: (stageWidth * 3) + (stageUnit),
									y: winH - ((stageUnit * 2) + 32)
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 5),
									y: winH - (stageUnit * 1.5)
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
					name: 'sector5',
					cl: 'Sector',
					bounds: {
						start: stageWidth * 4,
						end: stageWidth * 5
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'plat1',
							cl: 'Sprite',
							attrs: {
								img: 'branch02aLeft',
								start: {
									x: (stageWidth * 4) + (stageUnit * 7),
									y: winH - (stageUnit * 2.5)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 4) + (stageUnit * 10),
									y: winH - (stageUnit * 4)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 4) + (stageUnit * 7),
									y: winH - (stageUnit * 5.5)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 4) + (stageUnit * 10),
									y: winH - (stageUnit * 7)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 4) + (stageUnit * 7),
									y: winH - (stageUnit * 8.5)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 4) + (stageUnit * 10),
									y: winH - (stageUnit * 10)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth * 4) + (stageUnit * 2),
									y: winH - (stageUnit * 11.5)
								},
								phaser: { width: (stageUnit * 7), height: (stageUnit * 0.5) },
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
						attrs: [{
							name: 'level1-sector3-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 3
								},
								start: {
									x: (stageWidth * 4) + (stageUnit * 4),
									y: -(stageHeight/4) 
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
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
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 3
								},
								start: {
									x: (stageWidth * 4) + (stageUnit * 8),
									y: winH - ((stageUnit * 2) + 32)
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 15,
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 4) + (stageUnit),
									y: winH - (stageUnit * 12.5)
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
					name: 'sector6',
					cl: 'Sector',
					bounds: {
						start: stageWidth * 5,
						end: stageWidth * 6
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
							name: 'level1-sector6-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 3
								},
								start: {
									x: (stageWidth * 5) + (stageUnit),
									y: winH - ((stageUnit * 2) + 32)
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 5) + (stageUnit * 5),
									y: winH - (stageUnit * 2)
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
							x: winW - 50,
							y: 20
						}
					}
				},
				{
					name: 'health',
					cl: 'Text',
					attrs: {
						x: winW - 100,
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
				y: -(stageHeight * 2) + winH,
				width: stageWidth * 6,
				height: stageHeight * 2
			},
			clearWorld: true,
			clearCache: false,
			bounds: {
				start: 0,
				end: (stageWidth * 6) - (stageUnit * 1)
			},
			images: [
				'sky',
				'forestBackground03',
				'forestBackground04',
				'tree01',
				'platformV',
				'platform',
				'branch02Left',
				'branch02Right',
				'branch02aLeft',
				'branch02aRight',
				'vine01Left',
				'vine01Right',
				'lollipop',
				'leftButton',
				'rightButton',
				'upButton',
				'pauseButton',
				'invisibleBg',
				'heart'
			],
			sprites: [
				'keke',
				'caterpillar01'
			],
			attrs: [
			{
				name: 'scenery',
				cl: 'GroupCollection',
				attrs: [
				{
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
							width: winW,
							height: winH,
							fixedToCamera: true
						}
					}
				},
				{
					name: 'background01',
					cl: 'Sprite',
					attrs: {
						img: 'forestBackground03',
						phaser: {
							width: stageWidth * 3,
							height: stageHeight * 2
						},
						start: {
							x: 0,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'background02',
					cl: 'Sprite',
					attrs: {
						img: 'forestBackground04',
						phaser: {
							width: stageWidth * 3,
							height: stageHeight * 2
						},
						start: {
							x: stageWidth * 3,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'tree01',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree02',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 2) + (stageUnit * 2),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree03',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 2) + (stageUnit * 11),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree04',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 3) + (stageUnit * 3),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree05',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 3) + (stageUnit * 11),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree06',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 4) + (stageUnit * 4),
							y: winH - (stageHeight * 3)
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
							x: -16,
							y: winH - (stageHeight * 2)
						},
						phaser: {
							width: 16,
							height: stageHeight * 2
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
							width: stageWidth * 8,
							height: 32
						},
						start: {
							x: 0,
							y: winH - 16
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
						end: stageWidth
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
						start: stageWidth,
						end: stageWidth * 2
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'plat1',
							cl: 'Sprite',
							attrs: {
								img: 'branch02aLeft',
								start: {
									x: (stageWidth) + (stageUnit * 7),
									y: winH - (stageUnit * 2.5)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth) + (stageUnit * 10),
									y: winH - (stageUnit * 4)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth) + (stageUnit * 7),
									y: winH - (stageUnit * 5.5)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth) + (stageUnit * 10),
									y: winH - (stageUnit * 7)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth) + (stageUnit * 7),
									y: winH - (stageUnit * 8.5)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
									x: (stageWidth) + (stageUnit * 10),
									y: winH - (stageUnit * 10)
								},
								phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
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
								img: 'branch02Right',
								start: {
									x: (stageWidth) + (stageUnit * 9.5),
									y: winH - (stageUnit * 11.5)
								},
								phaser: { width: (stageUnit * 7), height: (stageUnit * 0.5) },
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
						attrs: [{
							name: 'level2-sector2-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 6
								},
								start: {
									x: (stageWidth) + (stageUnit * 4),
									y: winH - ((stageUnit * 2) + 32)
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
						start: stageWidth * 2,
						end: stageWidth * 3
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
								phaser: { width: (stageUnit * 3), height: (stageUnit * 2) },
								setSize: [(stageUnit * 3), (stageUnit * 0.5), 0, (stageUnit * 1.5)],
								start: {
									x: (stageWidth * 2) + (stageUnit),
									y: winH - (stageUnit * 3.5)
								},
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
								phaser: { width: (stageUnit * 3), height: (stageUnit * 2) },
								setSize: [(stageUnit * 3), (stageUnit * 0.5), 0, (stageUnit * 1.5)],
								start: {
									x: (stageWidth * 2) + (stageUnit * 5),
									y: winH - (stageUnit * 5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'platform4',
							cl: 'Sprite',
							attrs: {
								img: 'branch02aLeft',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 8),
									y: winH - (stageUnit * 4.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'platform5',
							cl: 'Sprite',
							attrs: {
								img: 'branch02aRight',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 12),
									y: winH - (stageUnit * 6)
								},
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
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 4
								},
								start: {
									x: (stageWidth * 2) + (stageUnit),
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
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 10
								},
								start: {
								x: (stageWidth * 2) + (stageUnit * 7),
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 8),
									y: winH - (stageUnit * 6)
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
						start: stageWidth * 3,
						end: stageWidth * 4
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'platform6',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Left',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit),
									y: winH - (stageUnit * 7.5)
								},
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
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 5),
									y: winH - (stageUnit * 9)
								},
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
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 9),
									y: winH - (stageUnit * 10.5)
								},
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
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 4.5),
									y: winH - (stageUnit * 12)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'platform10',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Right',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 12.5),
									y: winH - (stageUnit * 10.5)
								},
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
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 6
								},
								start: {
									x: (stageWidth * 3),
									y: winH - ((stageUnit * 2) + 32)
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 6),
									y: winH - (stageUnit * 15)
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
					name: 'sector5',
					cl: 'Sector',
					bounds: {
						start: stageWidth * 4,
						end: stageWidth * 5
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'platform6',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Left',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit),
									y: winH - (stageUnit * 7.5)
								},
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
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 5),
									y: winH - (stageUnit * 9)
								},
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
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 10),
									y: winH - (stageUnit * 10.5)
								},
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
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 13),
									y: winH - (stageUnit * 12)
								},
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
							name: 'level2-sector5-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 6
								},
								start: {
									x: (stageWidth * 4) + (stageUnit),
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
							name: 'level2-sector5-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 6
								},
								start: {
									x: (stageWidth * 4) + (stageUnit * 4),
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 5),
									y: winH - (stageUnit * 1.5)
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
					name: 'sector6',
					cl: 'Sector',
					bounds: {
						start: stageWidth * 5,
						end: stageWidth * 6
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
							name: 'level2-sector6-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 6
								},
								start: {
									x: (stageWidth * 5) + (stageUnit),
									y: winH - ((stageUnit * 2) + 32)
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 5) + (stageUnit * 9),
									y: winH - (stageUnit * 1.5)
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
							x: winW - 50,
							y: 20
						}
					}
				},
				{
					name: 'health',
					cl: 'Text',
					attrs: {
						x: winW - 100,
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
				y: -(stageHeight * 2) + winH,
				width: stageWidth * 6,
				height: stageHeight * 2
			},
			clearWorld: true,
			clearCache: false,
			bounds: {
				start: 0,
				end: (stageWidth * 6) - (stageUnit * 1)
			},
			images: [
				'sky',
				'forestBackground03',
				'forestBackground04',
				'tree01',
				'platformV',
				'platform',
				'branch02Left',
				'branch02Right',
				'branch02aLeft',
				'branch02aRight',
				'vine01Left',
				'vine01Right',
				'thorns01',
				'lollipop',
				'leftButton',
				'rightButton',
				'upButton',
				'pauseButton',
				'invisibleBg',
				'heart'
			],
			sprites: [
				'keke',
				'caterpillar01',
				'caterpillar02'
			],
			attrs: [
			{
				name: 'scenery',
				cl: 'GroupCollection',
				attrs: [
				{
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
							width: winW,
							height: winH,
							fixedToCamera: true
						}
					}
				},
				{
					name: 'background01',
					cl: 'Sprite',
					attrs: {
						img: 'forestBackground03',
						phaser: {
							width: stageWidth * 3,
							height: stageHeight * 2
						},
						start: {
							x: 0,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'background02',
					cl: 'Sprite',
					attrs: {
						img: 'forestBackground04',
						phaser: {
							width: stageWidth * 3,
							height: stageHeight * 2
						},
						start: {
							x: stageWidth * 3,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'tree01',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth) + (stageUnit * 2),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree02',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth) + (stageUnit * 11),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree03',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 2) + (stageUnit * 3),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree04',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 2) + (stageUnit * 11),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree05',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 3) + (stageUnit * 4),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree06',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 3) + (stageUnit * 11),
							y: winH - (stageHeight * 3)
						}
					}
				},
				{
					name: 'tree07',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 2),
							height: (stageHeight * 3)
						},
						start: {
							x: (stageWidth * 4) + (stageUnit * 4),
							y: winH - (stageHeight * 3)
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
							x: -16,
							y: winH - (stageHeight * 2)
						},
						phaser: {
							width: 16,
							height: stageHeight * 2
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
							width: stageWidth * 8,
							height: 32
						},
						start: {
							x: 0,
							y: winH - 16
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
				// sector1
				{
					name: 'sector1',
					cl: 'Sector',
					bounds: {
						start: 0,
						end: stageWidth
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
						attrs: [] 
					},
					{
						name: 'bonuses',
						cl: 'PhysicalGroupCollection',
						attrs: []
					}
					]
				},
				// sector2
				{
					name: 'sector2',
					cl: 'Sector',
					bounds: {
						start: stageWidth,
						end: stageWidth * 2
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'vines01',
							cl: 'Sprite',
							attrs: {
								img: 'vine01Left',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 2) },
								setSize: [(stageUnit * 3), (stageUnit * 0.5), 0, (stageUnit * 1.5)],
								start: {
									x: (stageWidth) + (stageUnit),
									y: winH - (stageUnit * 3.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'vines02',
							cl: 'Sprite',
							attrs: {
								img: 'vine01Right',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 2) },
								setSize: [(stageUnit * 3), (stageUnit * 0.5), 0, (stageUnit * 1.5)],
								start: {
									x: (stageWidth) + (stageUnit * 5),
									y: winH - (stageUnit * 5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree01-branch01',
							cl: 'Sprite',
							attrs: {
								img: 'branch02aLeft',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth) + (stageUnit * 8),
									y: winH - (stageUnit * 4.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree01-branch02',
							cl: 'Sprite',
							attrs: {
								img: 'branch02aRight',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth) + (stageUnit * 12),
									y: winH - (stageUnit * 6)
								},
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
						attrs: [
						{
							name: 'level3-sector2-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth) + (stageUnit * 4),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},	
						{
							name: 'level3-sector2-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth) + (stageUnit * 7),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},
						{
							name: 'level3-sector2-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth) + (stageUnit * 10.5),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},
						{
							name: 'level3-sector2-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth) + (stageUnit * 14),
									y: winH - (stageUnit * 2) + 32
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
							name: 'level3-sector2-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02',
								phaser: {
									width: enemy02.width,
									height: enemy02.height,
									health: 4
								},
								start: {
									x: (stageWidth) + (stageUnit),
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
							name: 'level3-sector2-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 10
								},
								start: {
								x: (stageWidth) + (stageUnit * 7),
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth) + (stageUnit * 8),
									y: winH - (stageUnit * 6)
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
				// sector3
				{
					name: 'sector3',
					cl: 'Sector',
					bounds: {
						start: stageWidth * 2,
						end: stageWidth * 3
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'tree02-branch01',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Left',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit),
									y: winH - (stageUnit * 7.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree02-branch02',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Right',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 5),
									y: winH - (stageUnit * 9)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree02-branch03',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Right',
								phaser: { width: (stageUnit * 2.5), height: (stageUnit * 0.4) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 4.5),
									y: winH - (stageUnit * 12)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree03-branch01',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Right',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 13),
									y: winH - (stageUnit * 5.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree03-branch02',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Left',
								phaser: { width: (stageUnit * 2.5), height: (stageUnit * 0.4) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 9.5),
									y: winH - (stageUnit * 10.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree03-branch03',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Right',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 12.5),
									y: winH - (stageUnit * 10.5)
								},
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
						attrs: [
						{
							name: 'level3-sector3-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 3.5),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},	
						{
							name: 'level3-sector3-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 8),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},
						{
							name: 'level3-sector3-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 11.5),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},
						{
							name: 'level3-sector3-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 15),
									y: winH - (stageUnit * 2) + 32
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
								img: 'caterpillar02',
								phaser: {
									width: enemy02.width,
									height: enemy02.height,
									health: 6
								},
								start: {
									x: (stageWidth * 2),
									y: winH - ((stageUnit * 2) + 32)
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
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
						attrs: [
						{
							cl: 'Sprite',
							attrs: {
								img: 'lollipop',
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 5),
									y: winH - (stageUnit * 14.5)
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
				// sector4
				{
					name: 'sector4',
					cl: 'Sector',
					bounds: {
						start: stageWidth * 3,
						end: stageWidth * 4
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'tree04-branch01',
							cl: 'Sprite',
							attrs: {
								img: 'branch02aRight',
								phaser: { width: (stageUnit * 1), height: (stageUnit * 0.3) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 5),
									y: winH - (stageUnit * 2.25)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree04-branch02',
							cl: 'Sprite',
							attrs: {
								img: 'branch02aLeft',
								phaser: { width: (stageUnit * 1), height: (stageUnit * 0.3) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 3),
									y: winH - (stageUnit * 4.25)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree04-branch03',
							cl: 'Sprite',
							attrs: {
								img: 'branch02aRight',
								phaser: { width: (stageUnit * 1), height: (stageUnit * 0.3) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 5),
									y: winH - (stageUnit * 6.25)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree04-branch04',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Left',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit),
									y: winH - (stageUnit * 8.25)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree04-branch05',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Right',
								phaser: { width: (stageUnit * 2.5), height: (stageUnit * 0.4) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 4.5),
									y: winH - (stageUnit * 10.25)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree05-branch01',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Left',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 10),
									y: winH - (stageUnit * 10)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree05-branch02',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Right',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 13),
									y: winH - (stageUnit * 12)
								},
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
						attrs: [
						{
							name: 'level3-sector4-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 3.5),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},	
						{
							name: 'level3-sector4-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 8),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},
						{
							name: 'level3-sector4-hazard0',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 12.5),
									y: winH - (stageUnit * 2) + 32
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
							name: 'level3-sector4-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 6
								},
								start: {
									x: (stageWidth * 3) + (stageUnit),
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
							name: 'level3-sector4-enemy2',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02',
								phaser: {
									width: enemy02.width,
									height: enemy02.height,
									health: 6
								},
								start: {
									x: (stageWidth * 3) + (stageUnit * 4),
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 3) + (stageUnit * 6),
									y: winH - (stageUnit * 1.5)
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
				// sector5
				{
					name: 'sector5',
					cl: 'Sector',
					bounds: {
						start: stageWidth * 4,
						end: stageWidth * 5
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'tree06-branch01',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Left',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit),
									y: winH - (stageUnit * 7.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree06-branch02',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Right',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 5),
									y: winH - (stageUnit * 9)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree07-branch01',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Left',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 10),
									y: winH - (stageUnit * 10.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'tree07-branch02',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Right',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 13),
									y: winH - (stageUnit * 12)
								},
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
						attrs: [
						{
							name: 'level3-sector5-hazard1',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 4),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},	
						{
							name: 'level3-sector5-hazard1',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 4),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},	
						{
							name: 'level3-sector5-hazard1',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 9),
									y: winH - (stageUnit * 2) + 32
								},
								physics: {
									immovable: true
								},
								attack: 10
							}
						},	
						{
							name: 'level3-sector5-hazard1',
							cl: 'Sprite',
							attrs: {
								img: 'thorns01',
								phaser: { width: (stageUnit * 2), height: (stageUnit * 1.5) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 12.5),
									y: winH - (stageUnit * 2) + 32
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
							name: 'level3-sector5-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar02',
								phaser: {
									width: enemy02.width,
									height: enemy02.height,
									health: 6
								},
								start: {
									x: (stageWidth * 4) + (stageUnit),
									y: winH - ((stageUnit * 2) + 32)
								},
								physics: {
									deferredGravity: true,
									bounce: {
										x: 0,
										y: 0.2
									}
								},
								attack: 5,
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
								start: {
									x: (stageWidth * 4) + (stageUnit * 11),
									y: winH - (stageUnit * 1.5)
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
				// sector6
				{
					name: 'sector6',
					cl: 'Sector',
					bounds: {
						start: stageWidth * 5,
						end: stageWidth * 6
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
							name: 'level3-sector6-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 6
								},
								start: {
									x: (stageWidth * 5) + (stageUnit * 4),
									y: winH - ((stageUnit * 2) + 32)
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
				}
				]
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
							x: winW - 50,
							y: 20
						}
					}
				},
				{
					name: 'health',
					cl: 'Text',
					attrs: {
						x: winW - 100,
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
				y: -(stageHeight * 2) + winH,
				width: stageWidth * 6,
				height: stageHeight * 2
			},
			clearWorld: true,
			clearCache: false,
			bounds: {
				start: 0,
				end: (stageWidth * 6) - (stageUnit * 1)
			},
			images: [
				'sky',
				'mountainBackground01a',
				'mountainBackground01b',
				'mountainBackground01c',
				'mountainBackground01d',
				'mountainBackground01e',
				'mountainBackground01f',
				'platformV',
				'platform',
				'rockPlatform1',
				'leftButton',
				'rightButton',
				'upButton',
				'pauseButton',
				'invisibleBg',
				'heart'
			],
			sprites: [
				'keke'
			],
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
							width: winW,
							height: winH,
							fixedToCamera: true
						}
					}
				},
				{
					name: 'mountainBackground01a',
					cl: 'Sprite',
					attrs: {
						img: 'mountainBackground01a',
						phaser: {
							width: stageWidth,
							height: stageHeight * 2
						},
						start: {
							x: 0,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'mountainBackground01b',
					cl: 'Sprite',
					attrs: {
						img: 'mountainBackground01b',
						phaser: {
							width: stageWidth,
							height: stageHeight * 2
						},
						start: {
							x: stageWidth,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'mountainBackground01c',
					cl: 'Sprite',
					attrs: {
						img: 'mountainBackground01c',
						phaser: {
							width: stageWidth,
							height: stageHeight * 2
						},
						start: {
							x: (stageWidth * 2),
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'mountainBackground01d',
					cl: 'Sprite',
					attrs: {
						img: 'mountainBackground01d',
						phaser: {
							width: stageWidth,
							height: stageHeight * 2
						},
						start: {
							x: (stageWidth * 3),
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'mountainBackground01e',
					cl: 'Sprite',
					attrs: {
						img: 'mountainBackground01e',
						phaser: {
							width: stageWidth,
							height: stageHeight * 2
						},
						start: {
							x: (stageWidth * 4),
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'mountainBackground01f',
					cl: 'Sprite',
					attrs: {
						img: 'mountainBackground01f',
						phaser: {
							width: stageWidth,
							height: stageHeight * 2
						},
						start: {
							x: (stageWidth * 5),
							y: winH - (stageHeight * 2)
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
							x: -16,
							y: winH - (stageHeight * 2)
						},
						phaser: {
							width: 16,
							height: stageHeight * 2
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
							width: stageWidth - (stageUnit),
							height: (stageUnit)
						},
						start: {
							x: 0,
							y: winH - (stageUnit * 0.5)
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
						end: stageWidth
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'rockPlatform1',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 3),
									height: (stageUnit * 1.5)
								},
								start: {
									x: (stageUnit * 13),
									y: winH - (stageUnit * 1.5)
								},
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
						attrs: [
						{
							name: 'death',
							cl: 'Sprite',
							attrs: {
								img: 'invisibleBg',
								phaser: {
									width: stageWidth,
									height: 32
								},
								start: {
									x: 0,
									y: winH + 100
								},
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
						start: stageWidth,
						end: (stageWidth * 2)
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'rockPlatform1',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 3),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth) + (stageUnit),
									y: winH - (stageUnit * 2)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform2',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 3),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth) + (stageUnit * 6),
									y: winH - (stageUnit * 3)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform3',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth) + (stageUnit * 11),
									y: winH - (stageUnit * 4)
								},
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
						attrs: [
						{
							name: 'death',
							cl: 'Sprite',
							attrs: {
								img: 'invisibleBg',
								phaser: {
									width: stageWidth,
									height: 32
								},
								start: {
									x: stageWidth,
									y: winH + 100
								},
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
					name: 'sector3',
					cl: 'Sector',
					bounds: {
						start: (stageWidth * 2),
						end: (stageWidth * 3)
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'rockPlatform4',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 3),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 2),
									y: winH - (stageUnit * 2)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform5',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2.5),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 2) + (stageUnit * 6),
									y: winH - (stageUnit * 2.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform6',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 2) + (stageUnit * 10),
									y: winH - (stageUnit * 4)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform7',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2.5),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 2) + (stageUnit * 13),
									y: winH - (stageUnit * 6)
								},
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
						attrs: [
						{
							name: 'death',
							cl: 'Sprite',
							attrs: {
								img: 'invisibleBg',
								phaser: {
									width: stageWidth,
									height: 32
								},
								start: {
									x: (stageWidth * 2),
									y: winH + 100
								},
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
					name: 'sector4',
					cl: 'Sector',
					bounds: {
						start: (stageWidth * 3),
						end: (stageWidth * 4)
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'rockPlatform8',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 3) + (stageUnit),
									y: winH - (stageUnit * 5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform9',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2.5),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 3) + (stageUnit * 4),
									y: winH - (stageUnit * 7)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform10',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 3) + (stageUnit * 9.5),
									y: winH - (stageUnit * 6.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform11',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2.5),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 3) + (stageUnit * 13),
									y: winH - (stageUnit * 8)
								},
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
						attrs: [
						{
							name: 'death',
							cl: 'Sprite',
							attrs: {
								img: 'invisibleBg',
								phaser: {
									width: stageWidth,
									height: 32
								},
								start: {
									x: (stageWidth * 3),
									y: winH + 100
								},
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
					name: 'sector5',
					cl: 'Sector',
					bounds: {
						start: (stageWidth * 4),
						end: (stageWidth * 5)
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'rockPlatform12',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 4) + (stageUnit),
									y: winH - (stageUnit * 7)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform13',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2.5),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 4) + (stageUnit * 4),
									y: winH - (stageUnit * 8.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform14',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 4) + (stageUnit * 9),
									y: winH - (stageUnit * 9.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform15',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 4) + (stageUnit * 13),
									y: winH - (stageUnit * 9)
								},
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
						attrs: [
						{
							name: 'death',
							cl: 'Sprite',
							attrs: {
								img: 'invisibleBg',
								phaser: {
									width: stageWidth + stageUnit,
									height: 32
								},
								start: {
									x: (stageWidth * 4),
									y: winH + 100
								},
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
					name: 'sector6',
					cl: 'Sector',
					bounds: {
						start: (stageWidth * 5),
						end: (stageWidth * 6)
					},
					attrs: [
					{
						name: 'dynamicTerrain',
						cl: 'PhysicalGroupCollection',
						attrs: [
						{
							name: 'rockPlatform16',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 1.5),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 5) + (stageUnit * 2),
									y: winH - (stageUnit * 9.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform17',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 3),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 5) + (stageUnit * 5),
									y: winH - (stageUnit * 10.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform18',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 2),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 5) + (stageUnit * 9),
									y: winH - (stageUnit * 12.5)
								},
								physics: {
									immovable: true
								}
							}
						},
						{
							name: 'rockPlatform19',
							cl: 'Sprite',
							attrs: {
								img: 'rockPlatform1',
								phaser: {
									width: (stageUnit * 3),
									height: (stageUnit)
								},
								start: {
									x: (stageWidth * 5) + (stageUnit * 13),
									y: winH - (stageUnit * 14.5)
								},
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
						attrs: [
						{
							name: 'death',
							cl: 'Sprite',
							attrs: {
								img: 'invisibleBg',
								phaser: {
									width: stageWidth,
									height: 32
								},
								start: {
									x: (stageWidth * 5),
									y: winH + 100
								},
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
				}
				]
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
							x: winW - 50,
							y: 20
						}
					}
				},
				{
					name: 'health',
					cl: 'Text',
					attrs: {
						x: winW - 100,
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
				width: winW,
				height: winH
			},
			clearWorld: true,
			clearCache: false,
			images: [
				'greyRect',
				'nextButton',
				'menuButton'
			],
			sprites: [],
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
							width: winW - 40,
							height: winH - 40
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
				width: winW,
				height: winH
			},
			clearWorld: true,
			clearCache: false,
			images: [
				'greyRect',
				'menuButton',
				'quitButton'
			],
			sprites: [],
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
							width: winW - 40,
							height: winH - 40
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
				width: winW,
				height: winH
			},
			clearWorld: true,
			clearCache: false,
			images: [
				'greyRect',
				'menuButton',
				'quitButton'
			],
			sprites: [],
			attrs: [
			{
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
							width: winW - 40,
							height: winH - 40
						}
					}
				},
				{
					name: 'title',
					cl: 'Text',
					attrs: {
						centerX: true,
						centerY: true,
						x: 0,
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
		// PLAYER
		player: {
			name: 'keke',
			cl: 'AnimatedPlayer',
			attrs: {
				img: 'keke',
				phaser: {
					health: 100,
					width: (stageUnit * 2.3) * 0.84,
					height: (stageUnit * 2.3)
				},
				setSize: [((stageUnit * 3) * 0.3), 220],
				start: {
					x: winW/2 - ((stageUnit * 3) * 0.84)/2,
					y: winH - 300
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
					x: (stageUnit * 4),
					y: (stageUnit * 10)
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
		},
		// PHYSICS
		gravity: {
			x: 0,
			// y: 15
			y: stageUnit/2.5
		}
	};

	return c;
}());
