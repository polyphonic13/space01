var domConfig = {
	scripts: [
	{
		name: 'phaser',
		url: '//polyworksgames.com/games/js/lib/phaser-1.1.3.js'
	}
	],
	head: {
		parentEl: 'head',
		elements: [
		{
			type: 'meta',
			attrs: {
				property: 'og:title',
				content: 'keke and the grey expanse' 
			}
		},
		{
			type: 'meta',
			attrs: {
				property: 'og:description',
				content: 'keke enters a strange new land without color' 
			}
		},
		{
			type: 'meta',
			attrs: {
				property: 'og:url',
				content: 'http://www.polyworksgames.com/games/keke2/' 
			}
		},
		{
			type: 'meta',
			attrs: {
				property: 'og:image',
				content: 'http://www.polyworksgames.com/games/keke2/images/keke_posed02.png' 
			}
		},
		{
			type: 'meta',
			attrs: {
				property: 'og:image:width',
				content: '512' 
			}
		},
		{
			type: 'meta',
			attrs: {
				property: 'og:image:height',
				content: '512' 
			}
		},
		{
			type: 'meta',
			attrs: {
				property: 'og:site_name',
				content: 'PWG Games' 
			}
		},
		{
			type: 'meta',
			attrs: {
				property: 'og:type',
				content: 'games' 
			}
		},
		{
			type: 'meta',
			attrs: {
				property: 'fb:app_id',
				content: '371443576332187' 
			}
		},
		{
			type: 'link',
			attrs: {
				rel: 'canonical',
				href: 'http://www.polyworksgames.com/games/keke2/'
			}
		},
		{
			type: 'link',
			attrs: {
				rel: 'stylesheet',
				type: 'text/css',
				href: 'css/keke.css'
			}
		}]
	},
	body: {
		elements: [
		{
			type: 'div', 
			attrs: {
				id: 'fb-root'
			}
		},
		{
			type: 'div', 
			attrs: {
				id: 'loadingHolder'
			}
		},
		{
			type: 'div', 
			attrs: {
				id: 'gameContainer'
			}
		},
		{
			type: 'div', 
			attrs: {
				id: 'socialButtons'
			}
		},
		{
			type: 'div', 
			attrs: {
				id: 'iphoneTip'
			},
			className: 'gameText1 mediumFont',
			html: 'to enter fullscreen, rotate to portrait then back to landscape'
		},
		{
			type: 'div', 
			attrs: {
				id: 'adContainer'
			}
		},
		{
			type: 'div',
			attrs: {
				id: 'endScreenContainer'
			}
		},
		{
			type: 'div', 
			attrs: {
				id: 'orientationMessage'
			}
		}
		]
	}
};

