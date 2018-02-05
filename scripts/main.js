jQuery(document).ready(function ($) {
    var media_ChiangMai = [{
        src: '/images/locations/ChiangMai/IMG_4816.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4817.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4818.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4819.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4820.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4821.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4822.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4823.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4824.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4825.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4855.JPG'
    }, {
        src: '/images/locations/ChiangMai/IMG_4856.JPG'
    }];

    $('body').on('click', '#media1', function () {
        $.magnificPopup.open({
            items: media_ChiangMai,

            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
            },
            type: 'image'
        });
    });
    $(document).click(function (e) {
        var $tgt = $(e.target);
        if ($tgt.closest(".text_map_area").length || $tgt.closest("#mapname").length) {
        }
        else {

            $('.text_map_area').hide();
        }

    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    if ($(window).scrollTop() === 0) {
        $(".main-header").removeClass('scrolling');
    }
    else {
        $(".main-header").addClass('scrolling');
    }
    $('.card-img-top').click(function () {
        var data = $(this).data('desc');
        $('.descriptions > div').hide();
        $('#' + data).show();
    });
    var map = document.getElementById("mapname");
    $('body').on('click', '#mapname', function (e) {
        callAction(e.target);
    });

    function callAction(area) {
        $('.text_map_area').hide();
        $('#' + area.dataset.map).show();
    }

    $("#myNavbar a").on('click', function (event) {

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
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

    });
    $(document).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $(".main-header").removeClass('scrolling');
        }
        else {
            $(".main-header").addClass('scrolling');
        }
    });
});
