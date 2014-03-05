Polyworks.GUIConsole = (function() {
	Polyworks.Utils.inherits(GUIConsole, Polyworks.GroupCollection);
	
	function GUIConsole(params) {
		GUIConsole._super.constructor.call(this, params);
	}

	GUIConsole.prototype.begin = function() {
		GUIConsole._super.begin.call(this);
		// trace('GUIConsole/begin')
		// trace(this);
		// Polyworks.Utils.each(this.collection,
		// 	function(c) {
		// 		if(c.text) {
		// 			this.parseAndSetContent(c.name);
		// 		}
		// 	},
		// 	this
		// );
		// 
		// this.addListeners();
	};
	
	GUIConsole.prototype.addListeners = function() {
		// trace('GUIConsole/addListeners');
		// Polyworks.EventCenter.bind(Polyworks.Events.SCORE_UPDATED, this.onScoreUpdated, this);
		Polyworks.EventCenter.bind(Polyworks.Events.HEALTH_UPDATED, this.onHealthUpdated, this);
	};
	
	GUIConsole.prototype.onScoreUpdated = function() {
		// trace('GUIConsole/onScoreUpdated');
		this.parseAndSetContent('score');
	};
	
	GUIConsole.prototype.onHealthUpdated = function() {
		this.parseAndSetContent('health');
	};
	
	GUIConsole.prototype.parseAndSetContent = function(field, context) {
		// trace('GUIConsole/parseAndSetContent, field = ' + field);
		var text = this.getChildByName(field);
		// trace(text);
		if(text) {
			var context = (context) ? context : PolyworksGame;
			text.content = Polyworks.Utils.parseMarkup(text.model.attrs.defaultContent, context);
		}
	};
	
	GUIConsole.prototype.destroy = function() {
		// Polyworks.EventCenter.unbind(Polyworks.Events.SCORE_UPDATED, this.onScoreUpdated, this);
		Polyworks.EventCenter.unbind(Polyworks.Events.HEALTH_UPDATED, this.onHealthUpdated, this);
		GUIConsole._super.destroy.call(this);
	};
	
	return GUIConsole;
})();