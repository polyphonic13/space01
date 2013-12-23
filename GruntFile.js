module.exports = function(grunt) {

	var tags = grunt.option('tags') || 'local';
	var player = grunt.option('player') || 'dz';

	grunt.log.writeln('Starting Grunt Processing: tags='+tags+', player='+player);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		srcDir: 'public/src',
		deployDir: 'public/deploy',
		tags: tags,
		player: player,

		vanguardSrcDir: '../vanguard/public/src/javascripts/vanguard',

/////// JS HINT
		jshint: {
			// task docs: https://github.com/gruntjs/grunt-contrib-jshint

			options: {
				jshintrc: "jshintrc"
			},

			// TODO: set jshintrc options, then add files and clean up warnings
			self: {
				src: [ 'Gruntfile.js' ]
			},

			pub: {
				src: [ '<%= srcDir %>/javascripts/nimitz/pub.js' ]
			},

			win8: {
				src: [ 
					'<%= srcDir %>/javascripts/nimitz/win8/win8.js', 
					'<%= srcDir %>/javascripts/nimitz/win8/win8console.js' 
				]
			},

			winjs: {
				src: [ '<%= srcDir %>/javascripts/nimitz/win8/winjs.js' ]
			},

			smraid: {
				src: [ '<%= srcDir %>/javascripts/nimitz/mraid/smraid*.js']
			},

			misc: {
				src: [ '<%= srcDir %>/javascripts/nimitz/sm_wrapper/sm_wrapper_base.js' ]
			}
		},
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

			sm_wrapper: {
				options: {
					banner: "(function(){(typeof console === 'undefined' || typeof console.log === 'undefined')?console={log:function(){}}:console.log('----- SM_Wrapper.JS v<%= pkg.version %> created: <%= grunt.template.today(\"isoDateTime\") %>')})();\n"
				},
				src: [
					'<%= srcDir %>/javascripts/third_party/postmessage.js',
					'<%= srcDir %>/javascripts/third_party/yepnope.1.5.4-min.js',
					'<%= srcDir %>/javascripts/third_party/yepnope.css.js',

					// global, public event constants
					'<%= srcDir %>/javascripts/nimitz/events/events.js',
					'<%= srcDir %>/javascripts/nimitz/events/errors.js',

					// vanguard player size calculation utility:
					'<%= srcDir %>/javascripts/nimitz/utils/gen_four_shared.js', // SM_Info

					// BEGIN SM_App MODULE
					// all files after this are in the scope of the sm app (wrapper) module: SM_App
					'<%= srcDir %>/javascripts/nimitz/sm_wrapper/sm_wrapper_header.js', 

					// utils
					'<%= srcDir %>/javascripts/nimitz/utils/logger.js',
					'<%= srcDir %>/javascripts/nimitz/utils/utils.js',
					'<%= srcDir %>/javascripts/nimitz/utils/device_sizer.js',

					// internal events
					'<%= srcDir %>/javascripts/nimitz/events/internal_events.js',

					// apis
					'<%= srcDir %>/javascripts/nimitz/apis/base_api.js',
					'<%= srcDir %>/javascripts/nimitz/apis/ads_available_api.js',
					'<%= srcDir %>/javascripts/nimitz/apis/pub_wrapper_api.js',

					// events (sm internal)
					'<%= srcDir %>/javascripts/nimitz/events/event_center.js',

					// external communication
					'<%= srcDir %>/javascripts/nimitz/external/loader.js',
					'<%= srcDir %>/javascripts/nimitz/external/notifier.js',

					// models
					// '<%= srcDir %>/javascripts/nimitz/models/imports.js',
					'<%= srcDir %>/javascripts/nimitz/models/model.js',
					'<%= srcDir %>/javascripts/nimitz/models/base_model.js',
					'<%= srcDir %>/javascripts/nimitz/models/app/base_app_model.js',
					'<%= srcDir %>/javascripts/nimitz/models/wrapper/wrapper_model.js',

					// reporting
					'<%= srcDir %>/javascripts/nimitz/reporting/reporter.js',

					// views
					'<%= srcDir %>/javascripts/nimitz/views/wrapper_view.js',

					'<%= srcDir %>/javascripts/nimitz/sm_wrapper/sm_wrapper.js' // main module code
					// END MODULEs
				],
				dest: '<%= deployDir %>/javascripts/sm_wrapper.js'
			},

			sm_app: {
				options: {
					banner: "(function(){(typeof console === 'undefined' || typeof console.log === 'undefined')?console={log:function(){}}:console.log('----- SM_App.JS v<%= pkg.version %> created: <%= grunt.template.today(\"isoDateTime\") %>')})();\n"
				},
				src: [

					// BEGIN SM_App MODULE
					// all files after this are in the scope of the SM_App module
					'<%= srcDir %>/javascripts/nimitz/sm_app/sm_app_header.js', 

					// utils
					'<%= srcDir %>/javascripts/nimitz/utils/device_sizer.js',
					'<%= srcDir %>/javascripts/nimitz/utils/jquery_manager.js',
					'<%= srcDir %>/javascripts/nimitz/utils/logger.js',
					'<%= srcDir %>/javascripts/nimitz/utils/utils.js',

					// events (sm internal)
					'<%= srcDir %>/javascripts/nimitz/events/internal_events.js',
					'<%= srcDir %>/javascripts/nimitz/events/event_center.js',

					// external communication
					'<%= srcDir %>/javascripts/nimitz/external/notifier.js',
					'<%= srcDir %>/javascripts/nimitz/external/xdm.js',

					// models
					'<%= srcDir %>/javascripts/nimitz/models/model.js',
					'<%= srcDir %>/javascripts/nimitz/models/base_model.js',
					'<%= srcDir %>/javascripts/nimitz/models/app/base_app_model.js',
					'<%= srcDir %>/javascripts/nimitz/models/app/app_model.js',

					// reporting
					'<%= srcDir %>/javascripts/nimitz/reporting/reporter.js',

					// views
					'<%= srcDir %>/javascripts/nimitz/views/smart_view.js',
					'<%= srcDir %>/javascripts/nimitz/views/parent_view.js',
					'<%= srcDir %>/javascripts/nimitz/views/loading_animation/spinner.js',
					'<%= srcDir %>/javascripts/nimitz/views/iframes/player_iframe.js',
					'<%= srcDir %>/javascripts/nimitz/views/iframes/standalone_player_iframe.js',
					'<%= srcDir %>/javascripts/nimitz/views/app_view_standalone.js',

					// data / config
					'<%= srcDir %>/javascripts/nimitz/data/sm_app_view_config.js',

					'<%= srcDir %>/javascripts/nimitz/sm_app/sm_app.js'
				],
				dest: '<%= deployDir %>/javascripts/sm_app.js'
			},

			sm_player: {
				options: {
					banner: "(function(){(typeof console === 'undefined' || typeof console.log === 'undefined')?console={log:function(){}}:console.log('----- SM_Player.JS v<%= pkg.version %> created: <%= grunt.template.today(\"isoDateTime\") %>')})();\n"
				},
				src: [

					// 3rd party | global JS
					'<%= srcDir %>/javascripts/third_party/require.js',
					'<%= srcDir %>/javascripts/third_party/postmessage.js',

					// SM_Player opening definition of module
					'<%= srcDir %>/javascripts/nimitz/sm_player/sm_player_header.js',
					// all files after this are scoped classes or modules

					// utils
					'<%= srcDir %>/javascripts/nimitz/utils/logger.js',
					'<%= srcDir %>/javascripts/nimitz/utils/utils.js',
					'<%= srcDir %>/javascripts/nimitz/utils/device_sizer.js',
					'<%= srcDir %>/javascripts/nimitz/utils/jquery_manager.js',

					// events
					'<%= srcDir %>/javascripts/nimitz/events/events.js',
					'<%= srcDir %>/javascripts/nimitz/events/errors.js',
					'<%= srcDir %>/javascripts/nimitz/events/internal_events.js',
					'<%= srcDir %>/javascripts/nimitz/events/event_center.js',

					// external
					'<%= srcDir %>/javascripts/nimitz/external/xdm.js',

					// models
					'<%= srcDir %>/javascripts/nimitz/models/model.js',
					'<%= srcDir %>/javascripts/nimitz/models/base_model.js',
					'<%= srcDir %>/javascripts/nimitz/models/player/player_model.js',

					// reporting
					'<%= srcDir %>/javascripts/nimitz/reporting/reporter.js',

					// views
					'<%= srcDir %>/javascripts/nimitz/views/smart_view.js',
					'<%= srcDir %>/javascripts/nimitz/views/parent_view.js',
					'<%= srcDir %>/javascripts/nimitz/views/loading_animation/spinner.js',
					'<%= srcDir %>/javascripts/nimitz/views/player_view.js',

					// SM_Player shared (base), standalone player and module close
					'<%= srcDir %>/javascripts/nimitz/sm_player/sm_player.js'

				],
				dest: '<%= deployDir %>/javascripts/sm_player.js'
			},

			win8: {
				files: {
					'<%= deployDir %>/javascripts/win8.js': [ '<%= srcDir %>/javascripts/nimitz/win8/win8.js' ],
					'<%= deployDir %>/javascripts/win8console.js': [ '<%= srcDir %>/javascripts/nimitz/win8/win8console.js' ]
				}
			},

			winjs: {
				src: [ '<%= srcDir %>/javascripts/nimitz/win8/winjs.js' ],
				dest: '<%= deployDir %>/javascripts/winjs.js'
			},

			smraid: {
				src: [ '<%= srcDir %>/javascripts/nimitz/mraid/smraid.js' ],
				dest: '<%= deployDir %>/javascripts/smraid.js'
			},

			smraid_ext: {
				src: [ '<%= srcDir %>/javascripts/nimitz/mraid/smraid_ext.js' ],
				dest: '<%= deployDir %>/javascripts/smraid_ext.js'
			},

			pub: {
				options: {
					banner: "(function(){(typeof console === 'undefined' || typeof console.log === 'undefined')?console={log:function(){}}:console.log('----- PUB.JS v<%= pkg.version %> created: <%= grunt.template.today(\"isoDateTime\") %>')})();\n\n"
				},
				src: [ 
					'<%= srcDir %>/javascripts/third_party/postmessage.js', 
					'<%= srcDir %>/javascripts/pub.js' 
				],
				dest: '<%= deployDir %>/javascripts/pub.js'
			},

			pubSa: {
				options: {
					banner: "(function(){(typeof console === 'undefined' || typeof console.log === 'undefined')?console={log:function(){}}:console.log('----- PUB.JS v<%= pkg.version %> created: <%= grunt.template.today(\"isoDateTime\") %>')})();\n\n"
				},
				src: [ 
					'<%= srcDir %>/javascripts/pub_sa.js'
				],
				dest: '<%= deployDir %>/javascripts/pub_sa.js'
			},

			fingerprint: {
				options: {
					banner: "(function(){(typeof console === 'undefined' || typeof console.log === 'undefined')?console={log:function(){}}:console.log('----- SM_FP.JS v<%= pkg.version %> created: <%= grunt.template.today(\"isoDateTime\") %>')})();\n"
				},
				src: [
					'<%= srcDir %>/javascripts/nimitz/finger/fp_header.js',
					'<%= srcDir %>/javascripts/nimitz/finger/pd.js',
					'<%= srcDir %>/javascripts/nimitz/finger/md5.js',
					'<%= srcDir %>/javascripts/nimitz/finger/fp_footer.js'
				],
				dest: '<%= deployDir %>/javascripts/fp.js'
			}

		},
