$(function(){
  var navPosition = $("nav").offset().top;

  $(window).scroll(function() {
    // console.log($(window).scrollTop());
    if ($(this).scrollTop() > navPosition) {
      $("nav").css("position", "fixed");
    } else {
      $("nav").css("position", "static");
    }
  });
});
