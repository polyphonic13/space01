/*
	{
		name: 'ForestBackground',
		cl: 'ParallaxBackground',
		attrs: {
			tilemap: '',
			tileset: '',
			width: (stageWidth * 3),
			height: (stageHeight * 2)
			start: {
				x: 0,
				y: winH - (stageHeight * 2)
			},
			layerIndex: 0,
			layer: {
				scrollFactorX: 0.5,
				scrollFactorY: 0.5
			}
		}
	}
*/
Polyworks.ParallaxBackground = (function() {

	function ParallaxBackground(params) {
		this.model = new Polyworks.Model(params);
	}
	
	ParallaxBackground.prototype.begin = function() {
		trace('ParallaxBackground['+this.model.name+']/begin', this);
		var attrs = this.model.attrs;
		var game = this.model.game;

		this.tilemap = game.add.tilemap(attrs.tilemap);
	    this.tileset = game.add.tileset(attrs.tileset);
		trace('\tadding map layer x/y: ' + attrs.start.x + '/' + attrs.start.y + ', w/h: ' + attrs.width + '/' + attrs.height);
	    this.layer = game.add.tilemapLayer(attrs.start.x, attrs.start.y, attrs.width, attrs.height, this.tileset, this.tilemap, attrs.layerIndex);
	
		Polyworks.Utils.each(attrs.layer,
			function(attr, key) {
				trace('\tsetting layer['+key+'] to: ' + attr);
				this.layer[key] = attr;
			},
			this
		);
	};
	
	return ParallaxBackground;
})();