$(function(){
  $("#navi").children("li").hover(function() {
    //$(this).children("ul").slideToggle();
    $(this).children("ul").stop().slideToggle();
  });
});
