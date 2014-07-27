PWG.SectorManager = (function() {
	PWG.Utils.inherits(SectorManager, PWG.Collection);
	
	function SectorManager(params) {
		// trace('SectorManager['+params.name+']/constructor, params = ');
		// trace(params);
		SectorManager._super.constructor.call(this, params);

		this.positionAxis = (this.model.type === PWG.SectorTypes.HORIZONTAL) ? 'x' : 'y';
		// trace('SectorManager/constructor, positionAxis = ' + this.positionAxis);
		this.activeSectorIdx = -1;

		this.localSectors = [];
		this.localDynamicTerrains = [];
		this.localHazards = [];
		this.localBonuses = [];
	}
	
	SectorManager.prototype.begin = function() {
		SectorManager._super.begin.call(this);
		// trace('SectorManager/begin, collection = ', this.model.collection);
	}

	SectorManager.prototype.setState = function(state) {
		this.model.set({ state: state });
	};
	
	SectorManager.prototype.setActiveSector = function(idx) {
		var sector;
		var oldIdx = this.activeSectorIdx;
		this.activeSectorIdx = idx;
		this.model.collection[idx].setActive(true);

		sector = this.model.collection[idx];
		this.localDynamicTerrains = sector.dynamicTerrain.getActive();
		this.localHazards = sector.hazards.getActive();
		this.localBonuses = sector.bonuses.getActive();

		// moving forward
		if(idx > oldIdx) {
			// there's a sector after this, activate it
			if(idx < this.model.collection.length - 1) {
				this.model.collection[(idx + 1)].setActive(true);
				this.localDynamicTerrains = this.localDynamicTerrains.concat(this.model.collection[(idx + 1)].dynamicTerrain.getActive());
			}
			// there's a sector 2 spaces back, deactivate it
			if(idx > 1) {
				this.model.collection[(idx - 2)].setActive(false);
			}
		}
		// moving back
		if(idx < oldIdx) {
			// there's one behind this, active it
			if(idx > 0) {
				this.model.collection[(idx - 1)].setActive(true);
				this.localDynamicTerrains = this.localDynamicTerrains.concat(this.model.collection[(idx - 1)].dynamicTerrain.getActive());
			}
			// there's a sector 2 spaces forward, deactivate it
			if(idx < this.model.collection.length - 2) {
				this.model.collection[(idx + 2)].setActive(false);
			}
		}

		var state = this.model.get('state');
		state.activeSector = this.model.collection[idx];
		PWG.EventCenter.trigger({ type: PWG.Events.SECTOR_CHANGED, idx: idx });
		
	};
	
	SectorManager.prototype.getActive = function(key) {
		if(!this.activeSectorData.hasOwnProperty(key)) {
			return null;
		}
		return this.activeSectorData[key];
	};
	
	SectorManager.prototype.getSector = function(idx) {
		return this.model.collection[idx];
	};
	
	SectorManager.prototype.getActiveSector = function() {
		return this.model.collection[this.activeSectorIdx];
	};
	
	SectorManager.prototype.pwUpdate = function(params) {
		this.updateActiveSector(params.position);
	};
	
	SectorManager.prototype.updateActiveSector = function(position) {
		// trace('SectorManager/updateActiveSector, this = ');
		// trace(this);
		var children = this.model.collection;
		var length = children.length;
		var bounds;
		var pos = position[this.positionAxis];
		// trace('pos = ' + pos);
		for(var i = 0; i < length; i++) {
			bounds = children[i].model.bounds;
			// trace('\tc['+i+'] start/end = ' + bounds.start + '/' + bounds.end);
			if(pos > bounds.start && pos < bounds.end) {
				if(this.activeSectorIdx !== i) {
					// trace('new sector id = ' + i + ', name = ' + children[i].model.name + ', pos = ' + pos);
					this.setActiveSector(i);
					break;
					// this.addLocalSector(i);
				}
			}
		}
	};
	
	SectorManager.prototype.getSectorBounds = function() {
		var bounds = [];
		// trace('SectorManager/getSectorBounds, collection = ', this.model.collection);
		PWG.Utils.each(
			this.model.collection,
			function(sector) {
				bounds.push({
					start: sector.model.bounds.start,
					end: sector.model.bounds.end
				});
			},
			this
		);
		return bounds;
	};
	
	SectorManager.prototype.deactivateAll = function() {
		PWG.Utils.each(this.model.collection,
			function(child) {
				child.setActive(false);
			},
			this
		);
	};
	
	SectorManager.prototype.destroy = function() {
		PWG.Utils.each(this.model.collection,
			function(c) {
				c.destroy();
			},
			this
		);
	};
	
	return SectorManager;
})();