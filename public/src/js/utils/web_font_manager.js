PWG.WebFontManager = (function() {
	
	var webFontManager = {
		init: function(webFonts) {
			PWG.Utils.each(
				webFonts,
				function(webFont, key) {
					switch(key) {
						case 'google':
						this.initGoogle(webFont);
						break;
						
						default: 
						trace('WARNING: unknown webFont = ' + webFont);
						break;
					}
				},
				this
			);
		},
		
		initGoogle: function(families) {
			trace('WebFontManager/initGoogle, families: ', families);
			WebFontConfig = {
		    // google: { families: [ 'Sue+Ellen+Francisco::latin', 'Smythe::latin', 'Waiting+for+the+Sunrise::latin' ] }
		    google: { families: families }
		  };
		  (function() {
		    var wf = document.createElement('script');
		    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		    wf.type = 'text/javascript';
		    wf.async = 'true';
		    var s = document.getElementsByTagName('script')[0];
		    s.parentNode.insertBefore(wf, s);
		  })(); 
		  
		}
	}
	
	return webFontManager;
}());