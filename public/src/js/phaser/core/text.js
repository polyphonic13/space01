Polyworks.Text = (function() {
	var _this; 
	
	function Text(game, params) {
		_this = this;
		this.model = new Polyworks.Model(params);
		var attrs = this.model.attrs;
		// trace('Text['+params.name+']/constructor, this = ');
		// trace(this);
		Phaser.Text.call(this, game, attrs.x, attrs.y, attrs.defaultContent, attrs.style);
	}
	
	Text.prototype = Object.create(Phaser.Text.prototype);
	Text.prototype.constructor = Polyworks.Text;

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

	return Text;
})();