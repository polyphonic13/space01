Polyworks.GameOverState = (function() {
	Polyworks.Utils.inherits(GameOverState, Polyworks.MenuState);

	function GameOverState(params) {
		GameOverState._super.constructor.call(this, params);
	}
	
	GameOverState.prototype.createState = function() {
		trace('GameOverState/createState, TGS = ', TGS);
		GameOverState._super.createState.call(this);

		this.addTGSWidget();
	};
	
	GameOverState.prototype.addTGSWidget = function() {
		var winW = Polyworks.Stage.winW; 
		var winH = Polyworks.Stage.winH;
		var widgetW = 300;
		var widgetX = winW/2 - widgetW/2;
		var widgetY = '10px';
		var adContainerEl = document.getElementById('adContainer');

		if(typeof(TGS) !== 'undefined') {
			this.widget = TGS.Widget.CreateWidget({
				width: widgetW,
				x: widgetX,
				y: widgetY,
				shareMessage: 'i love playing keke and the grey expanse!',
				parentDiv: adContainerEl
			});
		}

	};

	GameOverState.prototype.onButtonPressed = function(event) {
		trace('GameOverState/onButtonPressed, widget = ', this.widget);
		if(this.widget) {
			this.widget.close();
		}
		GameOverState._super.onButtonPressed.call(this);
	};

	return GameOverState;
}());