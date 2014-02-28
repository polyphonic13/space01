Polyworks.Snow = (function() {
	Polyworks.Utils.inherits(Snow, Polyworks.Emitter);
	
	function Snow(params) {
		trace('Snow/constructor, params = ', params);
		var defaults = {
				maxParticles: 400,
				particles: {
					keys: 'snowFlake01',
					frames: 0,
					quantity: 0,
					collide: '',
					collideWorldBounds: false
				},
				scale: {
					min: 0.1,
					max: 0.5
				},
				speed: {
					x: {
						min: -100,
						max: -90
						// min: 0,
						// max: 0
					},
					y: {
						min: 50,
						max: 100
					}
				},
				rotation: {
					min: 0,
					max: 0
				},
				gravity: 0,
				start: {
					explode: false,
					lifespan: 8000,
					frequency: 10,
					quantity: false
				}
		};

		params.attrs = Polyworks.Utils.extend(params.attrs, defaults);
		trace('\tparams now = ', params);
		Snow._super.constructor.call(this, params);
	}
	
	return Snow;
})();