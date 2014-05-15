Polyworks.GameOverState = (function() {
	Polyworks.Utils.inherits(GameOverState, Polyworks.MenuState);

	function GameOverState(params) {
		GameOverState._super.constructor.call(this, params);
	}
	
	GameOverState.prototype.createState = function() {
		// trace('GameOverState/createState, TGS = ', TGS);
		GameOverState._super.createState.call(this);

		Polyworks.TGSAdapter.addGameOverWidget();
	};
	
	GameOverState.prototype.shutdown = function(event) {
		// trace('GameOverState/shutdown');
		Polyworks.TGSAdapter.hideGameOverWidget();
		GameOverState._super.shutdown.call(this);
	};

	return GameOverState;
}());