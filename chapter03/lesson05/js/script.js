$(function(){
  //document.addEventListener("click", function() {
  //    $("ul").slideToggle();
  //  }, false);
  $("button").on("click", function() {
    $("ul").slideToggle();
  });

  $("button").click(function() {
    $("ul").slideToggle(30000);
  });
});
