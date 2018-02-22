jQuery(document).ready(function ($) {

  var now = new Date();
  var launch = new Date("Februrary 23, 2018 15:10:00");

  console.log('Server time:' + now);

  if( now < launch ){
    console.log( "Not started yet" );
    $('.before-launch').css('display','block');
    $('.after-launch').css('display','none');
  }else{
    console.log( "Launched" );
    $('.before-launch').css('display','none');
    $('.after-launch').css('display','block');
  }

});
