$( document ).ready(function() {
 
$('#phrases .phrases:gt(0)').hide();
setInterval(
    function(){
        $("#phrases > :first-child").fadeOut(1000, function() {
            $(this).next('.phrases').fadeIn(1000).end().appendTo('#phrases')
        });
    }, 6000
);
 
});