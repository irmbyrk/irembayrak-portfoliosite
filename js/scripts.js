function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

//for hambuger menu Animation

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#navbar').css('background','rgba(255, 255, 255, 0)');

} else {
$('#navbar').css('background','#ffefc2');
}
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#about-navbar').css('background','rgba(255, 255, 255, 0)');
} else {
$('#about-navbar').css('background','white');
}
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#pati-navbar').css('background','rgba(255, 255, 255, 0)');
} else {
$('#pati-navbar').css('background','#ee8761');
}
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 101) {
$('#vocapp-navbar').css('background','rgba(255, 255, 255, 0)');
} else {
$('#vocapp-navbar').css('background','#F4FAD2');
}
});


// $(document).ready(function() {
//   $(".reverse").click(function() {
//     $(".").toggleClass("is-active");
//   });
// });
//
// window.onscroll = function() {
//   scrollFunction()
// };
//
// function scrollFunction() {
//   if (window.innerWidth >= 640) {
//     if (document.body.scrollTop > 101 || document.documentElement.scrollTop > 101) {
//       document.getElementById("navbar").style.padding = "10px 0 3px";
//       document.getElementById("navbar").style.boxShadow = "0px 0px 30px -6px rgba(148,148,148,1)";
//       document.getElementById("logo").style.maxWidth = "60px";
//       document.getElementById("menuindex").style.fontSize = "16px";
//       document.getElementById("menuabout").style.fontSize = "16px";
//       document.getElementById("menucontact").style.fontSize = "16px";
//       document.getElementById("shrink").style.margin = "0.5em 0";
//     } else {
//       document.getElementById("navbar").style.padding = "20px 0 13px";
//       document.getElementById("navbar").style.boxShadow = "0px 0px 30px -6px rgba(148,148,148,1)";
//       document.getElementById("logo").style.maxWidth = "75px";
//       document.getElementById("menuindex").style.fontSize = "18px";
//       document.getElementById("menuabout").style.fontSize = "18px";
//       document.getElementById("menucontact").style.fontSize = "18px";
//       document.getElementById("shrink").style.margin = "1em 0";
//     }
//   }
// }
