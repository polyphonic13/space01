module.exports = function(grunt) {
	grunt.task.registerTask(
		'compressTresensaFiles', 
		function() {
			var now = new Date();
			var year = now.getUTCFullYear();
			var month = prependZero(now.getUTCMonth() + 1);
			var day = prependZero(now.getUTCDate());
			var hours = prependZero(now.getUTCHours());
			var minutes = prependZero(now.getUTCMinutes());
			var seconds = prependZero(now.getUTCSeconds());
			var milliseconds = now.getUTCMilliseconds();

			var archiveName = 'keke_tre_sensa' + year + '.' + month + '.' + day + '.' + hours + '.' + minutes + '.' + seconds + '.' + milliseconds + '.zip';
			grunt.config.set('archiveName', archiveName);
			grunt.task.run('compress:main');

			function prependZero(val) {
				return (val < 10) ? ('0' + val) : val;
			}
		}
	);
};