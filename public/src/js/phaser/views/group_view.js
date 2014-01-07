var GroupView = (function() {
	
	function GroupView(params, group, idx) {
		// trace('GroupView['+idx+']/constructor, params = ');
		// trace(params);
		this.model = params;
		this.id = idx;
		this.active = true;

		var sprite = group.create(params.start.x, params.start.y, params.type);
		sprite.name = params.type + '-' + idx;
		sprite.idx = idx;

		sprite.body.gravity.y = config.world.gravity;

		if(params.bounce && params.bounce.y) {
			sprite.body.bounce.y = params.bounce.y;
		}

		this.sprite = sprite;
	}

	GroupView.prototype.remove = function() {
		this.sprite.remove();
	};
	
	return GroupView;
})();