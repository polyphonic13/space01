/*
keycodes: 
left 		37
up 			38
right 		39
down 		40
*/
Game = function(width,height)
{
    Game.superclass.constructor.apply(this,arguments);

    // Background Color
  this.backgroundColor = "#B5EDFF"; // Blue.

    // Create a BG
    this.addBg();
	this.addHills();
	this.addKeke();
	
	var canvasDiv = document.getElementById("game_canvas");

	// Create a stage for rendering
	this.stage = new TGE.Stage(canvasDiv);
	// this.addEventListener("update", this.moveCamera.bind(this));
	console.log("\nTEST\n");
	console.log(this.stage);0
	// this.addEventListener("mousemove", this.mouseMove.bind(this));
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

	addHills: function() {
		var hills01 = new TGE.ParallaxPane().setup({
			image: "hills01",
			y: 50,
			trackingSpeed: 0.7
		});
		// var planet = new TGE.Sprite().setup({
		// 	image: "hills01"
		// });
		this.addChild(hills01);
	},
	
	addKeke: function() {
		var keke = new TGE.Sprite().setup({
			image: "keke"
		});
		this.addChild(keke);
        keke.x = this.percentageOfWidth(.5);
        keke.y = this.height/2;
	},
	
	moveCamera: function(event)
	{
		console.log('moveCamera, event.elapsedTime = ' + event.elapsedTime);
		// var cameraLocation = TGE.Game.GetInstance().mCameraLocation;
		// console.log(cameraLocation);
		// 	  cameraLocation.x += event.elapsedTime*100;
	  // TGE.Game.GetInstance().mCameraLocation.x += event.elapsedTime*100;
	},
	
	mouseMove: function(event) {
		console.log('mouse moved');
		// TGE.Game.GetInstance().mCameraLocation.x += event.elapsedTime*100;
	}
}
extend(Game,TGE.Window);
