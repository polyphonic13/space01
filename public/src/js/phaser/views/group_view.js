var GroupView = (function() {
	
	function GroupView(params, group, idx) {
		this.model = params;
		var sprite;

		sprite = group.create(params.start.x, params.start.y, params.type);
		sprite.name = params.type + '-' + idx;
		sprite.idx = idx;
		sprite.body.gravity.y = config.world.gravity;

		if(params.bounce.y) {
			sprite.body.bounce.y = params.bounce.y;
		}

		this.model.sprite = sprite;
		this.__defineGetter__('sprite', function() {
			return this.model.sprite;
		});
	}
	
	GroupView.prototype.getProperty = function(name) {
		if(this.model.hasOwnProperty(name)) {
			return this.model[name];
		} else {
			return null;
		}
	};
	
	return GroupView;
})();