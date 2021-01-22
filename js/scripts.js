function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

//for hamburger menu Animation

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
});

$(document).ready(function() {
  $(".reverse").click(function() {
    $(".hamburger").toggleClass("is-active");
  });
});

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (window.innerWidth >= 640) {
    if (document.body.scrollTop > 101 || document.documentElement.scrollTop > 101) {
      document.getElementById("navbar").style.padding = "10px 0 3px";
      document.getElementById("navbar").style.boxShadow = "0px 0px 10px -6px rgba(148,148,148,1)";
      document.getElementById("logo").style.maxWidth = "60px";
      document.getElementById("menuindex").style.fontSize = "16px";
      document.getElementById("menuabout").style.fontSize = "16px";
      document.getElementById("menucontact").style.fontSize = "16px";
      document.getElementById("shrink").style.margin = "0.5em 0";
    } else {
      document.getElementById("navbar").style.padding = "20px 0 13px";
      document.getElementById("navbar").style.boxShadow = "0px 0px 1px -6px rgba(148,148,148,1)";
      document.getElementById("logo").style.maxWidth = "75px";
      document.getElementById("menuindex").style.fontSize = "18px";
      document.getElementById("menuabout").style.fontSize = "18px";
      document.getElementById("menucontact").style.fontSize = "18px";
      document.getElementById("shrink").style.margin = "1em 0";
    }
  }
}
