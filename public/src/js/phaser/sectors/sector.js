var Sector = (function() {
	
	function Sector(params, game) {
		this.model = params;
		this.enemies = new Enemies(params.enemies);
		this.bonuses = new Bonuses(params.bonuses);
	}
	
	return Sector;
})();