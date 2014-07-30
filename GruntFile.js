module.exports = function(grunt) {

	var project = 'keke2';
	var srcDir = 'public/src';
	var buildDir = 'public/build';
	var tresensaDir = 'public/tresensa_build';
	var tresensaBuild = tresensaDir + '/keke_tre_sensa';

	var tgt = grunt.option('tgt') || 'keke';
	
	var projectSrcDir;
	
	if(typeof(project) !== 'undefined') {
		// srcDir += '/' + project;
		projectSrcDir = srcDir + '/' + project;
		buildDir += '/' + project;
	}
	grunt.log.writeln('Starting Grunt Processing');
	grunt.log.writeln('\ttgt = ' + tgt
						+ '\n\tsrcDir = ' + srcDir 
						+ '\n\tbuildDir = ' + buildDir 
						+ '\n\tprojectSrcDir = ' + projectSrcDir);


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		meta: grunt.file.readJSON('grunt/data/meta.json'),

		tgt: tgt,
		project: project,
		srcDir: srcDir,
		buildDir: buildDir,
		tresensaDir: tresensaDir,
		tresensaBuild: tresensaBuild,
		projectSrcDir: projectSrcDir,

		// CLEAN
		// docs: https://github.com/gruntjs/grunt-contrib-clean
		clean: {
			removeDeployDir: ['<%= buildDir %>']
		},

		// CONCAT 
		concat: {
			// task docs: https://github.com/gruntjs/grunt-contrib-concat

			options: {

				// default banner inserted at top of the output file (overridden for some files below)
				banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("isoDateTime") %> */\n',

				// separator between each file
				// separator: '\n;\n',
				separator: '\n\n',

				// remove block comments at the head of input files
				stripBanners: true,

				process: true,

				// error on missing files
				nonull: true

			},

			project: {
				options: {
					banner: "(function(){(typeof console === 'undefined' || typeof console.log === 'undefined')?console={log:function(){}}:console.log('----- <%= project %> created: <%= grunt.template.today(\"isoDateTime\") %>')})();\n"
				},
				src: '<%= projectJavascripts %>',
				dest: '<%= buildDir %>/js/<%= project %>.js'
			}

		},

		// MINIFICATION
		uglify: {
			// task docs: https://github.com/gruntjs/grunt-contrib-uglify

			options: {

				// banner inserted at top of the output file
				banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				preserveComments: false,
				compress: true,
				// report: 'gzip'
				report: 'min'
			},

			project: {
				src: [ '<%= buildDir %>/js/<%= project %>.js' ],
				dest: '<%= buildDir %>/js/<%= project %>.min.js'
			},
			
			file: {
				src: [ '<%= srcDir %>/js/<%= project %>.js' ],
				dest: '<%= buildDir %>/js/<%= project %>.min.js'
			}
			
		},

		// COPYING
		copy: {
			// task docs: https://github.com/gruntjs/grunt-contrib-copy

			project: {
				files: [
				{
					expand: true,
					cwd: '<%= projectSrcDir %>/assets/',
					src: [ '**/*' ],
					dest: '<%= buildDir %>/assets/'
				},
				{
					expand: true, 
					cwd: '<%= projectSrcDir %>/css/',
					src: [ '**/*' ],
					dest: '<%= buildDir %>/css/'
				}
				]
			},

			tresensa: {
				files: [
				{
					expand: true,
					cwd: '<%= buildDir %>/assets/',
					src: [ '**/*' ],
					filter: 'isFile',
					dest: '<%= tresensaBuild %>/assets/'
				},
				{
					expand: true,
					cwd: '<%= buildDir %>/css/',
					src: [ '**/*.css' ],
					filter: 'isFile',
					dest: '<%= tresensaBuild %>/css/'
				},
				{
					expand: true,
					cwd: '<%= buildDir %>/js/',
					src: [ '**/*.js' ],
					filter: 'isFile',
					dest: '<%= tresensaBuild %>/js/game/'
				}
				]
			}

		},

		// CSS MINIFICATION
		cssmin: {
			project: {
				expand: true,
				cwd: '<%= buildDir %>/css/',
				src: ['*.css', '!*.min.css'],
				dest: '<%= buildDir %>/css/'
			}
		},

		// COMPRESS
		// docs: https://github.com/gruntjs/grunt-contrib-compress
		compress: {
			main: {
				options: {
					archive: '<%= tresensaDir %>/<%= archiveName %>'
				},
				files: [
				{
					expand: true,
					cwd: '<%= tresensaBuild %>',
					src: [ '**/*' ],
					dest: '<%= tresensaDir %>'
				}
				]
			}
		},

		// SCP
		// docs: https://www.npmjs.org/package/grunt-scp
		scp: {
			options: {
				host: '<%= meta.server.host %>',
				username: '<%= meta.server.user %>',
				password: '<%= meta.server.pass%>'
			},
			game: {
				files: [
				{
					cwd: '<%= tresensaBuild %>/css/',
					src: '**/*',
					filter: 'isFile',
					dest: '<%= meta.server.path %>/<%= tgt %>/css/'
				},
				{
					cwd: '<%= tresensaBuild %>/tge.css',
					src: '**/*',
					filter: 'isFile',
					dest: '<%= meta.server.path %>/<%= tgt %>/'
				},
				{
					cwd: '<%= tresensaBuild %>/js/game/',
					src: '**/*',
					filter: 'isFile',
					dest: '<%= meta.server.path %>/<%= tgt %>/js/game/'
				},
				{
					cwd: '<%= tresensaBuild %>/js/GameConfig.js',
					src: '**/*',
					filter: 'isFile',
					dest: '<%= meta.server.path %>/<%= tgt %>/js/GameConfig.js'
				},
				{
					cwd: '<%= tresensaBuild %>/leaderboard/',
					src: '**/*',
					filter: 'isFile',
					dest: '<%= meta.server.path %>/<%= tgt %>/leaderboard/'
				},
				{
					cwd: '<%= tresensaBuild %>',
					src: '**/*.html',
					filter: 'isFile',
					dest: '<%= meta.server.path %>/<%= tgt %>'
				}
				]
			},
			
			lib: {
				files: [{
					cwd: '<%= tresensaBuild %>/js/lib/',
					src: '**/*',
					filter: 'isFile',
					dest: '<%= meta.server.path %>/<%= tgt %>/js/lib/'
				}]
			},
			
			audio: {
				files: [{
					cwd: '<%= tresensaBuild %>/assets/audio/',
					src: '**/*',
					filter: 'isFile',
					dest: '<%= meta.server.path %>/<%= tgt %>/assets/audio/'
				}]
			},
			
			images: {
				files: [{
					cwd: '<%= tresensaBuild %>/assets/images/',
					src: '**/*',
					filter: 'isFile',
					dest: '<%= meta.server.path %>/<%= tgt %>/assets/images/'
				}]
			}
		},

		// LOCAL SERVER
		connect: {
			/*
			// docs: https://github.com/iammerrick/grunt-connect
			devel: {
				port: 9999,
				base: 'public',
				keepAlive: true
			}
			*/
			server: { 
				port: 9999,
				base: 'public',
				keepAlive: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-scp');
	grunt.loadNpmTasks('grunt-connect');

	grunt.loadTasks('grunt/tasks');
	
	grunt.registerTask(
		'default', 
		[
			'clean',
			'projectBuildSetup', 
			'concat:project', 
			// 'stripTraceStatements', 
			'uglify', 
			'copy:project', 
			'cssmin', 
			'createProjectHtml'
		]
	);
	
	grunt.registerTask(
		'tresensa',
		[
			'default',
			'copy:tresensa',
			'compressTresensaFiles'
		]
	);

	grunt.registerTask(
		'deploy',
		[
			'tresensa',
			'copyFilesToServer'
		]
	);
};