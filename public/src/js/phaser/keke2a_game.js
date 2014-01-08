/*
var gameOver = false;
var platforms;
var sectorManager;
var controls;
var cursors;
// phaser object
var player; 

var score = 0;
var scoreText;

var quitButton;

var game = new Phaser.Game(stage.width, stage.height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// game.state.start('level0');
// game.switchState(levelOne);
*/

var game = new Phaser.Game(stage.width, stage.height, Phaser.AUTO, '');
Polyworks.Recreation.init(config);

function quit() {
	trace('quit');
	gameOver = true;
    
	// clearSectors();
	// GameController.destroy();
	game.destroy();
	messageTest = game.add.text(stage.width/2, stage.height/2, 'Game Over', { font: '32px Arial', fill: '#ffffff' });
}
