var BackgroundLayer = (function() {
	Utils.inherits(BackgroundLayer, View);
	
	var _this;
	function BackgroundLayer(params) {
		_this = this;
		BackgroundLayer._super.constructor.call(this, params);
		var views = params.views;
		var view;
		for(var i = 0; i < views.length; i++) {
			if(views[i].type === 'Image') {
				this.addImage(views[i], this.model);
			}
		}
	}
	
	return BackgroundLayer;
})();