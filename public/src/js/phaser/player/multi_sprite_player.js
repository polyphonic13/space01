Polyworks.MultiSpritePlayer = (function() {
	Utils.inherits(MultiSpritePlayer, Polyworks.Player);
	
	function MultiSpritePlayer(params) {
		MultiSpritePlayer._super.constructor.call(this, params);
		this.anatomy = {
			attack: {},
			vunerable: {}
		};
	}
	
	MultiSpritePlayer.prototype.beginSprite = function() {
		var views = this.model.views;
		var view;

		for(var i = 0; i < views; i++) {
			view = new Polyworks[views[i].spriteType](views[i].attrs, this.model.name + '-sprite-' + i);
			view.begin();
			if(view[i].attrs.isVunerable) {
				this.anatomy.vunerable[view[i].name] = view;
			} else {
				this.anatomy.attack[view[i].name] = view;
			}
		}
	};
	
	MultiSpritePlayer.prototype.updateEnemyCollision = function(enemies, physics) {
		this.updateEnemyCollisionByParts('attack', enemies, physics);
		this.updateEnemyCollisionByParts('vunerable', enemies, physics);
	};
	
	MultiSpritePlayer.prototype.updateEnemyCollisionByParts = function(partType, enemies, physics) {
		var parts = this.anatomy[partType];
		var func = partType + 'ViewCollision';

		for(var key in parts) {
			this.checkCollision(parts[key], enemies, this[func], physics, this);
		}
	};
	
	MultiSpritePlayer.prototype.checkCollision = function(anatomy, collection, callback, physics, context) {
		for(var i = 0; i < collection.length; i++) {
			physics.overlap(anatomy.sprite, collection[i].sprite, callback, null, context);
		}
	};
	
	MultiSpritePlayer.prototype.attackViewCollision = function(playerSprite, sprite) {
		trace('Player/attackViewCollision, playerSprite = ');
		trace(playerSprite);
		trace('sprite = ');
		trace(sprite);
		var enemy = this.model.sectorManager.activeSector.enemies.getItemByName(sprite.namex);
		// Polyworks.EventCenter.trigger({ type: Polyworks.Events.ENEMY_COLLISION, player: player, enemy: enemy });
		this.updatePositionFromCollision();
		enemy.receiveDamage(this.model.damage);
	};
	
	MultiSpritePlayer.prototype.vunerableViewCollision = function(playerSprite, sprite) {
		trace('Player/attackViewCollision, playerSprite = ');
		trace(playerSprite);
		trace('sprite = ');
		trace(sprite);
		var enemy = this.model.sectorManager.activeSector.enemies.getItemByName(sprite.namex);
		// Polyworks.EventCenter.trigger({ type: Polyworks.Events.ENEMY_COLLISION, player: player, enemy: enemy });
		this.receiveDamage(enemy.damage);
	};

	return MultiSpritePlayer;
})();
