PolyworksStage = (function() {
	var stage = {};
	
	stage.winW = 0;
	stage.winH = 0;
	stage.width = 0;
	stage.height = 0;
	stage.unit = 0;
	
	// set aspect ratio (width/height)
	// var _ar = [16, 10];
	var _ar = [16, 9];
	// var _ar = [3, 2];
	
	function _init() {
		stage.winW = document.documentElement.clientWidth; 
		stage.winH = document.documentElement.clientHeight;
		// stage.width = stage.winW;
		// stage.height = stage.winH;
		stage.height = (document.documentElement.clientHeight > 800) ? 800 : document.documentElement.clientHeight;
		stage.width = ((document.documentElement.clientHeight/_ar[1]) * _ar[0]);
		
		if(stage.width > document.documentElement.clientWidth) {
			stage.width = document.documentElement.clientWidth;
			stage.height = (stage.width/_ar[0]) * _ar[1];
		}
		// stage.unit = stage.height/_ar[1];
		stage.unit = stage.width/10;
		var left = (document.documentElement.clientWidth/2) - (stage.width/2);
		var top = (document.documentElement.clientHeight/2) - (stage.height/2);

		console.log('stage.width = ' + stage.width + ', stage.height = ' + stage.height);

		var loadingWidth = stage.width - 80;
		var loadingHeight = stage.height - 80;

		var loadingDiv = document.getElementById('loading');
		var containerDiv = document.getElementById('gameContainer');

		_sizeAndPositionDiv(loadingDiv, loadingWidth, loadingHeight, left, top);
		_sizeAndPositionDiv(containerDiv, stage.width, stage.height, left, top);
	}
	
	function _sizeAndPositionDiv(div, width, height, left, right) {
		div.style.width = width + 'px';
		div.style.height = height + 'px';
		div.style.left = left + 'px';
		div.style.top = top + 'px';
		div.style.display = 'block';
	}
	
	_init();
	
	return stage;
}());