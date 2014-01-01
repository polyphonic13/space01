var SpriteEnemy = (function() {
	Utils.inherits(SpriteEnemy, Enemy);
	
	var _this; 
	var _sprite; 
	
	function SpriteEnemy(params) {
		_this = this;
		SpriteEnemy._super.constructor.call(this, params);

		this.buildViews();
	}

	SpriteEnemy.prototype.setInView = function(val) {
		if(typeof(_sprite) !== 'undefined') {
			if(val) {
				_sprite.start();
			} else {
				_sprite.stop();
			}
		}
		SpriteEnemy._super.setInView.call(this, val);
	};
	
	SpriteEnemy.prototype.die = function() {
		if(typeof(_sprite) !== 'undefined') {
			_sprite.stop();
		}
		SpriteEnemy._super.die.call(this);
	};
	
	SpriteEnemy.prototype.buildViews = function() {
		// trace('SpritePlayer/_buildViews, sprite = ');
		// trace(imageManager.getImage(_this.model.sprite.src));
		_sprite = SpriteCreator.addToModel(_this.model);

		// _sprite.start();
	};

	return SpriteEnemy
})();