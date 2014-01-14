Polyworks.Text = (function() {
	var _this; 
	
	function Text(game, params) {
		_this = this;
		this.model = new Polyworks.Model(params);
		trace('Text['+params.name+']/constructor, model = ');
		trace(this.model);
		Phaser.Text.call(this, game, this.model.x, this.model.y, this.model.defaultContent, this.model.style);
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