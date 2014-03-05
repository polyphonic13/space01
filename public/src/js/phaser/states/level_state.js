Polyworks.LevelState = (function() {
	Polyworks.Utils.inherits(LevelState, Polyworks.State); 
	
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

		var playerStart = Polyworks.Utils.clone(PolyworksGame.get('player').attrs.start);
		// trace('LevelState['+this.model.name+']/createState\n\tplayerStart = ', playerStart);
		this.createPlayer(playerStart, PolyworksGame.startingHealth);

		this.getChildByName('pauseGUI').hide();

	};

	LevelState.prototype.createPlayer = function(start, health) {
		var playerConfig = Polyworks.Utils.clone(PolyworksGame.get('player'));
		playerConfig.attrs.attack = 10;
		playerConfig.attrs.start = start;
		// trace('Level['+this.model.name+']/createPlayer, playerConfig = ', playerConfig, '\n\tstart = ', start);

		playerConfig.game = PolyworksGame.phaser;
		playerConfig.sectorManager = this.sectorManager;

		this.playerGroup = PolyworksGame.phaser.add.group();
		this.player = new Polyworks[playerConfig.cl](playerConfig);
		this.player.begin(health);
		this.playerGroup.add(this.player);
		this.playerPresent = true;
		// trace('LevelState['+this.model.name+']/player created, jump = ' + playerConfig.attrs.speed.y, playerConfig);
	};
	
	LevelState.prototype.update = function() {
		if(!this.paused) {
			// trace('LevelState['+this.model.name+']/update');
			if(this.player.body.x >= this.model.bounds.end) {
				PolyworksGame.levels[this.model.name].cleared = true;
				PolyworksGame.levels[this.model.name].locked = false;
				PolyworksGame.changeState('intermission');
			} else {
				var sector = this.activeSector;

				var updateParams = {
					player: this.player,
					terrain: this.terrain.group,
					dynamicTerrain: sector.dynamicTerrain.getActive(),
					position: {
						x: this.game.camera.x + (Polyworks.Stage.winW/2),
						y: this.game.camera.y + (Polyworks.Stage.winH/2)
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
	
	LevelState.prototype.onPauseState = function() {
		trace('LevelState['+this.model.name+']/onPauseState');
		LevelState._super.onPauseState.call(this);
		if(this.paused) {
			this.pauseState();
		} else {
			this.resumeState();
		}
	};
	
	LevelState.prototype.onResumeState = function() {
		trace('LevelState['+this.model.name+']/onResumeState');
		LevelState._super.onResumeState.call(this);
		this.resumeState();
	};
	
	LevelState.prototype.pauseState = function() {
		this.sectorManager.deactivateAll();
		this.playerPosition = {
			x: this.player.x,
			y: this.player.y
		};
		// trace('LevelState/pauseState, playerPosition = ', this.playerPosition, this.player);
		this.player.destroy();
		this.playerPresent = false;
		// this.playerGroup.visible = false;

		this.getChildByName('levelGUI').hide();
		this.getChildByName('levelControls').hide();
		this.getChildByName('pauseGUI').show();
	};
	
	LevelState.prototype.resumeState = function() {
		this.sectorManager.setActiveSector(this.sectorManager.activeSectorId);
		this.createPlayer(this.playerPosition, PolyworksGame.health);
		this.playerGroup.visible = true; 

		this.getChildByName('levelGUI').show();
		this.getChildByName('levelControls').show();
		this.getChildByName('pauseGUI').hide();
	};
	
	LevelState.prototype.shutdown = function() {
		Polyworks.Utils.each(this.model.collection,
			function(c) {
				c.destroy();
			},
			this
		);
		this.playerGroup.destroy();
		if(this.playerPresent) {
			this.player.destroy();
		} 
		LevelState._super.shutdown.call(this);
	};

	return LevelState;
})();
