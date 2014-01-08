"use strict";

var ticker,
	tickerTime = 500,
	fps = 60,
	levelManager,
	minX,
	maxX,
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
	bugsKilled = 0,
	bonusesCollected = 0,
	playing = false,
	won = false

function init() {
	// STAGE
	imageManager = new ImageManager(gameConfig.images, _onImagesLoaded);
}

function _onImagesLoaded() {
	// trace('_onImagesLoaded');
	
	stage = new Kinetic.Stage({
		container: 'container',
		width: stageConfig.width,
		height: stageConfig.height
	});

	startGame();
}

function startGame() { 
	
	// trace('start game');
	// LEVELS
	levelManager = new LevelManager();
	levelManager.setStage(stage);
	levelManager.init(gameConfig.levels);
	
	initCurrentLevel();

	// PLAYER
	// gameConfig.player.imageManager = imageManager;
	keke = new SpritePlayer(gameConfig.player);
	keke.setStage(stage);
	
	// LIFE METER
	// gameConfig.lifeMeter.imageManager = imageManager;
	lifeMeter = new LifeMeter(gameConfig.lifeMeter);
	lifeMeter.setHealth(keke.health);
	lifeMeter.setStage(stage);

	// CONTROLS
	// gameConfig.controls.imageManager = imageManager;
	controls = new Controls(gameConfig.controls);
	controls.setStage(stage);

	initKeyboardInput();
	
	playing = true;
	update();
}

