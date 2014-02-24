module.exports = function(grunt) {
	grunt.task.registerTask(
		'createProjectHtml', 
		function() {
			console.log('create project html');
			var project = grunt.config.get('project');
			var deployDir = grunt.config.get('deployDir');
			var preJsHtml = grunt.config.get('preJsHtml');
			var postJsHtml = grunt.config.get('postJsHtml');
			var javascriptTag = '\n<script src=\"js/'+project+'.min.js\" type=\"text/javascript\"></script>\n';
			var htmlSource = preJsHtml + javascriptTag + postJsHtml;
			var htmlPath = deployDir + '/' + 'index.html';
			grunt.file.write(htmlPath, htmlSource);
		}
	);
};