/*
basic unit: 36px (576w x 324h)

level buttons:
	l/r 8x4 = 288x144
	up	4x8 = 144x288

level backgrounds (2)
640x180
1280x360
2560x720

160x80
64x18

1 level:
128x18 (16*8, 9*2)
1 sector:
32x18 (16*2, 9*2)

nexus 5:
980x470 (screen)
836x470 (stage)

2940x940 = 3x2
5880x940 = 6x2 (level)
*/
Polyworks.Stage = (function() {
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
	
	stage.destroy = function() {
		window.removeEventListener('resize', function(event) {
			_onSizeChange(event);
		});
		window.removeEventListener('orientationchagne', function(event) {
			_onSizeChange(event);
		});
	};
	
	stage.init = function() {

		_calculateSizes();

		// window.addEventListener('resize', function(event) {
		// 	_onSizeChange(event);
		// 	// _calculateSizes();
		// });
		// window.addEventListener('orientationchagne', function(event) {
		// 	_onSizeChange(event);
		// 	// _calculateSizes();
		// });

		Polyworks.EventCenter.trigger({ type: Polyworks.Events.STAGE_INITIALIZED });
	};

	function _calculateSizes() {
		stage.winW = document.documentElement.clientWidth; 
		stage.winH = document.documentElement.clientHeight;

		stage.height = (document.documentElement.clientHeight > 800) ? 800 : document.documentElement.clientHeight;
		stage.width = ((document.documentElement.clientHeight/_ar[1]) * _ar[0]);

		if(stage.width > document.documentElement.clientWidth) {
			stage.width = document.documentElement.clientWidth;
			stage.height = (stage.width/_ar[0]) * _ar[1];
		}

		stage.unit = stage.height/_ar[1];
		var left = (document.documentElement.clientWidth/2) - (stage.width/2);
		var top = (document.documentElement.clientHeight/2) - (stage.height/2);

		trace('\nwinW = ' + stage.winW + ', winH = ' + stage.winH 
				+  '\nstage.width = ' + stage.width + ', stage.height = ' + stage.height
				+ '\nunit = ' + stage.unit
				+ '\nleft = ' + left + ', top = ' + top);

		var loadingWidth = stage.winW - 80;
		var loadingHeight = stage.winH - 80;

		var loadingDiv = document.getElementById('loading');
		var containerDiv = document.getElementById('gameContainer');

		_sizeAndPositionDiv(loadingDiv, loadingWidth, loadingHeight, 0, 0);
		// _sizeAndPositionDiv(containerDiv, stage.width, stage.height, left, top);
		_sizeAndPositionDiv(containerDiv, stage.winW, stage.winH, 0, 0);

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

	return stage;
}());