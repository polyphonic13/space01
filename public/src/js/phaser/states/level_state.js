	PWG.LevelState = (function() {
	PWG.Utils.inherits(LevelState, PWG.State); 
	
	var _this;
	function LevelState(params) {
		// trace('LevelState/constructor, phaser = ');
		_this = this;
		LevelState._super.constructor.call(this, params);

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
		trace('LevelState['+this.model.name+']/createState, this = ', this);

		// create views and controls with super
		LevelState._super.createState.call(this);

		this.paused = false;
		this.gameOver = false;
		this.triggeredCleared = false;
		this.requirementsMet = false; 

		// PWG.EventCenter.bind(PWG.Events.AD_STARTED, this.onPauseState, this);
		// PWG.EventCenter.bind(PWG.Events.AD_COMPLETED, this.onResumeState, this);
		// PWG.EventCenter.bind(PWG.Events.PAUSE_STATE, this.onPauseState, this);

		this.requirements = this.getChildByName('requirements');
		// trace('\n\n\trequirements = ', this.requirements, '\tgroup = ', this.requirements.group);
		if(this.requirements) {
			PWG.EventCenter.bind(PWG.Events.LEVEL_REQUIREMENTS_MET, this.onLevelRequirementsMet, this);
		} else {
			// no requirements; allow level completion at end bounds
			this.requirementsMet = true;
		}

		this.terrain = this.getChildByName('terrain');
		
		this.goals = this.getChildByName('goals');
		this.goalsReached = 0;
		this.totalGoals = this.goals.getLength(); 
		this.allGoalsReached = false;
		PWG.EventCenter.bind(PWG.Events.GOAL_REACHED, this.onGoalReached, this);
		
		trace('LevelState['+this.model.name+']/createState, totalGoals = ' + this.totalGoals);
		this.sectorManager = this.getChildByName('sectors');
		this.sectorManager.setState(this);
		this.sectorManager.setActiveSector(0);

		if(this.model.enemies) {
			this.enemyManager = new PWG.EnemyManager(this.model.enemies, this.sectorManager);
		}

		var playerStart = PWG.Utils.clone(PolyworksGame.get('player').attrs.start);
		// trace('LevelState['+this.model.name+']/createState\n\tplayerStart = ', playerStart);
		this.createPlayer(playerStart, PolyworksGame.startingHealth);

		var blackBg = PolyworksGame.phaser.add.sprite(0, 0, 'blackRect');
		blackBg.width = this.model.world.width;
		blackBg.height = this.model.world.height;
	    blackBg.anchor.setTo(0.5, 0.5);
	    blackBg.alpha = 1;
		
		trace('PWG.Stage.winW = ' + PWG.Stage.winW);
		
		this.blackBg = blackBg;
		
	    var tween = PolyworksGame.phaser.add.tween(blackBg)
		tween.onComplete.add(function() {
			blackBg.destroy();
		});
		
		tween.to( { alpha: 0 }, 2000, Phaser.Easing.Exponential.In, true, 0, 0, false);

		trace('end of create state');
		// if(PolyworksGame.adPlaying) {
		// 	this.onPauseState();
		// }
	};

	LevelState.prototype.createPlayer = function(start, health) {
		var playerConfig = PWG.Utils.clone(PolyworksGame.get('player'));
		playerConfig.attrs.attack = 10;
		playerConfig.attrs.start = start;
		// trace('Level['+this.model.name+']/createPlayer, playerConfig = ', playerConfig, '\n\tstart = ', start);

		playerConfig.game = PolyworksGame.phaser;
		playerConfig.sectorManager = this.sectorManager;

		this.playerGroup = PolyworksGame.phaser.add.group();
		this.player = new PWG[playerConfig.cl](playerConfig);
		this.player.begin(health);
		this.playerGroup.add(this.player);
		this.playerPresent = true;
		this.playerGroupPresent = true;

		PolyworksGame.initControls();
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
						x: this.game.camera.x + (PWG.Stage.winW/2),
						y: this.game.camera.y + (PWG.Stage.winH/2)
					}
				};
				this.sectorManager.pwUpdate(updateParams);
				
				if(this.enemyManager) {
					this.enemyManager.pwUpdate(updateParams);
				}
				
				// update player with active sector members & terrain
				var terrainGroup = this.terrain.group;
				var goalGroup = this.goals.group;
				var requirementsGroup = (this.requirements) ? this.requirements.group : null;

				// var dynamicTerrainGroup = (sector.dynamicTerrain) ? sector.dynamicTerrain.getActive() : null;
				var dynamicTerrainGroup = this.sectorManager.localDynamicTerrains;

				if(this.enemyManager) {
					var enemies = this.enemyManager.getActiveEnemies();
				}
				var hazards = (sector.hazards) ? sector.hazards.getActive() : null;
				var bonuses = (sector.bonuses) ? sector.bonuses.getActive() : null;

				var physicalItems = {};

				physicalItems.Terrain = terrainGroup;
				physicalItems.Goals = goalGroup;
				physicalItems.Requirements = requirementsGroup;
				
				if(dynamicTerrainGroup.length > 0) physicalItems.DynamicTerrain = dynamicTerrainGroup;
				if(enemies) physicalItems.Enemies = enemies;
				if(hazards) physicalItems.Hazards = hazards;
				if(bonuses) physicalItems.Bonuses = bonuses;

				// trace('dynamic terrain = ', physicalItems.DynamicTerrain);
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
		trace('LevelState['+this.model.name+']/onPauseState, paused = ' + this.paused);
		if(!this.triggeredCleared) {
			LevelState._super.onPauseState.call(this);
			if(this.paused) {
				trace('\tgoing to call pauseState');
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
		trace('LevelState['+this.model.name+']/pauseState');
		this.destroyPlayer();

		if(this.enemyManager) {
			this.enemyManager.pause();
		}
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
		this.sectorManager.setActiveSector(this.sectorManager.activeSectorIdx);
		this.createPlayer(this.playerPosition, PolyworksGame.health);
		this.playerGroup.visible = true; 
		this.showPauseGUI(false);
		if(this.enemyManager) {
			this.enemyManager.resume();
		}
	};
	
	LevelState.prototype.showPauseGUI = function(show) {
		trace('LevelState['+this.model.name+']/showPauseGUI, show = ' + show, this);
		if(show) {
			this.getChildByName('levelGUI').hide();
			this.getChildByName('requirementsGUI').hide();
			this.getChildByName('requirements').hide();
			this.getChildByName('levelControls').hide();
			this.getChildByName('foreground').hide();
			this.getChildByName('pauseGUI').show();
			this.getChildByName('title').show();
		} else {
			this.getChildByName('levelGUI').show();
			this.getChildByName('requirementsGUI').show();
			this.getChildByName('requirements').show();
			this.getChildByName('levelControls').show();
			this.getChildByName('foreground').show();
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

		PWG.TGSAdapter.addWidget();
	};
	
	LevelState.prototype.levelCleared = function() {
		PWG.EventCenter.trigger({ type: PWG.Events.LEVEL_CLEARED, value: PolyworksGame.currentLevel });

		this.sectorManager.deactivateAll();

		this.showCompletedGUI();
	};
	
	LevelState.prototype.shutdown = function() {
		// trace('LevelState['+this.model.name+']/shutdown');
		PWG.EventCenter.unbind(PWG.Events.LEVEL_REQUIREMENTS_MET, this.onLevelRequirementsMet, this);
		// PWG.EventCenter.unbind(PWG.Events.AD_STARTED, this.onPauseState, this);
		// PWG.EventCenter.unbind(PWG.Events.AD_COMPLETED, this.onResumeState, this);
		
		this.destroyPlayer();
		if(this.enemyManager) {
			this.enemyManager.destroy();
		}
		LevelState._super.shutdown.call(this);
	};

	return LevelState;
})();
