$(function(){
  $(window).scroll(function() {
    for (var i = 1; i <= 4; i++) {
      if ($("section:nth-child(" + i + ")").offset().top < $(this).scrollTop() + 300) {
        $("nav li").removeClass("current");
        $("nav li:nth-child(" + i + ")").addClass("current");
      }
    }
  });
});
