jQuery(document).ready(function ($) {

    $('#getting-started').countdown('2018/02/27 7:00:00', function(event) {
    //$('#getting-started').countdown('2018/02/27 07:00:00', function(event) {
      $(this).html(event.strftime('<div class="number-wrapper"><div class="number">%n</div><div class="unit">Days</div></div><span>:</span><div class="number-wrapper"><div class="number">%H</div><div class="unit">Hours</div></div><span>:</span><div class="number-wrapper"><div class="number">%M</div><div class="unit">Minutes</div></div><span>:</span><div class="number-wrapper"><div class="number">%S</div><div class="unit">Seconds</div></div>'));
    });

    $(".what__video-container").slick({
        centerMode: !0,
        centerPadding: "25rem",
        slidesToShow: 1,
        nextArrow: '<div class="slick-arrow slick-arrow-next"></div>',
        prevArrow: '<div class="slick-arrow slick-arrow-prev"></div>',
        responsive: [{
            breakpoint: 768,
            settings: {
                centerMode: !1,
                swipe: !0,
                nextArrow: '<div class="slick-arrow-icon slick-arrow-icon-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></div>',
                prevArrow: '<div class="slick-arrow-icon slick-arrow-icon-prev"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></div>'
            }
        }]
    }).on('afterChange',function(e,o){
        console.log('slide change');
        //on change slide = do action
        $('iframe').each(function(){
            console.log('stop iframe');
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        });
    });

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

    /*
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    */

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

      $('.btn-navbar').click(); //bootstrap 2.x
      $('.navbar-toggle').click() //bootstrap 3.x by Richard

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

function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i=0; i<vidDefer.length; i++) {
        if(vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
        } } }
window.onload = init;
