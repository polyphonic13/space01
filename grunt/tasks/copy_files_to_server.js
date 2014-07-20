module.exports = function(grunt) {
	grunt.task.registerTask(
		'copyFilesToServer', 
		function() {
			var skipAudio = grunt.option('skipAudio') || false;
			var skipImages = grunt.option('skipImages') || false;
			console.log('COPY FILES TO SERVER, skipAudio = ' + skipAudio + ', skipImages = ' + skipImages);
			grunt.task.run('scp:game');
			if(!skipAudio) {
				grunt.task.run('scp:audio');
			}
			if(!skipImages) {
				grunt.task.run('scp:images');
			}
		}
	);
};