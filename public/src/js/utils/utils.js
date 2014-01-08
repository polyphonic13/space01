Polyworks.Utils = (function() {
	var utils = {};


	utils.clone = function(a) {
		var obj = {};
		for(var key in a) {
			obj[key] = a[key];
		}
		return obj;
	};

	utils.extend = function(a, b) {
		for(var key in b) {
			a[key] = b[key];
		} 
		return a;
	};

	utils.extract = function(obj, prop) {
		var a = obj[prop];
		if(obj !== window) { delete obj[prop]; }
		return a;
	};

	utils.objLength = function(obj) {
		var length = 0;
		for(var key in obj) {
			if(obj.hasOwnProperty(key)) { length++; }
		}
		return length;
	};

	utils.mixin = function(c, p) {
	    for(var k in p) if(p[k]) c[k] = p[k];
	};

	utils.bind = function(o, f) {
	    return function() { return f.apply(o, arguments); };
	};

	utils.inherits = function(c, p) {
	    this.mixin(c, p);
	    function f() { this.constructor = c; };
	    f.prototype = c._super = p.prototype;
	    c.prototype = new f();
	};

	utils.isInView = function(pos) {
		if(pos.x > 0 && pos.x < stageConfig.width && pos.y > 0 && pos.y < stageConfig.height) {
			return true;
		} else {
			return false;
		}
	};
	
	utils.addSprite = function(params) {
		var sprite;
		if(params.parentType === 'group') {
			sprite = this.addSpriteToGroup(params);
		} else {
			sprite = this.addSpriteToGame(params); // default, parentType = game or undefined
		}
		return sprite;
	};
	
	utils.addSpriteToGame = function(params) {
		return game.add.sprite(params.start.x, params.start.y, params.img);
	};
	
	utils.addSpriteToGroup = function(params) {
		return params.group.create(params.start.x, params.start.y, params.img);
	};
	
	utils.moveView = function(sprite, movement, params) {
		switch(movement.type) {
			case MovementTypes.DIRECTIONAL_BY_SPEED:
				this.moveDirectionalBySpeed(sprite, movement, params.direction);
			break;

			default: 
			console.log('WARNING: unknown movement type: ' + movement.type);
			break;
		}
	};
	
	utils.moveDirectionalBySpeed = function(sprite, movement, direction) {
		switch(direction) {
			case Directions.LEFT: 
			sprite.x -= movement.speed;
			break;

			case Directions.RIGHT:
			sprite.x += movement.speed;
			break;

			case Directions.UP:
			sprite.x -= movement.speed;
			break;

			case Directions.DOWN: 
			sprite.y += movement.speed;
			break;

			default: 
			trace('WARNING: unknown movement direction: ' + direction);
			break;
		}
	};
	
	return utils;
}());
