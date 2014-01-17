Polyworks.GUIConsole = (function() {
	Utils.inherits(GUIConsole, Polyworks.GroupCollection);
	
	var _this;
	function GUIConsole(params) {
		_this = this;
		GUIConsole._super.constructor.call(this, params);
	}

	GUIConsole.prototype.begin = function() {
		GUIConsole._super.begin.call(this);
		// trace('GUIConsole/begin')
		// trace(this);
		for(var i = 0; i < this.model.length; i++) {
			if(this.collection[i].text) {
				this.parseAndSetContent(this.collection[i].name);
			}
		}

		this.addListeners();
	};
	
	GUIConsole.prototype.addListeners = function() {
		// trace('GUIConsole/addListeners');
		Polyworks.EventCenter.bind(Polyworks.Events.SCORE_UPDATED, this.onScoreUpdated, this);
		Polyworks.EventCenter.bind(Polyworks.Events.HEALTH_UPDATED, this.onHealthUpdated, this);
	};
	
	GUIConsole.prototype.onScoreUpdated = function() {
		// trace('GUIConsole/onScoreUpdated');
		// trace(this);
		// trace(_this);
		_this.parseAndSetContent('score');
	};
	
	GUIConsole.prototype.onHealthUpdated = function() {
		// trace('GUIConsole/onHealthUpdated');
		_this.parseAndSetContent('health');
	};
	
	GUIConsole.prototype.parseAndSetContent = function(field, context) {
		// trace('GUIConsole/parseAndSetContent, field = ' + field);
		var text = this.getChildByName(field);
		// trace(text);
		if(text) {
			var context = (context) ? context : PolyworksGame;
			text.content = Utils.parseMarkup(text.model.attrs.defaultContent, context);
		}
	};
	
	GUIConsole.prototype.setContent = function(field, content) {
		var text = this.getChildByName(field);
		if(text) {
			text.content = content;
		}
	};
	
	GUIConsole.prototype.getContent = function(field) {
		return this.getChildByName(field).content;
	};

	GUIConsole.prototype.destroy = function() {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].destroy();
		}
	};
	
	return GUIConsole;
})();