function initCurrentLevel() {
	var level = levelManager.getCurrentLevel();
	ground = level.terrain;
	enemies = level.enemies;
	bonuses = level.bonuses;
	minX = level.minX;
	maxX = level.maxX;
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
		if(keke.position < minX && keke.position > maxX) {
			if(keke.velX !== 0) {
				ground.moveByVelocity(keke.velX, 0);
				enemies.moveByVelocity(keke.velX, 0);
				bonuses.moveByVelocity(keke.velX, 0);
				// ground.move(0, -keke.velY);
				// enemies.move(0, -keke.velY);
				// bonuses.move(0, -keke.velY);
			}
		} else {
			// trace('bounds reached');
			if(keke.position <= maxX) {
				levelManager.getCurrentLevel().cleared = true;
				quit('level cleared');
			} else {
				animationToPlay = 'idle';
			}
		}
		keke.playAnimation(animationToPlay);

		// vertical movement
		keke.move(0, keke.velY);

		enemies.update({});
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
				animationToPlay = 'jump';
				// trace('\tpassed jump conditional, velY = ' + keke.velY);
	       }
			// jumpButton.setWasPressed(false);
	    }
	    if (keys[ControlKeys.LEFT] || controls.getReverse()) {
	        // right arrow

	        if (keke.velX < keke.speed) {
				keke.velX++;
				if(!keke.jumping) {
					animationToPlay = 'run';
				} else {
					animationToPlay = 'jump';
				}
			}
			keke.direction = Directions.LEFT
		} else if (keys[ControlKeys.RIGHT] || controls.getForward()) {         // left arrow         
			if (keke.velX > -keke.speed) {
	    		keke.velX--;
				if(!keke.jumping) {
					animationToPlay = 'run';
				} else {
					animationToPlay = 'jump';
				}
	        }
			keke.direction = Directions.RIGHT;
		} else if(!keke.jumping) {
			animationToPlay = 'idle';
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

			if(col.direction !== '') {
				// trace('grounds['+i+'].damage = ' + grounds[i].damage);
				if(grounds[i].config.damage) {
					trace('something damaging was hit');
					keke.health += grounds[i].config.damage;
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
				// break; // stop loop, something was hit
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
			// enemyPos = enemyObjs[key].getAbsolutePosition();
			enemyPos = enemyObjs[key].getHitArea();

			// only test nearby enemies for collision
			if(enemyPos.x < (kekeHitArea.x + 100) && enemyPos.x > -(kekeHitArea.x + 100)) { 
				// enemy is near
				// trace('enemyPos = ' + enemyPos.x + '/' + enemyPos.y + ', keke = ' + kekeHitArea.x + '/' + kekeHitArea.y);
				// trace('enemy: ');
				// trace(enemy);

				col = collisionCheck(enemyPos, kekeHitArea);
				
				if(col.direction !== '') {
					var enemyVerticalCenter = (enemyPos.y + (enemyObjs[key].height/2));
					var kekeBottom = (kekeHitArea.y + kekeHitArea.height);
					// trace('\tcol.direction = ' + col.direction + '\n\tenemy v center = ' + enemyVerticalCenter + ', keke bottom = ' + kekeBottom);

					if(col.direction === Directions.TOP && (kekeBottom < enemyVerticalCenter)) {
						trace('enemy bottom collision, enemy health = ' + enemyObjs[key].health + ', keke.damage = ' + keke.damage);
						enemyObjs[key].health += keke.damage;
						// keke.velY = 0;
			            keke.velY = -keke.speed * 0.75;
					} else if(col.direction === Directions.LEFT || col.direction === Directions.RIGHT || col.direction === Directions.BOTTOM) {
						keke.health += enemyObjs[key].damage;
						trace('enemy top/left/right collision, enemy damage = ' + enemyObjs[key].damage + ', keke.health = ' + keke.health + ', keke.dir3ection = ' + keke.direction);
						// keke.velX = 0;
						// move player backwards, away from the enemy
						if(keke.direction === Directions.RIGHT) {
							keke.velX++;
						} else {
							keke.velX--;
						}
					}
					break;
				}
			}
		}
	}
	// BONUS COLLISIONS
	var bonusObjs = bonuses.collection;
	var bonus;
	var bonusPos;

	// for(var j = 0; j < bonusObjs.length; j++) {
	for(var key in bonusObjs) {
		if(!bonusObjs[key].collected) {
			bonusPos = bonusObjs[key].getAbsolutePosition();
			// only test nearby bonuses for collision
			if(bonusPos.x < (kekeHitArea.x + 100) && bonusPos.x > -(kekeHitArea.x + 100)) { 
				// trace('bonusPos = ' + bonusPos.x + '/' + bonusPos.y + ', keke = ' + kekeHitArea.x + '/' + kekeHitArea.y);
				bonus = {
					x: bonusPos.x,
					y: bonusPos.y,
					width: bonusObjs[key].width,
					height: bonusObjs[key].height
				};
				// trace('bonus: ');
				// trace(bonus);

				col = collisionCheck(bonus, kekeHitArea);
				var bonusVerticalCenter = (bonusPos.y + (bonusObjs[key].height/2));
				var kekeBottom = (kekeHitArea.y + kekeHitArea.height);
				// trace('\tcol.direction = ' + col.direction + '\n\tbonus v center = ' + bonusVerticalCenter + ', keke bottom = ' + kekeBottom);

				if(col.direction !== '') {
					keke.health += bonusObjs[key].boost;
					bonusObjs[key].collect();
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

function initKeyboardInput() {
	window.onkeydown = function(e) {
		keydownHandler(e);
	};
	window.onkeyup = function(e) {
		keyupHandler(e);
	};
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
		keke.direction = Directions.LEFT;
		animationToPlay = 'idle';
		break;

		case ControlKeys.RIGHT:
		keys[ControlKeys.RIGHT] = false;
		keke.direction = Directions.RIGHT;
		animationToPlay = 'idle';
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
	// trace('starting');
	removeMenuScreen();
	// keke.start();
	// update();
	startGame();
}

function quit(message) {
	// trace('quiting');
	window.clearTimeout(ticker);
	playing = false;
	var stats = {};
	
	stats.health = keke.health;
	keke.stop();
	keke.remove();

	stats.enemies = enemies.getStats();
	enemies.remove();
	
	stats.bonuses = bonuses.getStats();
	bonuses.remove();
	
	controls.remove();
	
	lifeMeter.remove();
	
	ground.remove();
	
	window.keyup = null;
	window.keydown = null;
	addMenuScreen(message, stats);
}

function addMenuScreen(message, stats) {
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
		opacity: 0.75
	});
	
	var gameOverText = new Kinetic.Text({
		x: 0,
		y: (stage.getHeight() / 4) - 30,
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
	

	if(typeof(stats) !== 'undefined') {
		var level = levelManager.getCurrentLevel();

		if(level.cleared) {
			stats.levelPoints = level.points
		} else {
			stats.levelPoints = 0;
		};
		// trace('stats = ');
		// trace(stats);
		var healthPoints = stats.health * 500;
		var killPoints = stats.enemies.killed * 1000;
		var bonusPoints = stats.bonuses.collected * 2000;
		var totalPoints = healthPoints + killPoints + bonusPoints + stats.levelPoints;

		var statsMsg = 'Statistics:'
			+ '\n\nBugs squashed = ' + stats.enemies.killed + '/' + stats.enemies.total 
			+ '\nBonuses collected = ' + stats.bonuses.collected + '/' + stats.bonuses.total
			+ '\n\nPoints:'
			+ '\nHealth bonus = ' + healthPoints
			+ '\nEnemies = ' + killPoints
			+ '\nBonuses = ' + bonusPoints
			+ '\nLevel = ' + stats.levelPoints
			+ '\nTotal = ' + totalPoints;

		if(totalPoints === level.perfectPoints) {
			statsMsg += '\n\nPERFECT SCORE!';
		}
		var statsText = new Kinetic.Text({
			x: 50,
			y: stage.getHeight() / 4 + 100,
			width: stage.getWidth() - 100,
			text: statsMsg,
			align: 'right',
			fontSize: 16,
			fontFamily: 'Calibri',
			fill: '#000000'
		});

		menuLayer.add(statsText);
	}
	
	
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