var GroupView = (function() {
	Utils.inherits(GroupView, Base); 
	
	function GroupView(params, group, id) {
		// trace('GroupView['+idx+']/constructor, params = ');
		// trace(params);
		GroupView._super.constructor.call(this, params, id);
		this.model.group = group;
	}
	
	GroupView.prototype.init = function() {
		var type = this.get('type');
		var start = this.get('start');
		trace('GroupView/init, this = ');
		trace(this);
		var sprite = this.model.group.create(start.x, start.y, type);
		sprite.name = this.model.type + '-' + this.id;
		sprite.idx = this.id;

		sprite.body.gravity.y = config.world.gravity;

		var bounce = this.get('bounce');
		if(bounce) {
			sprite.body.bounce.x = bounce.x;
			sprite.body.bounce.y = bounce.y;
		}

		this.sprite = sprite;
	}
	
	GroupView.prototype.remove = function() {
		this.sprite.remove();
	};
	
	return GroupView;
})();