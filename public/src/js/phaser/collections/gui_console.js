Polyworks.GUIConsole = (function() {
	Utils.inherits(GUIConsole, Polyworks.GroupCollection);
	
	var _this;
	function GUIConsole(params) {
		_this = this;
		GUIConsole._super.constructor.call(this, params, id, 'null');
	}

	GUIConsole.prototype.setInitialContent = function() {
		for(var i = 0; i < this.collection.length; i++) {
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
		var text = this.getItemByName(field);
		// trace(text);
		if(text) {
			var context = (context) ? context : PolyworksGame;
			text.content = Utils.parseMarkup(text.model.defaultContent, context);
		}
	};
	
	GUIConsole.prototype.setContent = function(field, content) {
		var text = this.getItemByName(field);
		if(text) {
			text.content = content;
		}
	};
	
	GUIConsole.prototype.getContent = function(field) {
		return this.getItemByName(field).content;
	};

	GUIConsole.prototype.destroy = function() {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].destroy();
		}
	};
	
	return GUIConsole;
})();