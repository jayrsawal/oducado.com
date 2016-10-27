var i = 0;

$(document).ready(function() {
    setInterval(function() { changeCaption(); }, 2000);
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar-custom').addClass('shrink');
    $('.navbar-brand').addClass('shrink-logo');
  } else {
    $('.navbar-custom').removeClass('shrink');
    $('.navbar-brand').removeClass('shrink-logo');
  }
});

function changeCaption() {
    var caption = ["IT CONSULTANT", "COMP. SCIENTIST", "TECH ENTHUSIAST", "FULL-TIME GEEK", "GAMER", "OTAKU", "EXERCISE IS FUN", "BUT I PREFER FOOD"];
    if(i == caption.length-1) {
        i = 0;
    } else {
        i++;
    }
    $("#header-caption").html(caption[i]);
}