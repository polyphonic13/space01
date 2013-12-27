var Enemy = (function() {
	Utils.inherits(Enemy, View);

	var _this;
	
	function Enemy(params) {
		_this = this;
		Enemy._super.constructor.call(this, params);
		trace('Enemy['+this.model.id+']/constructor, setting position to ' + this.model.x + '/' + this.model.y);
		trace(this.model);
		
		this.buildViews();
		
		this.model.layer.setPosition(this.model.x, this.model.y);
		trace('\tenemy.health = ' + this.model.health + ', damage = ' + this.model.damage);
		
		this.__defineGetter__('alive', function() {
			// trace('Enemy/get health: ' + this.model.health);
			return this.model.alive;
		});
		
		this.__defineGetter__('health', function() {
			// trace('Enemy/get health: ' + this.model.health);
			return this.model.health;
		});
		
		this.__defineSetter__('health', function(val) {
			trace('Enemy/set health: ' + this.model.health);
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
		return this.model.layer.getAbsolutePosition();
	};
	
	Enemy.prototype.moveByVelocity = function(velX, velY) {
		this.model.layer.move((velX * this.model.speed), (velY * this.model.speed));
	};

	Enemy.prototype.die = function() {
		trace('killed enemy['+this.model.id+'], this.model.layer = ');
		trace(this.model.layer);
		this.model.layer.remove();
		this.model.alive = false;
	};
	
	Enemy.prototype.remove = function() {
		this.model.layer.remove();
	};
	
	Enemy.prototype.buildViews = function() {
		var views = this.model.views
		var view;
		for(var i = 0; i < views.length; i++) {
			if(views[i].type === 'Image') {
				_buildImageView(views[i]);
			} else {
				view = new Kinetic[views[i].type](views[i]);
				this.model.layer.add(view);
			}
		}
	}
	
	function _buildImageView(params) {
	    var imageObj = new Image();
		var _model = this.model;
		
		var imgConfig = {
			x: params.x,
			y: params.y,
			width: params.width,
			height: params.height,
			image: imageObj
		};

	    imageObj.onload = function() {
			var image = new Kinetic.Image(imgConfig);
			_model.layer.add(image);
			_model.layer.draw(); // layer has to have draw called each time there is a change
	    };
	    imageObj.src = params.imgUrl;
	}
	
	return Enemy;
})();