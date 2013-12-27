var LifeMeter = (function() {
	Utils.inherits(LifeMeter, View);
	
	var _this;
	var _healthText;
	
	function LifeMeter(params) {
		_this = this;
		LifeMeter._super.constructor.call(this, params);
		_this.model.layer.setPosition({ x: _this.model.x, y: _this.model.y });
		
		_buildViews();
	}
	
	LifeMeter.prototype.setHealth = function(health) {
		_healthText.setText(health);
	}
	
	function _buildViews() {
		var views = _this.model.views
		var view;
		for(var i = 0; i < views.length; i++) {
			if(views[i].type === 'Image') {
				_buildImageView(views[i]);
			} else if(views[i].type === 'Text') {
				_healthText = new Kinetic[views[i].type](views[i]);
				_this.model.layer.add(_healthText);
			}
		}
	}
	
	function _buildImageView(params) {
	    var imageObj = new Image();
		var _model = _this.model;
		
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
	
	return LifeMeter;
})();