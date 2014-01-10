Polyworks.GUIConsole = (function() {
	Utils.inherits(GUIConsole, Polyworks.GroupCollection);
	
	function GUIConsole(params, id) {
		trace('GUIConsole/constructor');
		GUIConsole._super.constructor.call(this, params, id, 'null');
		/*
		var guiConsole = Polyworks.Game.phaser.add.group(null);
	    this.scoreText = Polyworks.Game.phaser.add.text(16, 15, 'Score: 0', { font: '18px Arial', fill: '#ffffff' });
		guiConsole.add(this.scoreText);

		this.healthText = Polyworks.Game.phaser.add.text(16, 40, 'Health: ' + config.player.health, { font: '18px Arial', fill: '#ffffff' });
		guiConsole.add(this.healthText);
		*/
	}

	GUIConsole.prototype.setContent = function(field, content) {
		this.getItemByName(field).content = content;
	};
	
	GUIConsole.prototype.getContent = function(field) {
		return this.getItemByName(field).content;
	};
	
	return GUIConsole;
})();