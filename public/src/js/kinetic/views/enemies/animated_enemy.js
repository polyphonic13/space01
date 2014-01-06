var AnimatedEnemy = (function() {
	function AnimatedEnemy(params) {
		
	}
	
	AnimatedEnemy.prototype.buildViews = function() {
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
	
	return AnimatedEnemy;
})();
/*
if(this.model.movement) {
	this.setUpAnimation(this.model.movement);
}

Enemy.prototype.setUpAnimation = function(params) {
	// trace('Enemy/setUpAnimation, views =');
	// trace(this.model.viewObjs);
	var viewObjs = this.model.viewObjs;
	var layer = this.model.layer;
	var centerX = this.model.width / 2;
	this.anim = new Kinetic.Animation(function(frame) {
		// for(var key in viewObjs) {
		// 	viewObjs[key].setX(params.amplitude * Math.sin(frame.time * 2 * Math.PI / params.period) + centerX);
		// }
		// layer.setX(params.amplitude * Math.sin(frame.time * 2 * Math.PI / params.period) + centerX);
		
		var dist = (_this.model.speed*100) * (frame.timeDiff / 1000);
		// trace('dist = ' + dist);
		_this.model.layer.move(dist, 0);
	}, layer);

	this.anim.start();
	
};


*/