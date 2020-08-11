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

window.onscroll = function() {scrollFunction()};

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#navbar').css('background','rgba(255, 255, 255, 0.4)');
} else {
$('#navbar').css('background','#ffedbc');
}
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#about-navbar').css('background','rgba(255, 255, 255, 0.4)');
} else {
$('#about-navbar').css('background','white');
}
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#pati-navbar').css('background','rgba(255, 255, 255, 0.4)');
} else {
$('#pati-navbar').css('background','#ee8761');
}
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#vocapp-navbar').css('background','rgba(255, 255, 255, 0.4)');
} else {
$('#vocapp-navbar').css('background','#F4FAD2');
}
});

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.font-weight = "700";
//     document.getElementById("logo").style.font-weight = "700";
//   } else {
//     document.getElementById("navbar").style.font-weight = "700";
//     document.getElementById("logo").style.font-weight = "700";
//   }
// }
