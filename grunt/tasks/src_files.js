module.exports = function(grunt) {

	grunt.task.registerTask(
		'src', 
		function() {
			var taskConfig = grunt.config(this.args.join('.'));
			var expanded = grunt.task.normalizeMultiTaskFiles(taskConfig);
			expanded.forEach(function(files) {
				files.src.forEach(function(file) {
					console.log(file);
				});
			});
		}
	);
};
