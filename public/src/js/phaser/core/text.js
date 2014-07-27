PWG.Text = (function() {
	PWG.Utils.inherits(Text, Phaser.Text);
	var _this; 
	
	function Text(params) {
		_this = this;
		this.model = new PWG.Model(params);
		var attrs = this.model.attrs;
		// trace('Text['+this.model.name+']/constructor, this = ', this);
		var context = (attrs.dynamicContentContext) ? attrs.dynamicContentContext : PolyworksGame;
		var content = PWG.Utils.parseMarkup(attrs.defaultContent, context);
		Text._super.constructor.call(this, params.game, attrs.x, attrs.y, content, attrs.style);
		// this.setText(content);

	}
	
	Text.prototype.begin = function() {
		// trace('Text['+this.model.name+']/begin, listeners = ', this.model.attrs.listeners);
		var attrs = this.model.attrs;
		var content = attrs.defaultContent;
		this.alignAndPosition();;
		
		var listeners = attrs.listeners;
		if(listeners) {
			var _this = this;
			PWG.Utils.each(listeners,
				function(listener) {
					PWG.EventCenter.bind(listener, _this.onUpdate, _this);
				},
				_this
			);
		}
	};

	Text.prototype.alignAndPosition = function() {
		// trace('============= Text['+this.model.name+']/position');
		// trace('\ttext width = ' + this.width);
		var attrs = this.model.attrs;
		if(attrs.alignX) {
			switch(attrs.alignX) {
				case 'center':
				var centerX = (PWG.Stage.winW/2 - this.width/2);
				this.x =  (attrs.x) ? centerX + attrs.x : centerX;
				break;
				
				case 'windowRight':
				// trace('\taligning right to window, x = ' + this.x + ', width = ' + this.width);
				this.x = PWG.Stage.winW - this.width;
				// trace('\tx now = ' + this.x);
				break;
				
				case 'stageRight':
				// trace('\taligning right to stage, x = ' + this.x + ', width = ' + this.width);
				this.x = PWG.Stage.width - this.width;
				// trace('\tx now = ' + this.x);
				break;
				
				default: 
				break;
			}
		}
		if(attrs.alignY) {
			switch(attrs.alignY) {
				case 'center':
				this.y = PWG.Stage.winH/2 - this.height/2;
				break;
				
				default:
				break;
			}
		}

	};
	
	Text.prototype.onUpdate = function(event) {
		trace('Text['+this.model.name+']/onUpdate, width = ' + this.width + ', event = ', event);
		var context;
		if(event.context) {
			context = event.context;
		} else if(this.model.attrs.dynamicContentContext) {
			context = this.model.attrs.dynamicContentContext;
		} else {
			context = PolyworksGame;
		}

		this.content = PWG.Utils.parseMarkup(this.model.attrs.defaultContent, context);
		// trace('\twidth now = ' + this.width);
		// this.alignAndPosition();
		// this.setText(this.content);
	};
	
	Text.prototype.destroy = function() {
		// trace('Text['+this.model.name+']/destroy, this = ', this, '\tlisteners = ', this.model.attrs.listeners);
		// Text._super.destroy();
		var listeners = this.model.listeners;
		var _this = this;

		if(listeners) {
			PWG.Utils.each(listners,
				function(listener) {
					PWG.EventCenter.unbind(listener, _this.onUpdate, _this);
				},
				_this
			);
		}
	};
	
	return Text;
})();