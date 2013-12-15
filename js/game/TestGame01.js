TestGame01 = function()
{
    // Make sure to call the constructor for the TGE.Game superclass
    TestGame01.superclass.constructor.call(this);

     // These are assets we need for the game
    this.assetManager.addAssets("required",[
        {id:'space_bg',   url:'images/space_bg.png'},
		{id:'planet1', url:'images/planet1.png'},
		{id: 'ship_interior', url:'images/ship_interior.png'}
      ]);

    // Set our default loading screen
    TGE.LoadingWindow = Loading;

    // Start the game off with the main menu screen
    TGE.FirstGameWindow = Menu;
}

TestGame01.prototype =
{


}

extend(TestGame01,TGE.Game);

