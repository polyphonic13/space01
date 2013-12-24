var RectsLayer = (function() {
	Utils.inherits(RectsLayer, View);
	
	var _this;
	
	function RectsLayer(params) {
		trace('RectsLayer, params =');
		trace(params);
		_this = this;
		RectsLayer._super.constructor.call(this, params);

		this.collection = [];
		_buildViews();
		this.model.layer.setPosition(this.model.x, this.model.y);

		this.__defineGetter__('id', function() {
			var id = (this.model.id) ? this.model.id : ''
			return id;
		});
	}

	RectsLayer.prototype.moveByVelocity = function(velX, velY) {
		this.model.layer.move((velX * this.model.speed), (velY * this.model.speed));
	};
	
	function _buildViews() {
		var layer = _this.model.layer;
		var rects = _this.model.rects;
		var fill;
		var stroke;
		for(var i = 0; i < rects.length; i++) {
			if(rects[i].fill) {
				fill = rects[i].fill;
			} else {
				fill = 'black';
			}
			if(rects[i].stroke) {
				stroke = rects[i].stroke;
			} else {
				stroke = 'black';
			}
			var rect = new Kinetic.Rect({
				x: rects[i].x,
				y: rects[i].y,
				width: rects[i].width,
				height: rects[i].height,
				fill: fill,
				stroke: stroke,
				strokeWidth: 1
			});
			layer.add(rect);
			_this.collection.push(rect);
		}
	}

	return RectsLayer;
})();