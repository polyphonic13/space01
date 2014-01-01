var Utils = (function() {
	var gameUtils = {};


	gameUtils.clone = function(a) {
		var obj = {};
		for(var key in a) {
			obj[key] = a[key];
		}
		return obj;
	};

	gameUtils.extend = function(a, b) {
		for(var key in b) {
			a[key] = b[key];
		} 
		return a;
	};

	gameUtils.extract = function(obj, prop) {
		var a = obj[prop];
		if(obj !== window) { delete obj[prop]; }
		return a;
	};

	gameUtils.objLength = function(obj) {
		var length = 0;
		for(var key in obj) {
			if(obj.hasOwnProperty(key)) { length++; }
		}
		return length;
	};

	gameUtils.mixin = function(c, p) {
	    for(var k in p) if(p[k]) c[k] = p[k];
	};

	gameUtils.bind = function(o, f) {
	    return function() { return f.apply(o, arguments); };
	};

	gameUtils.inherits = function(c, p) {
	    this.mixin(c, p);
	    function f() { this.constructor = c; };
	    f.prototype = c._super = p.prototype;
	    c.prototype = new f();
	};

	gameUtils.isOnStage = function(pos) {
		if(pos.x > 0 && pos.x < stageConfig.width && pos.y > 0 && pos.y < stageConfig.height) {
			return true;
		} else {
			return false;
		}
	};
	
	return gameUtils;
}());
