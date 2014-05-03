Polyworks.DeviceUtils = (function() {
	var ua = navigator.userAgent.toLowerCase();
    
	var deviceUtils = {
		isIphone: function() {
			return ua.match(/iphone/);
		},
		isMobile: function() {
			return ua.match(/iphone|ipad|android/);
		},
		isChrome: function() {
			return ua.match(/safari/);
		},
		isSafari: function() {
			return ua.match(/chrome/);
		}
	};
	
	return deviceUtils;
}());
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