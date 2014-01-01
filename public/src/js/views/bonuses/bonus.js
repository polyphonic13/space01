var Bonus = (function() {
	Utils.inherits(Bonus, View);

	var _this;
	
	function Bonus(params, id, holder) {
		trace('Bonus/constructor');
		_this = this;
		this.holder = holder;
		params.id = id;
		Bonus._super.constructor.call(this, params);

		this.model.viewObjs = [];
		this.buildViews();
		
		if(this.model.movement) {
			this.setUpAnimation(this.model.movement);
		}
		
		this.model.layer.setPosition(this.model.x, this.model.y);
		
		this.__defineGetter__('collected', function() {
			// trace('Bonus/get health: ' + this.model.health);
			return this.model.collected;
		});
		
		this.__defineGetter__('boost', function() {
			return this.model.boost;
		});
		
	}
	
	Bonus.prototype.getAbsolutePosition = function() {
		return this.model.viewObjs[0].getAbsolutePosition();
	};
	
	Bonus.prototype.collect = function() {
		trace('collected bonus['+this.model.id+'], this.model.layer = ');
		trace(this.model.layer);
		if(this.anim) {
			this.anim.stop();
		}
		this.holder.bonusCollected(this.model.id);
		this.model.layer.remove();
		this.model.collected = true;
	};
	
	Bonus.prototype.remove = function() {
		this.model.layer.remove();
	};
	
	Bonus.prototype.setUpAnimation = function(params) {
		// trace('Bonus/setUpAnimation, views =');
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
	
	Bonus.prototype.buildViews = function() {
		var views = this.model.views
		var view;
		// trace('Bonus/buildViews, this position = ');
		// trace(this.model.layer.getAbsolutePosition());
		trace('Bonus/buildViews');
		for(var i = 0; i < views.length; i++) {
			trace('\tviews['+i+'] = ');
			trace(views[i]);
			if(views[i].type === 'Image') {
				this.model.viewObjs.push(this.addImage(views[i], this.model));
			} else {
				view = new Kinetic[views[i].type](views[i]);
				this.model.layer.add(view);
				this.model.viewObjs.push(view);
			}
		}
	}
	
	return Bonus;
})();