/////// MINIFICATION
		uglify: {
			// task docs: https://github.com/gruntjs/grunt-contrib-uglify

			options: {

				// banner inserted at top of the output file
				banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				preserveComments: false,
//				compress: true,
//				report: 'gzip'
				report: 'min'
			},

			sm_wrapper: {
				src: [ '<%= deployDir %>/javascripts/sm_wrapper.js' ],
				dest: '<%= deployDir %>/javascripts/sm_wrapper.min.js'
			},

			sm_app: {
				src: [ '<%= deployDir %>/javascripts/sm_app.js' ],
				dest: '<%= deployDir %>/javascripts/sm_app.min.js'
			},

			sm_player: {
				src: [ '<%= deployDir %>/javascripts/sm_player.js' ],
				dest: '<%= deployDir %>/javascripts/sm_player.min.js'
			},

			win8: {
				src: [ '<%= deployDir %>/javascripts/win8.js' ],
				dest: '<%= deployDir %>/javascripts/win8.min.js'
			},

			win8console: {
				src: [ '<%= deployDir %>/javascripts/winjs.js' ],
				dest: '<%= deployDir %>/javascripts/winjs.min.js'
			},

			winjs: {
				src: [ '<%= deployDir %>/javascripts/winjs.js' ],
				dest: '<%= deployDir %>/javascripts/winjs.min.js'
			},

			smraid: {
				src: [ '<%= deployDir %>/javascripts/smraid.js' ],
				dest: '<%= deployDir %>/javascripts/smraid.min.js'
			},

			smraid_ext: {
				src: [ '<%= deployDir %>/javascripts/smraid_ext.js' ],
				dest: '<%= deployDir %>/javascripts/smraid_ext.min.js'
			},

			pub: {
				src: [ '<%= deployDir %>/javascripts/pub.js' ],
				dest: '<%= deployDir %>/javascripts/pub.min.js'
			},

			pub_sa: {
				src: [ '<%= deployDir %>/javascripts/pub_sa.js' ],
				dest: '<%= deployDir %>/javascripts/pub_sa.min.js'
			},

			fingerprint: {
				src: [ '<%= deployDir %>/javascripts/fp.js' ],
				dest: '<%= deployDir %>/javascripts/fp.min.js'
			}
		},
