var GUIConsole = (function() {
	Utils.inherits(GUIConsole, Base);
	
	function GUIConsole(params) {
		GUIConsole._super.constructor.call(this, params);
		var guiConsole = this.game.add.group(null);
	    this.scoreText = this.game.add.text(16, 15, 'Score: 0', { font: '18px Arial', fill: '#ffffff' });
		guiConsole.add(this.scoreText);

		this.healthText = this.game.add.text(16, 40, 'Health: ' + config.player.health, { font: '18px Arial', fill: '#ffffff' });
		guiConsole.add(this.healthText);
	}
	
	return GUIConsole;
})();