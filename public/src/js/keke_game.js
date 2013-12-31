"use strict";

var ticker,
	tickerTime = 500,
	fps = 60,
	imageManager,
	menuLayer,
	gameLevelContainer,
	keke,
	lifeMeter,
	enemies,
	bonuses,
	ground,
	animationToPlay,
	playerMovementLayers,
	controls,
	controlsLayer,
	quitButton,
	scrollingLayers,
	platformLayer,
	previousCollisionId = '',
    keys = {},
	jumpKeyDepressed = false,
	playing = false,
	won = false
		
function init() {
	// STAGE
	imageManager = new ImageManager(gameConfig.images, _onImagesLoaded);
}

function _onImagesLoaded() {
	trace('_onImagesLoaded');
	
	stage = new Kinetic.Stage({
		container: 'container',
		width: stageConfig.width,
		height: stageConfig.height
	});

	startGame();
}

function startGame() { 
	
	trace('start game');
	var levelLayer = new LevelLayer(gameConfig.level);
	levelLayer.setStage(stage);
	// scrollingLayers = new ScrollingLayers(gameConfig.scrollingLayers);
	// scrollingLayers.setStage(stage);
	// gameLevelContainer = new Kinetic.Container();

	// PLAYER MOVEMENT BG LAYERS
	// playerMovementLayers = new ScrollingLayers(gameConfig.playerMovementLayers);
	// playerMovementLayers.setStage(stage);
	
	// GROUND
	ground = new GroundLayer(gameConfig.ground);
	ground.setStage(stage);
	
	// PLAYER
	keke = new SpritePlayer(gameConfig.player);
	keke.setStage(stage);
	
	// LIFE METER
	lifeMeter = new LifeMeter(gameConfig.lifeMeter);
	lifeMeter.setHealth(keke.health);
	lifeMeter.setStage(stage);

	// ENEMIES
	enemies = new Enemies(gameConfig.enemies);
	enemies.setStage(stage);
	
	bonuses = new Bonuses(gameConfig.bonuses);
	bonuses.setStage(stage);
	
	// CONTROLS
	controls = new Controls(gameConfig.controls);
	controls.setStage(stage);
	
	// stage.add(gameLevelContainer);
	
	$(window).keydown(function(e) {
		keydownHandler(e);
	});
	$(window).keyup(function(e) {
		keyupHandler(e);
	});
	playing = true;
	update();
}

function update() {
	if(keke.health > 0 && playing) {
		checkInput();

	    keke.velX *= gameConfig.friction;
		keke.velY += gameConfig.gravity;

		keke.grounded = false;

		detectCollisions();

	    if(keke.grounded && !keke.jumping) {
	         keke.velY = 0;
	    }

		// horizontal movement
		keke.position += keke.velX;
		keke.velX = (Math.floor(keke.velX*1000))/1000;
		// trace('keke.position = ' + keke.position);
		// trace('keke.velX = ' + keke.velX);
		if(keke.position < gameConfig.level.minX && keke.position > gameConfig.level.maxX) {
			// trace('keke.position = ' + keke.position + ', level.min = ' + gameConfig.level.minX + ', max = ' + gameConfig.level.maxX);
			if(keke.velX !== 0) {
				ground.moveByVelocity(keke.velX, 0);
				enemies.moveByVelocity(keke.velX, 0);
				bonuses.moveByVelocity(keke.velX, 0);
				// playerMovementLayers.moveByVelocity(keke.velX, 0);
			} else {
				// trace('no movement');
			}
		} else {
			trace('bounds reached');
			if(keke.position <= gameConfig.level.maxX) {
				quit('level cleared');
			} else {
				if(keke.facingForward) {
					animationToPlay = 'idleR';
				} else {
					animationToPlay = 'idleL';
				}
			}
		}
		keke.playAnimation(animationToPlay);

		// vertical movement
		keke.move(0, keke.velY);

		// layer movement
		// scrollingLayers.moveX();

		stage.draw();

		if(playing) {
			ticker = setTimeout(function() {
				requestAnimFrame(update);
			}, 1000 / fps);
		}
		lifeMeter.setHealth(keke.health);
	} else {
		quit('game over');
	}
}

