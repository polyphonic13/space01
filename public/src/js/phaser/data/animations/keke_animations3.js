var kekeAnimations = {
	idleL: {
		keyFrames: [1], 
		loop: true,
		frameRate: 14
	},
	idleR: {
		keyFrames: [0], 
		loop: true,
		frameRate: 14
	},
	runL: {
		keyFrames: [21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33], 
		loop: true,
		frameRate: 15
	},
	runR: {
		keyFrames: [7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], 
		loop: true,
		frameRate: 15
	},
	damagedL: {
		keyFrames: [3],
		loop: true,
		frameRate: 13
	},
	damagedR: {
		keyFrames: [2],
		loop: true,
		frameRate: 13
	},
	jumpL: {
		keyFrames: [25], 
		loop: true,
		frameRate: 14
	},
	jumpR: {
		keyFrames: [11], 
		loop: true,
		frameRate: 14
	},
	fallingL: {
		keyFrames: [27],
		loop: true,
		frameRate: 14
	},
	fallingR: {
		keyFrames: [13],
		loop: true,
		frameRate: 14
	}
};

var heartIconAnimations = {
	normal: {
		keyFrames: [0],
		loop: false,
		frameRate: 14
	},
	increased: {
		keyFrames: [1, 1, 1, 2, 2, 3, 0],
		loop: false,
		frameRate: 14
	},
	low: {
		keyFrames: [4, 4, 5, 5, 6, 6, 7, 7],
		loop: true,
		frameRate: 15
	}
}