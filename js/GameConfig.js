// Game Config Global
var GameConfig = {

    PROD_ENV: false,

    LOG_LEVEL: 4,   // NONE = 0
                    // ERROR = 1
                    // WARNING = 2
                    // INFO = 3
                    // VERBOSE = 4

    ORIENTATION: 'landscape',    // portrait|landscape
                                // Portrait orientation games will use a canvas size of width = 640px and height = 832px
                                // Landscape orientation games will use a canvas size of width = 960px and height = 536px

    CANVAS_ID: 'game_canvas',
    REORIENT_ID: 'wrong_orientation',
    PRELOADER_DIV: 'preloader',

    // CONSTRUCTOR: 'TestGame01',
	CONSTRUCTOR: 'KekeGame',
    SOURCE: [
		"js/game/KekeGame.js",
		"js/game/keke/screens/Loading.js",
		"js/game/keke/screens/Menu.js",
		"js/game/keke/screens/Game.js"

		// "js/game/TestGame01.js",
		// "js/game/space01/screens/Loading.js",
		 // "js/game/space01/screens/Menu.js",
        // "js/game/space01/screens/Game.js"
    ],

    GAME_ID: 'example',
    // TITLE: 'Test Game 01',
	TITLE: 'Keke vs. Caterpillars',
    HOST: 'http://games.tresensa.com',
    PATH: '/empty-game/',
    VERSION: '1.0.0',

    CDN: {
        ENABLED: false
    },

    ADS: {
        GAMEOVER_PLACEMENT_ID: '',
        REPLAY_PLACEMENT_ID: ''
    },

    TGL: {
        VERSION: '1.0.8'
    },

    TGS: {
        ENABLED: true,
        VERSION: '0.2.47'
    },

    TGE: {
        ENABLED: true,
        VERSION: '1.0.5'
    },

    GoogleAnalytics: {
        ENABLED:    true,
        QA_ID:     'UA-29301358-8',
        PROD_ID:   'UA-29301358-4',
        NATIVE_ID: '',
        LABEL: 'Test Game 01'
    },

    Quantcast: {
        ENABLED: false
    },

    Playnomics: {
        ENABLED: false
    }
};