function checkInput() {
	if(controls.getWasPressed('quitButton')) {
		quit('quit');
	} else {
	    if (keys[ControlKeys.UP] || controls.getJumped()) {
	        // up arrow or space
	        if (!keke.jumping && keke.grounded && !jumpKeyDepressed) {
	            keke.jumping = true;
				keke.justJumped = true;
	            keke.grounded = false;
				jumpKeyDepressed = true;
	            keke.velY = -keke.speed * 2;
				if(keke.facingForward) {
					animationToPlay = 'jumpR';
				} else {
					animationToPlay = 'jumpL';
				}
				// trace('\tpassed jump conditional, velY = ' + keke.velY);
	       }
			// jumpButton.setWasPressed(false);
	    }
	    if (keys[ControlKeys.LEFT] || controls.getReverse()) {
	        // right arrow

	        if (keke.velX < keke.speed) {
				keke.velX++;
				if(!keke.jumping) {
					if(keke.getCurrentAnimation() !== 'runL') {
						animationToPlay = 'runL';
					}
				} else {
					animationToPlay = 'jumpL';
				}
			}
			keke.facingForward = false;
		} else if (keys[ControlKeys.RIGHT] || controls.getForward()) {         // left arrow         
			if (keke.velX > -keke.speed) {
	    		keke.velX--;
				if(!keke.jumping) {
					if(keke.getCurrentAnimation() !== 'runR') {
						animationToPlay = 'runR';
					}
				} else {
					animationToPlay = 'jumpR';
				}
	        }
			keke.facingForward = true;
		} else if(!keke.jumping) {
			if(keke.facingForward) {
				animationToPlay = 'idleR';
			} else {
				animationToPlay = 'idleL';
			}
		}
	}
 }

function detectCollisions() {
	var kekeHitArea = keke.getHitArea();
	var col;

	// GROUND COLLISIONS
	var grounds = ground.collection;
	var rect;
	var rectPos;
	
	for(var i = 0; i < grounds.length; i++) {
		// trace('grounds['+i+'].attrs = ');
		// trace(grounds[i].attrs);
		rectPos = grounds[i].rect.getAbsolutePosition();
		rect = {
			x: rectPos.x,
			y: rectPos.y,
			width: grounds[i].rect.attrs.width,
			height: grounds[i].rect.attrs.height
		}
		// trace('grounds['+i+']');
		// trace('\trectPos.x = ' + rectPos.x + ', kekeHiteArea.x + 100 = ' + (kekeHitArea.x + 100));
		// only test nearby ground for collision
		if(rect.x < (kekeHitArea.x + kekeHitArea.width + 100) && rect.x > -((rect.width/2) + stageConfig.width)) { 
			// trace('rectPos['+i+'].x = ' + rect.x + ', -width/2 + 100 = ' + (-((rect.width/2 )+ stageConfig.width)) + ', keke = ' + (kekeHitArea.x + kekeHitArea.width + 100));
		
			var direction = grounds[i].config.direction;
			if(direction === 'horizontal') {
				col = horizontalCollisionCheck(kekeHitArea, rect);
			} else if(direction === 'vertical') {
				col = verticalCollisionCheck(kekeHitArea, rect);
			} else {
				col = collisionCheck(kekeHitArea, rect);
			}

		    if (col.direction === Directions.LEFT || col.direction === Directions.RIGHT) {
		        keke.velX = 0;
		        keke.jumping = false;
			} else if (col.direction === Directions.BOTTOM) {
				if(keke.justJumped) {
					keke.justJumped = false;
				} else {
			        keke.grounded = true;
			        keke.jumping = false;
					jumpKeyDepressed = false;
				}
			} else if (col.direction === Directions.TOP) {
		        // keke.velY *= -1;
		    }
	
			if(col.direction !== '') {
				// trace('grounds['+i+'].damage = ' + grounds[i].damage);
				if(grounds[i].config.damage) {
					trace('something damaging was hit');
					keke.health += grounds[i].config.damage;
				}
			}
		}
	}

	// ENEMY COLLISIONS
	var enemyObjs = enemies.collection;
	var enemy;
	var enemyPos;
	
	// for(var j = 0; j < enemyObjs.length; j++) {
	for(var key in enemyObjs) {
		if(enemyObjs[key].alive) {
			enemyPos = enemyObjs[key].getAbsolutePosition();
			// only test nearby enemies for collision
			if(enemyPos.x < (kekeHitArea.x + 100) && enemyPos.x > -(kekeHitArea.x + 100)) { 
				// trace('enemyPos = ' + enemyPos.x + '/' + enemyPos.y + ', keke = ' + kekeHitArea.x + '/' + kekeHitArea.y);
				enemy = {
					x: enemyPos.x,
					y: enemyPos.y,
					width: enemyObjs[key].width,
					height: enemyObjs[key].height
				};
				// trace('enemy: ');
				// trace(enemy);

				col = collisionCheck(enemy, kekeHitArea);
				var enemyVerticalCenter = (enemyPos.y + (enemyObjs[key].height/2));
				var kekeBottom = (kekeHitArea.y + kekeHitArea.height);
				// trace('\tcol.direction = ' + col.direction + '\n\tenemy v center = ' + enemyVerticalCenter + ', keke bottom = ' + kekeBottom);

				if(col.direction === Directions.TOP && (kekeBottom < enemyVerticalCenter)) {
					trace('enemy bottom collision, enemy health = ' + enemyObjs[key].health + ', keke.damage = ' + keke.damage);
					enemyObjs[key].health += keke.damage;
					keke.velY = 0;
				} else if(col.direction === Directions.LEFT || col.direction === Directions.RIGHT || col.direction === Directions.BOTTOM) {
					keke.health += enemyObjs[key].damage;
					trace('enemy top/left/right collision, enemy damage = ' + enemyObjs[key].damage + ', keke.health = ' + keke.health);
					// keke.velX = 0;
				}
			}
		}
	}
	// trace('detectCollisions, keke.grounded = ' + keke.grounded + ', col.direction = ' + col.direction);
}

