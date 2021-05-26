/*

--------------------------------------------------------------------------------------------------------
Sekcija za prikazivanje jos sadrzaja i za promenu teksta na istom dugmicu - "Stranica Usluge"
--------------------------------------------------------------------------------------------------------

*/

//Promena teksta na dugmicima
$(document).ready(function () {
	$('#services > li.fade-in.one > button').click(function () {
		var $text = $(this).html();
		if ($text === "Opširnije") {
			$('#services > li.fade-in.one > button').html('Manje');
		} else {
			$('#services > li.fade-in.one > button').html('Opširnije');
		}
	});
});

$(document).ready(function () {
	$('#services > li.fade-in.two > button').click(function () {
		var $text = $(this).html();
		if ($text === "Opširnije") {
			$('#services > li.fade-in.two > button').html('Manje');
		} else {
			$('#services > li.fade-in.two > button').html('Opširnije');
		}
	});
});

$(document).ready(function () {
	$('#services > li.fade-in.three > button').click(function () {
		var $text = $(this).html();
		if ($text === "Opširnije") {
			$('#services > li.fade-in.three > button').html('Manje');
		} else {
			$('#services > li.fade-in.three > button').html('Opširnije');
		}
	});
});

//Prikazivanje skrivenog teskta
$(document).ready(function () {
	$('#services > li.fade-in.one > button').click(function () {
		$('#services > li.fade-in.one > p:nth-child(3)').slideToggle();
	});
});
$(document).ready(function () {
	$('#services > li.fade-in.two > button').click(function () {
		$('#services > li.fade-in.two > p:nth-child(3)').slideToggle();
	});
});
$(document).ready(function () {
	$('#services > li.fade-in.three > button').click(function () {
		$('#services > li.fade-in.three > p:nth-child(3)').slideToggle();
	});
});

/*

--------------------------------------------------------------------------------------------------------
Kraj sekcije
--------------------------------------------------------------------------------------------------------
*/
