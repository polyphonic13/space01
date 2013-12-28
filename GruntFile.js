module.exports = function(grunt) {

	grunt.log.writeln('Starting Grunt Processing:');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		srcDir: 'public/src',
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
					'<%= srcDir %>/js/utils/kinetic_pixel_ratio_modifier.js',
					'<%= srcDir %>/js/utils/request_animation_frame.js',
					'<%= srcDir %>/js/utils/utils.js',
					'<%= srcDir %>/js/data/keke_animations.js',
					'<%= srcDir %>/js/data/stage.js',
					'<%= srcDir %>/js/data/game_config.js',
					'<%= srcDir %>/js/enum/control_keys.js',
					'<%= srcDir %>/js/enum/directions.js',
					'<%= srcDir %>/js/enum/joystick_states.js',
					'<%= srcDir %>/js/events/events.js',
					'<%= srcDir %>/js/views/view.js',
					'<%= srcDir %>/js/views/layers/ground_layer.js',
					'<%= srcDir %>/js/views/layers/image_layer.js',
					'<%= srcDir %>/js/views/layers/scrolling_layer.js',
					'<%= srcDir %>/js/views/layers/scrolling_layers.js',
					'<%= srcDir %>/js/views/enemies/Enemy.js',
					'<%= srcDir %>/js/views/enemies/Enemies.js',
					'<%= srcDir %>/js/views/player/player.js',
					'<%= srcDir %>/js/views/player/sprite_player.js',
					'<%= srcDir %>/js/views/player/life_meter.js',
					'<%= srcDir %>/js/views/controls/control_layer.js',
					'<%= srcDir %>/js/views/controls/joystick.js',
					'<%= srcDir %>/js/keke_game.js'
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
			html: {
				src: [ '<%= srcDir %>/index.html' ],
				dest: '<%= deployDir %>/index.html'
			},

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
				port: 9999,
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