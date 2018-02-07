jQuery(document).ready(function ($) {


    $('body').on('click', '#ChiangMai_med', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: media_ChiangMai,
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    });
    $('body').on('click', '#Chaweng', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: media_Chaweng,
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    });
    $('body').on('click', '#send_later', function (event) {
        event.preventDefault();
        $('.form-message').show();
    });
    $('body').on('click', '#Liam', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: media_Liam,
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    });
    $('body').on('click', '#khatku_m', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: media_khatku,
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    });

    $('body').on('click', '#natien_m', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: media_natien,
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    });
    $('body').on('click', '#krabi_m', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: media_krabi,
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    });



    $('.tl-item').click(function () {
        if ($(window).width() < 768) {
            $('.tl-item').removeClass('active');
            $(this).addClass('active');
        }
    });
    $('body').on('click', '#binh_med', function (event) {
        event.preventDefault();
        $.magnificPopup.open({
            items: media_BinhDong,
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    });
    $('#contact_us').submit(function(event) {

        var data = $(this).serializeArray();

        $('#message_block').html('<p>Thank you</p>');
        $('#message_block').show();


        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
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
