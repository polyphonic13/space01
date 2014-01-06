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

	this.controlKeys = {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	};
	
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
	this.addEventListener("keydown", this.keyDown.bind(this));
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
		this.keke = new TGE.Sprite().setup({
			image: "keke"
		});
		this.addChild(this.keke);
        this.keke.x = this.percentageOfWidth(.5);
        this.keke.y = this.height/2;
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
	},
	
	keyDown: function(event) {
		switch(event.keyCode) {
			case this.controlKeys.LEFT: 
			console.log("left key down");
			this.moveKeke("left");
			break;
			
			case this.controlKeys.UP:
			console.log("up key down");

			break;
			
			case this.controlKeys.RIGHT: 
			console.log("right key down");
			this.moveKeke("right");
			break;
			
			case this.controlKeys.DOWN:
			console.log("down key down");
			break;
		}

	},
	
	moveKeke: function(direction) {
		var amount = -5;
		if(direction == "right") {
			amount = 5;
		}
		this.keke.x += amount;
	}
}
extend(Game,TGE.Window);
