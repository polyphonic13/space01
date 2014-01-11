Polyworks.GUIConsole = (function() {
	Utils.inherits(GUIConsole, Polyworks.GroupCollection);
	
	function GUIConsole(params, id) {
		// trace('GUIConsole/constructor');
		GUIConsole._super.constructor.call(this, params, id, 'null');
	}

	GUIConsole.prototype.setContent = function(field, content) {
		var text = this.getItemByName(field);
		if(text) {
			text.content = content;
		}
	};
	
	GUIConsole.prototype.getContent = function(field) {
		return this.getItemByName(field).content;
	};
	
	return GUIConsole;
})();