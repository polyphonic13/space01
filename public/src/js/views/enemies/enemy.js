var Enemy = (function() {
	Utils.inherits(Enemy, View);

	var _this;
	
	function Enemy(params, id, holder) {
		_this = this;
		this.holder = holder;
		params.id = id;
		Enemy._super.constructor.call(this, params);

		this.model.viewObjs = [];
		this.buildViews();
		
		if(this.model.movement) {
			this.setUpAnimation(this.model.movement);
		}
		
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
		return this.model.viewObjs[0].getAbsolutePosition();
	};
	
	Enemy.prototype.moveByVelocity = function(velX, velY) {
		this.model.layer.move((velX * this.model.speed), (velY * this.model.speed));
	};

	Enemy.prototype.die = function() {
		trace('killed enemy['+this.model.id+'], this.model.layer = ');
		trace(this.model.layer);
		if(this.anim) {
			this.anim.stop();
		}
		this.holder.enemyDied(this.model.id);
		this.model.layer.remove();
		this.model.alive = false;
	};
	
	Enemy.prototype.remove = function() {
		this.model.layer.remove();
	};
	
	Enemy.prototype.setUpAnimation = function(params) {
		// trace('Enemy/setUpAnimation, views =');
		// trace(this.model.viewObjs);
		var viewObjs = this.model.viewObjs;
		var layer = this.model.layer;
		var centerX = this.model.width / 2;
		this.anim = new Kinetic.Animation(function(frame) {
			for(var key in viewObjs) {
				viewObjs[key].setX(params.amplitude * Math.sin(frame.time * 2 * Math.PI / params.period) + centerX);
			}
			// layer.setX(params.amplitude * Math.sin(frame.time * 2 * Math.PI / params.period) + centerX);
		}, layer);

		this.anim.start();
		
	};
	
	Enemy.prototype.buildViews = function() {
		var views = this.model.views
		var view;
		// trace('Enemy/buildViews, this position = ');
		// trace(this.model.layer.getAbsolutePosition());
		for(var i = 0; i < views.length; i++) {
			trace('\tviews['+i+'] = ');
			trace(views[i]);
			if(views[i].type === 'Image') {
				// _buildImageView(views[i]);
				this.model.viewObjs.push(this.addImage(views[i], this.model));
			} else {
				view = new Kinetic[views[i].type](views[i]);
				this.model.layer.add(view);
				this.model.viewObjs.push(view);
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
			_model.viewObjs.push(image);
			_model.layer.draw(); // layer has to have draw called each time there is a change
	    };
	    imageObj.src = params.src;
	}
	
	return Enemy;
})();