function horizontalCollisionCheck(shapeA, shapeB) {
	var col = getCollisionVectors(shapeA, shapeB);

	// trace('horizontalCollisionCheck\n\tvX = ' + vX + ', vY = ' + vY + '\n\thWidths = ' + hWidths + ', hHeights = ' + hHeights);
	// if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(col.vX) < col.hWidths && Math.abs(col.vY) < col.hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         
		var oX = col.hWidths - Math.abs(col.vX),             
			oY = col.hHeights - Math.abs(col.vY);
		// trace('oX = ' + oX + ', oY = ' + oY);
		if (oX >= oY) {
            if (col.vY > 0) {
                col.direction = Directions.TOP;
                shapeA.y += oY;
				col.id = shapeB.id;
            } else {
                col.direction = Directions.BOTTOM;
                shapeA.y -= oY;
				col.id = shapeB.id;
            }
		}
    }
    return col;
}

function verticalCollisionCheck(shapeA, shapeB) {
	var col = getCollisionVectors(shapeA, shapeB);

	// trace('collisionCheck\n\tvX = ' + vX + ', vY = ' + vY + '\n\thWidths = ' + hWidths + ', hHeights = ' + hHeights);
	// if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(col.vX) < col.hWidths && Math.abs(col.vY) < col.hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         
		var oX = col.hWidths - Math.abs(col.vX),             
			oY = col.hHeights - Math.abs(col.vY);
		// trace('oX = ' + oX + ', oY = ' + oY);
		if (oX >= oY) {
            if (col.vX > 0) {
                col.direction = Directions.LEFT;
                shapeA.x += oX;
				col.id = shapeB.id;
            } else {
                col.direction = Directions.RIGHT;
                shapeA.x -= oX;
				col.id = shapeB.id;
            }
        }
    }
    return col;
}

function collisionCheck(shapeA, shapeB) {
	var col = getCollisionVectors(shapeA, shapeB);
	
	// trace('collisionCheck\n\tvX = ' + vX + ', vY = ' + vY + '\n\thWidths = ' + hWidths + ', hHeights = ' + hHeights);
	// if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(col.vX) < col.hWidths && Math.abs(col.vY) < col.hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         
		var oX = col.hWidths - Math.abs(col.vX),             
			oY = col.hHeights - Math.abs(col.vY);
		// trace('oX = ' + oX + ', oY = ' + oY);
		if (oX >= oY) {
            if (col.vY > 0) {
                col.direction = Directions.TOP;
                shapeA.y += oY;
				col.id = shapeB.id;
            } else {
                col.direction = Directions.BOTTOM;
                shapeA.y -= oY;
				col.id = shapeB.id;
            }
        } else {
            if (col.vX > 0) {
                col.direction = Directions.LEFT;
                shapeA.x += oX;
				col.id = shapeB.id;
            } else {
                col.direction = Directions.RIGHT;
                shapeA.x -= oX;
				col.id = shapeB.id;
            }
        }
 		// trace('\n\toX = ' + oX + ', oY = ' + oY);
    }
    return col;
}

