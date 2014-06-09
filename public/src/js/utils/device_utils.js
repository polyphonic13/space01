Polyworks.DeviceUtils = function() {
	var ua = navigator.userAgent.toLowerCase();
	var operatingSystem = '';
	
	var module = {
		browsers: {
			IPHONE: 'Iphone',
			ANDROID: 'Android',
			CHROME: 'Chrome',
			SAFARI: 'Safari',
			FIREFOX: 'Firefox',
			OPERA: 'Opera',
			IE: 'IE'
		},
		operatingSystems: {
			MAC: 'MacOS',
			WINDOWS: 'Windows',
			UNIX: "UNIX",
			LINUX: "Linux"
		},
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
			var browsers = module.browsers; 

			for(var key in browsers) {
				if(module.getType(browsers[key])) {
					browser = browsers[key];
					break;
				}
			}
			return browser;
		},
		getOs: function() {
			if(operatingSystem === '') {
				operatingSystem = "unknown";
				if(navigator.appVersion.indexOf("Win") !== -1) operatingSystem = "Windows";
				if(navigator.appVersion.indexOf("Mac") !== -1) operatingSystem = "MacOS";
				if(navigator.appVersion.indexOf("X11") !== -1) operatingSystem = "UNIX";
				if(navigator.appVersion.indexOf("Linux") !== -1) operatingSystem = "Linux";
			}
			return operatingSystem;
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