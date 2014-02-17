var config = (function() {
	var winW = PolyworksStage.winW; 
	var winH = PolyworksStage.winH;
	var stageWidth = PolyworksStage.width;
	var stageHeight = PolyworksStage.height;
	var stageUnit = PolyworksStage.unit;

	var enemy01 = {
		width: (stageUnit) * 2,
		height: stageUnit * 0.67
	};

	var c = {
		// IMAGES
		images: {
			sky: 'images/night_sky.jpg',

			mountainBackground1a: 'images/mountain_background1a.png',
			mountainBackground1b: 'images/mountain_background1b.png',

			forestDistantA1: 'images/forest_distant_background01_a1.png',
			forestDistantA2: 'images/forest_distant_background01_a2.png',
			forestDistantB1: 'images/forest_distant_background01_b1.png',
			forestDistantB2: 'images/forest_distant_background01_b2.png',
			forestDistantC1: 'images/forest_distant_background01_c1.png',
			forestDistantC2: 'images/forest_distant_background01_c2.png',
			forestDistantD1: 'images/forest_distant_background01_d1.png',
			forestDistantD2: 'images/forest_distant_background01_d2.png',
			forestDistantE1: 'images/forest_distant_background01_e1.png',
			forestDistantE2: 'images/forest_distant_background01_e2.png',
			forestDistantF1: 'images/forest_distant_background01_f1.png',
			forestDistantF2: 'images/forest_distant_background01_f2.png',
			
			forestBackground01: 'images/forest_distant_background01a.png',
			forestBackground02: 'images/forest_distant_background01b.png',
			forestBackground03: 'images/forest_background01a.png',
			forestBackground04: 'images/forest_background01b.png',
			forestBackground05: 'images/forest_background01a.png',
			forestBackground06: 'images/forest_background01b.png',
			forestBackground07: 'images/forest_background01b.png',

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
				'quitButton'
			],
			sprites: [],
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
				'forestDistantA1',
				'forestDistantA2',
				'forestDistantB1',
				'forestDistantB2',
				'forestDistantC1',
				'forestDistantC2',
				'forestDistantD1',
				'forestDistantD2',
				'forestDistantE1',
				'forestDistantE2',
				'forestDistantF1',
				'forestDistantF2',
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
						img: 'forestDistantA1',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: 0,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'background01',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantA2',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: 0,
							y: winH - (stageHeight)
						}
					}
				},
				{
					name: 'background02',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantB1',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: stageWidth,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'background01',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantB2',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: stageWidth,
							y: winH - (stageHeight)
						}
					}
				},
				{
					name: 'background02',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantC1',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: stageWidth * 2,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'background01',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantC2',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: stageWidth * 2,
							y: winH - (stageHeight)
						}
					}
				},
				{
					name: 'background02',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantD1',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: stageWidth * 3,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'background01',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantD2',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: stageWidth * 3,
							y: winH - (stageHeight)
						}
					}
				},
				{
					name: 'background02',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantE1',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: stageWidth * 4,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'background01',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantE2',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: stageWidth * 4,
							y: winH - (stageHeight)
						}
					}
				},
				{
					name: 'background02',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantF1',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: stageWidth * 5,
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'background02',
					cl: 'Sprite',
					attrs: {
						img: 'forestDistantF2',
						phaser: {
							width: stageWidth,
							height: stageHeight
						},
						start: {
							x: stageWidth * 5,
							y: winH - (stageHeight)
						}
					}
				},
				{
					name: 'tree01',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 1.5),
							height: (stageHeight * 2)
						},
						start: {
							x: (stageWidth * 2) + (stageUnit * 1.75),
							y: winH - (stageHeight * 2)
						}
					}
				},
				{
					name: 'tree02',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						phaser: {
							width: (stageHeight * 1.5),
							height: (stageHeight * 2)
						},
						start: {
							x: (stageWidth * 4) + (stageUnit * 2),
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
							x: 0,
							y: (-(stageHeight * 2) + winH)
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
						attrs: [
						{
							name: 'level1-sector1-enemy1',
							cl: 'AnimatedEnemy',
							attrs: {
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 3
								},
								start: {
									x: (stageWidth) - (stageUnit),
									y: winH - (stageUnit + 32)
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
								score: 2000,
								movement: {
									speed: 0.25,
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
									health: 7
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
									x: (stageWidth * 2) + (stageUnit * 9),
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
									x: (stageWidth * 2) + (stageUnit * 9),
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
									x: (stageWidth * 2) + (stageUnit * 9),
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
									x: (stageWidth * 2) + (stageUnit * 9),
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
									health: 5
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
									health: 15
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
						attrs: [
						{
							name: 'plat0',
							cl: 'Sprite',
							attrs: {
								img: 'platform',
								start: {
									x: (stageWidth * 6) + (stageUnit * 7),
									y: stageHeight - 75
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
									x: (stageWidth * 6) + (stageUnit * 7.5),
									y: stageHeight - 125
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
									x: (stageWidth * 6) + (stageUnit * 9),
									y: stageHeight - 175
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
									x: (stageWidth * 6) + (stageUnit * 7.5),
									y: stageHeight - 225
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
									x: (stageWidth * 6) + (stageUnit * 9),
									y: stageHeight - 275
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
									x: (stageWidth * 6) + (stageUnit * 7.5),
									y: stageHeight - 325
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
									x: (stageWidth * 6) + (stageUnit * 9),
									y: stageHeight - 375
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
									x: (stageWidth * 6) + (stageUnit * 5),
									y: stageHeight - 425
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
								img: 'caterpillar01',
								phaser: {
									width: enemy01.width,
									height: enemy01.height,
									health: 10
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
									x: (stageWidth * 4) + (stageUnit * 9),
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
									x: (stageWidth * 4) + (stageUnit * 9),
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
									x: (stageWidth * 4) + (stageUnit * 9),
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
									health: 5
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
									health: 15
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
									health: 10
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
				'forestDistantA1',
				'forestDistantA2',
				'forestDistantB1',
				'forestDistantB2',
				'forestDistantC1',
				'forestDistantC2',
				'forestDistantD1',
				'forestDistantD2',
				'forestDistantE1',
				'forestDistantE2',
				'forestDistantF1',
				'forestDistantF2',
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
							y: (-(stageHeight * 2) + winH)
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
							y: (-(stageHeight * 2) + winH)
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
							y: (-(stageHeight * 2) + winH)
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
									x: (stageWidth * 2) + (stageUnit * 4),
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
								img: 'branch02Left',
								phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
								start: {
									x: (stageWidth * 2) + (stageUnit * 7),
									y: winH - (stageUnit * 4.5)
								},
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
								phaser: { width: (stageUnit * 3), height: (stageUnit * 2) },
								setSize: [(stageUnit * 3), (stageUnit * 0.5), 0, (stageUnit * 1.5)],
								start: {
									x: (stageWidth * 2) + (stageUnit * 11),
									y: winH - (stageUnit * 5)
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
								img: 'branch02Right',
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
									x: (stageWidth * 2) + (stageUnit * 4),
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
									x: (stageWidth * 3) + (stageUnit * 5),
									y: winH - (stageUnit * 12.5)
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
									x: 3700,
									y: stageHeight - 150
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
						/*
						{
							name: 'platform2',
							cl: 'Sprite',
							attrs: {
								img: 'vine01Left',
								start: {
									x: 2048,
									y: stageHeight - 115
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
									y: stageHeight - 180
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
									y: stageHeight - 230
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
									y: stageHeight - 290
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
									y: stageHeight - 360
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
									y: stageHeight - 430
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
									x: (stageWidth * 4) + (stageUnit),
									y: stageHeight - 380
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
									y: stageHeight - 350
								},
								// setSize: [64, 16, 32, 32],
								scale: [0.6, 0.5],
								physics: {
									immovable: true
								}
							}
						}
						*/
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
						attrs: [
						{
							name: 'platform9',
							cl: 'Sprite',
							attrs: {
								img: 'branch02Left',
								start: {
									x: 3098,
									y: stageHeight - 300
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
									y: stageHeight - 380
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
									y: stageHeight - 150
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
							width: stageWidth,
							height: stageHeight,
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
							height: stageHeight * 1.5
						},
						start: {
							x: 0,
							y: -(stageHeight * 0.5)
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
							height: stageHeight * 1.5
						},
						start: {
							x: 2048,
							y: -(stageHeight * 0.5)
						}
					}

				},

				{
					name: 'tree01',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						// phaser: {
						// 	width: stageHeight,
						// 	height: (stageHeight * 2) + 20
						// },
						start: {
							x: 640,
							y: (-stageHeight)
						}
					}
				},
				{
					name: 'tree02',
					cl: 'Sprite',
					attrs: {
						img: 'tree04',
						// phaser: {
						// 	width: stageHeight,
						// 	height: (stageHeight * 2)
						// },
						start: {
							x: 1200,
							y: (-stageHeight)
						}
					}
				},
				{
					name: 'tree02',
					cl: 'Sprite',
					attrs: {
						img: 'tree01',
						// phaser: {
						// 	width: stageHeight,
						// 	height: (stageHeight * 2) + 20
						// },
						start: {
							x: 1900,
							y: (-stageHeight)
						}
					}
				},
				{
					name: 'tree03',
					cl: 'Sprite',
					attrs: {
						img: 'tree03',
						// phaser: {
						// 	width: stageHeight,
						// 	height: stageHeight * 2
						// },
						start: {
							x: 2190,
							y: (-stageHeight)
						}
					}
				},
				{
					name: 'tree04',
					cl: 'Sprite',
					attrs: {
						img: 'tree04',
						// phaser: {
						// 	width: stageHeight,
						// 	height: stageHeight * 2
						// },
						start: {
							x: 2600,
							y: (-stageHeight)
						}
					}
				},
				{
					name: 'tree05',
					cl: 'Sprite',
					attrs: {
						img: 'tree02',
						// phaser: {
						// 	width: stageHeight,
						// 	height: stageHeight * 2
						// },
						start: {
							x: 3000,
							y: (-stageHeight)
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
				// 			y: stageHeight - 220
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
				// 			y: stageHeight - 220
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
							y: -stageHeight
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
							height: 128
						},
						start: {
							x: 0,
							y: stageHeight - 20
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
							y: stageHeight - 115
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
							y: stageHeight - 140
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
							y: stageHeight - 115
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
							y: stageHeight - 180
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
							y: stageHeight - 255
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
							y: stageHeight - 290
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
							y: stageHeight - 340
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
							y: stageHeight - 390
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
							y: stageHeight - 440
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
							y: stageHeight - 490
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
										y: stageHeight - 75
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
									name: 'caterpillar02-sprite',
									img: 'caterpillar02',
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
									name: 'caterpillar02-sprite',
									img: 'caterpillar02',
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
									start: {
										x: 760,
										y: stageHeight - 250
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
									img: 'caterpillar02',
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
										y: stageHeight - 75
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
										y: stageHeight - 75
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
										y: stageHeight - 75
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
									img: 'caterpillar02',
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
										y: stageHeight - 150
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
									img: 'caterpillar02',
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
									img: 'caterpillar02',
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
									start: {
										x: 3600,
										y: stageHeight - 150
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
				// end: 1024
				end: (stageWidth * 6) - (stageUnit * 1)
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
							width: stageWidth,
							height: stageHeight,
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
							height: stageHeight * 1.5
						},
						start: {
							x: 0,
							y: -(stageHeight * 0.5)
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
							height: stageHeight * 1.5
						},
						start: {
							x: 2048,
							y: -(stageHeight * 0.5)
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
				// 			y: stageHeight - 220
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
				// 			y: stageHeight - 220
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
							y: -stageHeight
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
							height: 128
						},
						start: {
							x: 0,
							y: stageHeight - 20
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
							y: stageHeight - 115
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
							y: stageHeight - 140
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
							y: stageHeight - 115
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
							y: stageHeight - 180
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
							y: stageHeight - 255
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
							y: stageHeight - 330
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
							y: stageHeight - 405
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
							y: stageHeight - 480
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
							y: stageHeight - 555
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
							y: stageHeight - 630
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
										y: stageHeight - 75
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
									name: 'caterpillar02-sprite',
									img: 'caterpillar02',
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
									name: 'caterpillar02-sprite',
									img: 'caterpillar02',
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
									start: {
										x: 760,
										y: stageHeight - 250
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
									img: 'caterpillar02',
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
										y: stageHeight - 75
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
										y: stageHeight - 75
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
										y: stageHeight - 75
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
									img: 'caterpillar02',
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
									img: 'caterpillar02',
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
									start: {
										x: 2740,
										y: stageHeight - 150
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
									img: 'caterpillar02',
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
									img: 'caterpillar02',
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
								phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
									start: {
										x: 3600,
										y: stageHeight - 150
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
		// level 5
		{
			name: 'level5',
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
							width: stageWidth,
							height: stageHeight,
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
							y: -(stageHeight * 0.5)
							// y: stageHeight - 512
						},
						phaser: {
							width: 2048,
							height: stageHeight * 1.5
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
							y: -(stageHeight * 0.5)
						},
						phaser: {
							width: 2048,
							height: stageHeight * 1.5
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
				// 			y: (-stageHeight)
				// 		},
				// 		phaser: {
				// 			width: stageHeight,
				// 			height: stageHeight * 2,
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
				// 			y: (-stageHeight)
				// 		},
				// 		phaser: {
				// 			width: stageHeight,
				// 			height: stageHeight * 2,
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
							y: -stageHeight
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
						img: 'rockPlatform1',
						phaser: {
							width: stageWidth * 8,
							height: 128
						},
						start: {
							x: 0,
							y: stageHeight - 20
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
							y: winH - ((stageUnit * 2) + 32)
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
							y: stageHeight - 80
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
							y: stageHeight - 120
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
							y: stageHeight - 150
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
							y: stageHeight - 190
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
							y: stageHeight - 240
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
							y: stageHeight - 280
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
							y: stageHeight - 320
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
				// 			y: stageHeight - 360
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
							y: stageHeight - 400
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
							y: stageHeight - 440
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
							y: stageHeight - 500
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
							y: stageHeight - 530
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
							y: stageHeight - 560
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
										y: stageHeight + 100
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
										y: stageHeight + 100
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
										y: stageHeight + 100
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
										y: stageHeight + 100
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
