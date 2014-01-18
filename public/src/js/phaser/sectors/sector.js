Polyworks.Sector = (function() {
	
	function Sector(params) {
		// trace('Sector['+params.name+']/constructor, params = ');
		// trace(params);
		this.model = new Polyworks.Model(params);

		this.__defineGetter__('bounds', function() {
			return this.model.attrs.bounds;
		});

	}
	
	Sector.prototype.begin = function() {
		// trace('Sector/['+this.model.name+']/begin, this = ');
		// trace(this);
		this.beginChildren('hazards');
		this.beginChildren('enemies');
		this.beginChildren('bonuses');
		// var hazards = this.model.attrs.hazards;
		// 
		// var enemies = this.model.attrs.enemies;
		// if(enemies && enemies.attrs) {
		// 	this.enemies = new Polyworks.Enemies(enemies);
		// 	this.enemies.begin();
		// }
		// var bonuses = this.model.attrs.bonuses;
		// if(bonuses && bonuses.attrs) {
		// 	this.bonuses = new Polyworks.PhysicalGroupCollection(bonuses);
		// 	this.bonuses.begin();
		// }

		// trace('Sector['+this.model.name+']/begin, enemies = ');
		// trace(this.enemies);
		// trace('\tbonuses = ');
		// trace(this.bonuses);
		this.created = true;
	};

	Sector.prototype.beginChildren = function(type, cl) {
		var children = this.model.attrs[type];
		if(children) {
			this[type] = new Polyworks[children.cl](children);
			this[type].begin();
		}
	};
	
	Sector.prototype.checkTerrainCollision = function(terrain) {
		// trace('Sector['+this.model.name+']/checkTerrainCollision, terrain = ');
		// trace(terrain);
		if(this.enemies) {
			this.enemies.checkTerrainCollision(terrain);
		}
		if(this.bonuses) {
			this.bonuses.checkTerrainCollision(terrain);
		}
	};
	
	Sector.prototype.destroy = function() {
		if(this.enemies) {
			this.enemies.destroy();
		}
		if(this.bonuses) {
			this.bonuses.destroy();
		}
	};
	
	return Sector;
})();