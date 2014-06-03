Polyworks.DeviceUtils = function() {
	var ua = navigator.userAgent.toLowerCase();
	var _browsers = [
		'Iphone',
		'Android',
		'Chrome',
		'Safari',
		'Firefox',
		'Opera',
		'IE'
	];
	
	var module = {
		isMobile: function() {
			return ua.match(/iphone|ipad|android/);
		},
		isIphone: function() {
			return ua.match(/iphone/);
		},
		isAndroid: function() {
			return ua.match(/android/);
		},
		isChrome: function() {
			return !!window.chrome && !module.isOpera(); // Chrome 1+
			// return ua.match(/chrome/);
		},
		isSafari: function() {
			return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
		    // At least Safari 3+: "[object HTMLElementConstructor]"
			// return ua.match(/safari/);
		},
		isFirefox: function() {
			return typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
		},
		isOpera: function() {
			return !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
		    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
		},
		isIE: function() {
			return /*@cc_on!@*/false || !!document.documentMode; // At least IE6
		},
		getType: function(type) {
			var method = 'is' + type;
			return module[method]();
		},
		getBrowser: function() {
			var browser = '';

			for(var i = 0; i < _browsers.length; i++) {
				if(module.getType(_browsers[i])) {
					browser = _browsers[i];
					break;
				}
			}
			return browser;
		}
	};
	
	return module;
}();
/*
if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
        tilt([event.beta, event.gamma]);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
        tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
    }, true);
} else {
    window.addEventListener("MozOrientation", function () {
        tilt([orientation.x * 50, orientation.y * 50]);
    }, true);
}
*/

// compass: 
// http://stackoverflow.com/questions/16317599/android-compass-that-can-compensate-for-tilt-and-pitch