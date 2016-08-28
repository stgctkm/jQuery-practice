$(function(){
  $("a").click(function() {
    $("body").append('<div id="bg">');

    $("body").append('<div id="photo">');

    $("#bg").hide();
    $("#photo").hide();

    $("#photo").html("<img>")
    $("#photo img").attr("src", $(this).attr("href"));

    $("#photo img").attr("height", 420);
    $("#photo img").attr("width", 640);
    $("#photo img").attr("alt", "photo");


    $("#bg").fadeIn();
    $("#photo").fadeIn(1000);

    $("#bg").click(function(){
      $("#bg").fadeOut(2000, function() {
        $(this).remove();
      });
      $("#photo").fadeOut(function() {
        $(this).remove();
      });
    });

    return false;
  });
});
