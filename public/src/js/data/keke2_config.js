var config = {
	world: {
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight,
		gravity: 15
	},
	currentSector: 0,
	sectors: [{
		id: 0,
		active: false,
		created: false,
		bounds: {
			start: 0,
			end: 1024
		},
		enemies: [{
			id: 0,
			type: 'caterpillar01',
			start: {
				x: 512,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			alive: true,
			currentAnimation: '',
			animations: caterpillarAnimations
		},
		{
			id: 1,
			type: 'caterpillar01',
			start: {
				x: 1000,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			alive: true,
			currentAnimation: '',
			animations: caterpillarAnimations
		}],
		bonuses: [{
			id: 0,
			type: 'lollipop',
			start: {
				x: 750,
				y: 0
			},
			score: 100,
			health: 10,
			alive: true
		}]
	},
	{
		id: 1,
		active: false,
		created: false,
		bounds: {
			start: 1024,
			end: 2048
		},
		enemies: [{
			id: 0,
			type: 'caterpillar01',
			start: {
				x: 512,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			alive: true,
			currentAnimation: '',
			animations: caterpillarAnimations
		},
		{
			id: 1,
			type: 'caterpillar01',
			start: {
				x: 1000,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			alive: true,
			currentAnimation: '',
			animations: caterpillarAnimations
		}],
		bonuses: [{
			id: 0,
			type: 'lollipop',
			start: {
				x: 750,
				y: 0
			},
			score: 100,
			health: 10,
			alive: true
		}]
	},
	{
		id: 3,
		active: false,
		created: false,
		bounds: {
			start: 2048,
			end: 3072
		},
		enemies: [{
			id: 0,
			type: 'caterpillar01',
			start: {
				x: 512,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			alive: true,
			currentAnimation: '',
			animations: caterpillarAnimations
		},
		{
			id: 1,
			type: 'caterpillar01',
			start: {
				x: 1000,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			alive: true,
			currentAnimation: '',
			animations: caterpillarAnimations
		}],
		bonuses: [{
			id: 0,
			type: 'lollipop',
			start: {
				x: 750,
				y: 0
			},
			score: 100,
			health: 10,
			alive: true
		}]
	},
	{
		id: 4,
		active: false,
		created: false,
		bounds: {
			start: 3072,
			end: 4098
		},
		enemies: [{
			id: 0,
			type: 'caterpillar01',
			start: {
				x: 512,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			alive: true,
			currentAnimation: '',
			animations: caterpillarAnimations
		},
		{
			id: 1,
			type: 'caterpillar01',
			start: {
				x: 1000,
				y: 0
			},
			speed: 1,
			damage: 5,
			health: 5,
			score: 500,
			alive: true,
			currentAnimation: '',
			animations: caterpillarAnimations
		}],
		bonuses: [{
			id: 0,
			type: 'lollipop',
			start: {
				x: 10,
				y: 0
			},
			score: 100,
			health: 10,
			alive: true
		}]
	}],
	player: {
		width: 76,
		height: 148,
		bounce: 0.2,
		speed: 50,
		health: 100,
		damage: 5,
		jumpHeight: 350,
		jumping: false,
		justJumped: false,
		currentAnimation: '',
		facingForward: true
	}
};