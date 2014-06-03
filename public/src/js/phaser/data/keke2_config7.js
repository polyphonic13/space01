/* local storage override
Polyworks.Storage.destroy();
Polyworks.Storage.set({kekeAndTheGreyExpanse: {"currentLevel":9,"savedState":"menu","score":0, "savedStatus":["c","c","c","c","c","c","c","c","c","u","u","l"],"highScores":[0,0,0,0,0,0,0,0,0,0,0,0]}}); 
*/

Polyworks.Config = (function() {
	function Config() {}
	
	Config.prototype.init = function(stage) {
		var winW = stage.winW; 
		var winH = stage.winH;
		var stageWidth = stage.width;
		var stageHeight = stage.height;
		var stageUnit = stage.unit;

		var levelInfoAttrs = {
			background: {
				phaser: {
					width: stageWidth * 0.85,
					height: stageHeight * 0.85,
					alpha: 0.50
				},
				start: {
					x: (winW/2) - ((stageWidth * 0.85)/2),
					y: (winH/2) - ((stageHeight * 0.75)/2)
				}
			},
			title: {
				phaser: {
					width: (stageUnit * 6) * 1.5,
					height: (stageUnit * 1) * 1.5,
					alpha: 0.75
				},
				start: {
					x: winW - (stageUnit * 6) * 1.5,
					y: (stageUnit * 1.5)
				}
			}
		};

		var caterpillar01 = {
			width: (stageUnit * 2),
			height: (stageUnit * 2) * 0.375,
			imgHeight: 64
		};

		var caterpillar02 = {
			width: (stageUnit * 2.5),
			height: (stageUnit * 2.5) * 0.375,
			imgHeight: 64
		};

		var caterpillar03 = {
			width: (stageUnit * 3),
			height: (stageUnit * 3) * 0.375,
			imgHeight: 64
		};

		var spider01 = {
			width: (stageUnit * 2),
			height: (stageUnit * 2), 
			speed: 1.5
		};

		var spider02 = {
			width: (stageUnit * 2.5),
			height: (stageUnit * 2.5),
			speed: 2
		};

		var spider03 = {
			width: (stageUnit * 1.5),
			height: (stageUnit * 1.5),
			speed: 1
		};

		var fontSizes = {
			xs: (stageUnit * 0.5),
			sm: (stageUnit * 0.6),
			md: (stageUnit * 0.75),
			lg: (stageUnit * 1.0),
			xl: (stageUnit * 1.5)
		};

		var c = {
			// IMAGES
			images: {
				// gameTitle: 'assets/images/keke_title.png',
				gameTitle: 'assets/images/keke_grey_expanse_title.png',
				greyExpanseTitle: 'assets/images/grey_expanse_title.png',

				blackRect: 'assets/images/black_rect32x32.png',
				greyRect: 'assets/images/grey_rect32x32.png',
				whiteRect: 'assets/images/white_rect32x32.png',

				kekeSmall: 'assets/images/map/new_keke4a_sm.png',
				pageLeftArrow: 'assets/images/map/page_left_arrow.png',
				pageRightArrow: 'assets/images/map/page_right_arrow.png',
				mapForest: 'assets/images/map/map04_forest.gif',
				mapMountains: 'assets/images/map/map04_mountains.gif',

				level01Title: 'assets/images/titles/level_title01.png',
				level02Title: 'assets/images/titles/level_title02.png',
				level03Title: 'assets/images/titles/level_title03.png',
				level04Title: 'assets/images/titles/level_title04.png',
				level05Title: 'assets/images/titles/level_title05.png',
				level06Title: 'assets/images/titles/level_title06.png',
				level07Title: 'assets/images/titles/level_title07.png',
				level08Title: 'assets/images/titles/level_title08.png',
				level09Title: 'assets/images/titles/level_title09.png',
				level10Title: 'assets/images/titles/level_title10.png',
				level11Title: 'assets/images/titles/level_title11.png',
				level12Title: 'assets/images/titles/level_title12.png',
				
				level01Preview: 'assets/images/backgrounds/level01_preview-md.gif',
				level02Preview: 'assets/images/backgrounds/level02_preview-md.gif',
				level03Preview: 'assets/images/backgrounds/level03_preview-md.gif',
				level04Preview: 'assets/images/backgrounds/level04_preview-md.gif',
				level05Preview: 'assets/images/backgrounds/level05_preview-md.gif',
				level06Preview: 'assets/images/backgrounds/level06_preview-md.gif',
				level07Preview: 'assets/images/backgrounds/level07_preview-md.gif',
				level08Preview: 'assets/images/backgrounds/level08_preview-md.gif',
				level09Preview: 'assets/images/backgrounds/level09_preview-md.gif',
				level10Preview: 'assets/images/backgrounds/level10_preview-md.gif',
				level11Preview: 'assets/images/backgrounds/level11_preview-md.gif',
				level12Preview: 'assets/images/backgrounds/level12_preview-md.gif',

				forestBackground02a: 'assets/images/backgrounds/pencil_forest02a-md.gif',
				forestBackground02b: 'assets/images/backgrounds/pencil_forest02b-md.gif',
				forestBackground02c: 'assets/images/backgrounds/pencil_forest02c-md.gif',
				forestBackground02d: 'assets/images/backgrounds/pencil_forest02d-md.gif',
				forestBackground02e: 'assets/images/backgrounds/pencil_forest02e-md.gif',
				forestBackground02f: 'assets/images/backgrounds/pencil_forest02f-md.gif',

				forestBackground01a: 'assets/images/backgrounds/pencil_forest01a-md.gif',
				forestBackground01b: 'assets/images/backgrounds/pencil_forest01b-md.gif',
				forestBackground01c: 'assets/images/backgrounds/pencil_forest01c-md.gif',

				riverBackground01a: 'assets/images/backgrounds/pencil_river01a-md.gif',
				riverBackground01b: 'assets/images/backgrounds/pencil_river01b-md.gif',
				riverBackground01c: 'assets/images/backgrounds/pencil_river01c-md.gif',
				riverBackground01d: 'assets/images/backgrounds/pencil_river01d-md.gif',
				riverBackground01e: 'assets/images/backgrounds/pencil_river01e-md.gif',
				riverBackground01f: 'assets/images/backgrounds/pencil_river01f-md.gif',

				mountainBackgroundA5: 'assets/images/backgrounds/pencil_mountain06-a5-md.gif',
				mountainBackgroundA6: 'assets/images/backgrounds/pencil_mountain06-a6-md.gif',
				mountainBackgroundA7: 'assets/images/backgrounds/pencil_mountain06-a7-md.gif',
				mountainBackgroundA8: 'assets/images/backgrounds/pencil_mountain06-a8-md.gif',
				mountainBackgroundB5: 'assets/images/backgrounds/pencil_mountain06-b5-md.gif',
				mountainBackgroundB6: 'assets/images/backgrounds/pencil_mountain06-b6-md.gif',
				mountainBackgroundB7: 'assets/images/backgrounds/pencil_mountain06-b7-md.gif',
				mountainBackgroundB8: 'assets/images/backgrounds/pencil_mountain06-b8-md.gif',
				mountainBackgroundC3: 'assets/images/backgrounds/pencil_mountain06-c3-md.gif',
				mountainBackgroundC4: 'assets/images/backgrounds/pencil_mountain06-c4-md.gif',
				mountainBackgroundC5: 'assets/images/backgrounds/pencil_mountain06-c5-md.gif',
				mountainBackgroundC6: 'assets/images/backgrounds/pencil_mountain06-c6-md.gif',
				mountainBackgroundC7: 'assets/images/backgrounds/pencil_mountain06-c7-md.gif',
				mountainBackgroundC8: 'assets/images/backgrounds/pencil_mountain06-c8-md.gif',
				mountainBackgroundD3: 'assets/images/backgrounds/pencil_mountain06-d3-md.gif',
				mountainBackgroundD4: 'assets/images/backgrounds/pencil_mountain06-d4-md.gif',
				mountainBackgroundD5: 'assets/images/backgrounds/pencil_mountain06-d5-md.gif',
				mountainBackgroundD6: 'assets/images/backgrounds/pencil_mountain06-d6-md.gif',
				mountainBackgroundD7: 'assets/images/backgrounds/pencil_mountain06-d7-md.gif',
				mountainBackgroundD8: 'assets/images/backgrounds/pencil_mountain06-d8-md.gif',
				mountainBackgroundE1: 'assets/images/backgrounds/pencil_mountain06-e1-md.gif',
				mountainBackgroundE2: 'assets/images/backgrounds/pencil_mountain06-e2-md.gif',
				mountainBackgroundE3: 'assets/images/backgrounds/pencil_mountain06-e3-md.gif',
				mountainBackgroundE4: 'assets/images/backgrounds/pencil_mountain06-e4-md.gif',
				mountainBackgroundE5: 'assets/images/backgrounds/pencil_mountain06-e5-md.gif',
				mountainBackgroundE6: 'assets/images/backgrounds/pencil_mountain06-e6-md.gif',
				mountainBackgroundF1: 'assets/images/backgrounds/pencil_mountain06-f1-md.gif',
				mountainBackgroundF2: 'assets/images/backgrounds/pencil_mountain06-f2-md.gif',
				mountainBackgroundF3: 'assets/images/backgrounds/pencil_mountain06-f3-md.gif',
				mountainBackgroundF4: 'assets/images/backgrounds/pencil_mountain06-f4-md.gif',
				mountainBackgroundF5: 'assets/images/backgrounds/pencil_mountain06-f5-md.gif',
				mountainBackgroundF6: 'assets/images/backgrounds/pencil_mountain06-f6-md.gif',
				mountainBackgroundG1: 'assets/images/backgrounds/pencil_mountain06-g1-md.gif',
				mountainBackgroundG2: 'assets/images/backgrounds/pencil_mountain06-g2-md.gif',
				mountainBackgroundG3: 'assets/images/backgrounds/pencil_mountain06-g3-md.gif',
				mountainBackgroundG4: 'assets/images/backgrounds/pencil_mountain06-g4-md.gif',
				mountainBackgroundH1: 'assets/images/backgrounds/pencil_mountain06-h1-md.gif',
				mountainBackgroundH2: 'assets/images/backgrounds/pencil_mountain06-h2-md.gif',
				mountainBackgroundH3: 'assets/images/backgrounds/pencil_mountain06-h3-md.gif',
				mountainBackgroundH3a: 'assets/images/backgrounds/pencil_mountain06-h3a-md.gif',
				mountainBackgroundH4: 'assets/images/backgrounds/pencil_mountain06-h4-md.gif',
				mountainBackgroundH4a: 'assets/images/backgrounds/pencil_mountain06-h4a-md.gif',
				mountainBackgroundH5: 'assets/images/backgrounds/pencil_mountain06-h5-md.gif',
				mountainBackgroundH6: 'assets/images/backgrounds/pencil_mountain06-h6-md.gif',
				mountainBackgroundI3: 'assets/images/backgrounds/pencil_mountain06-i3-md.gif',
				mountainBackgroundI4: 'assets/images/backgrounds/pencil_mountain06-i4-md.gif',
				mountainBackgroundI5: 'assets/images/backgrounds/pencil_mountain06-i5-md.gif',
				mountainBackgroundI6: 'assets/images/backgrounds/pencil_mountain06-i6-md.gif',
				mountainBackgroundI7: 'assets/images/backgrounds/pencil_mountain06-i7-md.gif',
				mountainBackgroundI8: 'assets/images/backgrounds/pencil_mountain06-i8-md.gif',
				mountainBackgroundJ3: 'assets/images/backgrounds/pencil_mountain06-j3-md.gif',
				mountainBackgroundJ4: 'assets/images/backgrounds/pencil_mountain06-j4-md.gif',
				mountainBackgroundJ5: 'assets/images/backgrounds/pencil_mountain06-j5-md.gif',
				mountainBackgroundJ6: 'assets/images/backgrounds/pencil_mountain06-j6-md.gif',
				mountainBackgroundJ7: 'assets/images/backgrounds/pencil_mountain06-j7-md.gif',
				mountainBackgroundJ8: 'assets/images/backgrounds/pencil_mountain06-j8-md.gif',
				mountainBackgroundK5: 'assets/images/backgrounds/pencil_mountain06-k5-md.gif',
				mountainBackgroundK6: 'assets/images/backgrounds/pencil_mountain06-k6-md.gif',
				mountainBackgroundK7: 'assets/images/backgrounds/pencil_mountain06-k7-md.gif',
				mountainBackgroundK8: 'assets/images/backgrounds/pencil_mountain06-k8-md.gif',
				mountainBackgroundL5: 'assets/images/backgrounds/pencil_mountain06-l5-md.gif',
				mountainBackgroundL6: 'assets/images/backgrounds/pencil_mountain06-l6-md.gif',
				mountainBackgroundL7: 'assets/images/backgrounds/pencil_mountain06-l7-md.gif',
				mountainBackgroundL8: 'assets/images/backgrounds/pencil_mountain06-l8-md.gif',

				caveBackground02a: 'assets/images/backgrounds/pencil_cave02a-md.gif',
				caveBackground02b: 'assets/images/backgrounds/pencil_cave02b-md.gif',

				platform: 'assets/images/scenery/platform.png',
				platformGrey: 'assets/images/scenery/platform_grey.png',
				platformRed: 'assets/images/scenery/platform_red.png',
				platformV: 'assets/images/scenery/platform_v.png',

				caveGround01a: 'assets/images/scenery/cave_ground01a.png',
				caveGround01b: 'assets/images/scenery/cave_ground01b.png',
				
				rockPlatform01: 'assets/images/scenery/rock_platform01.png',
				rockPlatform02: 'assets/images/scenery/rock_platform02.png',
				rockPlatform03: 'assets/images/scenery/rock_platform03.png',
				rockPlatform04: 'assets/images/scenery/rock_platform04.png',

				grass03: 'assets/images/scenery/grass03.png',
				grass03a: 'assets/images/scenery/grass03a.png',
				grass03b: 'assets/images/scenery/grass	03b.png',
				grass03c: 'assets/images/scenery/grass03c.png',
				grass03ci: 'assets/images/scenery/grass03ci.png',
				grassClump01: 'assets/images/scenery/grass_clump01.png',

				tree01: 'assets/images/scenery/tree04a.png',
				tree02: 'assets/images/scenery/tree04a.png',
				tree03: 'assets/images/scenery/tree04a.png',
				tree04: 'assets/images/scenery/tree04a.png',

				river01: 'assets/images/scenery/river_water01.png',

				woodenArrowSign01Left: 'assets/images/scenery/wooden_arrow_sign01_left.png',
				woodenArrowSign01Right: 'assets/images/scenery/wooden_arrow_sign01_right.png',
				woodenXSign01: 'assets/images/scenery/wooden_x_sign01.png',
				
				branch03Left: 'assets/images/scenery/branch03_left.png',
				branch03Right: 'assets/images/scenery/branch03_right.png',
				branch03aLeft: 'assets/images/scenery/branch03a_left.png',
				branch03aRight: 'assets/images/scenery/branch03a_right.png',
				vine01Left: 'assets/images/scenery/vine01a_left.png',
				vine01Right: 'assets/images/scenery/vine01a_right.png',
				trunk01: 'assets/images/scenery/trunk01.png',
				thorns01: 'assets/images/scenery/thorns03.png',

				goalFlag: 'assets/images/goal_flag.png',

				// requirements
				crystals02Grey: 'assets/images/crystals02a_grey.png',
				crystals02Blue: 'assets/images/crystals02a_blue.png',
				crystals02Green: 'assets/images/crystals02a_green.png',
				crystals02Garnet: 'assets/images/crystals02a_garnet.png',
				crystals02Purple: 'assets/images/crystals02a_purple.png',
				crystals02Silver: 'assets/images/crystals02a_silver.png',
				crystals02Aqua: 'assets/images/crystals02a_aqua.png',
				crystals02Orange: 'assets/images/crystals02a_orange.png',
				crystals02Pink: 'assets/images/crystals02a_pink.png',
				crystals02Teal: 'assets/images/crystals02a_teal.png',
				crystals02Yellow: 'assets/images/crystals02a_yellow.png',
				crystals02Red: 'assets/images/crystals02a_red.png',
				crystals02Diamond: 'assets/images/crystals02a_diamond.png',

				// bonuses
				lollipop: 'assets/images/lollipop.png',

				// buttons
				startButton: 'assets/images/controls/start_button.png',
				creditsButton: 'assets/images/controls/credits_button.png',
				
				// boss
				caterpillarBoss1Head: 'assets/images/enemies/caterpillar03b_head.png',
				caterpillarBoss1Body: 'assets/images/enemies/caterpillar03b_body.png',

				// misc
				heart: 'assets/images/heart.png',
				invisibleRect: 'assets/images/invisible.png',
				ovalMask: 'assets/images/oval_mask2.png'

			},
			// SPRITES
			sprites: {
				// map
				mapLocationMarker: 
				{
					url: 'assets/images/map/map_location_marker.png',
					width: 128,
					height: 128,
					frames: 4
				},
				mapLocationMarkerCrystals: 
				{
					url: 'assets/images/map/map_location_marker_crystals.gif',
					width: 64,
					height: 128,
					frames: 16
				},
				crystalsWheel: 
				{
					url: 'assets/images/map/crystals_wheel_sprite.png',
					width: 128,
					height: 128,
					frames: 12
				},
				// buttons
				leftButton: 
				{
					// url: 'assets/images/controls/arrow_left_2x8.png',
					// width: 75,
					// height: 400,
					url: 'assets/images/controls/arrow_left_2x8b.png',
					width: 75,
					height: 400,
					frames: 2
				},
				rightButton: 
				{
					url: 'assets/images/controls/arrow_right_4x8b.png',
					width: 200, 
					height: 400,
					frames: 2
				},
				upButton: 
				{
					url: 'assets/images/controls/arrow_up_4x8b.png',
					width: 200,
					height: 400,
					frames: 2
				},
				pauseButton: 
				{
					url: 'assets/images/controls/pause_button2.png',
					width: 50,
					height: 50,
					frames: 2
				},
				playButton: 
				{
					url: 'assets/images/controls/play_button.png',
					width: 100,
					height: 100,
					frames: 2
				},
				playButtonSmall: 
				{
					url: 'assets/images/controls/play_button_sm.png',
					width: 50,
					height: 50,
					frames: 2
				},
				nextButton: 
				{
					url: 'assets/images/controls/next_button.png',
					width: 50,
					height: 50,
					frames: 2
				},
				menuButton: 
				{
					url: 'assets/images/controls/menu_button3.png',
					width: 50,
					height: 50,
					frames: 2
				},
				mapButton: 
				{
					url: 'assets/images/controls/map_button.png',
					width: 50,
					height: 50,
					frames: 2
				},
				restartButton: 
				{
					url: 'assets/images/controls/restart_button.png',
					width: 100,
					height: 100,
					frames: 2
				},
				mailButton: 
				{
					url: 'assets/images/controls/mail_button.png',
					width: 50,
					height: 50,
					frames: 2
				},
				closeButton: 
				{
					url: 'assets/images/controls/quit_button.png',
					width: 50,
					height: 50,
					frames: 2
				},

				// heart
				heartSprite: 
				{
					url: 'assets/images/heart_sprite.png',
					width: 128,
					height: 128,
					frames: 8
				},
				// player
				keke: 
				{
					url: 'assets/images/keke_character3c.png', 
					// url: 'assets/images/keke_character3c_bw.png', 
					width: 190,
					height: 226,
					frames: 35
				},
				// enemies
				caterpillar01: 
				{
					url: 'assets/images/enemies/caterpillar03_sprite.png',
					width: 128, 
					height: 48, 
					frames: 16
				},
				caterpillar02: 
				{
					url: 'assets/images/enemies/caterpillar03a_sprite.png',
					width: 128, 
					height: 48, 
					frames: 16
				},
				caterpillar03: 
				{
					url: 'assets/images/enemies/caterpillar03c_sprite.png',
					width: 128, 
					height: 48, 
					frames: 16
				},
				spider01: 
				{
					url: 'assets/images/enemies/spider01a.png',
					width: 128, 
					height: 128, 
					frames: 16
				},
				spider02: 
				{
					url: 'assets/images/enemies/spider01b.png',
					width: 128, 
					height: 128, 
					frames: 16
				},
				spider03: 
				{
					url: 'assets/images/enemies/spider01c.png',
					width: 128, 
					height: 128, 
					frames: 16
				},
				lava01: 
				{
					url: 'assets/images/scenery/lava01-sprite.png',
					width: 512, 
					height: 128, 
					frames: 8
				},
				// reacting terrain
				branch03LeftAnimated: 
				{
					url: 'assets/images/scenery/branch03_left_animated.png',
					width: 256, 
					height: 32, 
					frames: 6
				},
				branch03RightAnimated: 
				{
					url: 'assets/images/scenery/branch03_right_animated.png',
					width: 256, 
					height: 32, 
					frames: 6
				},
				rockPlatform01Animated: 
				{
					url: 'assets/images/scenery/rock_platform01_animated.png',
					width: 128, 
					height: 64, 
					frames: 8
				},
				rockPlatform04Animated: 
				{
					url: 'assets/images/scenery/rock_platform04_animated.png',
					width: 128, 
					height: 64, 
					frames: 8
				}
				
			},
			// WEB FONTS
			webFonts: {
				google: [ 'Waiting+for+the+Sunrise::latin' ]
			},
			// SOCIAL
			social: {
				parentId: 'socialButtons',
				imagePath: 'assets/images/social/',
				shareTitle: 'keke and the G R E Y  E X P A N S E',
				// appURL: encodeURIComponent(document.location.href),
				appURL: encodeURIComponent('http://www.polyworksgames.com/games/keke2/'),
				buttonStyle: {
					position: {
						horizontal: -(stageUnit * 0.5),
						vertical: 'center'
					},
					spacer: (stageUnit * 0.5),
					offset: (stageUnit * 0.66),
					size: {
						width: (stageUnit * 1.25),
						height: (stageUnit * 1.25)
					}
				},
				networks: [
					// 'mail',
					// 'facebook',
					// 'twitter',
					// 'google'
				],
				currentActionType: 'follow',
				socialActions: {
					mail: {
						follow: {
							url: 'mailto:keke@polyworksgames.com?',
							params: 'subject=~{shareTitle}~'
						}
					},
					facebook: {
						follow: {
							url: 'https://www.facebook.com/kekevscaterpillars'
						},
						share: {
							url: 'http://www.facebook.com/share.php?',
							params: 'u=~{appURL}~&title=~{shareTitle}~'
						}
					},
					twitter: {
						follow: {
							url: 'https://twitter.com/kekenews'
						},
						share: {
							url: 'http://twitter.com/home?',
							params: 'status=~{shareTitle}~+~{appURL}~'
						}
					},
					google: {
						follow: {
							url: 'https://plus.google.com/103794850800876367181/about?hl=en'
						},
						share: {
							url: 'https://plus.google.com/share?',
							params: 'url=~{appURL}~'
						}
					}
				},
				listeners: [
				{
					type: Polyworks.Events.CHANGE_STATE,
					match: {
						value: 'menu',
						actions: [
						{
							method: 'changeData',
							data: {
								type: 'currentActionType',
								value: 'follow'
							}
						},
						{
							method: 'show',
							data: {
								value: [
									'mail',
									'facebook',
									'twitter',
									'google'
								]
							}
						}
						]
					},
					nonmatch: {
						actions: [
						{
							method: 'hideAll',
							data: {}
						}]
					}
				}
				]
			},
			// PLAYER
			player: {
				name: 'player',
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
						y: winH - (stageUnit * 1.8)
					},
					physics: {
						// bounce: {
						// 	x: 0,
						// 	y: 0.2
						// },
						deferredGravity: true,
						collideWorldBounds: false
					},
					anchor: {
						x: 0.5,
						y: 0.5
					},
					followStyle: Phaser.Camera.FOLLOW_TOPDOWN,
					speed: {
						x: (stageUnit * 4),
						y: (stageUnit * 10.4)
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
			},
			// CONTROLS
			controls: {
				keys: {
					name: 'controlKeys',
					cl: 'ControlKey',
					attrs: [
					// {
					// 	name: 'quit', // q
					// 	cl: 'ControlKey',
					// 	attrs: {
					// 		inputCode: Polyworks.InputCodes.QUIT,
					// 		events: {
					// 			pressed: {
					// 				type: Polyworks.Events.CHANGE_STATE,
					// 				value: 'quit'
					// 			}
					// 		}
					// 	}
					// },
					{
						name: 'clearData', // c
						cl: 'ControlKey',
						attrs: {
							inputCode: Polyworks.InputCodes.CLEAR_DATA
						}
					},
					// {
					// 	name: 'start', // s
					// 	cl: 'ControlKey',
					// 	attrs: {
					// 		inputCode: Polyworks.InputCodes.START,
					// 		events: {
					// 			pressed: {
					// 				type: Polyworks.Events.CHANGE_STATE,
					// 				value: 'map'
					// 			}
					// 		}
					// 	}
					// },
					// {
					// 	name: 'next', // n
					// 	cl: 'ControlKey',
					// 	attrs: {
					// 		inputCode: Polyworks.InputCodes.NEXT,
					// 		events: {
					// 			pressed: {
					// 				type: Polyworks.Events.NEXT_LEVEL
					// 			}
					// 		}
					// 	}
					// },
					// {
					// 	name: 'level', // l
					// 	cl: 'ControlKey',
					// 	attrs: {
					// 		inputCode: Polyworks.InputCodes.LEVEL,
					// 		events: {
					// 			pressed: {
					// 				type: Polyworks.Events.START_LEVEL,
					// 				value: PolyworksGame.currentLevel
					// 			}
					// 		}
					// 	}
					// },
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
					},
					{
						name: 'space',
						cl: 'ControlKey',
						attrs: {
							inputCode: Polyworks.InputCodes.SPACE
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
						name: 'creditsBtn',
						cl: 'InputButton',
						attrs: {
							img: 'creditsButton',
							phaser: {
								width: (stageUnit * 4),
								height: (stageUnit * 1)
							},
							start: {
								x: winW/2 - (stageUnit * 2),
								y: winH - (stageUnit * 1.5)
							},
							events: {
								released: {
									type: Polyworks.Events.CHANGE_STATE,
									value: 'credits'
								}
							}
						}
					}
					],
					credits: [
					{
						name: 'closeBtn',
						cl: 'InputButton',
						attrs: {
							img: 'closeButton',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 0.5),
								y: (winH/2) - ((stageUnit * 1.5)/2) - (stageUnit * 2)
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
								y: (winH/2) - ((stageUnit * 1.5)/2) - (stageUnit * 2)
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
					levelInfo: [
					// play button
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
								y: (winH/2) - ((stageUnit * 1.5)/2) - (stageUnit * 2)
							},
							events: {
								released: {
									type: Polyworks.Events.START_LEVEL
								}
							}
						}
					},
					// map button
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
								y: (winH/2) - ((stageUnit * 1.5)/2)
							},
							frames: [0, 0, 1],
							events: {
								released: {
									type: Polyworks.Events.CHANGE_STATE,
									value: 'map'
								}
							}
						}
					}
					],
					completed: [
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
								y: (winH/2) - ((stageUnit * 1.5)/2) - (stageUnit * 2)
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
								y: (winH/2) - ((stageUnit * 1.5)/2)
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
					gameOver: [
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
								y: (winH/2) - ((stageUnit * 1.5)/2) - (stageUnit * 2)
							},
							frames: [0, 0, 1],
							events: {
								released: {
									type: Polyworks.Events.CHANGE_STATE,
									value: 'menu'
								}
							}
						}
					},
					{
						name: 'restart',
						cl: 'InputButton',
						attrs: {
							img: 'restartButton',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 0.5),
								y: (winH/2) - ((stageUnit * 1.5)/2)
							},
							events: {
								released: {
									type: Polyworks.Events.START_LEVEL
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
								y: (winH/2) - ((stageUnit * 1.5)/2) - (stageUnit * 2)
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
					cl: 'HeartIcon',
					health: 0,
					lowHealth: 33,
					attrs: {
						img: 'heartSprite',
						phaser: {
							width: (stageUnit * 0.75),
							height: (stageUnit * 0.75)
						},
						start: {
							x: winW - (stageUnit * 1.2),
							y: (stageUnit * 0.3)
						},
						defaultAnimation: 'normal',
						animations: heartIconAnimations
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
							font: fontSizes.sm + 'px "Waiting for the Sunrise"',
							align: 'right', 
							fill: '#ffffff' 
						},
						listeners: [
							Polyworks.Events.HEALTH_UPDATED
						]
					}
				}
				],
				requirementsGUI: [
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
				// background
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
				// paused text
				{
					name: 'paused',
					cl: 'Text',
					attrs: {
						alignX: 'center',
						alignY: 'center',
						style: { 
							font: 'bold ' + fontSizes.xl + 'px "Waiting for the Sunrise"', 
							fill: '#000000',
							align: 'center'
						},
						defaultContent: 'paused'
					}
				},
				// score
				{
					name: 'score',
					cl: 'Text',
					attrs: {
						// alignX: 'stageRight',
						x: (stageUnit * 3),
						y: winH - (stageUnit * 2.25),
						style: { 
							font: 'bold ' + fontSizes.md + 'px "Waiting for the Sunrise"', 
							fill: '#000000',
							align: 'right'
						},
						defaultContent: 'score: ~{levelScore}~',
						listeners: [
							Polyworks.Events.LEVEL_SCORE_UPDATED
						]
					}
				},
				// high score
				{
					name: 'highScore',
					cl: 'Text',
					attrs: {
						// alignX: 'stageRight',
						x: (stageUnit * 3),
						y: winH - (stageUnit * 1.2),
						style: { 
							font: 'bold ' + fontSizes.xs + 'px "Waiting for the Sunrise"', 
							fill: '#000000',
							align: 'left'
						},
						defaultContent: '~{currentLevelHighScore}~'
					}
				},
				// play button
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
							y: (winH/2) - ((stageUnit * 1.5)/2) - (stageUnit * 2)
						},
						frames: [0, 0, 1],
						events: {
							released: {
								type: Polyworks.Events.RESUME_STATE
							}
						}
					}
				},
				// map button
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
							y: (winH/2) - ((stageUnit * 1.5)/2)
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
				// restart button
				{
					name: 'restart',
					cl: 'InputButton',
					attrs: {
						img: 'restartButton',
						phaser: {
							width: (stageUnit * 1.5),
							height: (stageUnit * 1.5)
						},
						start: {
							x: (stageUnit * 0.5),
							y: (winH/2) + ((stageUnit * 1.5)/2) + (stageUnit * 0.5)
						},
						events: {
							released: {
								type: Polyworks.Events.START_LEVEL
							}
						}
					}
				}
				],
				completedGUI: [
				// background
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
				// completed title
				{
					name: 'completed',
					cl: 'Text',
					attrs: {
						alignX: 'center',
						alignY: 'center',
						style: { 
							font: 'bold ' + fontSizes.xl + 'px "Waiting for the Sunrise"', 
							fill: '#000000',
							align: 'center'
						},
						defaultContent: 'cleared'
					}
				},
				// score
				{
					name: 'score',
					cl: 'Text',
					attrs: {
						x: (stageUnit * 3),
						y: winH - (stageUnit * 2.25),
						style: { 
							font: 'bold ' + fontSizes.md + 'px "Waiting for the Sunrise"', 
							fill: '#000000',
							align: 'right'
						},
						defaultContent: 'score: ~{levelScore}~',
						listeners: [
							Polyworks.Events.LEVEL_CLEARED
						]
					}
				},
				// high score
				{
					name: 'highScore',
					cl: 'Text',
					attrs: {
						x: (stageUnit * 3),
						y: winH - (stageUnit * 1.2),
						style: { 
							font: 'bold ' + fontSizes.xs + 'px "Waiting for the Sunrise"', 
							fill: '#000000',
							align: 'left'
						},
						defaultContent: '~{currentLevelHighScore}~',
						listeners: [
							Polyworks.Events.LEVEL_CLEARED
						]
					}
				},
				// next button
				{
					name: 'next',
					cl: 'InputButton',
					attrs: {
						img: 'nextButton',
						phaser: {
							width: (stageUnit * 1.5),
							height: (stageUnit * 1.5)
						},
						start: {
							x: (stageUnit * 0.5),
							y: (winH/2) - ((stageUnit * 1.5)/2) - (stageUnit * 2)
						},
						frames: [0, 0, 1],
						events: {
							released: {
								type: Polyworks.Events.NEXT_LEVEL
							}
						}
					}
				},
				// map button
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
							y: (winH/2) - ((stageUnit * 1.5)/2)
						},
						frames: [0, 0, 1],
						events: {
							released: {
								type: Polyworks.Events.CHANGE_STATE,
								value: 'map'
							}
						}
					}
				}
				]
			},

			// LEVEL STATUS TEXT	
			levelStatusText: {
				c: 'cleared',
				u: 'unlocked',
				l: 'locked'
			},
			// LEVEL INFO
			levelInfoStateTemplate: {
				state: {
					name: 'level',
					cl: 'LevelInfoState',
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
						'greyExpanseTitle'
					],
					sprites: [
						'playButtonSmall',
						'mapButton'
					],
					attrs: [
					{
						name: 'infoGroup',
						cl: 'GroupCollection',
						attrs: [
						]
					}
					]
				},

				groupCollection: {
					// level background
					background: {
						name: 'levelInfoBackground',
						cl: 'Sprite',
						attrs: {
							img: '',
							phaser: levelInfoAttrs.background.phaser,
							start: levelInfoAttrs.background.start
						}
					},
					// game title
					gameTitle: {
						name: 'gameTitle',
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
					// level title
					title: {
						name: 'levelInfoTitle',
						cl: 'Sprite',
						attrs: {
							img: '',
							phaser: levelInfoAttrs.title.phaser,
							start: levelInfoAttrs.title.start
						}
					},
					// description
					description: {
						name: 'levelDescription',
						cl: 'Text',
						attrs: {
							alignX: 'center',
							alignY: 'center',
							style: { 
								font: 'bold ' + fontSizes.sm + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'center'
							},
							defaultContent: ''
						}
					},
					// high score
					highScore: {
						name: 'highScore',
						cl: 'Text',
						attrs: {
							x: (stageUnit * 3),
							y: winH - (stageUnit * 2.25),
							defaultContent: '',
							style: { 
								font: 'bold ' + fontSizes.md + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'left'
							}
						}
					},
					// level status
					status: {
						name: 'levelStatus',
						cl: 'Text',
						attrs: {
							x: (stageUnit * 3),
							y: winH - (stageUnit * 1.2),
							defaultContent: '',
							style: { 
								font: 'bold ' + fontSizes.xs + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'left'
							}
						}
					},
					// play button
					playButton: {
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
								y: (winH/2) - ((stageUnit * 1.5)/2) - (stageUnit * 2)
							},
							events: {
								released: {
									type: Polyworks.Events.START_LEVEL
								}
							}
						}
					},
					// map button
					mapButton: {
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
								y: (winH/2) - ((stageUnit * 1.5)/2)
							},
							frames: [0, 0, 1],
							events: {
								released: {
									type: Polyworks.Events.CHANGE_STATE,
									value: 'map'
								}
							}
						}
					}
				},

				descriptions: [
				'where am i? what happened to the colors?\ni see something blue up in the tree over there.',
				'CATERPILLARS?!\nthey are so gross.\ni want more lollipops.',
				'climbing trees is so much fun!\ni wonder how many\ndifferent crystal colors i can find...',
				'this is a big forest.\ni think i see thorns ahead.\ni better avoid those.',
				'i hope this forest ends soon.',
				'that river looks fast.\ni don\'t want to get swept away.\ni\'ll have to jump across the rocks.',
				'wow! look at this mountain.\ni am going to have to climb it.',
				'SPIDERS?!\ni hate spiders!',
				'i think i see the top of the mountain.\njust a little bit further...',
				'climbing down the mountain is so scary...',
				'the rocks are crumbling! i hope i don\'t fall off...',
				'a cave! let me see what\'s inside...'
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
					'pageLeftArrow',
					'pageRightArrow',
					'startButton',
					'creditsButton'
				],
				sprites: [
					'pauseButton',
					'menuButton',
					'mapButton',
					'nextButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'closeButton'
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
			// credits
			{
				name: 'credits',
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
				images: [],
				sprites: [
					'closeButton'
				],
				attrs: [
				{
					name: 'menuGroup',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'creditsTitle',
						cl: 'Text',
						attrs: {
							alignX: 'center',
							y: 0,
							style: { 
								font: 'bold ' + fontSizes.xl + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'center'
							},
							defaultContent: 'credits'
						}
					},
					{
						name: 'code',
						cl: 'Text',
						attrs: {
							alignX: 'center',
							y: (stageUnit * 2.5),
							style: { 
								font: 'bold ' + fontSizes.sm + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'center'
							},
							defaultContent: 'code: paul hoover'
						}
					},
					{
						name: 'design',
						cl: 'Text',
						attrs: {
							alignX: 'center',
							y: (stageUnit * 4),
							style: { 
								font: 'bold ' + fontSizes.sm + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'center'
							},
							defaultContent: 'design: paul hoover & seema shariat'
						}
					},
					{
						name: 'marketing',
						cl: 'Text',
						attrs: {
							alignX: 'center',
							y: (stageUnit * 5.5),
							style: { 
								font: 'bold ' + fontSizes.sm + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'center'
							},
							defaultContent: 'marketing: seema shariat'
						}
					},
					{
						name: 'contact',
						cl: 'Text',
						attrs: {
							alignX: 'center',
							y: (stageUnit * 7),
							style: { 
								font: 'bold ' + fontSizes.sm + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'center'
							},
							defaultContent: 'contact: keke@polyworksgames.com'
						}
					}
					]
				},
				{
					name: 'creditsControls',
					cl: 'ControlButtons',
					type: 'credits',
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
					'greyExpanseTitle',
					'invisibleRect',
					'whiteRect',
					'ovalMask',
					'pageLeftArrow',
					'pageRightArrow',
					'mapForest',
					'mapMountains'
				],
				sprites: [
					'mapLocationMarkerCrystals',
					'menuButton'
				],
				pages: [
				{
					name: 'page1',
					cl: 'MapPage',
					levels: [0, 1, 2, 3, 4, 5],
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
						name: 'mapLevelMarker0',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 2.5),
								y: (winH/2) + (stageUnit * 0.1)
							}
						}
					},
					{
						name: 'mapLevelMarker1',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 4.6),
								y: (winH/2) - (stageUnit * 0.6) 
							}
						}
					},
					{
						name: 'mapLevelMarker2',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 5.8),
								y: (winH/2)
							}
						}
					},
					{
						name: 'mapLevelMarker3',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 8),
								y: (winH/2) - (stageUnit * 0.5) 
							}
						}
					},
					{
						name: 'mapLevelMarker4',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 9.9),
								y: (winH/2) + (stageUnit * 0.2) 
							}
						}
					},
					{
						name: 'mapLevelMarker5',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 12.1),
								y: (winH/2) - (stageUnit * 0.3) 
							}
						}
					}
					]
				},
				{
					name: 'page2',
					cl: 'MapPage',
					levels: [6, 7, 8, 9, 10, 11],
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
						name: 'mapLevelMarker6',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 1.7),
								y: (winH/2) - (stageUnit * 0.4)
							}
						}
					},
					{
						name: 'mapLevelMarker7',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 4.1),
								y: (winH/2) - (stageUnit * 0.4) 
							}
						}
					},
					{
						name: 'mapLevelMarker8',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 7),
								y: (winH/2) - (stageUnit * 1.5) 
							}
						}
					},
					{
						name: 'mapLevelMarker9',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 8.3),
								y: (winH/2) - (stageUnit * 0.7) 
							}
						}
					},
					{
						name: 'mapLevelMarker10',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 10.3),
								y: (winH/2) + (stageUnit * 0.4) 
							}
						}
					},
					{
						name: 'mapLevelMarker11',
						cl: 'MapMarker',
						attrs: {
							img: 'mapLocationMarkerCrystals',
							phaser: {
								width: (stageUnit * 1),
								height: (stageUnit * 2)
							},
							start: {
								x: (winW/2 - stageWidth/2) + (stageUnit * 12.3),
								y: (winH/2) + (stageUnit * 0.7) 
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
				text: 'forest entrance',
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
					'whiteRect',
					'ovalMask',
					'level01Title',
					'goalFlag',
					'forestBackground02a',
					'forestBackground02b',
					'forestBackground02c',
					'forestBackground02d',
					'forestBackground02e',
					'forestBackground02f',
					'grass03',
					'tree01',
					'woodenArrowSign01Left',
					'woodenArrowSign01Right',
					'platformV',
					'platform',
					'branch03Left',
					'branch03Right',
					'branch03aLeft',
					'branch03aRight',
					'crystals02Blue',
					'crystals02Grey',
					'lollipop',
					'invisibleRect',
					'greyRect'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'heartSprite',
					'keke',
					// 'caterpillarBoss1Head',
					// 'caterpillarBoss1Body',
					'caterpillar01'
				],
				attrs: [
				// scenery
				{
					name: 'scenery',
					cl: 'GroupCollection',
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
					// trees and grass
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
						name: 'woodenArrow',
						cl: 'Sprite',
						attrs: {
							img: 'woodenArrowSign01Left',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 9.3),
								y: winH - (stageUnit * 2.5)
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
								y: winH - (stageUnit * 2.5)
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
								y: winH - (stageUnit * 2.5)
							}
						}
					}
					]
				},
				// terrain
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
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.HORIZONTAL,
					attrs: [
					{
						name: 'sector1',
						cl: 'Sector',
						bounds: {
							start: 0,
							end: stageWidth
						},
						attrs: []
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
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level01-sector2-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar01',
									phaser: {
										width: caterpillar01.width,
										height: caterpillar01.height,
										health: 3
									},
									start: {
										x: (stageWidth) + (stageUnit * 12),
										y: winH - (caterpillar01.imgHeight + (stageUnit * 0.5))
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
									testInView: true,
									score: 2500,
									movement: {
										speed: 0.5,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
								}
							}
							]
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03aLeft',
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
									img: 'branch03Right',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level01-sector4-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar01',
									phaser: {
										width: caterpillar01.width,
										height: caterpillar01.height,
										health: 3
									},
									start: {
										x: (stageWidth * 3) + (stageUnit),
										y: winH - (caterpillar01.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 5,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03aLeft',
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
									img: 'branch03Right',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
									img: 'branch03Left',
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
							name: 'enemies',
							cl: 'Enemies',
							attrs: [{
								name: 'level01-sector5-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar01',
									phaser: {
										width: caterpillar01.width,
										height: caterpillar01.height,
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
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
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
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level01-sector6-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar01',
									phaser: {
										width: caterpillar01.width,
										height: caterpillar01.height,
										health: 3
									},
									start: {
										x: (stageWidth * 5) + (stageUnit),
										y: winH - (caterpillar01.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 5,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
				// foreground
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
				// controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level01Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level01Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1.5)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Blue',
							score: 10000,
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
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageWidth * 6) - (stageUnit * 4),
								y: winH - (stageUnit * 3.5)
							}
						}
					}
					]
				}
				]
			},
			// level 2
			{
				name: 'level02',
				text: 'shaded sentinels',
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
					'whiteRect',
					'ovalMask',
					'level02Title',
					'goalFlag',
					'forestBackground01a',
					'forestBackground01b',
					'forestBackground01c',
					'grass03',
					'tree01',
					'platformV',
					'platform',
					'branch03Left',
					'branch03Right',
					'branch03aLeft',
					'branch03aRight',
					'crystals02Green',
					'crystals02Grey',
					'lollipop',
					'invisibleRect',
					'greyRect'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'heartSprite',
					'keke',
					'caterpillar01'
				],
				attrs: [
				// scenery
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
								y: winH - (stageUnit * 2.5)
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
								y: winH - (stageUnit * 2.5)
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
								x: -(stageUnit * 6),
								y: winH - (stageHeight * 3)
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
								x: (stageWidth * 2),
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
								x: (stageWidth * 3),
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
								x: (stageWidth * 4),
								y: winH - (stageHeight * 3)
							}
						}
					}
					]
				},
				// terrain
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
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.HORIZONTAL,
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
									img: 'branch03aLeft',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03aRight',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03aLeft',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03aRight',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03Left',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03Right',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03Right',
									start: {
										x: (stageUnit * 3.5),
										y: winH - (stageUnit * 12)
									},
									phaser: { width: (stageUnit * 5), height: (stageUnit * 0.4) },
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
									img: 'branch03Right',
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
							attrs: [
							{
								name: 'level02-sector2-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar01',
									phaser: {
										width: caterpillar01.width,
										height: caterpillar01.height,
										health: 3
									},
									start: {
										x: (stageWidth) + (stageUnit * 12),
										y: winH - (caterpillar01.imgHeight + (stageUnit * 0.5))
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
									testInView: true,
									score: 2500,
									movement: {
										speed: 0.5,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03aLeft',
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
									img: 'branch03Right',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
							attrs: [
							{
								name: 'level02-sector6-bonus1',
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 15),
										y: winH - (stageUnit * 13)
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
								name: 'plat1',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aLeft',
									start: {
										x: (stageWidth * 3) + (stageUnit * 7),
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
									img: 'branch03aRight',
									start: {
										x: (stageWidth * 3) + (stageUnit * 10),
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
									img: 'branch03aLeft',
									start: {
										x: (stageWidth * 3) + (stageUnit * 7),
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
									img: 'branch03aRight',
									start: {
										x: (stageWidth * 3) + (stageUnit * 10),
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
									img: 'branch03Left',
									start: {
										x: (stageWidth * 3) + (stageUnit * 7),
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
									img: 'branch03Right',
									start: {
										x: (stageWidth * 3) + (stageUnit * 10),
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
									img: 'branch03Right',
									start: {
										x: (stageWidth * 3) + (stageUnit * 9.5),
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
							attrs: [
							{
								name: 'level02-sector4-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar01',
									phaser: {
										width: caterpillar01.width,
										height: caterpillar01.height,
										health: 3
									},
									start: {
										x: (stageWidth * 3) + (stageUnit),
										y: winH - (caterpillar01.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 5,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03aLeft',
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
									img: 'branch03Right',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
									img: 'branch03Left',
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
										width: caterpillar01.width,
										height: caterpillar01.height,
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
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
										width: caterpillar01.width,
										height: caterpillar01.height,
										health: 3
									},
									start: {
										x: (stageWidth * 4) + (stageUnit * 8),
										y: winH - (caterpillar01.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 15,
									testInView: true,
									score: 2000,
									movement: {
										speed: 2,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
								name: 'level02-sector6-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar01',
									phaser: {
										width: caterpillar01.width,
										height: caterpillar01.height,
										health: 3
									},
									start: {
										x: (stageWidth * 5) + (stageUnit),
										y: winH - (caterpillar01.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 5,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
					}]
				},
				// foreground
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
				// controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level02Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level02Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Green',
							score: 10000,
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
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageWidth * 6) - (stageUnit * 4),
								y: winH - (stageUnit * 3.5)
							}
						}
					}
					]
				}
				]
			},
			// level 3
			{
				name: 'level03',
				text: 'heart of the wildwood',
				cl: 'LevelState',
				world: {
					x: 0,
					y: -(stageHeight * 2) + winH,
					width: stageWidth * 9,
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
					'whiteRect',
					'ovalMask',
					'level03Title',
					'goalFlag',
					'forestBackground01a',
					'forestBackground01b',
					'forestBackground01c',
					'grass03',
					'tree01',
					'trunk01',
					'platformV',
					'platform',
					'branch03Left',
					'branch03Right',
					'branch03aLeft',
					'branch03aRight',
					'vine01Left',
					'vine01Right',
					'crystals02Grey',
					'crystals02Garnet',
					'lollipop',
					'invisibleRect'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'heartSprite',
					'keke',
					'caterpillar01',
					'caterpillar02',
					'caterpillar03',
					'branch03LeftAnimated',
					'branch03RightAnimated'
				],
				attrs: [
				// scenery
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
						name: 'background07',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01c',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2
							},
							start: {
								x: (stageWidth * 6),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'background08',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01c',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2
							},
							start: {
								x: (stageWidth * 7),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'background09',
						cl: 'Sprite',
						attrs: {
							img: 'forestBackground01c',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2
							},
							start: {
								x: (stageWidth * 8),
								y: winH - (stageHeight * 2)
							}
						}
					},
					// grass
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
								y: winH - (stageUnit * 2.5)
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
								y: winH - (stageUnit * 2.5)
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
								x: (stageWidth * 6),
								y: winH - (stageUnit * 2.5)
							}
						}
					},
					// trees
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
								x: -(stageUnit * 6),
								y: winH - (stageHeight * 3)
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
								x: (stageWidth * 4) + (stageUnit * 11),
								y: winH - (stageHeight * 3)
							}
						}
					},
					{
						name: 'tree08',
						cl: 'Sprite',
						attrs: {
							img: 'tree01',
							phaser: {
								width: (stageHeight * 2),
								height: (stageHeight * 3)
							},
							start: {
								x: (stageWidth * 5) + (stageUnit * 3),
								y: winH - (stageHeight * 3)
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
								x: (stageWidth * 6) + (stageUnit * 3.9),
								y: winH - (stageUnit * 5)
							}
						}
					},
					{
						name: 'tree10',
						cl: 'Sprite',
						attrs: {
							img: 'tree01',
							phaser: {
								width: (stageHeight * 2),
								height: (stageHeight * 3)
							},
							start: {
								x: (stageWidth * 6) + (stageUnit * 3),
								y: winH - (stageHeight * 3)
							}
						}
					},
					{
						name: 'tree11',
						cl: 'Sprite',
						attrs: {
							img: 'tree01',
							phaser: {
								width: (stageHeight * 2),
								height: (stageHeight * 3)
							},
							start: {
								x: (stageWidth * 6) + (stageUnit * 11),
								y: winH - (stageHeight * 3)
							}
						}
					},
					{
						name: 'tree12',
						cl: 'Sprite',
						attrs: {
							img: 'tree01',
							phaser: {
								width: (stageHeight * 2),
								height: (stageHeight * 3)
							},
							start: {
								x: (stageWidth * 7) + (stageUnit * 3),
								y: winH - (stageHeight * 3)
							}
						}
					},
					{
						name: 'tree13',
						cl: 'Sprite',
						attrs: {
							img: 'tree01',
							phaser: {
								width: (stageHeight * 2),
								height: (stageHeight * 3)
							},
							start: {
								x: (stageWidth * 7) + (stageUnit * 11),
								y: winH - (stageHeight * 3)
							}
						}
					},
					{
						name: 'tree14',
						cl: 'Sprite',
						attrs: {
							img: 'tree01',
							phaser: {
								width: (stageHeight * 2),
								height: (stageHeight * 3)
							},
							start: {
								x: (stageWidth * 8) + (stageUnit * 4),
								y: winH - (stageHeight * 3)
							}
						}
					}
					]
				},
				// terrain
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
								x: (stageWidth * 9),
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
								width: stageWidth * 9,
								height: (stageUnit * 2)
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
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.HORIZONTAL,
					attrs: [
					// sector 1
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
									img: 'branch03aLeft',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03aRight',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03aLeft',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03aRight',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03Left',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03Right',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03Right',
									start: {
										x: (stageUnit * 3.5),
										y: winH - (stageUnit * 12)
									},
									phaser: { width: (stageUnit * 5), height: (stageUnit * 0.4) },
									physics: {
										immovable: true,
										allowGravity: false
									}
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
							attrs: [
							{
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
									start: {
										x: (stageUnit * 7),
										y: winH - (stageUnit * 13)
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
					// sector 2
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03LeftAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth) + (stageUnit * 7),
										y: winH - (stageUnit * 8.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'plat1',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Right',
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
									img: 'branch03Right',
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
										width: caterpillar01.width,
										height: caterpillar01.height,
										health: 6
									},
									start: {
										x: (stageWidth) + (stageUnit * 4),
										y: winH - (caterpillar01.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									speed: 0.5,
									attack: 10,
									testInView: true,
									score: 1000,
									movement: {
										speed: 0.25,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
					// sector 3
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level03-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar01',
									phaser: {
										width: caterpillar01.width,
										height: caterpillar01.height,
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
									attack: 10,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
										width: caterpillar01.width,
										height: caterpillar01.height,
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
									attack: 10,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
							}
							]
						}
						]
					},
					// sector 4
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03LeftAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 9),
										y: winH - (stageUnit * 10.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'platform9',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Right',
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
									img: 'branch03Right',
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
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level03-sector4-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar03.width,
										height: caterpillar03.height,
										health: 20
									},
									start: {
										x: (stageWidth * 3) + (stageUnit * 5),
										y: winH - (caterpillar03.imgHeight + (stageUnit * 1.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 15,
									testInView: true,
									score: 500,
									movement: {
										speed: 1.5,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
								}
							},
							{
								name: 'level03-sector4-enemy2',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageWidth * 3) + (stageUnit * 15),
										y: winH - (caterpillar02.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 15,
									testInView: true,
									score: 5000,
									jumps: true,
									jumpMultiplier: 500,
									movement: {
										speed: 1.25,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 6),
										y: winH - (stageUnit * 14)
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
					// sector 5
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
									img: 'branch03aRight',
									phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 5),
										y: winH - (stageUnit * 2.25)
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
									img: 'branch03aLeft',
									phaser: { width: (stageUnit * 2), height: (stageUnit * 0.3) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 2),
										y: winH - (stageUnit * 4)
									},
									physics: {
										immovable: true,
										allowGravity: false
									}
								}
							},
							{
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03RightAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 5),
										y: winH - (stageUnit * 6)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'platform6',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03LeftAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 10),
										y: winH - (stageUnit * 10.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03RightAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 13),
										y: winH - (stageUnit * 12)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
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
								name: 'level03-sector5-enemy2',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageWidth * 4) + (stageUnit * 8),
										y: winH - (caterpillar02.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 5,
									testInView: true,
									score: 2000,
									jumps: true,
									jumpMultiplier: 500,
									movement: {
										speed: 1.25,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
							}
							]
						}
						]
					},
					// sector 6
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
								name: 'platform6',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aLeft',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 5) + (stageUnit),
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
									img: 'branch03aRight',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 5) + (stageUnit * 5),
										y: winH - (stageUnit * 9)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03LeftAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 5) + (stageUnit * 9),
										y: winH - (stageUnit * 10.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'platform9',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Right',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 5) + (stageUnit * 4.5),
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
									img: 'branch03Right',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 5) + (stageUnit * 12.5),
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
										width: caterpillar01.width,
										height: caterpillar01.height,
										health: 6
									},
									start: {
										x: (stageWidth * 5),
										y: winH - (caterpillar01.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 10,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
					// sector 7
					{
						name: 'sector7',
						cl: 'Sector',
						bounds: {
							start: stageWidth * 6,
							end: stageWidth * 7
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
										x: (stageWidth * 6) + (stageUnit * 1),
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
										x: (stageWidth * 6) + (stageUnit * 5.5),
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
									img: 'branch03aLeft',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 6) + (stageUnit * 10),
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
									img: 'branch03aRight',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 6) + (stageUnit * 12),
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
							attrs: [
							]
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: []
						}
						]
					},
					// sector 8
					{
						name: 'sector8',
						cl: 'Sector',
						bounds: {
							start: stageWidth * 7,
							end: stageWidth * 8
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
									img: 'branch03aLeft',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 7) + (stageUnit),
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
									img: 'branch03aRight',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 7) + (stageUnit * 5),
										y: winH - (stageUnit * 9)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03LeftAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 7) + (stageUnit * 9),
										y: winH - (stageUnit * 10.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'platform9',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Right',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 7) + (stageUnit * 4.5),
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
									img: 'branch03Right',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 7) + (stageUnit * 12.5),
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
							attrs: [
							{
								name: 'level03-sector4-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar01',
									phaser: {
										width: caterpillar01.width,
										height: caterpillar01.height,
										health: 6
									},
									start: {
										x: (stageWidth * 7),
										y: winH - (caterpillar01.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 10,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
					// sector 9
					{
						name: 'sector9',
						cl: 'Sector',
						bounds: {
							start: stageWidth * 8,
							end: stageWidth * 9
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
									img: 'branch03aLeft',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 8) + (stageUnit),
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
									img: 'branch03aRight',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 8) + (stageUnit * 5),
										y: winH - (stageUnit * 9)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03LeftAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 8) + (stageUnit * 10),
										y: winH - (stageUnit * 10.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03RightAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 8) + (stageUnit * 13),
										y: winH - (stageUnit * 12)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
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
								name: 'level03-sector9-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageWidth * 8),
										y: winH - (stageHeight * 2)
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 25,
									testInView: true,
									score: 10000,
									jumps: true,
									jumpMultiplier: 500,
									movement: {
										speed: 1.25,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
								}
							},
							{
								name: 'level03-sector9-enemy2',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageWidth * 8),
										y: winH - (caterpillar02.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 25,
									testInView: true,
									score: 10000,
									jumps: true,
									jumpMultiplier: 500,
									movement: {
										speed: 1.25,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
								}
							},
							{
								name: 'level03-sector9-enemy3',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageWidth * 8) + (stageUnit * 8),
										y: winH - (caterpillar02.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 25,
									testInView: true,
									score: 10000,
									jumps: true,
									jumpMultiplier: 500,
									movement: {
										speed: 1.25,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
									start: {
										x: (stageWidth * 9) - (stageUnit * 4),
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
					}
					]
				},
				// foreground
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
				// controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level03Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level03Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Garnet',
							score: 10000,
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 5) + (stageUnit * 14),
								y: -(stageUnit * 3)
							}
						}
					}
					]
				},
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageWidth * 8) + (stageUnit * 14),
								y: winH - (stageUnit * 15)
							}
						}
					}
					]
				}
				]
			},
			// level 4
			{
				name: 'level04',
				text: 'the tangled thorns',
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
					'whiteRect',
					'ovalMask',
					'level04Title',
					'goalFlag',
					'forestBackground01a',
					'forestBackground01b',
					'forestBackground01c',
					'grass03',
					'tree01',
					'trunk01',
					'platformV',
					'platform',
					'branch03Left',
					'branch03Right',
					'branch03aLeft',
					'branch03aRight',
					'vine01Left',
					'vine01Right',
					'thorns01',
					'lollipop',
					'crystals02Grey',
					'crystals02Purple',
					'invisibleRect'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'heartSprite',
					'keke',
					'caterpillar03',
					'caterpillar02',
					'caterpillar03',
					'branch03LeftAnimated',
					'branch03RightAnimated'
				],
				attrs: [
				// scenery
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
								y: winH - (stageUnit * 2.5)
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
								y: winH - (stageUnit * 2.5)
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
								x: -(stageUnit * 6),
								y: winH - (stageHeight * 3)
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
				// terrain
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
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.HORIZONTAL,
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
							attrs: [
							{
								name: 'plat1',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aLeft',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03aRight',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03aLeft',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03aRight',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03Left',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03Right',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03Right',
									start: {
										x: (stageUnit * 3.5),
										y: winH - (stageUnit * 12)
									},
									phaser: { width: (stageUnit * 5), height: (stageUnit * 0.4) },
									physics: {
										immovable: true,
										allowGravity: false
									}
								}
							}
							]
						},
						{
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level03-sector4-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageUnit * 2),
										y: winH - (stageHeight + (stageUnit * 2))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 500,
									movement: {
										speed: 1.5,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
								}
							}
							]
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
										y: winH - (stageUnit * 3)
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
									img: 'branch03aLeft',
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
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03RightAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth) + (stageUnit * 12),
										y: winH - (stageUnit * 6)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth) + (stageUnit * 7),
										y: winH - (stageUnit * 2)
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth) + (stageUnit * 14),
										y: winH - (stageUnit * 2)
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
							attrs: [
							{
								name: 'level04-sector2-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
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
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
									img: 'caterpillar03',
									phaser: {
										width: caterpillar03.width,
										height: caterpillar03.height,
										health: 30
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
									attack: 25,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
									img: 'branch03aLeft',
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
								name: 'tree02-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aRight',
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
									img: 'branch03Right',
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
									img: 'branch03aRight',
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
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03LeftAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 9.5),
										y: winH - (stageUnit * 10.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'tree03-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Right',
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 8),
										y: winH - (stageUnit * 2)
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 15),
										y: winH - (stageUnit * 2)
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
							attrs: [
							{
								name: 'level04-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageWidth * 2),
										y: winH - (caterpillar02.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
								}
							},
							{
								name: 'level04-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 5),
										y: winH - (stageHeight * 1.25)
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
									img: 'branch03aRight',
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
								name: 'tree04-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
									img: 'branch03Left',
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
								name: 'tree05-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Right',
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 8),
										y: winH - (stageUnit * 2)
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
							attrs: [
							{
								name: 'level04-sector4-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar03',
									phaser: {
										width: caterpillar03.width,
										height: caterpillar03.height,
										health: 30
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
									attack: 25,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageWidth * 3) + (stageUnit * 14),
										y: winH - (stageHeight * 1.5)
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
								}
							},
							{
								name: 'level04-sector4-enemy3',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageWidth * 3) + (stageUnit * 9),
										y: winH - (stageHeight * 1.5)
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
									img: 'branch03aLeft',
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
								name: 'tree06-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aRight',
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
									img: 'branch03Left',
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
								name: 'tree07-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Right',
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4),
										y: winH - (stageUnit * 2)
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 9),
										y: winH - (stageUnit * 2)
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
							attrs: [
							{
								name: 'level04-sector5-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar02',
									phaser: {
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
									},
									start: {
										x: (stageWidth * 4) + (stageUnit),
										y: winH - (caterpillar02.imgHeight + (stageUnit * 0.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
								}
							},
							{
								name: 'level04-sector5-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar03',
									phaser: {
										width: caterpillar03.width,
										height: caterpillar03.height,
										health: 30
									},
									start: {
										x: (stageWidth * 4) + (stageUnit),
										y: winH - (stageHeight * 4)
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 25,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: caterpillarAnimations
								}
							},
							{
								name: 'level04-sector5-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'caterpillar03',
									phaser: {
										width: caterpillar03.width,
										height: caterpillar03.height,
										health: 30
									},
									start: {
										x: (stageWidth * 4) + (stageUnit * 6),
										y: winH - (stageHeight * 2)
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									attack: 25,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { width: (stageUnit * 0.5), height: (stageUnit) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 14),
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
									img: 'caterpillar03',
									phaser: {
										width: caterpillar03.width,
										height: caterpillar03.height,
										health: 30
									},
									start: {
										x: (stageWidth * 5) + (stageUnit * 4),
										y: winH - (caterpillar03.imgHeight + (stageUnit * 1.5))
									},
									physics: {
										deferredGravity: true,
										bounce: {
											x: 0,
											y: 0.2
										}
									},
									speed: 0.5,
									attack: 25,
									testInView: true,
									score: 1000,
									movement: {
										speed: 0.25,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
				// foreground
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
				// controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level04Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level04Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Purple',
							score: 10000,
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 14),
								y: winH - (stageUnit * 7)
							}
						}
					}
					]
				},
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageWidth * 6) - (stageUnit * 4),
								y: winH - (stageUnit * 3.5)
							}
						}
					}
					]
				}
				]
			},
			// level 5
			{
				name: 'level05',
				text: 'the lost knoll',
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
					'whiteRect',
					'ovalMask',
					'level05Title',
					'goalFlag',
					'forestBackground01a',
					'forestBackground01b',
					'forestBackground01c',
					'grass03',
					'grass03a',
					'grass03b',
					'grass03c',
					'grassClump01',
					'trunk01',
					'tree01',
					'platformV',
					'platform',
					'branch03Left',
					'branch03Right',
					'branch03aLeft',
					'branch03aRight',
					'vine01Left',
					'vine01Right',
					'thorns01',
					'lollipop',
					'crystals02Grey',
					'crystals02Aqua',
					'invisibleRect'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'heartSprite',
					'keke',
					'caterpillar03',
					'caterpillar02',
					'branch03LeftAnimated',
					'branch03RightAnimated'
				],
				attrs: [
				// scenery
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
								y: winH - (stageUnit * 2.5)
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
								y: winH - (stageUnit * 2.5)
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
								y: winH - (stageUnit * 5)
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
								y: winH - (stageUnit * 4.5)
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
								y: winH - (stageUnit * 4.5)
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
								y: winH - (stageUnit * 7)
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
								y: winH - (stageUnit * 6.5)
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
								y: winH - (stageUnit * 6.5)
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
								x: -(stageUnit * 6),
								y: winH - (stageHeight * 3)
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
				// terrain
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
						name: 'ground1',
						cl: 'Sprite',
						attrs: {
							img: 'platform',
							phaser: {
								width: stageWidth * 2,
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
					},
					{
						name: 'ground2',
						cl: 'Sprite',
						attrs: {
							img: 'platform',
							phaser: {
								width: stageWidth * 2,
								height: (stageUnit * 2.5)
							},
							start: {
								x: (stageWidth * 2),
								y: winH - (stageUnit * 2.5)
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
								height: (stageUnit * 4.5)
							},
							start: {
								x: (stageWidth * 4),
								y: winH - (stageUnit * 4.5)
							},
							physics: {
								immovable: true
							}
						}
					}
					]
				},
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.HORIZONTAL,
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
							attrs: [
							{
								name: 'plat1',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aLeft',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03aRight',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03aLeft',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03aRight',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03Left',
									start: {
										x: (stageUnit * 1),
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
									img: 'branch03Right',
									start: {
										x: (stageUnit * 4),
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
									img: 'branch03Right',
									start: {
										x: (stageUnit * 3.5),
										y: winH - (stageUnit * 12)
									},
									phaser: { width: (stageUnit * 5), height: (stageUnit * 0.4) },
									physics: {
										immovable: true,
										allowGravity: false
									}
								}
							}
							]
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
										y: winH - (stageUnit * 3)
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
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03LeftAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth) + (stageUnit * 8),
										y: winH - (stageUnit * 4.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'tree01-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aRight',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth) + (stageUnit * 7),
										y: winH - (stageUnit * 2)
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth) + (stageUnit * 13),
										y: winH - (stageUnit * 2)
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
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
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
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
									img: 'caterpillar03',
									phaser: {
										width: caterpillar03.width,
										height: caterpillar03.height,
										health: 30
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
									attack: 25,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03LeftAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit),
										y: winH - (stageUnit * 9.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'tree02-branch03',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03RightAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 4.5),
										y: winH - (stageUnit * 11)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03RightAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 4.5),
										y: winH - (stageUnit * 14)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
								}
							},
							{
								name: 'tree03-branch01',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Right',
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
								name: 'tree03-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Left',
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
								name: 'tree01-branch01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'branch03RightAnimated',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 0.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 12.5),
										y: winH - (stageUnit * 12.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: treeBranchBreaking
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 8),
										y: winH - (stageUnit * 4)
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 2) + (stageUnit * 15),
										y: winH - (stageUnit * 4)
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
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
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
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
									img: 'branch03aRight',
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
								name: 'tree04-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
									img: 'branch03aLeft',
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
								name: 'tree05-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03aRight',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 3) + (stageUnit * 8),
										y: winH - (stageUnit * 4)
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
									img: 'caterpillar03',
									phaser: {
										width: caterpillar03.width,
										height: caterpillar03.height,
										health: 30
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
									attack: 25,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
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
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 2000,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
									img: 'branch03Left',
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
								name: 'tree06-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Right',
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
									img: 'branch03Left',
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
								name: 'tree07-branch03',
								cl: 'Sprite',
								attrs: {
									img: 'branch03Right',
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4),
										y: winH - (stageUnit * 6)
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 9),
										y: winH - (stageUnit * 6)
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
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 15),
										y: winH - (stageUnit * 6)
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
										width: caterpillar02.width,
										height: caterpillar02.height,
										health: 20
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
									attack: 15,
									jumps: true,
									jumpMultiplier: 500,
									testInView: true,
									score: 500,
									movement: {
										speed: 1,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
									img: 'caterpillar03',
									phaser: {
										width: caterpillar03.width,
										height: caterpillar03.height,
										health: 30
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
									attack: 25,
									testInView: true,
									score: 1000,
									movement: {
										speed: 0.25,
										type: Polyworks.MovementTypes.GROUNDED_HORIZONTAL_BY_SPEED,
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
				// foreground
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
				// controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level05Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level05Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Aqua',
							score: 10000,
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 6.5),
								y: winH - (stageUnit * 13.5)
							}
						}
					}
					]
				},
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageWidth * 6) - (stageUnit * 4),
								y: winH - (stageUnit * 7.5)
							}
						}
					}
					]
				}
				]
			},
			// level 6 (river)
			{
				name: 'level06',
				text: 'the silver river',
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
					'whiteRect',
					'ovalMask',
					'level06Title',
					'goalFlag',
					'riverBackground01a',
					'riverBackground01b',
					'riverBackground01c',
					'riverBackground01d',
					'riverBackground01e',
					'riverBackground01f',
					'tree01',
					'woodenXSign01',
					'platformV',
					'platform',
					'branch03Left',
					'branch03Right',
					'branch03aLeft',
					'branch03aRight',
					'rockPlatform04',
					'grass03a',
					'grass03b',
					'grass03ci',
					'grassClump01',
					'river01',
					'thorns01',
					'invisibleRect',
					'crystals02Grey',
					'crystals02Silver'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'rockPlatform04Animated',
					'heartSprite',
					'keke'
				],
				attrs: [
				// scenery
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
					// grass
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
								y: winH - (stageUnit * 2.5)
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
								y: winH - (stageUnit * 2.5)
							}
						}
					},
					{
						name: 'woodenX',
						cl: 'Sprite',
						attrs: {
							img: 'woodenXSign01',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 2.5) - (stageUnit * 3.5),
								y: winH - (stageUnit * 2.7)
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
								y: winH - (stageUnit * 2.5)
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
						name: 'woodenX',
						cl: 'Sprite',
						attrs: {
							img: 'woodenXSign01',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageWidth * 4) + (stageUnit * 0.5),
								y: winH - (stageUnit * 2.75)
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
								y: winH - (stageUnit * 2.5)
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
								y: winH - (stageUnit * 2.5)
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
				// terrain
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
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.HORIZONTAL,
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03aLeft',
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
									img: 'branch03aRight',
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
									img: 'branch03Left',
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
									img: 'branch03Right',
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
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
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
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
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
										width: (stageUnit * 3) + (stageUnit * 0.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageWidth * 2),
										y: winH - (stageUnit * 2.5)
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
										x: (stageWidth * 2) + (stageUnit * 5),
										y: winH - (stageUnit * 4.25)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'rockPlatform6',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
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
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
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
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
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
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
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
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
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
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
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
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
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
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
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
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
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
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
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
								name: 'level06-sector5-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 1),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level06-sector5-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 5),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level06-sector5-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 9),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level06-sector3-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 4) + (stageUnit * 13),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									attack: 10
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
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
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
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'rockPlatform047',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
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
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'rockPlatform048',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
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
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'rockPlatform049',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
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
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							}
							]
						},
						{
							name: 'hazards',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level06-sector5-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 5) + (stageUnit * 1),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level06-sector5-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 5) + (stageUnit * 5),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level06-sector5-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 5) + (stageUnit * 9),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							},
							{
								name: 'level06-sector3-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'thorns01',
									phaser: { width: (stageUnit * 3), height: (stageUnit * 1.5) },
									start: {
										x: (stageWidth * 5) + (stageUnit * 13),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									attack: 10
								}
							}	
							]
						}
						]
					}
					]
				},
				// foreground
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
				// level controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level06Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level06Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Silver',
							score: 10000,
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageWidth * 4) + (stageUnit * 13),
								y: winH - (stageUnit * 11)
							}
						}
					}
					]
				},
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageWidth * 6) - (stageUnit * 2),
								y: winH - (stageUnit * 11)
							}
						}
					}
					]
				}
				]
			},
			// level 7
			{
				name: 'level07',
				text: 'the ashen cliffs',
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
					'whiteRect',
					'ovalMask',
					'level07Title',
					'goalFlag',
					'mountainBackgroundA5',
					'mountainBackgroundA6',
					'mountainBackgroundA7',
					'mountainBackgroundA8',
					'mountainBackgroundB5',
					'mountainBackgroundB6',
					'mountainBackgroundB7',
					'mountainBackgroundB8',
					'mountainBackgroundC5',
					'mountainBackgroundC6',
					'mountainBackgroundC7',
					'mountainBackgroundC8',
					'grass03a',
					'woodenXSign01',
					'woodenArrowSign01Right',
					'tree01',
					'platformV',
					'platform',
					'rockPlatform01',
					'rockPlatform02',
					'rockPlatform03',
					'rockPlatform04',
					'invisibleRect',
					'crystals02Grey',
					'crystals02Orange'
				],
				sprites: [
					'rockPlatform01Animated',
					'rockPlatform04Animated',
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'spider01',
					'heartSprite',
					'keke'
				],
				attrs: [
				// scenery
				{
					name: 'scenery',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'mountainBackgroundA8',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundA8',
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
						name: 'mountainBackgroundB8',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundB8',
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
						name: 'mountainBackgroundC8',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundC8',
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
						name: 'mountainBackgroundD8',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundD8',
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
						name: 'mountainBackgroundA7',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundA7',
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
						name: 'mountainBackgroundB7',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundB7',
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
						name: 'mountainBackgroundC7',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundC7',
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
						name: 'mountainBackgroundD7',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundD7',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageHeight * 4)
							}
						}
					},
					{
						name: 'mountainBackgroundA6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundA6',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH - (stageHeight * 6)
							}
						}
					},
					{
						name: 'mountainBackgroundB6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundB6',
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
						name: 'mountainBackgroundC6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundC6',
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
						name: 'mountainBackgroundD6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundD6',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageHeight * 6)
							}
						}
					},
					{
						name: 'mountainBackgroundA5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundA5',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH - (stageHeight * 8)
							}
						}
					},
					{
						name: 'mountainBackgroundB5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundB5',
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
						name: 'mountainBackgroundC5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundC5',
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
					},
					{
						name: 'mountainBackgroundD5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundD5',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageHeight * 8)
							}
						}
					},
					// x and grass
					{
						name: 'woodenX',
						cl: 'Sprite',
						attrs: {
							img: 'woodenXSign01',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 2)
							},
							start: {
								x: (stageUnit * 14.5),
								y: winH - (stageUnit * 2.6)
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
								y: winH - (stageUnit * 2.5)
							}
						}
					}
					]
				},
				// terrain
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
								width: (stageWidth),
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
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.VERTICAL,
					attrs: [
					// sector 1
					{
						name: 'sector1',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight),
							end: winH
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 1 terrain
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform04',
									phaser: {
										width: (stageUnit * 3),
										height: (stageUnit * 1.5)
									},
									start: {
										x: (stageUnit * 2),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform03',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 6),
										y: winH - (stageUnit * 4.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform03',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform04Animated',
									phaser: {
										width: (stageUnit * 2.5),
										height: (stageUnit * 1.25)
									},
									start: {
										x: (stageUnit * 11),
										y: winH - (stageUnit * 4.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector1-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 15),
										y: winH - (stageUnit * 6.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.6)
									},
									start: {
										x: (stageUnit * 12),
										y: winH - (stageUnit * 8)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 9),
										y: winH - (stageUnit * 7.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform07',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 6),
										y: winH - (stageUnit * 9)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 1 terrain
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
										width: (stageWidth * 3),
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
						}
						]
					},
					// sector 2
					{
						name: 'sector2',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 2),
							end: winH - (stageHeight)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 2 terrain
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.8)
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
								name: 'sector2-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.6)
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
								name: 'sector2-platform03',
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
								name: 'sector2-platform04',
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
								name: 'sector2-platform05',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.7)
									},
									start: {
										x: (stageUnit * 14),
										y: winH - (stageUnit * 15.0)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector2-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.8)
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
								name: 'sector2-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform03',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 7),
										y: winH - (stageUnit * 18)
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
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							] 
						}
						]
					},
					// sector 3
					{
						name: 'sector3',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 3),
							end: winH - (stageHeight * 2)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 3 terrain
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform03',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 7),
										y: winH - (stageUnit * 18.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 3),
										height: (stageUnit * 0.7)
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
								name: 'sector3-platform03',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.9)
									},
									start: {
										x: (stageUnit * 13.5),
										y: winH - (stageUnit * 22.0)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector3-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 1)
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
								name: 'sector3-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.8)
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
								name: 'sector3-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 9),
										y: winH - (stageUnit * 26.9)
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
							attrs: []
						},
						{
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level08-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider01',
									phaser: {
										width: spider01.width,
										height: spider01.height,
										health: 5
									},
									start: {
										x: (stageUnit * 20),
										y: winH - (stageUnit * 26)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 5,
									score: 1500,
									movement: {
										speed: spider01.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 4
					{
						name: 'sector4',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 4),
							end: winH - (stageHeight * 3)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 4 terrain
							{
								name: 'sector4-platform01',
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
								name: 'sector4-platform02',
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
								name: 'sector4-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.8)
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
								name: 'sector4-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.9)
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
								name: 'sector4-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.7)
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
								name: 'sector4-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.6)
									},
									start: {
										x: (stageWidth) + (stageUnit * 5),
										y: winH - (stageUnit * 35.5)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 4 terrain
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
					// sector 5
					{
						name: 'sector5',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 5),
							end: winH - (stageHeight * 4)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 5 terrain
							{
								name: 'sector5-platform01',
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
								name: 'sector5-platform02',
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
								name: 'sector5-platform03',
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
								name: 'sector5-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.7)
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
								name: 'sector5-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2.5),
										height: (stageUnit * 0.9)
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
								name: 'sector5-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.8)
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
								name: 'sector5-platform07',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.7)
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
								name: 'sector5-platform08',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.7)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 4),
										y: winH - (stageUnit * 41)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform09',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.9)
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
								name: 'sector5-platform10',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.8)
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
								name: 'sector5-platform11',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.9)
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
								name: 'sector5-platform12',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.9)
									},
									start: {
										x: (stageWidth) + (stageUnit * 5),
										y: winH - (stageUnit * 44.5)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 5 terrain
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
								name: 'level08-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider01',
									phaser: {
										width: spider01.width,
										height: spider01.height,
										health: 5
									},
									start: {
										x: (stageUnit * 30),
										y: winH - (stageUnit * 39)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 5,
									score: 1500,
									movement: {
										speed: spider01.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 6
					{
						name: 'sector6',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 6),
							end: winH - (stageHeight * 5)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 6 terrain
							{
								name: 'sector6-platform01',
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
								name: 'sector6-platform02',
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
								name: 'sector6-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.8)
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
								name: 'sector6-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.6)
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
								name: 'sector6-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.7)
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
								name: 'sector6-platform07',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.6)
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
								name: 'sector6-platform08',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.6)
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
								name: 'sector6-platform09',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageWidth) + (stageUnit * 13),
										y: winH - (stageUnit * 51.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform10',
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
								name: 'sector6-platform11',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.4)
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
								name: 'sector6-platform12',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageWidth) + (stageUnit * 2),
										y: winH - (stageUnit * 53.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform13',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 1.5)
									},
									start: {
										x: (stageWidth),
										y: winH - (stageUnit * 51.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform14',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 5),
										y: winH - (stageUnit * 54)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 6 terrain
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
					// sector 7
					{
						name: 'sector7',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 7),
							end: winH - (stageHeight * 6)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 7 terrain
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 5),
										y: winH - (stageUnit * 54)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.4)
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
								name: 'sector7-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageWidth) + (stageUnit * 14),
										y: winH - (stageUnit * 58.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageWidth) + (stageUnit * 10),
										y: winH - (stageUnit * 57.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform03',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageWidth) + (stageUnit * 7),
										y: winH - (stageUnit * 59.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageWidth) + (stageUnit * 6),
										y: winH - (stageUnit * 55.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageWidth) + (stageUnit * 2),
										y: winH - (stageUnit * 53.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform06',
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
								name: 'sector7-platform07',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.4)
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
								name: 'sector7-platform08',
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
								name: 'sector7-platform09',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.6)
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
								name: 'sector7-platform10',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 8),
										y: winH - (stageUnit * 63)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 7 terrain
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
								name: 'level08-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider01',
									phaser: {
										width: spider01.width,
										height: spider01.height,
										health: 5
									},
									start: {
										x: (stageUnit * 20),
										y: winH - (stageUnit * 59)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 5,
									score: 1500,
									movement: {
										speed: spider01.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 8
					{
						name: 'sector8',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 8),
							end: winH - (stageHeight * 7)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 8 terrain
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 8),
										y: winH - (stageUnit * 63)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform02',
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
								name: 'sector8-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.4)
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
								name: 'sector8-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.3)
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
								name: 'sector8-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.4)
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
								name: 'sector8-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.8)
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
							// end sector 8 terrain
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
					}
					]
				},
				// foreground
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
				// controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level07Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level07Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Orange',
							score: 10000,
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
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 15),
								y: winH - (stageUnit * 72)
							}
						}
					}
					]
				}
				]
			},
			// level 8
			{
				name: 'level08',
				text: 'the smokey ridge',
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
					'whiteRect',
					'ovalMask',
					'level08Title',
					'goalFlag',
					'mountainBackgroundC3',
					'mountainBackgroundC4',
					'mountainBackgroundC5',
					'mountainBackgroundC6',
					'mountainBackgroundD3',
					'mountainBackgroundD4',
					'mountainBackgroundD5',
					'mountainBackgroundD6',
					'mountainBackgroundE3',
					'mountainBackgroundE4',
					'mountainBackgroundE5',
					'mountainBackgroundE6',
					'woodenArrowSign01Right',
					'platformV',
					'platform',
					'rockPlatform01',
					'rockPlatform02',
					'rockPlatform03',
					'rockPlatform04',
					'invisibleRect',
					'heart',
					'crystals02Grey',
					'crystals02Pink'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'rockPlatform01Animated',
					'spider01',
					'heartSprite',
					'keke'
				],
				attrs: [
				// scenery
				{
					name: 'scenery',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'mountainBackgroundC6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundC6',
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
						name: 'mountainBackgroundD6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundD6',
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
						name: 'mountainBackgrounE6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundE6',
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
						name: 'mountainBackgroundC5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundC5',
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
						name: 'mountainBackgroundD5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundD5',
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
						name: 'mountainBackgroundE5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundE5',
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
						name: 'mountainBackgroundC4',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundC4',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH - (stageHeight * 6)
							}
						}
					},
					{
						name: 'mountainBackgroundD4',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundD4',
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
						name: 'mountainBackgroundE4',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundE4',
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
						name: 'mountainBackgroundC3',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundC3',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH - (stageHeight * 8)
							}
						}
					},
					{
						name: 'mountainBackgroundD3',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundD3',
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
						name: 'mountainBackgroundE3',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundE3',
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
				// terrain
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
								y: winH - (stageHeight * 8)
							},
							phaser: {
								width: 16,
								height: stageHeight * 8
							},
							physics: {
								immovable: true
							}
						}
					},
					{
						name: 'ground0',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform01',
							phaser: {
								width: (stageWidth/4),
								height: (stageUnit)
							},
							start: {
								x: (winW/2 - stageWidth/8),
								y: winH - (stageUnit * 0.7)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last left platform sector 1:
					{
						name: 'sector1-platform07',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 4),
								y: winH - (stageUnit * 9)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last right platform sector 1:
					{
						name: 'sector1-platform05',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 15),
								y: winH - (stageUnit * 9)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last left platform sector 2: 
					{
						name: 'sector2-platform01',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 6),
								y: winH - (stageUnit * 18)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last right platform sector 2: 
					{
						name: 'sector2-platform06',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 14),
								y: winH - (stageUnit * 18)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last left platform sector 3:
					{
						name: 'sector3-platform01',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 1),
								y: winH - (stageUnit * 27)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last right platform sector 3:
					{
						name: 'sector3-platform06',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageWidth) + (stageUnit * 4),
								y: winH - (stageUnit * 27)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last left platform sector 4: 
					{
						name: 'sector4-platform01',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 4),
								y: winH - (stageUnit * 33)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last right platform sector 4:
					{
						name: 'sector4-platform06',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 25),
								y: winH - (stageUnit * 36)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last right platform sector 5:
					{
						name: 'sector5-platform12',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageWidth) + (stageUnit * 7),
								y: winH - (stageUnit * 45)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last left platform sector 6:
					{
						name: 'sector6-platform13',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageWidth),
								y: winH - (stageUnit * 51.0)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last right platform sector 6:
					{
						name: 'sector6-platform14',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 5),
								y: winH - (stageUnit * 54)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last right platform sector 7:
					{
						name: 'sector7-platform10',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 12),
								y: winH - (stageUnit * 63)
							},
							physics: {
								immovable: true
							}
						}
					},
					// last right platform sector 8:
					{
						name: 'sector8-platform06',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 3),
								height: (stageUnit * 1)
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
					]
				},
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.VERTICAL,
					attrs: [
					// sector 1
					{
						name: 'sector1',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight),
							end: winH
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 1 terrain
							/////////// start left
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 2),
										y: winH - (stageUnit * 3)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1.5)
									},
									start: {
										x: (stageUnit * 4),
										y: winH - (stageUnit * 2.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: 0,
										y: winH - (stageUnit * 4.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 3),
										y: winH - (stageUnit * 6.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 1),
										y: winH - (stageUnit * 8.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							/////////// end left / start right
							{
								name: 'sector1-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 7),
										y: winH - (stageUnit * 4.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 10),
										y: winH - (stageUnit * 4.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 12),
										y: winH - (stageUnit * 6.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 13),
										y: winH - (stageUnit * 8)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 1 terrain
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
										width: (stageWidth * 3),
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
					// sector 2
					{
						name: 'sector2',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 2),
							end: winH - (stageHeight)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 2 terrain
							/////////// start left
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 0.5),
										y: winH - (stageUnit * 10.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 1.5),
										y: winH - (stageUnit * 12)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 3),
										y: winH - (stageUnit * 14)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 5),
										y: winH - (stageUnit * 16)
									},
									physics: {
										immovable: true
									}
								}
							},
							/////////// end left / start right
							{
								name: 'sector2-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 13),
										y: winH - (stageUnit * 11)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageUnit * 11),
										y: winH - (stageUnit * 13)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
									},
									start: {
										x: (stageUnit * 10),
										y: winH - (stageUnit * 15)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 12),
										y: winH - (stageUnit * 16)
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
							name: 'enemies',
							cl: 'Enemies',
							attrs: [] 
						}
						]
					},
					// sector 3
					{
						name: 'sector3',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 3),
							end: winH - (stageHeight * 2)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 3 terrain
							/////////// start left
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 4),
										y: winH - (stageUnit * 20)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 1),
										y: winH - (stageUnit * 22)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 4),
										y: winH - (stageUnit * 24)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 2),
										y: winH - (stageUnit * 26)
									},
									physics: {
										immovable: true
									}
								}
							},
							/////////// end left / start right
							{
								name: 'sector3-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 3),
										height: (stageUnit * 0.7)
									},
									start: {
										x: (stageUnit * 10),
										y: winH - (stageUnit * 20)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 10),
										y: (stageUnit * 20)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector3-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.9)
									},
									start: {
										x: (stageUnit * 13.5),
										y: winH - (stageUnit * 22)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageWidth),
										y: winH - (stageUnit * 24)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 3),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageWidth) + (stageUnit * 3),
										y: winH - (stageUnit * 25.5)
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
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level08-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider01',
									phaser: {
										width: spider01.width,
										height: spider01.height,
										health: 5
									},
									start: {
										x: (stageUnit * 13),
										y: winH - (stageUnit * 24)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 5,
									score: 1500,
									movement: {
										speed: spider01.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 4
					{
						name: 'sector4',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 4),
							end: winH - (stageHeight * 3)
						},
						attrs: [
						{	
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 4 terrain
							/////////// start left
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 4),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 0.5),
										y: winH - (stageUnit * 29)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageUnit * 2),
										y: winH - (stageUnit * 31)
									},
									physics: {
										immovable: true
									}
								}
							},
							/////////// end left / start right
							{
								name: 'sector4-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageWidth) + (stageUnit * 1),
										y: winH - (stageUnit * 28.5)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector4-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageWidth) + (stageUnit * 3),
										y: winH - (stageUnit * 30.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.9)
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
								name: 'sector4-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
									},
									start: {
										x: (stageWidth) + (stageUnit * 8),
										y: winH - (stageUnit * 34.0)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 4 terrain
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
					// sector 5
					{
						name: 'sector5',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 5),
							end: winH - (stageHeight * 4)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 5 terrain
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 7),
										y: winH - (stageUnit * 36.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
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
								name: 'sector5-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 10),
										y: winH - (stageUnit * 37)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
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
								name: 'sector5-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2.5),
										height: (stageUnit * 0.9)
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
								name: 'sector5-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
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
								name: 'sector5-platform07',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
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
								name: 'sector5-platform08',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 4),
										y: winH - (stageUnit * 41)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform09',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.9)
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
								name: 'sector5-platform10',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
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
								name: 'sector5-platform11',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.9)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 5),
										y: winH - (stageUnit * 44.0)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 5 terrain
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
								name: 'level08-sector5-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider01',
									phaser: {
										width: spider01.width,
										height: spider01.height,
										health: 5
									},
									start: {
										x: (stageUnit * 17),
										y: winH - (stageUnit * 40)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 5,
									score: 1500,
									movement: {
										speed: spider01.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 6
					{
						name: 'sector6',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 6),
							end: winH - (stageHeight * 5)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 6 terrain
							{
								name: 'sector6-platform01',
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
								name: 'sector6-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth) + (stageUnit * 8),
										y: winH - (stageUnit * 46.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.6)
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
								name: 'sector6-platform07',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2.5),
										height: (stageUnit * 0.6)
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
								name: 'sector6-platform09',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageWidth) + (stageUnit * 13),
										y: winH - (stageUnit * 51.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform12',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageWidth) + (stageUnit * 2),
										y: winH - (stageUnit * 53.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							/////////// end left / start right
							{
								name: 'sector6-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
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
								name: 'sector6-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
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
								name: 'sector6-platform08',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.6)
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
								name: 'sector6-platform10',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
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
								name: 'sector6-platform11',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageUnit * 41),
										y: winH - (stageUnit * 48)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform11',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageUnit * 43),
										y: winH - (stageUnit * 50.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform11',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 9),
										y: winH - (stageUnit * 53.0)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 6 terrain
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
								name: 'level08-sector6-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider01',
									phaser: {
										width: spider01.width,
										height: spider01.height,
										health: 5
									},
									start: {
										x: (stageUnit * 21),
										y: winH - (stageUnit * 51)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 5,
									score: 1500,
									movement: {
										speed: spider01.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 7
					{
						name: 'sector7',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 7),
							end: winH - (stageHeight * 6)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector7-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 3),
										y: winH - (stageUnit * 56)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageWidth * 2),
										y: winH - (stageUnit * 58.0)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector7-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageWidth) + (stageUnit * 12),
										y: winH - (stageUnit * 57.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform03',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 1)
									},
									start: {
										x: (stageWidth) + (stageUnit * 9),
										y: winH - (stageUnit * 59.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.8)
									},
									start: {
										x: (stageWidth) + (stageUnit * 6),
										y: winH - (stageUnit * 55.0)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector7-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.4)
									},
									start: {
										x: (stageWidth) + (stageUnit * 2),
										y: winH - (stageUnit * 53.0)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform06',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 5),
										y: winH - (stageUnit * 57.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform07',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.4)
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
								name: 'sector7-platform08',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
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
								name: 'sector7-platform09',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.6)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 11),
										y: winH - (stageUnit * 62.0)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 7 terrain
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
								name: 'level08-sector5-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider01',
									phaser: {
										width: spider01.width,
										height: spider01.height,
										health: 5
									},
									start: {
										x: (stageUnit * 42),
										y: winH - (stageUnit * 61)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 5,
									score: 1500,
									movement: {
										speed: spider01.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 8
					{
						name: 'sector8',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 8),
							end: winH - (stageHeight * 7)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 8 terrain
							{
								name: 'sector8-platform02',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.3)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 9),
										y: winH - (stageUnit * 65)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform03',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.3)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 7),
										y: winH - (stageUnit * 66.5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform04',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.3)
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
								name: 'sector8-platform05',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.3)
									},
									start: {
										x: (stageWidth * 2) + (stageUnit * 11),
										y: winH - (stageUnit * 69.0)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 8 terrain
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
					}
					]
				},
				// foreground
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
				// level controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level08Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level08Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Pink',
							score: 10000,
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 1.5),
								y: winH - (stageUnit * 37)
							}
						}
					}
					]
				},
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageWidth * 2) + (stageUnit * 15),
								y: winH - (stageUnit * 72)
							}
						}
					}
					]
				}
				]
			},
			// level 9
			{
				name: 'level09',
				text: 'somber summit',
				cl: 'LevelState',
				world: {
					x: 0,
					y: -(stageHeight * 8) + winH,
					width: stageWidth * 4,
					height: stageHeight * 8
				},
				clearWorld: true,
				clearCache: false,
				bounds: {
					start: 0,
					end: (stageWidth * 4) - (stageUnit * 1)
				},
				pausable: true,
				backgroundColor: '#000000',
				images: [
					'whiteRect',
					'ovalMask',
					'level09Title',
					'goalFlag',
					'mountainBackgroundE1',
					'mountainBackgroundE2',
					'mountainBackgroundE3',
					'mountainBackgroundE4',
					'mountainBackgroundF1',
					'mountainBackgroundF2',
					'mountainBackgroundF3',
					'mountainBackgroundF4',
					'mountainBackgroundG1',
					'mountainBackgroundG2',
					'mountainBackgroundG3',
					'mountainBackgroundG4',
					'mountainBackgroundH1',
					'mountainBackgroundH2',
					'mountainBackgroundH3',
					'mountainBackgroundH4',
					'tree01',
					'platformV',
					'platform',
					'rockPlatform01',
					'rockPlatform02',
					'rockPlatform03',
					'rockPlatform04',
					'invisibleRect',
					'lollipop',
					'crystals02Grey',
					'crystals02Teal'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'rockPlatform01Animated',
					'spider02',
					'heartSprite',
					'keke'
				],
				attrs: [
				// scenery
				{
					name: 'scenery',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'mountainBackgroundE4',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundE4',
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
						name: 'mountainBackgroundF4',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundF4',
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
						name: 'mountainBackgrounG4',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundG4',
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
						name: 'mountainBackgroundH4',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundH4',
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
						name: 'mountainBackgroundE3',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundE3',
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
						name: 'mountainBackgroundF3',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundF3',
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
						name: 'mountainBackgroundG3',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundG3',
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
						name: 'mountainBackgroundH3',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundH3',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageHeight * 4)
							}
						}
					},
					{
						name: 'mountainBackgroundE2',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundE2',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH - (stageHeight * 6)
							}
						}
					},
					{
						name: 'mountainBackgroundF2',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundF2',
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
						name: 'mountainBackgroundG2',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundG2',
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
						name: 'mountainBackgroundH2',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundH2',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageHeight * 6)
							}
						}
					},
					{
						name: 'mountainBackgroundE1',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundE1',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH - (stageHeight * 8)
							}
						}
					},
					{
						name: 'mountainBackgroundF1',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundF1',
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
						name: 'mountainBackgroundG1',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundG1',
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
					},
					{
						name: 'mountainBackgroundH1',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundH1',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageHeight * 8)
							}
						}
					}
					]
				},
				// terrain
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
								y: winH - (stageHeight * 8)
							},
							phaser: {
								width: 16,
								height: (stageHeight * 8)
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
								x: (stageWidth * 4),
								y: winH - (stageHeight * 8)
							},
							phaser: {
								width: 16,
								height: (stageHeight * 8)
							},
							physics: {
								immovable: true
							}
						}
					},
					{
						name: 'ground0',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform01',
							phaser: {
								width: (stageWidth/4),
								height: (stageUnit)
							},
							start: {
								x: (winW/2 - stageWidth/8),
								y: winH - (stageUnit * 0.5)
							},
							physics: {
								immovable: true
							}
						}
					},
					// left sector 1 platform
					{
						name: 'sector1-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 24),
								y: winH - (stageUnit * 9)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// right sector 1 platform
					{
						name: 'sector1-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 55),
								y: winH - (stageUnit * 9)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// left sector 2 platform
					{
						name: 'sector2-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 3),
								y: winH - (stageUnit * 18)
							},
							physics: {
								immovable: true
							}
						}
					},
					// right sector 2 platform
					{
						name: 'sector2-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 46),
								y: winH - (stageUnit * 18)
							},
							physics: {
								immovable: true
							}
						}
					},
					// left sector 3 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: 0,
								y: winH - (stageUnit * 27)
							},
							physics: {
								immovable: true
							}
						}
					},
					// right sector 3 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 52),
								y: winH - (stageUnit * 27)
							},
							physics: {
								immovable: true
							}
						}
					},
					// left sector 4 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 21),
								y: winH - (stageUnit * 36)
							},
							physics: {
								immovable: true
							}
						}
					},
					// right sector 4 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 47),
								y: winH - (stageUnit * 36)
							},
							physics: {
								immovable: true
							}
						}
					},
					// left sector 5 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 18),
								y: winH - (stageUnit * 45)
							},
							physics: {
								immovable: true
							}
						}
					},
					// right sector 5 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 47),
								y: winH - (stageUnit * 45)
							},
							physics: {
								immovable: true
							}
						}
					},
					// left sector 6 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 18),
								y: winH - (stageUnit * 54)
							},
							physics: {
								immovable: true
							}
						}
					},
					// right sector 6 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 41),
								y: winH - (stageUnit * 54)
							},
							physics: {
								immovable: true
							}
						}
					},
					// left sector 7 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 30),
								y: winH - (stageUnit * 63)
							},
							physics: {
								immovable: true
							}
						}
					},
					// right sector 7 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 35),
								y: winH - (stageUnit * 63)
							},
							physics: {
								immovable: true
							}
						}
					}
					]
				},
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.VERTICAL,
					attrs: [
					// sector 1
					{
						name: 'sector1',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight),
							end: winH
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 1 terrain
							// left
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 3),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 6),
										y: winH - (stageUnit * 4)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2.1),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 11),
										y: winH - (stageUnit * 5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2.1),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 16),
										y: winH - (stageUnit * 6)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2.1),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 19),
										y: winH - (stageUnit * 8)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right
							{
								name: 'sector1-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 58),
										y: winH - (stageUnit * 7)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 62),
										y: winH - (stageUnit * 7)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 1 terrain
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
										width: (stageWidth * 4),
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
					// sector 2
					{
						name: 'sector2',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 2),
							end: winH - (stageHeight)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 2 terrain
							// left
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 21),
										y: winH - (stageUnit * 11)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 16),
										y: winH - (stageUnit * 12)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 13),
										y: winH - (stageUnit * 14)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 9),
										y: winH - (stageUnit * 16)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 6),
										y: winH - (stageUnit * 17)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 52),
										y: winH - (stageUnit * 12)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 49),
										y: winH - (stageUnit * 15)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							}
							// end sector 2 terrain
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
								name: 'level09-sector2-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 16),
										y: winH - (stageUnit * 16)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 10,
									score: 2500,
									jumps: true,
									jumpMultiplier: 150,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 3
					{
						name: 'sector3',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 3),
							end: winH - (stageHeight * 2)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 3 terrain
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: 0,
										y: winH - (stageUnit * 19)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 2),
										y: winH - (stageUnit * 21)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 5),
										y: winH - (stageUnit * 23)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 2),
										y: winH - (stageUnit * 25)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 7),
										y: winH - (stageUnit * 19)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 12),
										y: winH - (stageUnit * 20)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 22),
										y: winH - (stageUnit * 21)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 26),
										y: winH - (stageUnit * 23)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 17),
										y: winH - (stageUnit * 21)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 14),
										y: winH - (stageUnit * 23)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 9),
										y: winH - (stageUnit * 24)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 11),
										y: winH - (stageUnit * 26)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right 
							{
								name: 'sector3-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 48),
										y: winH - (stageUnit * 21)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 50),
										y: winH - (stageUnit * 24)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							}
							// end sector 3 terrain
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
								name: 'level09-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 2),
										y: winH - (stageUnit * 23)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 10,
									score: 2500,
									jumps: true,
									jumpMultiplier: 150,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
									phaser: { 
										width: (stageUnit * 0.5), 
										height: (stageUnit) 
									},
									start: {
										x: (stageUnit * 26),
										y: winH - (stageUnit * 24)
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
					// sector 4
					{
						name: 'sector4',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 4),
							end: winH - (stageHeight * 3)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 4 terrain
							// left
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: 0,
										y: winH - (stageUnit * 29)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 3),
										y: winH - (stageUnit * 31)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 8),
										y: winH - (stageUnit * 31)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 12),
										y: winH - (stageUnit * 31)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 16),
										y: winH - (stageUnit * 31)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 14),
										y: winH - (stageUnit * 33)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 18),
										y: winH - (stageUnit * 34)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right
							{
								name: 'sector4-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 49),
										y: winH - (stageUnit * 28)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 52),
										y: winH - (stageUnit * 31)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 49),
										y: winH - (stageUnit * 33)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							}
							// end sector 4 terrain
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
								name: 'level09-sector4-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 20),
										y: winH - (stageUnit * 33)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 10,
									score: 2500,
									jumps: true,
									jumpMultiplier: 150,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 5
					{
						name: 'sector5',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 5),
							end: winH - (stageHeight * 4)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 5 terrain
							// left
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 24),
										y: winH - (stageUnit * 38)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 27),
										y: winH - (stageUnit * 40)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 30),
										y: winH - (stageUnit * 42)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 23),
										y: winH - (stageUnit * 41)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 20),
										y: winH - (stageUnit * 43)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 15),
										y: winH - (stageUnit * 42)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 12),
										y: winH - (stageUnit * 40)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 51),
										y: winH - (stageUnit * 39)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 49),
										y: winH - (stageUnit * 48)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 54),
										y: winH - (stageUnit * 43)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 59),
										y: winH - (stageUnit * 44)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							}
							// end sector 5 terrain
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
								name: 'level09-sector5-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 19),
										y: winH - (stageUnit * 41)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 15,
									score: 2500,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							}
							] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level09-sector5-bonus1',
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { 
										width: (stageUnit * 0.5), 
										height: (stageUnit) 
									},
									start: {
										x: (stageUnit * 30),
										y: winH - (stageUnit * 43)
									},
									physics: {
										immovable: true
									},
									score: 200,
									health: 20
								}
							}
							]
						}
						]
					},
					// sector 6
					{
						name: 'sector6',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 6),
							end: winH - (stageHeight * 5)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 6 terrain
							// left
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 21),
										y: winH - (stageUnit * 47)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 26),
										y: winH - (stageUnit * 47)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 18),
										y: winH - (stageUnit * 48)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 15),
										y: winH - (stageUnit * 49)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 23),
										y: winH - (stageUnit * 50)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 28),
										y: winH - (stageUnit * 49)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 11),
										y: winH - (stageUnit * 51)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 20),
										y: winH - (stageUnit * 52)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 45),
										y: winH - (stageUnit * 48)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 43),
										y: winH - (stageUnit * 51)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 46),
										y: winH - (stageUnit * 53)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 6 terrain
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
								name: 'level09-sector6-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 10),
										y: winH - (stageUnit * 53)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 15,
									score: 2500,
									jumps: true,
									jumpMultiplier: 150,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 7
					{
						name: 'sector7',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 7),
							end: winH - (stageHeight * 6)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 7 terrain
							// left
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 22),
										y: winH - (stageUnit * 55)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 15),
										y: winH - (stageUnit * 56)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 24),
										y: winH - (stageUnit * 57)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 17),
										y: winH - (stageUnit * 59)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 22),
										y: winH - (stageUnit * 59)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 26),
										y: winH - (stageUnit * 61)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 37),
										y: winH - (stageUnit * 60)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 39),
										y: winH - (stageUnit * 57)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							}
							// end sector 7 terrain
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
								name: 'level09-sector7-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 31),
										y: winH - (stageUnit * 59)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 15,
									score: 2500,
									jumps: true,
									jumpMultiplier: 150,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 8
					{
						name: 'sector8',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight * 8),
							end: winH - (stageHeight * 7)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// start sector 8 terrain
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 27),
										y: winH - (stageUnit * 64)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 38),
										y: winH - (stageUnit * 64)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 33),
										y: winH - (stageUnit * 65)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 35),
										y: winH - (stageUnit * 66)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 30),
										y: winH - (stageUnit * 67)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 33),
										y: winH - (stageUnit * 69)
									},
									physics: {
										immovable: true
									}
								}
							}
							// end sector 8 terrain
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
					}
					]
				},
				// foreground
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
				// controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level09Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level09Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Teal',
							score: 10000,
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 27),
								y: winH - (stageUnit * 42)
							}
						}
					}
					]
				},
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageUnit * 62),
								y: winH - (stageUnit * 10)
							}
						}
					}
					]
				}
				]
			},
			// level 10
			{
				name: 'level10',
				text: 'the clouded bluff',
				cl: 'LevelState',
				world: {
					x: 0,
					y: winH - (stageHeight),
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
					'whiteRect',
					'ovalMask',
					'level10Title',
					'goalFlag',
					'mountainBackgroundH3a',
					'mountainBackgroundH4a',
					'mountainBackgroundH5',
					'mountainBackgroundH6',
					'mountainBackgroundI3',
					'mountainBackgroundI4',
					'mountainBackgroundI5',
					'mountainBackgroundI6',
					'mountainBackgroundJ3',
					'mountainBackgroundJ4',
					'mountainBackgroundJ5',
					'mountainBackgroundJ6',
					'platformV',
					'platform',
					'rockPlatform01',
					'rockPlatform02',
					'rockPlatform03',
					'rockPlatform04',
					'invisibleRect',
					'lollipop',
					'crystals02Grey',
					'crystals02Yellow'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'spider02',
					'spider03',
					'heartSprite',
					'keke'
				],
				attrs: [
				// scenery
				{
					name: 'scenery',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'mountainBackgroundH3',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundH3a',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH - (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgroundI3',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundI3',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: stageWidth,
								y: winH - (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgrounJ3',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundJ3',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH - (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgroundH4',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundH4a',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH + (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgroundI4',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundI4',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: stageWidth,
								y: winH + (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgrounJ4',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundJ4',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH + (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgroundH5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundH5',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH + (stageHeight * 3)
							}
						}
					},
					{
						name: 'mountainBackgroundI5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundI5',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: stageWidth,
								y: winH + (stageHeight * 3)
							}
						}
					},
					{
						name: 'mountainBackgrounJ5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundJ5',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH + (stageHeight * 3)
							}
						}
					},
					{
						name: 'mountainBackgroundH6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundH6',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH + (stageHeight * 5)
							}
						}
					},
					{
						name: 'mountainBackgroundI6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundI6',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: stageWidth,
								y: winH + (stageHeight * 5)
							}
						}
					},
					{
						name: 'mountainBackgrounJ6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundJ6',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH + (stageHeight * 5)
							}
						}
					}
					]
				},
				// terrain
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
								y: winH - (stageHeight)
							},
							phaser: {
								width: 16,
								height: stageHeight * 8
							},
							physics: {
								immovable: true
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
								height: (stageUnit)
							},
							start: {
								x: (stageUnit * 7),
								y: winH - (stageUnit * 0.5)
							},
							physics: {
								immovable: true
							}
						}
					},
					// sector 2 platform
					{
						name: 'sector2-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 24),
								y: winH
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 3 platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 32),
								y: winH + (stageUnit * 9)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 4 platform
					{
						name: 'sector4-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 35),
								y: winH + (stageUnit * 18)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 5 left platform
					{
						name: 'sector5-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 21),
								y: winH + (stageUnit * 27)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 5 right platform
					{
						name: 'sector5-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 32),
								y: winH + (stageUnit * 27)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 6 left platform
					{
						name: 'sector6-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 18),
								y: winH + (stageUnit * 36)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 6 right platform
					{
						name: 'sector6-endPlatform2',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 42),
								y: winH + (stageUnit * 36)
							},
							physics: {
								immovable: true
							}
						}
					},
					// sector 7 right platform
					{
						name: 'sector7-endPlatform2',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 37),
								y: winH + (stageUnit * 45)
							},
							physics: {
								immovable: true
							}
						}
					},
					// sector 8 right platform
					{
						name: 'sector8-endPlatform2',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 36),
								y: winH + (stageUnit * 54)
							},
							physics: {
								immovable: true
							}
						}
					}
					]
				},
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.VERTICAL,
					attrs: [
					// sector 1
					{
						name: 'sector1',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight),
							end: winH
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 1),
										y: winH - (stageUnit * 4)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 4),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 12),
										y: winH - (stageUnit * 1)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 14),
										y: winH - (stageUnit * 3)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 17),
										y: winH - (stageUnit * 4)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector1-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 20),
										y: winH - (stageUnit * 1)
									},
									physics: {
										immovable: true
									}
								}
							}
							]
						},
						{
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level10-sector1-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 16),
										y: winH - (stageUnit * 6)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							}
							] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level10-sector4-bonus1',
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { 
										width: (stageUnit * 0.5), 
										height: (stageUnit) 
									},
									start: {
										x: (stageUnit * 1),
										y: winH - (stageUnit * 5)
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
					// sector 2
					{
						name: 'sector2',
						cl: 'Sector',
						bounds: {
							start: winH,
							end: winH + (stageHeight)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 17),
										y: winH + (stageUnit * 2)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 22),
										y: winH + (stageUnit * 3)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 18),
										y: winH + (stageUnit * 5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 29),
										y: winH + (stageUnit * 5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 19),
										y: winH + (stageUnit * 7)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 27),
										y: winH + (stageUnit * 7)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 31),
										y: winH + (stageUnit * 7)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 16),
										y: winH + (stageUnit * 8)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 23),
										y: winH + (stageUnit * 8)
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
							attrs: [
							{
								name: 'level10-sector2-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 16),
										y: winH + (stageUnit * 3)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							},
							{
								name: 'level10-sector2-enemy2',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 40),
										y: winH + (stageUnit * 8)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 15,
									score: 2500,
									jumps: true,
									jumpMultiplier: 150,
									jumps: true,
									jumpMultiplier: 150,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 3
					{
						name: 'sector3',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight),
							end: winH + (stageHeight * 2)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 29),
										y: winH + (stageUnit * 12)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 22),
										y: winH + (stageUnit * 13)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 26),
										y: winH + (stageUnit * 13)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 16),
										y: winH + (stageUnit * 14)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 20),
										y: winH + (stageUnit * 15)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 31),
										y: winH + (stageUnit * 15)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 33),
										y: winH + (stageUnit * 16)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 18),
										y: winH + (stageUnit * 17)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 38),
										y: winH + (stageUnit * 17)
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
							attrs: [
							{
								name: 'level10-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 4),
										y: winH + (stageUnit * 10)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							},
							{
								name: 'level10-sector3-enemy2',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 40),
										y: winH + (stageUnit * 15)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 15,
									score: 2500,
									jumps: true,
									jumpMultiplier: 150,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							}
							] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level10-sector3-bonus1',
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { 
										width: (stageUnit * 0.5), 
										height: (stageUnit) 
									},
									start: {
										x: (stageUnit * 16),
										y: winH + (stageUnit * 13)
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
					// sector 4
					{
						name: 'sector4',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight * 2),
							end: winH + (stageHeight * 3)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 32),
										y: winH + (stageUnit * 20)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 21),
										y: winH + (stageUnit * 22)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 25),
										y: winH + (stageUnit * 22)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 30),
										y: winH + (stageUnit * 22)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 16),
										y: winH + (stageUnit * 23)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 28),
										y: winH + (stageUnit * 23)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 33),
										y: winH + (stageUnit * 23)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 37),
										y: winH + (stageUnit * 23)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 41),
										y: winH + (stageUnit * 23)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 46),
										y: winH + (stageUnit * 23)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 20),
										y: winH + (stageUnit * 24)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 43),
										y: winH + (stageUnit * 25)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 22),
										y: winH + (stageUnit * 26)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 36),
										y: winH + (stageUnit * 26)
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
							attrs: [
							{
								name: 'level10-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 4),
										y: winH + (stageUnit * 18)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							},
							{
								name: 'level10-sector3-enemy2',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 40),
										y: winH + (stageUnit * 25)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 15,
									score: 2500,
									jumps: true,
									jumpMultiplier: 150,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							}
							] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level10-sector4-bonus1',
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { 
										width: (stageUnit * 0.5), 
										height: (stageUnit) 
									},
									start: {
										x: (stageUnit * 47),
										y: winH + (stageUnit * 22)
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
					// sector 5
					{
						name: 'sector5',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight * 3),
							end: winH + (stageHeight * 4)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 17),
										y: winH + (stageUnit * 28)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 18),
										y: winH + (stageUnit * 30)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 29),
										y: winH + (stageUnit * 30)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 16),
										y: winH + (stageUnit * 31)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 20),
										y: winH + (stageUnit * 32)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 31),
										y: winH + (stageUnit * 32)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 36),
										y: winH + (stageUnit * 33)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 23),
										y: winH + (stageUnit * 34)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 34),
										y: winH + (stageUnit * 34)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 40),
										y: winH + (stageUnit * 34)
									},
									physics: {
										immovable: true
									}
								}
							},
							// {
							// 	name: 'sector5-platform01',
							// 	cl: 'Sprite',
							// 	attrs: {
							// 		img: 'rockPlatform01',
							// 		phaser: {
							// 			width: (stageUnit * 1.5),
							// 			height: (stageUnit * 0.5)
							// 		},
							// 		start: {
							// 			x: (stageUnit * 16),
							// 			y: winH + (stageUnit * 35)
							// 		},
							// 		physics: {
							// 			immovable: true
							// 		}
							// 	}
							// },
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 21),
										y: winH + (stageUnit * 35)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 44),
										y: winH + (stageUnit * 35)
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
							attrs: [
							{
								name: 'level10-sector5-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 4),
										y: winH + (stageUnit * 29)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 15,
									score: 2500,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							},
							{
								name: 'level10-sector5-enemy2',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 40),
										y: winH + (stageUnit * 33)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 6
					{
						name: 'sector6',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight * 4),
							end: winH + (stageHeight * 5)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 14.5),
										y: winH + (stageUnit * 38)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 39),
										y: winH + (stageUnit * 38)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 11),
										y: winH + (stageUnit * 39)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 34),
										y: winH + (stageUnit * 39)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 13),
										y: winH + (stageUnit * 41)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 25),
										y: winH + (stageUnit * 41)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 37),
										y: winH + (stageUnit * 41)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 23),
										y: winH + (stageUnit * 42)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 15),
										y: winH + (stageUnit * 43)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 35),
										y: winH + (stageUnit * 43)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 17),
										y: winH + (stageUnit * 44)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 21),
										y: winH + (stageUnit * 44)
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
							attrs: [
							{
								name: 'level10-sector5-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 4),
										y: winH + (stageUnit * 38)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							},
							{
								name: 'level10-sector5-enemy2',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider02',
									phaser: {
										width: spider02.width,
										height: spider02.height,
										health: 30
									},
									start: {
										x: (stageUnit * 40),
										y: winH + (stageUnit * 43)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 15,
									score: 2500,
									movement: {
										speed: spider02.speed,
										type: Polyworks.MovementTypes.HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							}
							] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level10-sector6-bonus1',
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { 
										width: (stageUnit * 0.5), 
										height: (stageUnit) 
									},
									start: {
										x: (stageUnit * 34),
										y: winH - (stageUnit * 39)
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
					// sector 7
					{
						name: 'sector7',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight * 5),
							end: winH + (stageHeight * 6)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 40),
										y: winH + (stageUnit * 48)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 44),
										y: winH + (stageUnit * 50)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 41),
										y: winH + (stageUnit * 52)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 38),
										y: winH + (stageUnit * 33)
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
							attrs: [] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: []
						}
						]
					},
					// sector 8
					{
						name: 'sector8',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight * 6),
							end: winH + (stageHeight * 7)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 31),
										y: winH + (stageUnit * 56)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 33),
										y: winH + (stageUnit * 58)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 35),
										y: winH + (stageUnit * 60)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector8-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 38),
										y: winH + (stageUnit * 62)
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
										width: (stageWidth * 3),
										height: 32
									},
									start: {
										x: 0,
										y: winH + (stageHeight * 7)
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
				// foreground
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
				// controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level10Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level10Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Yellow',
							score: 10000,
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 25),
								y: winH + (stageUnit * 39)
							}
						}
					}
					]
				},
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageUnit * 38),
								y: winH + (stageUnit * 59)
							}
						}
					}
					]
				}
				]
			},
			// level 11
			{
				name: 'level11',
				text: 'the ashen boot',
				cl: 'LevelState',
				world: {
					x: 0,
					y: winH - (stageHeight),
					width: stageWidth * 4,
					height: stageHeight * 8
				},
				clearWorld: true,
				clearCache: false,
				bounds: {
					start: 0,
					end: (stageWidth * 4) - (stageUnit * 1)
				},
				pausable: true,
				backgroundColor: '#000000',
				images: [
					'whiteRect',
					'ovalMask',
					'level11Title',
					'goalFlag',
					'mountainBackgroundI5',
					'mountainBackgroundI6',
					'mountainBackgroundI7',
					'mountainBackgroundI8',
					'mountainBackgroundJ5',
					'mountainBackgroundJ6',
					'mountainBackgroundJ7',
					'mountainBackgroundJ8',
					'mountainBackgroundK5',
					'mountainBackgroundK6',
					'mountainBackgroundK7',
					'mountainBackgroundK8',
					'mountainBackgroundL5',
					'mountainBackgroundL6',
					'mountainBackgroundL7',
					'mountainBackgroundL8',
					'platformV',
					'platform',
					'rockPlatform01',
					'rockPlatform02',
					'rockPlatform03',
					'rockPlatform04',
					'invisibleRect',
					'lollipop',
					'crystals02Grey',
					'crystals02Red'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'heartSprite',
					'rockPlatform01Animated',
					'spider03',
					'keke'
				],
				attrs: [
				// scenery
				{
					name: 'scenery',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'mountainBackgroundI5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundI5',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH - (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgroundJ5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundJ5',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: stageWidth,
								y: winH - (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgrounK5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundK5',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH - (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgrounL5',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundL5',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 3),
								y: winH - (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgroundI6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundI6',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH + (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgroundJ6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundJ6',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: stageWidth,
								y: winH + (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgrounK6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundK6',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH + (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgrounL6',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundL6',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 3),
								y: winH + (stageHeight)
							}
						}
					},
					{
						name: 'mountainBackgroundI7',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundI7',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH + (stageHeight * 3)
							}
						}
					},
					{
						name: 'mountainBackgroundJ7',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundJ7',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: stageWidth,
								y: winH + (stageHeight * 3)
							}
						}
					},
					{
						name: 'mountainBackgrounK7',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundK7',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH + (stageHeight * 3)
							}
						}
					},
					{
						name: 'mountainBackgrounL7',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundL7',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 3),
								y: winH + (stageHeight * 3)
							}
						}
					},
					{
						name: 'mountainBackgroundI8',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundI8',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: 0,
								y: winH + (stageHeight * 5)
							}
						}
					},
					{
						name: 'mountainBackgroundJ8',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundJ8',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: stageWidth,
								y: winH + (stageHeight * 5)
							}
						}
					},
					{
						name: 'mountainBackgrounK8',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundK8',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 2),
								y: winH + (stageHeight * 5)
							}
						}
					},
					{
						name: 'mountainBackgrounL8',
						cl: 'Sprite',
						attrs: {
							img: 'mountainBackgroundL8',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: (stageWidth * 3),
								y: winH + (stageHeight * 5)
							}
						}
					}
					]
				},
				// terrain
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
								y: winH - (stageHeight)
							},
							phaser: {
								width: 16,
								height: stageHeight * 8
							},
							physics: {
								immovable: true
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
								height: (stageUnit)
							},
							start: {
								x: (stageUnit * 7),
								y: winH - (stageUnit * 0.5)
							},
							physics: {
								immovable: true
							}
						}
					},
					// sector 3 left platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 7),
								y: winH + (stageUnit * 9)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 3 right platform
					{
						name: 'sector3-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 30),
								y: winH + (stageUnit * 9)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 4 left platform
					{
						name: 'sector4-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 12),
								y: winH + (stageUnit * 18)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 4 right platform
					{
						name: 'sector4-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 30),
								y: winH + (stageUnit * 18)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 5 left platform
					{
						name: 'sector5-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 4),
								y: winH + (stageUnit * 27)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 5 center platform
					{
						name: 'sector5-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 26),
								y: winH + (stageUnit * 27)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					// sector 5 right platforms
					{
						name: 'sector5-endPlatform1',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 42),
								y: winH + (stageUnit * 27)
							},
							physics: {
								immovable: true
							}
						}
					}, 
					{
						name: 'sector5-platform01',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform03',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 51),
								y: winH + (stageUnit * 28)
							},
							physics: {
								immovable: true
							}
						}
					},
					// sector 6 right platform
					{
						name: 'sector6-endPlatform2',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 46),
								y: winH + (stageUnit * 36)
							},
							physics: {
								immovable: true
							}
						}
					},
					// flag platform
					{
						name: 'sector6-flagPlatform',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform01',
							phaser: {
								width: (stageUnit * 3),
								height: (stageUnit * 0.5)
							},
							start: {
								x: (stageUnit * 31),
								y: winH + (stageUnit * 46)
							},
							physics: {
								immovable: true
							}
						}
					},
					// sector 7 right platform
					{
						name: 'sector7-endPlatform2',
						cl: 'Sprite',
						attrs: {
							img: 'rockPlatform02',
							phaser: {
								width: (stageUnit * 2),
								height: (stageUnit * 1)
							},
							start: {
								x: (stageUnit * 43),
								y: winH + (stageUnit * 45)
							},
							physics: {
								immovable: true
							}
						}
					}
					]
				},
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.VERTICAL,
					attrs: [
					// sector 1
					{
						name: 'sector1',
						cl: 'Sector',
						bounds: {
							start: winH - (stageHeight),
							end: winH
						},
						attrs: [
						]
					},
					// sector 2
					{
						name: 'sector2',
						cl: 'Sector',
						bounds: {
							start: winH,
							end: winH + (stageHeight)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// left
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 12),
										y: winH + (stageUnit * 2)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 14),
										y: winH + (stageUnit * 5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 10),
										y: winH + (stageUnit * 8)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 36),
										y: winH + (stageUnit * 5)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 39),
										y: winH + (stageUnit * 4)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 33),
										y: winH + (stageUnit * 7)
									},
									physics: {
										immovable: true
									}
								}
							}
							]
						},
						{
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level10-sector2-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 18),
										y: winH + (stageUnit * 6)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									// first spider
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
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
					// sector 3
					{
						name: 'sector3',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight),
							end: winH + (stageHeight * 2)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// left
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 3),
										y: winH + (stageUnit * 12)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 5),
										y: winH + (stageUnit * 15)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 1),
										y: winH + (stageUnit * 16)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 9),
										y: winH + (stageUnit * 17)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 28),
										y: winH + (stageUnit * 10)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 26),
										y: winH + (stageUnit * 12)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 32),
										y: winH + (stageUnit * 11)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 36),
										y: winH + (stageUnit * 12)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 29),
										y: winH + (stageUnit * 14)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 39),
										y: winH + (stageUnit * 14)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector3-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 27),
										y: winH + (stageUnit * 16)
									},
									physics: {
										immovable: true
									}
								}
							}
							]
						},
						{
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level10-sector3-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 14),
										y: winH + (stageUnit * 10)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							},
							{
								name: 'level10-sector3-enemy2',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 30),
										y: winH + (stageUnit * 10)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							},
							{
								name: 'level10-sector3-enemy3',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 60),
										y: winH + (stageUnit * 10)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							}
							] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level10-sector3-bonus1',
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { 
										width: (stageUnit * 0.5), 
										height: (stageUnit) 
									},
									start: {
										x: (stageUnit * 2),
										y: winH + (stageUnit * 15)
									},
									physics: {
										immovable: true
									},
									score: 100,
									health: 10
								}
							},
							{
								name: 'level10-sector3-bonus1',
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { 
										width: (stageUnit * 0.5), 
										height: (stageUnit) 
									},
									start: {
										x: (stageUnit * 40),
										y: winH + (stageUnit * 13)
									},
									physics: {
										immovable: true
									},
									score: 100,
									health: 10
								}
							},
							]
						}
						]
					},
					// sector 4
					{
						name: 'sector4',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight * 2),
							end: winH + (stageHeight * 3)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// left
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 10),
										y: winH + (stageUnit * 21)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 7),
										y: winH + (stageUnit * 22)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 5),
										y: winH + (stageUnit * 24)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 32),
										y: winH + (stageUnit * 20)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 35),
										y: winH + (stageUnit * 21)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 39),
										y: winH + (stageUnit * 22)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 36),
										y: winH + (stageUnit * 24)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 30),
										y: winH + (stageUnit * 26)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 34),
										y: winH + (stageUnit * 26)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 39),
										y: winH + (stageUnit * 25)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector4-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 47),
										y: winH + (stageUnit * 26.5)
									},
									physics: {
										immovable: true
									}
								}
							}
							]
						},
						{
							name: 'enemies',
							cl: 'Enemies',
							attrs: [
							{
								name: 'level10-sector4-enemy1',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 14),
										y: winH + (stageUnit * 19)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							},
							{
								name: 'level10-sector4-enemy2',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 30),
										y: winH + (stageUnit * 22)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							},
							{
								name: 'level10-sector4-enemy3',
								cl: 'AnimatedEnemy',
								attrs: {
									img: 'spider03',
									phaser: {
										width: spider03.width,
										height: spider03.height,
										health: 50
									},
									start: {
										x: (stageUnit * 60),
										y: winH + (stageUnit * 24)
									},
									physics: {
										allowGravity: false
									},
									speed: 0.5,
									attack: 25,
									score: 3000,
									movement: {
										speed: spider03.speed,
										type: Polyworks.MovementTypes.VERTICAL_HORIZONTAL_BY_SPEED,
										formula: null
									},
									defaultAnimation: '',
									animations: spiderAnimations
								}
							}
							] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level10-sector4-bonus1',
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { 
										width: (stageUnit * 0.5), 
										height: (stageUnit) 
									},
									start: {
										x: (stageUnit * 52),
										y: winH + (stageUnit * 27)
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
					// sector 5
					{
						name: 'sector5',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight * 3),
							end: winH + (stageHeight * 4)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// left
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 12),
										y: winH + (stageUnit * 29)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 24),
										y: winH + (stageUnit * 28)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 9),
										y: winH + (stageUnit * 30)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 17),
										y: winH + (stageUnit * 30)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 23),
										y: winH + (stageUnit * 30)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 20),
										y: winH + (stageUnit * 32)
									},
									physics: {
										immovable: true
									}
								}
							},
							// right
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 46),
										y: winH + (stageUnit * 30)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 48),
										y: winH + (stageUnit * 29)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 44),
										y: winH + (stageUnit * 31)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 49),
										y: winH + (stageUnit * 32)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 45),
										y: winH + (stageUnit * 34)
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
							attrs: [] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: []
						}
						]
					},
					// sector 6
					{
						name: 'sector6',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight * 4),
							end: winH + (stageHeight * 5)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							// right
							{
								name: 'sector5-platform05',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 50),
										y: winH + (stageUnit * 38)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector5-platform05',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 53),
										y: winH + (stageUnit * 40)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 51),
										y: winH + (stageUnit * 42)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 48),
										y: winH + (stageUnit * 43)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 46),
										y: winH + (stageUnit * 44)
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
							attrs: [] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level10-sector6-bonus1',
								cl: 'Bonus',
								attrs: {
									img: 'lollipop',
									phaser: { 
										width: (stageUnit * 0.5), 
										height: (stageUnit) 
									},
									start: {
										x: (stageUnit * 34),
										y: winH - (stageUnit * 39)
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
					// sector 7
					{
						name: 'sector7',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight * 5),
							end: winH + (stageHeight * 6)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 36),
										y: winH + (stageUnit * 47)
									},
									physics: {
										immovable: true
									}
								}
							},
							{
								name: 'sector7-platform01',
								cl: 'Sprite',
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: (stageUnit * 40),
										y: winH + (stageUnit * 47)
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
							attrs: [] 
						},
						{
							name: 'bonuses',
							cl: 'PhysicalGroupCollection',
							attrs: []
						}
						]
					},
					// sector 8
					{
						name: 'sector8',
						cl: 'Sector',
						bounds: {
							start: winH + (stageHeight * 6),
							end: winH + (stageHeight * 7)
						},
						attrs: [
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
										width: (stageWidth * 3),
										height: 32
									},
									start: {
										x: 0,
										y: winH + (stageHeight * 7)
									},
									physics: {
										immovable: true
									},
									attack: 1000
								}
							}
							]
						}
						]
					}
					]
				},
				// foreground
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
				// controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level11Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level11Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Red',
							score: 10000,
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: (stageUnit * 40),
								y: winH + (stageUnit * 2)
							}
						}
					}
					]
				},
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: (stageUnit * 32),
								y: winH + (stageUnit * 43)
							}
						}
					}
					]
				}
				]
			},
			// level 12 (cave)
			{
				name: 'level12',
				text: 'the silver river',
				cl: 'LevelState',
				world: {
					x: -(stageWidth * 5),
					y: -(stageHeight * 2) + winH,
					width: (stageWidth * 6),
					height: stageHeight * 2
				},
				clearWorld: true,
				clearCache: false,
				bounds: {
					start: stageWidth,
					end: -(stageWidth * 5)
				},
				pausable: true,
				backgroundColor: '#000000',
				images: [
					'whiteRect',
					'ovalMask',
					'level12Title',
					'goalFlag',
					'caveBackground02a',
					'caveBackground02b',
					'caveGround01a',
					'caveGround01b',
					'platformV',
					'platform',
					'rockPlatform01',
					'grass03a',
					'grass03b',
					'grass03ci',
					'grassClump01',
					'river01',
					'invisibleRect',
					'crystals02Grey',
					'crystals02Diamond'
				],
				sprites: [
					'leftButton',
					'rightButton',
					'upButton',
					'pauseButton',
					'playButton',
					'playButtonSmall',
					'restartButton',
					'menuButton',
					'mapButton',
					'lava01',
					'rockPlatform01Animated',
					'heartSprite',
					'keke'
				],
				attrs: [
				// scenery
				{
					name: 'scenery',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'caveBackground01a',
						cl: 'Sprite',
						attrs: {
							img: 'caveBackground02a',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: -(stageWidth * 5),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'caveBackground01b',
						cl: 'Sprite',
						attrs: {
							img: 'caveBackground02b',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: -(stageWidth * 4),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'caveBackground01c',
						cl: 'Sprite',
						attrs: {
							img: 'caveBackground02a',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: -(stageWidth * 3),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'caveBackground01d',
						cl: 'Sprite',
						attrs: {
							img: 'caveBackground02b',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: -(stageWidth * 2),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'caveBackground01e',
						cl: 'Sprite',
						attrs: {
							img: 'caveBackground02a',
							phaser: {
								width: stageWidth,
								height: stageHeight * 2,
								alpha: 1
							},
							start: {
								x: -(stageWidth * 1),
								y: winH - (stageHeight * 2)
							}
						}
					},
					{
						name: 'caveBackground01f',
						cl: 'Sprite',
						attrs: {
							img: 'caveBackground02b',
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
					// cave ground
					{
						name: 'caveGround1',
						cl: 'Sprite',
						attrs: {
							img: 'caveGround01b',
							phaser: {
								width: (stageUnit * 8),
								height: (stageUnit * 2),
								alpha: 1
							},
							start: {
								x: (stageUnit * 12),
								y: winH - (stageUnit * 2.5)
							}
						}
					},
					{
						name: 'caveGround1',
						cl: 'Sprite',
						attrs: {
							img: 'caveGround01a',
							phaser: {
								width: (stageUnit * 8),
								height: (stageUnit * 2),
								alpha: 1
							},
							start: {
								x: (stageUnit * 4),
								y: winH - (stageUnit * 2.5)
							}
						}
					},
					{
						name: 'caveGround1',
						cl: 'Sprite',
						attrs: {
							img: 'caveGround01b',
							phaser: {
								width: (stageUnit * 8),
								height: (stageUnit * 2),
								alpha: 1
							},
							start: {
								x: -(stageUnit * 4),
								y: winH - (stageUnit * 2.5)
							}
						}
					},
					{
						name: 'caveGround1',
						cl: 'Sprite',
						attrs: {
							img: 'caveGround01b',
							phaser: {
								width: (stageUnit * 8),
								height: (stageUnit * 2),
								alpha: 1
							},
							start: {
								x: -(stageUnit * 20),
								y: winH - (stageUnit * 2.5)
							}
						}
					},
					{
						name: 'caveGround1',
						cl: 'Sprite',
						attrs: {
							img: 'caveGround01a',
							phaser: {
								width: (stageUnit * 8),
								height: (stageUnit * 2),
								alpha: 1
							},
							start: {
								x: -(stageUnit * 36),
								y: winH - (stageUnit * 2.5)
							}
						}
					},
					{
						name: 'caveGround1',
						cl: 'Sprite',
						attrs: {
							img: 'caveGround01a',
							phaser: {
								width: (stageUnit * 8),
								height: (stageUnit * 2),
								alpha: 1
							},
							start: {
								x: -(stageUnit * 52),
								y: winH - (stageUnit * 2.5)
							}
						}
					},
					{
						name: 'caveGround1',
						cl: 'Sprite',
						attrs: {
							img: 'caveGround01a',
							phaser: {
								width: (stageUnit * 6),
								height: (stageUnit * 2),
								alpha: 1
							},
							start: {
								x: -(stageUnit * 66),
								y: winH - (stageUnit * 2.5)
							}
						}
					}
					]
				},
				// terrain
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
								x: -((stageWidth * 5) + 16),
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
							phaser: {
								width: 16,
								height: stageHeight * 2
							},
							start: {
								x: stageWidth,
								y: winH - (stageHeight * 2)
							},
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
								width: (stageWidth * 6),
								height: (stageUnit)
							},
							start: {
								x: -(stageWidth * 5),
								y: winH
							},
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
								width: (stageUnit * 6),
								height: (stageUnit)
							},
							start: {
								x: -(stageUnit * 66),
								y: winH - (stageUnit * 0.5)
							},
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
								width: (stageUnit * 8), 
								height: (stageUnit * 2) 
							},
							start: {
								x: -(stageUnit * 52),
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
								width: (stageUnit * 8),
								height: (stageUnit)
							},
							start: {
								x: -(stageUnit * 36),
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
								width: (stageUnit * 8),
								height: (stageUnit)
							},
							start: {
								x: -(stageUnit * 20),
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
								width: (stageUnit * 20),
								height: (stageUnit)
							},
							start: {
								x: -(stageUnit * 4),
								y: winH - (stageUnit * 0.5)
							},
							physics: {
								immovable: true
							}
						}
					}

					]
				},
				// sectors
				{
					name: 'sectors',
					cl: 'SectorManager',
					type: Polyworks.SectorTypes.HORIZONTAL,
					attrs: [
					// sector 1
					{
						name: 'sector1',
						cl: 'Sector',
						bounds: {
							start: 0,
							end: stageWidth
						},
						attrs: [
						]
					},
					// sector 2
					{
						name: 'sector2',
						cl: 'Sector',
						bounds: {
							start: -stageWidth,
							end: 0
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.7)
									},
									start: {
										x: -(stageUnit * 12),
										y: winH - (stageUnit * 4)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.7)
									},
									start: {
										x: -(stageUnit * 9),
										y: winH - (stageUnit * 3)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.7)
									},
									start: {
										x: -(stageUnit * 6),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							}
							]
						},
						{
							name: 'hazards',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level12-sector2-hazard0',
								cl: 'Sprite',
								attrs: {
									img: 'lava01',
									phaser: { 
										width: (stageUnit * 8), 
										height: (stageUnit * 2) 
									},
									start: {
										x: -(stageUnit * 12),
										y: winH - (stageUnit * 1.9)
									},
									physics: {
										immovable: true
									},
									attack: 25,
									defaultAnimation: 'bubble',
									animations: lavaAnimations
								}
							}
							]
						}
						]
					},
					// sector 3
					{
						name: 'sector3',
						cl: 'Sector',
						bounds: {
							start: -(stageWidth * 2),
							end: -(stageWidth)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
									},
									start: {
										x: -(stageUnit * 27),
										y: winH - (stageUnit * 4)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
									},
									start: {
										x: -(stageUnit * 25),
										y: winH - (stageUnit * 3)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
									},
									start: {
										x: -(stageUnit * 22),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							}
							]
						},
						{
							name: 'hazards',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level12-sector3-hazard1',
								cl: 'Sprite',
								attrs: {
									img: 'lava01',
									phaser: { 
										width: (stageUnit * 8), 
										height: (stageUnit * 2) 
									},
									start: {
										x: -(stageUnit * 28),
										y: winH - (stageUnit * 1.9)
									},
									physics: {
										immovable: true
									},
									attack: 25,
									defaultAnimation: 'bubble',
									animations: lavaAnimations
								}
							}
							]
						}
						]
					},
					// sector 4
					{
						name: 'sector4',
						cl: 'Sector',
						bounds: {
							start: -(stageWidth * 3),
							end: -(stageWidth * 2)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
									},
									start: {
										x: -(stageUnit * 42),
										y: winH - (stageUnit * 3)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							},
							{
								name: 'sector2-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.7)
									},
									start: {
										x: -(stageUnit * 39),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							}
							]
						},
						{
							name: 'hazards',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level12-sector3-hazard1',
								cl: 'Sprite',
								attrs: {
									img: 'lava01',
									phaser: { 
										width: (stageUnit * 8), 
										height: (stageUnit * 2) 
									},
									start: {
										x: -(stageUnit * 44),
										y: winH - (stageUnit * 1.9)
									},
									physics: {
										immovable: true
									},
									attack: 25,
									defaultAnimation: 'bubble',
									animations: lavaAnimations
								}
							}
							]
						}
						]
					},
					// sector 5
					{
						name: 'sector5',
						cl: 'Sector',
						bounds: {
							start: -(stageWidth * 4),
							end: -(stageWidth * 3)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector5-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: -(stageUnit * 66),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							},
							{
								name: 'sector5-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 3),
										height: (stageUnit * 0.5)
									},
									start: {
										x: -(stageUnit * 57),
										y: winH - (stageUnit * 2)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating01
								}
							}
							]
						},
						{
							name: 'hazards',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level12-sector3-hazard1',
								cl: 'Sprite',
								attrs: {
									img: 'lava01',
									phaser: { 
										width: (stageUnit * 8), 
										height: (stageUnit * 2) 
									},
									start: {
										x: -(stageUnit * 60),
										y: winH - (stageUnit * 1.9)
									},
									physics: {
										immovable: true
									},
									attack: 25,
									defaultAnimation: 'bubble',
									animations: lavaAnimations
								}
							}
							]
						}
						]
					},
					// sector 6
					{
						name: 'sector6',
						cl: 'Sector',
						bounds: {
							start: -(stageWidth * 5),
							end: -(stageWidth * 4)
						},
						attrs: [
						{
							name: 'dynamicTerrain',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'sector6-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01',
									phaser: {
										width: (stageUnit * 2),
										height: (stageUnit * 0.5)
									},
									start: {
										x: -(stageUnit * 80),
										y: winH - (stageUnit * 10)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: -(stageUnit * 77),
										y: winH - (stageUnit * 9)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: -(stageUnit * 74),
										y: winH - (stageUnit * 8)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: -(stageUnit * 71),
										y: winH - (stageUnit * 6)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							},
							{
								name: 'sector6-platform01',
								cl: 'ReactingTerrain',
								reaction: {
									type: Polyworks.TerrainReactions.DESTROY_AFTER_ANIMATION
								},
								attrs: {
									img: 'rockPlatform01Animated',
									phaser: {
										width: (stageUnit * 1.5),
										height: (stageUnit * 0.5)
									},
									start: {
										x: -(stageUnit * 69),
										y: winH - (stageUnit * 4)
									},
									physics: {
										immovable: true
									},
									defaultAnimation: '',
									animations: rockPlatformDisintegrating02
								}
							}
							]
						},
						{
							name: 'hazards',
							cl: 'PhysicalGroupCollection',
							attrs: [
							{
								name: 'level12-sector6-hazard1',
								cl: 'Sprite',
								attrs: {
									img: 'lava01',
									phaser: { 
										width: (stageUnit * 8), 
										height: (stageUnit * 2) 
									},
									start: {
										x: -(stageUnit * 82),
										y: winH - (stageUnit * 1.9)
									},
									physics: {
										immovable: true
									},
									attack: 25,
									defaultAnimation: 'bubble',
									animations: lavaAnimations
								}
							},
							{
								name: 'level12-sector6-hazard2',
								cl: 'Sprite',
								attrs: {
									img: 'lava01',
									phaser: { 
										width: (stageUnit * 8), 
										height: (stageUnit * 2) 
									},
									start: {
										x: -(stageUnit * 74),
										y: winH - (stageUnit * 1.9)
									},
									physics: {
										immovable: true
									},
									attack: 25,
									defaultAnimation: 'bubble',
									animations: lavaAnimations
								}
							}
							]
						}
						]
					}
					]
				},
				// foreground
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
				// level controls
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
				// level gui
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
				// pause gui
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
				// completed gui
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
				},
				// level title
				{
					name: 'title',
					cl: 'GroupCollection',
					addTo: 'null',
					visible: false,
					attrs: [
					{
						name: 'level12Title',
						cl: 'Sprite',
						attrs: 
						{
							img: 'level12Title',
							phaser: {
								width: (stageUnit * 6) * 1.5,
								height: (stageUnit * 1) * 1.5,
								alpha: 0.75
							},
							start: {
								x: winW - (stageUnit * 6) * 1.5,
								y: (stageUnit * 1)
							}
						}
					}
					]
				},
				// requirements gui
				{
					name: 'requirementsGUI',
					cl: 'SharedGroupCollection',
					type: 'requirementsGUI',
					addTo: 'null',
					visible: true,
					attrs: {
						start: {
							x: 0,
							y: 0
						}
					}
				},
				// requirements
				{
					name: 'requirements',
					cl: 'Requirements',
					attrs: [
					{
						name: 'requirement1',
						cl: 'Requirement',
						attrs: {
							img: 'crystals02Diamond',
							score: 10000,
							phaser: {
								width: (stageUnit * 0.75),
								height: (stageUnit * 1.5)
							},
							start: {
								x: -(stageUnit * 42),
								y: winH - (stageUnit * 4.5)
							}
						}
					}
					]
				},
				// goals
				{
					name: 'goals',
					cl: 'PhysicalGroupCollection',
					attrs: [
					{
						name: 'level1-goal1',
						cl: 'Sprite',
						attrs: 
						{
							img: 'goalFlag',
							phaser: {
								width: (stageUnit * 1.5),
								height: (stageUnit * 3)
							},
							start: {
								x: -(stageUnit * 80	),
								y: winH - (stageUnit * 13)
							}
						}
					}
					]
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
				images: [],
				sprites: [
					'mapButton',
					'menuButton'
				],
				attrs: [
				{
					name: 'completed-group',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'completed',
						cl: 'Text',
						attrs: {
							alignX: 'center',
							alignY: 'center',
							style: { 
								font: 'bold ' + fontSizes.xl + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'center'
							},
							defaultContent: 'all completed!'
						}
					},
					{
						name: 'comingSoon',
						cl: 'Text',
						attrs: {
							alignX: 'center',
							y: winH - (stageUnit * 3),
							style: { 
								font: 'bold ' + fontSizes.xs + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'center'
							},
							defaultContent: 'coming soon: keke journeys into the crystal caves\nin T H E  G R E Y  E X P A N S E  2'
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
				cl: 'GameOverState',
				world: {
					x: 0,
					y: 0,
					width: winW,
					height: winH
				},
				clearWorld: true,
				clearCache: false,
				backgroundColor: '#ffffff',
				images: [],
				sprites: [
					'menuButton',
					'restartButton'
				],
				attrs: [
				{
					name: 'gameOver-group',
					cl: 'GroupCollection',
					attrs: [
					{
						name: 'gameOver',
						cl: 'Text',
						attrs: {
							alignX: 'center',
							y: 0,
							style: { 
								font: 'bold ' + fontSizes.lg + 'px "Waiting for the Sunrise"', 
								fill: '#000000',
								align: 'center'
							},
							defaultContent: 'game over'
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
			}]
		};

		return c;

	};
	
	return Config;
})();