/////// COPYING
		copy: {
			// task docs: https://github.com/gruntjs/grunt-contrib-copy
			playerIframe: {
				src: [ '<%= srcDir %>/sm_player_iframe.html' ],
				dest: '<%= deployDir %>/sm_player_iframe.html'
			},

			// legacy IMVU custom tag:
			pub_sa: {
				src: [ '<%= srcDir %>/pub_sa.html' ],
				dest: '<%= deployDir %>/pub_sa.html'
			},

			lp: {
				src: [ '<%= srcDir %>/lp.html' ],
				dest: '<%= deployDir %>/lp.html'
			},

			win8: {
				src: [ '<%= srcDir %>/win8.html' ],
				dest: '<%= deployDir %>/win8.html'
			},

			winjs: {
				src: [ '<%= srcDir %>/winjs.html' ],
				dest: '<%= deployDir %>/winjs.html'
			},

			// html: {
			// 	expand: true,
			// 	cwd: 'src/',
			// 	src: [ '**/*.html' ],
			// 	dest: '<%= deployDiv %>/'
			// }, 
			// 
			images: {
				files: [{
					expand: true,
					cwd: '<%= srcDir %>/images/',
					src: [ '**' ],
					dest: '<%= deployDir %>/images/'
				}]
			},

 			stylesheets: {
				files: [{
					expand: true, 
					cwd: '<%= srcDir %>/stylesheets/',
					src: [ '**' ],
					dest: '<%= deployDir %>/stylesheets'
				}]
			}
		},
