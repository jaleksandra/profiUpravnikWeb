/*

--------------------------------------------------------------------------------------------------------
Sekcija za funkcionalnost menija - Sve stranice
--------------------------------------------------------------------------------------------------------

*/

$('span.nav-btn').click(function () {
	$('header nav ul').slideToggle();
});

$(window).resize(function () {
	if ($(window).width() > 520) {
		$('header nav ul').removeAttr('style');
	}
});

/*

--------------------------------------------------------------------------------------------------------
Kraj sekcije
--------------------------------------------------------------------------------------------------------

*/