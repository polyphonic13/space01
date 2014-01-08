var GroupView = (function() {
	Utils.inherits(GroupView, Base); 
	
	var _this;
	function GroupView(params, group, id) {
		// trace('GroupView['+idx+']/constructor, params = ');
		// trace(params);
		_this = this;
		GroupView._super.constructor.call(_this, params, id);
		_this.model.group = group;
		// trace('GroupView/constructor, _this.model =');
		// trace(_this.model);
	}
	
	GroupView.prototype.init = function() {
		// trace('GroupView['+_this.id+']/init, _this.model = ');
		// trace(_this.model);
		// trace('\tthis = ');
		// trace(this);
		// trace('\t_this = ');
		// trace(_this);
		var start = _this.model.start;
		var sprite = _this.model.group.create(start.x, start.y, _this.model.type);
		// sprite.name = _this.model.type + '-' + _this.id;
		sprite.name = _this.model.name;
		sprite.idx = _this.id;

		sprite.body.gravity.y = config.world.gravity;

		var bounce = _this.model.bounce;
		if(bounce) {
			sprite.body.bounce.x = bounce.x;
			sprite.body.bounce.y = bounce.y;
		}

		_this.sprite = sprite;
	};
	
	GroupView.prototype.checkTerrainCollision = function(ground) {
		// trace('GroupView['+this.id+']/checkTerrainCollision, this.sprite =');
		// trace(this.sprite);
		game.physics.collide(this.sprite, ground);
	};
	
	GroupView.prototype.remove = function() {
		this.sprite.remove();
	};
	
	return GroupView;
})();