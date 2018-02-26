(function ($) {
    "use strict";

    $(window).load(function () {

        function submitForm(type){
           console.log('type:',type)
        }
        var $form = $('#mc-embedded-subscribe-form');

        if ( $form.length > 0 ) {
            $form.submit(function () {
                $('#mce-success-response').hide();
                $('#mce-error-response').hide();
                if ( event ) event.preventDefault();
                var email2 = $('#mce-EMAIL').val();
                console.log($form.serialize());
                // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
                if ( validateEmail(email2) ) {
                    $.ajax({
                        type: 'post',
                        url: $form.attr('action'),
                        data: $form.serialize(),
                        cache       : false,
                        dataType    : 'json',
                        contentType: "application/json; charset=utf-8",
                        error       : function(err) {  },
                        success     : function(data) {
                            if (data.result != "success") {
                                $('#mce-error-response').html('not-ok').show();
                                console.log(data);
                            } else {
                                // It worked, carry on...
                                console.log(data);
                                $('#mce-success-response').html('ok').show();
                            }
                        }
                    });
                }
            });
        }
        $('#join').on('click', function(){
            $('.warningalert').hide();
            // redirect to kyc.
            if (validate())
            {
              var windowurl = new URL(window.location.href);
              var ref = windowurl.searchParams.get("ref");
              let data = {
                Name: $('#Name').val(),
                Email: $('#Email').val(),
                phone: $('#phone').val()
              };

              let url = 'https://kyc.bigtk.io/verification?ref=' +ref+'&data='+encodeURIComponent(JSON.stringify(data))
              console.log('url:',url);
              window.location = url;
            }
            else {

                if(($('#Name').val() == '') && ($('#Email').val() == '' )){
                    $('.warningalert').html('Your name and email is required.');
                    $('.warningalert').show();
                }
                else {
                    if ($('#Name').val() == ''){
                        $('.warningalert').html('Your name is required.');
                        $('.warningalert').show();
                    }
                    else {
                        if($('#Email').val() == ''){
                            $('.warningalert').html('Your email address is required.');
                            $('.warningalert').show();
                        }
                        else{

                            $('.warningalert').html('Your email are invalid. Please try again.');
                            $('.warningalert').show();
                        }
                    }
                }
            }


        });
        $('#update').on('click', function(e){

            $('.warningalert').hide();
            if (validate())
              {
                let data = {
                  Name: $('#Name').val(),
                  Email: $('#Email').val(),
                  phone: $('#phone').val(),
              };
              //
              console.log('data:', data);

              $.ajax({
                  type: 'POST',
                  data: JSON.stringify(data),
                  contentType: 'application/json',
                  url: 'https://kycapi.bigtk.io/api/app/ico/addForm/email/en-US',
                  success: function (data) {

                      if (data.AuthError)
                      {
                          console.log('warning : ',data.message);
                      }else{
                          console.log('success');
                          console.log(JSON.stringify(data));
                          $('.alert').show();
                          $('.warningalert').hide();
                      }

                  },
                  error: function (data) {
                      console.log('error');
                      console.log(JSON.stringify(data));
                  }
              });
            }
            else {


                if(($('#Name').val() == '') && ($('#Email').val() == '' )){
                    $('.warningalert').html('Your name and email is required.');
                    $('.warningalert').show();
                }
                else {
                    if ($('#Name').val() == ''){
                        $('.warningalert').html('Your name is required.');
                        $('.warningalert').show();
                    }
                    else {
                        if($('#Email').val() == ''){
                            $('.warningalert').html('Your email address is required.');
                            $('.warningalert').show();
                        }
                        else{

                            $('.warningalert').html('Your email are invalid. Please try again.');
                            $('.warningalert').show();
                        }
                    }
                }
            }
        });
        function validate(){
           var name = $('#Name').val();
           var email = $('#Email').val();

           if(name && validateEmail(email))
           {
            return true;
           }
           else{
            return false;
           }
        }

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

    });
})(jQuery);

