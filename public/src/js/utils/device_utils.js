Polyworks.DeviceUtils = (function() {
	
	var deviceUtils = {
		isIphone: function() {
			return navigator.userAgent.match(/iPhone/);
		},
		isMobile: function() {
			return navigator.userAgent.match(/iPhone|iPad|Android/);
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