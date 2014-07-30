module.exports = function(grunt) {
	grunt.task.registerTask(
		'copyFilesToServer', 
		function() {
			var skipAIL = grunt.option('skipAIL') || false;
			var skipAudio = grunt.option('skipAudio') || false;
			var skipImages = grunt.option('skipImages') || false;
			var skipLib = grunt.option('skipLib') || false;
			console.log('COPY FILES TO SERVER, skipAudio = ' + skipAudio + ', skipImages = ' + skipImages);

			grunt.task.run('scp:game');

			if(!skipAIL) {
				if(!skipLib) {
					grunt.task.run('scp:lib');
				}
				if(!skipAudio) {
					grunt.task.run('scp:audio');
				}
				if(!skipImages) {
					grunt.task.run('scp:images');
				}
			}
		}
	);
};