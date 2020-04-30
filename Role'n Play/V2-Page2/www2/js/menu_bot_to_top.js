$(document).bind('scroll', function () {
    if ($(window).scrollTop() > $(window).height()-$("#nav").outerHeight()) {
    	event.preventDefault()
    	$('#menu_logo').removeClass('hidden');
    	$('#nav').removeClass('sticky-bottom');
        $('#nav').addClass('fixed-top');
    }
    else{


    	$('#menu_logo').addClass('hidden');
    	$('#nav').removeClass('fixed-top');
        $('#nav').addClass('sticky-bottom');
    }

});

