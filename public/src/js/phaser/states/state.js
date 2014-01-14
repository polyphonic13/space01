Polyworks.State = (function() {
	
	var _this;
	function State(params) {
		_this = this;
		this.model = new Polyworks.Model(params);
		this.loaded = false;
		this.created = false;
		this.active = false;

		this.__defineGetter__('clearWorld', function() {
			return this.model.clearWorld;
		});

		this.__defineGetter__('clearCache', function() {
			return this.model.clearCache;
		});
	}
	
	State.prototype.preLoad = function() {
		if(!this.loaded) {
			this.loaded = true;
		}
	};
	
	State.prototype.create = function() {
		this.createState();
		this.created = true;
	};

	State.prototype.createState = function() {
		// trace('State/createState, this = ');
		// trace(this);

		this.game = PolyworksGame.phaser;
		this.gameOver = PolyworksGame.gameOver; 

		this.elements = {};
		this.createWorld();
		this.createElements();

	};
	
	State.prototype.createWorld = function() {
		var world = this.model.world;
		PolyworksGame.phaser.world.setBounds(world.x, world.y, world.width, world.height);
	};

	State.prototype.createElements = function() {
		trace('State['+this.model.name+']/createElements');
		trace(this.model);
		var game = PolyworksGame.phaser;
		var elements = this.model.elements;
		trace('\telements.length = ' + elements.length);
		var element;
		var attrs; 

		for(var i = 0; i < elements.length; i++) {
			if(!elements[i].name) {
				elements[i].name = i;
			}
			trace('\telements['+elements[i].name+'].cl = ' + elements[i].cl);
			trace(elements[i]);
			if(elements[i].type === 'sprite') {
				element = new Polyworks[elements[i].cl](game, elements[i].attrs.start.x, elements[i].attrs.start.y, elements[i].attrs);
				element.init(elements[i].name);
			} else {
				element = new Polyworks[elements[i].cl](game, elements[i]);
				element.init();
			}
			this.elements[elements[i].name] = element;
		}
	};
	
	State.prototype.shutdown = function() {
		this.update = null;
		for(var key in this.elements) {
			if(this.elements[key].destroy) {
				this.elements[key].destroy();
			}
		}
	};

	return State;
})();