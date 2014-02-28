Polyworks.Snow = (function() {
	Polyworks.Utils.inherits(Snow, Polyworks.Emitter);
	
	function Snow(params) {
		trace('Snow/constructor');
		var defaults = {
				attrs: {
				maxParticles: 5000,
				particles: {
					keys: 'particle',
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
			}
		};

		params = Polyworks.Utils.extend(params, defaults);
		Snow._super.constructor.call(this, params);
	}
	
	return Snow;
})();