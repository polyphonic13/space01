Polyworks.Text = (function() {
	Utils.inherits(Text, Phaser.Text);
	var _this; 
	
	function Text(params) {
		_this = this;
		this.model = new Polyworks.Model(params);
		var attrs = this.model.attrs;
		// trace('Text['+params.name+']/constructor, this = ');
		// trace(this);
		var content = Utils.parseMarkup(attrs.defaultContent, PolyworksGame);
		// Phaser.Text.call(this, params.game, attrs.x, attrs.y, content, attrs.style);
		Text._super.constructor.call(this, params.game, attrs.x, attrs.y, '', attrs.style);

	}
	
	Text.prototype.begin = function() {
		// trace('Text['+this.model.name+']/begin, this = ');
		// trace(this);
		var attrs = this.model.attrs;
		var content = attrs.defaultContent;

		// trace('\ttext width = ' + this.width);
		if(attrs.centerX) {
			this.x = stage.width/2 - this.width/2;
		}
		if(attrs.centerY) {
			this.y = stage.height/2 - this.height/2;
		}

	}

	Text.prototype.setContent = function(str, ctx) {
		var attrs = this.model.attrs;
		var content = str || attrs.defaultContent;
		var context = ctx || PolyworksGame;
		this.content = Utils.parseMarkup(content, context);
	}
	
	return Text;
})();