Polyworks.GUIConsole = (function() {
	Utils.inherits(GUIConsole, Polyworks.Base);
	
	function GUIConsole(params) {
		GUIConsole._super.constructor.call(this, params);
		var guiConsole = Polyworks.Game.phaser.add.group(null);
	    this.scoreText = Polyworks.Game.phaser.add.text(16, 15, 'Score: 0', { font: '18px Arial', fill: '#ffffff' });
		guiConsole.add(this.scoreText);

		this.healthText = Polyworks.Game.phaser.add.text(16, 40, 'Health: ' + config.player.health, { font: '18px Arial', fill: '#ffffff' });
		guiConsole.add(this.healthText);
	}
	
	return GUIConsole;
})();