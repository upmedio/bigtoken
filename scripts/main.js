jQuery(document).ready(function($) {
    $(document).click(function (e) {
        var $tgt = $(e.target);
        if ($tgt.closest(".text_map_area").length || $tgt.closest("#mapname").length) {
        }
        else{

            $('.text_map_area').hide();
        }

    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    if($(window).scrollTop() === 0) {
        $(".main-header").removeClass('scrolling');
    }
    else{
        $(".main-header").addClass('scrolling');
    }
    $('.card-img-top').click(function(){
        var data = $(this).data('desc');
        $('.descriptions > div').hide();
        $('#'+data).show();
    });
    var map = document.getElementById("mapname");
    $('body').on('click','#mapname', function(e) {
        console.error(e.target);
        callAction(e.target);
    });
    function callAction(area) {
        $('.text_map_area').hide();
        $('#'+area.dataset.map).show();
    }
    $(  "#myNavbar a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

    });
	$(document).scroll(function() {
        if($(window).scrollTop() === 0) {
            $(".main-header").removeClass('scrolling');
        }
        else{
            $(".main-header").addClass('scrolling');
        }
    });
});
