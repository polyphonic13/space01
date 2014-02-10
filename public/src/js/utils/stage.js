PolyworksStage = (function() {
	var stage = {};
	
	stage.winW = 0;
	stage.winH = 0;
	stage.width = 0;
	stage.height = 0;
	stage.wUnit = 0;
	stage.hUnit = 0;
	
	// set aspect ratio (width/height)
	// var _ar = [16, 10];
	var _ar = [16, 9];
	// var _ar = [3, 2];
	
	stage.destroy = function() {
		window.removeEventListener('resize', function(event) {
			_onSizeChange(event)
		});
		window.removeEventListener('orientationchagne', function(event) {
			_onSizeChange(event)
		});
	};
	
	function _init() {

		_calculateSizes();

		// window.addEventListener('resize', function(event) {
		// 	// _onSizeChange(event)
		// 	_calculateSizes();
		// });
		// window.addEventListener('orientationchagne', function(event) {
		// 	// _onSizeChange(event)
		// 	_calculateSizes();
		// });
	}

	function _calculateSizes() {
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
		// stage.wUnit = stage.height/_ar[1];
		stage.wUnit = stage.width/10;
		stage.hUnit = stage.height/10;
		var left = (document.documentElement.clientWidth/2) - (stage.width/2);
		var top = (document.documentElement.clientHeight/2) - (stage.height/2);

		console.log('stage.width = ' + stage.width + ', stage.height = ' + stage.height 
				+ '\nstage.winW = ' + stage.winW + ', stage.winH = ' + stage.winH 
				+ '\nleft = ' + left + ', top = ' + top);

		var loadingWidth = stage.winW - 80;
		var loadingHeight = stage.winH - 80;

		var loadingDiv = document.getElementById('loading');
		var containerDiv = document.getElementById('gameContainer');

		_sizeAndPositionDiv(loadingDiv, loadingWidth, loadingHeight, 0, 0);
		_sizeAndPositionDiv(containerDiv, stage.width, stage.height, left, top);
		// _sizeAndPositionDiv(containerDiv, stage.winW, stage.winH, left, top);

	}

	function _sizeAndPositionDiv(div, width, height, left, top) {
		if(div) {
			div.style.width = width + 'px';
			div.style.height = height + 'px';
			div.style.left = left + 'px';
			div.style.top = top + 'px';
			div.style.display = 'block';
		}
	}
	
	function _onSizeChange(event) {
		var containerDiv = document.getElementById('gameContainer');
		var left = (document.documentElement.clientWidth/2) - (stage.width/2);
		var top = (document.documentElement.clientHeight/2) - (stage.height/2);
		containerDiv.style.left = left + 'px';
		containerDiv.style.top = top + 'px';
	}

	_init();
	
	return stage;
}());