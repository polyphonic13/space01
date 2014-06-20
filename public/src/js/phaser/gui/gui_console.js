PWG.GUIConsole = (function() {
	PWG.Utils.inherits(GUIConsole, PWG.GroupCollection);
	
	function GUIConsole(params) {
		GUIConsole._super.constructor.call(this, params);
	}

	GUIConsole.prototype.begin = function() {
		GUIConsole._super.begin.call(this);
		// trace('GUIConsole/begin');

		PWG.Utils.each(this.collection,
			function(c) {
				if(c.text) {
					this.parseAndSetContent(c.name);
				}
			},
			this
		);

		this.addListeners();
	};
	
	GUIConsole.prototype.addListeners = function() {
		// trace('GUIConsole/addListeners');
		// PWG.EventCenter.bind(PWG.Events.SCORE_UPDATED, this.onScoreUpdated, this);
		PWG.EventCenter.bind(PWG.Events.HEALTH_UPDATED, this.onHealthUpdated, this);
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
			var context = (context) ? context : PWGGame;
			text.content = PWG.Utils.parseMarkup(text.model.attrs.defaultContent, context);
		}
	};
	
	GUIConsole.prototype.destroy = function() {
		// PWG.EventCenter.unbind(PWG.Events.SCORE_UPDATED, this.onScoreUpdated, this);
		PWG.EventCenter.unbind(PWG.Events.HEALTH_UPDATED, this.onHealthUpdated, this);
		GUIConsole._super.destroy.call(this);
	};
	
	return GUIConsole;
})();