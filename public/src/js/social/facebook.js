/*
	<!-- FACEBOOK -->
    <div id="fb-root"></div>
	<!-- END FB script-->

	<!-- LIKE
		<div id="fbLike">
			<div class="fb-like" data-send="true" data-width="450" data-show-faces="true"></div>
		</div>
		-->
		<!-- share -->
<!--
		<div id="fbShare" class="fb-share-button" data-href="http://www.polyworksgames.com/games/keke2/" data-type="button_count"></div>	
-->
*/
window.fbAsyncInit = function() {
	FB.init({
		appId: '371443576332187',
		status: true,
		xfbml: true
	});
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/all.js";
	fjs.parentNode.insertBefore(js, fjs);
} (document, 'script', 'facebook-jssdk'));
