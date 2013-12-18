// LOGGING
function trace(message, level) {
		if(level === undefined) level = 5;
		var debugLevel = (typeof(debugLevel) !== 'undefined') ? debugLevel : 5;
		if(debugLevel >= level) {
			if (typeof console === "undefined" || typeof console.log === "undefined") {
				console = { log:function(){} };
			} else {
				// implement something for android debugging to parse objects to key/value for view in logcat:
				// var str = (typeof(message) === 'object') ? logStringifyObject(message, 0) : message;
				// console.log(str);

				// until then...
				// if(typeof(message) === 'string') {
				// 	message = '[' + String(new Date().getTime()) + '] ' + message;
				// }
				console.log(message)
			}
		}
}
