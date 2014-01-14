Polyworks.Text = (function() {
	var _this; 
	
	function Text(game, params) {
		trace('Text['+params.name+']/constructor');
		trace(params);
		_this = this;
		this.model = new Polyworks.Model(params);
		var attrs = this.model.attrs;
		Phaser.Text.call(this, game, attrs.x, attrs.y, attrs.defaultContent, attrs.style);

		if(params.group) {
			params.group.add(this);
		}
	}
	
	Text.prototype = Object.create(Phaser.Text.prototype);
	Text.prototype.constructor = Polyworks.Text;

	Text.prototype.init = function() {
		trace('Text['+this.model.name+']/init, model = ');
		trace(this.model);
		var content = this.model.defaultContent;

		// trace('\ttext width = ' + this.width);
		if(this.model.centerX) {
			this.x = stage.width/2 - this.width/2;
		}
		if(this.model.centerY) {
			this.y = stage.height/2 - this.height/2;
		}

	}

	return Text;
})();