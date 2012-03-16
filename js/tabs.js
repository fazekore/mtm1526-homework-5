$(document).ready(function() {
	
	$('a').on('click', function(ev) {
		$.ajax({
			cache: true
		});
	});
	
	$('.jordan').on('click', function(ev) {
		$('.tabfill').load('jordan.html');
	});
	
	$('.maravich').on('click', function(ev) {
		$('.tabfill').load('maravich.html');
	});
	
	$('.thomas').on('click', function(ev) {
		$('.tabfill').load('thomas.html');
	});
	
	$('.olajuwon').on('click', function(ev) {
		$('.tabfill').load('olajuwon.html');	
	});
	
	
	//$('.target').hide();
	
});