module.exports = function(grunt) {

	grunt.log.writeln('Starting Grunt Processing:');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		srcDir: 'src',
		deployDir: 'public/deploy',

/////// CONCAT 
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

			keke_game: {
				options: {
					banner: "(function(){(typeof console === 'undefined' || typeof console.log === 'undefined')?console={log:function(){}}:console.log('----- KEKE_GAME.JS v<%= pkg.version %> created: <%= grunt.template.today(\"isoDateTime\") %>')})();\n"
				},
				src: [
					'<%= srcDir %>/js/utils/logger.js',
					'<%= srcDir %>/js/utils/request_animation_frame.js',
					'<%= srcDir %>/js/utils/utils.js',
					'<%= srcDir %>/js/data/keke_animations.js',
					'<%= srcDir %>/js/data/stage.js',
					'<%= srcDir %>/js/data/game_config.js',
					'<%= srcDir %>/js/data/platforms.js',
					'<%= srcDir %>/js/data/walls.js',
					'<%= srcDir %>/js/enum/control_keys.js',
					'<%= srcDir %>/js/enum/directions.js',
					'<%= srcDir %>/js/enum/joystick_states.js',
					'<%= srcDir %>/js/views/view.js',
					'<%= srcDir %>/js/views/control_button.js',
					'<%= srcDir %>/js/views/joystick.js',
					'<%= srcDir %>/js/views/player.js',
					'<%= srcDir %>/js/views/sprite_player.js',
					'<%= srcDir %>/js/views/image_layer.js',
					'<%= srcDir %>/js/views/scrolling_layer.js',
					'<%= srcDir %>/js/views/scrolling_layers.js',
					'<%= srcDir %>/js/keke_game/keke_game.js'
				],
				dest: '<%= deployDir %>/js/keke_game.js'
			}
		},
/////// MINIFICATION
		uglify: {
			// task docs: https://github.com/gruntjs/grunt-contrib-uglify

			options: {

				// banner inserted at top of the output file
				banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				preserveComments: false,
				compress: true,
				report: 'gzip'
				// report: 'min'
			},

			keke_game: {
				src: [ '<%= deployDir %>/js/keke_game.js' ],
				dest: '<%= deployDir %>/js/keke_game.min.js'
			}

		},
/////// COPYING
		copy: {
			// task docs: https://github.com/gruntjs/grunt-contrib-copy
			// playerIframe: {
			// 	src: [ '<%= srcDir %>/sm_player_iframe.html' ],
			// 	dest: '<%= deployDir %>/sm_player_iframe.html'
			// },

			// html: {
			// 	expand: true,
			// 	cwd: 'src/',
			// 	src: [ '**/*.html' ],
			// 	dest: '<%= deployDiv %>/'
			// }, 
			
			images: {
				files: [{
					expand: true,
					cwd: '<%= srcDir %>/images/',
					src: [ '**' ],
					dest: '<%= deployDir %>/images/'
				}]
			},

 			css: {
				files: [{
					expand: true, 
					cwd: '<%= srcDir %>/css/',
					src: [ '**' ],
					dest: '<%= deployDir %>/css'
				}]
			}
		},
/////// LOCAL SERVER
		connect: {
			// docs: https://github.com/iammerrick/grunt-connect
			devel: {
				port: 8000,
				base: 'public',
				keepAlive: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-connect');
	
	grunt.registerTask('default', ['concat', 'uglify', 'copy']);

};