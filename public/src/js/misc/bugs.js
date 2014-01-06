var config = {
	bugs: [{
		type: 'Caterpillar',
		legs: 6,
		speed: 0.6,
		color: 'green'
	},
	{
		type: 'Caterpillar',
		legs: 6,
		speed: 0.75,
		color: 'yellow'
	},
	{
		type: 'Centipede',
		legs: 10,
		speed: 1,
		color: 'black'
	}]
};


var Bug = (function() {

	function Bug(params) {
		this.model = params;
		
		this.__defineGetter__("legs", function() {
			return this.model.legs;
		});
		this.__defineGetter__("speed", function() {
			return this.model.speed;
		});
	}
	
	return Bug;
})();

var Caterpillar = (function() {
	Utils.inherits(Caterpillar, Bug);

	function Caterpillar(params) {
		Caterpillar._super.constructor.call(this, params);
	}
	
	return Caterpillar;
})();

var Centipede = (function() {
	Utils.inherits(Centipede, Bug);
	
	function Centipede(params) {
		Centipede._super.constructor.call(this, params);
	}

	return Centipede;
})();

var Critters = (function() {
	var _collection = [];
	
	function Critters(params) {
		for(var i = 0; i < config.bugs.length; i++) {
			var bug;
			switch(params[i].type) {
				case 'Caterpillar':
				bug = new Caterpillar(params[i]);
				break;

				case 'Centipede':
				bug = new Centipede(params[i]);
				break;

				default:
				break;
			}
			// trace('Critter, bug['+i+'] = ');
			// trace(bug);
			_collection.push(bug);
		}
		// trace('Completed Critters Constructor, _collection = ');
		// trace(_collection);
		
		this.__defineGetter__('collection', function() {
			return _collection;
		});
	}
	
	return Critters;
})();

// trace('About to make critters');
var critters = new Critters(config.bugs);
// trace('done making critters');
var collection = critters.collection;
for(var i = 0; i < collection.length; i++) {
	// trace('\tcollection['+i+'].speed = ' + collection[i].speed);
}
