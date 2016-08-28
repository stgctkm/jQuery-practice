$(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $("header").addClass("small");
    } else {
      $("header").removeClass("small");
    }
  });

});