function getCollisionVectors(shapeA, shapeB) {
    // get the vectors to check against
    var collision = {
			id: '',
			direction: '',
			vX: (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
			vY: (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
	        // add the half widths and half heights of the objects
	        hWidths: (shapeA.width / 2) + (shapeB.width / 2),
	        hHeights: (shapeA.height / 2) + (shapeB.height / 2)
		};
	return collision;
}

function keydownHandler(e) {
	switch(e.which) {
		case ControlKeys.UP:
		keys[ControlKeys.UP] = true;
		break;

		case ControlKeys.LEFT:
		keys[ControlKeys.LEFT] = true;
		break;

		case ControlKeys.RIGHT:
		keys[ControlKeys.RIGHT] = true;
		break;

		case ControlKeys.START:
		restart();
		break;
		
		case ControlKeys.QUIT: 
		if(playing) {
			quit();
		}
		default: 
		break;
	}
}

function keyupHandler(e) {
	switch(e.which) {
		case ControlKeys.LEFT:
		keys[ControlKeys.LEFT] = false;
		animationToPlay = 'idleL';
		break;

		case ControlKeys.RIGHT:
		keys[ControlKeys.RIGHT] = false;
		animationToPlay = 'idleR';
		break;

		case ControlKeys.UP:
		keys[ControlKeys.UP] = false;
		jumpKeyDepressed = false;
		break; 

		default:
		break;
	}
}

function restart() {
	trace('starting');
	removeMenuScreen();
	// keke.start();
	// update();
	startGame();
}

function quit(message) {
	trace('quiting');
	window.clearTimeout(ticker);
	playing = false;

	keke.stop();
	keke.remove();
	
	enemies.remove();
	
	bonuses.remove();
	
	controls.remove();
	
	lifeMeter.remove();
	
	ground.remove();
	
	window.keyup = null;
	window.keydown = null;
	addMenuScreen(message);
}

function addMenuScreen(message) {
	var menuText = (typeof(message) !== 'undefined') ? message : 'quit';
	
	menuLayer = new Kinetic.Layer();
	var bg = new Kinetic.Rect({
		x: 10,
		y: 10,
		width: stageConfig.width - 20,
		height: stageConfig.height - 20,
		stroke: '#000000',
		strokeWidth: 1,
		fill: '#ffffff',
		opacity: 0.5
	});
	
	var gameOverText = new Kinetic.Text({
		x: 0,
		y: stage.getHeight() / 3,
		width: stage.getWidth(),
		text: menuText,
		align: 'center',
		fontSize: 56,
		fontFamily: 'Calibri',
		fill: '#000000'
	});
	
	var restartButtonGroup = new Kinetic.Group({});
	
	var restartButton = new Kinetic.Rect({
		x: 50,
		y: (stage.getHeight() / 3) * 2,
		width: stageConfig.width - 100,
		height: 68,
		stroke: '#000000',
		strokeWidth: 1,
		fill: '#123456'
	});
	
	var restartText = new Kinetic.Text({
		x: 0,
		y: (stage.getHeight() / 3) * 2,
		width: stage.getWidth(),
		text: 'Restart',
		align: 'center',
		fontSize: 48,
		fontFamily: 'Calibri',
		fill: '#ffffff'
	});	
	
	restartButtonGroup.on("mousedown touchstart", function(evt) {
		restart();
	});
	
	menuLayer.add(bg);
	menuLayer.add(gameOverText);
	restartButtonGroup.add(restartButton);
	restartButtonGroup.add(restartText);
	// menuLayer.add(restartButtonGroup);
	
	if(stage) {
		stage.add(menuLayer);
	}
}

function removeMenuScreen() {
	menuLayer.remove();
	menuLayer = null;
}

$(document).ready(function() {
	init();
});