/////// SYMLINK
		symlink: {
			// docs: https://npmjs.org/package/grunt-contrib-symlink
			expanded: {
				files: [{
					expand: true,
					cwd: '<%= deployDir %>/javascripts',
					src: ['*'],
					dest: '<%= deployDir %>/js'
				},
				{
					expand: true,
					cwd: '<%= deployDir %>/stylesheets',
					src: ['*'],
					dest: '<%= deployDir %>/css'
				}]
			}
		},
/////// WATCH 
		watch: {
			// task docs: https://github.com/gruntjs/grunt-contrib-watch

			scripts: {
				files: [ '<%= srcDir %>/javascripts/nimitz/**/*.js' ],
				tasks: [ 'setup', 'jshint', 'concat', 'uglify' ]
			},

			html: {
				files: [ 'src/*.html' ],
				tasks: [ 'copy:pub', 'copy:win8', 'copy:winjs' ]
			},

			images: {
				files: [ '<%= srcDir %>/images/**' ],
				tasks: [ 'copy:images' ]
			},

			stylesheets: {
				files: [ '<%= srcDir %>/stylesheets/**' ],
				tasks: [ 'copy:stylesheets' ]
			},

			jshint: {
				files: [ '<%= srcDir %>/javascripts/nimitz/**/*.js' ],
				tasks: [ 'setup', 'jshint' ]
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

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-symlink');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-connect');
	
	grunt.loadTasks('tasks/');

	grunt.registerTask('setup', ['gitCurrentBranch', 'smEnvironment']);

	grunt.registerTask('default', ['setup', 'jshint' ,'concat', 'uglify', 'copy', 'symlink']);
	grunt.registerTask('sm_wrapper', ['setup', 'concat:sm_wrapper', 'uglify:sm_wrapper', 'symlink']);
	grunt.registerTask('sm_app', ['setup', 'concat:sm_app', 'uglify:sm_app', 'symlink']);
	grunt.registerTask('sm_player', ['setup', 'concat:sm_player', 'uglify:sm_player', 'symlink']);
	grunt.registerTask('sm_pub', ['setup', 'concat:pub', 'uglify:pub', 'symlink']);
	grunt.registerTask('sm_pub_sa', ['setup', 'concat:pubSa', 'uglify:pubSa', 'symlink']);

};