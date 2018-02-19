(function ($) {
    "use strict";

    $(window).load(function () {

        function submitForm(type){
           console.log('type:',type)
        }
        $('#join').on('click', function(){
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
              $('.warningalert').show();
            }


        });
        $('#update').on('click', function(e){

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
              $('.warningalert').show();
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