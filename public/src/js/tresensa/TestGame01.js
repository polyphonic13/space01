// Let's use ParallaxPane to create a multi-layered scrolling background.
/*
// Set up the game.
var game = new TGE.Game();

// Specify the required asset(s).
game.assetManager.addAssets("required",[
{id:'space_bg',   url:'images/space_bg.png'},
{id:'planet1', url:'images/planet1.png'},
{id: 'ship_interior', url:'images/ship_interior.png'}
]);

// A function will create the objects.
displayObjects = function()
{
  // Fill the background.
  this.stage.backgroundColor = "#B5EDFF"; // Blue.
  
  // Create a sprite for the sun. It will hold still.
  var spaceBg = new TGE.Sprite().setup({
       image: "space_bg"
   });

   // Add it to the scene
   spaceBg.x = this.percentageOfWidth(.5);
   spaceBg.y = this.height/2;
  
  // Create clouds using ParallaxPane. They will scroll.
  var planet1 = new TGE.ParallaxPane().setup({
    image: "planet1",
    y: 0,
    trackingSpeed: 0.7 // Ratio of object scrolling to camera scrolling.
  	});

	var interior = new TGE.Sprite().setup({
		image: "ship_interior"
	});
    interior.x = this.percentageOfWidth(.5);
    interior.y = this.height/2;
  
  // Add everything to the stage.
  game.stage.addChild(spaceBg);
  game.stage.addChild(planet1);
  game.stage.addChild(interior);
  
  // Tell the stage to run the moveCamera function every update cycle.
  this.stage.addEventListener("update",moveCamera);
};

// A function will move the camera.
moveCamera = function(event)
{
  // The camera is a property of the global game instance.
  TGE.Game.GetInstance().mCameraLocation.x += event.elapsedTime*100;
};

// Everything is ready - launch the game!
// Run the function as soon as the game loads.
game.launch({gameDiv:"gamediv", onLoad:displayObjects});
*/

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


