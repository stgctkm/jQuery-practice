$(function(){
  $("td").hover(function(){
    $(this).parent().addClass("target");

    var index = $(this).index();
    index++;
    $("td:nth-child(" + index + ")").addClass("target");
  }, function(){
    $(".target").removeClass("target");
    // $(this).parent().removeClass("target");
    // var index = $(this).index();
    // index++;
    // $("td:nth-child(" + index + ")").removeClass("target");
  })
});
