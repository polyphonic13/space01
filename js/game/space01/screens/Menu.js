Menu = function(width,height)
{
    Menu.superclass.constructor.apply(this,arguments);

    this.backgroundColor = "#000000";

    // Play button
    this.addChild(new TGE.Button().setup( {
        text:"Play",
        x:this.percentageOfWidth(0.5),
        y:this.percentageOfHeight(0.42),
        pressFunction:this.playGame.bind(this),
        verticalPressOffset:-10
    }));
/*
    // Shop button
    this.addChild(new TGE.Button().setup( {
        text:"Shop",
        x:this.percentageOfWidth(0.5),
        y:this.percentageOfHeight(0.61),
        pressFunction:this.gotoShop.bind(this)
    }));

    // Leaderboard button
    if(TGS.LeaderboardSupported())
    {
        this.addChild(new TGE.Button().setup( {
            text:"Leaderboard",
            x:this.percentageOfWidth(0.5),
            y:this.percentageOfHeight(0.80),
            pressFunction:TGS.Leaderboard.Show.bind(this,{
                leaderboardID:0,
                timePeriod:"week",
                page:1,
                gameCanvas:TGE.Game.GameDiv()
            })
        }));
    }
*/

    // Welcome back message (blank - we'll update it later)
    this.welcomMessage = this.addChild(new TGE.Text().setup( {
        x:this.percentageOfWidth(0.5),
        y:this.percentageOfHeight(0.95),
        font:"22px Tahoma",
        color:"#0D0C0C"
    }));
    this.updateWelcomeMessage();

    // TGS Login/Logout widget
    this.addChild(TGS.CreateLoginWidget().setup({
        x: this.pixelsFromLeft(140),
        y: this.pixelsFromBottom(120)
    }));

    // Setup a TGS event listener to update the welcome message if highscore changes
    this.addEventListener("tgs_data_updated",this.updateWelcomeMessage.bind(this));
}

Menu.prototype =
{
    playGame: function()
    {
        // Opens a new window and closes this one when done
        this.transitionToWindow({windowClass:Game,fadeTime:0.75});
    },

    tresensaPlug: function()
    {
        TGE.Game.OpenURL("http://www.tresensa.com/");
    },

    updateWelcomeMessage: function()
    {
        var highscore = TGS.DataStore.FetchIntValue("highscore",0);
        if(highscore>0)
        {
            this.welcomMessage.text = "Welcome back, your highscore is " + highscore + ".";
        }
        else
        {
            this.welcomMessage.text = "";
        }
    }
}
extend(Menu,TGE.Window);
