PWG.Emitter = (function() {
	
	function Emitter(params) {
		trace('Emitter/constructor, params = ', params);
		this.model = new PWG.Model(params);
	}
	
	
	Emitter.prototype.begin = function() {
		var game = PolyworksGame.phaser;
		var attrs = this.model.attrs;
		var bounds = (attrs.bounds) ? attrs.bounds : game.world.bounds;

		trace('------------------ Emitter/begin, attrs = ', attrs, '\tbounds = ', bounds);
	    this.emitter = game.add.emitter(bounds.x, bounds.y, attrs.maxParticles);
		this.emitter.width = bounds.width;
		this.emitter.height = bounds.height;
	    this.emitter.makeParticles(attrs.particles.keys, 
									attrs.particles.frames,
									attrs.particles.quantity,
									attrs.particles.collide,
									attrs.particles.collideWorldBounds);

		this.emitter.setXSpeed(attrs.speed.x.min, attrs.speed.x.max);
		this.emitter.setYSpeed(attrs.speed.y.min, attrs.speed.y.max);
		this.emitter.minParticleScale = attrs.scale.min;
		this.emitter.maxParticleScale = attrs.scale.max;
		this.emitter.minRotation = attrs.rotation.min;
		this.emitter.maxRotation = attrs.rotation.max;
		this.emitter.gravity = attrs.gravity;
		this.emitter.start(attrs.start.explode, 
							attrs.start.lifespan,
							attrs.start.frequency, 
							attrs.start.quantity);


		/*

				// RANDOM
			    this.emitter.minParticleSpeed.setTo(-200, -300);
			    this.emitter.maxParticleSpeed.setTo(200, -400);
			    this.emitter.gravity = 8;
			    this.emitter.bounce.setTo(0.5, 0.5);
			    this.emitter.particleDrag.x = 10;
			    this.emitter.angularDrag = 30;
				// this.emitter.rotation = -0.5;
			    this.emitter.start(false, 1600, 400);
		*/
	};

	Emitter.prototype.destroy = function() {
		this.emitter.kill();
		this.emitter.destroy();
	};
	
	return Emitter;
})();