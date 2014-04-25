Polyworks.HeartIcon = (function() {
	Polyworks.Utils.inherits(HeartIcon, Polyworks.Sprite);
	
	function HeartIcon(params) {
		HeartIcon._super.constructor.call(this, params);
	}
	
	HeartIcon.prototype.begin = function() {
		// trace('HeartIcon/begin');
		HeartIcon._super.begin.call(this);
		this.healthSet = false;
		this.currentAnimation = this.model.attrs.defaultAnimation;
		this.addListeners();
	};
	
	HeartIcon.prototype.addListeners = function() {
		Polyworks.EventCenter.bind(Polyworks.Events.HEALTH_UPDATED, this.onHealthUpdated, this);
	};
	
	HeartIcon.prototype.removeListeners = function() {
		Polyworks.EventCenter.unbind(Polyworks.Events.HEALTH_UPDATED, this.onHealthUpdated, this);
	};
	
	HeartIcon.prototype.onAnimationComplete = function() {
		trace('HEART ICON ON ANIMATION COMPLETE');
	}
	
	HeartIcon.prototype.onHealthUpdated = function(params) {
		var newHealth = PolyworksGame.health;
		// trace('HeartIcon/onHealthUpdate, this.model.health = ' + this.model.health + ', health = ', newHealth);
		if(this.healthSet) {
			var animations = this.model.attrs.animations;
			if(newHealth < this.model.lowHealth) {
				if(this.currentAnimation !== 'low') {
					this.play('low', animations['low'].frameRate, animations['low'].loop);
				}
			} else if(newHealth > this.model.health) {
				if(this.currentAnimation !== 'increased') {
					this.play('increased', animations['increased'].frameRate, animations['increased'].loop);
				}
			} else {
				this.play('normal', animations['normal'].frameRate, animations['normal'].loop);
			}
			
		} else {
			this.healthSet = true;
		}
		this.model.health = newHealth;
	};
	
	HeartIcon.prototype.destroy = function() {
		this.removeListeners();
		HeartIcon._super.destroy.call(this);
	};
	
	return HeartIcon;
})();