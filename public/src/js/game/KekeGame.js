KekeGame = function()
{
    // Make sure to call the constructor for the TGE.Game superclass
    KekeGame.superclass.constructor.call(this);

     // These are assets we need for the game
    this.assetManager.addAssets("required",[
		{id:'hills01', url:'images/hills01.png'},
		// {id: 'ship_interior', url:'images/ship_interior.png'},
        {id:'keke',   url:'images/keke.png'}
      ]);

    // Set our default loading screen
    TGE.LoadingWindow = Loading;

    // Start the game off with the main menu screen
    TGE.FirstGameWindow = Menu;
}

KekeGame.prototype =
{


}

extend(KekeGame,TGE.Game);

