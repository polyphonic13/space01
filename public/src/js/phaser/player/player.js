Polyworks.Player = (function() {
	// Utils.inherits(Player, Polyworks.AnimatedSprite);
	Utils.inherits(Player, Polyworks.Base);
	
	function Player(params, id) {
		_this = this;
		Player._super.constructor.call(this, params, id);

		this.velX = 0;
		this.velY = 0;
		
		this.initSprite();
		this.initWorld();
		this.initEvents();
		this.initControls();
		
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
	
	Player.prototype.initControls = function() {
		this.activeControls = {};
		this.activeControls[Polyworks.ControlKeys.LEFT] = false;
		this.activeControls[Polyworks.ControlKeys.RIGHT] = false;
		this.activeControls[Polyworks.ControlKeys.UP] = false;
		this.activeControls[Polyworks.ControlKeys.DOWN] = false;
		trace('activeControls');
		trace(this.activeControls);
	};
	
	Player.prototype.onControlButtonPressed = function(event) {
		trace(_this.activeControls);
		_this.activeControls[event.value] = true;
		_this.updateInput();
	};
	
	Player.prototype.onControlButtonReleased = function(event) {
		_this.activeControls[event.value] = false;
		_this.updateInput();
	};
	
	Player.prototype.update = function(params) {
		this.view.checkTerrainCollision(params.terrain);
		var physics = Polyworks.Game.phaser.physics;
		
		this.checkCollision(params.enemies.collection, params.enemies.callback, physics);
		this.checkCollision(params.bonuses.collection, params.bonuses.callback, physics);
		
		// this.checkInput();
	};
	
	Player.prototype.checkCollision = function(collection, callback, physics) {
		for(var i = 0; i < collection.length; i++) {
			physics.overlap(this.view.sprite, collection[i].sprite, callback, null, this);
		}
	};
	
	Player.prototype.updateInput = function() {
		trace('Player/updateInput');
		this.velX = 0;
		this.velY = 0;
		
		// vertical movement
		if (this.activeControls[Polyworks.ControlKeys.LEFT]) {
			this.velX = -this.model.speed.x;
			this.model.facingForward = false;
		}
		else if (this.activeControls[Polyworks.ControlKeys.RIGHT]) {
			this.velX = this.model.speed.x;
			this.model.facingForward = true;
		}

		trace('player velX = ' + this.velX);
		this.view.sprite.body.velocity.x = this.velX;

		// horizontal movement
		if(this.view.sprite.body.touching.down) {
			this.model.jumping = false;
		}
		if(this.activeControls[Polyworks.ControlKeys.UP]) {
			trace('Player/updateInput, up is active')
		} else if(this.activeControls[Polyworks.ControlKeys.DOWN]) {
			trace('Player/updateInput, down is active')
		}

	};
	
	Player.prototype.checkInput = function() {

		 //  Reset the this.players velocity (movement)
			this.view.sprite.body.velocity.x = 0;
			this.velX = 0;
			if (this.activeControls[Polyworks.ControlKeys.LEFT]) {
				this.velX = -this.model.speed.x;
				this.facingForward = false;
			}
			else if (this.activeControls[Polyworks.ControlKeys.RIGHT]) {
				this.velX = this.model.speed.x;
				this.facingForward = true;
			}

			if(this.view.sprite.body.touching.down) {
				this.jumping = false;
			}
			trace('player velX = ' + this.velX);
			this.view.sprite.body.velocity.x = this.velX;
			/*
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
			*/
	};
	
	Player.prototype.kill = function() {

	};
	
	return Player;
})();