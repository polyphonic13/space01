Polyworks.GUIConsole = (function() {
	Utils.inherits(GUIConsole, Polyworks.GroupCollection);
	
	var _this;
	function GUIConsole(params, id) {
		_this = this;
		GUIConsole._super.constructor.call(this, params, id, 'null');
	}

	GUIConsole.prototype.setInitialContent = function() {
		for(var i = 0; i < this.collection.length; i++) {
			if(this.collection[i].text) {
				this.parseAndSetContent(this.collection[i].id);
			}
		}
		this.addListeners();
	};
	
	GUIConsole.prototype.addListeners = function() {
		// trace('GUIConsole/addListeners');
		// Polyworks.EventCenter.bind(Polyworks.Events.SCORE_UPDATED, this.onScoreUpdated);
		Polyworks.EventCenter.bind(Polyworks.Events.HEALTH_UPDATED, this.onHealthUpdated);
	};
	
	GUIConsole.prototype.onScoreUpdated = function() {
		_this.parseAndSetContent('score');
	};
	
	GUIConsole.prototype.onHealthUpdated = function() {
		_this.parseAndSetContent('health');
	};
	
	GUIConsole.prototype.parseAndSetContent = function(field, context) {
		var text = this.getItemByName(field);
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
		// Polyworks.EventCenter.unbind(Polyworks.Events.SCORE_UPDATED, this.onScoreUpdated);
		Polyworks.EventCenter.unbind(Polyworks.Events.HEALTH_UPDATED, this.onHealthUpdated);
		
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].destroy();
		}
	};
	
	return GUIConsole;
})();