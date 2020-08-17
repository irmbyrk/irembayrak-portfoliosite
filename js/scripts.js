function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

//for hambuger menu Animation

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

//header styling

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#navbar').css('background','rgba(255, 255, 255, 0.8)');
} else {
$('#navbar').css('background','#ffefc2');
}
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#about-navbar').css('background','rgba(255, 255, 255, 0.8)');
} else {
$('#about-navbar').css('background','white');
}
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#pati-navbar').css('background','rgba(255, 255, 255, 0.8)');
} else {
$('#pati-navbar').css('background','#ee8761');
}
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#vocapp-navbar').css('background','rgba(255, 255, 255, 0.8)');
} else {
$('#vocapp-navbar').css('background','#F4FAD2');
}
});


$(document).ready(function(){
  $(".hamburger").click(function(){
    $('header').css ('background','rgba(255, 255, 255, 1)');
  });
});
