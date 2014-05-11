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
		// trace('LevelState['+this.model.name+']/create, adCompleted = ' + this.adCompleted);
		LevelState._super.create.call(this);
	};
	
	LevelState.prototype.createState = function() {
		// trace('LevelState['+this.model.name+']/createState');
		this.triggeredCleared = false;
		this.requirementsMet = false; 

		// create views and controls with super
		LevelState._super.createState.call(this);

		// Polyworks.EventCenter.bind(Polyworks.Events.AD_STARTED, this.onPauseState, this);
		// Polyworks.EventCenter.bind(Polyworks.Events.AD_COMPLETED, this.onResumeState, this);

		this.requirements = this.getChildByName('requirements');
		// trace('\n\n\trequirements = ', this.requirements, '\tgroup = ', this.requirements.group);
		if(this.requirements) {
			Polyworks.EventCenter.bind(Polyworks.Events.LEVEL_REQUIREMENTS_MET, this.onLevelRequirementsMet, this);
		} else {
			// no requirements; allow level completion at end bounds
			this.requirementsMet = true;
		}

		this.terrain = this.getChildByName('terrain');
		
		this.goals = this.getChildByName('goals');
		this.goalsReached = 0;
		this.totalGoals = this.goals.getLength(); 
		this.allGoalsReached = false;
		Polyworks.EventCenter.bind(Polyworks.Events.GOAL_REACHED, this.onGoalReached, this);
		
		trace('LevelState['+this.model.name+']/createState, totalGoals = ' + this.totalGoals);
		this.sectorManager = this.getChildByName('sectors');
		this.sectorManager.setState(this);
		this.sectorManager.setActiveSector(0);

		var playerStart = Polyworks.Utils.clone(PolyworksGame.get('player').attrs.start);
		// trace('LevelState['+this.model.name+']/createState\n\tplayerStart = ', playerStart);
		this.createPlayer(playerStart, PolyworksGame.startingHealth);
		trace('end of create state');
		// if(PolyworksGame.adPlaying) {
		// 	this.onPauseState();
		// }
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
		// this.player.activateGravity();
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
		if(!this.paused && !PolyworksGame.adPlaying) {
			// trace('LevelState['+this.model.name+']/update');
			// if(this.requirementsMet && (this.player.body.x >= this.model.bounds.end)) {
			if(this.requirementsMet && this.allGoalsReached) {
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
					dynamicTerrain: (sector.dynamicTerrain) ? sector.dynamicTerrain.getActive() : null,
					position: {
						x: this.game.camera.x + (Polyworks.Stage.winW/2),
						y: this.game.camera.y + (Polyworks.Stage.winH/2)
					}
				};
				this.sectorManager.pwUpdate(updateParams);

				// update player with active sector members & terrain
				var terrainGroup = this.terrain.group;
				var goalGroup = this.goals.group;
				var requirementsGroup = (this.requirements) ? this.requirements.group : null;

				var dynamicTerrainGroup = (sector.dynamicTerrain) ? sector.dynamicTerrain.getActive() : null;
				var groupEnemies = (sector.groupEnemies) ? sector.groupEnemies.getActive() : null;
				var enemies = (sector.enemies) ? sector.enemies.getActive() : null;
				var hazards = (sector.hazards) ? sector.hazards.getActive() : null;
				var bonuses = (sector.bonuses) ? sector.bonuses.getActive() : null;

				var physicalItems = {};

				physicalItems.Terrain = terrainGroup;
				physicalItems.Goals = goalGroup;

				if(requirementsGroup) physicalItems.Requirements = requirementsGroup;
				if(dynamicTerrainGroup) physicalItems.DynamicTerrain = dynamicTerrainGroup;
				if(groupEnemies) physicalItems.GroupEnemies = groupEnemies;
				if(enemies) physicalItems.Enemies = enemies;
				if(hazards) physicalItems.Hazards = hazards;
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
	
	LevelState.prototype.onGoalReached = function() {
		this.goalsReached++;
		if(this.goalsReached >= this.totalGoals) {
			this.allGoalsReached = true;
		}
	};

	LevelState.prototype.onPauseState = function() {
		// trace('LevelState['+this.model.name+']/onPauseState');
		if(!this.triggeredCleared) {
			LevelState._super.onPauseState.call(this);
			if(this.paused) {
				this.pauseState();
			} else {
				this.resumeState();
			}
		}
	};
	
	LevelState.prototype.onResumeState = function() {
		// trace('LevelState['+this.model.name+']/onResumeState');
		if(!PolyworksGame.adPlaying) {
			LevelState._super.onResumeState.call(this);
			this.resumeState();
		}
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
		trace('LevelState['+this.model.name+']/showPauseGUI, show = ' + show, this);
		if(show) {
			this.getChildByName('levelGUI').hide();
			this.getChildByName('requirementsGUI').hide();
			this.getChildByName('requirements').hide();
			this.getChildByName('levelControls').hide();
			this.getChildByName('pauseGUI').show();
			this.getChildByName('title').show();
		} else {
			this.getChildByName('levelGUI').show();
			this.getChildByName('requirementsGUI').show();
			this.getChildByName('requirements').show();
			this.getChildByName('levelControls').show();
			this.getChildByName('pauseGUI').hide();
			this.getChildByName('title').hide();
		}
	};
	
	LevelState.prototype.showCompletedGUI = function() {
		// trace('LevelState['+this.model.name+']/showCompletedGUI');

		this.getChildByName('levelGUI').hide();
		this.getChildByName('requirementsGUI').hide();
		this.getChildByName('requirements').hide();
		this.getChildByName('levelControls').hide();
		this.getChildByName('completedGUI').show();
		this.getChildByName('title').show();
	};
	
	LevelState.prototype.levelCleared = function() {
		Polyworks.EventCenter.trigger({ type: Polyworks.Events.LEVEL_CLEARED, value: PolyworksGame.currentLevel });

		this.sectorManager.deactivateAll();

		this.showCompletedGUI();
	};
	
	LevelState.prototype.shutdown = function() {
		// trace('LevelState['+this.model.name+']/shutdown');
		Polyworks.EventCenter.unbind(Polyworks.Events.LEVEL_REQUIREMENTS_MET, this.onLevelRequirementsMet, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.AD_STARTED, this.onPauseState, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.AD_COMPLETED, this.onResumeState, this);

		this.destroyPlayer();
		LevelState._super.shutdown.call(this);
	};

	return LevelState;
})();
