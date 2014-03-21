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

		this.triggeredCleared = false;
		this.requirementsMet = false; 

		// create views and controls with super
		LevelState._super.createState.call(this);

		this.requirements = this.getChildByName('requirements');
		// trace('\n\n\trequirements = ', this.requirements, '\tgroup = ', this.requirements.group);
		if(this.requirements) {
			Polyworks.EventCenter.bind(Polyworks.Events.LEVEL_REQUIREMENTS_MET, this.onLevelRequirementsMet, this);
		}
		this.terrain = this.getChildByName('terrain');
		this.sectorManager = this.getChildByName('sectors');
		this.sectorManager.setState(this);
		this.sectorManager.setActiveSector(0);

		var playerStart = Polyworks.Utils.clone(PolyworksGame.get('player').attrs.start);
		// trace('LevelState['+this.model.name+']/createState\n\tplayerStart = ', playerStart);
		this.createPlayer(playerStart, PolyworksGame.startingHealth);

		// this.getChildByName('pauseGUI').hide();
		// this.getChildByName('completedGUI').hide();
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
		this.playerGroupPresent = true;
		// trace('LevelState['+this.model.name+']/player created, jump = ' + playerConfig.attrs.speed.y, playerConfig);
	};

	LevelState.prototype.destroyPlayer = function() {
		if(this.playerGroupPresent) {
			this.playerGroup.destroy(true);
			this.playerGroupPresent = false;
		}
		if(this.playerPresent) {
			this.player.destroy();
			this.playerPresent = false;
		} 
	};
	
	LevelState.prototype.update = function() {
		if(!this.paused) {
			// trace('LevelState['+this.model.name+']/update');
			if(this.requirementsMet && (this.player.body.x >= this.model.bounds.end)) {
				if(!this.triggeredCleared) {
					// immediately stop player from updating by killing group
					this.destroyPlayer();

					this.triggeredCleared = true;
					this.levelCleared();
				}
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
				var terrainGroup = this.terrain.group;
				var requirementsGroup = (this.requirements) ? this.requirements.getActive() : null;
				var dynamicTerrainGroup = sector.dynamicTerrain.getActive();
				var hazards = sector.hazards.getActive();
				var enemies = sector.enemies.getActive();
				var bonuses = sector.bonuses.getActive();
				var physicalItems = {};

				physicalItems.Terrain = terrainGroup;

				if(requirementsGroup) physicalItems.Requirements = requirementsGroup;
				if(dynamicTerrainGroup) physicalItems.DynamicTerrain = dynamicTerrainGroup;
				if(hazards) physicalItems.Hazards = hazards;
				if(enemies) physicalItems.Enemies = enemies;
				if(bonuses) physicalItems.Bonuses = bonuses;

				this.player.pwUpdate({
					physicalItems: physicalItems,
					context: this
				});
			}
			LevelState._super.update.call(this);
		}
	};

	LevelState.prototype.onLevelRequirementsMet = function() {
		// trace('LevelState['+this.model.name+']/onLevelRequirementsMet');
		this.requirementsMet = true;
	};
	
	LevelState.prototype.onPauseState = function() {
		// trace('LevelState['+this.model.name+']/onPauseState');
		LevelState._super.onPauseState.call(this);
		if(this.paused) {
			this.pauseState();
		} else {
			this.resumeState();
		}
	};
	
	LevelState.prototype.onResumeState = function() {
		// trace('LevelState['+this.model.name+']/onResumeState');
		LevelState._super.onResumeState.call(this);
		this.resumeState();
	};
	
	LevelState.prototype.pauseState = function() {
		this.destroyPlayer();

		this.sectorManager.deactivateAll();
		this.playerPosition = {
			x: this.player.x,
			y: this.player.y
		};
		// trace('LevelState/pauseState, playerPosition = ', this.playerPosition, this.player);
		// this.playerGroup.visible = false;
		this.showPauseGUI(true);
	};
	
	LevelState.prototype.resumeState = function() {
		this.sectorManager.setActiveSector(this.sectorManager.activeSectorId);
		this.createPlayer(this.playerPosition, PolyworksGame.health);
		this.playerGroup.visible = true; 
		this.showPauseGUI(false);
	};
	
	LevelState.prototype.showPauseGUI = function(show) {
		// trace('LevelState['+this.model.name+']/showPauseGUI, show = ' + show);
		if(show) {
			this.getChildByName('levelGUI').hide();
			this.getChildByName('levelControls').hide();
			this.getChildByName('pauseGUI').show();
		} else {
			this.getChildByName('levelGUI').show();
			this.getChildByName('levelControls').show();
			this.getChildByName('pauseGUI').hide();
		}
	};
	
	LevelState.prototype.showCompletedGUI = function() {
		// trace('LevelState['+this.model.name+']/showCompletedGUI');

		this.getChildByName('levelGUI').hide();
		this.getChildByName('levelControls').hide();
		this.getChildByName('completedGUI').show();
	};
	
	LevelState.prototype.levelCleared = function() {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.LEVEL_CLEARED, value: this.model.name });

		if(PolyworksGame.currentLevel < (PolyworksGame.totalLevels)) {
			PolyworksGame.currentLevel++;
		} else {
			PolyworksGame.currentLevel = -1;
		}
		this.sectorManager.deactivateAll();

		this.showCompletedGUI();
	};
	
	LevelState.prototype.shutdown = function() {
		// trace('LevelState['+this.model.name+']/shutdown');
		Polyworks.EventCenter.unbind(Polyworks.Events.LEVEL_REQUIREMENTS_MET, this.onLevelRequirementsMet, this);
		this.destroyPlayer();
		LevelState._super.shutdown.call(this);
	};

	return LevelState;
})();
