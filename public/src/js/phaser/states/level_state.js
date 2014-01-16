
Polyworks.LevelState = (function() {
	Utils.inherits(LevelState, Polyworks.ControlsState); 
	
	var _this;
	function LevelState(params) {
		// trace('LevelState/constructor, phaser = ');
		_this = this;
		LevelState._super.constructor.call(this, params);

		this.gameOver = false;
		this.terrain;
		this.controls;
		this.cursors;
		this.player; 
		this.quitButton;
		// PolyworksGame.score = 0;
	};
	
	LevelState.prototype.preload = function() {
	};
	
	LevelState.prototype.create =  function() {
		// trace('LevelState['+this.model.name+']/create');
		LevelState._super.create.call(this);
	};
	
	LevelState.prototype.createState = function() {
		
		// create views and controls with super
		LevelState._super.createState.call(this);

		this.terrain = this.getItemByName('terrain');
		this.sectorManager = this.getItemByName('sectors');
		this.createPlayer();

	};

	LevelState.prototype.createPlayer = function() {
		var playerConfig = PolyworksGame.get('player');
		playerConfig.game = PolyworksGame.phaser;
		this.player = new Polyworks[playerConfig.cl](playerConfig);
		this.player.begin();
		this.playerGroup = PolyworksGame.phaser.add.group();
		this.playerGroup.add(this.player);
	};
	var updatedOnce = false;
	LevelState.prototype.update = function() {
		// trace('this.player.x = ' + this.player.sprite.x + ', end = ' + this.model.bounds.end);
		if(!updatedOnce) {
			// if(this.player.body.x >= this.model.bounds.end) {
				// PolyworksGame.changeState('intermission');
			// } else {
				this.sectorManager.checkTerrainCollision(this.terrain.group);
				// this.sectorManager.setActive(this.game.camera.x + (stage.width/2));

				// var sector = this.sectorManager.activeSector;
				// sector.enemies.update({ player: this.player.sprite });
				// 
				// this.player.updatePlayer({
				// 	terrain: this.terrain.group,
				// 	enemies: sector.enemies.getActive(),
				// 	bonuses: sector.bonuses.getActive(),
				// 	context: this
				// });
			// }
//			updatedOnce = true;
		}
	};
	
	LevelState.prototype.shutdown = function() {
		this.playerGroup.destroy();
		LevelState._super.shutdown.call(this);
	};

	return LevelState;
})();
