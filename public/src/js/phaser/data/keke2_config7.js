Polyworks.Config = (function() {
	function Config() {}
	
	Config.prototype.init = function(stage) {
		var winW = stage.winW; 
		var winH = stage.winH;
		var stageWidth = stage.width;
		var stageHeight = stage.height;
		var stageUnit = stage.unit;

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
				// gameTitle: 'images/keke_title.png',
				gameTitle: 'images/keke_grey_expanse_title.png',

				blackRect: 'images/black_rect32x32.png',
				greyRect: 'images/grey_rect32x32.png',
				whiteRect: 'images/white_rect32x32.png',

				level1Icon: 'images/map/level_1_icon.png',
				level2Icon: 'images/map/level_2_icon.png',
				level3Icon: 'images/map/level_3_icon.png',
				level4Icon: 'images/map/level_4_icon.png',
				level5Icon: 'images/map/level_5_icon.png',
				level6Icon: 'images/map/level_6_icon.png',
				chapter1Title: 'images/map/chapter_1_title.png',
				chapter2Title: 'images/map/chapter_2_title.png',
				levelSelectedIcon: 'images/map/level_selected_icon.png',
				levelLockedIcon: 'images/map/level_locked_icon.png',
				levelClearedIcon: 'images/map/level_cleared_icon.png',
				pageLeftArrow: 'images/map/page_left_arrow.png',
				pageRightArrow: 'images/map/page_right_arrow.png',

				sky: 'images/night_sky.jpg',

				forestBackground01: 'images/pencil_forest01a.png',
				forestBackground02: 'images/pencil_forest01b.png',
				forestBackground03: 'images/pencil_forest01c.png',

				mountainBackground01a: 'images/pencil_mountain04a.png',
				mountainBackground01b: 'images/pencil_mountain04b.png',
				mountainBackground01c: 'images/pencil_mountain04c.png',
				mountainBackground01d: 'images/pencil_mountain04d.png',
				mountainBackground01e: 'images/pencil_mountain04e.png',
				mountainBackground01f: 'images/pencil_mountain04f.png',

				mountainBackground05a: 'images/pencil_mountain05a.png',
				mountainBackground05b: 'images/pencil_mountain05b.png',
				mountainBackground05c: 'images/pencil_mountain05c.png',
				mountainBackground05d: 'images/pencil_mountain05d.png',
				mountainBackground05e: 'images/pencil_mountain05e.png',
				mountainBackground05f: 'images/pencil_mountain05f.png',
				mountainBackground05h: 'images/pencil_mountain05h.png',
				mountainBackground05i: 'images/pencil_mountain05i.png',
				mountainBackground05k: 'images/pencil_mountain05k.png',
				mountainBackground05l: 'images/pencil_mountain05l.png',

				// mountainBackground01a: 'images/pencil_mountain01a.png',
				// mountainBackground01b: 'images/pencil_mountain01b.png',
				// mountainBackground01c: 'images/pencil_mountain01c.png',
				// mountainBackground01d: 'images/pencil_mountain01d.png',
				// mountainBackground01e: 'images/pencil_mountain01e.png',
				// mountainBackground01f: 'images/pencil_mountain01f.png',

				ovalMask: 'images/oval_mask.png',

				grass03: 'images/grass03.png',
				grass03a: 'images/grass03a.png',
				grass03b: 'images/grass03b.png',
				grass03c: 'images/grass03c.png',

				tree01: 'images/tree04a.png',
				tree02: 'images/tree04a.png',
				tree03: 'images/tree04a.png',
				tree04: 'images/tree04a.png',

				platform: 'images/platform.png',
				platformGrey: 'images/platform_grey.png',
				platformRed: 'images/platform_red.png',
				platformV: 'images/platform_v.png',

				rockPlatform01: 'images/rock_platform01.png',

				branch02Left: 'images/branch03_left.png',
				branch02aLeft: 'images/branch03a_left.png',
				vine01Left: 'images/vine01a_left.png',
				branch02Right: 'images/branch03_right.png',
				branch02aRight: 'images/branch03a_right.png',
				vine01Right: 'images/vine01a_right.png',
				trunk01: 'images/trunk01.png',
				thorns01: 'images/thorns02.png',

				// bonuses
				crystal01Green: 'images/crystal01_green.png',
				lollipop: 'images/lollipop.png',
				cupcake: 'images/cupcake.png',

				// effects
				snowFlake01: 'images/particle01.png',

				// buttons
				startButton: 'images/start_button.png',
				nextButton: 'images/next_button.png',
				retryButton: 'images/retry_button.png',

				// icons
				heart: 'images/heart.png',
				damageIcon: 'images/alarm_icon.png',
				invisibleRect: 'images/invisible.png'
			},
			// SPRITES
			sprites: {
				// buttons
				leftButton: 
				{
					url: 'images/arrow_left2.png',
					width: 100,
					height: 341,
					frames: 2
				},
				rightButton: 
				{
					url: 'images/arrow_right2.png',
					width: 100,
					height: 341,
					frames: 2
				},
				upButton: 
				{
					url: 'images/arrow_up2.png',
					width: 100,
					height: 341,
					frames: 2
				},
				pauseButton: 
				{
					url: 'images/pause_button2.png',
					width: 50,
					height: 50,
					frames: 2
				},
				playButton: 
				{
					url: 'images/play_button.png',
					width: 50,
					height: 50,
					frames: 2
				},
				menuButton: 
				{
					url: 'images/menu_button2.png',
					width: 50,
					height: 50,
					frames: 2
				},
				mapButton: 
				{
					url: 'images/map_button.png',
					width: 50,
					height: 50,
					frames: 2
				},
				quitButton: 
				{
					url: 'images/quit_button2.png',
					width: 50,
					height: 50,
					frames: 2
				},

				// player
				keke: 
				{
					url: 'images/keke_character3c.png', 
					// width: 95, 
					// height: 113, 
					width: 190,
					height: 226,
					frames: 35
				},
				// enemies
				caterpillar01: 
				{
					url: 'images/caterpillar02a.png',
					width: 104, 
					height: 32, 
					frames: 14
				},
				caterpillar02: 
				{
					url: 'images/caterpillar02b.png',
					width: 104, 
					height: 32, 
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
									value: 'map'
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
						name: 'level',
						cl: 'ControlKey',
						attrs: {
							inputCode: Polyworks.InputCodes.LEVEL,
							events: {
								pressed: {
									type: Polyworks.Events.CHANGE_STATE,
									value: 'level'
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
 									type: Polyworks.Events.PAUSE_STATE
								}
							}
						}
					},
					{
						name: 'menu', // m
						cl: 'ControlKey',
						attrs: {
							inputCode: Polyworks.InputCodes.MENU,
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
							// img: 'startButton',
							img: 'playButton',
							start: {
								x: winW/2 - 25,
								y: winH/2
							},
							inputCode: Polyworks.InputCodes.START,
							events: {
								pressed: {
									type: Polyworks.Events.CHANGE_STATE,
									value: 'map'
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
							frames: [0, 0, 1],
							// inputCode: Polyworks.InputCodes.QUIT,
							events: {
								released: {
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
							// inputCode: Polyworks.InputCodes.NEXT,
							events: {
								released: {
									type: Polyworks.Events.CHANGE_STATE,
									value: 'level'
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
							frames: [0, 0, 1],
							// inputCode: Polyworks.InputCodes.MENU,
							events: {
								released: {
									type: Polyworks.Events.CHANGE_STATE,
									value: 'menu'
								}
							}
						}
					}
					],
					map: [
					{
						name: 'menuBtn',
						cl: 'InputButton',
						attrs: {
							img: 'menuButton',
							start: {
								x: 30,
								y: 15
							},
							frames: [0, 0, 1],
							// inputCode: Polyworks.InputCodes.MENU,
							events: {
								released: {
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
							frames: [0, 0, 1],
							// inputCode: Polyworks.InputCodes.MENU,
							events: {
								released: {
									type: Polyworks.Events.CHANGE_STATE,
									value: 'menu'
								}
							}
						}
					}
					],
					gameOver: [
					{
						name: 'retry',
						cl: 'InputButton',
						attrs: {
							img: 'retryButton',
							start: {
								x: winW/2 - 128,
								y: winH/2 - 64
							},
							// inputCode: Polyworks.InputCodes.RETRY,
							events: {
								released: {
									type: Polyworks.Events.CHANGE_STATE,
									value: 'level'
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
							frames: [0, 0, 1],
							// inputCode: Polyworks.InputCodes.MENU,
							events: {
								released: {
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
							img: 'invisibleRect',
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
								y: winH - 356
							},
							frames: [0, 0, 1],
							inputCode: Polyworks.InputCodes.LEFT
						}
					},
					{
						name: 'rightBtn',
						cl: 'InputButton',
						attrs: {
							img: 'rightButton',
							start: {
								x: 170,
								y: winH - 356
							},
							frames: [0, 0, 1],
							inputCode: Polyworks.InputCodes.RIGHT
						}
					},
					{
						name: 'upBtn',
						cl: 'InputButton',
						attrs: {
							img: 'upButton',
							start: {
								x: winW - 130,
								y: winH - 356
							},
							frames: [0, 0, 1],
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
							frames: [0, 0, 1],
							// inputCode: Polyworks.InputCodes.PAUSE,
							events: {
								released: {
 									type: Polyworks.Events.PAUSE_STATE,
 									// type: Polyworks.Events.CHANGE_STATE,
									value: 'menu'
								}
							}
						}
					}
					]
				}
			},
			// SHARED GROUPS
			sharedGroups: {
				pauseGUI:  [
				{
					name: 'background',
					cl: 'Sprite',
					attrs: {
						img: 'whiteRect',
						phaser: {
							width: winW,
							height: winH,
							alpha: 0.5
						},
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'playButton',
					cl: 'InputButton',
					attrs: {
						img: 'playButton',
						start: {
							x: 30,
							y: 15
						},
						frames: [0, 0, 1],
						// inputCode: Polyworks.InputCodes.PLAY,
						events: {
							released: {
								type: Polyworks.Events.RESUME_STATE
							}
						}
					}
				},
				{
					name: 'mapButton',
					cl: 'InputButton',
					attrs: {
						img: 'mapButton',
						start: {
							x: 30,
							y: 80
						},
						frames: [0, 0, 1],
						// inputCode: Polyworks.InputCodes.START,
						events: {
							released: {
								type: Polyworks.Events.CHANGE_STATE,
								value: 'map'
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
							y: 145
						},
						frames: [0, 0, 1],
						// inputCode: Polyworks.InputCodes.MENU,
						events: {
							released: {
								type: Polyworks.Events.CHANGE_STATE,
								value: 'menu'
							}
						}
					}
				}
				],
				completedGUI: [
				{
					name: 'background',
					cl: 'Sprite',
					attrs: {
						img: 'whiteRect',
						phaser: {
							width: winW,
							height: winH,
							alpha: 0.5
						},
						start: {
							x: 0,
							y: 0
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
						y: stageUnit,
						defaultContent: 'Level ~{currentLevel}~ Completed',
						style: { 
							font: '30px Arial', 
							fill: '#ffffff',
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
						style: { 
							font: '18px Arial', 
							fill: '#ffffff',
							align: 'center'
						},
						defaultContent: 'Score: ~{score}~',
						listeners: [
							Polyworks.Events.LEVEL_CLEARED
						]
					}
				},
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
							released: {
								type: Polyworks.Events.CHANGE_STATE,
								value: 'level'
							}
						}
					}
				},
				{
					name: 'mapButton',
					cl: 'InputButton',
					attrs: {
						img: 'mapButton',
						start: {
							x: 30,
							y: 15
						},
						frames: [0, 0, 1],
						// inputCode: Polyworks.InputCodes.START,
						events: {
							released: {
								type: Polyworks.Events.CHANGE_STATE,
								value: 'map'
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
							y: 80
						},
						frames: [0, 0, 1],
						// inputCode: Polyworks.InputCodes.MENU,
						events: {
							released: {
								type: Polyworks.Events.CHANGE_STATE,
								value: 'menu'
							}
						}
					}
				}
				]
			},
			// USE FOR LOCAL TESTING:
			// preloadAll: true,

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
					'blackRect',
					'greyRect',
					'whiteRect',
					'gameTitle',
					'retryButton',
					'nextButton',
					'level1Icon',
					'level2Icon',
					'level3Icon',
					'level4Icon',
					'level5Icon',
					'level6Icon',
					'invisibleRect',
					'chapter1Title',
					'chapter2Title',
					'levelSelectedIcon',
					'levelLockedIcon',
					'levelClearedIcon',
					'levelLockedIcon',
					'pageLeftArrow',
					'pageRightArrow',
					'startButton'
				],
				sprites: [
					'keke',
					'pauseButton',
					'menuButton',
					'mapButton',
					'playButton',
					'retryButton',
					'quitButton'
				],
				attrs: [
				{
					name: 'menuGroup',
					cl: 'GroupCollection',
					attrs: [
					// {
					// 	name: 'whiteBg',
					// 	cl: 'Sprite',
					// 	attrs: {
					// 		img: 'whiteRect',
					// 		phaser: {
					// 			width: winW,
					// 			height: winH
					// 		},
					// 		start: {
					// 			x: 0,
					// 			y: 0
					// 		}
					// 	}
					// },
					{
						name: 'gameTitle',
						cl: 'Sprite',
						attrs: {
							img: 'gameTitle',
							phaser: {
								// width: winW
								width: stageUnit * 6,
								height: stageUnit * 4
							},
							start: {
								// x: 0,
								x: (winW/2 - (stageUnit * 3)),
								y: 0
							}
						}
					}
					]
				},
				{
					name: 'menuControls',
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
					// end: stageWidth
				},
				pausable: true,
				images: [
					'ovalMask',
					'forestBackground01',
					'forestBackground02',
					'forestBackground03',
					'grass03',
					'tree01',
					'platformV',
					'platform',
					'platformRed',
					'branch02Left',
					'branch02Right',
					'branch02aLeft',
					'branch02aRight',
					'crystal01Green',
					'lollipop',
					'invisibleRect',
					'heart',
					'greyRect'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'menuButton',
					'mapButton',
					'keke',
					'caterpillar01'
				],
				attrs: [
				{
					name: 'scenery',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'background01',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01',
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
						name: 'background02',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground02',
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
						name: 'background03',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground03',
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
						name: 'background04',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01',
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
						name: 'background05',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground02',
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
						name: 'background06',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground03',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2
							},
							start: {
								x: (stageWidth * 5),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'grass01',
						cl: 'Sprite',
						attrs: {
							img: 'grass03',
							phaser: {
								width: (stageWidth * 3),
								height: (stageUnit * 2)
							},
							start: {
								x: 0,
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'grass02',
						cl: 'Sprite',
						attrs: {
							img: 'grass03',
							phaser: {
								width: (stageWidth * 3),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageUnit * 2)
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
						name: 'rightWall',
						cl: 'Sprite',
						attrs: {
							img: 'platformV',
							start: {
								x: stageWidth * 6,
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
								width: (stageWidth * 6) + (stageUnit * 8),
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
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystal01Green',
							phaser: {
								width: (stageUnit * 0.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 13),
								y: winH - (stageUnit * 13.5)
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
										x: (stageUnit * 12),
										y: winH - (33 + (stageUnit * 0.5))
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
										health: 3
									},
									start: {
										x: (stageWidth) + (stageUnit * 12),
										y: winH - (33 + (stageUnit * 0.5))
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
										y: winH - (stageUnit * 2)
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
										y: winH - (stageUnit * 6)
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
										x: (stageWidth * 2) + (stageUnit * 10),
										y: winH - (stageUnit * 8)
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
										x: (stageWidth * 2) + (stageUnit * 7),
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
										y: winH - (stageUnit * 12)
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
										y: winH - (33 + (stageUnit * 0.5))
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
								name: 'level1-sector3-bonus1',
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
										y: winH - (33 + (stageUnit * 0.5))
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
								name: 'level1-sector4-bonus1',
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
									img: 'branch02Right',
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
									img: 'branch02Left',
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
									img: 'branch02Right',
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
								name: 'level1-sector5-enemy1',
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
								name: 'level1-sector5-enemy2',
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
										y: winH - (33 + (stageUnit * 0.5))
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
								name: 'level1-sector5-bonus1',
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
										y: winH - (33 + (stageUnit * 0.5))
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
								name: 'level1-sector6-bonus1',
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
					name: 'foreground',
					cl: 'GroupCollection',
					addTo: 'null',
					attrs: [
					{
						name: 'ovalMask',
						cl: 'Sprite',
						attrs: {
							img: 'ovalMask',
							start: {
								x: -50,
								y: -50
							},
							phaser: {
								width: winW + 100,
								height: winH + 100
							}
						}
					}
					]
				},
				{
					name: 'levelGUI',
					cl: 'GUIConsole',
					// cl: 'GroupCollection',
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
							}//,
							// listeners: [
							// 	Polyworks.Events.HEALTH_UPDATED
							// ]
						}
					}]
				},
				{
					name: 'levelControls',
					cl: 'ControlButtons',
					type: 'level',
					addTo: 'null',
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'pauseGUI',
					cl: 'SharedGroupCollection',
					type: 'pauseGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'completedGUI',
					cl: 'SharedGroupCollection',
					type: 'completedGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				}
				]
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
				pausable: true,
				images: [
					'ovalMask',
					'forestBackground01',
					'forestBackground02',
					'forestBackground03',
					'grass03',
					'tree01',
					'trunk01',
					'platformV',
					'platform',
					'branch02Left',
					'branch02Right',
					'branch02aLeft',
					'branch02aRight',
					'vine01Left',
					'vine01Right',
					'lollipop',
					'invisibleRect',
					'heart'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'keke',
					'caterpillar01'
				],
				attrs: [
				{
					name: 'scenery',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'background01',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01',
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
						name: 'background02',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground02',
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
						name: 'background03',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground03',
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
						name: 'background04',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01',
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
						name: 'background05',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground02',
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
						name: 'background06',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground03',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2
							},
							start: {
								x: (stageWidth * 5),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'grass01',
						cl: 'Sprite',
						attrs: {
							img: 'grass03',
							phaser: {
								width: (stageWidth * 3),
								height: (stageUnit * 2)
							},
							start: {
								x: 0,
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'grass02',
						cl: 'Sprite',
						attrs: {
							img: 'grass03',
							phaser: {
								width: (stageWidth * 3),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'trunk01',
						cl: 'Sprite',
						attrs: {
							img: 'trunk01',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 5)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 3.6),
								y: winH - (stageUnit * 5)
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
								width: stageWidth * 6,
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
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystal01Green',
							phaser: {
								width: stageUnit,
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 13),
								y: winH - (stageUnit * 3)
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
										y: winH - (stageUnit * 2.25)
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
									img: 'branch02Left',
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
									img: 'branch02Right',
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
										y: winH - (stageUnit * 12)
									},
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.4) },
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
										y: winH - (33 + (stageUnit * 0.5))
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
									img: 'branch02aLeft',
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
									img: 'branch02aRight',
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
										y: winH - (33 + (stageUnit * 0.5))
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
									img: 'branch02aLeft',
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
									img: 'branch02aRight',
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
										y: winH - (33 + (stageUnit * 0.5))
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
					name: 'foreground',
					cl: 'GroupCollection',
					addTo: 'null',
					attrs: [
					{
						name: 'ovalMask',
						cl: 'Sprite',
						attrs: {
							img: 'ovalMask',
							start: {
								x: -50,
								y: -50
							},
							phaser: {
								width: winW + 100,
								height: winH + 100
							}
						}
					}
					]
				},
				{
					name: 'levelGUI',
					// cl: 'GroupCollection',
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
					name: 'levelControls',
					cl: 'ControlButtons',
					type: 'level',
					addTo: 'null',
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'pauseGUI',
					cl: 'SharedGroupCollection',
					type: 'pauseGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'completedGUI',
					cl: 'SharedGroupCollection',
					type: 'completedGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				}
				]
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
				pausable: true,
				images: [
					'ovalMask',
					'forestBackground01',
					'forestBackground02',
					'forestBackground03',
					'grass03',
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
					'invisibleRect',
					'heart'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'menuButton',
					'mapButton',
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
						name: 'background01',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01',
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
						name: 'background02',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground02',
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
						name: 'background03',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground03',
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
						name: 'background04',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01',
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
						name: 'background05',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground02',
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
						name: 'background06',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground03',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2
							},
							start: {
								x: (stageWidth * 5),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'grass01',
						cl: 'Sprite',
						attrs: {
							img: 'grass03',
							phaser: {
								width: (stageWidth * 3),
								height: (stageUnit * 2)
							},
							start: {
								x: 0,
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'grass02',
						cl: 'Sprite',
						attrs: {
							img: 'grass03',
							phaser: {
								width: (stageWidth * 3),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'trunk01',
						cl: 'Sprite',
						attrs: {
							img: 'trunk01',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 5)
							},
							start: {
								x: (stageWidth) + (stageUnit * 2.9),
								y: winH - (stageUnit * 5)
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
								width: stageWidth * 6,
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
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystal01Green',
							phaser: {
								width: stageUnit,
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 13),
								y: winH - (stageUnit * 3)
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
										x: (stageWidth) + (stageUnit * 0.2),
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
										x: (stageWidth) + (stageUnit * 4.3),
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
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth) + (stageUnit * 7),
										y: winH - (stageUnit * 1.5) + 32
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
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth) + (stageUnit * 14),
										y: winH - (stageUnit * 1.5) + 32
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
									img: 'branch02aLeft',
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
									img: 'branch02aRight',
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
									img: 'branch02aRight',
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
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 8),
										y: winH - (stageUnit * 1.5) + 32
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
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 15),
										y: winH - (stageUnit * 1.5) + 32
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
										y: winH - (33 + (stageUnit * 0.5))
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
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 8),
										y: winH - (stageUnit * 1.5) + 32
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
									img: 'branch02aLeft',
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
									img: 'branch02aRight',
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
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4),
										y: winH - (stageUnit * 1.5) + 32
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
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 9),
										y: winH - (stageUnit * 1.5) + 32
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
										y: winH - (33 + (stageUnit * 0.5))
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
										y: winH - (33 + (stageUnit * 0.5))
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
					name: 'foreground',
					cl: 'GroupCollection',
					addTo: 'null',
					attrs: [
					{
						name: 'ovalMask',
						cl: 'Sprite',
						attrs: {
							img: 'ovalMask',
							start: {
								x: -50,
								y: -50
							},
							phaser: {
								width: winW + 100,
								height: winH + 100
							}
						}
					}
					]
				},
				{
					name: 'levelGUI',
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
					name: 'levelControls',
					cl: 'ControlButtons',
					type: 'level',
					addTo: 'null',
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'pauseGUI',
					cl: 'SharedGroupCollection',
					type: 'pauseGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'completedGUI',
					cl: 'SharedGroupCollection',
					type: 'completedGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				}
				]
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
				pausable: true,
				images: [
					'ovalMask',
					'forestBackground01',
					'forestBackground02',
					'forestBackground03',
					'grass03a',
					'grass03b',
					'grass03c',
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
					'invisibleRect',
					'heart'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
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
						name: 'background01',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01',
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
						name: 'background02',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground02',
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
						name: 'background03',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground03',
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
						name: 'background04',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01',
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
						name: 'background05',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground02',
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
						name: 'background06',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground03',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2
							},
							start: {
								x: (stageWidth * 5),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'grass01',
						cl: 'Sprite',
						attrs: {
							img: 'grass03a',
							phaser: {
								width: (stageWidth),
								height: (stageUnit * 2)
							},
							start: {
								x: 0,
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'grass02',
						cl: 'Sprite',
						attrs: {
							img: 'grass03b',
							phaser: {
								width: (stageWidth),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth),
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'grass03',
						cl: 'Sprite',
						attrs: {
							img: 'grass03c',
							phaser: {
								width: (stageWidth),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2),
								y: winH - (stageUnit * 4)
							}
						}
					},
					{
						name: 'grass04',
						cl: 'Sprite',
						attrs: {
							img: 'grass03a',
							phaser: {
								width: (stageWidth),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageUnit * 4)
							}
						}
					},
					{
						name: 'grass05',
						cl: 'Sprite',
						attrs: {
							img: 'grass03b',
							phaser: {
								width: (stageWidth),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 4),
								y: winH - (stageUnit * 6)
							}
						}
					},
					{
						name: 'grass06',
						cl: 'Sprite',
						attrs: {
							img: 'grass03c',
							phaser: {
								width: (stageWidth),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 5),
								y: winH - (stageUnit * 6)
							}
						}
					},
					{
						name: 'trunk01',
						cl: 'Sprite',
						attrs: {
							img: 'trunk01',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 5)
							},
							start: {
								x: (stageWidth) + (stageUnit * 2.9),
								y: winH - (stageUnit * 5)
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
								y: winH - ((stageHeight * 3) + (stageUnit * 2))
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
								y: winH - ((stageHeight * 3) + (stageUnit * 2))
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
								y: winH - ((stageHeight * 3) + (stageUnit * 2))
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
								y: winH - ((stageHeight * 3) + (stageUnit * 2))
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
								y: winH - ((stageHeight * 3) + (stageUnit * 2))
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
								y: winH - ((stageHeight * 3) + (stageUnit * 4))
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
						name: 'ground1',
						cl: 'Sprite',
						attrs: {
							img: 'platform',
							phaser: {
								width: stageWidth * 2,
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
					},
					{
						name: 'ground2',
						cl: 'Sprite',
						attrs: {
							img: 'platform',
							phaser: {
								width: stageWidth * 2,
								height: 32 + (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2),
								y: winH - (16 + (stageUnit * 2))
							},
							physics: {
								immovable: true
							}
						}
					},
					{
						name: 'ground3',
						cl: 'Sprite',
						attrs: {
							img: 'platform',
							phaser: {
								width: stageWidth * 2,
								height: 32 + (stageUnit * 4)
							},
							start: {
								x: (stageWidth * 4),
								y: winH - (16 + (stageUnit * 4))
							},
							physics: {
								immovable: true
							}
						}
					}
					]
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystal01Green',
							phaser: {
								width: stageUnit,
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 13),
								y: winH - (stageUnit * 3)
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
										x: (stageWidth) + (stageUnit * 0.2),
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
										x: (stageWidth) + (stageUnit * 4.3),
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
										y: winH - (stageUnit * 6.25)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'tree01-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch02Left',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth) + (stageUnit * 8),
										y: winH - (stageUnit * 8)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'tree01-branch04',
								cl: 'Sprite',
								attrs: {
									img: 'branch02Right',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth) + (stageUnit * 11.5),
										y: winH - (stageUnit * 9.5)
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
								name: 'level4-sector2-hazard1',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth) + (stageUnit * 4),
										y: winH - (stageUnit * 1.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},	
							{
								name: 'level4-sector2-hazard2',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth) + (stageUnit * 7),
										y: winH - (stageUnit * 1.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level4-sector2-hazard3',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth) + (stageUnit * 10.5),
										y: winH - (stageUnit * 1.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level4-sector2-hazard4',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth) + (stageUnit * 14),
										y: winH - (stageUnit * 1.5) + 32
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
								name: 'level4-sector2-enemy1',
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
										y: -(stageHeight * 2)
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
								name: 'level4-sector2-enemy2',
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
										y: -(stageHeight * 2)
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
							attrs:  []
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
										y: winH - (stageUnit * 9.5)
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
										x: (stageWidth * 2) + (stageUnit * 4.5),
										y: winH - (stageUnit * 11)
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
										y: winH - (stageUnit * 14)
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
										y: winH - (stageUnit * 7.5)
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
										y: winH - (stageUnit * 12.5)
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
							attrs: [
							{
								name: 'level4-sector3-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 3.5),
										y: winH - (stageUnit * 3.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},	
							{
								name: 'level4-sector3-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 8),
										y: winH - (stageUnit * 3.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level4-sector3-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 11.5),
										y: winH - (stageUnit * 3.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level4-sector3-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 15),
										y: winH - (stageUnit * 3.5) + 32
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
									phaser: {
										width: enemy02.width,
										height: enemy02.height,
										health: 6
									},
									start: {
										x: (stageWidth * 2),
										// y: winH - ((stageUnit * 4) + 32)
										y: -(stageHeight * 2)
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
										y: winH - (stageUnit * 16.5)
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
										y: winH - (stageUnit * 4.25)
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
										y: winH - (stageUnit * 6.25)
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
										y: winH - (stageUnit * 8.25)
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
										y: winH - (stageUnit * 10.25)
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
										y: winH - (stageUnit * 12)
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
									img: 'branch02aLeft',
									phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 11),
										y: winH - (stageUnit * 4)
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
									img: 'branch02aRight',
									phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 14),
										y: winH - (stageUnit * 5.75)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'tree05-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch02Left',
									phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 11),
										y: winH - (stageUnit * 7.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'tree05-branch04',
								cl: 'Sprite',
								attrs: {
									img: 'branch02Right',
									phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 14),
										y: winH - (stageUnit * 9.25)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'tree05-branch05',
								cl: 'Sprite',
								attrs: {
									img: 'branch02Left',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 10),
										y: winH - (stageUnit * 13)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'tree05-branch06',
								cl: 'Sprite',
								attrs: {
									img: 'branch02Right',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 13),
										y: winH - (stageUnit * 14.78)
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
								name: 'level4-sector4-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 3.5),
										y: winH - (stageUnit * 3.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},	
							{
								name: 'level4-sector4-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 8),
										y: winH - (stageUnit * 3.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level4-sector4-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 12.5),
										y: winH - (stageUnit * 3.5) + 32
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
								name: 'level4-sector4-enemy1',
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
										// y: 0
										y: -(stageHeight * 2)
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
								name: 'level4-sector4-enemy2',
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
										// y: 0
										y: -(stageHeight * 2)
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
										y: winH - (stageUnit * 3.5)
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
									phaser: { width: (stageUnit * 4), height: (stageUnit * 0.6) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 0.5),
										y: winH - (stageUnit * 11)
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
										x: (stageWidth * 4) + (stageUnit * 4.5),
										y: winH - (stageUnit * 13)
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
										y: winH - (stageUnit * 14.5)
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
										y: winH - (stageUnit * 16)
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
								name: 'level4-sector5-hazard1',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4),
										y: winH - (stageUnit * 5.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},	
							{
								name: 'level4-sector5-hazard1',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 4),
										y: winH - (stageUnit * 5.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},	
							{
								name: 'level4-sector5-hazard1',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 9),
										y: winH - (stageUnit * 5.5) + 32
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},	
							{
								name: 'level4-sector5-hazard1',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 1.5), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 12.5),
										y: winH - (stageUnit * 5.5) + 32
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
								name: 'level4-sector5-enemy1',
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
										// y: winH - ((stageUnit * 6) + 32)
										y: -(stageHeight * 2)
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
										y: winH - (stageUnit * 5.5)
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
								name: 'level4-sector6-enemy1',
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
										// y: winH - ((stageUnit * 6) + 32)
										y: -(stageHeight * 2)
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
					name: 'foreground',
					cl: 'GroupCollection',
					addTo: 'null',
					attrs: [
					{
						name: 'ovalMask',
						cl: 'Sprite',
						attrs: {
							img: 'ovalMask',
							start: {
								x: -50,
								y: -50
							},
							phaser: {
								width: winW + 100,
								height: winH + 100
							}
						}
					}
					]
				},
				{
					name: 'levelGUI',
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
					name: 'levelControls',
					cl: 'ControlButtons',
					type: 'level',
					addTo: 'null',
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'pauseGUI',
					cl: 'SharedGroupCollection',
					type: 'pauseGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'completedGUI',
					cl: 'SharedGroupCollection',
					type: 'completedGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				}
				]
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
				pausable: true,
				images: [
					// 'sky',
					'mountainBackground01a',
					'mountainBackground01b',
					'mountainBackground01c',
					'mountainBackground01d',
					'mountainBackground01e',
					'mountainBackground01f',
					'tree01',
					'platformV',
					'platform',
					'rockPlatform01',
					'invisibleRect',
					'heart'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'menuButton',
					'mapButton',
					'keke'
				],
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
					// 			width: winW,
					// 			height: winH,
					// 			fixedToCamera: true
					// 		}
					// 	}
					// },
					{
						name: 'mountainBackground01a',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackground01a',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
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
								height: stageHeight * 2,
								alpha: 1
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
								height: stageHeight * 2,
								alpha: 1
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
								height: stageHeight * 2,
								alpha: 1
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
								height: stageHeight * 2,
								alpha: 1
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
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 5),
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
								x: (stageUnit * 1),
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
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystal01Green',
							phaser: {
								width: stageUnit,
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 13),
								y: winH - (stageUnit * 3)
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
								name: 'plat1',
								cl: 'Sprite',
								attrs: {
									img: 'branch02aLeft',
									start: {
										x: (stageUnit * 8),
										y: winH - (stageUnit * 2.25)
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
										x: (stageUnit * 11),
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
										x: (stageUnit * 8),
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
										x: (stageUnit * 11),
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
										x: (stageUnit * 8),
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
										x: (stageUnit * 11),
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
										x: (stageUnit * 3),
										y: winH - (stageUnit * 11.5)
									},
									phaser: { width: (stageUnit * 7), height: (stageUnit * 0.5) },
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
										x: (stageUnit * 10.5),
										y: winH - (stageUnit * 13)
									},
									phaser: { width: (stageUnit * 7), height: (stageUnit * 0.5) },
									physics: {
										immovable: true,
										allowGravity: false
									}
								}
							},
							{
								name: 'rockPlatform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
									img: 'invisibleRect',
									phaser: {
										width: stageWidth + stageUnit,
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
								name: 'rockPlatform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
									img: 'rockPlatform01',
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
									img: 'rockPlatform01',
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
									img: 'invisibleRect',
									phaser: {
										width: stageWidth + (stageUnit * 2),
										height: 32
									},
									start: {
										x: stageWidth - (stageUnit),
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
									img: 'rockPlatform01',
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
									img: 'rockPlatform01',
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
									img: 'rockPlatform01',
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
									img: 'rockPlatform01',
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
									img: 'invisibleRect',
									phaser: {
										width: stageWidth + (stageUnit * 2),
										height: 32
									},
									start: {
										x: (stageWidth * 2) - (stageUnit),
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
									img: 'rockPlatform01',
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
									img: 'rockPlatform01',
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
								name: 'rockPlatform010',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
								name: 'rockPlatform011',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
									img: 'invisibleRect',
									phaser: {
										width: stageWidth + (stageUnit * 2),
										height: 32
									},
									start: {
										x: (stageWidth * 3) - (stageUnit),
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
								name: 'rockPlatform012',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
								name: 'rockPlatform013',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
								name: 'rockPlatform014',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
								name: 'rockPlatform015',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
									img: 'invisibleRect',
									phaser: {
										width: stageWidth + (stageUnit * 2),
										height: 32
									},
									start: {
										x: (stageWidth * 4) - (stageUnit),
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
								name: 'rockPlatform016',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
								name: 'rockPlatform017',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
								name: 'rockPlatform018',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
								name: 'rockPlatform019',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
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
									img: 'invisibleRect',
									phaser: {
										width: stageWidth + (stageUnit * 2),
										height: 32
									},
									start: {
										x: (stageWidth * 5) - (stageUnit),
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
							cl: 'PhysicalGroupCollection'
						}
						]
					}
					]
				},
				{
					name: 'foreground',
					cl: 'GroupCollection',
					addTo: 'null',
					attrs: [
					{
						name: 'ovalMask',
						cl: 'Sprite',
						attrs: {
							img: 'ovalMask',
							start: {
								x: -50,
								y: -50
							},
							phaser: {
								width: winW + 100,
								height: winH + 100
							}
						}
					}
					]
				},
				{
					name: 'foreground',
					cl: 'GroupCollection',
					addTo: 'null',
					attrs: [
					{
						name: 'ovalMask',
						cl: 'Sprite',
						attrs: {
							img: 'ovalMask',
							start: {
								x: -50,
								y: -50
							},
							phaser: {
								width: winW + 100,
								height: winH + 100
							}
						}
					}
					]
				},
				{
					name: 'levelGUI',
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
					name: 'levelControls',
					cl: 'ControlButtons',
					type: 'level',
					addTo: 'null',
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'pauseGUI',
					cl: 'SharedGroupCollection',
					type: 'pauseGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'completedGUI',
					cl: 'SharedGroupCollection',
					type: 'completedGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				}
				]
			},

			// level 6
			{
				name: 'level6',
				cl: 'LevelState',
				world: {
					x: 0,
					y: -(stageHeight * 8) + winH,
					width: stageWidth * 3,
					height: stageHeight * 8
				},
				clearWorld: true,
				clearCache: false,
				bounds: {
					start: 0,
					end: (stageWidth * 3) - (stageUnit * 1)
				},
				pausable: true,
				images: [
					'sky',
					'mountainBackground05a',
					'mountainBackground05b',
					'mountainBackground05c',
					'mountainBackground05d',
					'mountainBackground05e',
					'mountainBackground05f',
					'mountainBackground05h',
					'mountainBackground05i',
					'mountainBackground05k',
					'mountainBackground05l',
					'tree01',
					'platformV',
					'rockPlatform01',
					'rockPlatform01',
					'invisibleRect',
					'heart',
					'snowFlake01'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'menuButton',
					'mapButton',
					'keke'
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
						name: 'mountainBackground01a',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackground05a',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
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
							img: 'mountainBackground05b',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
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
							img: 'mountainBackground05c',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
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
							img: 'mountainBackground05d',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH - (stageHeight * 4)
							}
						}
					},
					{
						name: 'mountainBackground01e',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackground05e',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth),
								y: winH - (stageHeight * 4)
							}
						}
					},
					{
						name: 'mountainBackground01f',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackground05f',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH - (stageHeight * 4)
							}
						}
					},
					{
						name: 'mountainBackground01e',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackground05h',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth),
								y: winH - (stageHeight * 6)
							}
						}
					},
					{
						name: 'mountainBackground01f',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackground05i',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH - (stageHeight * 6)
							}
						}
					},
					{
						name: 'mountainBackground01e',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackground05k',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth),
								y: winH - (stageHeight * 8)
							}
						}
					},
					{
						name: 'mountainBackground01f',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackground05l',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH - (stageHeight * 8)
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
								width: stageWidth/2,
								height: (stageUnit)
							},
							start: {
								x: 0,
								y: winH - (stageUnit * 0.0)
							},
							physics: {
								immovable: true
							}
						}
					}
					]
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystal01Green',
							phaser: {
								width: stageUnit,
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 13),
								y: winH - (stageUnit * 3)
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
							// sector1
							{
								name: 'ground0',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 8),
										y: winH - (stageUnit * 1.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 12),
										y: winH - (stageUnit * 3.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 9),
										y: winH - (stageUnit * 4.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 5),
										y: winH - (stageUnit * 6.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 9),
										y: winH - (stageUnit * 8)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 2),
										y: winH - (stageUnit * 7.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 6),
										y: winH - (stageUnit * 9.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 9),
										y: winH - (stageUnit * 10.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 13),
										y: winH - (stageUnit * 12.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 10),
										y: winH - (stageUnit * 13.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 12),
										y: winH - (stageUnit * 15.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 9),
										y: winH - (stageUnit * 16.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 12),
										y: winH - (stageUnit * 18.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 10),
										y: winH - (stageUnit * 20.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 13.5),
										y: winH - (stageUnit * 22.0)
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
									img: 'invisibleRect',
									phaser: {
										width: stageWidth + stageUnit,
										height: 32
									},
									start: {
										x: (stageUnit * 7),
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
							// start sector 2 terrain
							{
								name: 'ground0',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 1),
										y: winH - (stageUnit * 24.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 5),
										y: winH - (stageUnit * 25.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 9),
										y: winH - (stageUnit * 27.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 13),
										y: winH - (stageUnit * 28.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 10),
										y: winH - (stageUnit * 30.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 6),
										y: winH - (stageUnit * 32.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 8),
										y: winH - (stageUnit * 34.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 5),
										y: winH - (stageUnit * 35.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 9),
										y: winH - (stageUnit * 37.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 6),
										y: winH - (stageUnit * 38.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 10),
										y: winH - (stageUnit * 40.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 13),
										y: winH - (stageUnit * 41.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 9),
										y: winH - (stageUnit * 43.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 5),
										y: winH - (stageUnit * 44.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 8),
										y: winH - (stageUnit * 46.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 10),
										y: winH - (stageUnit * 48.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 12),
										y: winH - (stageUnit * 48.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 9),
										y: winH - (stageUnit * 50.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 13),
										y: winH - (stageUnit * 51.5)
									},
									physics: {
										immovable: true
									}
								}
							}

							// end sector 2 terrain

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
									img: 'invisibleRect',
									phaser: {
										width: stageWidth + (stageUnit * 2),
										height: 32
									},
									start: {
										x: stageWidth - (stageUnit),
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
							// start sector 3 terrain

							{
								name: 'ground0',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit),
										y: winH - (stageUnit * 39.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 4),
										y: winH - (stageUnit * 41.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 7),
										y: winH - (stageUnit * 42.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 5),
										y: winH - (stageUnit * 44.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 9),
										y: winH - (stageUnit * 45.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 6),
										y: winH - (stageUnit * 47.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit),
										y: winH - (stageUnit * 48.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 4),
										y: winH - (stageUnit * 50.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 7),
										y: winH - (stageUnit * 51.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 9),
										y: winH - (stageUnit * 53.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 5),
										y: winH - (stageUnit * 54.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 2),
										y: winH - (stageUnit * 56.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 6),
										y: winH - (stageUnit * 57.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 3),
										y: winH - (stageUnit * 59.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 7),
										y: winH - (stageUnit * 60.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 11),
										y: winH - (stageUnit * 62.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 8),
										y: winH - (stageUnit * 63.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 4),
										y: winH - (stageUnit * 65.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 6),
										y: winH - (stageUnit * 66.5)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 8),
										y: winH - (stageUnit * 68.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 11),
										y: winH - (stageUnit * 69.0)
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
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 15),
										y: winH - (stageUnit * 69.0)
									},
									physics: {
										immovable: true
									}
								}
							}


							// end sector 3 terrain

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
									img: 'invisibleRect',
									phaser: {
										width: (stageWidth) + (stageUnit * 2),
										height: 32
									},
									start: {
										x: (stageWidth * 2) - (stageUnit),
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
					name: 'foreground',
					cl: 'GroupCollection',
					addTo: 'null',
					attrs: [
					{
						name: 'ovalMask',
						cl: 'Sprite',
						attrs: {
							img: 'ovalMask',
							start: {
								x: -50,
								y: -50
							},
							phaser: {
								width: winW + 100,
								height: winH + 100
							}
						}
					}
					]
				},
				{
					name: 'levelGUI',
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
					name: 'levelControls',
					cl: 'ControlButtons',
					type: 'level',
					addTo: 'null',
					attrs: {
						start: {
							x: (stageUnit * 4),
							y: 0
						}
					}
				},
				{
					name: 'pauseGUI',
					cl: 'SharedGroupCollection',
					type: 'pauseGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: (stageUnit * 4),
							y: 0
						}
					}
				},
				{
					name: 'completedGUI',
					cl: 'SharedGroupCollection',
					type: 'completedGUI',
					addTo: 'null',
					visible: false,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				}
				]
			},

			// map
			{
				name: 'map',
				cl: 'MapState',
				world: {
					x: 0,
					y: 0,
					width: winW,
					height: winH
				},
				clearWorld: true,
				clearCache: false,
				images: [
					'nextButton',
					'level1Icon',
					'level2Icon',
					'level3Icon',
					'level4Icon',
					'level5Icon',
					'level6Icon',
					'invisibleRect',
					'chapter1Title',
					'chapter2Title',
					'levelSelectedIcon',
					'levelLockedIcon',
					'levelClearedIcon',
					'levelLockedIcon',
					'pageLeftArrow',
					'pageRightArrow'
				],
				sprites: [
					'menuButton'
				],
				initialPage: 0,
				pages: [
				{
					name: 'page1',
					cl: 'MapPage',
					levels: [
						'level1',
						'level2',
						'level3',
						'level4'
					],
					title: {
						name: 'pageTitle',
						cl: 'Sprite',
						attrs: {
							img: 'chapter1Title',
							phaser: {
								width: stageWidth
							},
							start: {
								x: 0,
								y: (stageUnit * 2.5)
							}
						}
					}
				},
				{
					name: 'page2',
					cl: 'MapPage',
					levels: [
						'level5',
						'level6'
					],
					title: {
						name: 'pageTitle',
						cl: 'Sprite',
						attrs: {
							img: 'chapter2Title',
							phaser: {
								width: stageWidth
							},
							start: {
								x: 0,
								y: (stageUnit * 2.5)
							}
						}
					}
				}
				],
				attrs: [
				{
					name: 'mapBackground',
					cl: 'GroupCollection',
					// addTo: 'stateGroup',
					attrs: [
					// {
					// 	name: 'whiteBg',
					// 	cl: 'Sprite',
					// 	attrs: {
					// 		img: 'whiteRect',
					// 		phaser: {
					// 			width: winW,
					// 			height: winH
					// 		},
					// 		start: {
					// 			x: 0,
					// 			y: 0
					// 		}
					// 	}
					// },
					{
						name: 'gameTitle',
						cl: 'Sprite',
						attrs: {
							img: 'gameTitle',
							phaser: {
								width: stageUnit * 6,
								height: stageUnit * 4
							},
							start: {
								x: (winW/2 - (stageUnit * 3)),
								y: 0
							}
						}
					}
					]
				},
				{
					name: 'mapControls',
					cl: 'ControlButtons',
					type: 'map',
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				}
				]
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
					'blackRect',
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
							img: 'blackRect',
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
							y: stageUnit,
							defaultContent: 'Level ~{currentLevel}~ Completed',
							style: { 
								font: '30px Arial', 
								fill: '#ffffff',
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
								fill: '#ffffff',
								align: 'center'
							}
						}
					}
					]
				},
				{
					name: 'menuControls',
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
					'blackRect',
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
							img: 'blackRect',
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
							y: stageUnit,
							defaultContent: 'All Completed',
							style: { 
								font: '30px Arial', 
								fill: '#ffffff',
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
								fill: '#ffffff',
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
					'blackRect',
					'menuButton',
					'retryButton',
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
							img: 'blackRect',
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
							y: stageUnit,
							defaultContent: 'Game Over',
							style: { 
								font: '30px Arial', 
								fill: '#ffffff',
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
						// x: winW/2 - ((stageUnit * 3) * 0.84)/2,
						// y: winH - 300
						// y: winH - (226)
						x: winW/2,
						y: winH - (stageUnit * 2.3)
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
					// followStyle: Phaser.Camera.FOLLOW_PLATFORMER,
					followStyle: Phaser.Camera.FOLLOW_TOPDOWN,
					// followStyle: Phaser.Camera.FOLLOW_TOPDOWN_TIGHT,
					// followStyle: Phaser.Camera.FOLLOW_LOCKON,
					speed: {
						x: (stageUnit * 4),
						y: (stageUnit * 10.1)
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
				y: stageUnit/2.5
			}
		};

		return c;

	};
	
	return Config;
})();