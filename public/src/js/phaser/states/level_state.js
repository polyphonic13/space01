Polyworks.LevelState = (function() {
	Utils.inherits(LevelState, Polyworks.State); 
	
	function LevelState(params, this.game) {
		State._super.constructor.call(this, params, this.game);
		this.this.sectorManager = new Polyworks.SectorManager(this.model.sectors);
	};
	
	LevelState.prototype.preload = function() {
		trace('LevelState['+this.id+']/preload');
		var images = config.images;
		trace('preload images');
		for(key in images) {
			this.game.load.image(key, images[key]);
		}
		var sprites = config.sprites;
		trace('preload sprites');
		for(key in sprites) {
			// trace('\t' + key + ', width = ' + sprites[key].width + ', height = ' + sprites[key].height + ', frames = ' + sprites[key].frames);
			this.game.load.spritesheet(key, sprites[key].url, sprites[key].width, sprites[key].height, sprites[key].frames);
		}

		// keyboard buttons
		cursors = this.game.input.keyboard.createCursorKeys();
	};
	
	LevelState.prototype.create =  function() {
		trace('LevelState['+this.id+']/create');
		this.game.world.setBounds(config.world.x, config.world.y, config.world.width, config.world.height);

		createScenery();
		createTerrain();
		this.sectorManager = new Polyworks.Sectors(config.sectors);
		createPlayer();
		createControls();
		createGui();
	};
	
	LevelState.prototype.createScenery = function() {
		var sky = this.game.add.sprite(0, 0, 'sky');
		sky.width = stage.width;
		sky.height = stage.height;
		sky.fixedToCamera = true;

		this.game.add.sprite(0, 0, 'mountains');
		this.game.add.sprite(0, (stage.height - 490), 'treesBack');
		this.game.add.sprite(0, 0, 'treesFore');
		this.game.add.sprite(2048, 0, 'mountains');
		this.game.add.sprite(2048, (stage.height - 490), 'treesBack');
		this.game.add.sprite(2048, 0, 'treesFore');

		this.game.add.sprite(0, (stage.height - 200), 'grass1');
		this.game.add.sprite(2048, (stage.height - 200), 'grass2');

	}

	LevelState.prototype.createTerrain = function() {
		//  The this.platforms group contains the ground and the 2 ledges we can jump on
		this.platforms = this.game.add.group();

		var ground = this.platforms.create(0, this.game.world.height - 20, 'platform');
		ground.scale.setTo(8, 1);
		ground.body.immovable = true;

		ground = this.platforms.create(2048, this.game.world.height - 20, 'platform');
		ground.scale.setTo(8, 1);
	  	ground.body.immovable = true;

		var ledge = this.platforms.create(500, (config.world.height - 75), 'platform');
		ledge.body.immovable = true;

		ledge = this.platforms.create(800, (config.world.height - 130), 'platform');
		ledge.body.immovable = true;

		ledge = this.platforms.create(1024, 0, 'platform');
		ledge.body.immovable = true;

		ledge = this.platforms.create(1100, (config.world.height - 180), 'platform');
		ledge.body.immovable = true;

		ledge = this.platforms.create(2048, 0, 'platform');
		ledge.body.immovable = true;

		ledge = this.platforms.create(3072, 0, 'platform');
		ledge.body.immovable = true;

		var ledge = this.platforms.create(3100, (config.world.height - 75), 'platform');
		ledge.scale.setTo(0.8, 1);
		ledge.body.immovable = true;

		ledge = this.platforms.create(3300, (config.world.height - 130), 'platform');
		ledge.scale.setTo(0.8, 1);
		ledge.body.immovable = true;

		ledge = this.platforms.create(3500, (config.world.height - 180), 'platform');
		ledge.scale.setTo(0.8, 1);
		ledge.body.immovable = true;
	}

	LevelState.prototype.createPlayer = function() {
		trace('createPlayer');
		this.player = this.game.add.sprite((stage.width/2 - 76/2), (stage.height - 148), 'keke');
		this.player.anchor.setTo(0.5, 0.5);

		this.player.animations.add('idleR', [0], 14);
		this.player.animations.add('idleL', [1], 14);
		this.player.animations.add('runR', [7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19], 13);
		this.player.animations.add('runL', [21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33], 13);
		this.player.animations.add('jumpR', [2], 14);
		this.player.animations.add('jumpL', [3], 14);

		//  Player physics properties.
		// this.player.body.setSize(30, config.this.player.height - 25, 0, 0); // bounding box
		this.player.body.bounce.y = config.this.player.bounce;
		this.player.body.gravity.y = config.world.gravity;
		this.player.body.collideWorldBounds = true;

		this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);
	};

	LevelState.prototype.update = function() {
		if(!this.gameOver) {

			this.sectorManager.checkTerrainCollision(this.platforms);
			this.sectorManager.setActive(this.game.camera.x + (stage.width/2));

			var sector = this.sectorManager.activeSector;
			sector.enemies.update({ this.player: this.player });

			checkCollisions(sector);

			checkGameInput();
			setPlayerAnimations();
		}
	};
	
	return LevelState;
})();
