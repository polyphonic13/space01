var stage,
	stageConfig = {
		x: 0,
		y: 0,
		// width: document.documentElement.clientWidth - 30,
		// height: document.documentElement.clientHeight - 20,
		width: ((document.documentElement.clientHeight/9) * 16),
		height: document.documentElement.clientHeight,
		// width: 800,
		// height: 500,
		// height: 441,
		color: {
			r: 62,
			g: 62,
			b: 62
		}
	};
	
	// trace('stageConfig.width = ' + stageConfig.width + ', height = ' + stageConfig.height);