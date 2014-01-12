var MovementAnimation = (function() {
	var methods = {
		MOVE: 'move',
		SET_X: 'setX',
		SET_Y: 'setY'
	};
	
	function MovementAnimation(params) {
		var target = params.target;
		var layer = params.layer;
		var animation;
		var method;
		var formula = null; 
		
		animation = new Kinetic.Animation(function(frame) {
			switch(params.type) {
				case MovementTypes.BASIC_X:
					method = methods.MOVE;
					formula = {
						x: params.velocity * (frame.timeDiff / 1000),
						y: 0
					};
				break;

				case MovementTypes.BASIC_Y:
					method = methods.MOVE;
					formula = {
						x: 0,
						y: params.velocity * (frame.timeDiff / 1000)
					};
				break;

				case MovementTypes.SINE_X:
					method = methods.SET_X;
					formula = params.amplitude * Math.sin(frame.time * 2 * Math.PI / params.period) + params.centerX;
				break;

				case MovementTypes.SINE_Y:
					method = methods.SET_Y;
					formula = params.amplitude * Math.sin(frame.time * 2 * Math.PI / params.period) + params.centerY;
				break;

				default:
					// trace("ERROR: unrecognized movement type " + params.type);
				break;
			}


			target[method](formula);
		}, layer);
		
		return animation;
	}
	
	return MovementAnimation;
})();