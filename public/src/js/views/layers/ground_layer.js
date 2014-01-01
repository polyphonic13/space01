var GroundLayer = (function() {
	Utils.inherits(GroundLayer, View);
	
	var _this;
	
	function GroundLayer(params) {
		// trace('GroundLayer, params =');
		// trace(params);
		_this = this;
		
		params.layer = new Kinetic.Layer({
			clearBeforeUpdate: false
		});
		
		GroundLayer._super.constructor.call(this, params);

		this.collection = [];
		_buildViews();
		this.model.layer.setPosition(this.model.x, this.model.y);

		this.__defineGetter__('id', function() {
			var id = (this.model.id) ? this.model.id : ''
			return id;
		});
	}

	GroundLayer.prototype.remove = function() {
		this.model.layer.remove();
	};
	
	function _buildViews() {
		var layer = _this.model.layer;
		var rects = _this.model.rects;
		var stroke;
		var section;
		
		for(var i = 0; i < rects.length; i++) {
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
				fill: rects[i].fill,
				stroke: stroke,
				strokeWidth: 1
			});
			layer.add(rect);
			
			if(rects[i].image) {
				_this.addImage(rects[i].image, _this.model);
			}
			// trace('GroundLayer/_buildViews, section['+i+'] = ');
			// trace(section);
			section = {
				rect: rect,
				config: rects[i]
			};
			_this.collection.push(section);
		}
	}

	
	return GroundLayer;
})();