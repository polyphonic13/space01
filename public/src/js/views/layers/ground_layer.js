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

	GroundLayer.prototype.moveByVelocity = function(velX, velY) {
		this.model.layer.move((velX * this.model.speed), (velY * this.model.speed));
	};
	
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
				_addImage(rects[i].image);
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

	function _addImage(params) {
		var _model = _this.model;

		var image = new Kinetic.Image({
			x: params.x,
			y: params.y,
			width: params.width,
			height: params.height,
			image: imageManager.getImage(params.src)
		});
		_model.layer.add(image);
		_model.layer.draw(); // layer has to have draw called each time there is a change
	}
	
	return GroundLayer;
})();