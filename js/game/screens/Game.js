
Game = function(width,height)
{
    Game.superclass.constructor.apply(this,arguments);

    // Background Color
    this.backgroundColor = "#000000";

    // Create a BG
    this.addBg();
	this.addPlanet();
	
	var canvasDiv = document.getElementById("game_canvas");

	// Create a stage for rendering
	this.stage = new TGE.Stage(canvasDiv);
	this.addEventListener("update", this.moveCamera.bind(this));
console.log("\nTEST\n");
console.log(this.stage);
}

Game.prototype =
{

    addBg: function()
    {
        var spaceBg = new TGE.Sprite().setup({
            image: "space_bg"
        });

        // Add it to the scene
        this.addChild(spaceBg);
        spaceBg.x = this.percentageOfWidth(.5);
        spaceBg.y = this.height/2;
    },

	addPlanet: function() {
		var planet = new TGE.ParallaxPane().setup({
			image: "planet1",
			y: 0,
			trackingSpeed: 0.7
		});
		// var planet = new TGE.Sprite().setup({
		// 	image: "planet1"
		// });
		this.addChild(planet);
	},
	
	moveCamera: function(event)
	{
		console.log('moveCamera, event.elapsedTime = ' + event.elapsedTime);
		// var cameraLocation = TGE.Game.GetInstance().mCameraLocation;
		// console.log(cameraLocation);
		// 	  cameraLocation.x += event.elapsedTime*100;
	  TGE.Game.GetInstance().mCameraLocation.x += event.elapsedTime*100;
	}
}
extend(Game,TGE.Window);


/*
// Let's use ParallaxPane to create a multi-layered scrolling background.

// Set up the game.
var game = new TGE.Game();

// Specify the required asset(s).

game.assetManager.addAssets("required",[
  {id: "sun",url: 'http://sdk.tresensa.com/demos/images/sun.png'},
  {id: "clouds1",url: 'http://sdk.tresensa.com/demos/images/clouds1.png'},
  {id: "clouds2",url: 'http://sdk.tresensa.com/demos/images/clouds2.png'}
]);

// A function will create the objects.
displayObjects = function()
{
  // Fill the background.
  this.stage.backgroundColor = "#B5EDFF"; // Blue.
  
  // Create a sprite for the sun. It will hold still.
  var bg = new TGE.Sprite().setup({
    image: "space_bg"
  });
  
  var planet = new TGE.ParallaxPane().setup({
    image: "planet1",
    y: -200,
    trackingSpeed: 0.2 // Ratio of object scrolling to camera scrolling.
  });
  
  // Add everything to the stage.
  game.stage.addChild(bg);
  game.stage.addChild(planet);
  
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