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

	GUIConsole.prototype.destroy = function() {
		for(var i = 0; i < this.collection.length; i++) {
			this.collection[i].destroy();
		}
	};
	
	return GUIConsole;
})();