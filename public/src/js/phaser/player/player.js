Polyworks.Player = (function() {
	// Utils.inherits(Player, Polyworks.AnimatedSprite);
	Utils.inherits(Player, Polyworks.Base);
	
	function Player(params, id) {
		_this = this;
		Player._super.constructor.call(this, params, id);

		this.initSprite();
		this.initWorld();
		this.initEvents();
		
		this.__defineGetter__('health', function() {
			return this.model.health;
		});
		
		this.__defineSetter__('health', function(val) {
			this.model.health = val;
		});
		
		this.__defineGetter__('damage', function() {
			return this.model.damage;
		});
		
		this.__defineGetter__('sprite', function() {
			return this.view.sprite;
		});
	}
	
	Player.prototype.initSprite = function() {
		var view = new Polyworks[this.model.spriteType](this.model, this.id + '-sprite');
		view.init();
		this.view = view;
	};
	
	Player.prototype.initWorld = function() {
		if(this.model.anchor) {
			this.view.sprite.anchor.setTo(this.model.anchor.x, this.model.anchor.y);
		}
		Polyworks.Game.phaser.camera.follow(this.view.sprite, Phaser.Camera.FOLLOW_PLATFORMER);

	};
	
	Player.prototype.initEvents = function() {
		Polyworks.EventCenter.bind(Polyworks.Events.CONTROL_BUTTON_PRESSED, this.onControlButtonPressed);
		Polyworks.EventCenter.bind(Polyworks.Events.CONTROL_BUTTON_RELEASED, this.onControlButtonReleased);
	};
	
	Player.prototype.onControlButtonPressed = function(event) {
		trace('Player/onControlButtonPressed, event = ');
		trace(event);
	};
	
	Player.prototype.onControlButtonReleased = function(event) {
		trace('Player/onControlButtonReleased, event = ');
		trace(event);
	};
	
	Player.prototype.update = function(params) {
		this.view.checkTerrainCollision(params.terrain);
		var physics = Polyworks.Game.phaser.physics;
		
		this.checkCollision(params.enemies.collection, params.enemies.callback, physics);
		this.checkCollision(params.bonuses.collection, params.bonuses.callback, physics);
		
		this.checkInput();
	};
	
	Player.prototype.checkCollision = function(collection, callback, physics) {
		for(var i = 0; i < collection.length; i++) {
			physics.overlap(this.view.sprite, collection[i].sprite, callback, null, this);
		}
	};
	
	Player.prototype.checkInput = function() {
		/*
			if(!this.gameOver) {
				if(this.controls.isDown(ControlButtonTypes.QUIT)) {
					this.close();
				} else {
				 //  Reset the this.players velocity (movement)
					this.player.sprite.body.velocity.x = 0;
					var velX = 0;
					if (this.cursors.left.isDown || this.controls.isDown(ControlButtonTypes.LEFT)) {
						velX = -config.player.speed;
						config.player.facingForward = false;
					}
					else if (this.cursors.right.isDown || this.controls.isDown(ControlButtonTypes.RIGHT)) {
						velX = config.player.speed;
						config.player.facingForward = true;
					}

					if(this.player.sprite.body.touching.down) {
						config.player.jumping = false;
					}
					//  Allow the this.player to jump if they are touching the ground.
					if(this.cursors.up.isDown || this.controls.isDown(ControlButtonTypes.UP)) {
						if(this.player.sprite.body.touching.down && !config.player.justJumped) {
							this.player.sprite.body.velocity.y = -config.player.jumpHeight;
							config.player.jumping = true;
						}
					} 
					if(this.player.sprite.body.touching.down && config.player.jumpButtonPressed && !config.player.justJumped) {
						this.player.sprite.body.velocity.y = -config.player.jumpHeight;
						config.player.jumping = true;
						config.player.jumpButtonPressed = false;
					}
					this.player.sprite.body.velocity.x = velX;
				}
			}
		*/
	};
	
	Player.prototype.kill = function() {

	};
	
	return Player;
})();