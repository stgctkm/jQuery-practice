$(function(){
  $("header li a").click(function() {
    $("body").removeClass();
    var size = $(this).html();

    if (size == "S") {
      $("body").addClass("fontSmall");
    } else if (size == "M") {
      $("body").addClass("fontMedium");
    } else {
      $("body").addClass("fontLarge");
    }
    return false;
  });
});
