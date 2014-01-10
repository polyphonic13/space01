Polyworks.Text = (function() {
	Utils.inherits(Text, Polyworks.Base);
	
	function Text(params, id) {
		Text._super.constructor.call(this, params, id);

		this.text = Polyworks.Game.phaser.add.text(this.model.x, this.model.y, this.model.defaultContent, this.model.style);
		params.group.add(this.text);

		this.__defineGetter__('content', function() {
			return this.text.content;
		});

		this.__defineSetter__('content', function(val) {
			this.text.content = val;
		});
	}

	Text.prototype.init = function(content) {
		if(content) {
			this.text.content = content;
		}
	};
	
	return Text;
})();