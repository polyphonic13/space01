var caterpillarAnimations = {
	idle: {
		keyFrames: [0],
		loop: false,
		frameRate: 10
	},
	walkL: {
		keyFrames: [1, 2, 3, 4, 5],
		loop: true,
		frameRate: 10
	},
	walkR: {
		keyFrames: [9, 10, 11, 12, 13],
		loop: true,
		frameRate: 10
	},
	fallingL: {
		keyFrames: [7],
		loop: true,
		frameRate: 10
	},
	fallingR: {
		keyFrames: [15],
		loop: true,
		frameRate: 10
	}
};

var spiderAnimations = {
	idle: {
		keyFrames: [0, 4, 8],
		loop: false,
		frameRate: 10
	},
	walkL: {
		keyFrames: [1, 2, 3, 5, 6, 7, 9, 10, 11],
		loop: true,
		frameRate: 7
	},
	walkR: {
		keyFrames: [1, 2, 3, 5, 6, 7, 9, 10, 11],
		loop: true,
		frameRate: 7
	},
	fallingL: {
		keyFrames: [0],
		loop: true,
		frameRate: 10
	},
	fallingR: {
		keyFrames: [0],
		loop: true,
		frameRate: 10
	}
};

var caterpillarBossHeadAnimations = {
	idle: {
		keyFrames: [0],
		loop: false,
		frameRate: 10
	},
	attackL: {
		keyFrames: [1, 2, 3],
		loop: true,
		frameRate: 10
	},
	attackR: {

	}
};

var lavaAnimations = {
	bubble: {
		keyFrames: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7],
		loop: true,
		frameRate: 15
	}
};