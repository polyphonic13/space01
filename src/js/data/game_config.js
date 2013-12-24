var gameConfig = {
	stageFrame: [
	{
		id: 'top',
		x: 0,
		y: 0,
		width: stageConfig.width,
		height: 10
	},
	{
		id: 'bottom',
	    x: 0,
	    y: stageConfig.height - 40,
	    width: stageConfig.width,
	    height: 50
	},
	{
		id: 'left',
	    x: 0,
	    y: 0,
	    width: 10,
	    height: stageConfig.height
	},
	{
		id: 'right',
	    x: stageConfig.width - 10,
	    y: 0,
	    width: 50,
	    height: stageConfig.height
	}],
	scrollingLayers: [{
		id: 'mountains',
		imgUrl: 'images/hills03_grey.png',
		startX: -100,
		startY: 50,
		width: 2048,
		height: 256,
		speed: 0.3
	},
	{
		id: 'backgroundTrees',
		imgUrl: 'images/trees_back01.png',
		startX: -64,
		startY: 80,
		width: 2048,
		height: 350,
		speed: 0.7
	},
	{
		id: 'foregroundTrees1',
		imgUrl: 'images/trees_fore01.png',
		startX: -256,
		startY: -40,
		width: 2048,
		height: 500,
		speed: 3
	},
	{
		id: 'foregroundTrees2',
		imgUrl: 'images/trees_fore01.png',
		startX: 1792,
		startY: -40,
		width: 2048,
		height: 500,
		speed: 3
	},
	{
		id: 'foregroundTrees3',
		imgUrl: 'images/trees_fore01.png',
		startX: 3840,
		startY: -40,
		width: 2048,
		height: 500,
		speed: 3
	}],
 	player: {
		x: stageConfig.width / 2,
		y: stageConfig.height - 256,
		position: 0,
	    width: 76,
	    height: 128,
	    speed: 5,
	    velX: 0,
	    velY: 0,
	    jumping: false,
		justJumped: false,
	    grounded: true,
		sprite: {
			url: 'images/keke_character2.png',
			x: 0,
			y: 0,
			index: 0,
			frameRate: 14
		}
    },
   friction: 0.5,
    gravity: 0.2
};

// pine: http://stackoverflow.com/questions/4511632/pseudo-code-for-pine-tree-point-per-point-generation-2d
