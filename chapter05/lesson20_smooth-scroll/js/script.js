$(function(){
  $("a[href*=#]:not([href=#])").click(function() {
    var offset = $($(this).attr("href")).offset().top;

    $("body").animate({"scrollTop" : offset -70}, 500);

    return false;
  });
});
