Polyworks.LevelState = (function() {
	Utils.inherits(LevelState, Polyworks.State); 
	
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
	};
	
	LevelState.prototype.preload = function() {
		LevelState._super.preload.call(this);
	};
	
	LevelState.prototype.create =  function() {
		// trace('LevelState['+this.model.name+']/create');
		LevelState._super.create.call(this);
	};
	
	LevelState.prototype.createState = function() {

		// create views and controls with super
		LevelState._super.createState.call(this);

		this.terrain = this.getChildByName('terrain');
		this.sectorManager = this.getChildByName('sectors');
		this.sectorManager.setState(this);
		this.sectorManager.setActiveSector(0);

		this.createPlayer();

		// this.addOvalMask();
	};

	LevelState.prototype.createPlayer = function() {
		var playerConfig = Utils.clone(PolyworksGame.get('player'));
		// trace('Level['+this.model.name+']/createPlyaer, playerConfig = ');
		// trace(playerConfig);

		playerConfig.game = PolyworksGame.phaser;
		playerConfig.sectorManager = this.sectorManager;

		this.playerGroup = PolyworksGame.phaser.add.group();
		this.player = new Polyworks[playerConfig.cl](playerConfig);
		this.player.begin();
		this.playerGroup.add(this.player);
		trace('LevelState['+this.model.name+']/player created, jump = ' + playerConfig.attrs.speed.y, playerConfig);
	};
	
	// LevelState.prototype.addOvalMask = function() {
	// 	var mask = PolyworksGame.phaser.add.sprite(-10, -10, 'ovalMask');
	// 	mask.width = PolyworksStage.winW + 20;
	// 	mask.height = PolyworksStage.winH + 20;
	// 	mask.fixedToCamera = true;
	// };
	
	LevelState.prototype.update = function() {
		if(!this.paused) {
			// trace('LevelState['+this.model.name+']/update');
			if(this.player.body.x >= this.model.bounds.end) {
				PolyworksGame.changeState('intermission');
			} else {
				var sector = this.activeSector;

				var updateParams = {
					player: this.player,
					terrain: this.terrain.group,
					dynamicTerrain: sector.dynamicTerrain.getActive(),
					position: {
						x: this.game.camera.x + (PolyworksStage.winW/2),
						y: this.game.camera.y + (PolyworksStage.winH/2)
					}
				};
				this.sectorManager.pwUpdate(updateParams);

				// update player with active sector members & terrain

				this.player.pwUpdate({
					terrain: this.terrain.group,
					dynamicTerrain: sector.dynamicTerrain.getActive(),
					hazards: sector.hazards.getActive(),
					enemies: sector.enemies.getActive(),
					bonuses: sector.bonuses.getActive(),
					context: this
				});
			}
			LevelState._super.update.call(this);
		}
	};
	
	LevelState.prototype.shutdown = function() {
		Utils.each(this.model.collection,
			function(c) {
				c.destroy();
			},
			this
		);

		this.playerGroup.destroy();
		this.player.destroy();
		LevelState._super.shutdown.call(this);
	};

	return LevelState;
})();
