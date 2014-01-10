Polyworks.Text = (function() {
	
	function Text(params) {

		this.text = params.game.add.text(this.model.x, this.model.y, this.model.defaultContent, this.model.style);

		this.__defineGetter__('content', function() {
			return this.text.content;
		});

		this.__defineSetter__('content', function(val) {
			this.text.content = val;
		});
	}

	return Text;
})();