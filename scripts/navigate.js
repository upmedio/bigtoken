function navigateFindoutmore() {
  var url = new URL(window.location.href);
  var ref = url.searchParams.get("ref");
  if (ref){
    window.open("findoutmore.html?ref="+ ref, "_self");
  } else {
    window.open("findoutmore.html", "_self");
  }
}

function navigateJoinICO() {
  var url = new URL(window.location.href);
  var ref = url.searchParams.get("ref");
  if (ref){
    window.open("join-ico.html?ref="+ ref, "_self");
  } else {
    window.open("join-ico.html", "_self");
  }
}

function navigateHome() {
  var url = new URL(window.location.href);
  var ref = url.searchParams.get("ref");
  if (ref){
    window.open("/?ref="+ ref, "_self");
  } else {
    window.open("/", "_self");
  }

}

function navigateDynamic(point) {
  var url = new URL(window.location.href);
  var ref = url.searchParams.get("ref");

  if (ref){
    window.open("/?ref=" + ref + point, "_self");
  } else {
    window.open("/" + point, "_self");
  }
}
