var config = {
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
	// layers display behing player
	backLayers: [{
		id: 'farMountains',
		images: [{
			url: 'assets/images/hills04_grey.png',
			x: -200,
			y: 0,
			width: 2048,
			height: 512
		}],
		x: -200,
		y: 0,
		width: 2048,
		height: 512,
		speed: 0.1
	},
	{
		id: 'nearHills',
		images: [{
			url: 'assets/images/hills03_grey.png',
			x: -200,
			y: 270,
			width: 2048,
			height: 256
		}],
		x: -200,
		y: 270,
		width: 2048,
		height: 256,
		speed: 0.3
	},
	{
		id: 'treeLine',
		images: [{
			imgUrl: 'assets/images/tree01.png',
			x: 500,
			y: -75,
			width: 256,
			height: 512,
		}],
		x: 500,
		y: -75,
		width: 256,
		height: 512,
		speed: 3
	}],
	// layers displayed on top of player
	foreLayers: [{
		id: 'trees',
		images: [{
			imgUrl: 'assets/images/tree01.png',
			x: 0,
			y: 0,
			width: 256,
			height: 512
		}],
		x: 0,
		y: 0,
		width: 256,
		height: 512,
		speed: 4.5
	},
	{
		id: 'trees',
		images: [{
			imgUrl: 'assets/images/tree01.png',
			x: 0,
			y: 0,
			width: 256,
			height: 512
		}],
		imgUrl: 'assets/images/tree01.png',
		x: 0,
		y: 0,
		width: 256,
		height: 512,
		speed: 5
	}],
 	player: {
		images: {
			forward: 'assets/images/keke.png',
			reverse: 'assets/images/keke_tiny_reverse.png'
		},
        x: 400,
        y: 370,
        width: 20,
        height: 55,
        speed: 2.5,
		jumpTime: 5
    },
   friction: 0.5,
    gravity: 0.2
};