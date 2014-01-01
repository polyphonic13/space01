var Enemy = (function() {
	Utils.inherits(Enemy, View);

	var _this;
	
	function Enemy(params, id, holder) {
		_this = this;
		this.holder = holder;
		params.id = id;
		Enemy._super.constructor.call(this, params);

		this.model.viewObjs = {};
		this.buildViews();
		
		this.model.layer.setPosition(this.model.x, this.model.y);
		
		this.__defineGetter__('alive', function() {
			// trace('Enemy/get health: ' + this.model.health);
			return this.model.alive;
		});
		
		this.__defineGetter__('health', function() {
			// trace('Enemy/get health: ' + this.model.health);
			return this.model.health;
		});
		
		this.__defineSetter__('health', function(val) {
			this.model.health = val;
			if(this.model.health <= 0) {
				this.die();
			}
		});

		this.__defineGetter__('damage', function() {
			return this.model.damage;
		});
		
	}
	
	Enemy.prototype.getAbsolutePosition = function() {
		// return this.model.viewObjs[0].getAbsolutePosition();
		return this.model.layer.getAbsolutePosition();
	};
	
	Enemy.prototype.die = function() {
		trace('Enemy['+this.model.id+']/die');
		this.holder.enemyDied(this.model.id);
		this.model.layer.remove();
		this.model.alive = false;
	};
	
	Enemy.prototype.remove = function() {
		this.model.layer.remove();
	};
	
	Enemy.prototype.buildViews = function() {
		var views = this.model.views
		var view;
		// trace('Enemy/buildViews, this position = ');
		// trace(this.model.layer.getAbsolutePosition());
		for(var i = 0; i < views.length; i++) {
			// trace('\tviews['+i+'] = ');
			// trace(views[i]);
			if(views[i].type === 'Image') {
				var image = this.addImage(views[i], this.model);
				// image.hide();
				// this.model.viewObjs.push(image);
				this.model.viewObjs[views[i].id] = image;
			} else {
				view = new Kinetic[views[i].type](views[i]);
				this.model.layer.add(view);
				this.model.viewObjs.push(view);
			}
		}
	}
	
	return Enemy;
})();