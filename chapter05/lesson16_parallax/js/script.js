$(function() {
  $("ul li a").click(function() {
    var page = $(this).html();

    $("#sections").animate({left:(page-1) * -700}, 300);


    $("body").css("background-position", (page - 1) * -20 + "px 100%");
    $("#bg1").css("background-position", (page - 1) * -150 + "px 100%");
    $("#bg2").css("background-position", (page - 1) * -700 + "px 100%");

    $(".current").removeClass("current");
    $(this).addClass("current")
    return false;
  });
});
