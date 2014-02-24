Polyworks.Text = (function() {
	Polyworks.Utils.inherits(Text, Phaser.Text);
	var _this; 
	
	function Text(params) {
		_this = this;
		this.model = new Polyworks.Model(params);
		var attrs = this.model.attrs;
		// trace('Text['+params.name+']/constructor, this = ');
		// trace(this);
		var content = Polyworks.Utils.parseMarkup(attrs.defaultContent, PolyworksGame);
		Text._super.constructor.call(this, params.game, attrs.x, attrs.y, content, attrs.style);

	}
	
	Text.prototype.begin = function() {
		// trace('Text['+this.model.name+']/begin, this = ');
		// trace(this);
		var attrs = this.model.attrs;
		var content = attrs.defaultContent;

		// trace('\ttext width = ' + this.width);
		if(attrs.centerX) {
			this.x = Polyworks.Stage.winW/2 - this.width/2;
		}
		if(attrs.centerY) {
			this.y = Polyworks.Stage.winH/2 - this.height/2;
		}

	}

	return Text;
})();