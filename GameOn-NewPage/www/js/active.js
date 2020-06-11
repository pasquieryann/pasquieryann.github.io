$(document).ready(function() {
	$("header nav a").click(function () {
		$("header nav a").removeClass("active");
		$(this).addClass("active");   
	});


	$("#carousel svg").click(function () {
			$("#carousel svg").removeClass("active");
			$(this).addClass("active");   
	});

});



