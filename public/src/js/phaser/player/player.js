Polyworks.Player = (function() {
	// Utils.inherits(Player, Polyworks.AnimatedSprite);
	Utils.inherits(Player, Polyworks.Base);
	
	function Player(params, id) {
		_this = this;
		Player._super.constructor.call(this, params, id);

		this.initSprite();
		this.initWorld();
	
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
	};
	
	Player.prototype.checkCollision = function(collection, callback, physics) {
		for(var i = 0; i < collection.length; i++) {
			physics.overlap(this.view.sprite, collection[i].sprite, callback, null, this);
		}
	};
	
	Player.prototype.kill = function() {

	};
	
	return Player;
})();