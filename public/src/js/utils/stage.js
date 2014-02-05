PolyworksStage = (function() {
	var stage = {};
	
	stage.width = 0;
	stage.height = 0;
	stage.unit = 0;
	
	function _init() {
		stage.height = (document.documentElement.clientHeight > 500) ? 500 : document.documentElement.clientHeight;
		stage.width = ((document.documentElement.clientHeight/9) * 16);

		if(stage.width > document.documentElement.clientWidth) {
			stage.width = document.documentElement.clientWidth;
			stage.height = (stage.width/16) * 9;
		}
		stage.unit = stage.height/9;
		var left = document.documentElement.clientWidth;

		console.log('stage.width = ' + stage.width + ', stage.height = ' + stage.height);

		var loadingWidth = stage.width - 80;
		var loadingHeight = stage.height - 80;

		var loadingDiv = document.getElementById('loading');
		var containerDiv = document.getElementById('gameContainer');

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