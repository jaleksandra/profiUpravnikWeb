/*
--------------------------------------------------------------------------------------------------------
Sekcija za prikazivanje jos sadrzaja i za promenu teksta na istom dugmicu - Stranica "O nama"
--------------------------------------------------------------------------------------------------------

*/

//Promena teksta na dugmicima
$(document).ready(function () {
	$('#services > li.fade-in.two > button:nth-child(4)').click(function () {
		var $text = $(this).html();
		if ($text === "Opširnije") {
			$('#services > li.fade-in.two > button:nth-child(4)').html('Manje');
		} else {
			$('#services > li.fade-in.two > button:nth-child(4)').html('Opširnije');
		}
	});
});

$(document).ready(function () {
	$('#services > li.fade-in.two > button:nth-child(8)').click(function () {
		var $text = $(this).html();
		if ($text === "Opširnije") {
			$('#services > li.fade-in.two > button:nth-child(8)').html('Manje');
		} else {
			$('#services > li.fade-in.two > button:nth-child(8)').html('Opširnije');
		}
	});
});

//Prikazivanje skrivenog teskta
$(document).ready(function () {
	$('#services > li.fade-in.two > button:nth-child(4)').click(function () {
		$('#services > li.fade-in.two > div:nth-child(3)').slideToggle();
	});
});
$(document).ready(function () {
	$('#services > li.fade-in.two > button:nth-child(8)').click(function () {
		$('#services > li.fade-in.two > div:nth-child(7)').slideToggle();
	});
});

/*

--------------------------------------------------------------------------------------------------------
Kraj sekcije
--------------------------------------------------------------------------------------------------------

*/
