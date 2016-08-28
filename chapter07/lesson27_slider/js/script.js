$(function(){
  var dir = -1; //-1 to left, 1 to right
  var interval = 3000;
  var duration = 700;
  var timer;

  // 左右にスライドできるように並び替え
  $("#slide ul").prepend($("#slide li:last-child"));
  $("#slide ul").css("left", -1000);


  var slideTimer = function() {
    if (dir == -1) {
      $("#slide ul").animate({"left": "-=1000px"}, duration, function() {
        $(this).append($("#slide li:first-child"));
        $(this).css("left", -1000);
      });
    } else {
      $("#slide ul").animate({"left": "+=1000px"}, duration, function() {
        $(this).prepend($("#slide li:last-child"));
        $(this).css("left", -1000);
        dir = -1;
      });
    }
  };

  timer = setInterval(slideTimer, interval);

  $("#prevBtn").click(function() {
    dir = 1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    slideTimer();
  });

  $("#nextBtn").click(function() {});
    dir = -1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    slideTimer();
});
