var LevelLayer = (function() {
	Utils.inherits(LevelLayer, View);
	
	var _this;
	function LevelLayer(params) {
		_this = this;
		LevelLayer._super.constructor.call(this, params);
		
		var views = params.views;
		var view;
		for(var i = 0; i < views.length; i++) {
			if(views[i].type === 'Image') {
				this.addImage(views[i], _this.model);
			}
		}
	}
	
	return LevelLayer;
})();