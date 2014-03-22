Polyworks.Text = (function() {
	Polyworks.Utils.inherits(Text, Phaser.Text);
	var _this; 
	
	function Text(params) {
		_this = this;
		this.model = new Polyworks.Model(params);
		var attrs = this.model.attrs;
		// trace('Text['+this.model.name+']/constructor, this = ', this);
		var context = (attrs.dynamicContentContext) ? attrs.dynamicContentContext : PolyworksGame;
		var content = Polyworks.Utils.parseMarkup(attrs.defaultContent, context);
		Text._super.constructor.call(this, params.game, attrs.x, attrs.y, content, attrs.style);

	}
	
	Text.prototype.begin = function() {
		// trace('Text['+this.model.name+']/begin, listeners = ', this.model.attrs.listeners);
		var attrs = this.model.attrs;
		var content = attrs.defaultContent;

		// trace('\ttext width = ' + this.width);
		if(attrs.centerX) {
			this.x = Polyworks.Stage.winW/2 - this.width/2;
		}
		if(attrs.centerY) {
			this.y = Polyworks.Stage.winH/2 - this.height/2;
		}

		var listeners = attrs.listeners;
		if(listeners) {
			var _this = this;
			Polyworks.Utils.each(listeners,
				function(listener) {
					Polyworks.EventCenter.bind(listener, _this.onUpdate, _this);
				},
				_this
			);
		}
	};

	Text.prototype.onUpdate = function(event) {
		trace('Text['+this.model.name+']/onUpdate, event = ', event);
		var context;
		if(event.context) {
			context = event.context;
		} else if(this.model.attrs.dynamicContentContext) {
			context = this.model.attrs.dynamicContentContext;
		} else {
			context = PolyworksGame;
		}

		this.content = Polyworks.Utils.parseMarkup(this.model.attrs.defaultContent, context);
	};
	
	Text.prototype.destroy = function() {
		// trace('Text['+this.model.name+']/destroy, this = ', this, '\tlisteners = ', this.model.attrs.listeners);
		// Text._super.destroy();
		var listeners = this.model.listeners;
		var _this = this;

		if(listeners) {
			Polyworks.Utils.each(listners,
				function(listener) {
					Polyworks.EventCenter.unbind(listener, _this.onUpdate, _this);
				},
				_this
			);
		}
	};
	
	return Text;
})();