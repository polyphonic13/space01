PWG.GameOverState = (function() {
	PWG.Utils.inherits(GameOverState, PWG.MenuState);

	function GameOverState(params) {
		GameOverState._super.constructor.call(this, params);
	}
	
	GameOverState.prototype.createState = function() {
		// trace('GameOverState/createState, TGS = ', TGS);
		GameOverState._super.createState.call(this);

		PWG.TGSAdapter.addGameOverWidget();
	};
	
	GameOverState.prototype.shutdown = function(event) {
		// trace('GameOverState/shutdown');
		PWG.TGSAdapter.hideGameOverWidget();
		GameOverState._super.shutdown.call(this);
	};

	return GameOverState;
}());