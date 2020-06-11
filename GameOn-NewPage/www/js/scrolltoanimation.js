$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#nav1, #nav2, #nav4, #nav5").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({

        scrollTop: $(hash).offset().top-$("nav").outerHeight()-200
      }, 1000, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash-$("nav").outerHeight()-200;
      });
    } // End if
  });


   $("#nav3, #nav6").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({

        scrollTop: $(hash).offset().top-$("nav").outerHeight()-15
      }, 1000, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash-$("nav").outerHeight()-15;
      });
    } // End if
  });
 
});