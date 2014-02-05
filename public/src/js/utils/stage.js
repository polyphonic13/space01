PolyworksStage = (function() {
	var stage = {};
	
	stage.width = 0;
	stage.height = 0;
	stage.unit = 0;
	
	function _init() {
		var loadingDiv = document.getElementById('loading');
		var containerDiv = document.getElementById('gameContainer');

		stage.width = ((document.documentElement.clientHeight/9) * 16);
		stage.height = document.documentElement.clientHeight;
		stage.unit = stage.height/9;

		var left = document.documentElement.clientWidth;

		var loadingWidth = stage.width - 80;
		var loadingHeight = stage.height - 80;
		// var stage.height = document.documentElement.clientHeight;
		console.log('stage.width = ' + stage.width + ', stage.height = ' + stage.height);
		loadingDiv.style.width = loadingWidth + 'px';
		loadingDiv.style.height = loadingHeight + 'px';
		loadingDiv.style.left = (left/2 - stage.width/2) + 'px';
		loadingDiv.style.display = 'block';

		containerDiv.style.width = stage.width + 'px';
		containerDiv.style.height = stage.height + 'px';
		containerDiv.style.left = (left/2 - stage.width/2) + 'px';
	}
	
	_init();
	
	return stage;
}());