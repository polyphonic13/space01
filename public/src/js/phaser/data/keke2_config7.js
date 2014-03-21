Polyworks.Config = (function() {
	function Config() {}
	
	Config.prototype.init = function(stage) {
		var winW = stage.winW; 
		var winH = stage.winH;
		var stageWidth = stage.width;
		var stageHeight = stage.height;
		var stageUnit = stage.unit;

		var enemy01 = {
			width: (stageUnit * 1.5),
			height: stageUnit * 0.5
		};

		var enemy02 = {
			width: (stageUnit * 2),
			height: stageUnit * 0.67
		};

		var fontSizes = {
			xs: (stageUnit * 0.5),
			sm: (stageUnit * 0.8),
			md: (stageUnit),
			lg: (stageUnit * 1.5),
			xl: (stageUnit * 2)
		};

		var c = {
			// IMAGES
			images: {
				// gameTitle: 'images/keke_title.png',
				gameTitle: 'images/keke_grey_expanse_title.png',
				greyExpanseTitle: 'images/grey_expanse_title.png',

				blackRect: 'images/black_rect32x32.png',
				greyRect: 'images/grey_rect32x32.png',
				whiteRect: 'images/white_rect32x32.png',

				kekeSmall: 'images/map/new_keke4a_sm.png',
				pageLeftArrow: 'images/map/page_left_arrow.png',
				pageRightArrow: 'images/map/page_right_arrow.png',
				mapForest: 'images/map/map04_forest.gif',
				mapMountains: 'images/map/map04_mountains.gif',

				sky: 'images/backgrounds/night_sky.jpg',

				forestBackground02a: 'images/backgrounds/pencil_forest02a.gif',
				forestBackground02b: 'images/backgrounds/pencil_forest02b.gif',
				forestBackground02c: 'images/backgrounds/pencil_forest02c.gif',
				forestBackground02d: 'images/backgrounds/pencil_forest02d.gif',
				forestBackground02e: 'images/backgrounds/pencil_forest02e.gif',
				forestBackground02f: 'images/backgrounds/pencil_forest02f.gif',

				forestBackground01a: 'images/backgrounds/pencil_forest01a.gif',
				forestBackground01b: 'images/backgrounds/pencil_forest01b.gif',
				forestBackground01c: 'images/backgrounds/pencil_forest01c.gif',

				riverBackground01a: 'images/backgrounds/pencil_river01a.gif',
				riverBackground01b: 'images/backgrounds/pencil_river01b.gif',
				riverBackground01c: 'images/backgrounds/pencil_river01c.gif',
				riverBackground01d: 'images/backgrounds/pencil_river01d.gif',
				riverBackground01e: 'images/backgrounds/pencil_river01e.gif',
				riverBackground01f: 'images/backgrounds/pencil_river01f.gif',

				mountainBackground05a: 'images/backgrounds/pencil_mountain05a.png',
				mountainBackground05b: 'images/backgrounds/pencil_mountain05b.png',
				mountainBackground05c: 'images/backgrounds/pencil_mountain05c.png',
				mountainBackground05d: 'images/backgrounds/pencil_mountain05d.png',
				mountainBackground05e: 'images/backgrounds/pencil_mountain05e.png',
				mountainBackground05f: 'images/backgrounds/pencil_mountain05f.png',
				mountainBackground05h: 'images/backgrounds/pencil_mountain05h.png',
				mountainBackground05i: 'images/backgrounds/pencil_mountain05i.png',
				mountainBackground05k: 'images/backgrounds/pencil_mountain05k.png',
				mountainBackground05l: 'images/backgrounds/pencil_mountain05l.png',

				platform: 'images/scenery/platform.png',
				platformGrey: 'images/scenery/platform_grey.png',
				platformRed: 'images/scenery/platform_red.png',
				platformV: 'images/scenery/platform_v.png',

				rockPlatform01: 'images/scenery/rock_platform01.png',
				rockPlatform02: 'images/scenery/rock_platform02.png',
				rockPlatform03: 'images/scenery/rock_platform03.png',
				rockPlatform04: 'images/scenery/rock_platform04.png',

				grass03: 'images/scenery/grass03.png',
				grass03a: 'images/scenery/grass03a.png',
				grass03b: 'images/scenery/grass03b.png',
				grass03c: 'images/scenery/grass03c.png',
				grass03ci: 'images/scenery/grass03ci.png',
				grassClump01: 'images/scenery/grass_clump01.png',

				tree01: 'images/scenery/tree04a.png',
				tree02: 'images/scenery/tree04a.png',
				tree03: 'images/scenery/tree04a.png',
				tree04: 'images/scenery/tree04a.png',

				river01: 'images/scenery/river_water01.png',

				branch02Left: 'images/scenery/branch03_left.png',
				branch02Right: 'images/scenery/branch03_right.png',
				branch02aLeft: 'images/scenery/branch03a_left.png',
				branch02aRight: 'images/scenery/branch03a_right.png',
				vine01Left: 'images/scenery/vine01a_left.png',
				vine01Right: 'images/scenery/vine01a_right.png',
				trunk01: 'images/scenery/trunk01.png',
				thorns01: 'images/scenery/thorns02.png',

				// requirements
				crystals02Grey: 'images/crystals02a_grey.png',
				crystals02Blue: 'images/crystals02a_blue.png',
				crystals02Green: 'images/crystals02a_green.png',
				crystals02Garnet: 'images/crystals02a_garnet.png',
				crystals02Purple: 'images/crystals02a_purple.png',
				crystals02Aqua: 'images/crystals02a_aqua.png',
				crystals02Orange: 'images/crystals02a_orange.png',
				crystals02Pink: 'images/crystals02a_pink.png',
				crystals02Teal: 'images/crystals02a_teal.png',
				crystals02Yellow: 'images/crystals02a_yellow.png',
				crystals02Red: 'images/crystals02a_red.png',

				// bonuses
				lollipop: 'images/lollipop.png',

				// buttons
				startButton: 'images/controls/start_button.png',
				nextButton: 'images/controls/next_button.png',

				// misc
				heart: 'images/heart.png',
				invisibleRect: 'images/invisible.png',
				ovalMask: 'images/oval_mask2.png'

			},
			// SPRITES
			sprites: {
				// map
				mapLocationMarker: 
				{
					url: 'images/map/map_location_marker.png',
					width: 128,
					height: 128,
					frames: 4
				},
				// map
				crystalsWheel: 
				{
					url: 'images/map/crystals_wheel_sprite.png',
					width: 128,
					height: 128,
					frames: 12
				},
				// buttons
				leftButton: 
				{
					url: 'images/controls/arrow_left_2x8.png',
					width: 75,
					height: 400,
					// url: 'images/controls/arrow_left_8x4.png',
					// width: 400,
					// height: 200,
					// url: 'images/controls/arrow_left3.png',
					// width: 50,
					// height: 50,
					// url: 'images/arrow_left2_sm.png',
					// width: 50,
					// height: 171,
					frames: 2
				},
				rightButton: 
				{
					url: 'images/controls/arrow_right_4x8.png',
					width: 200, 
					height: 400,
					// url: 'images/controls/arrow_right3.png',
					// width: 50,
					// height: 50,
					// url: 'images/arrow_right2_sm.png',
					// width: 50,
					// height: 171,
					frames: 2
				},
				upButton: 
				{
					url: 'images/controls/arrow_up_4x8.png',
					width: 200,
					height: 400,
					// url: 'images/controls/arrow_up3.png',
					// width: 50,
					// height: 50,
					// url: 'images/arrow_up2_sm.png',
					// width: 50,
					// height: 171,
					frames: 2
				},
				pauseButton: 
				{
					url: 'images/controls/pause_button2.png',
					width: 50,
					height: 50,
					frames: 2
				},
				playButton: 
				{
					url: 'images/controls/play_button.png',
					width: 100,
					height: 100,
					frames: 2
				},
				playButtonSmall: 
				{
					url: 'images/controls/play_button_sm.png',
					width: 50,
					height: 50,
					frames: 2
				},
				menuButton: 
				{
					url: 'images/controls/menu_button2.png',
					width: 50,
					height: 50,
					frames: 2
				},
				mapButton: 
				{
					url: 'images/controls/map_button.png',
					width: 50,
					height: 50,
					frames: 2
				},
				restartButton: 
				{
					url: 'images/controls/restart_button.png',
					width: 100,
					height: 100,
					frames: 2
				},
				quitButton: 
				{
					url: 'images/controls/quit_button.png',
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
								x: winW/2 - 50,
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
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 0.5),
								y: (winH/2) - (stageUnit * 3)
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
					map: [
					{
						name: 'menuBtn',
						cl: 'InputButton',
						attrs: {
							img: 'menuButton',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 0.5),
								y: (winH/2) - (stageUnit * 3)
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
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 0.5),
								y: (winH/2) - (stageUnit * 3)
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
							img: 'restartButton',
							start: {
								x: winW/2 - 50,
								y: winH/2
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
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 0.5),
								y: (winH/2) - (stageUnit * 3)
							},
							frames: [0, 0, 1],
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
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 8)
							},
							start: {
								x: (stageUnit * 0.5),
								y: (winH/2) - (stageHeight/2) + (stageUnit * 0.5)
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
							phaser: {
								width: (stageUnit * 4),
								height: (stageUnit * 8)
							},
							start: {
								x: (stageUnit * 2.5),
								y: (winH/2) - (stageHeight/2) + (stageUnit * 0.5)
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
							phaser: { 
								width: (stageUnit * 4),
								height: (stageUnit * 8)
							},
							start: {
								x: winW - (stageUnit * 4.5),
								y: (winH/2) - (stageHeight/2) + (stageUnit * 0.5)
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
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 0.5),
								y: (winH/2) - (stageUnit * 3)
							},
							frames: [0, 0, 1],
							events: {
								released: {
 									type: Polyworks.Events.PAUSE_STATE
								}
							}
						}
					}
					]
				}
			},
			// SHARED GROUPS
			sharedGroups: {
				levelGUI: [
				{
					name: 'heartIcon',
					cl: 'Sprite',
					attrs: {
						img: 'heart',
						phaser: {
							width: (stageUnit * 0.75),
							height: (stageUnit * 0.75)
						},
						start: {
							x: winW - (stageUnit * 1.2),
							y: (stageUnit * 0.3)
						}
					}
				},
				{
					name: 'health',
					cl: 'Text',
					attrs: {
						x: winW - (stageUnit * 2.1),
						y: 0,
						defaultContent: '~{health}~',
						style: { 
							font: fontSizes.sm + 'px "Sue Ellen Francisco"',
							align: 'right', 
							fill: '#ffffff' 
						},
						listeners: [
							Polyworks.Events.HEALTH_UPDATED
						]
					}
				},
				{
					name: 'requirementPlaceHolder',
					cl: 'RequirementPlaceHolder',
					attrs: {
						img: 'crystals02Grey',
						phaser: {
							width: (stageUnit * 0.75),
							height: (stageUnit * 1.5),
							alpha: 0.85
						},
						start: {
							x: winW - (stageUnit * 1.2),
							y: (stageUnit * 1.3)
						}
					}
				}
				],
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
					name: 'title',
					cl: 'Text',
					attrs: {
						centerX: true,
						centerY: false,
						x: 0,
						y: (stageUnit * 0.5),
						defaultContent: 'Paused',
						style: { 
							font: 'bold ' + fontSizes.lg + 'px "Waiting for the Sunrise"', 
							fill: '#000000',
							align: 'center'
						}
					}
				},
				{
					name: 'playButtonSmall',
					cl: 'InputButton',
					attrs: {
						img: 'playButtonSmall',
						phaser: {
							width: (stageUnit * 1.5),
							height: (stageUnit * 1.5)
						},
						start: {
							x: (stageUnit * 0.5),
							y: (winH/2) - (stageUnit * 3)
						},
						frames: [0, 0, 1],
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
						phaser: {
							width: (stageUnit * 1.5),
							height: (stageUnit * 1.5)
						},
						start: {
							x: (stageUnit * 0.5),
							y: (winH/2) - (stageUnit * 1.25)
						},
						frames: [0, 0, 1],
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
						phaser: {
							width: (stageUnit * 1.5),
							height: (stageUnit * 1.5)
						},
						start: {
							x: (stageUnit * 0.5),
							y: (winH/2) + (stageUnit * 0.5)
						},
						frames: [0, 0, 1],
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
						y: (stageUnit * 0.5),
						defaultContent: 'Level ~{currentLevel}~ Completed',
						style: { 
							font: 'bold ' + fontSizes.lg + 'px "Waiting for the Sunrise"', 
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
						y: (stageUnit * 2.5),
						style: { 
							font: 'bold ' + fontSizes.md + 'px "Waiting for the Sunrise"', 
							fill: '#000000',
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
						img: 'playButton',
						start: {
							x: winW/2 - 50,
							y: winH/2
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
						phaser: {
							width: (stageUnit * 1.5),
							height: (stageUnit * 1.5)
						},
						start: {
							x: (stageUnit * 0.5),
							y: (winH/2) - (stageUnit * 1.25)
						},
						frames: [0, 0, 1],
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
						phaser: {
							width: (stageUnit * 1.5),
							height: (stageUnit * 1.5)
						},
						start: {
							x: (stageUnit * 0.5),
							y: (winH/2) + (stageUnit * 0.5)
						},
						frames: [0, 0, 1],
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
				backgroundColor: '#ffffff',
				images: [
					'blackRect',
					'greyRect',
					'whiteRect',
					'gameTitle',
					'greyExpanseTitle',
					'nextButton',
					'invisibleRect',
					'crystals02Grey',
					'crystals02Blue',
					'crystals02Green',
					'crystals02Garnet',
					'crystals02Purple',
					'crystals02Aqua',
					'crystals02Orange',
					'crystals02Pink',
					'crystals02Teal',
					'crystals02Yellow',
					'crystals02Red',
					'pageLeftArrow',
					'pageRightArrow',
					'startButton'
				],
				sprites: [
					'keke',
					'mapLocationMarker',
					'pauseButton',
					'menuButton',
					'mapButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'quitButton'
				],
				attrs: [
				{
					name: 'menuGroup',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'gameTitle',
						cl: 'Sprite',
						attrs: {
							img: 'gameTitle',
							phaser: {
								// width: winW
								width: stageUnit * 6,
								height: stageUnit * 6
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
				backgroundColor: '#ffffff',
				images: [
					'kekeSmall',
					'nextButton',
					'invisibleRect',
					'pageLeftArrow',
					'pageRightArrow',
					'mapForest',
					'mapMountains'
				],
				sprites: [
					'crystalsWheel',
					'mapLocationMarker',
					'menuButton'
				],
				pages: [
				{
					name: 'page1',
					cl: 'MapPage',
					levels: [
						'level01',
						'level02',
						'level03',
						'level04',
						'level05'
					],
					attrs: [
					{
						name: 'background',
						cl: 'Sprite',
						attrs: {
							img: 'mapForest',
							phaser: {
								width: (stageWidth * 0.85),
								height: (stageHeight * 0.85),
								alpha: 0.5
							},
							start: {
								x: (winW/2) - ((stageWidth * 0.85)/2),
								y: (winH/2) - ((stageHeight * 0.75)/2)
							}
						}
					},
					{
						name: 'level01-mapMarker',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarker',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 1)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 2.5),
								y: (winH/2) + (stageUnit * 1.2)
							}
						}
					},
					{
						name: 'level02-mapMarker',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarker',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 1)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 4.6),
								y: (winH/2) + (stageUnit * 0.4) 
							}
						}
					},
					{
						name: 'level03-mapMarker',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarker',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 1)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 8),
								y: (winH/2) + (stageUnit * 0.5) 
							}
						}
					},
					{
						name: 'level04-mapMarker',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarker',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 1)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 9.9),
								y: (winH/2) + (stageUnit * 1.2) 
							}
						}
					},
					{
						name: 'level05-mapMarker',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarker',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 1)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 12.1),
								y: (winH/2) + (stageUnit * 0.7) 
							}
						}
					}
					]
				},
				{
					name: 'page2',
					cl: 'MapPage',
					levels: [
						'level06',
						'level07',
						'level08',
						'level09',
						'level10'
					],
					attrs: [
					{
						name: 'background',
						cl: 'Sprite',
						attrs: {
							img: 'mapMountains',
							phaser: {
								width: (stageWidth * 0.85),
								height: (stageHeight * 0.85),
								alpha: 0.5
							},
							start: {
								x: (winW/2) - ((stageWidth * 0.85)/2),
								y: (winH/2) - ((stageHeight * 0.75)/2)
							}
						}
					},
					{
						name: 'level06-mapMarker',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarker',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 1)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 1.7),
								y: (winH/2) + (stageUnit * 0.6)
							}
						}
					},
					{
						name: 'level07-mapMarker',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarker',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 1)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 4.1),
								y: (winH/2) + (stageUnit * 0.6) 
							}
						}
					},
					{
						name: 'level08-mapMarker',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarker',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 1)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 7),
								y: (winH/2) - (stageUnit * 0.5) 
							}
						}
					},
					{
						name: 'level09-mapMarker',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarker',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 1)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 8.3),
								y: (winH/2) + (stageUnit * 0.3) 
							}
						}
					},
					{
						name: 'level10-mapMarker',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarker',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 1)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 10.3),
								y: (winH/2) + (stageUnit * 1.4) 
							}
						}
					}
					]
				}
				],
				attrs: [
				{
					name: 'mapBackground',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'mapTitle',
						cl: 'Sprite',
						attrs: {
							img: 'greyExpanseTitle',
							phaser: {
								width: (stageUnit * 12),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (winW/2 - (stageUnit * 6)),
								y: (stageUnit * 0.1)
							}
						}
					},
					{
						name: 'kekeIcon',
						cl: 'KekeIcon',
						positions: {
							level01: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 2.5),
								y: (winH/2) + (stageUnit * 0.4)
							},
							level02: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 4.6),
								y: (winH/2) - (stageUnit * 0.4)
							},
							level03: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 8),
								y: (winH/2) - (stageUnit * 0.3)
							},
							level04: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 9.9),
								y: (winH/2) + (stageUnit * 0.4)
							},
							level05: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 12.1),
								y: (winH/2) - (stageUnit * 0.1)
							},
							level06: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 1.7),
								y: (winH/2) - (stageUnit * 0.1)
							},
							level07: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 4.1),
								y: (winH/2) - (stageUnit * 0.2)
							},
							level08: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 7),
								y: (winH/2) - (stageUnit * 1.3)
							},
							level09: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 8.3),
								y: (winH/2) - (stageUnit * 0.5)
							},
							level10: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 2.5),
								y: (winH/2) + (stageUnit * 0.4)
							}
						},
						attrs: {
							img: 'kekeSmall',
							phaser: {
								width: (stageUnit),
								height: (stageUnit * 1.17)
							}
						}
					},
					{
						name: 'crystalsWheel',
						cl: 'CrystalsWheel',
						attrs: {
							img: 'crystalsWheel',
							phaser: {
								width: (stageUnit * 1.25),
								height: (stageUnit * 1.25)
							},
							start: {
								x: (winW) - (stageUnit * 2.75),
								// y: (winH) - (stageUnit * 1.75)
								y: (winW/2 - stageWidth/2) + (stageWidth - (stageUnit * 2))
							}
						}
					},
					{
						name: 'crystalsTitle',
						cl: 'Text',
						attrs: {
							centerX: true,
							centerY: false,
							x: 0,
							y: winH - (stageUnit * 1.5),
							defaultContent: 'collect all of the color shards to restore the land',
							style: { 
								font: fontSizes.xs + 'px "Sue Ellen Francisco"',
								align: 'center', 
								fill: '#000000' 
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
			// level 1
			{
				name: 'level01',
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
				backgroundColor: '#000000',
				images: [
					'ovalMask',
					'forestBackground02a',
					'forestBackground02b',
					'forestBackground02c',
					'forestBackground02d',
					'forestBackground02e',
					'forestBackground02f',
					'grass03',
					'tree01',
					'platformV',
					'platform',
					'platformRed',
					'branch02Left',
					'branch02Right',
					'branch02aLeft',
					'branch02aRight',
					'crystals02Blue',
					'crystals02Grey',
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
					// addTo: 'null',
					attrs: [
					{
						name: 'background01',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground02a',
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
							img: 'forestBackground02b',
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
							img: 'forestBackground02c',
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
							img: 'forestBackground02d',
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
							img: 'forestBackground02e',
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
							img: 'forestBackground02f',
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
								name: 'level01-sector2-enemy1',
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
										y: winH - (stageUnit * 11.75)
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
								name: 'level01-sector4-enemy1',
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
								name: 'level01-sector4-bonus1',
								cl: 'Bonus',
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
								name: 'level01-sector5-enemy1',
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
								name: 'level01-sector6-enemy1',
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
								name: 'level01-sector6-bonus1',
								cl: 'Bonus',
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
					name: 'levelGUI',
					cl: 'SharedGroupCollection',
					type: 'levelGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Blue',
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 4) + (stageUnit * 2),
								y: winH - (stageUnit * 13)
							}
						}
					}
					]
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
				name: 'level02',
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
				backgroundColor: '#000000',
				images: [
					'ovalMask',
					'forestBackground01a',
					'forestBackground01b',
					'forestBackground01c',
					'grass03',
					'tree01',
					'platformV',
					'platform',
					'platformRed',
					'branch02Left',
					'branch02Right',
					'branch02aLeft',
					'branch02aRight',
					'crystals02Blue',
					'crystals02Grey',
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
					// addTo: 'null',
					attrs: [
					{
						name: 'background01',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01a',
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
							img: 'forestBackground01b',
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
							img: 'forestBackground01c',
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
							img: 'forestBackground01a',
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
							img: 'forestBackground01b',
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
							img: 'forestBackground01c',
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
								name: 'level02-sector2-enemy1',
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
										y: winH - (stageUnit * 11.75)
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
								name: 'level02-sector4-enemy1',
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
								name: 'level02-sector4-bonus1',
								cl: 'Bonus',
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
								name: 'level02-sector5-enemy1',
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
								name: 'level02-sector5-enemy2',
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
							attrs: [
							{
								name: 'level02-sector5-bonus1',
								cl: 'Bonus',
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
								name: 'level02-sector6-enemy1',
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
								name: 'level02-sector6-bonus1',
								cl: 'Bonus',
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
					name: 'levelGUI',
					cl: 'SharedGroupCollection',
					type: 'levelGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Green',
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
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
				name: 'level03',
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
				backgroundColor: '#000000',
				images: [
					'ovalMask',
					'forestBackground01a',
					'forestBackground01b',
					'forestBackground01c',
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
					'crystals02Grey',
					'crystals02Green',
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
							img: 'forestBackground01a',
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
							img: 'forestBackground01b',
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
							img: 'forestBackground01c',
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
							img: 'forestBackground01a',
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
							img: 'forestBackground01b',
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
							img: 'forestBackground01c',
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
								name: 'level03-sector2-enemy1',
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
								name: 'level03-sector3-enemy1',
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
								name: 'level03-sector3-enemy2',
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
								cl: 'Bonus',
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
								name: 'level03-sector4-enemy1',
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
							attrs: [
							{
								cl: 'Bonus',
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
								name: 'level03-sector5-enemy1',
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
								name: 'level03-sector5-enemy2',
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
							attrs: [
							{
								cl: 'Bonus',
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
								name: 'level03-sector6-enemy1',
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
							attrs: [
							{
								cl: 'Bonus',
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
					name: 'levelGUI',
					cl: 'SharedGroupCollection',
					type: 'levelGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Garnet',
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 4) + (stageUnit * 15),
								y: -(stageUnit * 5)
							}
						}
					}
					]
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
				name: 'level04',
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
				backgroundColor: '#000000',
				images: [
					'ovalMask',
					'forestBackground01a',
					'forestBackground01b',
					'forestBackground01c',
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
					'crystals02Garnet',
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
							img: 'forestBackground01a',
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
							img: 'forestBackground01b',
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
							img: 'forestBackground01c',
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
							img: 'forestBackground01a',
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
							img: 'forestBackground01b',
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
							img: 'forestBackground01c',
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
								name: 'level04-sector2-hazard0',
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
								name: 'level04-sector2-hazard0',
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
								name: 'level04-sector2-enemy1',
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
								name: 'level04-sector2-enemy2',
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
							attrs: [
							{
								cl: 'Bonus',
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
								name: 'level04-sector3-hazard0',
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
								name: 'level04-sector3-hazard0',
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
								name: 'level04-sector3-enemy1',
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
								cl: 'Bonus',
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
								name: 'level04-sector4-hazard0',
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
								name: 'level04-sector4-enemy1',
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
								name: 'level04-sector4-enemy2',
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
							attrs: [
							{
								cl: 'Bonus',
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
								name: 'level04-sector5-hazard1',
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
								name: 'level04-sector5-hazard1',
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
								name: 'level04-sector5-enemy1',
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
							attrs: [
							{
								cl: 'Bonus',
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
								name: 'level04-sector6-enemy1',
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
					name: 'levelGUI',
					cl: 'SharedGroupCollection',
					type: 'levelGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Purple',
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 13),
								y: winH - (stageUnit * 7)
							}
						}
					}
					]
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
				name: 'level05',
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
				backgroundColor: '#000000',
				images: [
					'ovalMask',
					'forestBackground01a',
					'forestBackground01b',
					'forestBackground01c',
					'grass03a',
					'grass03b',
					'grass03c',
					'grassClump01',
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
					'crystals02Purple',
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
							img: 'forestBackground01a',
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
							img: 'forestBackground01b',
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
							img: 'forestBackground01c',
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
							img: 'forestBackground01a',
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
							img: 'forestBackground01b',
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
							img: 'forestBackground01c',
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
						name: 'grassClump01',
						cl: 'Sprite',
						attrs: {
							img: 'grassClump01',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 4)
							},
							start: {
								x: (stageWidth * 2) - (stageUnit * 1),
								y: winH - (stageUnit * 4.5)
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
						name: 'grassClump02',
						cl: 'Sprite',
						attrs: {
							img: 'grassClump01',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 4)
							},
							start: {
								x: (stageWidth * 4) - (stageUnit * 1),
								y: winH - (stageUnit * 6.5)
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
								name: 'level05-sector2-hazard1',
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
								name: 'level05-sector2-hazard2',
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
								name: 'level05-sector2-hazard3',
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
								name: 'level05-sector2-hazard4',
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
								name: 'level05-sector2-enemy1',
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
								name: 'level05-sector2-enemy2',
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
							attrs: []
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
								name: 'level05-sector3-hazard0',
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
								name: 'level05-sector3-hazard0',
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
								name: 'level05-sector3-hazard0',
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
								name: 'level05-sector3-hazard0',
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
								name: 'level05-sector3-enemy1',
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
								cl: 'Bonus',
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
								name: 'level05-sector4-hazard0',
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
								name: 'level05-sector4-hazard0',
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
								name: 'level05-sector4-hazard0',
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
								name: 'level05-sector4-enemy1',
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
								name: 'level05-sector4-enemy2',
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
							attrs: [
							{
								cl: 'Bonus',
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
								name: 'level05-sector5-hazard1',
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
								name: 'level05-sector5-hazard1',
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
								name: 'level05-sector5-hazard1',
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
								name: 'level05-sector5-hazard1',
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
								name: 'level05-sector5-enemy1',
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
							attrs: [
							{
								cl: 'Bonus',
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
								name: 'level05-sector6-enemy1',
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
					name: 'levelGUI',
					cl: 'SharedGroupCollection',
					type: 'levelGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Aqua',
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 13),
								y: winH - (stageUnit * 16)
							}
						}
					}
					]
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
				name: 'level06',
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
				backgroundColor: '#000000',
				images: [
					// 'sky',
					'riverBackground01a',
					'riverBackground01b',
					'riverBackground01c',
					'riverBackground01d',
					'riverBackground01e',
					'riverBackground01f',
					'tree01',
					'platformV',
					'platform',
					'rockPlatform04',
					'grass03ci',
					'grassClump01',
					'river01',
					'crystals02Orange',
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
					{
						name: 'riverBackground01a',
						cl: 'Sprite',
						attrs: {
							img: 'riverBackground01a',
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
						name: 'riverBackground01b',
						cl: 'Sprite',
						attrs: {
							img: 'riverBackground01b',
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
						name: 'riverBackground01c',
						cl: 'Sprite',
						attrs: {
							img: 'riverBackground01c',
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
						name: 'riverBackground01d',
						cl: 'Sprite',
						attrs: {
							img: 'riverBackground01d',
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
						name: 'riverBackground01e',
						cl: 'Sprite',
						attrs: {
							img: 'riverBackground01e',
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
						name: 'riverBackground01f',
						cl: 'Sprite',
						attrs: {
							img: 'riverBackground01f',
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
						name: 'grass01',
						cl: 'Sprite',
						attrs: {
							img: 'grass03a',
							phaser: {
								width: stageWidth,
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
								width: stageWidth,
								height: (stageUnit * 2)
							},
							start: {
								x: stageWidth,
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'grass03',
						cl: 'Sprite',
						attrs: {
							img: 'grass03ci',
							phaser: {
								width: (stageWidth * 0.5),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2),
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'grassClumpLeft',
						cl: 'Sprite',
						attrs: {
							img: 'grassClump01',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageWidth * 2.5) - (stageUnit * 1),
								y: winH - (stageUnit * 3)
							}
						}
					},
					{
						name: 'river',
						cl: 'Sprite',
						attrs: {
							img: 'river01',
							phaser: {
								width: (stageWidth * 1.5),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2.5),
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'grassClumpRight',
						cl: 'Sprite',
						attrs: {
							img: 'grassClump01',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageWidth * 4) - (stageUnit),
								y: winH - (stageUnit * 3)
							}
						}
					},
					{
						name: 'grass04',
						cl: 'Sprite',
						attrs: {
							img: 'grass03a',
							phaser: {
								width: stageWidth,
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 4),
								y: winH - (stageUnit * 2)
							}
						}
					},
					{
						name: 'grass05',
						cl: 'Sprite',
						attrs: {
							img: 'grass03b',
							phaser: {
								width: stageWidth,
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 5),
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
								width: (stageWidth * 2.5),
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
					},
					{
						name: 'ground1',
						cl: 'Sprite',
						attrs: {
							img: 'platform',
							phaser: {
								width: (stageWidth * 2),
								height: (stageUnit)
							},
							start: {
								x: (stageWidth * 4),
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
								name: 'rockPlatform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
									phaser: {
										width: (stageUnit * 3),
										height: (stageUnit * 1.5)
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
									img: 'rockPlatform04',
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
									img: 'rockPlatform04',
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
									img: 'rockPlatform04',
									phaser: {
										width: (stageUnit * 3),
										height: (stageUnit * 1)
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
									img: 'rockPlatform04',
									phaser: {
										width: (stageUnit * 2.5),
										height: (stageUnit * 1)
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
									img: 'rockPlatform04',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 1.5)
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
									img: 'rockPlatform04',
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
									img: 'rockPlatform04',
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
									img: 'rockPlatform04',
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
								name: 'rockPlatform040',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
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
								name: 'rockPlatform041',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
									phaser: {
										width: (stageUnit * 2.5),
										height: (stageUnit * 1.5)
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
								name: 'rockPlatform042',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
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
								name: 'rockPlatform043',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
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
								name: 'rockPlatform044',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
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
								name: 'rockPlatform045',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
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
								name: 'rockPlatform046',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
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
								name: 'rockPlatform047',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
									phaser: {
										width: (stageUnit * 2.5),
										height: (stageUnit * 1.5)
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
								name: 'rockPlatform048',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit)
									},
									start: {
										x: (stageWidth * 5) + (stageUnit * 9),
										y: winH - (stageUnit * 7.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'rockPlatform049',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
									phaser: {
										width: (stageUnit * 3),
										height: (stageUnit * 2)
									},
									start: {
										x: (stageWidth * 5) + (stageUnit * 13),
										y: winH - (stageUnit * 8.5)
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
					name: 'levelGUI',
					cl: 'SharedGroupCollection',
					type: 'levelGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Orange',
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 4) + (stageUnit * 9),
								y: winH - (stageUnit * 12)
							}
						}
					}
					]
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
			// level 7
			{
				name: 'level07',
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
				backgroundColor: '#000000',
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
					'rockPlatform02',
					'rockPlatform03',
					'invisibleRect',
					'heart',
					'crystals02Pink'
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
						name: 'riverBackground01a',
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
						name: 'riverBackground01b',
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
						name: 'riverBackground01c',
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
						name: 'riverBackground01d',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
								width: (stageWidth * 0.75),
								height: (stageUnit)
							},
							start: {
								x: 0,
								y: winH - (stageUnit * 0.1)
							},
							physics: {
								immovable: true
							}
						}
					},
					{
						name: 'beginningRock',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 3),
								height: (stageUnit * 6)
							},
							start: {
								x: (stageUnit * 0.1),
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
										x: (stageUnit * 9.2),
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
										x: (stageUnit * 8.9),
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
									img: 'rockPlatform02',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 3)
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
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 9.5),
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
										x: (stageUnit * 14),
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
										x: (stageUnit * 10),
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
										x: (stageUnit * 13),
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
									img: 'rockPlatform03',
									phaser: {
										width: (stageUnit * 3),
										height: (stageUnit * 1)
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
									img: 'rockPlatform02',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 4)
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
									img: 'rockPlatform03',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 2)
									},
									start: {
										x: (stageWidth) + (stageUnit * 13.5),
										y: winH - (stageUnit * 36)
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
										width: (stageUnit * 2.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 12.5),
										y: winH - (stageUnit * 39)
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
										y: winH - (stageUnit * 41)
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
										x: (stageWidth * 2) + (stageUnit * 0.5),
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
										width: (stageUnit * 3),
										height: (stageUnit * 1)
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
					name: 'levelGUI',
					cl: 'SharedGroupCollection',
					type: 'levelGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Pink',
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 11.5),
								y: winH - (stageUnit * 47)
							}
						}
					}
					]
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
			// level 8
			{
				name: 'level08',
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
				backgroundColor: '#000000',
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
					'crystals02Teal'
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
						name: 'riverBackground01a',
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
						name: 'riverBackground01b',
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
						name: 'riverBackground01c',
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
						name: 'riverBackground01d',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
								width: (stageWidth * 0.75),
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
										width: (stageUnit * 4),
										height: (stageUnit * 1)
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
										height: (stageUnit * 1)
									},
									start: {
										x: (stageWidth) + (stageUnit * 13.5),
										y: winH - (stageUnit * 36)
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
										width: (stageUnit * 2.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 12.5),
										y: winH - (stageUnit * 39)
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
										y: winH - (stageUnit * 41)
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
										x: (stageWidth * 2) + (stageUnit * 0.5),
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
										width: (stageUnit * 3),
										height: (stageUnit * 1)
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
					name: 'levelGUI',
					cl: 'SharedGroupCollection',
					type: 'levelGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Teal',
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 11.5),
								y: winH - (stageUnit * 47)
							}
						}
					}
					]
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
			// level 9
			{
				name: 'level09',
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
				backgroundColor: '#000000',
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
					'crystals02Yellow'
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
						name: 'riverBackground01a',
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
						name: 'riverBackground01b',
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
						name: 'riverBackground01c',
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
						name: 'riverBackground01d',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
								width: (stageWidth * 0.75),
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
										width: (stageUnit * 4),
										height: (stageUnit * 1)
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
										height: (stageUnit * 1)
									},
									start: {
										x: (stageWidth) + (stageUnit * 13.5),
										y: winH - (stageUnit * 36)
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
										width: (stageUnit * 2.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 12.5),
										y: winH - (stageUnit * 39)
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
										y: winH - (stageUnit * 41)
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
										x: (stageWidth * 2) + (stageUnit * 0.5),
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
										width: (stageUnit * 3),
										height: (stageUnit * 1)
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
					name: 'levelGUI',
					cl: 'SharedGroupCollection',
					type: 'levelGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Yellow',
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 11.5),
								y: winH - (stageUnit * 47)
							}
						}
					}
					]
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
			// level 10
			{
				name: 'level10',
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
				backgroundColor: '#000000',
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
					'crystals02Red'
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
						name: 'riverBackground01a',
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
						name: 'riverBackground01b',
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
						name: 'riverBackground01c',
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
						name: 'riverBackground01d',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
						name: 'riverBackground01e',
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
						name: 'riverBackground01f',
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
								width: (stageWidth * 0.75),
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
										width: (stageUnit * 4),
										height: (stageUnit * 1)
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
										height: (stageUnit * 1)
									},
									start: {
										x: (stageWidth) + (stageUnit * 13.5),
										y: winH - (stageUnit * 36)
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
										width: (stageUnit * 2.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 12.5),
										y: winH - (stageUnit * 39)
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
										y: winH - (stageUnit * 41)
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
										x: (stageWidth * 2) + (stageUnit * 0.5),
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
										width: (stageUnit * 3),
										height: (stageUnit * 1)
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
					name: 'levelGUI',
					cl: 'SharedGroupCollection',
					type: 'levelGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Red',
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 11.5),
								y: winH - (stageUnit * 47)
							}
						}
					}
					]
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
				backgroundColor: '#ffffff',
				images: [
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
						name: 'title',
						cl: 'Text',
						attrs: {
							centerX: true,
							centerY: false,
							x: 0,
							y: stageUnit,
							defaultContent: 'All Completed',
							style: { 
								font: 'bold ' + fontSizes.lg + 'px "Waiting for the Sunrise"', 
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
								font: 'bold ' + fontSizes.md + 'px "Waiting for the Sunrise"', 
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
				backgroundColor: '#ffffff',
				images: [
					'blackRect',
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
						name: 'title',
						cl: 'Text',
						attrs: {
							centerX: true,
							centerY: false,
							x: 0,
							y: stageUnit,
							defaultContent: 'game over',
							style: { 
								font: 'bold ' + fontSizes.lg + 'px "Waiting for the Sunrise"', 
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
						// x: winW/2 - ((stageUnit * 3) * 0.84)/2,
						// y: winH - 300
						// y: winH - (226)
						x: winW/2,
						y: winH - (stageUnit * 3)
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