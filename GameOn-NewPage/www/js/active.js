$(document).ready(function() {
$("header nav a, #carousel svg").click(function () {
    $("header nav a, #carousel svg").removeClass("active");
    $(this).addClass("active");   
});
});