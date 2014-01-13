Polyworks.Text = (function() {
	Utils.inherits(Text, Polyworks.Base);
	
	function Text(params, id) {
		Text._super.constructor.call(this, params, id);
		// trace('Text['+this.id+']/constructor, model = ');
		// trace(this.model);
		if(this.model.x === 'centered') {
			this.model.x = stage.width/2;
		}
		if(this.model.y === 'centered') {
			this.model.y = stage.height/2;
		}
		// trace('\tx = ' + this.model.x + ', y = ' + this.model.y);
		var content = this.model.defaultContent;

		this.text = Polyworks.Game.phaser.add.text(this.model.x, this.model.y, content, this.model.style);
		params.group.add(this.text);
		// trace('\ttext width = ' + this.text.width);
		if(this.model.centerX) {
			this.text.x = stage.width/2 - this.text.width/2;
		}
		if(this.model.centerY) {
			this.text.y = stage.height/2 - this.text.height/2;
		}
		
		this.__defineGetter__('content', function() {
			return this.text.content;
		});

		this.__defineSetter__('content', function(val) {
			// trace('Text['+this.id+']/set content, val = ' + val);
			this.text.content = val;
		});
	}

	Text.prototype.init = function(content) {
		if(content) {
			this.text.content = content;
		}
	};
	
	Text.prototype.destroy = function() {
		// trace('Text['+this.id+']/destroy');
		this.text.destroy();
	};
	
	return Text;
})();