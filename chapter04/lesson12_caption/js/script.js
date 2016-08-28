$(function(){
  $("li").hover(function() {
    var caption = $(this).children("img").attr("alt");
    $(this).append("<div><p>" + caption + "</p></div>");

    $(this).children("div").stop().fadeIn();

    $(this).children("div").children("p").stop().animate({top:0}, 300);
  }, function() {
    $(this).children("div").stop().fadeOut();

    $(this).children("div").children("p").stop().animate({top:10}, 300, function() {
      $(this).parent("div").remove();
    });

  });
});
